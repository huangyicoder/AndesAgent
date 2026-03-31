import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { settingsApi } from "@/lib/api";
import { useAppStore } from "@/stores/app-store";
import {
	AGENT_RUNTIME_INTEGER_MIN,
	DEFAULT_TEMPERATURE_MAX,
	DEFAULT_TEMPERATURE_MIN,
	DEFAULT_TEMPERATURE_STEP,
} from "@nano-agent/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const EMPTY_SETTINGS: Record<string, string> = {};

const PROVIDERS = [
	{
		id: "openai",
		labelEn: "OpenAI",
		labelZh: "OpenAI",
		baseUrl: "https://api.openai.com/v1",
		defaultModel: "gpt-4o",
	},
	{
		id: "qwen",
		labelEn: "Qwen (Alibaba Cloud)",
		labelZh: "通义千问（阿里云）",
		baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
		defaultModel: "qwen-max",
	},
	{
		id: "zhipu",
		labelEn: "Zhipu GLM",
		labelZh: "智谱 GLM",
		baseUrl: "https://open.bigmodel.cn/api/paas/v4/",
		defaultModel: "glm-4.7",
	},
	{
		id: "zhipu_code_plan",
		labelEn: "Zhipu code plan",
		labelZh: "智谱 code plan",
		baseUrl: "https://open.bigmodel.cn/api/coding/paas/v4",
		defaultModel: "glm-4.7",
	},
	{
		id: "deepseek",
		labelEn: "DeepSeek",
		labelZh: "DeepSeek",
		baseUrl: "https://api.deepseek.com/v1",
		defaultModel: "deepseek-chat",
	},
	{
		id: "minimax",
		labelEn: "MiniMax",
		labelZh: "MiniMax",
		baseUrl: "https://api.minimax.chat/v1",
		defaultModel: "abab6.5s-chat",
	},
] as const;

const DEFAULTS: Record<string, string> = {
	language: "auto",
	theme: "light",
	llm_provider: "zhipu",
	llm_base_url: "https://open.bigmodel.cn/api/paas/v4/",
	llm_api_key: "",
	llm_model: "glm-4.7",
	default_temperature: "0.7",
	agent_tool_retry_max_retries: "2",
	agent_tool_call_run_limit: "",
	agent_tool_call_limit_exit_behavior: "continue",
	agent_model_call_run_limit: "",
	agent_model_call_limit_exit_behavior: "error",
};

const TOOL_CALL_LIMIT_EXIT_BEHAVIOR_OPTIONS = [
	{ value: "continue", labelEn: "Continue", labelZh: "继续执行" },
	{ value: "error", labelEn: "Error", labelZh: "抛出错误" },
	{ value: "end", labelEn: "End", labelZh: "立即结束" },
] as const;

const MODEL_CALL_LIMIT_EXIT_BEHAVIOR_OPTIONS = [
	{ value: "error", labelEn: "Error", labelZh: "抛出错误" },
	{ value: "end", labelEn: "End", labelZh: "立即结束" },
] as const;

function parseTemperature(value: string): number | null {
	if (value.trim() === "") {
		return null;
	}

	const parsed = Number(value);
	if (!Number.isFinite(parsed)) {
		return null;
	}

	return parsed;
}

function isTemperatureInStep(value: number): boolean {
	return (
		Math.abs(value / DEFAULT_TEMPERATURE_STEP - Math.round(value / DEFAULT_TEMPERATURE_STEP)) < 1e-9
	);
}

function normalizeTemperature(value: string): string {
	const parsed = parseTemperature(value);
	if (parsed === null) {
		return DEFAULTS.default_temperature;
	}

	const clamped = Math.min(DEFAULT_TEMPERATURE_MAX, Math.max(DEFAULT_TEMPERATURE_MIN, parsed));
	const stepped = Math.round(clamped / DEFAULT_TEMPERATURE_STEP) * DEFAULT_TEMPERATURE_STEP;
	return stepped.toFixed(1);
}

function parsePositiveInteger(value: string): number | null {
	const trimmed = value.trim();
	if (trimmed.length === 0) {
		return null;
	}

	const parsed = Number(trimmed);
	if (!Number.isFinite(parsed) || !Number.isInteger(parsed) || parsed < AGENT_RUNTIME_INTEGER_MIN) {
		return null;
	}

	return parsed;
}

export function SettingsGeneral() {
	const queryClient = useQueryClient();
	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const isZh = uiLanguage === "zh";

	const { data: settings = EMPTY_SETTINGS } = useQuery({
		queryKey: ["settings"],
		queryFn: settingsApi.get,
	});

	const [form, setForm] = useState<Record<string, string>>({});
	const [dirty, setDirty] = useState(false);

	// Sync server state to local form
	useEffect(() => {
		const merged: Record<string, string> = {};
		for (const [key, defaultVal] of Object.entries(DEFAULTS)) {
			merged[key] = settings[key] ?? defaultVal;
		}
		if (!parsePositiveInteger(merged.agent_tool_retry_max_retries)) {
			merged.agent_tool_retry_max_retries = DEFAULTS.agent_tool_retry_max_retries;
		}
		if (
			!parsePositiveInteger(merged.agent_tool_call_run_limit ?? "") &&
			merged.agent_tool_call_run_limit.trim() !== ""
		) {
			merged.agent_tool_call_run_limit = DEFAULTS.agent_tool_call_run_limit;
		}
		if (
			!parsePositiveInteger(merged.agent_model_call_run_limit ?? "") &&
			merged.agent_model_call_run_limit.trim() !== ""
		) {
			merged.agent_model_call_run_limit = DEFAULTS.agent_model_call_run_limit;
		}
		if (
			!TOOL_CALL_LIMIT_EXIT_BEHAVIOR_OPTIONS.some(
				(item) => item.value === merged.agent_tool_call_limit_exit_behavior,
			)
		) {
			merged.agent_tool_call_limit_exit_behavior = DEFAULTS.agent_tool_call_limit_exit_behavior;
		}
		if (
			!MODEL_CALL_LIMIT_EXIT_BEHAVIOR_OPTIONS.some(
				(item) => item.value === merged.agent_model_call_limit_exit_behavior,
			)
		) {
			merged.agent_model_call_limit_exit_behavior = DEFAULTS.agent_model_call_limit_exit_behavior;
		}
		setForm(merged);
		setDirty(false);
	}, [settings]);

	const updateSettings = useMutation({
		mutationFn: settingsApi.update,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["settings"] });
			setDirty(false);
		},
	});

	const setField = (key: string, value: string) => {
		setForm((prev) => ({ ...prev, [key]: value }));
		setDirty(true);
	};

	const temperatureValue = form.default_temperature ?? DEFAULTS.default_temperature;
	const parsedTemperature = parseTemperature(temperatureValue);
	const isTemperatureValid =
		parsedTemperature !== null &&
		parsedTemperature >= DEFAULT_TEMPERATURE_MIN &&
		parsedTemperature <= DEFAULT_TEMPERATURE_MAX &&
		isTemperatureInStep(parsedTemperature);
	const toolRetryRaw = form.agent_tool_retry_max_retries ?? DEFAULTS.agent_tool_retry_max_retries;
	const parsedToolRetry = parsePositiveInteger(toolRetryRaw);
	const toolCallRunLimitRaw = form.agent_tool_call_run_limit ?? DEFAULTS.agent_tool_call_run_limit;
	const parsedToolCallRunLimit = parsePositiveInteger(toolCallRunLimitRaw);
	const modelCallRunLimitRaw =
		form.agent_model_call_run_limit ?? DEFAULTS.agent_model_call_run_limit;
	const parsedModelCallRunLimit = parsePositiveInteger(modelCallRunLimitRaw);
	const isToolRetryValid = parsedToolRetry !== null;
	const isToolCallRunLimitValid =
		toolCallRunLimitRaw.trim().length === 0 || parsedToolCallRunLimit !== null;
	const isModelCallRunLimitValid =
		modelCallRunLimitRaw.trim().length === 0 || parsedModelCallRunLimit !== null;
	const canSave =
		dirty &&
		!updateSettings.isPending &&
		isTemperatureValid &&
		isToolRetryValid &&
		isToolCallRunLimitValid &&
		isModelCallRunLimitValid;

	const handleSave = () => {
		if (
			!isTemperatureValid ||
			!isToolRetryValid ||
			!isToolCallRunLimitValid ||
			!isModelCallRunLimitValid
		) {
			return;
		}

		updateSettings.mutate({
			...form,
			default_temperature: parsedTemperature ?? Number(DEFAULTS.default_temperature),
			agent_tool_retry_max_retries:
				parsedToolRetry ?? Number(DEFAULTS.agent_tool_retry_max_retries),
			agent_tool_call_run_limit:
				toolCallRunLimitRaw.trim().length === 0 ? null : parsedToolCallRunLimit,
			agent_model_call_run_limit:
				modelCallRunLimitRaw.trim().length === 0 ? null : parsedModelCallRunLimit,
		});
	};

	return (
		<div className="flex flex-col gap-[14px]">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-[6px]">
					<h2 className="text-[28px] font-semibold text-foreground">
						{isZh ? "通用设置" : "General"}
					</h2>
					<p className="text-[13px] text-text-secondary">
						{isZh
							? "用于管理智能体与模型的全局工作台配置。"
							: "Global workspace preferences for agents and models."}
					</p>
				</div>
				<button
					type="button"
					onClick={handleSave}
					disabled={!canSave}
					className="rounded-[8px] bg-[#0969da] border border-[#0969da] px-3 py-2 text-[13px] font-semibold text-white disabled:opacity-50"
				>
					{updateSettings.isPending
						? isZh
							? "保存中..."
							: "Saving..."
						: isZh
							? "保存更改"
							: "Save changes"}
				</button>
			</div>

			{/* Card 1: Language & Theme */}
			<SettingsCard>
				<SettingsRow
					label="Language"
					control={
						<SettingsSelect
							value={form.language ?? "auto"}
							onChange={(v) => setField("language", v)}
							options={[
								{ value: "auto", label: isZh ? "自动检测" : "Auto Detect" },
								{ value: "en", label: "English" },
								{ value: "zh", label: isZh ? "中文" : "Chinese" },
								{ value: "ja", label: isZh ? "日语" : "Japanese" },
							]}
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "主题" : "Theme"}
					control={
						<SettingsSelect
							value={form.theme ?? "light"}
							onChange={(v) => setField("theme", v)}
							options={[
								{ value: "light", label: "Light" },
								{ value: "dark", label: "Dark" },
								{ value: "system", label: "System" },
							]}
						/>
					}
				/>
			</SettingsCard>

			{/* Card 2: LLM Configuration */}
			<SettingsCard>
				<SettingsRow
					label={isZh ? "默认 Provider" : "Default Provider"}
					control={
						<SettingsSelect
							value={form.llm_provider ?? "zhipu"}
							onChange={(v) => {
								const selected = PROVIDERS.find((provider) => provider.id === v);
								setField("llm_provider", v);
								if (selected) {
									setField("llm_base_url", selected.baseUrl);
									setField("llm_model", selected.defaultModel);
								}
							}}
							options={PROVIDERS.map((provider) => ({
								value: provider.id,
								label: isZh ? provider.labelZh : provider.labelEn,
							}))}
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label="Temperature"
					control={
						<SettingsInput
							type="number"
							value={temperatureValue}
							onChange={(v) => setField("default_temperature", v)}
							onBlur={() => setField("default_temperature", normalizeTemperature(temperatureValue))}
							min={DEFAULT_TEMPERATURE_MIN}
							max={DEFAULT_TEMPERATURE_MAX}
							step={DEFAULT_TEMPERATURE_STEP}
							placeholder="0.7"
							className="w-[320px]"
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "模型" : "Model"}
					control={
						<SettingsInput
							value={form.llm_model ?? ""}
							onChange={(v) => setField("llm_model", v)}
							placeholder="gpt-4o / glm-4.7 / qwen-max"
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "API 基础地址" : "API Base URL"}
					control={
						<SettingsInput
							value={form.llm_base_url ?? ""}
							onChange={(v) => setField("llm_base_url", v)}
							placeholder="https://api.openai.com/v1"
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "API 密钥" : "API Key"}
					control={
						<SettingsInput
							value={form.llm_api_key ?? ""}
							onChange={(v) => setField("llm_api_key", v)}
							placeholder="sk-..."
							type="password"
						/>
					}
				/>
			</SettingsCard>

			{/* Card 3: Agent Runtime */}
			<SettingsCard>
				<SettingsRow
					label={isZh ? "工具失败重试次数" : "Tool Retry Count"}
					control={
						<SettingsInput
							type="number"
							value={toolRetryRaw}
							onChange={(v) => setField("agent_tool_retry_max_retries", v)}
							min={AGENT_RUNTIME_INTEGER_MIN}
							step={1}
							placeholder="2"
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "每轮工具调用上限（可选）" : "Tool Calls Per Run (Optional)"}
					control={
						<SettingsInput
							type="number"
							value={toolCallRunLimitRaw}
							onChange={(v) => setField("agent_tool_call_run_limit", v)}
							min={AGENT_RUNTIME_INTEGER_MIN}
							step={1}
							placeholder={isZh ? "留空表示不限制" : "Blank for no limit"}
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "工具上限触发行为" : "Tool Limit Exit Behavior"}
					control={
						<SettingsSelect
							value={form.agent_tool_call_limit_exit_behavior ?? "continue"}
							onChange={(v) => setField("agent_tool_call_limit_exit_behavior", v)}
							options={TOOL_CALL_LIMIT_EXIT_BEHAVIOR_OPTIONS.map((item) => ({
								value: item.value,
								label: isZh ? item.labelZh : item.labelEn,
							}))}
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "每轮模型调用上限（可选）" : "Model Calls Per Run (Optional)"}
					control={
						<SettingsInput
							type="number"
							value={modelCallRunLimitRaw}
							onChange={(v) => setField("agent_model_call_run_limit", v)}
							min={AGENT_RUNTIME_INTEGER_MIN}
							step={1}
							placeholder={isZh ? "留空表示不限制" : "Blank for no limit"}
						/>
					}
				/>
				<Divider />
				<SettingsRow
					label={isZh ? "模型上限触发行为" : "Model Limit Exit Behavior"}
					control={
						<SettingsSelect
							value={form.agent_model_call_limit_exit_behavior ?? "error"}
							onChange={(v) => setField("agent_model_call_limit_exit_behavior", v)}
							options={MODEL_CALL_LIMIT_EXIT_BEHAVIOR_OPTIONS.map((item) => ({
								value: item.value,
								label: isZh ? item.labelZh : item.labelEn,
							}))}
						/>
					}
				/>
				{!isToolRetryValid && (
					<p className="text-[12px] text-[#b91c1c]">
						{isZh
							? `工具失败重试次数必须是大于等于 ${AGENT_RUNTIME_INTEGER_MIN} 的整数。`
							: `Tool retry count must be an integer greater than or equal to ${AGENT_RUNTIME_INTEGER_MIN}.`}
					</p>
				)}
				{!isToolCallRunLimitValid && (
					<p className="text-[12px] text-[#b91c1c]">
						{isZh
							? `每轮工具调用上限必须是大于等于 ${AGENT_RUNTIME_INTEGER_MIN} 的整数，或留空。`
							: `Tool calls per run must be an integer greater than or equal to ${AGENT_RUNTIME_INTEGER_MIN}, or left blank.`}
					</p>
				)}
				{!isModelCallRunLimitValid && (
					<p className="text-[12px] text-[#b91c1c]">
						{isZh
							? `每轮模型调用上限必须是大于等于 ${AGENT_RUNTIME_INTEGER_MIN} 的整数，或留空。`
							: `Model calls per run must be an integer greater than or equal to ${AGENT_RUNTIME_INTEGER_MIN}, or left blank.`}
					</p>
				)}
			</SettingsCard>
		</div>
	);
}

function SettingsCard({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-[12px] border border-[#d8dee4] bg-white flex flex-col gap-[14px] px-4 py-3">
			{children}
		</div>
	);
}

function Divider() {
	return <div className="h-px bg-[#e5e7eb]" />;
}

function SettingsRow({ label, control }: { label: string; control: React.ReactNode }) {
	return (
		<div className="flex items-center justify-between">
			<span className="text-[15px] font-semibold text-foreground">{label}</span>
			{control}
		</div>
	);
}

function SettingsSelect({
	value,
	onChange,
	options,
}: {
	value: string;
	onChange: (value: string) => void;
	options: { value: string; label: string }[];
}) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className="w-[320px] rounded-[12px] bg-[#f3f4f6] border-0 px-3 py-2 text-[14px] font-semibold text-foreground">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{options.map((opt) => (
					<SelectItem key={opt.value} value={opt.value}>
						{opt.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

function SettingsInput({
	value,
	onChange,
	onBlur,
	placeholder,
	type = "text",
	min,
	max,
	step,
	className,
}: {
	value: string;
	onChange: (value: string) => void;
	onBlur?: () => void;
	placeholder?: string;
	type?: "text" | "password" | "number";
	min?: number;
	max?: number;
	step?: number;
	className?: string;
}) {
	return (
		<input
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			onBlur={onBlur}
			min={min}
			max={max}
			step={step}
			placeholder={placeholder}
			className={`w-[320px] rounded-[12px] bg-[#f3f4f6] border-0 px-3 py-2 text-[14px] font-semibold text-foreground outline-none focus:ring-2 focus:ring-primary/30 ${className ?? ""}`}
		/>
	);
}
