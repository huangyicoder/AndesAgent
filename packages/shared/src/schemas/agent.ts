import { z } from "zod";

const disabledToolNameSchema = z.string().trim().min(1).max(120);

export const createAgentSchema = z.object({
	name: z.string().min(1).max(100),
	description: z.string().max(500).optional(),
	systemPrompt: z.string().max(10000).optional(),
	model: z.string().default("gpt-4o"),
	temperature: z.number().min(0).max(2).default(0.7),
	avatar: z.string().optional(),
	disabledTools: z.array(disabledToolNameSchema).max(64).optional(),
});

export const updateAgentSchema = createAgentSchema.partial();

export type CreateAgentInput = z.infer<typeof createAgentSchema>;
export type UpdateAgentInput = z.infer<typeof updateAgentSchema>;

export interface Agent {
	id: string;
	name: string;
	description: string | null;
	systemPrompt: string | null;
	model: string;
	temperature: number;
	avatar: string | null;
	disabledTools: string[] | null;
	createdAt: string;
	updatedAt: string;
}
