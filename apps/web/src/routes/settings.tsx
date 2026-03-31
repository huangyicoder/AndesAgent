import { SettingsGeneral } from "@/components/settings/settings-general";
import { SettingsKnowledge } from "@/components/settings/settings-knowledge";
import { SettingsMcp } from "@/components/settings/settings-mcp";
import { SettingsSkills } from "@/components/settings/settings-skills";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app-store";
import { useState } from "react";

type TabId = "general" | "rag" | "skills" | "mcp";

export function SettingsPage() {
	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const [activeTab, setActiveTab] = useState<TabId>("general");
	const isZh = uiLanguage === "zh";

	const navItems: { id: TabId; label: string }[] = [
		{ id: "general", label: isZh ? "通用设置" : "General" },
		{ id: "rag", label: "RAG" },
		{ id: "skills", label: isZh ? "技能" : "Skills" },
		{ id: "mcp", label: isZh ? "MCP 服务" : "MCP Servers" },
	];

	return (
		<div className="flex h-full">
			{/* Left Nav Panel */}
			<div
				className="flex w-[280px] shrink-0 flex-col overflow-hidden bg-muted"
				style={{ padding: "18px 14px", gap: 12 }}
			>
				<h1 className="text-[34px] font-bold text-foreground leading-tight">
					{isZh ? "设置" : "Settings"}
				</h1>

				{/* Nav List */}
				<div className="flex flex-col gap-2">
					{navItems.map((item) => {
						const active = activeTab === item.id;
						return (
							<button
								type="button"
								key={item.id}
								onClick={() => setActiveTab(item.id)}
								className={cn(
									"flex h-[42px] w-full items-center rounded-[10px] px-3 text-[14px] transition-colors",
									active
										? "bg-sidebar-accent border border-sidebar-accent font-medium text-foreground"
										: "bg-white border border-border font-semibold text-foreground hover:bg-muted",
								)}
							>
								{item.label}
							</button>
						);
					})}
				</div>
			</div>

			{/* Content Area */}
			<div className="flex-1 overflow-y-auto bg-muted" style={{ padding: 18, gap: 14 }}>
				{activeTab === "general" && <SettingsGeneral />}
				{activeTab === "rag" && <SettingsKnowledge />}
				{activeTab === "skills" && <SettingsSkills />}
				{activeTab === "mcp" && <SettingsMcp />}
			</div>
		</div>
	);
}
