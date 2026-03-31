import { z } from "zod";

export const DEFAULT_TEMPERATURE_MIN = 0;
export const DEFAULT_TEMPERATURE_MAX = 1;
export const DEFAULT_TEMPERATURE_STEP = 0.1;
export const AGENT_RUNTIME_INTEGER_MIN = 1;

export const defaultTemperatureSchema = z.coerce
	.number()
	.finite()
	.min(DEFAULT_TEMPERATURE_MIN)
	.max(DEFAULT_TEMPERATURE_MAX)
	.refine(
		(value) =>
			Math.abs(value / DEFAULT_TEMPERATURE_STEP - Math.round(value / DEFAULT_TEMPERATURE_STEP)) <
			1e-9,
		{
			message: `default_temperature must use ${DEFAULT_TEMPERATURE_STEP} increments`,
		},
	);

const agentRuntimeIntegerSchema = z.coerce.number().int().min(AGENT_RUNTIME_INTEGER_MIN);

export const toolCallLimitExitBehaviorSchema = z.enum(["continue", "error", "end"]);
export const modelCallLimitExitBehaviorSchema = z.enum(["error", "end"]);

export const updateSettingsSchema = z
	.object({
		default_temperature: defaultTemperatureSchema.optional(),
		agent_tool_retry_max_retries: agentRuntimeIntegerSchema.optional(),
		agent_tool_call_run_limit: agentRuntimeIntegerSchema.nullable().optional(),
		agent_tool_call_limit_exit_behavior: toolCallLimitExitBehaviorSchema.optional(),
		agent_model_call_run_limit: agentRuntimeIntegerSchema.nullable().optional(),
		agent_model_call_limit_exit_behavior: modelCallLimitExitBehaviorSchema.optional(),
	})
	.catchall(z.unknown());

export type UpdateSettingsInput = z.input<typeof updateSettingsSchema>;

export interface Setting {
	key: string;
	value: string;
	updatedAt: string;
}
