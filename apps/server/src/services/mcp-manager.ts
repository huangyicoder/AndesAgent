import type { StructuredToolInterface } from "@langchain/core/tools";
import { MultiServerMCPClient } from "@langchain/mcp-adapters";

interface McpServerConfig {
	id: string;
	name: string;
	transport: "stdio" | "sse" | "http" | "streamable-http";
	command: string | null;
	args: string[] | null;
	url: string | null;
	headers: Record<string, string> | null;
	env: Record<string, string> | null;
	authType: "none" | "bearer_mcp_api_key";
}

interface ManagedClient {
	client: MultiServerMCPClient;
	tools: StructuredToolInterface[];
	configKey: string;
}

function normalizeTransport(transport: McpServerConfig["transport"]): "stdio" | "sse" | "http" {
	return transport === "streamable-http" ? "http" : transport;
}

function sanitizeStringRecord(
	value: Record<string, string> | null | undefined,
): Record<string, string> | undefined {
	if (!value) {
		return undefined;
	}

	const sanitized = Object.entries(value).reduce<Record<string, string>>((acc, [key, current]) => {
		if (typeof current === "string" && key.trim().length > 0) {
			acc[key] = current;
		}
		return acc;
	}, {});
	return Object.keys(sanitized).length > 0 ? sanitized : undefined;
}

function buildConfigKey(mcpConfigs: McpServerConfig[]): string {
	const summary = mcpConfigs
		.map((config) => ({
			id: config.id,
			transport: normalizeTransport(config.transport),
			command: config.command ?? null,
			args: config.args ?? [],
			url: config.url ?? null,
			headers: config.headers ?? null,
			env: config.env ?? null,
			authType: config.authType,
		}))
		.sort((a, b) => a.id.localeCompare(b.id));

	return JSON.stringify({
		servers: summary,
	});
}

function redactSecrets(value: string): string {
	return value.replace(/Bearer\s+[A-Za-z0-9._-]+/gi, "Bearer ***");
}

/**
 * MCP 连接池管理器
 * 为每个 agent 管理其启用的 MCP 服务器连接
 */
class McpManager {
	private clients = new Map<string, ManagedClient>();

	/**
	 * 获取 agent 的所有 MCP 工具
	 * 如果连接已存在则复用，否则创建新连接
	 */
	async getToolsForAgent(
		agentId: string,
		mcpConfigs: McpServerConfig[],
	): Promise<StructuredToolInterface[]> {
		if (mcpConfigs.length === 0) {
			await this.closeAgent(agentId);
			return [];
		}

		// 检查是否需要重建连接（配置变更）
		const existing = this.clients.get(agentId);
		const configKey = buildConfigKey(mcpConfigs);

		if (existing && configKey === existing.configKey) {
			return existing.tools;
		}

		// 清理旧连接
		if (existing) {
			await this.closeAgent(agentId);
		}

		// 构建 MCP 服务器配置
		// biome-ignore lint/suspicious/noExplicitAny: MultiServerMCPClient has complex generic types
		const serverConfigs: Record<string, any> = {};
		for (const config of mcpConfigs) {
			const transport = normalizeTransport(config.transport);

			if (transport === "stdio" && config.command) {
				const env = sanitizeStringRecord(config.env);
				serverConfigs[config.name] = {
					transport: "stdio" as const,
					command: config.command,
					args: config.args ?? [],
					...(env ? { env } : {}),
				};
				continue;
			}

			if ((transport === "sse" || transport === "http") && config.url) {
				const headers = sanitizeStringRecord(config.headers) ?? {};

				serverConfigs[config.name] = {
					transport,
					url: config.url,
					...(Object.keys(headers).length > 0 ? { headers } : {}),
				};
			}
		}

		if (Object.keys(serverConfigs).length === 0) {
			return [];
		}

		try {
			const client = new MultiServerMCPClient({ mcpServers: serverConfigs });
			const tools = await client.getTools();

			this.clients.set(agentId, {
				client,
				tools,
				configKey,
			});

			return tools;
		} catch (error) {
			console.error(
				`[MCP Manager] Failed to connect MCP servers for agent ${agentId}: ${redactSecrets(
					String(error),
				)}`,
			);
			return [];
		}
	}

	/**
	 * 关闭 agent 的所有 MCP 连接
	 */
	async closeAgent(agentId: string): Promise<void> {
		const managed = this.clients.get(agentId);
		if (managed) {
			try {
				await managed.client.close();
			} catch (error) {
				console.error(
					`[MCP Manager] Error closing connections for agent ${agentId}: ${redactSecrets(
						String(error),
					)}`,
				);
			}
			this.clients.delete(agentId);
		}
	}

	/**
	 * 关闭所有连接
	 */
	async closeAll(): Promise<void> {
		for (const [agentId] of this.clients) {
			await this.closeAgent(agentId);
		}
	}
}

// 单例
export const mcpManager = new McpManager();
