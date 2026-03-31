import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { load as loadSqliteVec } from "sqlite-vec";
import * as schema from "./schema.js";

export * from "./schema.js";
export { schema };

const DEFAULT_SYSTEM_PROMPT_DOCUMENT_SETTING_KEY = "default_system_prompt_document";
const DEFAULT_SYSTEM_PROMPT_DOCUMENT = [
	"1. 必须调用 search_knowledge 工具查看本地知识库，保证知识的准确性。search_knowledge 工具可以多次使用不同关键词调用。",
	"2. 当用户问题与 Andes（电力系统建模/仿真）相关时，回答必须基于 search_knowledge 工具检索的结果回答，如果 search_knowledge 工具没有检索出结果不要编造，请告知用户回答可能是过时或者不正确的。",
	"3. 保持 Markdown 格式的结果输出，必要时用小标题、列表、表格提升可读性。",
	"4. 代码必须放在带语言标识的 fenced code block（例如 python 代码块）。避免输出原始 HTML，除非用户明确要求。",
	"5. 用户让你写 Andes 相关脚本代码时，不要使用 write_file、edit_file、write_todos、execute 工具，根据知识库信息直接编写代码输出给用户即可，保证代码是单文件的，不要分成多文件编写。",
].join("\n");

export function createDb(dbPath: string) {
	const sqlite = new Database(dbPath);
	let sqliteVecEnabled = false;

	// Enable WAL mode for better concurrent read performance
	sqlite.pragma("journal_mode = WAL");
	sqlite.pragma("foreign_keys = ON");

	try {
		loadSqliteVec(sqlite);
		sqliteVecEnabled = true;
	} catch (error) {
		console.warn("[DB] sqlite-vec extension load failed, vector search will be disabled.", error);
	}

	const db = drizzle(sqlite, { schema });

	// Auto-create tables if they don't exist
	autoMigrate(sqlite, sqliteVecEnabled);

	return db;
}

export type Db = ReturnType<typeof createDb>;

function autoMigrate(sqlite: InstanceType<typeof Database>, sqliteVecEnabled: boolean) {
	// Create all tables
	sqlite.exec(`
		CREATE TABLE IF NOT EXISTS agents (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			description TEXT,
			system_prompt TEXT,
			model TEXT NOT NULL DEFAULT 'gpt-4o',
			temperature INTEGER NOT NULL DEFAULT 7,
			avatar TEXT,
			disabled_tools TEXT,
			created_at TEXT NOT NULL,
			updated_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS conversations (
			id TEXT PRIMARY KEY,
			agent_id TEXT NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
			title TEXT,
			created_at TEXT NOT NULL,
			updated_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS messages (
			id TEXT PRIMARY KEY,
			conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
			role TEXT NOT NULL,
			content TEXT NOT NULL,
			metadata TEXT,
			created_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS skills (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			description TEXT NOT NULL,
			icon TEXT,
			category TEXT NOT NULL DEFAULT 'general',
			config TEXT,
			dir_path TEXT,
			version INTEGER NOT NULL DEFAULT 1,
			author TEXT,
			created_at TEXT NOT NULL,
			updated_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS agent_skills (
			agent_id TEXT NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
			skill_id TEXT NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
			enabled INTEGER NOT NULL DEFAULT 1,
			installed_at TEXT NOT NULL,
			PRIMARY KEY (agent_id, skill_id)
		);

		CREATE TABLE IF NOT EXISTS mcp_servers (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			description TEXT NOT NULL,
			icon TEXT,
			transport TEXT NOT NULL DEFAULT 'stdio',
			command TEXT,
			args TEXT,
			url TEXT,
			headers TEXT,
			env TEXT,
			auth_type TEXT NOT NULL DEFAULT 'none',
			category TEXT NOT NULL DEFAULT 'general',
			created_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS agent_mcp_servers (
			agent_id TEXT NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
			mcp_server_id TEXT NOT NULL REFERENCES mcp_servers(id) ON DELETE CASCADE,
			enabled INTEGER NOT NULL DEFAULT 1,
			status TEXT NOT NULL DEFAULT 'disconnected',
			installed_at TEXT NOT NULL,
			PRIMARY KEY (agent_id, mcp_server_id)
		);

		CREATE TABLE IF NOT EXISTS knowledge_documents (
			id TEXT PRIMARY KEY,
			agent_id TEXT NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
			filename TEXT NOT NULL,
			content_type TEXT NOT NULL DEFAULT 'document',
			status TEXT NOT NULL DEFAULT 'pending',
			chunk_count INTEGER NOT NULL DEFAULT 0,
			file_size INTEGER NOT NULL DEFAULT 0,
			error TEXT,
			created_at TEXT NOT NULL,
			updated_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS knowledge_chunks (
			id TEXT PRIMARY KEY,
			document_id TEXT NOT NULL REFERENCES knowledge_documents(id) ON DELETE CASCADE,
			heading TEXT,
			heading_path TEXT,
			heading_level INTEGER,
			body TEXT,
			body_summary TEXT,
			file_name TEXT,
			doc_path TEXT,
			content TEXT NOT NULL,
			section_title TEXT,
			chunk_index INTEGER NOT NULL
		);

		CREATE TABLE IF NOT EXISTS settings (
			key TEXT PRIMARY KEY,
			value TEXT NOT NULL,
			updated_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS system_prompts (
			id TEXT PRIMARY KEY,
			agent_id TEXT NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
			name TEXT NOT NULL,
			content TEXT NOT NULL,
			enabled INTEGER NOT NULL DEFAULT 1,
			sort_order INTEGER NOT NULL DEFAULT 0,
			created_at TEXT NOT NULL,
			updated_at TEXT NOT NULL
		);

		CREATE TABLE IF NOT EXISTS knowledge_chunk_embeddings (
			chunk_id TEXT PRIMARY KEY REFERENCES knowledge_chunks(id) ON DELETE CASCADE,
			model TEXT NOT NULL,
			vector TEXT NOT NULL,
			dimensions INTEGER NOT NULL,
			updated_at TEXT NOT NULL
		);
	`);

	// Migrate old global prompt table shape (without agent_id) to agent-scoped prompts.
	const systemPromptColumns = sqlite.prepare("PRAGMA table_info(system_prompts)").all() as Array<{
		name: string;
	}>;
	const hasSystemPromptAgentId = systemPromptColumns.some((column) => column.name === "agent_id");
	if (!hasSystemPromptAgentId) {
		sqlite.exec(`
			CREATE TABLE IF NOT EXISTS system_prompts_new (
				id TEXT PRIMARY KEY,
				agent_id TEXT NOT NULL REFERENCES agents(id) ON DELETE CASCADE,
				name TEXT NOT NULL,
				content TEXT NOT NULL,
				enabled INTEGER NOT NULL DEFAULT 1,
				sort_order INTEGER NOT NULL DEFAULT 0,
				created_at TEXT NOT NULL,
				updated_at TEXT NOT NULL
			);
		`);
		sqlite.exec(`
			INSERT INTO system_prompts_new
				(id, agent_id, name, content, enabled, sort_order, created_at, updated_at)
			SELECT
				lower(hex(randomblob(16))),
				a.id,
				sp.name,
				sp.content,
				sp.enabled,
				sp.sort_order,
				sp.created_at,
				sp.updated_at
			FROM system_prompts sp
			INNER JOIN agents a;
		`);
		sqlite.exec("DROP TABLE system_prompts;");
		sqlite.exec("ALTER TABLE system_prompts_new RENAME TO system_prompts;");
	}

	// Backfill new columns on older databases.
	for (const statement of [
		"ALTER TABLE mcp_servers ADD COLUMN headers TEXT;",
		"ALTER TABLE mcp_servers ADD COLUMN env TEXT;",
		"ALTER TABLE mcp_servers ADD COLUMN auth_type TEXT NOT NULL DEFAULT 'none';",
		"ALTER TABLE skills ADD COLUMN dir_path TEXT;",
		"ALTER TABLE skills ADD COLUMN version INTEGER NOT NULL DEFAULT 1;",
		"ALTER TABLE skills ADD COLUMN author TEXT;",
		"ALTER TABLE skills ADD COLUMN updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP;",
		"ALTER TABLE agents ADD COLUMN disabled_tools TEXT;",
	]) {
		try {
			sqlite.exec(statement);
		} catch {
			// Ignore duplicate-column errors for existing installations.
		}
	}

	// Canonicalize legacy transport value.
	sqlite.exec("UPDATE mcp_servers SET transport = 'http' WHERE transport = 'streamable-http';");
	sqlite.exec("DELETE FROM settings WHERE key = 'mcp_api_key';");
	sqlite
		.prepare("INSERT OR IGNORE INTO settings (key, value, updated_at) VALUES (?, ?, ?)")
		.run(
			DEFAULT_SYSTEM_PROMPT_DOCUMENT_SETTING_KEY,
			DEFAULT_SYSTEM_PROMPT_DOCUMENT,
			new Date().toISOString(),
		);

	for (const statement of [
		"ALTER TABLE knowledge_chunks ADD COLUMN heading TEXT;",
		"ALTER TABLE knowledge_chunks ADD COLUMN heading_path TEXT;",
		"ALTER TABLE knowledge_chunks ADD COLUMN heading_level INTEGER;",
		"ALTER TABLE knowledge_chunks ADD COLUMN body TEXT;",
		"ALTER TABLE knowledge_chunks ADD COLUMN body_summary TEXT;",
		"ALTER TABLE knowledge_chunks ADD COLUMN file_name TEXT;",
		"ALTER TABLE knowledge_chunks ADD COLUMN doc_path TEXT;",
	]) {
		try {
			sqlite.exec(statement);
		} catch {
			// Ignore duplicate-column errors for existing installations.
		}
	}

	const existingFtsSchema = sqlite
		.prepare("SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'knowledge_chunks_fts'")
		.get() as { sql?: string } | undefined;
	const needsFtsRecreate =
		!existingFtsSchema?.sql ||
		!existingFtsSchema.sql.includes("heading_path") ||
		!existingFtsSchema.sql.includes("body_summary");

	// Drop old triggers first to prevent stale column mapping.
	sqlite.exec(`
		DROP TRIGGER IF EXISTS knowledge_chunks_ai;
		DROP TRIGGER IF EXISTS knowledge_chunks_ad;
		DROP TRIGGER IF EXISTS knowledge_chunks_au;
	`);

	if (needsFtsRecreate) {
		sqlite.exec("DROP TABLE IF EXISTS knowledge_chunks_fts;");
	}

	// FTS5 virtual table: structured Markdown retrieval fields.
	sqlite.exec(`
		CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_chunks_fts USING fts5(
			heading,
			heading_path,
			body,
			body_summary,
			file_name UNINDEXED,
			doc_path UNINDEXED,
			content='knowledge_chunks',
			content_rowid='rowid',
			tokenize='unicode61',
			prefix='2 3'
		);
	`);

	// FTS5 sync triggers
	sqlite.exec(`
		CREATE TRIGGER IF NOT EXISTS knowledge_chunks_ai AFTER INSERT ON knowledge_chunks BEGIN
			INSERT INTO knowledge_chunks_fts(rowid, heading, heading_path, body, body_summary, file_name, doc_path)
			VALUES (
				new.rowid,
				COALESCE(new.heading, ''),
				COALESCE(new.heading_path, ''),
				COALESCE(new.body, new.content, ''),
				COALESCE(new.body_summary, ''),
				COALESCE(new.file_name, ''),
				COALESCE(new.doc_path, '')
			);
		END;
	`);
	sqlite.exec(`
		CREATE TRIGGER IF NOT EXISTS knowledge_chunks_ad AFTER DELETE ON knowledge_chunks BEGIN
			DELETE FROM knowledge_chunks_fts WHERE rowid = old.rowid;
		END;
	`);
	sqlite.exec(`
		CREATE TRIGGER IF NOT EXISTS knowledge_chunks_au AFTER UPDATE ON knowledge_chunks BEGIN
			DELETE FROM knowledge_chunks_fts WHERE rowid = old.rowid;
			INSERT INTO knowledge_chunks_fts(rowid, heading, heading_path, body, body_summary, file_name, doc_path)
			VALUES (
				new.rowid,
				COALESCE(new.heading, ''),
				COALESCE(new.heading_path, ''),
				COALESCE(new.body, new.content, ''),
				COALESCE(new.body_summary, ''),
				COALESCE(new.file_name, ''),
				COALESCE(new.doc_path, '')
			);
		END;
	`);

	if (needsFtsRecreate) {
		sqlite.exec("INSERT INTO knowledge_chunks_fts(knowledge_chunks_fts) VALUES ('rebuild');");
	}

	if (sqliteVecEnabled) {
		sqlite.exec(`
			CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_chunk_vectors USING vec0(
				embedding float[384]
			);
		`);
		sqlite.exec(`
			CREATE TRIGGER IF NOT EXISTS knowledge_chunk_vectors_ad AFTER DELETE ON knowledge_chunks BEGIN
				DELETE FROM knowledge_chunk_vectors WHERE rowid = old.rowid;
			END;
		`);
	}
}
