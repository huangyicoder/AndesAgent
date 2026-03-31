import { agentsApi, knowledgeApi } from "@/lib/api";
import { getDateLocale } from "@/lib/language";
import { useAppStore } from "@/stores/app-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { RefreshCcw, Upload } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export function SettingsKnowledge() {
	const queryClient = useQueryClient();
	const [showUpload, setShowUpload] = useState(false);
	const [showRebuildAll, setShowRebuildAll] = useState(false);
	const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
	const [selectedRebuildAgentId, setSelectedRebuildAgentId] = useState<string>("");
	const [uploadFiles, setUploadFiles] = useState<File[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const { data: agents = [] } = useQuery({
		queryKey: ["agents"],
		queryFn: agentsApi.list,
	});

	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const isZh = uiLanguage === "zh";
	const dateLocale = getDateLocale(uiLanguage);

	const agentNameMap = new Map(agents.map((agent) => [agent.id, agent.name]));

	const { data: docs = [] } = useQuery({
		queryKey: ["knowledge-all"],
		queryFn: async () => {
			const agentList = await agentsApi.list();
			const allDocs = await Promise.all(agentList.map((a) => knowledgeApi.list(a.id)));
			return allDocs.flat();
		},
	});

	const { data: vectorStatus } = useQuery({
		queryKey: ["knowledge-vector-status"],
		queryFn: knowledgeApi.status,
		refetchInterval: 15_000,
	});

	useEffect(() => {
		if (!selectedRebuildAgentId && agents.length > 0) {
			setSelectedRebuildAgentId(agents[0].id);
		}
	}, [agents, selectedRebuildAgentId]);

	const deleteDoc = useMutation({
		mutationFn: (docId: string) => knowledgeApi.delete(docId),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["knowledge-all"] }),
	});

	const rebuildDoc = useMutation({
		mutationFn: (docId: string) => knowledgeApi.rebuild(docId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["knowledge-all"] });
			queryClient.invalidateQueries({ queryKey: ["knowledge-vector-status"] });
		},
	});

	const rebuildAllDocs = useMutation({
		mutationFn: (agentId: string) => knowledgeApi.rebuildAll(agentId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["knowledge-all"] });
			queryClient.invalidateQueries({ queryKey: ["knowledge-vector-status"] });
		},
	});

	const uploadMutation = useMutation({
		mutationFn: async ({ agentId, files }: { agentId: string; files: File[] }) => {
			for (const file of files) {
				await knowledgeApi.upload(agentId, file);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["knowledge-all"] });
			setShowUpload(false);
			setUploadFiles([]);
			setSelectedAgentId(null);
		},
	});

	const handleDrop = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
		const files = Array.from(e.dataTransfer.files);
		setUploadFiles((prev) => [...prev, ...files]);
	}, []);

	const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files) {
			setUploadFiles((prev) => [...prev, ...Array.from(files)]);
		}
	}, []);

	const handleUpload = () => {
		if (!selectedAgentId || uploadFiles.length === 0) return;
		uploadMutation.mutate({ agentId: selectedAgentId, files: uploadFiles });
	};

	return (
		<div className="flex flex-col gap-[14px] relative">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-[6px]">
					<h2 className="text-[28px] font-semibold text-foreground">Knowledge</h2>
					<p className="text-[13px] text-text-secondary">
						{isZh
							? "管理平台知识库文件，构建 RAG 索引，并在智能体中启用。"
							: "Manage platform knowledge files, build RAG indexes, and enable them in each agent."}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => setShowRebuildAll(true)}
						className="flex items-center gap-2 rounded-[8px] border border-border bg-muted px-3 py-2"
					>
						<RefreshCcw size={14} className="text-text-secondary" />
						<span className="text-[13px] font-semibold text-text-secondary">
							{isZh ? "重建智能体索引" : "Rebuild Agent Index"}
						</span>
					</button>
					<button
						type="button"
						onClick={() => setShowUpload(true)}
						className="flex items-center gap-2 rounded-[8px] bg-primary-active border border-primary-active px-3 py-2"
					>
						<Upload size={14} className="text-white" />
						<span className="text-[13px] font-semibold text-white">
							{isZh ? "上传文件" : "Upload Files"}
						</span>
					</button>
				</div>
			</div>

			<div className="rounded-[12px] border border-border bg-white px-[14px] py-3">
				<div className="flex items-center justify-between gap-3">
					<div className="flex flex-col gap-1">
						<span className="text-[13px] font-semibold text-foreground">
							{isZh ? "向量索引状态" : "Vector Index Status"}
						</span>
						<span className="text-[12px] text-text-secondary">
							{isZh ? "模型" : "Model"}: {vectorStatus?.embeddingModel ?? "local-hash-v1"} ·{" "}
							{isZh ? "维度" : "Dimensions"}: {vectorStatus?.embeddingDimensions ?? 384}
						</span>
						<span className="text-[12px] text-text-secondary">
							{isZh ? "Embedding 行数" : "Embedding rows"}: {vectorStatus?.embeddingRows ?? 0} ·{" "}
							{isZh ? "Vec 行数" : "Vec rows"}: {vectorStatus?.vectorRows ?? 0}
						</span>
					</div>
					<span
						className={`rounded-full px-2 py-1 text-[11px] font-semibold ${
							vectorStatus?.vectorSearchEnabled
								? "border border-success-border bg-success-bg text-success-text"
								: "border border-warning-border bg-warning-bg text-warning-text"
						}`}
					>
						{vectorStatus?.vectorSearchEnabled
							? isZh
								? "sqlite-vec 已启用"
								: "sqlite-vec enabled"
							: isZh
								? "sqlite-vec 未启用"
								: "sqlite-vec disabled"}
					</span>
				</div>
			</div>

			{/* Knowledge File List */}
			<div className="flex flex-col gap-3">
				{docs.map((doc) => (
					<div
						key={doc.id}
						className="flex items-center justify-between rounded-[12px] border border-border bg-white px-[14px] py-3"
					>
						<div className="flex flex-col gap-1">
							<div className="flex items-center gap-2">
								<span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-[2px] text-[11px] font-semibold text-primary">
									{isZh ? "智能体" : "Agent"}: {agentNameMap.get(doc.agentId) ?? doc.agentId}
								</span>
								<span className="text-[13px] font-medium text-foreground">{doc.filename}</span>
							</div>
							<div className="flex items-center gap-[6px] text-[13px] text-text-secondary">
								<span>
									{doc.chunkCount} {isZh ? "分块" : "chunks"} · {isZh ? "更新于" : "Updated"}{" "}
									{new Date(doc.updatedAt).toLocaleDateString(dateLocale)}
								</span>
								<StatusBadge status={doc.status} />
							</div>
						</div>
						<div className="flex items-center gap-[6px]">
							<button
								type="button"
								onClick={() => rebuildDoc.mutate(doc.id)}
								disabled={rebuildDoc.isPending}
								className="rounded-[8px] border border-border bg-muted px-[10px] py-[6px] text-[12px] font-semibold text-text-secondary disabled:opacity-50"
							>
								{isZh ? "重建" : "Rebuild"}
							</button>
							<button
								type="button"
								onClick={() => deleteDoc.mutate(doc.id)}
								disabled={deleteDoc.isPending}
								className="rounded-[8px] border border-danger-border bg-danger-bg px-[10px] py-[6px] text-[12px] font-semibold text-danger-text disabled:opacity-50"
							>
								{isZh ? "删除" : "Delete"}
							</button>
						</div>
					</div>
				))}
				{docs.length === 0 && (
					<p className="text-center py-8 text-[13px] text-text-secondary">
						{isZh
							? "暂无知识库文件，点击上传开始。"
							: "No knowledge files yet. Click Upload to get started."}
					</p>
				)}
			</div>

			{/* Upload Modal Overlay */}
			{showUpload && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
					onClick={() => {
						setShowUpload(false);
						setUploadFiles([]);
					}}
					onKeyDown={(e) => {
						if (e.key === "Escape") {
							setShowUpload(false);
							setUploadFiles([]);
						}
					}}
				>
					<div
						className="flex w-[560px] flex-col gap-[14px] rounded-[12px] border border-border bg-white p-5"
						onClick={(e) => e.stopPropagation()}
						onKeyDown={(e) => e.stopPropagation()}
					>
						<h3 className="text-[20px] font-bold text-foreground">Upload</h3>
						<p className="text-[13px] text-text-secondary">
							{isZh
								? "将文件拖到这里，或选择文件添加到当前知识库。"
								: "Drag and drop files here, or choose files to add into current knowledge base."}
						</p>

						{/* Agent Selector */}
						<div className="flex flex-col gap-[6px]">
							<label htmlFor="agent-selector" className="text-[13px] font-medium text-foreground">
								{isZh ? "选择智能体" : "Select Agent"}
							</label>
							<select
								id="agent-selector"
								value={selectedAgentId ?? ""}
								onChange={(e) => setSelectedAgentId(e.target.value || null)}
								className="h-[36px] rounded-[8px] border border-border bg-white px-3 text-[13px] text-foreground outline-none focus:border-primary"
							>
								<option value="">{isZh ? "选择一个智能体..." : "Select an agent..."}</option>
								{agents.map((agent) => (
									<option key={agent.id} value={agent.id}>
										{agent.name}
									</option>
								))}
							</select>
						</div>

						{/* Drop Zone */}
						<div
							onDragOver={(e) => {
								e.preventDefault();
								setIsDragging(true);
							}}
							onDragLeave={() => setIsDragging(false)}
							onDrop={handleDrop}
							className={`flex h-[180px] flex-col items-center justify-center gap-2 rounded-[10px] border transition-colors ${
								isDragging ? "border-primary bg-primary/5" : "border-[#94a3b8] bg-[#f8fafc]"
							}`}
						>
							{uploadFiles.length > 0 ? (
								<>
									<span className="text-[14px] font-medium text-foreground">
										{isZh
											? `已选择 ${uploadFiles.length} 个文件`
											: `${uploadFiles.length} file(s) selected`}
									</span>
									<div className="flex flex-col gap-1 max-h-[100px] overflow-y-auto text-center">
										{uploadFiles.map((f) => (
											<span key={`${f.name}-${f.size}`} className="text-[12px] text-text-secondary">
												{f.name} ({(f.size / 1024).toFixed(1)} KB)
											</span>
										))}
									</div>
								</>
							) : (
								<>
									<span className="text-[16px] font-semibold text-foreground">Drag files here</span>
									<span className="text-[12px] text-text-secondary">
										{isZh ? "支持 PDF、DOCX、TXT、MD" : "Supports PDF, DOCX, TXT, MD"}
									</span>
								</>
							)}
							<button
								type="button"
								onClick={() => fileInputRef.current?.click()}
								className="mt-2 rounded-[8px] bg-primary-active px-3 py-2 text-[13px] font-semibold text-white"
							>
								{isZh ? "选择文件" : "Choose Files"}
							</button>
							<input
								ref={fileInputRef}
								type="file"
								multiple
								accept=".pdf,.txt,.md,.docx"
								onChange={handleFileSelect}
								className="hidden"
							/>
						</div>

						{/* Actions */}
						<div className="flex justify-end gap-[10px]">
							<button
								type="button"
								onClick={() => {
									setShowUpload(false);
									setUploadFiles([]);
								}}
								className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] font-medium text-foreground"
							>
								{isZh ? "取消" : "Cancel"}
							</button>
							<button
								type="button"
								onClick={handleUpload}
								disabled={!selectedAgentId || uploadFiles.length === 0 || uploadMutation.isPending}
								className="rounded-[8px] bg-primary-active px-3 py-2 text-[13px] font-semibold text-white disabled:opacity-50"
							>
								{uploadMutation.isPending
									? isZh
										? "上传中..."
										: "Uploading..."
									: isZh
										? "上传"
										: "Upload"}
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Rebuild All Modal Overlay */}
			{showRebuildAll && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
					onClick={() => setShowRebuildAll(false)}
					onKeyDown={(e) => {
						if (e.key === "Escape") {
							setShowRebuildAll(false);
						}
					}}
				>
					<div
						className="flex w-[480px] flex-col gap-[14px] rounded-[12px] border border-border bg-white p-5"
						onClick={(e) => e.stopPropagation()}
						onKeyDown={(e) => e.stopPropagation()}
					>
						<h3 className="text-[20px] font-bold text-foreground">
							{isZh ? "重建智能体索引" : "Rebuild Agent Index"}
						</h3>
						<p className="text-[13px] text-text-secondary">
							{isZh
								? "选择一个智能体，系统将重建该智能体全部知识库文件的向量索引。"
								: "Select an agent. The system will rebuild vector indexes for all of its knowledge files."}
						</p>
						<div className="flex flex-col gap-[6px]">
							<label
								htmlFor="rebuild-agent-selector"
								className="text-[13px] font-medium text-foreground"
							>
								{isZh ? "选择智能体" : "Select Agent"}
							</label>
							<select
								id="rebuild-agent-selector"
								value={selectedRebuildAgentId}
								onChange={(e) => setSelectedRebuildAgentId(e.target.value)}
								className="h-[36px] rounded-[8px] border border-border bg-white px-3 text-[13px] text-foreground outline-none focus:border-primary"
							>
								<option value="">{isZh ? "选择一个智能体..." : "Select an agent..."}</option>
								{agents.map((agent) => (
									<option key={agent.id} value={agent.id}>
										{agent.name}
									</option>
								))}
							</select>
						</div>
						<div className="flex justify-end gap-[10px]">
							<button
								type="button"
								onClick={() => setShowRebuildAll(false)}
								className="rounded-[8px] border border-border bg-white px-3 py-2 text-[13px] font-medium text-foreground"
							>
								{isZh ? "取消" : "Cancel"}
							</button>
							<button
								type="button"
								onClick={() => {
									if (!selectedRebuildAgentId) return;
									rebuildAllDocs.mutate(selectedRebuildAgentId, {
										onSuccess: () => setShowRebuildAll(false),
									});
								}}
								disabled={!selectedRebuildAgentId || rebuildAllDocs.isPending}
								className="rounded-[8px] bg-primary-active px-3 py-2 text-[13px] font-semibold text-white disabled:opacity-50"
							>
								{rebuildAllDocs.isPending
									? isZh
										? "重建中..."
										: "Rebuilding..."
									: isZh
										? "开始重建"
										: "Start Rebuild"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

function StatusBadge({ status }: { status: string }) {
	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const isZh = uiLanguage === "zh";

	if (status === "ready") {
		return (
			<span className="rounded-full border border-success-border bg-success-bg px-2 py-1 text-[11px] font-semibold text-success-text">
				OK
			</span>
		);
	}
	if (status === "processing") {
		return (
			<span className="rounded-full border border-warning-border bg-warning-bg px-2 py-1 text-[11px] font-semibold text-warning-text">
				{isZh ? "构建中" : "building"}
			</span>
		);
	}
	if (status === "error") {
		return (
			<span className="rounded-full border border-danger-border bg-danger-bg px-2 py-1 text-[11px] font-semibold text-danger-text">
				{isZh ? "错误" : "error"}
			</span>
		);
	}
	return (
		<span className="rounded-full border border-border bg-muted px-2 py-1 text-[11px] font-semibold text-text-secondary">
			{status}
		</span>
	);
}
