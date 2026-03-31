import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { knowledgeDocuments } from "@nano-agent/db";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { getKnowledgeVectorRuntimeStatus, processDocument } from "../services/knowledge.js";

const UPLOAD_DIR = join(process.cwd(), "data", "uploads");

export const knowledgeRoute = new Hono()
	// Knowledge vector runtime status
	.get("/status", async (c) => {
		const db = c.get("db");
		return c.json(getKnowledgeVectorRuntimeStatus(db));
	})

	// List knowledge documents for an agent
	.get("/agent/:agentId", async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");
		const result = await db
			.select()
			.from(knowledgeDocuments)
			.where(eq(knowledgeDocuments.agentId, agentId));
		return c.json(result);
	})

	// Upload knowledge document (multipart file upload)
	.post("/agent/:agentId/upload", async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");

		const body = await c.req.parseBody();
		const file = body.file;

		if (!file || !(file instanceof File)) {
			return c.json({ error: "No file provided" }, 400);
		}

		const filename = file.name;
		const buffer = Buffer.from(await file.arrayBuffer());
		const fileSize = buffer.length;

		// Create document record
		const [doc] = await db
			.insert(knowledgeDocuments)
			.values({
				agentId,
				filename,
				contentType:
					filename.endsWith(".md") || filename.endsWith(".txt") ? "document" : "document",
				status: "pending",
				fileSize,
			})
			.returning();

		// Save file to disk
		const docDir = join(UPLOAD_DIR, agentId, doc.id);
		await mkdir(docDir, { recursive: true });
		const filePath = join(docDir, filename);
		await writeFile(filePath, buffer);

		// Process document (extract text, chunk, FTS5 index)
		// Run async — don't block the response
		processDocument(db, doc.id, buffer, filename).catch((err) => {
			console.error(`[Knowledge] Failed to process ${filename}:`, err);
		});

		return c.json(doc, 201);
	})

	// Rebuild all knowledge documents for one agent
	.post("/agent/:agentId/rebuild-all", async (c) => {
		const db = c.get("db");
		const agentId = c.req.param("agentId");

		const docs = await db
			.select()
			.from(knowledgeDocuments)
			.where(eq(knowledgeDocuments.agentId, agentId));

		let started = 0;
		let skipped = 0;

		for (const doc of docs) {
			const filePath = join(UPLOAD_DIR, doc.agentId, doc.id, doc.filename);
			try {
				const buffer = await readFile(filePath);
				started += 1;
				processDocument(db, doc.id, buffer, doc.filename).catch((err) => {
					console.error(`[Knowledge] Failed to rebuild ${doc.filename}:`, err);
				});
			} catch {
				skipped += 1;
				await db
					.update(knowledgeDocuments)
					.set({ status: "error", error: "Source file not found on disk" })
					.where(eq(knowledgeDocuments.id, doc.id));
			}
		}

		return c.json({
			success: true,
			total: docs.length,
			started,
			skipped,
		});
	})

	// Delete knowledge document
	.delete("/:docId", async (c) => {
		const db = c.get("db");
		const docId = c.req.param("docId");

		// Chunks are cascade-deleted
		const result = await db
			.delete(knowledgeDocuments)
			.where(eq(knowledgeDocuments.id, docId))
			.returning();

		if (result.length === 0) {
			return c.json({ error: "Document not found" }, 404);
		}
		return c.json({ success: true });
	})

	// Rebuild knowledge document index
	.post("/:docId/rebuild", async (c) => {
		const db = c.get("db");
		const docId = c.req.param("docId");

		// Get document record
		const [doc] = await db
			.select()
			.from(knowledgeDocuments)
			.where(eq(knowledgeDocuments.id, docId));

		if (!doc) {
			return c.json({ error: "Document not found" }, 404);
		}

		// Read file from disk
		const filePath = join(UPLOAD_DIR, doc.agentId, doc.id, doc.filename);
		try {
			const buffer = await readFile(filePath);
			// Re-process (deletes old chunks and re-creates)
			processDocument(db, docId, buffer, doc.filename).catch((err) => {
				console.error(`[Knowledge] Failed to rebuild ${doc.filename}:`, err);
			});
			return c.json({ success: true, message: "Rebuild started" });
		} catch {
			return c.json({ error: "Source file not found on disk" }, 404);
		}
	});
