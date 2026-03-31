import { Textarea } from "@/components/ui/textarea";
import { knowledgeApi, mcpApi, promptsApi, skillsApi } from "@/lib/api";
import { type RightTab, useAppStore } from "@/stores/app-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	Database,
	FileText,
	Folder,
	GitPullRequest,
	Globe,
	Lightbulb,
	MessageCircle,
	Monitor,
	Server,
	Shield,
	Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const skillIconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
	lightbulb: { icon: Lightbulb, color: "#7c3aed", bg: "#eef2ff" },
	monitor: { icon: Monitor, color: "#0891b2", bg: "#ecfeff" },
	"git-pull-request": { icon: GitPullRequest, color: "#9ca3af", bg: "#f3f4f6" },
	zap: { icon: Zap, color: "#d97706", bg: "#fef3c7" },
	"file-text": { icon: FileText, color: "#db2777", bg: "#fce7f3" },
	database: { icon: Database, color: "#2563eb", bg: "#dbeafe" },
	shield: { icon: Shield, color: "#16a34a", bg: "#dcfce7" },
};

const mcpIconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
	folder: { icon: Folder, color: "#d97706", bg: "#fef3c7" },
	github: { icon: Globe, color: "#24292f", bg: "#f3f4f6" },
	database: { icon: Database, color: "#2563eb", bg: "#dbeafe" },
	globe: { icon: Globe, color: "#0891b2", bg: "#ecfeff" },
	"message-circle": { icon: MessageCircle, color: "#db2777", bg: "#fce7f3" },
	server: { icon: Server, color: "#16a34a", bg: "#dcfce7" },
};

function IconBox({
	icon,
	map,
}: {
	icon: string | null;
	map: Record<string, { icon: React.ElementType; color: string; bg: string }>;
}) {
	const config = icon ? map[icon] : null;
	const Icon = config?.icon ?? Zap;
	const color = config?.color ?? "#9ca3af";
	const bg = config?.bg ?? "#f3f4f6";
	return (
		<div
			className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px]"
			style={{ background: bg }}
		>
			<Icon size={18} style={{ color }} />
		</div>
	);
}

export function RightPanel() {
	const { currentAgentId, activeRightTab, setActiveRightTab, uiLanguage } = useAppStore();
	const isZh = uiLanguage === "zh";
	const queryClient = useQueryClient();

	const tabs: { id: RightTab; label: string }[] = [
		{ id: "knowledge", label: isZh ? "知识库" : "Knowledge" },
		{ id: "skills", label: isZh ? "技能" : "Skills" },
		{ id: "mcp", label: "MCP" },
		{ id: "prompts", label: isZh ? "提示词" : "Prompts" },
	];

	const tabTitles: Record<RightTab, string> = {
		knowledge: isZh ? "知识库" : "Knowledge",
		skills: isZh ? "技能库" : "Skill Library",
		mcp: isZh ? "MCP库" : "MCP Library",
		prompts: isZh ? "提示词" : "Prompts",
	};

	// 全平台资源
	const { data: allSkills = [] } = useQuery({
		queryKey: ["skills"],
		queryFn: skillsApi.list,
	});

	const { data: allMcpServers = [] } = useQuery({
		queryKey: ["mcp-servers"],
		queryFn: mcpApi.list,
	});

	// 当前 Agent 已启用的资源
	const { data: agentSkills = [] } = useQuery({
		queryKey: ["agent-skills", currentAgentId],
		queryFn: () => (currentAgentId ? skillsApi.listForAgent(currentAgentId) : []),
		enabled: !!currentAgentId,
	});

	const { data: agentMcps = [] } = useQuery({
		queryKey: ["agent-mcps", currentAgentId],
		queryFn: () => (currentAgentId ? mcpApi.listForAgent(currentAgentId) : []),
		enabled: !!currentAgentId,
	});

	const { data: knowledgeDocs = [] } = useQuery({
		queryKey: ["knowledge", currentAgentId],
		queryFn: () => (currentAgentId ? knowledgeApi.list(currentAgentId) : []),
		enabled: !!currentAgentId,
	});

	const { data: systemPromptDocument } = useQuery({
		queryKey: ["system-prompt-document", currentAgentId],
		queryFn: () => {
			if (!currentAgentId) throw new Error("No agent");
			return promptsApi.getDocumentForAgent(currentAgentId);
		},
		enabled: !!currentAgentId,
	});

	const [promptDocumentDraft, setPromptDocumentDraft] = useState("");

	useEffect(() => {
		if (!systemPromptDocument) {
			setPromptDocumentDraft("");
			return;
		}
		setPromptDocumentDraft(systemPromptDocument.content);
	}, [systemPromptDocument]);

	// 已启用的 ID 集合
	const enabledSkillIds = new Set(agentSkills.map((as) => as.skill.id));
	const enabledMcpIds = new Set(agentMcps.map((am) => am.mcpServer.id));

	// Skill 启用 toggle 的 map（用于获取 enabled 状态）
	const skillEnabledMap = new Map(agentSkills.map((as) => [as.skill.id, as.agentSkill.enabled]));
	const mcpEnabledMap = new Map(
		agentMcps.map((am) => [am.mcpServer.id, am.agentMcpServer.enabled]),
	);

	// Install / Uninstall / Toggle mutations
	const installSkill = useMutation({
		mutationFn: (skillId: string) => {
			if (!currentAgentId) throw new Error("No agent");
			return skillsApi.install(currentAgentId, skillId);
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["agent-skills", currentAgentId] }),
	});

	const uninstallSkill = useMutation({
		mutationFn: (skillId: string) => {
			if (!currentAgentId) throw new Error("No agent");
			return skillsApi.uninstall(currentAgentId, skillId);
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["agent-skills", currentAgentId] }),
	});

	const toggleSkillEnabled = useMutation({
		mutationFn: ({ skillId, enabled }: { skillId: string; enabled: boolean }) => {
			if (!currentAgentId) throw new Error("No agent");
			return skillsApi.update(currentAgentId, skillId, enabled);
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["agent-skills", currentAgentId] }),
	});

	const installMcp = useMutation({
		mutationFn: (mcpServerId: string) => {
			if (!currentAgentId) throw new Error("No agent");
			return mcpApi.install(currentAgentId, mcpServerId);
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["agent-mcps", currentAgentId] }),
	});

	const uninstallMcp = useMutation({
		mutationFn: (mcpServerId: string) => {
			if (!currentAgentId) throw new Error("No agent");
			return mcpApi.uninstall(currentAgentId, mcpServerId);
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["agent-mcps", currentAgentId] }),
	});

	const toggleMcpEnabled = useMutation({
		mutationFn: ({ mcpServerId, enabled }: { mcpServerId: string; enabled: boolean }) => {
			if (!currentAgentId) throw new Error("No agent");
			return mcpApi.update(currentAgentId, mcpServerId, enabled);
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["agent-mcps", currentAgentId] }),
	});

	const savePromptDocument = useMutation({
		mutationFn: (content: string) => {
			if (!currentAgentId) throw new Error("No agent");
			return promptsApi.saveDocumentForAgent(currentAgentId, { content });
		},
		onSuccess: () =>
			queryClient.invalidateQueries({ queryKey: ["system-prompt-document", currentAgentId] }),
	});

	const handleSkillToggle = (
		skillId: string,
		currentlyInstalled: boolean,
		currentEnabled: boolean,
	) => {
		if (!currentlyInstalled) {
			// 首次启用 → install
			installSkill.mutate(skillId);
		} else if (currentEnabled) {
			// 当前启用 → 卸载（关闭关联）
			uninstallSkill.mutate(skillId);
		} else {
			// 已安装但禁用 → 重新启用
			toggleSkillEnabled.mutate({ skillId, enabled: true });
		}
	};

	const handleMcpToggle = (
		mcpServerId: string,
		currentlyInstalled: boolean,
		currentEnabled: boolean,
	) => {
		if (!currentlyInstalled) {
			installMcp.mutate(mcpServerId);
		} else if (currentEnabled) {
			uninstallMcp.mutate(mcpServerId);
		} else {
			toggleMcpEnabled.mutate({ mcpServerId, enabled: true });
		}
	};

	const handleSavePromptDocument = () => {
		savePromptDocument.mutate(promptDocumentDraft);
	};

	if (!currentAgentId) return null;

	return (
		<div
			className="flex w-[360px] shrink-0 flex-col bg-muted"
			style={{ padding: "18px 14px", gap: 12 }}
		>
			{/* Title */}
			<h2 className="text-[21px] font-bold text-foreground">{tabTitles[activeRightTab]}</h2>

			{/* Tab Row */}
			<div className="flex h-[36px] gap-[6px]">
				{tabs.map((tab) => {
					const active = activeRightTab === tab.id;
					return (
						<button
							type="button"
							key={tab.id}
							onClick={() => setActiveRightTab(tab.id)}
							className={`flex flex-1 items-center justify-center rounded-[8px] text-[12px] font-bold transition-colors ${
								active ? "bg-primary text-white" : "bg-muted text-text-secondary"
							}`}
						>
							{tab.label}
						</button>
					);
				})}
			</div>

			{/* Tab Content */}
			<div className="flex flex-1 flex-col gap-[8px] overflow-y-auto">
				{activeRightTab === "skills" && (
					<>
						<p className="text-[14px] font-bold text-foreground">
							{isZh ? "平台技能" : "Platform Skills"}
						</p>
						{allSkills.map((skill) => {
							const installed = enabledSkillIds.has(skill.id);
							const enabled = installed && (skillEnabledMap.get(skill.id) ?? false);
							return (
								<ItemCard
									key={skill.id}
									title={skill.name}
									description={skill.description}
									icon={skill.icon}
									iconMap={skillIconMap}
									enabled={enabled}
									onToggle={() => handleSkillToggle(skill.id, installed, enabled)}
								/>
							);
						})}
						{allSkills.length === 0 && (
							<p className="text-[13px] text-text-secondary py-4 text-center">
								{isZh ? "暂无技能，前往 Settings 安装" : "No skills yet. Install from Settings."}
							</p>
						)}
					</>
				)}

				{activeRightTab === "mcp" && (
					<>
						<p className="text-[14px] font-bold text-foreground">
							{isZh ? "平台 MCP" : "Platform MCP"}
						</p>
						{allMcpServers.map((server) => {
							const installed = enabledMcpIds.has(server.id);
							const enabled = installed && (mcpEnabledMap.get(server.id) ?? false);
							return (
								<ItemCard
									key={server.id}
									title={server.name}
									description={server.description}
									icon={server.icon}
									iconMap={mcpIconMap}
									enabled={enabled}
									onToggle={() => handleMcpToggle(server.id, installed, enabled)}
								/>
							);
						})}
						{allMcpServers.length === 0 && (
							<p className="text-[13px] text-text-secondary py-4 text-center">
								{isZh
									? "暂无 MCP，前往 Settings 安装"
									: "No MCP servers yet. Install from Settings."}
							</p>
						)}
					</>
				)}

				{activeRightTab === "prompts" && (
					<>
						<p className="text-[14px] font-bold text-foreground">
							{isZh ? "系统提示词文档" : "System Prompt Document"}
						</p>
						<div className="rounded-[10px] border border-border bg-white p-3 flex flex-col gap-3">
							<Textarea
								value={promptDocumentDraft}
								onChange={(e) => setPromptDocumentDraft(e.target.value)}
								placeholder={isZh ? "请输入系统提示词文档..." : "Enter system prompt document..."}
								rows={12}
								className="min-h-[260px] text-[13px]"
							/>
							<button
								type="button"
								onClick={handleSavePromptDocument}
								disabled={savePromptDocument.isPending}
								className="h-[34px] rounded-[8px] border border-primary bg-primary text-[13px] font-semibold text-white disabled:opacity-50"
							>
								{savePromptDocument.isPending
									? isZh
										? "保存中..."
										: "Saving..."
									: isZh
										? "保存文档"
										: "Save Document"}
							</button>
						</div>
					</>
				)}

				{activeRightTab === "knowledge" && (
					<>
						<p className="text-[14px] font-bold text-foreground">
							{isZh ? "知识库文件" : "Knowledge Files"}
						</p>
						{knowledgeDocs.map((doc) => (
							<div
								key={doc.id}
								className="flex h-[78px] items-center justify-between rounded-[10px] bg-muted border border-border-light"
								style={{ padding: "10px 12px" }}
							>
								<div className="flex items-center gap-[10px] flex-1 min-w-0">
									<div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef2ff]">
										<FileText size={18} style={{ color: "#7c3aed" }} />
									</div>
									<div className="flex flex-col gap-[3px] min-w-0">
										<span className="text-[15px] font-semibold text-foreground truncate">
											{doc.filename}
										</span>
										<span className="text-[12px] text-text-tertiary truncate">
											{doc.chunkCount} chunks · {doc.status}
										</span>
									</div>
								</div>
								<StatusBadge status={doc.status} />
							</div>
						))}
						{knowledgeDocs.length === 0 && (
							<p className="text-[13px] text-text-secondary py-4 text-center">
								{isZh ? "暂无知识库文件" : "No knowledge files"}
							</p>
						)}
					</>
				)}
			</div>
		</div>
	);
}

function ItemCard({
	title,
	description,
	icon,
	iconMap,
	enabled,
	onToggle,
}: {
	title: string;
	description: string;
	icon: string | null;
	iconMap: Record<string, { icon: React.ElementType; color: string; bg: string }>;
	enabled: boolean;
	onToggle: () => void;
}) {
	return (
		<div
			className={`flex h-[78px] items-center justify-between rounded-[10px] ${
				enabled
					? "bg-muted border border-border-light"
					: "bg-surface-disabled border border-border-disabled"
			}`}
			style={{ padding: "10px 12px" }}
		>
			<div className="flex items-center gap-[10px] flex-1 min-w-0 h-full">
				<IconBox icon={icon} map={iconMap} />
				<div className="flex flex-col gap-[3px] min-w-0">
					<span
						className={`text-[15px] font-semibold truncate ${enabled ? "text-foreground" : "text-text-muted"}`}
					>
						{title}
					</span>
					<span
						className={`text-[12px] truncate ${enabled ? "text-text-tertiary" : "text-text-disabled"}`}
					>
						{description}
					</span>
				</div>
			</div>
			<ToggleSwitch enabled={enabled} onToggle={onToggle} />
		</div>
	);
}

function ToggleSwitch({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
	return (
		<button
			type="button"
			onClick={onToggle}
			className={`flex h-[26px] w-[44px] items-center rounded-[13px] px-[3px] transition-colors ${
				enabled ? "bg-primary justify-end" : "bg-border-disabled justify-start"
			}`}
		>
			<div className="h-[20px] w-[20px] rounded-full bg-white" />
		</button>
	);
}

function StatusBadge({ status }: { status: string }) {
	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const isZh = uiLanguage === "zh";

	if (status === "ready") {
		return (
			<span className="rounded-full bg-success-bg border border-success-border px-2 py-[4px] text-[11px] font-semibold text-success-text">
				OK
			</span>
		);
	}
	if (status === "processing") {
		return (
			<span className="rounded-full bg-warning-bg border border-warning-border px-2 py-[4px] text-[11px] font-semibold text-warning-text">
				{isZh ? "构建中" : "building"}
			</span>
		);
	}
	return (
		<span className="rounded-full bg-muted border border-border px-2 py-[4px] text-[11px] font-semibold text-text-secondary">
			{status}
		</span>
	);
}
