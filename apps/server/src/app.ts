import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { authMiddleware } from "./middleware/auth.js";
import { dbMiddleware } from "./middleware/db.js";
import { agentsRoute } from "./routes/agents.js";
import { conversationsRoute } from "./routes/conversations.js";
import { knowledgeRoute } from "./routes/knowledge.js";
import { mcpRoute } from "./routes/mcp.js";
import { promptsRoute } from "./routes/prompts.js";
import { settingsRoute } from "./routes/settings.js";
import { skillsRoute } from "./routes/skills.js";

const app = new Hono().basePath("/api/v1");

// Global middleware
app.use("*", logger());
app.use(
	"*",
	cors({
		origin: ["http://localhost:5173"],
		allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
	}),
);
app.use("*", authMiddleware);
app.use("*", dbMiddleware);

// Routes
const routes = app
	.route("/agents", agentsRoute)
	.route("/conversations", conversationsRoute)
	.route("/skills", skillsRoute)
	.route("/mcp-servers", mcpRoute)
	.route("/prompts", promptsRoute)
	.route("/knowledge", knowledgeRoute)
	.route("/settings", settingsRoute);

app.onError((error, c) => {
	console.error("[Server Error]", error);
	const message = error instanceof Error ? error.message : "Internal Server Error";
	return c.json({ error: message }, 500);
});

// Health check
app.get("/health", (c) => c.json({ status: "ok" }));

export { app, routes };
export type AppType = typeof routes;
