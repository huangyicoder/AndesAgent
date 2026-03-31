import { z } from "zod";

export const createConversationSchema = z.object({
	title: z.string().min(1).max(200).optional(),
});

export type CreateConversationInput = z.infer<typeof createConversationSchema>;

export interface Conversation {
	id: string;
	agentId: string;
	title: string | null;
	createdAt: string;
	updatedAt: string;
}
