import { z } from "zod";

export const updateSystemPromptDocumentSchema = z.object({
	content: z.string().max(20000),
});

export type UpdateSystemPromptDocumentInput = z.infer<typeof updateSystemPromptDocumentSchema>;

export interface SystemPromptDocument {
	id: string;
	agentId: string;
	content: string;
	createdAt: string;
	updatedAt: string;
}
