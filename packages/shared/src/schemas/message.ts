import { z } from "zod";

export const messageRoleSchema = z.enum(["user", "assistant", "system", "tool"]);

export const thinkingConfigSchema = z.object({
	type: z.enum(["enabled", "disabled"]).default("enabled"),
	clearThinking: z.boolean().optional(),
});

export const chatAttachmentSchema = z.object({
	fileName: z.string(),
	fileSize: z.number(),
	sandboxPath: z.string(),
});

export const sendMessageSchema = z.object({
	content: z.string().min(1).max(100000),
	thinking: thinkingConfigSchema.optional(),
	attachments: z.array(chatAttachmentSchema).optional(),
});

export const executeCodeSchema = z.object({
	language: z.string().min(1).max(32).default("python"),
	code: z.string().min(1).max(200000),
});

export const saveExecutionResultSchema = z.object({
	codeHash: z.string().min(1).max(64),
	output: z.string().nullable(),
	exitCode: z.number().nullable(),
	error: z.string().nullable(),
});

export const messagesQuerySchema = z.object({
	cursor: z.string().optional(),
	limit: z.coerce.number().min(1).max(100).default(50),
});

export type MessageRole = z.infer<typeof messageRoleSchema>;
export type ThinkingConfigInput = z.infer<typeof thinkingConfigSchema>;
export type ChatAttachment = z.infer<typeof chatAttachmentSchema>;
export type SendMessageInput = z.infer<typeof sendMessageSchema>;
export type ExecuteCodeInput = z.infer<typeof executeCodeSchema>;
export type SaveExecutionResultInput = z.infer<typeof saveExecutionResultSchema>;
export type MessagesQuery = z.infer<typeof messagesQuerySchema>;

export interface CodeExecutionResult {
	output: string;
	exitCode: number | null;
	truncated: boolean;
	language: string;
	command: string;
}

export interface Message {
	id: string;
	conversationId: string;
	role: MessageRole;
	content: string;
	metadata: Record<string, unknown> | null;
	createdAt: string;
}
