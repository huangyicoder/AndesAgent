import type {
	Agent,
	AgentMcpServer,
	AgentSkill,
	ChatAttachment,
	CodeExecutionResult,
	Conversation,
	KnowledgeDocument,
	KnowledgeRebuildSummary,
	KnowledgeVectorStatus,
	McpServer,
	Message,
	Skill,
	SystemPromptDocument,
	UpdateSettingsInput,
	UpdateSystemPromptDocumentInput,
} from "@nano-agent/shared";

const BASE_URL = "/api/v1";

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
	const res = await fetch(`${BASE_URL}${url}`, {
		...init,
		headers: {
			"Content-Type": "application/json",
			...init?.headers,
		},
	});
	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		throw new Error(body.error ?? `HTTP ${res.status}`);
	}
	return res.json();
}

// ─── Agents ───────────────────────────────────────────────

export const agentsApi = {
	list: () => fetchJson<Agent[]>("/agents"),
	get: (id: string) => fetchJson<Agent>(`/agents/${id}`),
	create: (data: { name: string; description?: string; disabledTools?: string[] }) =>
		fetchJson<Agent>("/agents", {
			method: "POST",
			body: JSON.stringify(data),
		}),
	update: (id: string, data: Partial<Agent>) =>
		fetchJson<Agent>(`/agents/${id}`, {
			method: "PATCH",
			body: JSON.stringify(data),
		}),
	delete: (id: string) => fetchJson<{ success: boolean }>(`/agents/${id}`, { method: "DELETE" }),
};

// ─── Conversations ────────────────────────────────────────

export const conversationsApi = {
	list: (agentId: string) => fetchJson<Conversation[]>(`/conversations?agentId=${agentId}`),
	create: (agentId: string, title?: string) =>
		fetchJson<Conversation>("/conversations", {
			method: "POST",
			body: JSON.stringify({ agentId, title }),
		}),
	delete: (id: string) =>
		fetchJson<{ success: boolean }>(`/conversations/${id}`, { method: "DELETE" }),
};

// ─── Messages ─────────────────────────────────────────────

export interface MessagesResponse {
	items: Message[];
	nextCursor: string | null;
	hasMore: boolean;
}

export const messagesApi = {
	list: (conversationId: string, cursor?: string) => {
		const params = new URLSearchParams();
		if (cursor) params.set("cursor", cursor);
		return fetchJson<MessagesResponse>(`/conversations/${conversationId}/messages?${params}`);
	},
	clear: (conversationId: string) =>
		fetchJson<{ success: boolean }>(`/conversations/${conversationId}/messages`, {
			method: "DELETE",
		}),
	saveExecutionResult: (
		conversationId: string,
		messageId: string,
		data: {
			codeHash: string;
			output: string | null;
			exitCode: number | null;
			error: string | null;
		},
	) =>
		fetchJson<{ success: boolean }>(
			`/conversations/${conversationId}/messages/${messageId}/execution-result`,
			{ method: "PATCH", body: JSON.stringify(data) },
		),
};

// ─── Sandbox ──────────────────────────────────────────────

export const sandboxApi = {
	executeCode: (conversationId: string, data: { language: string; code: string }) =>
		fetchJson<CodeExecutionResult>(`/conversations/${conversationId}/execute`, {
			method: "POST",
			body: JSON.stringify(data),
		}),
};

// ─── Files ────────────────────────────────────────────────

export const filesApi = {
	uploadToSandbox: async (conversationId: string, file: File): Promise<ChatAttachment> => {
		const formData = new FormData();
		formData.append("file", file);
		const res = await fetch(`${BASE_URL}/conversations/${conversationId}/upload`, {
			method: "POST",
			body: formData,
		});
		if (!res.ok) {
			const body = await res.json().catch(() => ({}));
			throw new Error(body.error ?? `Upload failed: HTTP ${res.status}`);
		}
		return res.json();
	},
};

// ─── Chat (SSE) ───────────────────────────────────────────

export interface ChatThinkingOptions {
	type: "enabled" | "disabled";
	clearThinking?: boolean;
}

export interface StreamChatOptions {
	thinking?: ChatThinkingOptions;
	attachments?: ChatAttachment[];
	signal?: AbortSignal;
}

export type ChatStreamEvent =
	| { type: "token"; content: string }
	| { type: "reasoning"; content: string }
	| { type: "tool_call"; name: string; args: unknown }
	| { type: "tool_call_started"; callId?: string | null; name: string; args: unknown }
	| {
			type: "tool_call_output";
			callId?: string | null;
			name: string;
			output: string;
			truncated: boolean;
	  }
	| {
			type: "tool_call_error";
			callId?: string | null;
			name: string;
			error: string;
			truncated: boolean;
	  }
	| {
			type: "tool_call_finished";
			callId?: string | null;
			name: string;
			status: "running" | "completed" | "error";
	  }
	| { type: "error"; content: string }
	| { type: "done"; message: Message };

export async function* streamChat(
	conversationId: string,
	content: string,
	options?: StreamChatOptions,
): AsyncGenerator<ChatStreamEvent> {
	const { signal, ...restOptions } = options ?? {};
	const res = await fetch(`${BASE_URL}/conversations/${conversationId}/chat`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			content,
			...restOptions,
		}),
		signal,
	});

	if (!res.ok || !res.body) {
		const body = await res.json().catch(() => ({}));
		throw new Error((body as { error?: string }).error ?? `Chat request failed: ${res.status}`);
	}

	const reader = res.body.getReader();
	const decoder = new TextDecoder();
	let buffer = "";

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;

		buffer += decoder.decode(value, { stream: true });
		const lines = buffer.split("\n");
		buffer = lines.pop() ?? "";

		for (const line of lines) {
			if (line.startsWith("data: ")) {
				const data = JSON.parse(line.slice(6)) as ChatStreamEvent;
				yield data;
			}
		}
	}
}

// ─── Skills ───────────────────────────────────────────────

export interface AgentSkillWithDetail {
	skill: Skill;
	agentSkill: AgentSkill;
}

export const skillsApi = {
	list: () => fetchJson<Skill[]>("/skills"),
	get: (id: string) => fetchJson<Skill>(`/skills/${id}`),
	create: (data: {
		name: string;
		description: string;
		icon?: string | null;
		category?: string;
		config?: Record<string, unknown> | null;
	}) =>
		fetchJson<Skill>("/skills", {
			method: "POST",
			body: JSON.stringify(data),
		}),
	upload: async (file: File): Promise<Skill> => {
		const formData = new FormData();
		formData.append("file", file);
		const res = await fetch(`${BASE_URL}/skills/upload`, {
			method: "POST",
			body: formData,
		});
		if (!res.ok) {
			const body = await res.json().catch(() => ({}));
			throw new Error((body as { error?: string }).error ?? `上传失败: HTTP ${res.status}`);
		}
		return res.json() as Promise<Skill>;
	},
	reupload: async (id: string, file: File): Promise<Skill> => {
		const formData = new FormData();
		formData.append("file", file);
		const res = await fetch(`${BASE_URL}/skills/${id}/upload`, {
			method: "PUT",
			body: formData,
		});
		if (!res.ok) {
			const body = await res.json().catch(() => ({}));
			throw new Error((body as { error?: string }).error ?? `更新失败: HTTP ${res.status}`);
		}
		return res.json() as Promise<Skill>;
	},
	updateMeta: (
		id: string,
		data: { name?: string; description?: string; icon?: string | null; category?: string },
	) =>
		fetchJson<Skill>(`/skills/${id}`, {
			method: "PATCH",
			body: JSON.stringify(data),
		}),
	listFiles: (id: string) => fetchJson<string[]>(`/skills/${id}/files`),
	readFile: async (id: string, filePath: string): Promise<string> => {
		const res = await fetch(`${BASE_URL}/skills/${id}/file/${filePath}`);
		if (!res.ok) throw new Error(`读取文件失败: HTTP ${res.status}`);
		return res.text();
	},
	delete: (id: string) => fetchJson<{ success: boolean }>(`/skills/${id}`, { method: "DELETE" }),
	listForAgent: (agentId: string) => fetchJson<AgentSkillWithDetail[]>(`/skills/agent/${agentId}`),
	install: (agentId: string, skillId: string) =>
		fetchJson<AgentSkill>(`/skills/agent/${agentId}`, {
			method: "POST",
			body: JSON.stringify({ skillId, enabled: true }),
		}),
	update: (agentId: string, skillId: string, enabled: boolean) =>
		fetchJson<AgentSkill>(`/skills/agent/${agentId}/${skillId}`, {
			method: "PATCH",
			body: JSON.stringify({ enabled }),
		}),
	uninstall: (agentId: string, skillId: string) =>
		fetchJson<{ success: boolean }>(`/skills/agent/${agentId}/${skillId}`, {
			method: "DELETE",
		}),
};

// ─── MCP Servers ──────────────────────────────────────────

export interface AgentMcpWithDetail {
	mcpServer: McpServer;
	agentMcpServer: AgentMcpServer;
}

export const mcpApi = {
	list: () => fetchJson<McpServer[]>("/mcp-servers"),
	create: (data: {
		name: string;
		description: string;
		icon?: string | null;
		transport?: "stdio" | "sse" | "http" | "streamable-http";
		command?: string | null;
		args?: string[] | null;
		url?: string | null;
		headers?: Record<string, string> | null;
		env?: Record<string, string> | null;
		authType?: "none" | "bearer_mcp_api_key";
		category?: string;
	}) =>
		fetchJson<McpServer>("/mcp-servers", {
			method: "POST",
			body: JSON.stringify(data),
		}),
	delete: (id: string) =>
		fetchJson<{ success: boolean }>(`/mcp-servers/${id}`, { method: "DELETE" }),
	listForAgent: (agentId: string) =>
		fetchJson<AgentMcpWithDetail[]>(`/mcp-servers/agent/${agentId}`),
	install: (agentId: string, mcpServerId: string) =>
		fetchJson<AgentMcpServer>(`/mcp-servers/agent/${agentId}`, {
			method: "POST",
			body: JSON.stringify({ mcpServerId, enabled: true }),
		}),
	update: (agentId: string, mcpServerId: string, enabled: boolean) =>
		fetchJson<AgentMcpServer>(`/mcp-servers/agent/${agentId}/${mcpServerId}`, {
			method: "PATCH",
			body: JSON.stringify({ enabled }),
		}),
	uninstall: (agentId: string, mcpServerId: string) =>
		fetchJson<{ success: boolean }>(`/mcp-servers/agent/${agentId}/${mcpServerId}`, {
			method: "DELETE",
		}),
};

// ─── System Prompts ──────────────────────────────────────

export const promptsApi = {
	getDocumentForAgent: (agentId: string) =>
		fetchJson<SystemPromptDocument>(`/prompts/agent/${agentId}/document`),
	saveDocumentForAgent: (agentId: string, data: UpdateSystemPromptDocumentInput) =>
		fetchJson<SystemPromptDocument>(`/prompts/agent/${agentId}/document`, {
			method: "PUT",
			body: JSON.stringify(data),
		}),
};

// ─── Knowledge ────────────────────────────────────────────

export const knowledgeApi = {
	list: (agentId: string) => fetchJson<KnowledgeDocument[]>(`/knowledge/agent/${agentId}`),
	upload: async (agentId: string, file: File): Promise<KnowledgeDocument> => {
		const formData = new FormData();
		formData.append("file", file);
		const res = await fetch(`${BASE_URL}/knowledge/agent/${agentId}/upload`, {
			method: "POST",
			body: formData,
		});
		if (!res.ok) {
			const body = await res.json().catch(() => ({}));
			throw new Error(body.error ?? `HTTP ${res.status}`);
		}
		return res.json();
	},
	delete: (docId: string) =>
		fetchJson<{ success: boolean }>(`/knowledge/${docId}`, { method: "DELETE" }),
	rebuild: (docId: string) =>
		fetchJson<{ success: boolean; message: string }>(`/knowledge/${docId}/rebuild`, {
			method: "POST",
		}),
	rebuildAll: (agentId: string) =>
		fetchJson<KnowledgeRebuildSummary>(`/knowledge/agent/${agentId}/rebuild-all`, {
			method: "POST",
		}),
	status: () => fetchJson<KnowledgeVectorStatus>("/knowledge/status"),
};

// ─── Settings ─────────────────────────────────────────────

export const settingsApi = {
	get: () => fetchJson<Record<string, string>>("/settings"),
	update: (data: UpdateSettingsInput) =>
		fetchJson<Record<string, string>>("/settings", {
			method: "PATCH",
			body: JSON.stringify(data),
		}),
};
