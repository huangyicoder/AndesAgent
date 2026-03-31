import type { Db } from "@nano-agent/db";
import { settings, systemPrompts } from "@nano-agent/db";
import { asc, eq, inArray } from "drizzle-orm";

const SINGLE_SYSTEM_PROMPT_NAME = "系统提示词文档";
const DEFAULT_SYSTEM_PROMPT_DOCUMENT_SETTING_KEY = "default_system_prompt_document";

function normalizePromptContent(content: string): string {
	return content.trim();
}

function resolvePrimaryPromptRow(rows: (typeof systemPrompts.$inferSelect)[]) {
	return rows.find((row) => row.name === SINGLE_SYSTEM_PROMPT_NAME) ?? rows[0] ?? null;
}

async function getDefaultSystemPromptDocument(db: Db): Promise<string> {
	const row = await db
		.select({ value: settings.value })
		.from(settings)
		.where(eq(settings.key, DEFAULT_SYSTEM_PROMPT_DOCUMENT_SETTING_KEY))
		.limit(1);
	return row[0]?.value ?? "";
}

export async function ensureDefaultSystemPromptsForAgent(db: Db, agentId: string) {
	const existing = await db
		.select({ id: systemPrompts.id })
		.from(systemPrompts)
		.where(eq(systemPrompts.agentId, agentId))
		.limit(1);

	if (existing.length > 0) {
		return;
	}

	const defaultDocument = await getDefaultSystemPromptDocument(db);

	await db.insert(systemPrompts).values({
		agentId,
		name: SINGLE_SYSTEM_PROMPT_NAME,
		content: defaultDocument,
		enabled: true,
		sortOrder: 0,
	});
}

export async function getSystemPromptDocumentForAgent(db: Db, agentId: string) {
	await ensureDefaultSystemPromptsForAgent(db, agentId);

	const rows = await db
		.select()
		.from(systemPrompts)
		.where(eq(systemPrompts.agentId, agentId))
		.orderBy(asc(systemPrompts.sortOrder), asc(systemPrompts.createdAt));

	const primaryRow = resolvePrimaryPromptRow(rows);
	if (!primaryRow) {
		return null;
	}

	const enabledRows = rows.filter(
		(row) => row.enabled && normalizePromptContent(row.content).length > 0,
	);
	const sourceRows =
		enabledRows.length > 0
			? enabledRows
			: rows.filter((row) => normalizePromptContent(row.content).length > 0);

	const content = sourceRows.map((row) => normalizePromptContent(row.content)).join("\n\n");

	return {
		id: primaryRow.id,
		agentId: primaryRow.agentId,
		content,
		createdAt: primaryRow.createdAt,
		updatedAt: primaryRow.updatedAt,
	};
}

export async function saveSystemPromptDocumentForAgent(db: Db, agentId: string, content: string) {
	await ensureDefaultSystemPromptsForAgent(db, agentId);

	const rows = await db
		.select()
		.from(systemPrompts)
		.where(eq(systemPrompts.agentId, agentId))
		.orderBy(asc(systemPrompts.sortOrder), asc(systemPrompts.createdAt));

	const primaryRow = resolvePrimaryPromptRow(rows);
	if (!primaryRow) {
		const created = await db
			.insert(systemPrompts)
			.values({
				agentId,
				name: SINGLE_SYSTEM_PROMPT_NAME,
				content,
				enabled: true,
				sortOrder: 0,
			})
			.returning();
		return {
			id: created[0].id,
			agentId: created[0].agentId,
			content: created[0].content,
			createdAt: created[0].createdAt,
			updatedAt: created[0].updatedAt,
		};
	}

	const updated = await db
		.update(systemPrompts)
		.set({
			name: SINGLE_SYSTEM_PROMPT_NAME,
			content,
			enabled: true,
			sortOrder: 0,
		})
		.where(eq(systemPrompts.id, primaryRow.id))
		.returning();

	const extraPromptIds = rows.filter((row) => row.id !== primaryRow.id).map((row) => row.id);
	if (extraPromptIds.length > 0) {
		await db.delete(systemPrompts).where(inArray(systemPrompts.id, extraPromptIds));
	}

	return {
		id: updated[0].id,
		agentId: updated[0].agentId,
		content: updated[0].content,
		createdAt: updated[0].createdAt,
		updatedAt: updated[0].updatedAt,
	};
}
