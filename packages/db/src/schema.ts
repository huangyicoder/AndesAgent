import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// Helper for nanoid-style IDs
const id = () =>
	text("id")
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID());

const timestamps = {
	createdAt: text("created_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
	updatedAt: text("updated_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString())
		.$onUpdateFn(() => new Date().toISOString()),
};

// ─── Agents ───────────────────────────────────────────────

export const agents = sqliteTable("agents", {
	id: id(),
	name: text("name").notNull(),
	description: text("description"),
	systemPrompt: text("system_prompt"),
	model: text("model").notNull().default("gpt-4o"),
	temperature: integer("temperature", { mode: "number" }).notNull().default(7), // stored as 0-20, divided by 10
	avatar: text("avatar"),
	disabledTools: text("disabled_tools", { mode: "json" }).$type<string[]>(),
	...timestamps,
});

// ─── Conversations ────────────────────────────────────────

export const conversations = sqliteTable("conversations", {
	id: id(),
	agentId: text("agent_id")
		.notNull()
		.references(() => agents.id, { onDelete: "cascade" }),
	title: text("title"),
	...timestamps,
});

// ─── Messages ─────────────────────────────────────────────

export const messages = sqliteTable("messages", {
	id: id(),
	conversationId: text("conversation_id")
		.notNull()
		.references(() => conversations.id, { onDelete: "cascade" }),
	role: text("role", { enum: ["user", "assistant", "system", "tool"] }).notNull(),
	content: text("content").notNull(),
	metadata: text("metadata", { mode: "json" }),
	createdAt: text("created_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
});

// ─── Skills ───────────────────────────────────────────────

export const skills = sqliteTable("skills", {
	id: id(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	icon: text("icon"),
	category: text("category").notNull().default("general"),
	config: text("config", { mode: "json" }),
	dirPath: text("dir_path"),
	version: integer("version").notNull().default(1),
	author: text("author"),
	createdAt: text("created_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
	updatedAt: text("updated_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
});

export const agentSkills = sqliteTable("agent_skills", {
	agentId: text("agent_id")
		.notNull()
		.references(() => agents.id, { onDelete: "cascade" }),
	skillId: text("skill_id")
		.notNull()
		.references(() => skills.id, { onDelete: "cascade" }),
	enabled: integer("enabled", { mode: "boolean" }).notNull().default(true),
	installedAt: text("installed_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
});

// ─── MCP Servers ──────────────────────────────────────────

export const mcpServers = sqliteTable("mcp_servers", {
	id: id(),
	name: text("name").notNull(),
	description: text("description").notNull(),
	icon: text("icon"),
	transport: text("transport", { enum: ["stdio", "sse", "http"] })
		.notNull()
		.default("stdio"),
	command: text("command"),
	args: text("args", { mode: "json" }).$type<string[]>(),
	url: text("url"),
	headers: text("headers", { mode: "json" }).$type<Record<string, string>>(),
	env: text("env", { mode: "json" }).$type<Record<string, string>>(),
	authType: text("auth_type", { enum: ["none", "bearer_mcp_api_key"] })
		.notNull()
		.default("none"),
	category: text("category").notNull().default("general"),
	createdAt: text("created_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
});

export const agentMcpServers = sqliteTable("agent_mcp_servers", {
	agentId: text("agent_id")
		.notNull()
		.references(() => agents.id, { onDelete: "cascade" }),
	mcpServerId: text("mcp_server_id")
		.notNull()
		.references(() => mcpServers.id, { onDelete: "cascade" }),
	enabled: integer("enabled", { mode: "boolean" }).notNull().default(true),
	status: text("status", { enum: ["connected", "disconnected", "error"] })
		.notNull()
		.default("disconnected"),
	installedAt: text("installed_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString()),
});

// ─── Knowledge / RAG ──────────────────────────────────────

export const knowledgeDocuments = sqliteTable("knowledge_documents", {
	id: id(),
	agentId: text("agent_id")
		.notNull()
		.references(() => agents.id, { onDelete: "cascade" }),
	filename: text("filename").notNull(),
	contentType: text("content_type", { enum: ["document", "code"] })
		.notNull()
		.default("document"),
	status: text("status", { enum: ["pending", "processing", "ready", "error"] })
		.notNull()
		.default("pending"),
	chunkCount: integer("chunk_count").notNull().default(0),
	fileSize: integer("file_size").notNull().default(0),
	error: text("error"),
	...timestamps,
});

export const knowledgeChunks = sqliteTable("knowledge_chunks", {
	id: id(),
	documentId: text("document_id")
		.notNull()
		.references(() => knowledgeDocuments.id, { onDelete: "cascade" }),
	heading: text("heading"),
	headingPath: text("heading_path"),
	headingLevel: integer("heading_level", { mode: "number" }),
	body: text("body"),
	bodySummary: text("body_summary"),
	fileName: text("file_name"),
	docPath: text("doc_path"),
	content: text("content").notNull(),
	sectionTitle: text("section_title"),
	chunkIndex: integer("chunk_index").notNull(),
});

export const knowledgeChunkEmbeddings = sqliteTable("knowledge_chunk_embeddings", {
	chunkId: text("chunk_id")
		.primaryKey()
		.references(() => knowledgeChunks.id, { onDelete: "cascade" }),
	model: text("model").notNull(),
	vector: text("vector", { mode: "json" }).$type<number[]>().notNull(),
	dimensions: integer("dimensions", { mode: "number" }).notNull(),
	updatedAt: text("updated_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString())
		.$onUpdateFn(() => new Date().toISOString()),
});

// ─── Settings ─────────────────────────────────────────────

export const settings = sqliteTable("settings", {
	key: text("key").primaryKey(),
	value: text("value").notNull(),
	updatedAt: text("updated_at")
		.notNull()
		.$defaultFn(() => new Date().toISOString())
		.$onUpdateFn(() => new Date().toISOString()),
});

// ─── System Prompts ──────────────────────────────────────

export const systemPrompts = sqliteTable("system_prompts", {
	id: id(),
	agentId: text("agent_id")
		.notNull()
		.references(() => agents.id, { onDelete: "cascade" }),
	name: text("name").notNull(),
	content: text("content").notNull(),
	enabled: integer("enabled", { mode: "boolean" }).notNull().default(true),
	sortOrder: integer("sort_order", { mode: "number" }).notNull().default(0),
	...timestamps,
});
