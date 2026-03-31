import { ChatMarkdown } from "@/components/workbench/chat-markdown";
import {
	type MessagesResponse,
	agentsApi,
	conversationsApi,
	filesApi,
	messagesApi,
	streamChat,
} from "@/lib/api";
import { useAppStore } from "@/stores/app-store";
import type { ChatAttachment } from "@nano-agent/shared";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Download, Paperclip, Trash2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type ToolCallStatus = "running" | "completed" | "error";

interface ToolCallTrace {
	callId: string | null;
	name: string;
	args: unknown;
	status: ToolCallStatus;
	output?: string;
	error?: string;
	truncated?: boolean;
}

export function CenterPanel() {
	const {
		currentAgentId,
		currentConversationId,
		isStreaming,
		uiLanguage,
		setStreaming,
		setCurrentConversation,
	} = useAppStore();
	const isZh = uiLanguage === "zh";
	const [input, setInput] = useState("");
	const [streamingAgentId, setStreamingAgentId] = useState<string | null>(null);
	const [streamingConversationId, setStreamingConversationId] = useState<string | null>(null);
	const [streamingContent, setStreamingContent] = useState("");
	const [streamingReasoning, setStreamingReasoning] = useState("");
	const [pendingUserMsg, setPendingUserMsg] = useState<string | null>(null);
	const [streamingToolCalls, setStreamingToolCalls] = useState<ToolCallTrace[]>([]);
	const [localErrorContent, setLocalErrorContent] = useState<string | null>(null);
	const [localErrorAgentId, setLocalErrorAgentId] = useState<string | null>(null);
	const [localErrorConversationId, setLocalErrorConversationId] = useState<string | null>(null);
	const [thinkingEnabled, setThinkingEnabled] = useState(true);
	const [isClearingContext, setIsClearingContext] = useState(false);
	const [pendingFiles, setPendingFiles] = useState<File[]>([]);
	const [isUploading, setIsUploading] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const queryClient = useQueryClient();
	const messagesContainerRef = useRef<HTMLDivElement>(null);
	const shouldAutoScrollRef = useRef(true);
	const abortRef = useRef<AbortController | null>(null);
	const previousAgentIdRef = useRef<string | null>(currentAgentId);

	const { data: agents = [] } = useQuery({
		queryKey: ["agents"],
		queryFn: agentsApi.list,
	});

	const currentAgent = agents.find((a) => a.id === currentAgentId);

	// 选中 Agent 后自动加载其对话列表，并选中第一个对话
	const { data: conversations = [], isFetched: conversationsFetched } = useQuery({
		queryKey: ["conversations", currentAgentId],
		queryFn: () => (currentAgentId ? conversationsApi.list(currentAgentId) : []),
		enabled: !!currentAgentId,
	});
	const currentConversationBelongsToAgent =
		!!currentConversationId && conversations.some((conv) => conv.id === currentConversationId);
	const activeConversationId = currentConversationBelongsToAgent ? currentConversationId : null;

	// 自动选中第一个对话
	useEffect(() => {
		if (currentAgentId && conversations.length > 0 && !currentConversationId) {
			setCurrentConversation(conversations[0].id);
		}
	}, [currentAgentId, conversations, currentConversationId, setCurrentConversation]);

	useEffect(() => {
		if (!currentConversationId || !conversationsFetched) {
			return;
		}
		if (!currentConversationBelongsToAgent) {
			setCurrentConversation(null);
		}
	}, [
		currentConversationId,
		conversationsFetched,
		currentConversationBelongsToAgent,
		setCurrentConversation,
	]);

	useEffect(() => {
		if (previousAgentIdRef.current === currentAgentId) {
			return;
		}
		previousAgentIdRef.current = currentAgentId;
		setPendingFiles([]);
	}, [currentAgentId]);

	const { data: messagesData } = useQuery({
		queryKey: ["messages", activeConversationId],
		queryFn: () => (activeConversationId ? messagesApi.list(activeConversationId) : null),
		enabled: !!activeConversationId,
	});

	const messages = messagesData?.items ?? [];
	const isStreamingConversationVisible =
		isStreaming &&
		streamingAgentId === currentAgentId &&
		(streamingConversationId
			? streamingConversationId === activeConversationId
			: !activeConversationId);
	const visiblePendingUserMsg = isStreamingConversationVisible ? pendingUserMsg : null;
	const visibleStreamingContent = isStreamingConversationVisible ? streamingContent : "";
	const visibleStreamingReasoning = isStreamingConversationVisible ? streamingReasoning : "";
	const visibleStreamingToolCalls = isStreamingConversationVisible ? streamingToolCalls : [];
	const visibleLocalErrorContent =
		localErrorContent &&
		localErrorAgentId === currentAgentId &&
		(localErrorConversationId
			? localErrorConversationId === activeConversationId
			: !activeConversationId)
			? localErrorContent
			: null;

	// 当 messages 查询已包含待发送消息时，清除乐观显示，避免重复
	useEffect(() => {
		if (
			pendingUserMsg &&
			streamingConversationId &&
			streamingConversationId === activeConversationId &&
			messages.length > 0
		) {
			const last = messages[messages.length - 1];
			if (last.role === "user" && last.content === pendingUserMsg) {
				setPendingUserMsg(null);
			}
		}
	}, [activeConversationId, messages, pendingUserMsg, streamingConversationId]);

	const scrollToBottom = useCallback((behavior: ScrollBehavior = "auto") => {
		const container = messagesContainerRef.current;
		if (!container) return;
		container.scrollTo({ top: container.scrollHeight, behavior });
	}, []);

	const syncAutoScroll = useCallback(() => {
		const container = messagesContainerRef.current;
		if (!container) return;
		const distanceToBottom =
			container.scrollHeight - (container.scrollTop + container.clientHeight);
		shouldAutoScrollRef.current = distanceToBottom < 80;
	}, []);

	useEffect(() => {
		void messages;
		void visiblePendingUserMsg;
		void visibleStreamingContent;
		void visibleStreamingReasoning;
		void visibleStreamingToolCalls;

		if (shouldAutoScrollRef.current) {
			scrollToBottom("auto");
		}
	}, [
		messages,
		visiblePendingUserMsg,
		visibleStreamingContent,
		visibleStreamingReasoning,
		visibleStreamingToolCalls,
		scrollToBottom,
	]);

	useEffect(() => {
		if (!currentConversationId) {
			shouldAutoScrollRef.current = true;
			return;
		}
		shouldAutoScrollRef.current = true;
		requestAnimationFrame(() => scrollToBottom("auto"));
	}, [currentConversationId, scrollToBottom]);

	const clearStreamingBuffers = useCallback(() => {
		setPendingUserMsg(null);
		setStreamingContent("");
		setStreamingReasoning("");
		setStreamingToolCalls([]);
	}, []);

	const clearStreamingSession = useCallback(() => {
		clearStreamingBuffers();
		setStreamingAgentId(null);
		setStreamingConversationId(null);
	}, [clearStreamingBuffers]);

	const clearLocalError = useCallback(() => {
		setLocalErrorContent(null);
		setLocalErrorAgentId(null);
		setLocalErrorConversationId(null);
	}, []);

	const sendMessage = useCallback(
		async (content: string, options?: { attachments?: ChatAttachment[] }) => {
			if (!currentAgentId || isStreaming) return;
			const agentIdAtStart = currentAgentId;
			const controller = new AbortController();
			let convIdForCleanup = activeConversationId;
			let receivedDoneEvent = false;

			setPendingUserMsg(content);
			shouldAutoScrollRef.current = true;
			scrollToBottom("smooth");
			setStreaming(true);
			setStreamingAgentId(agentIdAtStart);
			setStreamingConversationId(activeConversationId);
			setStreamingContent("");
			setStreamingReasoning("");
			setStreamingToolCalls([]);
			clearLocalError();
			abortRef.current?.abort();
			abortRef.current = controller;

			try {
				let convId = activeConversationId;
				if (!convId) {
					const conv = await conversationsApi.create(agentIdAtStart, content.slice(0, 50));
					convId = conv.id;
					setStreamingConversationId(convId);
					if (useAppStore.getState().currentAgentId === agentIdAtStart) {
						setCurrentConversation(convId);
					}
					queryClient.invalidateQueries({ queryKey: ["conversations", agentIdAtStart] });
				}
				convIdForCleanup = convId;

				for await (const event of streamChat(convId, content, {
					thinking: { type: thinkingEnabled ? "enabled" : "disabled" },
					...(options?.attachments?.length ? { attachments: options.attachments } : {}),
					signal: controller.signal,
				})) {
					if (event.type === "token" && event.content) {
						setStreamingContent((prev) => prev + event.content);
					} else if (event.type === "reasoning" && event.content) {
						if (thinkingEnabled) {
							setStreamingReasoning((prev) => prev + event.content);
						}
					} else if (event.type === "tool_call" || event.type === "tool_call_started") {
						const callId =
							event.type === "tool_call_started" ? normalizeToolCallId(event.callId) : null;
						setStreamingToolCalls((prev) =>
							upsertToolCallTrace(prev, {
								callId,
								name: event.name,
								args: event.args,
								status: "running",
							}),
						);
					} else if (event.type === "tool_call_output") {
						setStreamingToolCalls((prev) =>
							patchToolCallTrace(prev, {
								callId: normalizeToolCallId(event.callId),
								name: event.name,
								status: "completed",
								output: event.output,
								truncated: event.truncated,
							}),
						);
					} else if (event.type === "tool_call_error") {
						setStreamingToolCalls((prev) =>
							patchToolCallTrace(prev, {
								callId: normalizeToolCallId(event.callId),
								name: event.name,
								status: "error",
								error: event.error,
								truncated: event.truncated,
							}),
						);
					} else if (event.type === "tool_call_finished") {
						setStreamingToolCalls((prev) =>
							patchToolCallTrace(prev, {
								callId: normalizeToolCallId(event.callId),
								name: event.name,
								status: event.status === "error" ? "error" : "completed",
							}),
						);
					} else if (event.type === "error" && event.content) {
						setStreamingContent(event.content);
					} else if (event.type === "done") {
						receivedDoneEvent = true;
						clearLocalError();
						clearStreamingBuffers();
						queryClient.invalidateQueries({ queryKey: ["messages", convId] });
					}
				}
			} catch (err) {
				if (!(err instanceof Error && err.name === "AbortError")) {
					console.error("Chat stream error:", err);
					const reason = err instanceof Error ? err.message : String(err);
					const normalizedReason = reason.toLowerCase();
					const isLlmConfigIssue =
						normalizedReason.includes("llm") &&
						(normalizedReason.includes("not configured") ||
							normalizedReason.includes("api key") ||
							normalizedReason.includes("base url") ||
							normalizedReason.includes("provider") ||
							normalizedReason.includes("model"));
					const message = isLlmConfigIssue
						? isZh
							? `请求失败：${reason}\n请前往 Settings -> General 配置 llm_provider、llm_model 和 llm_api_key。`
							: `Request failed: ${reason}\nGo to Settings -> General and set llm_provider, llm_model, and llm_api_key.`
						: isZh
							? `请求失败：${reason}`
							: `Request failed: ${reason}`;
					setLocalErrorContent(message);
					setLocalErrorAgentId(agentIdAtStart);
					setLocalErrorConversationId(convIdForCleanup ?? null);
				}
			} finally {
				if (!controller.signal.aborted && !receivedDoneEvent) {
					clearStreamingBuffers();
					if (convIdForCleanup) {
						queryClient.invalidateQueries({ queryKey: ["messages", convIdForCleanup] });
					}
				}

				if (abortRef.current === controller) {
					abortRef.current = null;
					setStreaming(false);
					clearStreamingSession();
				}
			}
		},
		[
			currentAgentId,
			activeConversationId,
			isStreaming,
			setStreaming,
			setCurrentConversation,
			queryClient,
			thinkingEnabled,
			scrollToBottom,
			clearStreamingBuffers,
			clearStreamingSession,
			clearLocalError,
			isZh,
		],
	);

	const handleSend = useCallback(async () => {
		const hasContent = input.trim().length > 0;
		const hasFiles = pendingFiles.length > 0;
		if ((!hasContent && !hasFiles) || !currentAgentId || isStreaming) return;
		const agentIdAtStart = currentAgentId;

		const content = input.trim() || "(see attached files)";
		const filesToUpload = [...pendingFiles];
		setInput("");
		setPendingFiles([]);

		// Upload files first if any
		let attachments: ChatAttachment[] = [];
		if (filesToUpload.length > 0) {
			setIsUploading(true);
			try {
				let convId = activeConversationId;
				if (!convId) {
					const conv = await conversationsApi.create(agentIdAtStart, content.slice(0, 50));
					if (useAppStore.getState().currentAgentId !== agentIdAtStart) {
						return;
					}
					convId = conv.id;
					setCurrentConversation(convId);
					queryClient.invalidateQueries({ queryKey: ["conversations", agentIdAtStart] });
				}
				if (!convId) {
					throw new Error("Conversation was not initialized for file upload.");
				}
				if (useAppStore.getState().currentAgentId !== agentIdAtStart) {
					return;
				}
				attachments = await Promise.all(
					filesToUpload.map((f) => filesApi.uploadToSandbox(convId, f)),
				);
			} catch (err) {
				console.error("File upload error:", err);
				setIsUploading(false);
				return;
			} finally {
				setIsUploading(false);
			}
		}

		if (useAppStore.getState().currentAgentId !== agentIdAtStart) {
			return;
		}
		await sendMessage(content, attachments.length > 0 ? { attachments } : undefined);
	}, [
		input,
		pendingFiles,
		currentAgentId,
		activeConversationId,
		isStreaming,
		setCurrentConversation,
		queryClient,
		sendMessage,
	]);

	const handleAnalyzeResult = useCallback(
		(result: string) => {
			if (isStreaming) return;
			const prompt = isZh
				? `请分析以下代码运行结果：\n\n\`\`\`\n${result}\n\`\`\``
				: `Please analyze the following code execution result:\n\n\`\`\`\n${result}\n\`\`\``;
			sendMessage(prompt);
		},
		[isStreaming, isZh, sendMessage],
	);

	const handleClearContext = useCallback(async () => {
		if (!activeConversationId || isStreaming || isClearingContext) return;

		const confirmed = window.confirm(
			isZh
				? "确认清空当前会话上下文？该操作会删除当前会话内所有消息。"
				: "Clear current conversation context? This will delete all messages in this conversation.",
		);
		if (!confirmed) return;

		setIsClearingContext(true);
		shouldAutoScrollRef.current = true;

		try {
			await messagesApi.clear(activeConversationId);
			clearStreamingSession();
			clearLocalError();
			queryClient.setQueryData<MessagesResponse | null>(["messages", activeConversationId], {
				items: [],
				nextCursor: null,
				hasMore: false,
			});
			await queryClient.invalidateQueries({
				queryKey: ["messages", activeConversationId],
			});
		} catch (err) {
			console.error("Clear conversation context error:", err);
			window.alert(
				isZh ? "清空上下文失败，请稍后重试。" : "Failed to clear context. Please try again.",
			);
		} finally {
			setIsClearingContext(false);
		}
	}, [
		activeConversationId,
		isStreaming,
		isClearingContext,
		isZh,
		queryClient,
		clearStreamingSession,
		clearLocalError,
	]);

	const canClearContext =
		!!activeConversationId && !isStreaming && !isClearingContext && messages.length > 0;
	const hasRunPayload = input.trim().length > 0 || pendingFiles.length > 0;
	const isRunBusy = isStreaming || isUploading;
	const isRunDisabled = !hasRunPayload || isRunBusy;

	const formatTime = () => {
		const now = new Date();
		const h = now.getHours();
		const m = now.getMinutes().toString().padStart(2, "0");
		const period = h >= 12 ? "PM" : "AM";
		const h12 = h % 12 || 12;
		return `${h12}:${m}${period}`;
	};

	if (!currentAgentId) {
		return (
			<div className="flex flex-1 flex-col items-center justify-center bg-muted border-x border-border">
				<p className="text-[28px] font-semibold text-foreground">
					{isZh ? "欢迎使用智能体工作台" : "Welcome to Agent Workspace"}
				</p>
				<p className="text-[14px] text-text-secondary mt-2">
					{isZh ? "选择左侧的智能体开始对话" : "Select an agent on the left to start chatting"}
				</p>
			</div>
		);
	}

	return (
		<div
			className="flex min-w-0 flex-1 flex-col overflow-hidden bg-muted"
			style={{
				borderLeft: "1px solid #d0d7de",
				borderRight: "1px solid #d0d7de",
				padding: "14px 16px",
				gap: 12,
			}}
		>
			{/* Top Bar */}
			<div className="flex h-[42px] items-center bg-muted">
				<h2 className="text-[28px] font-semibold text-foreground">
					{currentAgent?.name ?? "Agent"}
				</h2>
			</div>

			{/* Messages Area */}
			<div
				ref={messagesContainerRef}
				onScroll={syncAutoScroll}
				className="chat-scroll-area flex min-w-0 flex-1 flex-col gap-[10px] overflow-x-hidden overflow-y-auto py-2 pr-3"
			>
				{messages.length === 0 && !visiblePendingUserMsg && (
					<div className="flex flex-1 items-center justify-center">
						<p className="text-[14px] text-text-secondary">
							{isZh ? "发送消息开始对话" : "Send a message to start chatting"}
						</p>
					</div>
				)}

				{messages.map((msg) => (
					<MessageRow
						key={msg.id}
						messageId={msg.id}
						messageRole={msg.role}
						content={msg.content}
						time={formatTime()}
						metadata={msg.metadata}
						conversationId={activeConversationId}
						onAnalyzeResult={handleAnalyzeResult}
						isZh={isZh}
					/>
				))}

				{visiblePendingUserMsg && (
					<MessageRow
						messageRole="user"
						content={visiblePendingUserMsg}
						time={formatTime()}
						isZh={isZh}
					/>
				)}

				{isStreamingConversationVisible && (
					<StreamingAgentRow
						content={visibleStreamingContent}
						time={formatTime()}
						reasoning={visibleStreamingReasoning}
						toolCalls={visibleStreamingToolCalls}
						conversationId={activeConversationId}
						onAnalyzeResult={handleAnalyzeResult}
						isZh={isZh}
					/>
				)}

				{visibleLocalErrorContent && (
					<MessageRow
						messageRole="assistant"
						content={visibleLocalErrorContent}
						time={formatTime()}
						isZh={isZh}
					/>
				)}
			</div>

			{/* Composer */}
			<div
				className="flex flex-col gap-2 rounded-[12px] border border-border bg-muted"
				style={{ padding: "10px 12px" }}
			>
				{pendingFiles.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{pendingFiles.map((file, i) => (
							<div
								key={`${file.name}-${i}`}
								className="flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1 text-[12px] text-text-secondary"
							>
								<Paperclip size={12} />
								<span className="max-w-[150px] truncate">{file.name}</span>
								<span className="text-text-tertiary">({formatFileSize(file.size)})</span>
								<button
									type="button"
									onClick={() => setPendingFiles((prev) => prev.filter((_, idx) => idx !== i))}
									className="ml-0.5 text-text-tertiary hover:text-foreground"
								>
									<X size={12} />
								</button>
							</div>
						))}
					</div>
				)}
				<input
					ref={fileInputRef}
					type="file"
					multiple
					accept=".xlsx,.xls,.csv,.json,.txt,.pdf,.parquet,.tsv,.xml,.yaml,.yml,.png,.jpg,.jpeg,.py,.js,.md,.html,.css,.sql,.zip"
					className="hidden"
					onChange={(e) => {
						const files = Array.from(e.target.files ?? []);
						setPendingFiles((prev) => [...prev, ...files]);
						e.target.value = "";
					}}
				/>
				<textarea
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
							e.preventDefault();
							handleSend();
						}
					}}
					placeholder={isZh ? "输入你的问题" : "Start typing a prompt"}
					rows={2}
					className="resize-none bg-transparent text-[13px] text-foreground placeholder:text-text-tertiary outline-none"
				/>
				<div className="flex items-center justify-end gap-2">
					<button
						type="button"
						onClick={handleClearContext}
						disabled={!canClearContext}
						className="inline-flex h-[30px] items-center gap-1 rounded-full border border-[#fecaca] bg-[#fff1f2] px-[12px] text-[12px] font-semibold text-[#be123c] disabled:cursor-not-allowed disabled:border-border disabled:bg-white disabled:text-text-tertiary disabled:opacity-70"
					>
						<Trash2 size={13} />
						{isClearingContext
							? isZh
								? "清空中..."
								: "Clearing..."
							: isZh
								? "清空上下文"
								: "Clear context"}
					</button>
					<div className="flex items-center gap-2">
						<button
							type="button"
							onClick={() => setThinkingEnabled((prev) => !prev)}
							disabled={isStreaming}
							className="flex h-[30px] items-center rounded-full border border-border bg-white px-[12px] disabled:opacity-50"
						>
							<span className="text-[12px] font-semibold text-text-secondary">
								{isZh ? "思考" : "Thinking"} {thinkingEnabled ? "On" : "Off"}
							</span>
						</button>
						<button
							type="button"
							onClick={() => fileInputRef.current?.click()}
							disabled={isStreaming}
							className="flex h-[30px] w-[32px] items-center justify-center rounded-full border border-border bg-white disabled:opacity-50"
						>
							<Paperclip size={14} className="text-foreground" />
						</button>
						<button
							type="button"
							onClick={handleSend}
							disabled={isRunDisabled}
							className={`flex h-[30px] items-center rounded-full px-[14px] transition-colors disabled:cursor-not-allowed ${
								isRunBusy
									? "bg-[#d8dee4] text-text-secondary"
									: "bg-primary text-[#FFFDF8] hover:bg-primary-active"
							}`}
						>
							<span className="text-[12px] font-semibold">
								{isUploading
									? isZh
										? "上传中..."
										: "Uploading..."
									: isStreaming
										? isZh
											? "思考中..."
											: "Thinking..."
										: isZh
											? "运行"
											: "Run"}
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function formatFileSize(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getAttachmentsFromMetadata(
	metadata: unknown,
): Array<{ fileName: string; fileSize: number; sandboxPath: string }> {
	if (!metadata || typeof metadata !== "object") return [];
	const value = (metadata as Record<string, unknown>).attachments;
	if (!Array.isArray(value)) return [];
	return value as Array<{ fileName: string; fileSize: number; sandboxPath: string }>;
}

function getReasoningFromMetadata(metadata: unknown): string | null {
	if (!metadata || typeof metadata !== "object") {
		return null;
	}

	const value = (metadata as Record<string, unknown>).reasoningContent;
	return typeof value === "string" && value.length > 0 ? value : null;
}

function normalizeToolCallId(callId: string | null | undefined): string | null {
	return typeof callId === "string" && callId.length > 0 ? callId : null;
}

function findToolCallTraceIndex(
	list: ToolCallTrace[],
	callId: string | null,
	name: string,
): number {
	if (callId) {
		return list.findIndex((item) => item.callId === callId);
	}

	for (let i = list.length - 1; i >= 0; i -= 1) {
		if (list[i].name === name && list[i].status === "running") {
			return i;
		}
	}

	return list.findIndex((item) => item.name === name);
}

function upsertToolCallTrace(list: ToolCallTrace[], next: ToolCallTrace): ToolCallTrace[] {
	const index = findToolCallTraceIndex(list, next.callId, next.name);
	if (index === -1) {
		return [...list, next];
	}

	const clone = [...list];
	clone[index] = {
		...clone[index],
		...next,
		callId: next.callId ?? clone[index].callId,
		name: next.name || clone[index].name,
		args: next.args ?? clone[index].args,
		status: clone[index].status === "error" ? "error" : next.status,
	};
	return clone;
}

function patchToolCallTrace(
	list: ToolCallTrace[],
	patch: Partial<ToolCallTrace> & { callId: string | null; name: string; status: ToolCallStatus },
): ToolCallTrace[] {
	const index = findToolCallTraceIndex(list, patch.callId, patch.name);
	if (index === -1) {
		return [
			...list,
			{
				callId: patch.callId,
				name: patch.name,
				args: patch.args ?? null,
				status: patch.status,
				output: patch.output,
				error: patch.error,
				truncated: patch.truncated,
			},
		];
	}

	const clone = [...list];
	clone[index] = {
		...clone[index],
		...patch,
		callId: patch.callId ?? clone[index].callId,
		name: patch.name || clone[index].name,
		status: patch.status,
	};
	return clone;
}

interface GeneratedFileMetadata {
	fileName: string;
	path: string;
	content: string;
	language: string;
	truncated: boolean;
}

function getGeneratedFilesFromMetadata(metadata: unknown): GeneratedFileMetadata[] {
	if (!metadata || typeof metadata !== "object") {
		return [];
	}

	const value = (metadata as Record<string, unknown>).generatedFiles;
	if (!Array.isArray(value)) {
		return [];
	}

	return value
		.map((item) => {
			if (!item || typeof item !== "object") {
				return null;
			}

			const record = item as Record<string, unknown>;
			const fileName = typeof record.fileName === "string" ? record.fileName : null;
			const path = typeof record.path === "string" ? record.path : null;
			const content = typeof record.content === "string" ? record.content : null;

			if (!fileName || !path || !content) {
				return null;
			}

			return {
				fileName,
				path,
				content,
				language: typeof record.language === "string" ? record.language : "",
				truncated: record.truncated === true,
			};
		})
		.filter((file): file is GeneratedFileMetadata => file !== null);
}

function getToolCallsFromMetadata(metadata: unknown): ToolCallTrace[] {
	if (!metadata || typeof metadata !== "object") {
		return [];
	}

	const value = (metadata as Record<string, unknown>).toolCalls;
	if (!Array.isArray(value)) {
		return [];
	}

	const traces: ToolCallTrace[] = [];
	for (const item of value) {
		if (!item || typeof item !== "object") {
			continue;
		}

		const record = item as Record<string, unknown>;
		const name = typeof record.name === "string" && record.name.length > 0 ? record.name : null;
		if (!name) {
			continue;
		}

		const statusRaw = typeof record.status === "string" ? record.status : "completed";
		const status: ToolCallStatus =
			statusRaw === "running" || statusRaw === "error" ? statusRaw : "completed";

		const trace: ToolCallTrace = {
			callId: typeof record.callId === "string" && record.callId.length > 0 ? record.callId : null,
			name,
			args: "args" in record ? record.args : null,
			status,
			truncated: record.truncated === true,
		};

		if (typeof record.output === "string") {
			trace.output = record.output;
		}
		if (typeof record.error === "string") {
			trace.error = record.error;
		}

		traces.push(trace);
	}

	return traces;
}

function downloadGeneratedFile(file: GeneratedFileMetadata) {
	const blob = new Blob([file.content], { type: "text/plain;charset=utf-8" });
	const href = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = href;
	anchor.download = file.fileName;
	document.body.appendChild(anchor);
	anchor.click();
	anchor.remove();
	URL.revokeObjectURL(href);
}

function ThinkingBadge({ isZh }: { isZh: boolean }) {
	return (
		<span className="inline-flex items-center gap-1 rounded-full border border-[#d0d7de] bg-white px-2 py-[1px] text-[11px] text-text-tertiary">
			{isZh ? "思考中" : "Thinking"}
			<span className="inline-flex items-center gap-[3px]">
				{[0, 1, 2].map((i) => (
					<span
						key={i}
						className="h-[4px] w-[4px] rounded-full bg-primary/55"
						style={{
							animation: "thinking-dot 1.4s ease-in-out infinite",
							animationDelay: `${i * 0.2}s`,
						}}
					/>
				))}
			</span>
		</span>
	);
}

function StreamingAgentRow({
	content,
	time,
	reasoning,
	toolCalls,
	conversationId,
	onAnalyzeResult,
	isZh,
}: {
	content: string;
	time: string;
	reasoning: string;
	toolCalls: ToolCallTrace[];
	conversationId?: string | null;
	onAnalyzeResult?: (result: string) => void;
	isZh: boolean;
}) {
	const hasTrace = Boolean(reasoning) || toolCalls.length > 0;
	const hasContent = Boolean(content);

	return (
		<div className="w-full min-w-0">
			<div className="mb-1 flex items-center gap-2">
				<p className="text-[12px] text-text-tertiary">Agent • {time}</p>
				<ThinkingBadge isZh={isZh} />
			</div>
			{hasTrace && (
				<ExecutionTraceBlock
					reasoning={reasoning}
					toolCalls={toolCalls}
					title={isZh ? "执行轨迹（实时）" : "Execution Trace (Live)"}
					isZh={isZh}
				/>
			)}
			{hasContent && (
				<ChatMarkdown
					content={content}
					conversationId={conversationId}
					showStreamingCursor
					onAnalyzeResult={onAnalyzeResult}
				/>
			)}
		</div>
	);
}

function toPrettyText(value: unknown, maxLength = 6000): string {
	if (typeof value === "string") {
		return value.length > maxLength ? `${value.slice(0, maxLength)}\n...` : value;
	}

	try {
		const json = JSON.stringify(value, null, 2);
		if (!json) {
			return "";
		}
		return json.length > maxLength ? `${json.slice(0, maxLength)}\n...` : json;
	} catch {
		const fallback = String(value);
		return fallback.length > maxLength ? `${fallback.slice(0, maxLength)}\n...` : fallback;
	}
}

function statusLabel(status: ToolCallStatus, isZh: boolean): string {
	if (status === "running") return isZh ? "运行中" : "running";
	if (status === "error") return isZh ? "失败" : "failed";
	return isZh ? "完成" : "completed";
}

function statusTone(status: ToolCallStatus): string {
	if (status === "running") {
		return "bg-[#eff6ff] border-[#bfdbfe] text-[#1d4ed8]";
	}
	if (status === "error") {
		return "bg-[#fef2f2] border-[#fecaca] text-[#b91c1c]";
	}
	return "bg-[#ecfdf3] border-[#bbf7d0] text-[#166534]";
}

function ExecutionTraceBlock({
	title,
	reasoning,
	toolCalls,
	isZh,
	defaultOpen = false,
}: {
	title: string;
	reasoning: string;
	toolCalls: ToolCallTrace[];
	isZh: boolean;
	defaultOpen?: boolean;
}) {
	const completedCount = toolCalls.filter((item) => item.status === "completed").length;
	const runningCount = toolCalls.filter((item) => item.status === "running").length;
	const errorCount = toolCalls.filter((item) => item.status === "error").length;
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<details
			className="mb-2 w-full min-w-0 rounded-[10px] border border-[#d0d7de] bg-[#f8fafc] px-3 py-2"
			open={isOpen}
			onToggle={(event) => setIsOpen(event.currentTarget.open)}
		>
			<summary className="cursor-pointer text-[12px] font-semibold text-text-secondary">
				{title}
				{toolCalls.length > 0
					? isZh
						? ` · 工具 ${toolCalls.length}（完成 ${completedCount} / 运行中 ${runningCount} / 失败 ${errorCount}）`
						: ` · tools ${toolCalls.length} (completed ${completedCount} / running ${runningCount} / failed ${errorCount})`
					: ""}
			</summary>

			<div className="mt-2 flex flex-col gap-2">
				{reasoning && (
					<div className="rounded-[8px] border border-[#e5e7eb] bg-white px-3 py-2">
						<p className="mb-1 text-[12px] font-semibold text-text-secondary">
							{isZh ? "思考内容" : "Reasoning"}
						</p>
						<div className="text-[13px] leading-[1.45] text-text-secondary whitespace-pre-wrap">
							{reasoning}
						</div>
					</div>
				)}

				{toolCalls.map((tool, index) => (
					<div
						key={`${tool.callId ?? tool.name}-${index}`}
						className="rounded-[8px] border border-[#e5e7eb] bg-white px-3 py-2"
					>
						<div className="mb-1 flex min-w-0 items-center gap-2">
							<span className="min-w-0 truncate text-[12px] font-mono font-semibold text-primary">
								{tool.name}
							</span>
							<span
								className={`inline-flex h-[20px] items-center rounded-full border px-2 text-[11px] font-semibold ${statusTone(tool.status)}`}
							>
								{statusLabel(tool.status, isZh)}
							</span>
						</div>

						{tool.args !== null && tool.args !== undefined && (
							<div className="mb-1">
								<p className="mb-1 text-[11px] font-semibold text-text-tertiary">
									{isZh ? "参数" : "Arguments"}
								</p>
								<pre className="overflow-x-auto whitespace-pre-wrap rounded-[6px] bg-[#f6f8fa] px-2 py-1 font-mono text-[11px] leading-[1.45] text-[#1f2328]">
									{toPrettyText(tool.args)}
								</pre>
							</div>
						)}

						{tool.output && (
							<div className="mb-1">
								<p className="mb-1 text-[11px] font-semibold text-text-tertiary">
									{isZh ? "输出" : "Output"}
								</p>
								<pre className="overflow-x-auto whitespace-pre-wrap rounded-[6px] bg-[#f6f8fa] px-2 py-1 font-mono text-[11px] leading-[1.45] text-[#1f2328]">
									{tool.output}
								</pre>
							</div>
						)}

						{tool.error && (
							<div className="mb-1">
								<p className="mb-1 text-[11px] font-semibold text-[#b91c1c]">
									{isZh ? "错误" : "Error"}
								</p>
								<pre className="overflow-x-auto whitespace-pre-wrap rounded-[6px] bg-[#fef2f2] px-2 py-1 font-mono text-[11px] leading-[1.45] text-[#7f1d1d]">
									{tool.error}
								</pre>
							</div>
						)}

						{tool.truncated && (
							<p className="text-[11px] text-[#b45309]">
								{isZh ? "输出过长，已自动截断展示。" : "Output is too long and has been truncated."}
							</p>
						)}
					</div>
				))}
			</div>
		</details>
	);
}

function getExecutionResultsFromMetadata(
	metadata: unknown,
):
	| Record<string, { output: string | null; exitCode: number | null; error: string | null }>
	| undefined {
	if (!metadata || typeof metadata !== "object") return undefined;
	const value = (metadata as Record<string, unknown>).codeExecutionResults;
	if (!value || typeof value !== "object") return undefined;
	return value as Record<
		string,
		{ output: string | null; exitCode: number | null; error: string | null }
	>;
}

function MessageRow({
	messageId,
	messageRole,
	content,
	time,
	metadata,
	conversationId,
	onAnalyzeResult,
	isZh,
}: {
	messageId?: string;
	messageRole: string;
	content: string;
	time: string;
	metadata?: unknown;
	conversationId?: string | null;
	onAnalyzeResult?: (result: string) => void;
	isZh: boolean;
}) {
	if (messageRole === "user") {
		const attachments = getAttachmentsFromMetadata(metadata);
		return (
			<div className="w-full min-w-0">
				<p className="text-[12px] text-text-secondary text-right mb-1">User • {time}</p>
				<div className="text-right">
					<ChatMarkdown content={content} readOnly />
				</div>
				{attachments.length > 0 && (
					<div className="flex flex-wrap justify-end gap-1 mt-1">
						{attachments.map((a, i) => (
							<span
								key={`${a.fileName}-${i}`}
								className="inline-flex items-center gap-1 rounded-full border border-border bg-white px-2 py-0.5 text-[11px] text-text-tertiary"
							>
								<Paperclip size={10} />
								{a.fileName}
							</span>
						))}
					</div>
				)}
			</div>
		);
	}

	const reasoningContent = getReasoningFromMetadata(metadata);
	const toolCalls = getToolCallsFromMetadata(metadata);
	const generatedFiles = getGeneratedFilesFromMetadata(metadata);
	const executionResults = getExecutionResultsFromMetadata(metadata);

	return (
		<div className="w-full min-w-0">
			<p className="text-[12px] text-text-tertiary mb-1">Agent • {time}</p>
			{(reasoningContent || toolCalls.length > 0) && (
				<ExecutionTraceBlock
					title={isZh ? "执行轨迹" : "Execution Trace"}
					reasoning={reasoningContent ?? ""}
					toolCalls={toolCalls}
					isZh={isZh}
				/>
			)}
			<ChatMarkdown
				content={content}
				conversationId={conversationId}
				messageId={messageId}
				executionResults={executionResults}
				onAnalyzeResult={onAnalyzeResult}
			/>
			{generatedFiles.length > 0 && (
				<div className="mt-3 rounded-[10px] border border-[#d0d7de] bg-[#f8fafc] p-3">
					<p className="mb-2 text-[12px] font-semibold text-text-secondary">
						{isZh ? "生成文件" : "Generated Files"}
					</p>
					<div className="flex flex-col gap-2">
						{generatedFiles.map((file, index) => (
							<div
								key={`${file.path}-${index}`}
								className="flex min-w-0 items-center justify-between gap-3 rounded-[8px] border border-[#e5e7eb] bg-white px-3 py-2"
							>
								<div className="min-w-0">
									<p className="truncate text-[13px] font-semibold text-foreground">
										{file.fileName}
									</p>
									<p className="truncate text-[11px] text-text-tertiary">
										{file.path}
										{file.language ? ` · ${file.language}` : ""}
									</p>
									{file.truncated && (
										<p className="text-[11px] text-[#b45309]">
											{isZh
												? "内容过长，仅保存了可预览片段"
												: "Content is too long. Only a preview fragment was saved."}
										</p>
									)}
								</div>
								<button
									type="button"
									onClick={() => downloadGeneratedFile(file)}
									className="inline-flex h-[28px] shrink-0 items-center gap-1 rounded-full border border-[#d0d7de] bg-white px-3 text-[12px] font-semibold text-text-secondary hover:bg-[#f6f8fa]"
								>
									<Download size={14} />
									{isZh ? "下载" : "Download"}
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
