import { zValidator } from "@hono/zod-validator";
import { agentMcpServers, mcpServers } from "@nano-agent/db";
import {
	createMcpServerSchema,
	installMcpServerSchema,
	updateAgentMcpServerSchema,
} from "@nano-agent/shared";
import { and, eq } from "drizzle-orm";
import { Hono } from "hono";

function normalizeTransport(transport: string): "stdio" | "sse" | "http" {
	return transport === "streamable-http" ? "http" : (transport as "stdio" | "sse" | "http");
}

export const mcpRoute = new Hono()
	// List all MCP servers (marketplace)
	.get("/", async (c) => {
		const db = c.get("db");
		const result = await db.select().from(mcpServers);
		return c.json(
			result.map((server) => ({
				...server,
				transport: normalizeTransport(server.transport),
				authType: server.authType ?? "none",
			})),
		);
	})

	// Create MCP server (platform level)
	.post("/", zValidator("json", createMcpServerSchema), async (c) => {
		const db = c.get("db");
		const input = c.req.valid("json");
		const result = await db
			.insert(mcpServers)
			.values({
				name: input.name,
				description: input.description,
				icon: input.icon ?? null,
				transport: input.transport,
				command: input.command ?? null,
				args: input.args ?? null,
				url: input.url ?? null,
				headers: input.headers ?? null,
				env: input.env ?? null,
				authType: input.authType,
				category: input.category,
			})
			.returning();
		return c.json(result[0], 201);
	})

	// Delete MCP server (platform level)
	.delete("/:id", async (c) => {
		const db = c.get("db");
		const id = c.req.param("id");
		const result = await db.delete(mcpServers).where(eq(mcpServers.id, id)).returning();
		if (result.length === 0) {
			return c.json({ error: "MCP server not found" }, 404);
		}
		return c.json({ success: true });
	})

	// Get MCP servers installed for an agent
	.get("/agent/:agentId", async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");
		const result = await db
			.select({
				mcpServer: mcpServers,
				agentMcpServer: agentMcpServers,
			})
			.from(agentMcpServers)
			.innerJoin(mcpServers, eq(agentMcpServers.mcpServerId, mcpServers.id))
			.where(eq(agentMcpServers.agentId, agentId));
		return c.json(
			result.map((item) => ({
				...item,
				mcpServer: {
					...item.mcpServer,
					transport: normalizeTransport(item.mcpServer.transport),
					authType: item.mcpServer.authType ?? "none",
				},
			})),
		);
	})

	// Install MCP server for agent
	.post("/agent/:agentId", zValidator("json", installMcpServerSchema), async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");
		const { mcpServerId, enabled } = c.req.valid("json");

		const result = await db
			.insert(agentMcpServers)
			.values({ agentId, mcpServerId, enabled })
			.returning();
		return c.json(result[0], 201);
	})

	// Update agent MCP server (enable/disable)
	.patch(
		"/agent/:agentId/:mcpServerId",
		zValidator("json", updateAgentMcpServerSchema),
		async (c) => {
			const db = c.get("db");
			const { agentId, mcpServerId } = c.req.param();
			const { enabled } = c.req.valid("json");

			const result = await db
				.update(agentMcpServers)
				.set({ enabled })
				.where(
					and(eq(agentMcpServers.agentId, agentId), eq(agentMcpServers.mcpServerId, mcpServerId)),
				)
				.returning();

			if (result.length === 0) {
				return c.json({ error: "Agent MCP server not found" }, 404);
			}
			return c.json(result[0]);
		},
	)

	// Uninstall MCP server from agent
	.delete("/agent/:agentId/:mcpServerId", async (c) => {
		const db = c.get("db");
		const { agentId, mcpServerId } = c.req.param();
		const result = await db
			.delete(agentMcpServers)
			.where(
				and(eq(agentMcpServers.agentId, agentId), eq(agentMcpServers.mcpServerId, mcpServerId)),
			)
			.returning();
		if (result.length === 0) {
			return c.json({ error: "Agent MCP server not found" }, 404);
		}
		return c.json({ success: true });
	});
