import { writeFile } from "node:fs/promises";
import { basename, extname } from "node:path";
import { zValidator } from "@hono/zod-validator";
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { tool } from "@langchain/core/tools";
import { ChatOpenAI } from "@langchain/openai";
import {
	agentMcpServers,
	agentSkills,
	agents,
	conversations,
	knowledgeDocuments,
	mcpServers,
	messages,
	settings,
	skills,
} from "@nano-agent/db";
import {
	createConversationSchema,
	defaultTemperatureSchema,
	executeCodeSchema,
	messagesQuerySchema,
	saveExecutionResultSchema,
	sendMessageSchema,
} from "@nano-agent/shared";
import { and, asc, count, desc, eq, gt, lt } from "drizzle-orm";
import { Hono } from "hono";
import { streamSSE } from "hono/streaming";
import { z } from "zod";
import { agentRuntime } from "../services/agent-runtime.js";
import { codeSandboxService } from "../services/code-sandbox.js";
import { searchKnowledge } from "../services/knowledge.js";
import {
	extractReasoningDeltaByProvider,
	resolveProviderConfig,
} from "../services/llm-provider-adapter.js";
import { getSystemPromptDocumentForAgent } from "../services/system-prompts.js";

const createConversationWithAgentSchema = createConversationSchema.extend({
	agentId: z.string(),
});

const knowledgeSearchSchema = z.object({
	query: z.string().min(1).describe("用于检索知识库的查询关键词或问题"),
	topK: z.number().int().min(1).max(10).optional().describe("返回片段数量，默认 5"),
});

const TOOL_CONTEXT_BUDGET_CHARS = 6_000;
const GENERATED_FILE_CONTENT_LIMIT_CHARS = 120_000;
const TOOL_OUTPUT_PREVIEW_LIMIT_CHARS = 6_000;
const FALLBACK_SYNTHESIS_MAX_TOOL_TRACES = 4;
const FALLBACK_SYNTHESIS_PREVIEW_LIMIT_CHARS = 1_500;

interface GeneratedFileArtifact {
	fileName: string;
	path: string;
	content: string;
	language: string;
	truncated: boolean;
}

type ToolCallTraceStatus = "running" | "completed" | "error";

interface ToolCallTraceArtifact {
	callId: string | null;
	name: string;
	args: unknown;
	status: ToolCallTraceStatus;
	output?: string;
	error?: string;
	truncated?: boolean;
}

const FILE_EXTENSION_LANGUAGE_MAP: Record<string, string> = {
	".py": "python",
	".js": "javascript",
	".mjs": "javascript",
	".cjs": "javascript",
	".ts": "typescript",
	".tsx": "tsx",
	".jsx": "jsx",
	".json": "json",
	".yml": "yaml",
	".yaml": "yaml",
	".toml": "toml",
	".md": "markdown",
	".sh": "bash",
	".bash": "bash",
	".zsh": "bash",
	".sql": "sql",
	".html": "html",
	".css": "css",
	".xml": "xml",
	".go": "go",
	".java": "java",
	".rb": "ruby",
	".php": "php",
	".rs": "rust",
	".cpp": "cpp",
	".cc": "cpp",
	".cxx": "cpp",
	".c": "c",
	".h": "c",
	".hpp": "cpp",
};

function getLangChainMessageType(message: unknown): string | null {
	if (!message || typeof message !== "object") {
		return null;
	}

	const maybeGetType =
		(message as { getType?: unknown; _getType?: unknown }).getType ??
		(message as { _getType?: unknown })._getType;
	if (typeof maybeGetType !== "function") {
		return null;
	}

	try {
		const type = maybeGetType.call(message);
		return typeof type === "string" ? type : null;
	} catch {
		return null;
	}
}

function detectLanguageFromFileName(fileName: string): string {
	const ext = extname(fileName).toLowerCase();
	return FILE_EXTENSION_LANGUAGE_MAP[ext] ?? "";
}

function getFirstStringField(record: Record<string, unknown>, keys: string[]): string | null {
	for (const key of keys) {
		const value = record[key];
		if (typeof value === "string" && value.length > 0) {
			return value;
		}
	}
	return null;
}

function extractGeneratedFileFromToolCall(
	toolName: unknown,
	args: unknown,
): GeneratedFileArtifact | null {
	if (typeof toolName !== "string") {
		return null;
	}

	const normalizedToolName = toolName.toLowerCase();
	const isWriteFileTool =
		normalizedToolName.includes("write_file") || normalizedToolName.includes("create_file");
	if (!isWriteFileTool) {
		return null;
	}

	if (!args || typeof args !== "object") {
		return null;
	}

	const argRecord = args as Record<string, unknown>;
	const filePath =
		getFirstStringField(argRecord, ["path", "filePath", "file_path", "filepath"]) ??
		"generated.txt";
	const rawContent = getFirstStringField(argRecord, [
		"content",
		"contents",
		"text",
		"data",
		"new_content",
		"newContent",
	]);

	if (!rawContent) {
		return null;
	}

	const truncated = rawContent.length > GENERATED_FILE_CONTENT_LIMIT_CHARS;
	const content = truncated ? rawContent.slice(0, GENERATED_FILE_CONTENT_LIMIT_CHARS) : rawContent;
	const fileName = basename(filePath) || "generated.txt";

	return {
		fileName,
		path: filePath,
		content,
		language: detectLanguageFromFileName(fileName),
		truncated,
	};
}

function upsertGeneratedFile(
	filesMap: Map<string, GeneratedFileArtifact>,
	file: GeneratedFileArtifact,
) {
	filesMap.set(file.path, file);
}

function normalizeToolCallId(value: unknown): string | null {
	return typeof value === "string" && value.length > 0 ? value : null;
}

function safeJsonStringify(value: unknown): string {
	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}

function extractTextContent(content: unknown): string {
	if (typeof content === "string") {
		return content;
	}

	if (Array.isArray(content)) {
		return content
			.map((part) => {
				if (typeof part === "string") {
					return part;
				}

				if (!part || typeof part !== "object") {
					return "";
				}

				const text = (part as { text?: unknown }).text;
				if (typeof text === "string") {
					return text;
				}

				return "";
			})
			.join("");
	}

	if (content && typeof content === "object") {
		return safeJsonStringify(content);
	}

	return "";
}

function extractAssistantTextDelta(content: unknown): string {
	if (typeof content === "string") {
		return content;
	}

	if (!Array.isArray(content)) {
		return "";
	}

	return content
		.map((part) => {
			if (typeof part === "string") {
				return part;
			}

			if (!part || typeof part !== "object") {
				return "";
			}

			const text = (part as { text?: unknown }).text;
			return typeof text === "string" ? text : "";
		})
		.join("");
}

function toPreviewText(raw: string, limit: number): { text: string; truncated: boolean } {
	if (raw.length <= limit) {
		return { text: raw, truncated: false };
	}

	return { text: raw.slice(0, limit), truncated: true };
}

function readToolMessage(record: Record<string, unknown>): {
	callId: string | null;
	name: string;
	content: string;
	isError: boolean;
	truncated: boolean;
} | null {
	const callId = normalizeToolCallId(record.tool_call_id ?? record.toolCallId);
	const name = getFirstStringField(record, ["name", "tool_name", "toolName"]) ?? "tool";
	const rawText = extractTextContent(record.content);
	const { text: content, truncated } = toPreviewText(rawText, TOOL_OUTPUT_PREVIEW_LIMIT_CHARS);
	const status = getFirstStringField(record, ["status", "state"])?.toLowerCase();
	const isError = status === "error";

	if (!content && !isError) {
		return null;
	}

	return {
		callId,
		name,
		content,
		isError,
		truncated,
	};
}

function buildToolTraceFallbackPayload(toolTraces: ToolCallTraceArtifact[]): string {
	const selected = toolTraces.slice(-FALLBACK_SYNTHESIS_MAX_TOOL_TRACES);
	if (selected.length === 0) {
		return "无";
	}

	return selected
		.map((trace, index) => {
			const argsText = trace.args ? safeJsonStringify(trace.args) : "";
			const outputText = trace.output
				? toPreviewText(trace.output, FALLBACK_SYNTHESIS_PREVIEW_LIMIT_CHARS).text
				: "";
			const errorText = trace.error
				? toPreviewText(trace.error, FALLBACK_SYNTHESIS_PREVIEW_LIMIT_CHARS).text
				: "";

			return [
				`[Tool ${index + 1}] name=${trace.name} status=${trace.status}`,
				argsText ? `args:\n${argsText}` : "",
				outputText ? `output:\n${outputText}` : "",
				errorText ? `error:\n${errorText}` : "",
			]
				.filter(Boolean)
				.join("\n");
		})
		.join("\n\n---\n\n");
}

async function synthesizeFinalAnswerFromToolResults(options: {
	userRequest: string;
	toolTraces: ToolCallTraceArtifact[];
	settings: Record<string, string>;
	temperature: number;
}): Promise<string | null> {
	if (options.toolTraces.length === 0) {
		return null;
	}

	try {
		const providerConfig = resolveProviderConfig({
			modelName: options.settings.llm_model ?? "",
			settings: options.settings,
			thinking: { type: "disabled" },
		});

		const model = new ChatOpenAI({
			configuration: { baseURL: providerConfig.baseUrl },
			apiKey: providerConfig.apiKey,
			model: providerConfig.model,
			temperature: options.temperature,
			streaming: false,
			...(providerConfig.modelKwargs ? { modelKwargs: providerConfig.modelKwargs } : {}),
			...(providerConfig.reasoning ? { reasoning: providerConfig.reasoning } : {}),
			...(providerConfig.zdrEnabled !== undefined ? { zdrEnabled: providerConfig.zdrEnabled } : {}),
		});

		const systemPrompt = [
			"你是最终整合助手。",
			"请基于给定工具输出直接给出最终交付，不要再请求更多工具。",
			"若用户请求代码，请直接给可运行代码；若信息不足，给出最小可行假设并明确标注。",
		].join("\n");

		const tracePayload = buildToolTraceFallbackPayload(options.toolTraces);
		const userPayload = [
			"请根据以下信息输出最终答案：",
			`[用户请求]\n${options.userRequest}`,
			`[工具输出摘录]\n${tracePayload}`,
		].join("\n\n");

		const response = await model.invoke([
			new SystemMessage(systemPrompt),
			new HumanMessage(userPayload),
		]);
		const text = extractAssistantTextDelta(response.content).trim();
		return text.length > 0 ? text : null;
	} catch (error) {
		console.error("[Chat] Fallback synthesis failed:", error);
		return null;
	}
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isMissingToolArgs(value: unknown): boolean {
	if (value === null || value === undefined) {
		return true;
	}
	if (!isPlainObject(value)) {
		return false;
	}
	return Object.keys(value).length === 0;
}

function extractSearchKnowledgeArgsFromOutput(output: string): Record<string, unknown> | null {
	try {
		const parsed = JSON.parse(output) as Record<string, unknown>;
		const query = typeof parsed.query === "string" ? parsed.query : null;
		if (!query) {
			return null;
		}

		const args: Record<string, unknown> = { query };
		const topK = parsed.topK;
		if (typeof topK === "number" && Number.isFinite(topK)) {
			args.topK = topK;
		}
		return args;
	} catch {
		const match = output.match(/"query"\s*:\s*"((?:\\.|[^"])*)"/);
		if (!match) {
			return null;
		}

		try {
			const query = JSON.parse(`"${match[1]}"`) as string;
			return query ? { query } : null;
		} catch {
			return null;
		}
	}
}

function makeToolTraceKey(callId: string | null, name: string, anonymousCounter: number): string {
	if (callId) {
		return `id:${callId}`;
	}
	return `anon:${name}:${anonymousCounter}`;
}

function findToolTraceKey(
	toolTraces: Map<string, ToolCallTraceArtifact>,
	callId: string | null,
	name: string,
): string | null {
	if (callId) {
		const key = `id:${callId}`;
		if (toolTraces.has(key)) {
			return key;
		}
	}

	const entries = Array.from(toolTraces.entries()).reverse();
	for (const [key, trace] of entries) {
		if (trace.name === name && trace.status === "running") {
			return key;
		}
	}

	return null;
}

function toAgentStreamErrorMessage(error: unknown): string {
	const raw = error instanceof Error ? error.message : String(error);
	const normalized = raw.toLowerCase();

	if (normalized.includes("toolcalllimitexceedederror") || normalized.includes("tool call limit")) {
		return [
			"任务在工具调用上限处中断。",
			"请在设置中提高 `agent_tool_call_run_limit`，或移除该设置以取消每轮限制。",
			`原始错误: ${raw}`,
		].join("\n");
	}

	if (normalized.includes("model call limit")) {
		return [
			"任务在模型调用上限处中断。",
			"请在设置中提高 `agent_model_call_run_limit`，或移除该设置以取消每轮限制。",
			`原始错误: ${raw}`,
		].join("\n");
	}

	if (normalized.includes("graphrecursionerror") || normalized.includes("recursion limit")) {
		return [
			"任务达到 LangGraph 步数上限后中断。",
			"建议检查是否出现工具循环，并开启 LangSmith trace 观察循环节点。",
			`原始错误: ${raw}`,
		].join("\n");
	}

	if (
		normalized === "terminated" ||
		normalized.includes("abort") ||
		normalized.includes("aborted") ||
		normalized.includes("econnreset") ||
		normalized.includes("premature close")
	) {
		return [
			"模型流在上游网关处中断（terminated）。",
			"这通常不是工具失败，而是模型端提前结束了流式响应。",
			"建议减少单次检索返回长度、避免重复工具调用，并重试。",
			`原始错误: ${raw}`,
		].join("\n");
	}

	return `抱歉，处理您的消息时发生了错误: ${raw}`;
}

function isRecoverableStreamTermination(error: unknown): boolean {
	const raw = error instanceof Error ? error.message : String(error);
	const normalized = raw.toLowerCase();
	return (
		normalized === "terminated" ||
		normalized.includes("abort") ||
		normalized.includes("aborted") ||
		normalized.includes("econnreset") ||
		normalized.includes("premature close")
	);
}

function looksLikeInterimProgressText(content: string): boolean {
	const normalized = content.trim().toLowerCase();
	if (normalized.length === 0) {
		return true;
	}

	// Treat code-rich output as a final delivery candidate.
	if (normalized.includes("```")) {
		return false;
	}

	// Long structured output is likely final content, not a progress update.
	if (normalized.length > 1_200) {
		return false;
	}

	return [
		"let me ",
		"i will ",
		"i'll ",
		"i can ",
		"i need to ",
		"让我",
		"我先",
		"我会先",
		"先检查",
	].some((prefix) => normalized.startsWith(prefix));
}

export const conversationsRoute = new Hono()
	.get("/", async (c) => {
		const db = c.get("db");
		const agentId = c.req.query("agentId");

		if (agentId) {
			const result = await db
				.select()
				.from(conversations)
				.where(eq(conversations.agentId, agentId))
				.orderBy(desc(conversations.updatedAt));
			return c.json(result);
		}
		const result = await db.select().from(conversations).orderBy(desc(conversations.updatedAt));
		return c.json(result);
	})

	// Create conversation
	.post("/", zValidator("json", createConversationWithAgentSchema), async (c) => {
		const db = c.get("db");
		const input = c.req.valid("json");
		const result = await db
			.insert(conversations)
			.values({
				agentId: input.agentId,
				title: input.title ?? null,
			})
			.returning();
		return c.json(result[0], 201);
	})

	// Get messages for a conversation (cursor-based pagination)
	.get("/:id/messages", zValidator("query", messagesQuerySchema), async (c) => {
		const db = c.get("db");
		const { cursor, limit } = c.req.valid("query");
		const conversationId = c.req.param("id");

		const conditions = [eq(messages.conversationId, conversationId)];
		if (cursor) {
			conditions.push(lt(messages.createdAt, cursor));
		}

		const result = await db
			.select()
			.from(messages)
			.where(and(...conditions))
			.orderBy(desc(messages.createdAt))
			.limit(limit + 1);

		const hasMore = result.length > limit;
		const items = hasMore ? result.slice(0, limit) : result;
		const nextCursor = hasMore ? items[items.length - 1].createdAt : null;

		return c.json({
			items: items.reverse(),
			nextCursor,
			hasMore,
		});
	})

	// Clear all messages in a conversation, keep conversation metadata
	.delete("/:id/messages", async (c) => {
		const db = c.get("db");
		const conversationId = c.req.param("id");

		const [conv] = await db
			.select({ id: conversations.id })
			.from(conversations)
			.where(eq(conversations.id, conversationId));

		if (!conv) {
			return c.json({ error: "Conversation not found" }, 404);
		}

		await db.delete(messages).where(eq(messages.conversationId, conversationId));
		await db
			.update(conversations)
			.set({ updatedAt: new Date().toISOString() })
			.where(eq(conversations.id, conversationId));

		return c.json({ success: true });
	})

	// Upload file to conversation sandbox
	.post("/:id/upload", async (c) => {
		const db = c.get("db");
		const conversationId = c.req.param("id");

		const [conv] = await db
			.select({ id: conversations.id })
			.from(conversations)
			.where(eq(conversations.id, conversationId));

		if (!conv) {
			return c.json({ error: "Conversation not found" }, 404);
		}

		const body = await c.req.parseBody();
		const file = body.file;

		if (!file || !(file instanceof File)) {
			return c.json({ error: "No file provided" }, 400);
		}

		const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
		const ALLOWED_EXTENSIONS = new Set([
			".xlsx",
			".xls",
			".csv",
			".json",
			".txt",
			".pdf",
			".parquet",
			".tsv",
			".xml",
			".yaml",
			".yml",
			".png",
			".jpg",
			".jpeg",
			".py",
			".js",
			".md",
			".html",
			".css",
			".sql",
			".zip",
		]);

		const ext = extname(file.name).toLowerCase();
		if (!ALLOWED_EXTENSIONS.has(ext)) {
			return c.json({ error: `File type ${ext} is not allowed` }, 400);
		}

		const buffer = Buffer.from(await file.arrayBuffer());
		if (buffer.length > MAX_FILE_SIZE) {
			return c.json({ error: "File size exceeds 50MB limit" }, 400);
		}

		// Sanitize filename: keep only safe characters
		const safeName = basename(file.name).replace(/[^a-zA-Z0-9._-]/g, "_");
		const sandboxDir = await codeSandboxService.ensureWorkspaceDir(conversationId);
		const filePath = `${sandboxDir}/${safeName}`;
		await writeFile(filePath, buffer);

		return c.json(
			{
				fileName: safeName,
				fileSize: buffer.length,
				sandboxPath: `./${safeName}`,
			},
			201,
		);
	})

	// Execute code in conversation sandbox
	.post("/:id/execute", zValidator("json", executeCodeSchema), async (c) => {
		const db = c.get("db");
		const conversationId = c.req.param("id");
		const { language, code } = c.req.valid("json");

		const [conv] = await db
			.select({ id: conversations.id })
			.from(conversations)
			.where(eq(conversations.id, conversationId));

		if (!conv) {
			return c.json({ error: "Conversation not found" }, 404);
		}

		try {
			const result = await codeSandboxService.executeCode({
				conversationId,
				language,
				code,
			});
			return c.json(result);
		} catch (error) {
			const message = error instanceof Error ? error.message : "Code execution failed";
			const status = message.startsWith("Unsupported language:") ? 400 : 500;
			return c.json({ error: message }, status);
		}
	})

	// Save code execution result into message metadata
	.patch(
		"/:id/messages/:messageId/execution-result",
		zValidator("json", saveExecutionResultSchema),
		async (c) => {
			const db = c.get("db");
			const conversationId = c.req.param("id");
			const messageId = c.req.param("messageId");
			const { codeHash, output, exitCode, error } = c.req.valid("json");

			const [msg] = await db
				.select()
				.from(messages)
				.where(and(eq(messages.id, messageId), eq(messages.conversationId, conversationId)));

			if (!msg) {
				return c.json({ error: "Message not found" }, 404);
			}

			const currentMetadata = (msg.metadata as Record<string, unknown> | null) ?? {};
			const existingResults =
				(currentMetadata.codeExecutionResults as Record<string, unknown> | undefined) ?? {};

			const updatedMetadata = {
				...currentMetadata,
				codeExecutionResults: {
					...existingResults,
					[codeHash]: { output, exitCode, error },
				},
			};

			await db
				.update(messages)
				.set({ metadata: updatedMetadata })
				.where(eq(messages.id, messageId));

			return c.json({ success: true });
		},
	)

	// Send message (SSE streaming with DeepAgent)
	.post("/:id/chat", zValidator("json", sendMessageSchema), async (c) => {
		const db = c.get("db");
		const conversationId = c.req.param("id");
		const { content, thinking, attachments } = c.req.valid("json");

		// Enrich content with file attachment info for LLM context
		let enrichedContent = content;
		if (attachments && attachments.length > 0) {
			const fileList = attachments
				.map((a) => `- ${a.fileName} (${a.fileSize} bytes) → sandbox path: ${a.sandboxPath}`)
				.join("\n");
			enrichedContent += `\n\n[Attached files uploaded to sandbox]\n${fileList}\n[Use these file paths in generated code to read the files]`;
		}

		// Save user message
		await db.insert(messages).values({
			conversationId,
			role: "user",
			content: enrichedContent,
			metadata: attachments?.length ? { attachments } : null,
		});

		// Get conversation to find agent
		const [conv] = await db
			.select()
			.from(conversations)
			.where(eq(conversations.id, conversationId));

		if (!conv) {
			return c.json({ error: "Conversation not found" }, 404);
		}

		// Get agent config
		const [agent] = await db.select().from(agents).where(eq(agents.id, conv.agentId));

		if (!agent) {
			return c.json({ error: "Agent not found" }, 404);
		}

		// Get agent's enabled MCP servers
		const mcpResults = await db
			.select({ mcpServer: mcpServers })
			.from(agentMcpServers)
			.innerJoin(mcpServers, eq(agentMcpServers.mcpServerId, mcpServers.id))
			.where(and(eq(agentMcpServers.agentId, agent.id), eq(agentMcpServers.enabled, true)));

		// Get agent's enabled skills
		const skillResults = await db
			.select({ skill: skills })
			.from(agentSkills)
			.innerJoin(skills, eq(agentSkills.skillId, skills.id))
			.where(and(eq(agentSkills.agentId, agent.id), eq(agentSkills.enabled, true)));

		// Get settings
		const settingsRows = await db.select().from(settings);
		const settingsObj: Record<string, string> = {};
		for (const row of settingsRows) {
			settingsObj[row.key] = row.value;
		}
		const settingsModel = settingsObj.llm_model?.trim();
		if (!settingsModel) {
			return c.json(
				{
					error: "LLM model is not configured. Please set llm_model in settings.",
				},
				400,
			);
		}
		const settingsTemperature = defaultTemperatureSchema.safeParse(settingsObj.default_temperature);
		if (!settingsTemperature.success) {
			return c.json(
				{
					error:
						"Default temperature is not configured. Please set default_temperature in settings (0-1, step 0.1).",
				},
				400,
			);
		}
		const resolvedTemperature = settingsTemperature.data;
		const promptDocument = await getSystemPromptDocumentForAgent(db, agent.id);
		const resolvedSystemPromptParts = [
			agent.systemPrompt?.trim(),
			promptDocument?.content.trim(),
		].filter((item): item is string => Boolean(item));
		const resolvedSystemPrompt =
			resolvedSystemPromptParts.length > 0 ? resolvedSystemPromptParts.join("\n\n") : null;

		const [knowledgeStats] = await db
			.select({ readyCount: count() })
			.from(knowledgeDocuments)
			.where(
				and(
					eq(knowledgeDocuments.agentId, agent.id),
					eq(knowledgeDocuments.status, "ready"),
					gt(knowledgeDocuments.chunkCount, 0),
				),
			);
		const hasKnowledge = (knowledgeStats?.readyCount ?? 0) > 0;

		// Load conversation history
		const historyRows = await db
			.select()
			.from(messages)
			.where(eq(messages.conversationId, conversationId))
			.orderBy(asc(messages.createdAt));

		// Convert to LangChain message format
		const langchainMessages = historyRows.map((msg) => {
			switch (msg.role) {
				case "user":
					return new HumanMessage(msg.content);
				case "assistant":
					return new AIMessage(msg.content);
				case "system":
					return new SystemMessage(msg.content);
				default:
					return new HumanMessage(msg.content);
			}
		});

		return streamSSE(c, async (stream) => {
			let fullContent = "";
			let fullReasoningContent = "";
			const generatedFiles = new Map<string, GeneratedFileArtifact>();
			const toolTraces = new Map<string, ToolCallTraceArtifact>();
			let anonymousToolCounter = 0;
			let recoverableTermination = false;
			let seenAnyToolSignal = false;
			let hasPostToolText = false;

			try {
				const extraTools = hasKnowledge
					? [
							tool(
								async (input) => {
									const topK = input.topK ?? 5;
									const results = await searchKnowledge(db, agent.id, input.query, {
										topK,
										maxContextChars: TOOL_CONTEXT_BUDGET_CHARS,
									});

									return JSON.stringify({
										query: input.query,
										total: results.length,
										results: results.map((item) => ({
											filename: item.filename,
											docPath: item.docPath,
											heading: item.heading,
											sectionTitle: item.sectionTitle,
											headingPath: item.headingPath,
											headingLevel: item.headingLevel,
											chunkIndex: item.chunkIndex,
											score: item.score,
											snippet: item.snippet,
											bodySummary: item.bodySummary,
											content: item.content,
										})),
									});
								},
								{
									name: "search_knowledge",
									description:
										"Search the current agent's local knowledge base and return relevant document chunks.",
									schema: knowledgeSearchSchema,
								},
							),
						]
					: [];

				const conversationSandbox =
					await codeSandboxService.getBackendForConversation(conversationId);

				// Create DeepAgent instance
				const runtimeAgent = await agentRuntime.createAgent({
					agent: {
						id: agent.id,
						name: agent.name,
						systemPrompt: resolvedSystemPrompt,
						model: settingsModel,
						temperature: resolvedTemperature,
						disabledTools: Array.isArray(agent.disabledTools) ? agent.disabledTools : null,
					},
					mcpServers: mcpResults.map((r) => ({
						id: r.mcpServer.id,
						name: r.mcpServer.name,
						transport: r.mcpServer.transport as "stdio" | "sse" | "http",
						command: r.mcpServer.command,
						args: r.mcpServer.args as string[] | null,
						url: r.mcpServer.url,
						headers: r.mcpServer.headers as Record<string, string> | null,
						env: r.mcpServer.env as Record<string, string> | null,
						authType: (r.mcpServer.authType ?? "none") as "none" | "bearer_mcp_api_key",
					})),
					skills: skillResults.map((r) => ({
						name: r.skill.name,
						config: r.skill.config as Record<string, unknown> | null,
						dirPath: r.skill.dirPath ?? null,
					})),
					settings: settingsObj,
					thinking: {
						type: thinking?.type ?? "enabled",
						...(thinking?.clearThinking !== undefined
							? { clearThinking: thinking.clearThinking }
							: {}),
					},
					backend: conversationSandbox,
					extraTools,
					includeRawResponse: true,
				});

				// Stream response using LangGraph messages mode
				const agentStream = await runtimeAgent.deepAgent.stream({ messages: langchainMessages }, {
					streamMode: "messages",
					// biome-ignore lint/suspicious/noExplicitAny: LangGraph streamMode option not in base types
				} as any);

				for await (const [message, _metadata] of agentStream) {
					const messageType = getLangChainMessageType(message);

					if (messageType === "tool" && message && typeof message === "object") {
						seenAnyToolSignal = true;
						const toolMessage = readToolMessage(message as Record<string, unknown>);
						if (!toolMessage) {
							continue;
						}

						let traceKey = findToolTraceKey(toolTraces, toolMessage.callId, toolMessage.name);
						if (!traceKey) {
							anonymousToolCounter += 1;
							traceKey = makeToolTraceKey(
								toolMessage.callId,
								toolMessage.name,
								anonymousToolCounter,
							);
							const startedTrace: ToolCallTraceArtifact = {
								callId: toolMessage.callId,
								name: toolMessage.name,
								args: null,
								status: "running",
							};
							toolTraces.set(traceKey, startedTrace);

							await stream.writeSSE({
								data: JSON.stringify({
									type: "tool_call_started",
									callId: startedTrace.callId,
									name: startedTrace.name,
									args: startedTrace.args,
								}),
							});
						}

						const existing = toolTraces.get(traceKey);
						if (!existing) {
							continue;
						}

						if (toolMessage.content) {
							if (toolMessage.isError) {
								existing.error = toolMessage.content;
							} else {
								existing.output = toolMessage.content;
								if (existing.name === "search_knowledge" && isMissingToolArgs(existing.args)) {
									const inferredArgs = extractSearchKnowledgeArgsFromOutput(toolMessage.content);
									if (inferredArgs) {
										existing.args = inferredArgs;
										await stream.writeSSE({
											data: JSON.stringify({
												type: "tool_call_started",
												callId: existing.callId,
												name: existing.name,
												args: inferredArgs,
											}),
										});
									}
								}
							}
							existing.truncated = toolMessage.truncated;
						}

						existing.status = toolMessage.isError ? "error" : "completed";
						toolTraces.set(traceKey, existing);

						if (toolMessage.isError) {
							await stream.writeSSE({
								data: JSON.stringify({
									type: "tool_call_error",
									callId: existing.callId,
									name: existing.name,
									error: existing.error ?? "Tool execution failed.",
									truncated: existing.truncated === true,
								}),
							});
						} else if (toolMessage.content) {
							await stream.writeSSE({
								data: JSON.stringify({
									type: "tool_call_output",
									callId: existing.callId,
									name: existing.name,
									output: toolMessage.content,
									truncated: existing.truncated === true,
								}),
							});
						}

						await stream.writeSSE({
							data: JSON.stringify({
								type: "tool_call_finished",
								callId: existing.callId,
								name: existing.name,
								status: existing.status,
							}),
						});
						continue;
					}

					// 仅透传 AI 消息，避免将工具返回内容（如知识库检索原文）写入对话。
					if (messageType !== "ai") {
						continue;
					}

					const reasoningDelta = extractReasoningDeltaByProvider(runtimeAgent.provider, message);
					if (reasoningDelta) {
						fullReasoningContent += reasoningDelta;
						await stream.writeSSE({
							data: JSON.stringify({
								type: "reasoning",
								content: reasoningDelta,
							}),
						});
					}

					// Only process AI message text content tokens (string and content-block arrays)
					const contentDelta = extractAssistantTextDelta(message.content);
					if (contentDelta) {
						if (seenAnyToolSignal) {
							hasPostToolText = true;
						}
						fullContent += contentDelta;
						await stream.writeSSE({
							data: JSON.stringify({
								type: "token",
								content: contentDelta,
							}),
						});
					}

					// Handle tool calls - send as events for frontend visibility
					if (
						"tool_calls" in message &&
						Array.isArray(message.tool_calls) &&
						message.tool_calls.length > 0
					) {
						seenAnyToolSignal = true;
						for (const toolCall of message.tool_calls) {
							const generatedFile = extractGeneratedFileFromToolCall(toolCall.name, toolCall.args);
							if (generatedFile) {
								upsertGeneratedFile(generatedFiles, generatedFile);
							}

							const toolCallRecord = toolCall as Record<string, unknown>;
							const toolCallName =
								typeof toolCallRecord.name === "string" ? toolCallRecord.name : "tool";
							const toolCallId = normalizeToolCallId(
								toolCallRecord.id ?? toolCallRecord.tool_call_id,
							);
							let traceKey = findToolTraceKey(toolTraces, toolCallId, toolCallName);
							if (!traceKey) {
								anonymousToolCounter += 1;
								traceKey = makeToolTraceKey(toolCallId, toolCallName, anonymousToolCounter);
							}

							const existing = toolTraces.get(traceKey);
							const nextTrace: ToolCallTraceArtifact = existing
								? {
										...existing,
										callId: toolCallId ?? existing.callId,
										name: toolCallName,
										args: toolCallRecord.args ?? existing.args,
										status: existing.status === "completed" ? "completed" : "running",
									}
								: {
										callId: toolCallId,
										name: toolCallName,
										args: toolCallRecord.args ?? null,
										status: "running",
									};
							toolTraces.set(traceKey, nextTrace);

							await stream.writeSSE({
								data: JSON.stringify({
									type: "tool_call_started",
									callId: nextTrace.callId,
									name: nextTrace.name,
									args: nextTrace.args,
								}),
							});
						}
					}
				}
			} catch (error) {
				console.error("[Chat] DeepAgent stream error:", error);
				recoverableTermination = isRecoverableStreamTermination(error);
				if (!recoverableTermination) {
					fullContent = toAgentStreamErrorMessage(error);
					await stream.writeSSE({
						data: JSON.stringify({
							type: "error",
							content: fullContent,
						}),
					});
				}
			}

			const generatedFileList = Array.from(generatedFiles.values());
			for (const trace of toolTraces.values()) {
				if (trace.status === "running") {
					trace.status = "completed";
				}
			}
			const toolTraceList = Array.from(toolTraces.values());
			const shouldForceSynthesis =
				toolTraceList.length > 0 && (!hasPostToolText || looksLikeInterimProgressText(fullContent));

			if (!fullContent && generatedFileList.length > 0) {
				fullContent = "已生成脚本文件，见下方文件卡片。";
			}

			if (shouldForceSynthesis) {
				const synthesized = await synthesizeFinalAnswerFromToolResults({
					userRequest: enrichedContent,
					toolTraces: toolTraceList,
					settings: settingsObj,
					temperature: resolvedTemperature,
				});
				if (synthesized) {
					fullContent = synthesized;
				}
			}

			if (!fullContent && toolTraceList.length > 0) {
				let latestError: ToolCallTraceArtifact | null = null;
				for (let i = toolTraceList.length - 1; i >= 0; i -= 1) {
					if (toolTraceList[i].status === "error") {
						latestError = toolTraceList[i];
						break;
					}
				}

				if (latestError?.error) {
					fullContent = `工具 ${latestError.name} 执行失败：${latestError.error}`;
				} else {
					fullContent = "工具调用已完成，但模型未返回最终文本回复。请重试或细化你的问题。";
				}
			}

			if (!fullContent && recoverableTermination) {
				fullContent = "模型响应被上游中断（terminated），请重试。若频繁出现，请减少重复工具调用。";
			}

			if (!fullContent) {
				fullContent = "模型未返回可显示的内容。请重试。";
			}

			const metadataPayload: Record<string, unknown> = {};
			if (fullReasoningContent) {
				metadataPayload.reasoningContent = fullReasoningContent;
			}
			if (generatedFileList.length > 0) {
				metadataPayload.generatedFiles = generatedFileList;
			}
			if (toolTraceList.length > 0) {
				metadataPayload.toolCalls = toolTraceList;
			}

			const [saved] = await db
				.insert(messages)
				.values({
					conversationId,
					role: "assistant",
					content: fullContent,
					metadata: Object.keys(metadataPayload).length > 0 ? metadataPayload : null,
				})
				.returning();

			await stream.writeSSE({
				data: JSON.stringify({ type: "done", message: saved }),
			});
		});
	})

	// Delete conversation
	.delete("/:id", async (c) => {
		const db = c.get("db");
		const conversationId = c.req.param("id");
		const result = await db
			.delete(conversations)
			.where(eq(conversations.id, conversationId))
			.returning();
		if (result.length === 0) {
			return c.json({ error: "Conversation not found" }, 404);
		}
		await codeSandboxService.closeConversationSandbox(conversationId);
		return c.json({ success: true });
	});
