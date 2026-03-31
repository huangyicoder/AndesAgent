export type LlmProvider = "openai" | "qwen" | "zhipu" | "deepseek" | "minimax";

interface ThinkingConfig {
	type: "enabled" | "disabled";
	clearThinking?: boolean;
}

interface ResolveProviderOptions {
	modelName: string;
	settings?: Record<string, string>;
	thinking?: ThinkingConfig;
}

interface OpenAIReasoningConfig {
	effort?: "low" | "medium" | "high";
	summary?: "auto";
}

export interface ResolvedProviderConfig {
	provider: LlmProvider;
	model: string;
	baseUrl: string;
	apiKey: string;
	modelKwargs?: Record<string, unknown>;
	reasoning?: OpenAIReasoningConfig;
	zdrEnabled?: boolean;
}

function parseBooleanSetting(value: string | undefined): boolean | undefined {
	if (typeof value !== "string") {
		return undefined;
	}

	const normalized = value.trim().toLowerCase();
	if (normalized === "true") {
		return true;
	}
	if (normalized === "false") {
		return false;
	}

	return undefined;
}

function shouldEnableOpenAIZdr(baseUrl: string, settings?: Record<string, string>): boolean {
	const configured = parseBooleanSetting(settings?.llm_openai_zdr_enabled);
	if (configured !== undefined) {
		return configured;
	}

	// Most OpenAI-compatible gateways disable server-side response storage.
	// Enabling ZDR prevents LangChain from replaying response item IDs that may not exist.
	return !/api\.openai\.com/i.test(baseUrl);
}

function normalizeProvider(input?: string | null): LlmProvider | null {
	if (!input) {
		return null;
	}

	const value = input.trim().toLowerCase();
	if (value === "openai") return "openai";
	if (value === "qwen") return "qwen";
	if (value === "zhipu" || value === "glm" || value === "zhipu_code_plan") return "zhipu";
	if (value === "deepseek") return "deepseek";
	if (value === "minimax") return "minimax";
	return null;
}

function parseModelRef(modelName: string): { provider: LlmProvider | null; model: string } {
	const trimmed = modelName.trim();
	const separatorIndex = trimmed.indexOf(":");
	if (separatorIndex <= 0) {
		return { provider: null, model: trimmed };
	}

	const prefix = trimmed.slice(0, separatorIndex);
	const provider = normalizeProvider(prefix);
	if (!provider) {
		return { provider: null, model: trimmed };
	}

	const model = trimmed.slice(separatorIndex + 1).trim();
	return {
		provider,
		model,
	};
}

function isOpenAIReasoningModel(modelName: string): boolean {
	return /^o\d/i.test(modelName) || /^gpt-5(?!-chat)/i.test(modelName);
}

export function resolveProviderConfig(options: ResolveProviderOptions): ResolvedProviderConfig {
	const { settings, thinking } = options;
	const parsed = parseModelRef(options.modelName);
	const provider = normalizeProvider(settings?.llm_provider);
	if (!provider) {
		throw new Error("LLM provider is not configured. Please set llm_provider in settings.");
	}

	const model = parsed.model.trim();
	if (!model) {
		throw new Error("Agent model is empty.");
	}
	if (parsed.provider && parsed.provider !== provider) {
		throw new Error(
			`Agent model provider "${parsed.provider}" does not match selected settings provider "${provider}".`,
		);
	}

	const baseUrl = settings?.llm_base_url?.trim();
	if (!baseUrl) {
		throw new Error("LLM base URL is not configured. Please set llm_base_url in settings.");
	}

	const apiKey = settings?.llm_api_key?.trim();
	if (!apiKey) {
		throw new Error("LLM API key is not configured. Please set llm_api_key in settings.");
	}

	const modelKwargs =
		provider === "zhipu" && thinking
			? {
					thinking: {
						type: thinking.type,
						...(thinking.clearThinking !== undefined
							? { clear_thinking: thinking.clearThinking }
							: {}),
					},
				}
			: undefined;

	const reasoning =
		provider === "openai" && isOpenAIReasoningModel(model) && thinking
			? ({
					effort: (thinking.type === "disabled"
						? "low"
						: "medium") as OpenAIReasoningConfig["effort"],
					...(thinking.type === "enabled" ? { summary: "auto" as const } : {}),
				} satisfies OpenAIReasoningConfig)
			: undefined;

	const zdrEnabled = provider === "openai" ? shouldEnableOpenAIZdr(baseUrl, settings) : undefined;

	return {
		provider,
		model,
		baseUrl,
		apiKey,
		...(modelKwargs ? { modelKwargs } : {}),
		...(reasoning ? { reasoning } : {}),
		...(zdrEnabled !== undefined ? { zdrEnabled } : {}),
	};
}

function readReasoningFromOpenAIAdditionalKwargs(
	additionalKwargs: Record<string, unknown>,
): string | null {
	const reasoning = additionalKwargs.reasoning;
	if (!reasoning || typeof reasoning !== "object") {
		return null;
	}

	const summary = (reasoning as { summary?: unknown }).summary;
	if (!Array.isArray(summary)) {
		return null;
	}

	const text = summary
		.map((part) => {
			if (!part || typeof part !== "object") return "";
			const value = (part as { text?: unknown }).text;
			return typeof value === "string" ? value : "";
		})
		.join("");

	return text.length > 0 ? text : null;
}

function readReasoningFromContentBlocks(content: unknown): string | null {
	if (!Array.isArray(content)) {
		return null;
	}

	const text = content
		.map((part) => {
			if (!part || typeof part !== "object") {
				return "";
			}

			const direct = (part as { reasoning?: unknown }).reasoning;
			if (typeof direct === "string" && direct.length > 0) {
				return direct;
			}

			const nestedSummary = (part as { summary?: unknown }).summary;
			if (Array.isArray(nestedSummary)) {
				return nestedSummary
					.map((item) => {
						if (!item || typeof item !== "object") {
							return "";
						}
						const summaryText = (item as { text?: unknown }).text;
						return typeof summaryText === "string" ? summaryText : "";
					})
					.join("");
			}

			const nestedContent = (part as { content?: unknown }).content;
			if (Array.isArray(nestedContent)) {
				return nestedContent
					.map((item) => {
						if (!item || typeof item !== "object") {
							return "";
						}
						const kind = (item as { type?: unknown }).type;
						if (kind !== "reasoning_text") {
							return "";
						}
						const nestedText = (item as { text?: unknown }).text;
						return typeof nestedText === "string" ? nestedText : "";
					})
					.join("");
			}

			return "";
		})
		.join("");

	return text.length > 0 ? text : null;
}

export function extractReasoningDeltaByProvider(
	provider: LlmProvider,
	message: unknown,
): string | null {
	if (!message || typeof message !== "object") {
		return null;
	}

	const additionalKwargs = (message as { additional_kwargs?: Record<string, unknown> })
		.additional_kwargs;
	if (additionalKwargs && typeof additionalKwargs === "object") {
		const directReasoning = additionalKwargs.reasoning_content;
		if (typeof directReasoning === "string" && directReasoning.length > 0) {
			return directReasoning;
		}

		const rawResponse = additionalKwargs.__raw_response as
			| {
					choices?: Array<{
						delta?: {
							reasoning_content?: unknown;
						};
					}>;
			  }
			| undefined;

		const reasoningDelta = rawResponse?.choices?.[0]?.delta?.reasoning_content;
		if (typeof reasoningDelta === "string" && reasoningDelta.length > 0) {
			return reasoningDelta;
		}

		if (provider === "openai") {
			const openAIReasoning = readReasoningFromOpenAIAdditionalKwargs(additionalKwargs);
			if (openAIReasoning) {
				return openAIReasoning;
			}
		}
	}

	const contentReasoning = readReasoningFromContentBlocks(
		(message as { content?: unknown }).content,
	);
	if (contentReasoning) {
		return contentReasoning;
	}

	return null;
}
