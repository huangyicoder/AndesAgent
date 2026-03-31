import { extname } from "node:path";
import { knowledgeChunkEmbeddings, knowledgeChunks, knowledgeDocuments } from "@nano-agent/db";
import { eq } from "drizzle-orm";

interface ChunkResult {
	body: string;
	heading: string | null;
	headingPath: string | null;
	headingLevel: number | null;
	chunkIndex: number;
	bodySummary: string | null;
}

interface MarkdownSection {
	heading: string | null;
	headingPath: string | null;
	headingLevel: number | null;
	body: string;
}

interface ChunkInsertRow {
	id: string;
	body: string;
	heading: string | null;
	headingPath: string | null;
	headingLevel: number | null;
	bodySummary: string | null;
	fileName: string | null;
	docPath: string | null;
	chunkIndex: number;
}

interface SearchCandidate extends KnowledgeSearchResult {
	ftsRank: number | null;
	vectorRank: number | null;
}

export interface KnowledgeSearchResult {
	documentId: string;
	filename: string;
	docPath: string | null;
	chunkId: string;
	chunkIndex: number;
	heading: string | null;
	headingPath: string | null;
	headingLevel: number | null;
	sectionTitle: string | null;
	content: string;
	bodySummary: string | null;
	snippet: string | null;
	score: number;
}

interface RawSqliteClient {
	exec: (query: string) => unknown;
	prepare: (query: string) => {
		all: (...params: unknown[]) => unknown[];
		get: (...params: unknown[]) => unknown;
		run: (...params: unknown[]) => unknown;
	};
}

interface SearchKnowledgeOptions {
	topK?: number;
	maxContextChars?: number;
}

export interface KnowledgeVectorRuntimeStatus {
	embeddingModel: string;
	embeddingDimensions: number;
	vectorTableExists: boolean;
	vectorTableQueryable: boolean;
	vectorSearchEnabled: boolean;
	embeddingRows: number;
	vectorRows: number | null;
}

const DEFAULT_TOP_K = 5;
const MAX_TOP_K = 10;
const DEFAULT_CONTEXT_BUDGET_CHARS = 12_000;
const MAX_CONTEXT_BUDGET_CHARS = 50_000;
const LONG_SECTION_SPLIT_THRESHOLD = 2_200;
const SUB_CHUNK_TARGET_CHARS = 900;
const SUB_CHUNK_OVERLAP_CHARS = 120;
const VECTOR_WEIGHT = 0.35;
const FTS_WEIGHT = 0.45;
const TITLE_BONUS_WEIGHT = 0.15;
const EXACT_PHRASE_BONUS_WEIGHT = 0.05;
export const KNOWLEDGE_EMBEDDING_MODEL = "local-hash-v1";
export const KNOWLEDGE_EMBEDDING_DIM = 384;
const MAX_EMBED_INPUT_CHARS = 6000;
const MAX_EMBED_TOKENS = 2048;

function getRawSqliteClient(db: import("@nano-agent/db").Db): RawSqliteClient {
	return (db as unknown as { $client: RawSqliteClient }).$client;
}

function hasKnowledgeVecTable(sqlite: RawSqliteClient): boolean {
	const row = sqlite
		.prepare(
			"SELECT COUNT(1) AS total FROM sqlite_master WHERE type = 'table' AND name = 'knowledge_chunk_vectors'",
		)
		.get() as { total?: number } | undefined;
	return Number(row?.total ?? 0) > 0;
}

function isFtsRowidMissingError(error: unknown): boolean {
	if (!(error instanceof Error)) {
		return false;
	}
	return /Could not find a row with rowid/i.test(error.message);
}

async function deleteDocumentChunksWithRecovery(
	db: import("@nano-agent/db").Db,
	docId: string,
): Promise<void> {
	try {
		await db.delete(knowledgeChunks).where(eq(knowledgeChunks.documentId, docId));
		return;
	} catch (error) {
		if (!isFtsRowidMissingError(error)) {
			throw error;
		}

		const sqlite = getRawSqliteClient(db);
		console.warn(
			`[Knowledge] FTS index desync detected for document ${docId}, rebuilding index and retrying.`,
		);
		sqlite.exec("INSERT INTO knowledge_chunks_fts(knowledge_chunks_fts) VALUES ('rebuild');");
		await db.delete(knowledgeChunks).where(eq(knowledgeChunks.documentId, docId));
	}
}

/**
 * 从文件内容中提取纯文本
 */
async function extractText(buffer: Buffer, filename: string): Promise<string> {
	const ext = extname(filename).toLowerCase();

	if (ext === ".pdf") {
		const pdfParseModule = await import("pdf-parse");
		// biome-ignore lint/suspicious/noExplicitAny: pdf-parse has inconsistent ESM/CJS exports
		const pdfParse: any = (pdfParseModule as any).default ?? pdfParseModule;
		const data = await pdfParse(buffer);
		return data.text;
	}

	// TXT, MD, 代码文件 — 直接当文本处理
	return buffer.toString("utf-8");
}

function splitParagraphs(text: string): string[] {
	return text
		.split(/\n{2,}/)
		.map((paragraph) => paragraph.trim())
		.filter((paragraph) => paragraph.length > 0);
}

function buildBodySummary(headingPath: string | null, body: string): string | null {
	const compact = body.replace(/\s+/g, " ").trim();
	if (!compact) {
		return null;
	}
	const preview = compact.length > 220 ? `${compact.slice(0, 220)}...` : compact;
	return headingPath ? `${headingPath} | ${preview}` : preview;
}

function collectOverlapParagraphs(paragraphs: string[], overlapChars: number): string[] {
	const overlap: string[] = [];
	let totalChars = 0;

	for (let i = paragraphs.length - 1; i >= 0; i--) {
		const paragraph = paragraphs[i];
		overlap.unshift(paragraph);
		totalChars += paragraph.length;
		if (totalChars >= overlapChars) {
			break;
		}
	}

	return overlap;
}

function splitLongSectionBody(
	body: string,
	targetChars = SUB_CHUNK_TARGET_CHARS,
	overlapChars = SUB_CHUNK_OVERLAP_CHARS,
): string[] {
	const trimmed = body.trim();
	if (!trimmed) {
		return [];
	}
	if (trimmed.length <= LONG_SECTION_SPLIT_THRESHOLD) {
		return [trimmed];
	}

	const paragraphs = splitParagraphs(trimmed);
	if (paragraphs.length <= 1) {
		return [trimmed];
	}

	const chunks: string[] = [];
	let currentParagraphs: string[] = [];
	let currentChars = 0;

	for (const paragraph of paragraphs) {
		const paragraphChars = paragraph.length;
		const nextChars = currentChars + paragraphChars;

		if (currentParagraphs.length === 0 || nextChars <= targetChars) {
			currentParagraphs.push(paragraph);
			currentChars = nextChars;
			continue;
		}

		chunks.push(currentParagraphs.join("\n\n"));

		const overlap = collectOverlapParagraphs(currentParagraphs, overlapChars);
		currentParagraphs = [...overlap, paragraph];
		currentChars = currentParagraphs.reduce((sum, item) => sum + item.length, 0);
	}

	if (currentParagraphs.length > 0) {
		chunks.push(currentParagraphs.join("\n\n"));
	}

	return chunks.map((chunk) => chunk.trim()).filter((chunk) => chunk.length > 0);
}

/**
 * 将 Markdown 按标题切分，长 section 再按段落做二次切分。
 */
function chunkMarkdownByHeadings(text: string): ChunkResult[] {
	const lines = text.split(/\r?\n/);
	const sections: MarkdownSection[] = [];
	const headingStack: string[] = [];
	let currentHeading: string | null = null;
	let currentHeadingPath: string | null = null;
	let currentHeadingLevel: number | null = null;
	let currentLines: string[] = [];

	const flushSection = () => {
		const body = currentLines.join("\n").trim();
		if (!body) {
			currentLines = [];
			return;
		}
		sections.push({
			heading: currentHeading,
			headingPath: currentHeadingPath,
			headingLevel: currentHeadingLevel,
			body,
		});
		currentLines = [];
	};

	for (const line of lines) {
		const headingMatch = line.match(/^\s*(#{1,6})\s+(.+?)\s*#*\s*$/);
		if (headingMatch) {
			flushSection();
			const level = headingMatch[1].length;
			const heading = headingMatch[2].trim();
			headingStack.splice(level - 1);
			headingStack[level - 1] = heading;
			currentHeading = heading;
			currentHeadingPath = headingStack.join(" / ");
			currentHeadingLevel = level;
			continue;
		}
		currentLines.push(line);
	}

	flushSection();

	if (sections.length === 0 && text.trim()) {
		sections.push({
			heading: null,
			headingPath: null,
			headingLevel: null,
			body: text.trim(),
		});
	}

	const chunks: ChunkResult[] = [];
	let chunkIndex = 0;
	for (const section of sections) {
		const subChunks = splitLongSectionBody(section.body);
		for (const subBody of subChunks) {
			chunks.push({
				body: subBody,
				heading: section.heading,
				headingPath: section.headingPath,
				headingLevel: section.headingLevel,
				chunkIndex,
				bodySummary: buildBodySummary(section.headingPath, subBody),
			});
			chunkIndex += 1;
		}
	}

	return chunks;
}

/**
 * 普通文本按段落切分，每个段落一个 chunk。
 */
function chunkPlainText(text: string): ChunkResult[] {
	const paragraphs = splitParagraphs(text);
	const units = paragraphs.length > 0 ? paragraphs : text.trim() ? [text.trim()] : [];

	return units.map((unit, index) => ({
		body: unit,
		heading: null,
		headingPath: null,
		headingLevel: null,
		chunkIndex: index,
		bodySummary: buildBodySummary(null, unit),
	}));
}

function normalizeQueryTokens(input: string): string[] {
	return input
		.trim()
		.replace(/[^\p{L}\p{N}\u4e00-\u9fff]+/gu, " ")
		.split(/\s+/)
		.map((token) => token.trim())
		.filter((token) => token.length > 0)
		.slice(0, 12);
}

function buildFtsMatchQuery(tokens: string[]): string {
	if (tokens.length === 0) {
		return "";
	}
	return tokens.map((token) => `"${token.replace(/"/g, '""')}"`).join(" OR ");
}

function computeHeadingHitBonus(
	tokens: string[],
	heading: string | null,
	headingPath: string | null,
): number {
	if (tokens.length === 0) {
		return 0;
	}
	const haystack = `${heading ?? ""} ${headingPath ?? ""}`.toLowerCase();
	if (!haystack) {
		return 0;
	}
	const limitedTokens = tokens.slice(0, 4);
	let hits = 0;
	for (const token of limitedTokens) {
		if (haystack.includes(token.toLowerCase())) {
			hits += 1;
		}
	}
	return limitedTokens.length === 0 ? 0 : hits / limitedTokens.length;
}

function computeExactPhraseBonus(rawQuery: string, candidate: KnowledgeSearchResult): number {
	const phrase = rawQuery.trim().toLowerCase();
	if (phrase.length < 3) {
		return 0;
	}
	const haystack =
		`${candidate.heading ?? ""} ${candidate.headingPath ?? ""} ${candidate.content}`.toLowerCase();
	return haystack.includes(phrase) ? 1 : 0;
}

function rankToSignal(rank: number | null): number {
	if (rank === null || rank < 0) {
		return 0;
	}
	return 1 / (rank + 1);
}

function buildSnippetFromBody(body: string, tokens: string[]): string {
	if (!body.trim()) {
		return "";
	}
	const normalizedBody = body.replace(/\s+/g, " ");
	if (tokens.length === 0) {
		return normalizedBody.length > 220 ? `${normalizedBody.slice(0, 220)}...` : normalizedBody;
	}
	const lowerBody = normalizedBody.toLowerCase();
	let hitIndex = -1;
	for (const token of tokens) {
		const index = lowerBody.indexOf(token.toLowerCase());
		if (index >= 0) {
			hitIndex = index;
			break;
		}
	}
	if (hitIndex < 0) {
		return normalizedBody.length > 220 ? `${normalizedBody.slice(0, 220)}...` : normalizedBody;
	}

	const start = Math.max(0, hitIndex - 80);
	const end = Math.min(normalizedBody.length, hitIndex + 180);
	const snippet = normalizedBody.slice(start, end);
	return start > 0 ? `...${snippet}` : snippet;
}

function fnv1aHash(text: string): number {
	let hash = 0x811c9dc5;
	for (let i = 0; i < text.length; i++) {
		hash ^= text.charCodeAt(i);
		hash = Math.imul(hash, 0x01000193);
	}
	return hash >>> 0;
}

function generateLocalEmbeddingTokens(text: string): string[] {
	const normalized = text.toLowerCase().replace(/\s+/g, " ").trim();
	if (!normalized) {
		return [];
	}

	const tokenCandidates = normalized.match(/[\p{L}\p{N}_./:-]+/gu) ?? [];
	const tokens: string[] = [];

	for (const token of tokenCandidates) {
		if (!token) {
			continue;
		}
		tokens.push(`w:${token}`);

		const ngramToken = token.length > 32 ? token.slice(0, 32) : token;
		for (let i = 0; i + 2 < ngramToken.length && i < 8; i++) {
			tokens.push(`g3:${ngramToken.slice(i, i + 3)}`);
		}
	}

	const chinese = normalized.replace(/[^\u4e00-\u9fff]/g, "");
	for (let i = 0; i < chinese.length && i < 256; i++) {
		tokens.push(`zh1:${chinese[i]}`);
		if (i + 1 < chinese.length) {
			tokens.push(`zh2:${chinese.slice(i, i + 2)}`);
		}
	}

	if (tokens.length > MAX_EMBED_TOKENS) {
		return tokens.slice(0, MAX_EMBED_TOKENS);
	}
	return tokens;
}

function l2Normalize(vector: number[]): number[] {
	let sumSquares = 0;
	for (const value of vector) {
		sumSquares += value * value;
	}
	if (sumSquares <= 0) {
		return vector;
	}
	const norm = Math.sqrt(sumSquares);
	return vector.map((value) => value / norm);
}

function buildEmbeddingInput(chunk: ChunkInsertRow): string {
	const parts: string[] = [];
	if (chunk.heading) {
		parts.push(`标题: ${chunk.heading}`);
	}
	if (chunk.headingPath) {
		parts.push(`路径: ${chunk.headingPath}`);
	}
	if (chunk.bodySummary) {
		parts.push(`摘要: ${chunk.bodySummary}`);
	}
	parts.push(`正文: ${chunk.body}`);
	const merged = parts.join("\n");
	return merged.length > MAX_EMBED_INPUT_CHARS ? merged.slice(0, MAX_EMBED_INPUT_CHARS) : merged;
}

function embedTextLocal(text: string, dimensions = KNOWLEDGE_EMBEDDING_DIM): number[] {
	const tokens = generateLocalEmbeddingTokens(text);
	const vector = new Array<number>(dimensions).fill(0);
	if (tokens.length === 0) {
		return vector;
	}

	const tokenCounts = new Map<string, number>();
	for (const token of tokens) {
		tokenCounts.set(token, (tokenCounts.get(token) ?? 0) + 1);
	}

	for (const [token, count] of tokenCounts) {
		const weight = 1 + Math.log1p(count);
		const hashA = fnv1aHash(token);
		const hashB = fnv1aHash(`salt:${token}`);
		const indexA = hashA % dimensions;
		const indexB = hashB % dimensions;
		const signA = (hashA & 1) === 0 ? 1 : -1;
		const signB = (hashB & 1) === 0 ? 1 : -1;

		vector[indexA] += signA * weight;
		vector[indexB] += signB * weight * 0.5;
	}

	return l2Normalize(vector);
}

async function upsertChunkEmbeddings(
	db: import("@nano-agent/db").Db,
	chunks: ChunkInsertRow[],
	chunkRowIdMap: Map<string, number>,
): Promise<void> {
	if (chunks.length === 0) {
		return;
	}

	const sqlite = getRawSqliteClient(db);
	const hasVecTable = hasKnowledgeVecTable(sqlite);

	const vecRows: Array<{ rowid: number; vectorJson: string }> = [];

	for (const chunk of chunks) {
		const vector = embedTextLocal(buildEmbeddingInput(chunk));
		const rowid = chunkRowIdMap.get(chunk.id);

		await db
			.insert(knowledgeChunkEmbeddings)
			.values({
				chunkId: chunk.id,
				model: KNOWLEDGE_EMBEDDING_MODEL,
				vector,
				dimensions: vector.length,
				updatedAt: new Date().toISOString(),
			})
			.onConflictDoUpdate({
				target: knowledgeChunkEmbeddings.chunkId,
				set: {
					model: KNOWLEDGE_EMBEDDING_MODEL,
					vector,
					dimensions: vector.length,
					updatedAt: new Date().toISOString(),
				},
			});

		if (hasVecTable && typeof rowid === "number" && Number.isFinite(rowid)) {
			vecRows.push({
				rowid,
				vectorJson: JSON.stringify(vector),
			});
		}
	}

	if (!hasVecTable || vecRows.length === 0) {
		return;
	}

	const deleteStmt = sqlite.prepare(
		"DELETE FROM knowledge_chunk_vectors WHERE rowid = CAST(? AS INTEGER)",
	);
	const insertStmt = sqlite.prepare(
		"INSERT INTO knowledge_chunk_vectors(rowid, embedding) VALUES (CAST(? AS INTEGER), ?)",
	);
	for (const row of vecRows) {
		deleteStmt.run(row.rowid);
		insertStmt.run(row.rowid, row.vectorJson);
	}
}

export function getKnowledgeVectorRuntimeStatus(
	db: import("@nano-agent/db").Db,
): KnowledgeVectorRuntimeStatus {
	const sqlite = getRawSqliteClient(db);
	const vectorTableExists = hasKnowledgeVecTable(sqlite);
	let vectorTableQueryable = false;

	if (vectorTableExists) {
		try {
			sqlite.prepare("SELECT rowid FROM knowledge_chunk_vectors LIMIT 1").all();
			vectorTableQueryable = true;
		} catch (error) {
			console.warn("[Knowledge] knowledge_chunk_vectors is present but not queryable:", error);
		}
	}

	const embeddingRowsResult = sqlite
		.prepare("SELECT COUNT(1) AS total FROM knowledge_chunk_embeddings")
		.get() as { total?: number } | undefined;
	const embeddingRows = Number(embeddingRowsResult?.total ?? 0);

	let vectorRows: number | null = null;
	if (vectorTableQueryable) {
		try {
			const vectorRowsResult = sqlite
				.prepare("SELECT COUNT(1) AS total FROM knowledge_chunk_vectors")
				.get() as { total?: number } | undefined;
			vectorRows = Number(vectorRowsResult?.total ?? 0);
		} catch (error) {
			console.warn("[Knowledge] Failed to read vector row count:", error);
		}
	}

	return {
		embeddingModel: KNOWLEDGE_EMBEDDING_MODEL,
		embeddingDimensions: KNOWLEDGE_EMBEDDING_DIM,
		vectorTableExists,
		vectorTableQueryable,
		vectorSearchEnabled: vectorTableExists && vectorTableQueryable,
		embeddingRows,
		vectorRows,
	};
}

function mergeAndRankCandidates(
	queryTokens: string[],
	rawQuery: string,
	ftsCandidates: KnowledgeSearchResult[],
	vectorCandidates: KnowledgeSearchResult[],
): KnowledgeSearchResult[] {
	const candidateMap = new Map<string, SearchCandidate>();

	for (let index = 0; index < ftsCandidates.length; index++) {
		const item = ftsCandidates[index];
		candidateMap.set(item.chunkId, {
			...item,
			ftsRank: index,
			vectorRank: null,
		});
	}

	for (let index = 0; index < vectorCandidates.length; index++) {
		const item = vectorCandidates[index];
		const existing = candidateMap.get(item.chunkId);
		if (existing) {
			existing.vectorRank = index;
			if (!existing.snippet && item.snippet) {
				existing.snippet = item.snippet;
			}
			if (!existing.bodySummary && item.bodySummary) {
				existing.bodySummary = item.bodySummary;
			}
			continue;
		}
		candidateMap.set(item.chunkId, {
			...item,
			ftsRank: null,
			vectorRank: index,
		});
	}

	const ranked = Array.from(candidateMap.values()).map((candidate) => {
		const ftsSignal = rankToSignal(candidate.ftsRank);
		const vectorSignal = rankToSignal(candidate.vectorRank);
		const headingBonus = computeHeadingHitBonus(
			queryTokens,
			candidate.heading,
			candidate.headingPath,
		);
		const phraseBonus = computeExactPhraseBonus(rawQuery, candidate);

		const finalScore =
			FTS_WEIGHT * ftsSignal +
			VECTOR_WEIGHT * vectorSignal +
			TITLE_BONUS_WEIGHT * headingBonus +
			EXACT_PHRASE_BONUS_WEIGHT * phraseBonus;

		return {
			...candidate,
			score: Number(finalScore.toFixed(6)),
		};
	});

	ranked.sort((a, b) => b.score - a.score);
	return ranked;
}

async function searchByFts(
	db: import("@nano-agent/db").Db,
	agentId: string,
	matchQuery: string,
	candidateLimit: number,
): Promise<KnowledgeSearchResult[]> {
	type RawRow = {
		document_id: string;
		filename: string;
		doc_path: string | null;
		chunk_id: string;
		chunk_index: number;
		heading: string | null;
		heading_path: string | null;
		heading_level: number | null;
		body: string;
		body_summary: string | null;
		snippet: string | null;
		bm25_score: number;
	};

	const sql = `
		SELECT
			kd.id AS document_id,
			kd.filename AS filename,
			kc.doc_path AS doc_path,
			kc.id AS chunk_id,
			kc.chunk_index AS chunk_index,
			kc.heading AS heading,
			kc.heading_path AS heading_path,
			kc.heading_level AS heading_level,
			COALESCE(kc.body, kc.content) AS body,
			kc.body_summary AS body_summary,
			snippet(knowledge_chunks_fts, 2, '<b>', '</b>', '...', 24) AS snippet,
			bm25(knowledge_chunks_fts, 8.0, 4.0, 1.5, 1.0) AS bm25_score
		FROM knowledge_chunks_fts
		INNER JOIN knowledge_chunks kc ON kc.rowid = knowledge_chunks_fts.rowid
		INNER JOIN knowledge_documents kd ON kd.id = kc.document_id
		WHERE kd.agent_id = ?
			AND kd.status = 'ready'
			AND knowledge_chunks_fts MATCH ?
		ORDER BY bm25_score ASC
		LIMIT ?;
	`;

	const sqlite = getRawSqliteClient(db);
	const rows = sqlite.prepare(sql).all(agentId, matchQuery, candidateLimit) as RawRow[];
	return rows.map((row) => ({
		documentId: row.document_id,
		filename: row.filename,
		docPath: row.doc_path,
		chunkId: row.chunk_id,
		chunkIndex: row.chunk_index,
		heading: row.heading,
		headingPath: row.heading_path,
		headingLevel: row.heading_level,
		sectionTitle: row.heading_path ?? row.heading ?? null,
		content: row.body,
		bodySummary: row.body_summary,
		snippet: row.snippet,
		score: row.bm25_score,
	}));
}

async function searchByVector(
	db: import("@nano-agent/db").Db,
	agentId: string,
	query: string,
	queryTokens: string[],
	candidateLimit: number,
): Promise<KnowledgeSearchResult[]> {
	const sqlite = getRawSqliteClient(db);
	const hasVecTable = hasKnowledgeVecTable(sqlite);

	if (!hasVecTable) {
		return [];
	}

	const queryVector = embedTextLocal(query);
	const queryVectorJson = JSON.stringify(queryVector);

	type VectorRawRow = {
		document_id: string;
		filename: string;
		doc_path: string | null;
		chunk_id: string;
		chunk_index: number;
		heading: string | null;
		heading_path: string | null;
		heading_level: number | null;
		body: string;
		body_summary: string | null;
		distance: number;
	};

	try {
		const vectorRows = sqlite
			.prepare(
				`
				SELECT
					kd.id AS document_id,
					kd.filename AS filename,
					kc.doc_path AS doc_path,
					kc.id AS chunk_id,
					kc.chunk_index AS chunk_index,
					kc.heading AS heading,
					kc.heading_path AS heading_path,
					kc.heading_level AS heading_level,
					COALESCE(kc.body, kc.content) AS body,
					kc.body_summary AS body_summary,
					kv.distance AS distance
				FROM knowledge_chunk_vectors kv
				INNER JOIN knowledge_chunks kc ON kc.rowid = kv.rowid
				INNER JOIN knowledge_documents kd ON kd.id = kc.document_id
				WHERE kd.agent_id = ?
					AND kd.status = 'ready'
					AND kv.embedding MATCH ?
				ORDER BY distance ASC
				LIMIT ?;
			`,
			)
			.all(agentId, queryVectorJson, candidateLimit) as VectorRawRow[];

		return vectorRows.map((row) => ({
			documentId: row.document_id,
			filename: row.filename,
			docPath: row.doc_path,
			chunkId: row.chunk_id,
			chunkIndex: row.chunk_index,
			heading: row.heading,
			headingPath: row.heading_path,
			headingLevel: row.heading_level,
			sectionTitle: row.heading_path ?? row.heading ?? null,
			content: row.body,
			bodySummary: row.body_summary,
			snippet: buildSnippetFromBody(row.body, queryTokens),
			score: 1 / (1 + Math.max(row.distance, 0)),
		}));
	} catch (error) {
		console.error("[Knowledge] sqlite-vec query failed:", error);
		return [];
	}
}

/**
 * 处理文档: 提取文本 → 分块 → 写入数据库 + FTS5 + sqlite-vec
 */
export async function processDocument(
	db: import("@nano-agent/db").Db,
	docId: string,
	buffer: Buffer,
	filename: string,
): Promise<void> {
	await db
		.update(knowledgeDocuments)
		.set({ status: "processing" })
		.where(eq(knowledgeDocuments.id, docId));

	try {
		const text = await extractText(buffer, filename);

		if (!text.trim()) {
			await db
				.update(knowledgeDocuments)
				.set({ status: "error", error: "No text content extracted" })
				.where(eq(knowledgeDocuments.id, docId));
			return;
		}

		const ext = extname(filename).toLowerCase();
		const chunks =
			ext === ".md" || ext === ".markdown" ? chunkMarkdownByHeadings(text) : chunkPlainText(text);

		await deleteDocumentChunksWithRecovery(db, docId);

		let insertedChunks: ChunkInsertRow[] = [];
		if (chunks.length > 0) {
			const docPath = `${docId}/${filename}`;
			const insertedRows = await db
				.insert(knowledgeChunks)
				.values(
					chunks.map((chunk) => ({
						documentId: docId,
						heading: chunk.heading,
						headingPath: chunk.headingPath,
						headingLevel: chunk.headingLevel,
						body: chunk.body,
						bodySummary: chunk.bodySummary,
						fileName: filename,
						docPath,
						content: chunk.body,
						sectionTitle: chunk.headingPath ?? chunk.heading,
						chunkIndex: chunk.chunkIndex,
					})),
				)
				.returning({
					id: knowledgeChunks.id,
					body: knowledgeChunks.body,
					heading: knowledgeChunks.heading,
					headingPath: knowledgeChunks.headingPath,
					headingLevel: knowledgeChunks.headingLevel,
					bodySummary: knowledgeChunks.bodySummary,
					fileName: knowledgeChunks.fileName,
					docPath: knowledgeChunks.docPath,
					chunkIndex: knowledgeChunks.chunkIndex,
				});

			insertedChunks = insertedRows.map((row) => ({
				id: row.id,
				body: row.body ?? "",
				heading: row.heading,
				headingPath: row.headingPath,
				headingLevel: row.headingLevel,
				bodySummary: row.bodySummary,
				fileName: row.fileName,
				docPath: row.docPath,
				chunkIndex: row.chunkIndex,
			}));
		}

		try {
			const sqlite = getRawSqliteClient(db);
			const rowidRows = sqlite
				.prepare("SELECT id, rowid AS chunk_rowid FROM knowledge_chunks WHERE document_id = ?")
				.all(docId) as Array<{ id: string; chunk_rowid: number }>;
			const rowidMap = new Map<string, number>();
			for (const row of rowidRows) {
				rowidMap.set(row.id, Number(row.chunk_rowid));
			}
			await upsertChunkEmbeddings(db, insertedChunks, rowidMap);
		} catch (error) {
			console.error("[Knowledge] Failed to upsert embeddings:", error);
		}

		await db
			.update(knowledgeDocuments)
			.set({
				status: "ready",
				chunkCount: chunks.length,
				error: null,
			})
			.where(eq(knowledgeDocuments.id, docId));
	} catch (error) {
		const msg = error instanceof Error ? error.message : "Unknown error";
		await db
			.update(knowledgeDocuments)
			.set({ status: "error", error: msg })
			.where(eq(knowledgeDocuments.id, docId));
	}
}

function mergeAndTakeBudget(
	ranked: KnowledgeSearchResult[],
	topK: number,
	contextBudgetChars: number,
): KnowledgeSearchResult[] {
	if (ranked.length === 0) {
		return [];
	}

	const selected: KnowledgeSearchResult[] = [];
	let usedChars = 0;
	for (const item of ranked) {
		if (selected.length >= topK) {
			break;
		}

		const itemChars = item.content.length;
		const overflow = usedChars + itemChars > contextBudgetChars;
		if (overflow && selected.length > 0) {
			continue;
		}

		selected.push(item);
		usedChars += itemChars;
		if (usedChars >= contextBudgetChars) {
			break;
		}
	}

	if (selected.length === 0) {
		selected.push(ranked[0]);
	}
	return selected;
}

/**
 * 在指定 agent 的知识库中执行 Hybrid 检索（FTS + sqlite-vec）。
 */
export async function searchKnowledge(
	db: import("@nano-agent/db").Db,
	agentId: string,
	query: string,
	options: SearchKnowledgeOptions = {},
): Promise<KnowledgeSearchResult[]> {
	const trimmedQuery = query.trim();
	if (!trimmedQuery) {
		return [];
	}

	const queryTokens = normalizeQueryTokens(trimmedQuery);
	const matchQuery = buildFtsMatchQuery(queryTokens);

	const topK = Math.max(1, Math.min(options.topK ?? DEFAULT_TOP_K, MAX_TOP_K));
	const contextBudgetChars = Math.max(
		1000,
		Math.min(options.maxContextChars ?? DEFAULT_CONTEXT_BUDGET_CHARS, MAX_CONTEXT_BUDGET_CHARS),
	);
	const candidateLimit = Math.max(topK * 3, 24);

	let ftsCandidates: KnowledgeSearchResult[] = [];
	if (matchQuery) {
		try {
			ftsCandidates = await searchByFts(db, agentId, matchQuery, candidateLimit);
		} catch (error) {
			console.error("[Knowledge] FTS search failed:", error);
		}
	}

	let vectorCandidates: KnowledgeSearchResult[] = [];
	try {
		vectorCandidates = await searchByVector(db, agentId, trimmedQuery, queryTokens, candidateLimit);
	} catch (error) {
		console.error("[Knowledge] Vector search failed:", error);
	}

	const ranked = mergeAndRankCandidates(queryTokens, trimmedQuery, ftsCandidates, vectorCandidates);
	return mergeAndTakeBudget(ranked, topK, contextBudgetChars);
}
