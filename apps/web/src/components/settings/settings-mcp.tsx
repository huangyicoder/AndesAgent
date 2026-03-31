import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { mcpApi } from "@/lib/api";
import { useAppStore } from "@/stores/app-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	Database,
	Folder,
	Globe,
	MessageCircle,
	Plug,
	Plus,
	Search,
	Server,
	Trash2,
} from "lucide-react";
import { useState } from "react";

type McpTransport = "stdio" | "sse" | "streamhttp";
type McpAuthType = "none" | "bearer_mcp_api_key";

interface CustomMcpForm {
	name: string;
	description: string;
	icon: string;
	transport: McpTransport;
	command: string;
	argsText: string;
	url: string;
	headersText: string;
	envText: string;
	authType: McpAuthType;
}

const iconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
	folder: { icon: Folder, color: "#d97706", bg: "#fef3c7" },
	github: { icon: Globe, color: "#24292f", bg: "#f3f4f6" },
	database: { icon: Database, color: "#2563eb", bg: "#dbeafe" },
	globe: { icon: Globe, color: "#0891b2", bg: "#ecfeff" },
	"message-circle": { icon: MessageCircle, color: "#db2777", bg: "#fce7f3" },
	server: { icon: Server, color: "#16a34a", bg: "#dcfce7" },
};

const DEFAULT_CUSTOM_FORM: CustomMcpForm = {
	name: "",
	description: "",
	icon: "server",
	transport: "streamhttp",
	command: "",
	argsText: "",
	url: "",
	headersText: "",
	envText: "",
	authType: "none",
};

const ALIYUN_TEMPLATE_URL = "https://dashscope.aliyuncs.com/api/v1/mcps/{mcp_id}/mcp";

function parseLineRecord(
	value: string,
	isZh: boolean,
): {
	value: Record<string, string> | null;
	error: string | null;
} {
	const lines = value
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
	if (lines.length === 0) {
		return { value: null, error: null };
	}

	const output: Record<string, string> = {};
	for (const line of lines) {
		const separatorIndex = line.indexOf("=");
		if (separatorIndex <= 0 || separatorIndex === line.length - 1) {
			return {
				value: null,
				error: isZh
					? `格式错误：${line}（需使用 key=value）`
					: `Invalid format: ${line} (must use key=value)`,
			};
		}
		const key = line.slice(0, separatorIndex).trim();
		const recordValue = line.slice(separatorIndex + 1).trim();
		if (!key || !recordValue) {
			return {
				value: null,
				error: isZh
					? `格式错误：${line}（key 或 value 为空）`
					: `Invalid format: ${line} (key or value is empty)`,
			};
		}
		output[key] = recordValue;
	}
	return { value: output, error: null };
}

function parseArgs(value: string): string[] | null {
	const lines = value
		.split("\n")
		.map((line) => line.trim())
		.filter(Boolean);
	return lines.length > 0 ? lines : null;
}

function getTransportDisplayLabel(transport: string): string {
	return transport === "http" ? "streamhttp" : transport;
}

function toApiTransport(transport: McpTransport): "stdio" | "sse" | "streamable-http" {
	return transport === "streamhttp" ? "streamable-http" : transport;
}

function McpIcon({ icon }: { icon: string | null }) {
	const config = icon ? iconMap[icon] : null;
	const Icon = config?.icon ?? Plug;
	const color = config?.color ?? "#8c959f";
	const bg = config?.bg ?? "#f3f4f6";
	return (
		<div
			className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[10px]"
			style={{ background: bg }}
		>
			<Icon size={20} style={{ color }} />
		</div>
	);
}

export function SettingsMcp() {
	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const isZh = uiLanguage === "zh";
	const queryClient = useQueryClient();
	const [search, setSearch] = useState("");
	const [showCreateDialog, setShowCreateDialog] = useState(false);
	const [customForm, setCustomForm] = useState<CustomMcpForm>(DEFAULT_CUSTOM_FORM);
	const [formError, setFormError] = useState<string | null>(null);

	const { data: allMcpServers = [] } = useQuery({
		queryKey: ["mcp-servers"],
		queryFn: mcpApi.list,
	});

	const createCustomMcp = useMutation({
		mutationFn: mcpApi.create,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["mcp-servers"] });
			setCustomForm(DEFAULT_CUSTOM_FORM);
			setFormError(null);
			setShowCreateDialog(false);
		},
	});

	const deleteMcp = useMutation({
		mutationFn: (id: string) => mcpApi.delete(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["mcp-servers"] }),
	});

	const filteredInstalled = allMcpServers.filter((s) => {
		if (
			search &&
			!s.name.toLowerCase().includes(search.toLowerCase()) &&
			!s.description.toLowerCase().includes(search.toLowerCase())
		)
			return false;
		return true;
	});

	const setField = <K extends keyof CustomMcpForm>(key: K, value: CustomMcpForm[K]) => {
		setCustomForm((prev) => ({ ...prev, [key]: value }));
	};

	const applyAliyunPreset = () => {
		setCustomForm((prev) => ({
			...prev,
			name: prev.name || (isZh ? "阿里云 MCP" : "Alibaba Cloud MCP"),
			description:
				prev.description ||
				(isZh ? "阿里云百炼远程 MCP 服务" : "Alibaba Bailian Remote MCP Service"),
			icon: "server",
			transport: "streamhttp",
			url: prev.url || ALIYUN_TEMPLATE_URL,
			authType: "bearer_mcp_api_key",
		}));
	};

	const handleCreateCustom = () => {
		const name = customForm.name.trim();
		const description = customForm.description.trim();
		const command = customForm.command.trim();
		const url = customForm.url.trim();
		if (!name || !description) {
			setFormError(isZh ? "名称与描述为必填项。" : "Name and description are required.");
			return;
		}
		if (customForm.transport === "stdio" && !command) {
			setFormError(isZh ? "stdio 协议必须填写 command。" : "The stdio transport requires command.");
			return;
		}
		if ((customForm.transport === "sse" || customForm.transport === "streamhttp") && !url) {
			setFormError(
				isZh ? "streamhttp/sse 协议必须填写 URL。" : "The streamhttp/sse transport requires URL.",
			);
			return;
		}

		const parsedHeaders =
			customForm.transport === "stdio"
				? { value: null, error: null }
				: parseLineRecord(customForm.headersText, isZh);
		if (parsedHeaders.error) {
			setFormError(`Headers ${parsedHeaders.error}`);
			return;
		}
		const parsedEnv =
			customForm.transport === "stdio"
				? parseLineRecord(customForm.envText, isZh)
				: { value: null, error: null };
		if (parsedEnv.error) {
			setFormError(`Env ${parsedEnv.error}`);
			return;
		}

		setFormError(null);
		createCustomMcp.mutate({
			name,
			description,
			icon: customForm.icon.trim() || null,
			transport: toApiTransport(customForm.transport),
			command: customForm.transport === "stdio" ? command : null,
			args: customForm.transport === "stdio" ? parseArgs(customForm.argsText) : null,
			url: customForm.transport === "stdio" ? null : url,
			headers: customForm.transport === "stdio" ? null : parsedHeaders.value,
			env: customForm.transport === "stdio" ? parsedEnv.value : null,
			authType: customForm.authType,
			category: "general",
		});
	};

	const handleDialogOpenChange = (open: boolean) => {
		setShowCreateDialog(open);
		if (!open) {
			setFormError(null);
		}
	};

	return (
		<div className="flex flex-col gap-[14px]">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-1">
					<h2 className="text-[28px] font-semibold text-foreground">MCP Servers</h2>
					<p className="text-[13px] text-text-secondary">
						{isZh
							? "管理平台 MCP 服务器，智能体可在工作台中启用"
							: "Manage platform MCP servers and enable them in workspace."}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => setShowCreateDialog(true)}
						className="inline-flex h-[36px] items-center gap-2 rounded-[8px] bg-primary px-3 text-[13px] font-semibold text-white"
					>
						<Plus size={14} />
						{isZh ? "创建 MCP" : "Create MCP"}
					</button>
					<div className="flex items-center gap-2 rounded-[8px] border border-border bg-white px-3 h-[36px] w-[260px]">
						<Search size={16} className="text-text-muted" />
						<input
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder={isZh ? "搜索 MCP..." : "Search MCP..."}
							className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-text-muted outline-none"
						/>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-[6px] text-[14px] font-semibold text-foreground">
				{isZh ? "已安装" : "Installed"}
				<span className="rounded-[10px] bg-badge-blue-bg px-2 py-[2px] text-[11px] font-semibold text-badge-blue-text">
					{allMcpServers.length}
				</span>
			</div>

			<div className="flex flex-col gap-[10px]">
				{filteredInstalled.map((server) => (
					<div
						key={server.id}
						className="flex items-center justify-between rounded-[10px] bg-white border border-[#d8dee4] gap-3"
						style={{ padding: "14px 16px" }}
					>
						<div className="flex items-center gap-3 flex-1 min-w-0">
							<McpIcon icon={server.icon} />
							<div className="flex flex-col gap-1 min-w-0">
								<div className="flex items-center gap-2">
									<span className="text-[15px] font-semibold text-foreground">{server.name}</span>
									<span className="rounded-[6px] bg-muted px-[6px] py-[2px] text-[11px] text-text-muted">
										{getTransportDisplayLabel(server.transport)}
									</span>
									{server.authType === "bearer_mcp_api_key" && (
										<span className="rounded-[6px] bg-[#e0f2fe] px-[6px] py-[2px] text-[11px] text-[#0369a1]">
											bearer_mcp_api_key
										</span>
									)}
								</div>
								<span className="text-[12px] text-[#6e7781]">{server.description}</span>
							</div>
						</div>
						<div className="flex items-center gap-[10px]">
							<button
								type="button"
								className="flex h-[26px] w-[44px] items-center rounded-[13px] bg-primary justify-end px-[3px]"
							>
								<div className="h-[20px] w-[20px] rounded-full bg-white" />
							</button>
							<button
								type="button"
								onClick={() => deleteMcp.mutate(server.id)}
								disabled={deleteMcp.isPending}
								className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border border-border bg-white hover:bg-muted disabled:opacity-50"
							>
								<Trash2 size={14} className="text-destructive" />
							</button>
						</div>
					</div>
				))}
				{filteredInstalled.length === 0 && (
					<p className="text-center py-8 text-[13px] text-text-secondary">
						{isZh
							? "暂无 MCP 服务器，点击右上角创建 MCP"
							: "No MCP servers yet. Click Create MCP to add one."}
					</p>
				)}
			</div>

			<Dialog open={showCreateDialog} onOpenChange={handleDialogOpenChange}>
				<DialogContent className="max-w-[680px]">
					<DialogHeader>
						<DialogTitle>{isZh ? "创建自定义 MCP" : "Create Custom MCP"}</DialogTitle>
						<DialogDescription>
							{isZh
								? "填写 MCP 连接参数。远程连接推荐使用 streamhttp，stdio 用于本地命令。"
								: "Fill in MCP connection settings. Use streamhttp for remote and stdio for local commands."}
						</DialogDescription>
					</DialogHeader>

					<div className="flex flex-col gap-3">
						<div className="flex items-center justify-end">
							<button
								type="button"
								onClick={applyAliyunPreset}
								className="rounded-[8px] border border-[#0969da] px-3 py-1 text-[12px] font-semibold text-[#0969da]"
							>
								{isZh ? "填充阿里云模板" : "Apply Alibaba Template"}
							</button>
						</div>
						<input
							value={customForm.name}
							onChange={(e) => setField("name", e.target.value)}
							placeholder={isZh ? "名称（必填）" : "Name (required)"}
							className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none"
						/>
						<input
							value={customForm.description}
							onChange={(e) => setField("description", e.target.value)}
							placeholder={isZh ? "描述（必填）" : "Description (required)"}
							className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none"
						/>
						<div className="grid grid-cols-3 gap-3">
							<select
								value={customForm.transport}
								onChange={(e) => setField("transport", e.target.value as McpTransport)}
								className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none"
							>
								<option value="streamhttp">streamhttp</option>
								<option value="sse">sse</option>
								<option value="stdio">stdio</option>
							</select>
							<select
								value={customForm.authType}
								onChange={(e) => setField("authType", e.target.value as McpAuthType)}
								className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none"
							>
								<option value="none">none</option>
								<option value="bearer_mcp_api_key">bearer_mcp_api_key</option>
							</select>
							<input
								value={customForm.icon}
								onChange={(e) => setField("icon", e.target.value)}
								placeholder={isZh ? "icon（默认 server）" : "icon (default server)"}
								className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none"
							/>
						</div>

						{customForm.transport === "stdio" ? (
							<>
								<input
									value={customForm.command}
									onChange={(e) => setField("command", e.target.value)}
									placeholder={isZh ? "command（必填，如 npx）" : "command (required, e.g. npx)"}
									className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none"
								/>
								<textarea
									value={customForm.argsText}
									onChange={(e) => setField("argsText", e.target.value)}
									placeholder={isZh ? "args（每行一个参数）" : "args (one argument per line)"}
									rows={3}
									className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none resize-y"
								/>
								<textarea
									value={customForm.envText}
									onChange={(e) => setField("envText", e.target.value)}
									placeholder={
										isZh
											? "env（每行 key=value，例如 GITHUB_TOKEN=xxx）"
											: "env (one key=value per line, e.g. GITHUB_TOKEN=xxx)"
									}
									rows={3}
									className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none resize-y"
								/>
							</>
						) : (
							<>
								<input
									value={customForm.url}
									onChange={(e) => setField("url", e.target.value)}
									placeholder={isZh ? "URL（必填）" : "URL (required)"}
									className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none"
								/>
								<textarea
									value={customForm.headersText}
									onChange={(e) => setField("headersText", e.target.value)}
									placeholder={
										isZh ? "headers（每行 key=value）" : "headers (one key=value per line)"
									}
									rows={3}
									className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] outline-none resize-y"
								/>
							</>
						)}

						{formError && <p className="text-[12px] text-destructive">{formError}</p>}
						<div className="flex items-center justify-end gap-2">
							<button
								type="button"
								onClick={() => setShowCreateDialog(false)}
								className="rounded-[8px] border border-border px-[14px] py-[6px] text-[12px] font-semibold text-text-secondary"
							>
								{isZh ? "取消" : "Cancel"}
							</button>
							<button
								type="button"
								onClick={handleCreateCustom}
								disabled={createCustomMcp.isPending}
								className="rounded-[8px] bg-primary px-[14px] py-[6px] text-[12px] font-semibold text-white disabled:opacity-50"
							>
								{createCustomMcp.isPending
									? isZh
										? "创建中..."
										: "Creating..."
									: isZh
										? "创建 MCP"
										: "Create MCP"}
							</button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
