import { zValidator } from "@hono/zod-validator";
import { settings } from "@nano-agent/db";
import { updateSettingsSchema } from "@nano-agent/shared";
import { eq, inArray, notInArray } from "drizzle-orm";
import { Hono } from "hono";

const LEGACY_SETTING_KEYS = ["mcp_api_key"] as const;
const NULLABLE_SETTING_KEYS = ["agent_tool_call_run_limit", "agent_model_call_run_limit"] as const;

export const settingsRoute = new Hono()
	// Get all settings
	.get("/", async (c) => {
		const db = c.get("db");
		const result = await db
			.select()
			.from(settings)
			.where(notInArray(settings.key, [...LEGACY_SETTING_KEYS]));
		const obj: Record<string, string> = {};
		for (const row of result) {
			obj[row.key] = row.value;
		}
		return c.json(obj);
	})

	// Update settings (upsert)
	.patch("/", zValidator("json", updateSettingsSchema), async (c) => {
		const db = c.get("db");
		const input = c.req.valid("json");

		await db.delete(settings).where(inArray(settings.key, [...LEGACY_SETTING_KEYS]));

		for (const [key, value] of Object.entries(input)) {
			if (LEGACY_SETTING_KEYS.includes(key as (typeof LEGACY_SETTING_KEYS)[number])) {
				continue;
			}
			if (value === undefined) {
				continue;
			}
			if (
				value === null &&
				NULLABLE_SETTING_KEYS.includes(key as (typeof NULLABLE_SETTING_KEYS)[number])
			) {
				await db.delete(settings).where(eq(settings.key, key));
				continue;
			}

			await db
				.insert(settings)
				.values({ key, value: String(value) })
				.onConflictDoUpdate({
					target: settings.key,
					set: { value: String(value) },
				});
		}

		// Return updated settings
		const result = await db
			.select()
			.from(settings)
			.where(notInArray(settings.key, [...LEGACY_SETTING_KEYS]));
		const obj: Record<string, string> = {};
		for (const row of result) {
			obj[row.key] = row.value;
		}
		return c.json(obj);
	});
