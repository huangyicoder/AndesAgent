import type { AppLanguage } from "@/lib/language";
import { create } from "zustand";

export type RightTab = "knowledge" | "skills" | "mcp" | "prompts";

interface AppState {
	currentAgentId: string | null;
	currentConversationId: string | null;
	isStreaming: boolean;
	activeRightTab: RightTab;
	uiLanguage: AppLanguage;

	setCurrentAgent: (id: string | null) => void;
	setCurrentConversation: (id: string | null) => void;
	setStreaming: (streaming: boolean) => void;
	setActiveRightTab: (tab: RightTab) => void;
	setUiLanguage: (language: AppLanguage) => void;
}

export const useAppStore = create<AppState>((set) => ({
	currentAgentId: null,
	currentConversationId: null,
	isStreaming: false,
	activeRightTab: "knowledge",
	uiLanguage: "en",

	setCurrentAgent: (id) => set({ currentAgentId: id, currentConversationId: null }),
	setCurrentConversation: (id) => set({ currentConversationId: id }),
	setStreaming: (streaming) => set({ isStreaming: streaming }),
	setActiveRightTab: (tab) => set({ activeRightTab: tab }),
	setUiLanguage: (uiLanguage) => set({ uiLanguage }),
}));
