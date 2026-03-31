import fs from "node:fs";
import path from "node:path";
import { AIMessage, ToolMessage } from "@langchain/core/messages";
import type { StructuredToolInterface } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import {
	type BackendFactory,
	type BackendProtocol,
	FilesystemBackend,
	type SandboxBackendProtocol,
	createDeepAgent,
	createSkillsMiddleware,
} from "deepagents";
import {
	createMiddleware,
	modelCallLimitMiddleware,
	toolCallLimitMiddleware,
	toolRetryMiddleware,
} from "langchain";
import {
	type LlmProvider,
	type ResolvedProviderConfig,
	resolveProviderConfig,
} from "./llm-provider-adapter.js";
import { mcpManager } from "./mcp-manager.js";

const AGENT_COMPLETION_CONTRACT = [
	"执行任务时请遵循以下规则：",
	"1) 不要只给计划，必须完成用户要求的最终交付（如脚本、答案、结论）。",
	"2) 使用工具后，要根据工具结果继续推进，直到任务完成或遇到明确阻塞。",
	"3) 只有在任务完成、或缺少必要输入/权限时才结束；若阻塞，需明确说明最小补充信息。",
	"4) 如果执行写代码任务，优先产出可运行文件，并在可行时通过执行结果验证。",
	"5) 避免重复调用同一检索工具；当信息已足够时，立即给出最终答案。",
	"6) 若同一检索工具连续两次返回重叠信息，停止检索并开始整理最终交付。",
].join("\n");

const TOOL_NAME_ALIASES: Record<string, string> = {
	create_file: "write_file",
};

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

function normalizeMessageContent(value: unknown): string | unknown[] {
	if (typeof value === "string") {
		return value;
	}

	return Array.isArray(value) ? value : [];
}

function normalizeAiMessageLike(value: unknown): unknown {
	if (AIMessage.isInstance(value) || !isRecord(value)) {
		return value;
	}

	if (
		value.type !== "ai" &&
		!("content" in value) &&
		!("tool_calls" in value) &&
		!("invalid_tool_calls" in value)
	) {
		return value;
	}

	return new AIMessage({
		content: normalizeMessageContent(value.content) as never,
		tool_calls: Array.isArray(value.tool_calls) ? value.tool_calls : [],
		invalid_tool_calls: Array.isArray(value.invalid_tool_calls) ? value.invalid_tool_calls : [],
		additional_kwargs: isRecord(value.additional_kwargs) ? value.additional_kwargs : {},
		response_metadata: isRecord(value.response_metadata) ? value.response_metadata : {},
		usage_metadata: isRecord(value.usage_metadata) ? (value.usage_metadata as never) : undefined,
		...(typeof value.id === "string" ? { id: value.id } : {}),
		...(typeof value.name === "string" ? { name: value.name } : {}),
		...(Array.isArray(value.contentBlocks) ? { contentBlocks: value.contentBlocks } : {}),
	} as never);
}

function wrapModelLike<T>(value: T): T {
	if (!isRecord(value) || value.__nanoAgentWrappedModel === true) {
		return value;
	}

	return new Proxy(value, {
		get(target, prop, _receiver) {
			if (prop === "__nanoAgentWrappedModel") {
				return true;
			}

			const current = Reflect.get(target, prop, target);
			if (typeof current !== "function") {
				return current;
			}

			if (prop === "invoke") {
				return async (...args: unknown[]) =>
					normalizeAiMessageLike(await current.apply(target, args));
			}

			if (prop === "bindTools" || prop === "withConfig" || prop === "withStructuredOutput") {
				return (...args: unknown[]) => {
					const result = current.apply(target, args);
					if (result instanceof Promise) {
						return result.then((resolved) => wrapModelLike(resolved));
					}
					return wrapModelLike(result);
				};
			}

			return current.bind(target);
		},
	}) as T;
}

function parsePositiveIntegerSetting(
	settings: Record<string, string> | undefined,
	key: string,
): number | undefined {
	const raw = settings?.[key];
	if (typeof raw !== "string" || raw.trim().length === 0) {
		return undefined;
	}

	const parsed = Number(raw);
	if (!Number.isFinite(parsed) || parsed <= 0 || !Number.isInteger(parsed)) {
		return undefined;
	}

	return parsed;
}

function parseToolLimitExitBehavior(
	settings: Record<string, string> | undefined,
): "continue" | "error" | "end" {
	const raw = settings?.agent_tool_call_limit_exit_behavior?.trim().toLowerCase();
	if (raw === "error" || raw === "end" || raw === "continue") {
		return raw;
	}
	return "continue";
}

function parseModelLimitExitBehavior(
	settings: Record<string, string> | undefined,
): "error" | "end" {
	const raw = settings?.agent_model_call_limit_exit_behavior?.trim().toLowerCase();
	if (raw === "error" || raw === "end") {
		return raw;
	}
	return "error";
}

function normalizeToolName(value: string): string {
	return value.trim().toLowerCase();
}

function canonicalizeToolName(value: string): string {
	const normalized = normalizeToolName(value);
	return TOOL_NAME_ALIASES[normalized] ?? normalized;
}

function normalizeDisabledToolNames(disabledTools: string[] | null | undefined): Set<string> {
	const normalizedSet = new Set<string>();
	if (!Array.isArray(disabledTools)) {
		return normalizedSet;
	}

	for (const rawName of disabledTools) {
		const normalized = normalizeToolName(rawName);
		if (!normalized) {
			continue;
		}

		normalizedSet.add(normalized);
		normalizedSet.add(canonicalizeToolName(normalized));
	}

	return normalizedSet;
}

function isToolDisabled(toolName: string | undefined, disabledTools: Set<string>): boolean {
	if (!toolName || disabledTools.size === 0) {
		return false;
	}

	const normalized = normalizeToolName(toolName);
	if (!normalized) {
		return false;
	}

	return disabledTools.has(normalized) || disabledTools.has(canonicalizeToolName(normalized));
}

function buildToolDisabledMessage(toolName: string): string {
	return `Tool "${toolName}" is disabled for this agent.`;
}

function applyBackendToolRestrictions(backend: BackendProtocol, disabledTools: Set<string>) {
	const disableWrite = isToolDisabled("write_file", disabledTools);
	const disableEdit = isToolDisabled("edit_file", disabledTools);
	const disableExecute = isToolDisabled("execute", disabledTools);

	if (!disableWrite && !disableEdit && !disableExecute) {
		return backend;
	}

	return new Proxy(backend, {
		get(target, prop, _receiver) {
			if (prop === "write" && disableWrite) {
				return async () => ({ error: buildToolDisabledMessage("write_file") });
			}

			if (prop === "edit" && disableEdit) {
				return async () => ({ error: buildToolDisabledMessage("edit_file") });
			}

			if (prop === "execute" && disableExecute) {
				return async () => ({
					output: buildToolDisabledMessage("execute"),
					exitCode: 1,
					truncated: false,
				});
			}

			const current = Reflect.get(target, prop, target);
			if (typeof current === "function") {
				// Preserve `this` for class instances that use private fields (e.g. LocalShellBackend).
				return current.bind(target);
			}
			return current;
		},
	});
}

function applyBackendFactoryToolRestrictions(factory: BackendFactory, disabledTools: Set<string>) {
	return (stateAndStore: Parameters<BackendFactory>[0]) =>
		applyBackendToolRestrictions(factory(stateAndStore), disabledTools);
}

interface AgentConfig {
	id: string;
	name: string;
	systemPrompt: string | null;
	model: string;
	temperature: number; // 0-2 float
	disabledTools: string[] | null;
}

interface McpServerConfig {
	id: string;
	name: string;
	transport: "stdio" | "sse" | "http";
	command: string | null;
	args: string[] | null;
	url: string | null;
	headers: Record<string, string> | null;
	env: Record<string, string> | null;
	authType: "none" | "bearer_mcp_api_key";
}

interface SkillConfig {
	name: string;
	config: Record<string, unknown> | null;
	dirPath: string | null;
}

interface ThinkingConfig {
	type: "enabled" | "disabled";
	clearThinking?: boolean;
}

interface CreateAgentOptions {
	agent: AgentConfig;
	mcpServers?: McpServerConfig[];
	skills?: SkillConfig[];
	extraTools?: StructuredToolInterface[];
	backend?: BackendFactory | SandboxBackendProtocol;
	settings?: Record<string, string>;
	thinking?: ThinkingConfig;
	includeRawResponse?: boolean;
}

interface CreateAgentResult {
	// biome-ignore lint/suspicious/noExplicitAny: DeepAgent return type is complex
	deepAgent: any;
	provider: LlmProvider;
	model: string;
}

/**
 * Agent 运行时服务
 * 根据数据库配置创建 DeepAgent 实例
 */
class AgentRuntime {
	private createRuntimeGuardMiddleware(settings?: Record<string, string>) {
		const middleware: unknown[] = [];

		// Retry transient tool failures to improve long-task stability.
		const toolRetryMaxRetries =
			parsePositiveIntegerSetting(settings, "agent_tool_retry_max_retries") ?? 2;
		middleware.push(
			toolRetryMiddleware({
				maxRetries: toolRetryMaxRetries,
				onFailure: "continue",
			}),
		);

		// Optional per-run tool call budget.
		const toolCallRunLimit = parsePositiveIntegerSetting(settings, "agent_tool_call_run_limit");
		if (toolCallRunLimit !== undefined) {
			middleware.push(
				toolCallLimitMiddleware({
					runLimit: toolCallRunLimit,
					exitBehavior: parseToolLimitExitBehavior(settings),
				}),
			);
		}

		// Optional per-run model call budget.
		const modelCallRunLimit = parsePositiveIntegerSetting(settings, "agent_model_call_run_limit");
		if (modelCallRunLimit !== undefined) {
			middleware.push(
				modelCallLimitMiddleware({
					runLimit: modelCallRunLimit,
					exitBehavior: parseModelLimitExitBehavior(settings),
				}),
			);
		}

		return middleware;
	}

	private createToolAccessControlMiddleware(disabledTools: Set<string>) {
		if (disabledTools.size === 0) {
			return null;
		}

		return createMiddleware({
			name: "toolAccessControlMiddleware",
			wrapModelCall: (request, handler) => {
				if (!Array.isArray(request.tools) || request.tools.length === 0) {
					return handler(request);
				}

				const allowedTools = request.tools.filter((tool) => {
					const toolName = typeof tool?.name === "string" ? tool.name : undefined;
					return !isToolDisabled(toolName, disabledTools);
				});

				return handler({ ...request, tools: allowedTools });
			},
			wrapToolCall: (request, handler) => {
				const toolName = request.toolCall?.name;
				if (!isToolDisabled(toolName, disabledTools)) {
					return handler(request);
				}

				const callId =
					typeof request.toolCall.id === "string" && request.toolCall.id.length > 0
						? request.toolCall.id
						: "disabled_tool_call";

				return new ToolMessage({
					content: `Tool "${toolName}" is disabled for this agent.`,
					tool_call_id: callId,
				});
			},
		});
	}

	/**
	 * 创建 DeepAgent 实例
	 */
	async createAgent(options: CreateAgentOptions): Promise<CreateAgentResult> {
		const {
			agent,
			mcpServers = [],
			skills = [],
			extraTools = [],
			backend,
			settings,
			thinking,
			includeRawResponse,
		} = options;

		const providerConfig = resolveProviderConfig({
			modelName: agent.model,
			settings,
			thinking,
		});

		// 1. 构建 model
		const model = this.createModel(providerConfig, agent.temperature, includeRawResponse);
		const disabledTools = normalizeDisabledToolNames(agent.disabledTools);
		const restrictedBackend =
			typeof backend === "function"
				? applyBackendFactoryToolRestrictions(backend, disabledTools)
				: backend
					? applyBackendToolRestrictions(backend, disabledTools)
					: undefined;

		// 2. 获取 MCP 工具
		const mcpTools = await mcpManager.getToolsForAgent(agent.id, mcpServers);

		// 3. 为当前 Agent 构建仅含已启用技能的过滤目录
		// createSkillsMiddleware 会扫描 source 目录下的所有子文件夹，
		// 如果直接传 data/skills/ 会加载所有技能，无法实现 Agent 间隔离。
		// 因此为每个 Agent 创建过滤目录，仅符号链接已启用的技能。
		const filteredDir = path.resolve(process.cwd(), "../../data", "agent-skills", agent.id);
		await fs.promises.rm(filteredDir, { recursive: true, force: true });

		const enabledPaths: string[] = [];
		for (const skill of skills) {
			const skillPath = skill.dirPath ?? (skill.config as { filePath?: string } | null)?.filePath;
			if (skillPath) {
				enabledPaths.push(path.resolve(skillPath));
			}
		}

		const skillSources: string[] = [];
		if (enabledPaths.length > 0) {
			await fs.promises.mkdir(filteredDir, { recursive: true });
			for (const absPath of enabledPaths) {
				await fs.promises.symlink(absPath, path.join(filteredDir, path.basename(absPath)));
			}
			skillSources.push(filteredDir);
		}

		// 4. 构建自定义工具（剔除已禁用工具）
		const tools: StructuredToolInterface[] = [...mcpTools, ...extraTools].filter(
			(tool) => !isToolDisabled(tool.name, disabledTools),
		);

		// 5. 构建 skills middleware（用独立的 FilesystemBackend 读技能文件，
		//    不受 conversationSandbox 的 rootDir 限制）
		const skillsMiddleware =
			skillSources.length > 0
				? [
						createSkillsMiddleware({
							backend: new FilesystemBackend({ rootDir: "/" }),
							sources: skillSources,
						}),
					]
				: [];
		const runtimeGuardMiddleware = this.createRuntimeGuardMiddleware(settings);
		const toolAccessControlMiddleware = this.createToolAccessControlMiddleware(disabledTools);

		// 6. 创建 DeepAgent
		const deepAgent = createDeepAgent({
			model,
			systemPrompt: agent.systemPrompt?.trim().length
				? `${agent.systemPrompt.trim()}\n\n${AGENT_COMPLETION_CONTRACT}`
				: `你是 ${agent.name}，一个有帮助的AI助手。\n\n${AGENT_COMPLETION_CONTRACT}`,
			tools,
			middleware: [
				...skillsMiddleware,
				...runtimeGuardMiddleware,
				...(toolAccessControlMiddleware ? [toolAccessControlMiddleware] : []),
			] as never,
			...(restrictedBackend ? { backend: restrictedBackend } : {}),
		});

		return {
			deepAgent,
			provider: providerConfig.provider,
			model: providerConfig.model,
		};
	}

	/**
	 * 创建 LLM 模型实例
	 * 通过 OpenAI 兼容接口直连 LLM 提供商
	 */
	private createModel(
		providerConfig: ResolvedProviderConfig,
		temperature: number,
		includeRawResponse?: boolean,
	) {
		return wrapModelLike(
			new ChatOpenAI({
				configuration: {
					baseURL: providerConfig.baseUrl,
				},
				apiKey: providerConfig.apiKey,
				model: providerConfig.model,
				temperature,
				streaming: true,
				...(providerConfig.modelKwargs ? { modelKwargs: providerConfig.modelKwargs } : {}),
				...(providerConfig.reasoning ? { reasoning: providerConfig.reasoning } : {}),
				...(providerConfig.zdrEnabled !== undefined
					? { zdrEnabled: providerConfig.zdrEnabled }
					: {}),
				...(includeRawResponse ? { __includeRawResponse: true } : {}),
			}),
		);
	}
}

// 单例
export const agentRuntime = new AgentRuntime();
