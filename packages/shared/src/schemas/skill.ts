import { z } from "zod";

export const createSkillSchema = z.object({
	name: z.string().min(1),
	description: z.string().min(1),
	icon: z.string().nullable().optional(),
	category: z.string().default("general"),
	config: z.record(z.unknown()).nullable().optional(),
});

export const updateSkillSchema = z.object({
	name: z.string().min(1).optional(),
	description: z.string().min(1).optional(),
	icon: z.string().nullable().optional(),
	category: z.string().optional(),
});

export const installSkillSchema = z.object({
	skillId: z.string(),
	enabled: z.boolean().default(true),
});

export const updateAgentSkillSchema = z.object({
	enabled: z.boolean(),
});

export type CreateSkillInput = z.infer<typeof createSkillSchema>;
export type UpdateSkillInput = z.infer<typeof updateSkillSchema>;
export type InstallSkillInput = z.infer<typeof installSkillSchema>;
export type UpdateAgentSkillInput = z.infer<typeof updateAgentSkillSchema>;

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string | null;
	category: string;
	config: Record<string, unknown> | null;
	dirPath: string | null;
	version: number;
	author: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface AgentSkill {
	agentId: string;
	skillId: string;
	enabled: boolean;
	installedAt: string;
}
