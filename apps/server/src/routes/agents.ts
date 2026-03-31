import { zValidator } from "@hono/zod-validator";
import { agents } from "@nano-agent/db";
import { createAgentSchema, updateAgentSchema } from "@nano-agent/shared";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { ensureDefaultSystemPromptsForAgent } from "../services/system-prompts.js";

function normalizeDisabledTools(input: string[] | undefined): string[] {
	if (!input) {
		return [];
	}

	const unique = new Set<string>();
	for (const item of input) {
		const normalized = item.trim().toLowerCase();
		if (normalized) {
			unique.add(normalized);
		}
	}

	return Array.from(unique);
}

export const agentsRoute = new Hono()
	// List all agents
	.get("/", async (c) => {
		const db = c.get("db");
		const result = await db.select().from(agents).orderBy(agents.createdAt);
		return c.json(result);
	})

	// Get single agent
	.get("/:id", async (c) => {
		const db = c.get("db");
		const result = await db
			.select()
			.from(agents)
			.where(eq(agents.id, c.req.param("id")));
		if (result.length === 0) {
			return c.json({ error: "Agent not found" }, 404);
		}
		return c.json(result[0]);
	})

	// Create agent
	.post("/", zValidator("json", createAgentSchema), async (c) => {
		const db = c.get("db");
		const input = c.req.valid("json");
		const normalizedDisabledTools = normalizeDisabledTools(input.disabledTools);
		const result = await db
			.insert(agents)
			.values({
				name: input.name,
				description: input.description ?? null,
				systemPrompt: input.systemPrompt ?? null,
				model: input.model,
				temperature: Math.round(input.temperature * 10),
				avatar: input.avatar ?? null,
				disabledTools: normalizedDisabledTools.length > 0 ? normalizedDisabledTools : null,
			})
			.returning();
		await ensureDefaultSystemPromptsForAgent(db, result[0].id);
		return c.json(result[0], 201);
	})

	// Update agent
	.patch("/:id", zValidator("json", updateAgentSchema), async (c) => {
		const db = c.get("db");
		const input = c.req.valid("json");
		const values: Record<string, unknown> = {};
		if (input.name !== undefined) values.name = input.name;
		if (input.description !== undefined) values.description = input.description;
		if (input.systemPrompt !== undefined) values.systemPrompt = input.systemPrompt;
		if (input.model !== undefined) values.model = input.model;
		if (input.temperature !== undefined) values.temperature = Math.round(input.temperature * 10);
		if (input.avatar !== undefined) values.avatar = input.avatar;
		if (input.disabledTools !== undefined) {
			const normalizedDisabledTools = normalizeDisabledTools(input.disabledTools);
			values.disabledTools = normalizedDisabledTools.length > 0 ? normalizedDisabledTools : null;
		}

		const result = await db
			.update(agents)
			.set(values)
			.where(eq(agents.id, c.req.param("id")))
			.returning();

		if (result.length === 0) {
			return c.json({ error: "Agent not found" }, 404);
		}
		return c.json(result[0]);
	})

	// Delete agent
	.delete("/:id", async (c) => {
		const db = c.get("db");
		const result = await db
			.delete(agents)
			.where(eq(agents.id, c.req.param("id")))
			.returning();
		if (result.length === 0) {
			return c.json({ error: "Agent not found" }, 404);
		}
		return c.json({ success: true });
	});
