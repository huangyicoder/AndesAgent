import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { agentsApi } from "@/lib/api";
import { useAppStore } from "@/stores/app-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const DISABLED_TOOL_OPTIONS = [
	{
		name: "write_file",
		labelZh: "禁用 write_file（创建/覆盖文件）",
		labelEn: "Disable write_file (create/overwrite files)",
	},
	{
		name: "edit_file",
		labelZh: "禁用 edit_file（修改文件）",
		labelEn: "Disable edit_file (modify files)",
	},
	{
		name: "execute",
		labelZh: "禁用 execute（执行命令）",
		labelEn: "Disable execute (run commands)",
	},
];

export function LeftPanel() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { currentAgentId, setCurrentAgent, uiLanguage } = useAppStore();
	const isZh = uiLanguage === "zh";
	const [search, setSearch] = useState("");
	const [showCreate, setShowCreate] = useState(false);
	const [newName, setNewName] = useState("");
	const [newDesc, setNewDesc] = useState("");
	const [newDisabledTools, setNewDisabledTools] = useState<string[]>([]);
	const [deleteTarget, setDeleteTarget] = useState<{ id: string; name: string } | null>(null);

	const { data: agents = [] } = useQuery({
		queryKey: ["agents"],
		queryFn: agentsApi.list,
	});

	const createAgent = useMutation({
		mutationFn: (data: { name: string; description?: string; disabledTools?: string[] }) =>
			agentsApi.create(data),
		onSuccess: (agent) => {
			queryClient.invalidateQueries({ queryKey: ["agents"] });
			setCurrentAgent(agent.id);
			navigate({ to: "/agent/$agentId", params: { agentId: agent.id } });
			setShowCreate(false);
			setNewName("");
			setNewDesc("");
			setNewDisabledTools([]);
		},
	});

	const deleteAgent = useMutation({
		mutationFn: (id: string) => agentsApi.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["agents"] });
			if (deleteTarget && currentAgentId === deleteTarget.id) {
				const remaining = agents.filter((a) => a.id !== deleteTarget.id);
				if (remaining.length > 0) {
					setCurrentAgent(remaining[0].id);
					navigate({ to: "/agent/$agentId", params: { agentId: remaining[0].id } });
				} else {
					setCurrentAgent(null);
					navigate({ to: "/" });
				}
			}
			setDeleteTarget(null);
		},
	});

	const filtered = agents.filter(
		(a) => !search || a.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div
			className="flex w-[280px] shrink-0 flex-col overflow-hidden bg-muted"
			style={{ padding: "18px 14px", gap: 12 }}
		>
			{/* Brand */}
			<h1 className="text-[26px] font-bold text-foreground leading-tight">
				{isZh ? "智能体工作台" : "Agent Workspace"}
			</h1>

			{/* New Agent Button */}
			<button
				type="button"
				onClick={() => setShowCreate(true)}
				className="flex h-[44px] w-full items-center justify-center rounded-[10px] bg-primary text-[15px] font-semibold text-[#FFFDF8]"
			>
				{isZh ? "新建智能体" : "New Agent"}
			</button>

			{/* Search */}
			<div className="flex h-[38px] items-center rounded-[10px] border border-border bg-muted px-3">
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder={isZh ? "搜索智能体..." : "Search agents..."}
					className="w-full bg-transparent text-[13px] text-foreground placeholder:text-text-secondary outline-none"
				/>
			</div>

			{/* Agent List */}
			<div className="flex flex-1 flex-col gap-[10px] overflow-y-auto">
				{filtered.map((agent) => {
					const selected = currentAgentId === agent.id;
					return (
						<div key={agent.id} className="group relative">
							<button
								type="button"
								onClick={() => {
									setCurrentAgent(agent.id);
									navigate({ to: "/agent/$agentId", params: { agentId: agent.id } });
								}}
								className={`flex h-[90px] w-full flex-col gap-[6px] rounded-[10px] p-[10px] text-left transition-colors ${
									selected
										? "bg-primary-active border border-primary-active"
										: "bg-white border border-border hover:border-primary/50"
								}`}
							>
								<span
									className={`text-[15px] font-semibold ${selected ? "text-white" : "text-foreground"}`}
								>
									{agent.name}
								</span>
								<span
									className={`text-[12px] leading-[1.35] ${selected ? "text-[#dbeafe]" : "text-text-secondary"}`}
								>
									{agent.description || (isZh ? "暂无描述" : "No description")}
								</span>
							</button>
							<button
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									setDeleteTarget({ id: agent.id, name: agent.name });
								}}
								className={`absolute top-[8px] right-[8px] flex h-[24px] w-[24px] items-center justify-center rounded-[6px] opacity-0 transition-opacity group-hover:opacity-100 ${
									selected
										? "text-white/80 hover:bg-white/20 hover:text-white"
										: "text-text-secondary hover:bg-red-50 hover:text-red-500"
								}`}
								title={isZh ? "删除智能体" : "Delete agent"}
							>
								<svg
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<title>{isZh ? "删除智能体" : "Delete agent"}</title>
									<path d="M3 6h18" />
									<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
									<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
									<line x1="10" y1="11" x2="10" y2="17" />
									<line x1="14" y1="11" x2="14" y2="17" />
								</svg>
							</button>
						</div>
					);
				})}
			</div>

			{/* Settings Button */}
			<button
				type="button"
				onClick={() => navigate({ to: "/settings" })}
				className="flex h-[44px] w-full items-center gap-[10px] rounded-[10px] border border-border bg-white px-3"
			>
				<span className="text-[14px] font-semibold text-text-secondary">⚙</span>
				<span className="text-[14px] font-semibold text-foreground">
					{isZh ? "设置" : "Settings"}
				</span>
			</button>

			{/* Delete Agent Dialog */}
			<Dialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{isZh ? "删除智能体" : "Delete Agent"}</DialogTitle>
						<DialogDescription>
							{isZh
								? `确定要删除「${deleteTarget?.name ?? ""}」吗？该智能体的所有对话记录将一并删除，此操作不可撤销。`
								: `Delete "${deleteTarget?.name ?? ""}"? All of its conversations will also be deleted. This action cannot be undone.`}
						</DialogDescription>
					</DialogHeader>
					<div className="flex justify-end gap-2">
						<Button variant="outline" onClick={() => setDeleteTarget(null)}>
							{isZh ? "取消" : "Cancel"}
						</Button>
						<Button
							variant="destructive"
							disabled={deleteAgent.isPending}
							onClick={() => deleteTarget && deleteAgent.mutate(deleteTarget.id)}
						>
							{deleteAgent.isPending
								? isZh
									? "删除中..."
									: "Deleting..."
								: isZh
									? "删除"
									: "Delete"}
						</Button>
					</div>
				</DialogContent>
			</Dialog>

			{/* Create Agent Dialog */}
			<Dialog open={showCreate} onOpenChange={setShowCreate}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>{isZh ? "新建智能体" : "Create Agent"}</DialogTitle>
						<DialogDescription>
							{isZh
								? "给你的智能体起个名字，之后可以配置技能和设置。"
								: "Give your agent a name, then configure skills and settings."}
						</DialogDescription>
					</DialogHeader>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (newName.trim()) {
								createAgent.mutate({
									name: newName.trim(),
									description: newDesc.trim() || undefined,
									disabledTools: newDisabledTools.length > 0 ? newDisabledTools : undefined,
								});
							}
						}}
					>
						<Input
							value={newName}
							onChange={(e) => setNewName(e.target.value)}
							placeholder={isZh ? "智能体名称..." : "Agent name..."}
							autoFocus
							className="mb-3"
						/>
						<textarea
							value={newDesc}
							onChange={(e) => setNewDesc(e.target.value)}
							placeholder={isZh ? "智能体描述（可选）..." : "Agent description (optional)..."}
							rows={3}
							className="mb-4 w-full resize-none rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] text-foreground placeholder:text-text-muted outline-none focus:border-primary focus:ring-1 focus:ring-primary"
						/>
						<div className="mb-4 rounded-[8px] border border-border bg-muted/20 p-3">
							<p className="text-[12px] font-semibold text-foreground">
								{isZh ? "禁用工具（可选）" : "Disable tools (optional)"}
							</p>
							<div className="mt-2 flex flex-col gap-2">
								{DISABLED_TOOL_OPTIONS.map((option) => {
									const checked = newDisabledTools.includes(option.name);
									return (
										<label key={option.name} className="flex items-center gap-2">
											<input
												type="checkbox"
												checked={checked}
												onChange={(e) =>
													setNewDisabledTools((prev) =>
														e.target.checked
															? Array.from(new Set([...prev, option.name]))
															: prev.filter((item) => item !== option.name),
													)
												}
												className="h-4 w-4 cursor-pointer rounded border-border"
											/>
											<span className="text-[12px] text-foreground">
												{isZh ? option.labelZh : option.labelEn}
											</span>
										</label>
									);
								})}
							</div>
						</div>
						<div className="flex justify-end gap-2">
							<Button type="button" variant="outline" onClick={() => setShowCreate(false)}>
								{isZh ? "取消" : "Cancel"}
							</Button>
							<Button type="submit" disabled={!newName.trim()}>
								{isZh ? "创建" : "Create"}
							</Button>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
