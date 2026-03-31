import { z } from "zod";

export const mcpTransportSchema = z.enum(["stdio", "sse", "http"]);
export const mcpTransportInputSchema = z.enum(["stdio", "sse", "http", "streamable-http"]);
export const mcpAuthTypeSchema = z.enum(["none", "bearer_mcp_api_key"]);

function normalizeMcpTransport(
	transport: z.infer<typeof mcpTransportInputSchema>,
): z.infer<typeof mcpTransportSchema> {
	return transport === "streamable-http" ? "http" : transport;
}

export const createMcpServerSchema = z
	.object({
		name: z.string().min(1),
		description: z.string().min(1),
		icon: z.string().nullable().optional(),
		transport: mcpTransportInputSchema.default("stdio").transform(normalizeMcpTransport),
		command: z.string().nullable().optional(),
		args: z.array(z.string()).nullable().optional(),
		url: z.string().nullable().optional(),
		headers: z.record(z.string()).nullable().optional(),
		env: z.record(z.string()).nullable().optional(),
		authType: mcpAuthTypeSchema.default("none"),
		category: z.string().default("general"),
	})
	.superRefine((value, ctx) => {
		if (value.transport === "stdio" && !value.command?.trim()) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["command"],
				message: "command is required when transport is stdio",
			});
		}
		if ((value.transport === "sse" || value.transport === "http") && !value.url?.trim()) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				path: ["url"],
				message: "url is required when transport is sse/http",
			});
		}
	});

export const installMcpServerSchema = z.object({
	mcpServerId: z.string(),
	enabled: z.boolean().default(true),
});

export const updateAgentMcpServerSchema = z.object({
	enabled: z.boolean(),
});

export type CreateMcpServerInput = z.infer<typeof createMcpServerSchema>;

export type McpTransport = z.infer<typeof mcpTransportSchema>;
export type McpAuthType = z.infer<typeof mcpAuthTypeSchema>;
export type InstallMcpServerInput = z.infer<typeof installMcpServerSchema>;
export type UpdateAgentMcpServerInput = z.infer<typeof updateAgentMcpServerSchema>;

export interface McpServer {
	id: string;
	name: string;
	description: string;
	icon: string | null;
	transport: McpTransport;
	command: string | null;
	args: string[] | null;
	url: string | null;
	headers: Record<string, string> | null;
	env: Record<string, string> | null;
	authType: McpAuthType;
	category: string;
	createdAt: string;
}

export interface AgentMcpServer {
	agentId: string;
	mcpServerId: string;
	enabled: boolean;
	status: "connected" | "disconnected" | "error";
	installedAt: string;
}
