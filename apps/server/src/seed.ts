import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { createDb } from "@nano-agent/db";
import { agents, mcpServers, skills } from "@nano-agent/db";
import { ensureDefaultSystemPromptsForAgent } from "./services/system-prompts.js";

const dbPath = process.env.DATABASE_URL ?? resolve(process.cwd(), "../../data/nano-agent.db");
const dir = resolve(dbPath, "..");
if (!existsSync(dir)) {
	mkdirSync(dir, { recursive: true });
}

const db = createDb(dbPath);

// Check if already seeded
const existingAgents = await db.select().from(agents);
if (existingAgents.length > 0) {
	console.log("Database already has data, skipping seed.");
	process.exit(0);
}

console.log("Seeding database...");

// Seed agents
const seededAgents = await db
	.insert(agents)
	.values([
		{
			name: "General Assistant",
			description: "A general-purpose AI assistant for everyday tasks",
			systemPrompt: "You are a helpful AI assistant. Answer questions clearly and concisely.",
			model: "gpt-4o",
			temperature: 7,
		},
		{
			name: "Code Reviewer",
			description: "Specialized in reviewing and improving code",
			systemPrompt:
				"You are an expert code reviewer. Analyze code for bugs, performance issues, and best practices. Provide constructive feedback.",
			model: "gpt-4o",
			temperature: 3,
		},
		{
			name: "Research Agent",
			description: "Deep research and analysis assistant",
			systemPrompt:
				"You are a research assistant. Help users gather, analyze, and synthesize information on complex topics.",
			model: "gpt-4o",
			temperature: 5,
		},
	])
	.returning();

for (const agent of seededAgents) {
	await ensureDefaultSystemPromptsForAgent(db, agent.id);
}

// Seed skills marketplace
await db.insert(skills).values([
	{
		name: "Web Search",
		description: "Search the web for real-time information",
		icon: "search",
		category: "information",
	},
	{
		name: "Code Interpreter",
		description: "Execute Python code in a sandboxed environment",
		icon: "code",
		category: "development",
	},
	{
		name: "File Analysis",
		description: "Read and analyze uploaded files (PDF, DOCX, CSV, etc.)",
		icon: "file-text",
		category: "productivity",
	},
	{
		name: "Image Generation",
		description: "Generate images from text descriptions using DALL-E",
		icon: "image",
		category: "creative",
	},
	{
		name: "Data Visualization",
		description: "Create charts and visualizations from data",
		icon: "bar-chart-2",
		category: "analytics",
	},
	{
		name: "Translation",
		description: "Translate text between multiple languages",
		icon: "languages",
		category: "language",
	},
]);

// Seed MCP servers marketplace
await db.insert(mcpServers).values([
	{
		name: "Filesystem",
		description: "Read and write files on the local filesystem",
		icon: "folder",
		transport: "stdio" as const,
		command: "npx",
		args: ["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
		category: "system",
	},
	{
		name: "GitHub",
		description: "Interact with GitHub repositories, issues, and pull requests",
		icon: "github",
		transport: "stdio" as const,
		command: "npx",
		args: ["-y", "@modelcontextprotocol/server-github"],
		category: "development",
	},
	{
		name: "PostgreSQL",
		description: "Query and manage PostgreSQL databases",
		icon: "database",
		transport: "stdio" as const,
		command: "npx",
		args: ["-y", "@modelcontextprotocol/server-postgres"],
		category: "database",
	},
	{
		name: "Brave Search",
		description: "Search the web using Brave Search API",
		icon: "globe",
		transport: "stdio" as const,
		command: "npx",
		args: ["-y", "@modelcontextprotocol/server-brave-search"],
		category: "information",
	},
	{
		name: "Slack",
		description: "Send and receive messages in Slack workspaces",
		icon: "message-circle",
		transport: "stdio" as const,
		command: "npx",
		args: ["-y", "@modelcontextprotocol/server-slack"],
		category: "communication",
	},
]);

console.log("Seed complete!");
process.exit(0);
