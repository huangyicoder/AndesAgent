import { zValidator } from "@hono/zod-validator";
import { agentSkills, skills } from "@nano-agent/db";
import {
	createSkillSchema,
	installSkillSchema,
	updateAgentSkillSchema,
	updateSkillSchema,
} from "@nano-agent/shared";
import { and, eq } from "drizzle-orm";
import { Hono } from "hono";
import { readFile, rm } from "node:fs/promises";
import { resolve } from "node:path";
import path from "node:path";
import {
	extractSkillZip,
	listSkillFiles,
	parseSkillMd,
	validateSkillDir,
	validateZipFile,
} from "../services/skill-upload.js";

// 统一使用项目根目录下的 data/skills/（与数据库路径保持一致）
const SKILLS_BASE_DIR = resolve(process.cwd(), "../../data/skills");

export const skillsRoute = new Hono()
	// List all skills (marketplace)
	.get("/", async (c) => {
		const db = c.get("db");
		const result = await db.select().from(skills);
		return c.json(result);
	})

	// Upload a new skill (zip file)
	.post("/upload", async (c) => {
		const db = c.get("db");
		const body = await c.req.parseBody();
		const file = body.file;

		if (!(file instanceof File)) {
			return c.json({ error: "请上传文件" }, 400);
		}

		try {
			validateZipFile(file);
		} catch (e) {
			return c.json({ error: (e as Error).message }, 400);
		}

		// 生成 skill ID 并创建目录
		const skillId = crypto.randomUUID();
		const dirPath = path.join(SKILLS_BASE_DIR, skillId);

		try {
			const buffer = Buffer.from(await file.arrayBuffer());
			await extractSkillZip(buffer, dirPath);
			await validateSkillDir(dirPath);
			const metadata = await parseSkillMd(dirPath);

			const result = await db
				.insert(skills)
				.values({
					id: skillId,
					name: metadata.name,
					description: metadata.description,
					author: metadata.author,
					dirPath,
					version: 1,
				})
				.returning();

			return c.json(result[0], 201);
		} catch (e) {
			// 清理已创建的目录
			await rm(dirPath, { recursive: true, force: true });
			return c.json({ error: (e as Error).message }, 400);
		}
	})

	// Update skill by re-uploading zip
	.put("/:id/upload", async (c) => {
		const db = c.get("db");
		const id = c.req.param("id");

		// 验证 skill 存在
		const existing = await db.select().from(skills).where(eq(skills.id, id));
		if (existing.length === 0) {
			return c.json({ error: "Skill not found" }, 404);
		}

		const body = await c.req.parseBody();
		const file = body.file;
		if (!(file instanceof File)) {
			return c.json({ error: "请上传文件" }, 400);
		}

		try {
			validateZipFile(file);
		} catch (e) {
			return c.json({ error: (e as Error).message }, 400);
		}

		const dirPath = existing[0].dirPath ?? path.join(SKILLS_BASE_DIR, id);

		try {
			// 清空旧目录，重新解压
			await rm(dirPath, { recursive: true, force: true });
			const buffer = Buffer.from(await file.arrayBuffer());
			await extractSkillZip(buffer, dirPath);
			await validateSkillDir(dirPath);
			const metadata = await parseSkillMd(dirPath);

			const result = await db
				.update(skills)
				.set({
					name: metadata.name,
					description: metadata.description,
					author: metadata.author,
					dirPath,
					version: (existing[0].version ?? 0) + 1,
					updatedAt: new Date().toISOString(),
				})
				.where(eq(skills.id, id))
				.returning();

			return c.json(result[0]);
		} catch (e) {
			return c.json({ error: (e as Error).message }, 400);
		}
	})

	// Get single skill
	.get("/:id", async (c) => {
		const db = c.get("db");
		const id = c.req.param("id");
		const result = await db.select().from(skills).where(eq(skills.id, id));
		if (result.length === 0) {
			return c.json({ error: "Skill not found" }, 404);
		}
		return c.json(result[0]);
	})

	// Update skill metadata (without re-uploading)
	.patch("/:id", zValidator("json", updateSkillSchema), async (c) => {
		const db = c.get("db");
		const id = c.req.param("id");
		const input = c.req.valid("json");

		const result = await db
			.update(skills)
			.set({ ...input, updatedAt: new Date().toISOString() })
			.where(eq(skills.id, id))
			.returning();

		if (result.length === 0) {
			return c.json({ error: "Skill not found" }, 404);
		}
		return c.json(result[0]);
	})

	// List files in a skill directory
	.get("/:id/files", async (c) => {
		const db = c.get("db");
		const id = c.req.param("id");
		const result = await db.select().from(skills).where(eq(skills.id, id));
		if (result.length === 0) {
			return c.json({ error: "Skill not found" }, 404);
		}

		const dirPath = result[0].dirPath;
		if (!dirPath) {
			return c.json([]);
		}

		try {
			const files = await listSkillFiles(dirPath);
			return c.json(files);
		} catch {
			return c.json([]);
		}
	})

	// Read a specific file from skill directory
	.get("/:id/file/*", async (c) => {
		const db = c.get("db");
		const id = c.req.param("id");
		const result = await db.select().from(skills).where(eq(skills.id, id));
		if (result.length === 0) {
			return c.json({ error: "Skill not found" }, 404);
		}

		const dirPath = result[0].dirPath;
		if (!dirPath) {
			return c.json({ error: "Skill has no directory" }, 404);
		}

		// 提取文件路径 (去掉 /:id/file/ 前缀)
		const url = new URL(c.req.url);
		const filePath = url.pathname.replace(new RegExp(`^.*/skills/${id}/file/`), "");
		if (!filePath) {
			return c.json({ error: "请指定文件路径" }, 400);
		}

		// 防止路径穿越
		const resolved = path.resolve(dirPath, filePath);
		if (!resolved.startsWith(path.resolve(dirPath))) {
			return c.json({ error: "非法路径" }, 400);
		}

		try {
			const content = await readFile(resolved, "utf-8");
			return c.text(content);
		} catch {
			return c.json({ error: "文件不存在" }, 404);
		}
	})

	// Create skill (platform level, backward compat)
	.post("/", zValidator("json", createSkillSchema), async (c) => {
		const db = c.get("db");
		const input = c.req.valid("json");
		const result = await db
			.insert(skills)
			.values({
				name: input.name,
				description: input.description,
				icon: input.icon ?? null,
				category: input.category,
				config: input.config ?? null,
			})
			.returning();
		return c.json(result[0], 201);
	})

	// Delete skill (platform level)
	.delete("/:id", async (c) => {
		const db = c.get("db");
		const id = c.req.param("id");
		const result = await db.delete(skills).where(eq(skills.id, id)).returning();
		if (result.length === 0) {
			return c.json({ error: "Skill not found" }, 404);
		}

		// 清理文件系统
		const dirPath = result[0].dirPath;
		if (dirPath) {
			await rm(dirPath, { recursive: true, force: true });
		}

		return c.json({ success: true });
	})

	// ─── Agent-level endpoints (unchanged) ───

	// Get skills installed for an agent
	.get("/agent/:agentId", async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");
		const result = await db
			.select({
				skill: skills,
				agentSkill: agentSkills,
			})
			.from(agentSkills)
			.innerJoin(skills, eq(agentSkills.skillId, skills.id))
			.where(eq(agentSkills.agentId, agentId));
		return c.json(result);
	})

	// Install skill for agent
	.post("/agent/:agentId", zValidator("json", installSkillSchema), async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");
		const { skillId, enabled } = c.req.valid("json");

		const result = await db.insert(agentSkills).values({ agentId, skillId, enabled }).returning();
		return c.json(result[0], 201);
	})

	// Update agent skill (enable/disable)
	.patch("/agent/:agentId/:skillId", zValidator("json", updateAgentSkillSchema), async (c) => {
		const db = c.get("db");
		const { agentId, skillId } = c.req.param();
		const { enabled } = c.req.valid("json");

		const result = await db
			.update(agentSkills)
			.set({ enabled })
			.where(and(eq(agentSkills.agentId, agentId), eq(agentSkills.skillId, skillId)))
			.returning();

		if (result.length === 0) {
			return c.json({ error: "Agent skill not found" }, 404);
		}
		return c.json(result[0]);
	})

	// Uninstall skill from agent
	.delete("/agent/:agentId/:skillId", async (c) => {
		const db = c.get("db");
		const { agentId, skillId } = c.req.param();
		const result = await db
			.delete(agentSkills)
			.where(and(eq(agentSkills.agentId, agentId), eq(agentSkills.skillId, skillId)))
			.returning();
		if (result.length === 0) {
			return c.json({ error: "Agent skill not found" }, 404);
		}
		return c.json({ success: true });
	});
