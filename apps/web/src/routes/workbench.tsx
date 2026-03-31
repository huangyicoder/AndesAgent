import { CenterPanel } from "@/components/workbench/center-panel";
import { LeftPanel } from "@/components/workbench/left-panel";
import { RightPanel } from "@/components/workbench/right-panel";
import { useAppStore } from "@/stores/app-store";
import { useParams } from "@tanstack/react-router";
import { useEffect } from "react";

export function WorkbenchPage() {
	const params = useParams({ strict: false });
	const { currentAgentId, setCurrentAgent } = useAppStore();
	const agentId = (params as { agentId?: string }).agentId ?? null;

	useEffect(() => {
		if (agentId && agentId !== currentAgentId) {
			setCurrentAgent(agentId);
		}
	}, [agentId, currentAgentId, setCurrentAgent]);

	return (
		<div className="flex h-full min-w-0 overflow-hidden">
			<LeftPanel />
			<CenterPanel />
			<RightPanel />
		</div>
	);
}
