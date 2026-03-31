import { zValidator } from "@hono/zod-validator";
import { updateSystemPromptDocumentSchema } from "@nano-agent/shared";
import { Hono } from "hono";
import {
	getSystemPromptDocumentForAgent,
	saveSystemPromptDocumentForAgent,
} from "../services/system-prompts.js";

export const promptsRoute = new Hono()
	.get("/agent/:agentId/document", async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");
		const result = await getSystemPromptDocumentForAgent(db, agentId);
		return c.json(result);
	})

	.put(
		"/agent/:agentId/document",
		zValidator("json", updateSystemPromptDocumentSchema),
		async (c) => {
			const db = c.get("db");
			const agentId = c.req.param("agentId");
			const input = c.req.valid("json");
			const result = await saveSystemPromptDocumentForAgent(db, agentId, input.content);
			return c.json(result);
		},
	);
