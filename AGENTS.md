# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start all dev servers (web :5173, server :3000)
pnpm build            # Build all packages
pnpm lint             # Biome check
pnpm lint:fix         # Biome check --write
pnpm format           # Biome format --write
pnpm db:push          # Push Drizzle schema to SQLite
pnpm db:generate      # Generate Drizzle migrations
pnpm db:studio        # Open Drizzle Studio
pnpm seed             # Seed database with sample data
```

No test framework is configured yet.

## Architecture

Monorepo (pnpm workspaces + Turborepo) with four packages:

```
packages/shared/  → @nano-agent/shared: Zod schemas + TS types (consumed by both web and server)
packages/db/      → @nano-agent/db: Drizzle ORM schema, SQLite (WAL mode), FTS5 full-text search
apps/server/      → @nano-agent/server: Hono REST API + SSE streaming on :3000
apps/web/         → @nano-agent/web: Vite + React 19 SPA on :5173
```

**Build order:** shared → db → server/web (managed by Turborepo `^build` dependencies).

### Backend (Hono)

- Base path: `/api/v1`, routes in `apps/server/src/routes/`
- Middleware chain: logger → CORS (localhost:5173) → auth (optional Bearer token via `API_KEY` env) → db injection
- Database singleton created in `apps/server/src/middleware/db.ts`, accessed via `c.get("db")`
- Chat endpoint (`POST /conversations/:id/chat`) uses SSE streaming
- Temperature stored as integer 0-20 in DB (multiplied by 10 from 0-2 float)

### Frontend (React 19)

- TanStack Router for routing, TanStack Query for server state, Zustand for app state
- API client in `apps/web/src/lib/api.ts` wraps fetch with `/api/v1` base path
- Vite proxies `/api` to backend at localhost:3000
- UI: shadcn/ui (Radix) + Tailwind CSS v4 + Lucide icons
- Workbench layout: left panel (agents list), center panel (chat), right panel (knowledge/skills/mcp tabs)

### Database

- SQLite at `data/nano-agent.db` (configurable via `DATABASE_URL` env)
- Schema in `packages/db/src/schema.ts` — tables auto-created on server startup
- FTS5 virtual table `knowledge_chunks_fts` with triggers for sync
- Foreign keys with cascade deletes; composite PKs for junction tables (agent_skills, agent_mcp_servers)

### LLM Integration

- 通过 OpenAI 兼容接口直连 LLM 提供商（默认智谱 AI）
- 环境变量 `LLM_API_KEY` + `LLM_BASE_URL` 配置，见 `.env.example`
- 使用 `@langchain/openai` 的 `ChatOpenAI` + deepagents 框架

## Code Style

- Biome: double quotes, semicolons, tab indentation, 100-char line width
- TypeScript strict mode, ES2022 target, ESNext modules
- All packages use `"type": "module"` (ES modules)
