# AndesAgent

AndesAgent 是一个面向 Agent 编排与对话的全栈 Monorepo，包含：
- Web 控制台（React + Vite）
- API 服务（Hono + SSE 流式输出）
- SQLite + Drizzle ORM 数据层
- Shared 类型与 Schema 包（前后端共享）

## 项目目标

项目用于管理 Agent、对话、技能（Skills）、知识库（Knowledge）与 MCP Server 配置，并支持通过 OpenAI 兼容接口接入大模型。

## Monorepo 架构

```text
apps/web        # 前端应用，默认 http://localhost:5173
apps/server     # 后端 API，默认 http://localhost:3000
packages/shared # Zod Schema + TypeScript 类型定义
packages/db     # Drizzle schema + SQLite 访问
```

构建依赖关系由 Turborepo 管理：`shared -> db -> server/web`。

## 技术栈

- 包管理/构建：`pnpm` + `turborepo`
- 前端：React 19、Vite、TanStack Router、TanStack Query、Zustand、Tailwind v4、shadcn/ui
- 后端：Hono、SSE、LangChain/OpenAI Compatible、deepagents
- 数据库：SQLite（WAL）+ Drizzle ORM + FTS5
- 代码规范：Biome + TypeScript Strict

## 快速开始

### 1. 环境要求

- Node.js >= 20
- pnpm 9

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发环境

```bash
pnpm dev
```

启动后默认地址：
- Web: `http://localhost:5173`
- API: `http://localhost:3000`

也可以使用项目脚本（会自动准备 Python sandbox 模板）：

```bash
./start.sh
# 停止
./stop.sh
```

日志位置：`/tmp/nano-agent-dev.log`

## 环境变量（可选）

项目现在支持“无 `.env` 启动”。未配置时会使用默认值。

常见可选变量：
- `PORT`：后端端口（默认 `3000`）
- `DATABASE_URL`：SQLite 路径（默认 `data/nano-agent.db`）
- `API_KEY`：后端 API 鉴权 Key（不设则跳过鉴权）
- `LOCAL_SANDBOX_TEMPLATE_DIR` / `LOCAL_SANDBOX_ROOT_DIR`
- `LOCAL_SANDBOX_COMMAND_TIMEOUT_SEC` / `LOCAL_SANDBOX_MAX_OUTPUT_BYTES`

说明：LLM 供应商相关配置（如 `llm_provider`、`llm_base_url`、`llm_api_key`）主要通过应用内 `Settings` 管理。

## 常用命令

```bash
pnpm dev              # 启动全部开发服务
pnpm build            # 构建全部包
pnpm lint             # Biome 检查
pnpm lint:fix         # Biome 自动修复
pnpm format           # Biome 格式化
pnpm db:push          # 推送 Drizzle schema 到 SQLite
pnpm db:generate      # 生成 Drizzle migration
pnpm db:studio        # 打开 Drizzle Studio
pnpm seed             # 初始化示例数据
pnpm clean            # 清理构建产物与 node_modules
```

## API 概览

后端基础路径：`/api/v1`

主要资源：
- `/agents`
- `/conversations`
- `/skills`
- `/mcp-servers`
- `/prompts`
- `/knowledge`
- `/settings`
- `/health`

## 数据库说明

- 默认数据库文件：`data/nano-agent.db`
- Schema 文件：`packages/db/src/schema.ts`
- 服务启动时自动确保表结构存在
- 含 FTS5 表 `knowledge_chunks_fts`（由触发器维护）

## 开发说明

- TypeScript `strict` 模式
- ESM（`"type": "module"`）
- Biome 风格：双引号、分号、Tab 缩进、100 列
- 当前仓库未配置完整自动化测试用例（可按需补充）

## 常见问题

### 启动后 Web 打不开

先查看日志：

```bash
tail -n 200 /tmp/nano-agent-dev.log
```

再确认端口是否可用：
- `5173`（web）
- `3000`（server）

