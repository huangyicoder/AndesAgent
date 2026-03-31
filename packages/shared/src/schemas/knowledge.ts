import { z } from "zod";

export const knowledgeContentTypeSchema = z.enum(["document", "code"]);

export const knowledgeDocumentStatusSchema = z.enum(["pending", "processing", "ready", "error"]);

export type KnowledgeContentType = z.infer<typeof knowledgeContentTypeSchema>;
export type KnowledgeDocumentStatus = z.infer<typeof knowledgeDocumentStatusSchema>;

export interface KnowledgeDocument {
	id: string;
	agentId: string;
	filename: string;
	contentType: KnowledgeContentType;
	status: KnowledgeDocumentStatus;
	chunkCount: number;
	fileSize: number;
	error: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface KnowledgeChunk {
	id: string;
	documentId: string;
	content: string;
	sectionTitle: string | null;
	chunkIndex: number;
}

export interface KnowledgeVectorStatus {
	embeddingModel: string;
	embeddingDimensions: number;
	vectorTableExists: boolean;
	vectorTableQueryable: boolean;
	vectorSearchEnabled: boolean;
	embeddingRows: number;
	vectorRows: number | null;
}

export interface KnowledgeRebuildSummary {
	success: boolean;
	total: number;
	started: number;
	skipped: number;
}
