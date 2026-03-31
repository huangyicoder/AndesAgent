import { skillsApi } from "@/lib/api";
import { useAppStore } from "@/stores/app-store";
import type { Skill } from "@nano-agent/shared";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	Database,
	FileText,
	GitPullRequest,
	Lightbulb,
	Monitor,
	RefreshCw,
	Search,
	Shield,
	Trash2,
	Upload,
	Zap,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

type SubTab = "all" | "upload";

const iconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
	lightbulb: { icon: Lightbulb, color: "#7c3aed", bg: "#eef2ff" },
	monitor: { icon: Monitor, color: "#0891b2", bg: "#ecfeff" },
	"git-pull-request": { icon: GitPullRequest, color: "#9ca3af", bg: "#f3f4f6" },
	zap: { icon: Zap, color: "#d97706", bg: "#fef3c7" },
	"file-text": { icon: FileText, color: "#db2777", bg: "#fce7f3" },
	database: { icon: Database, color: "#2563eb", bg: "#dbeafe" },
	shield: { icon: Shield, color: "#16a34a", bg: "#dcfce7" },
};

function SkillIcon({ icon }: { icon: string | null }) {
	const config = icon ? iconMap[icon] : null;
	const Icon = config?.icon ?? Zap;
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

export function SettingsSkills() {
	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const isZh = uiLanguage === "zh";
	const queryClient = useQueryClient();
	const [subTab, setSubTab] = useState<SubTab>("all");
	const [search, setSearch] = useState("");
	const [activeCat, setActiveCat] = useState<string>("__all__");
	const updateFileRef = useRef<HTMLInputElement>(null);
	const [updatingSkillId, setUpdatingSkillId] = useState<string | null>(null);

	const { data: allSkills = [] } = useQuery({
		queryKey: ["skills"],
		queryFn: skillsApi.list,
	});

	const uploadSkill = useMutation({
		mutationFn: (file: File) => skillsApi.upload(file),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["skills"] });
			setSubTab("all");
		},
	});

	const reuploadSkill = useMutation({
		mutationFn: ({ id, file }: { id: string; file: File }) => skillsApi.reupload(id, file),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["skills"] });
			setUpdatingSkillId(null);
		},
	});

	const deleteSkill = useMutation({
		mutationFn: (id: string) => skillsApi.delete(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["skills"] }),
	});

	const categories = ["__all__", ...new Set(allSkills.map((s) => s.category))];

	const filteredSkills = allSkills.filter((s) => {
		if (
			search &&
			!s.name.toLowerCase().includes(search.toLowerCase()) &&
			!s.description.toLowerCase().includes(search.toLowerCase())
		)
			return false;
		if (activeCat !== "__all__" && s.category !== activeCat) return false;
		return true;
	});

	const handleUpdateFile = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files?.[0];
			if (file && updatingSkillId) {
				reuploadSkill.mutate({ id: updatingSkillId, file });
			}
			e.target.value = "";
		},
		[updatingSkillId, reuploadSkill],
	);

	return (
		<div className="flex flex-col gap-[14px]">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-1">
					<h2 className="text-[28px] font-semibold text-foreground">Skills</h2>
					<p className="text-[13px] text-text-secondary">
						{isZh
							? "管理平台技能，智能体可在工作台中启用"
							: "Manage platform skills and enable them for agents in workspace."}
					</p>
				</div>
				<div className="flex items-center gap-2 rounded-[8px] border border-border bg-white px-3 h-[36px] w-[260px]">
					<Search size={16} className="text-text-muted" />
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder={isZh ? "搜索技能..." : "Search skills..."}
						className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-text-muted outline-none"
					/>
				</div>
			</div>

			{/* Sub-tabs */}
			<div className="flex border-b border-border-light">
				<button
					type="button"
					onClick={() => setSubTab("all")}
					className={`flex items-center gap-[6px] px-4 py-2 text-[14px] ${
						subTab === "all"
							? "font-semibold text-foreground border-b-2 border-primary"
							: "font-medium text-text-secondary"
					}`}
				>
					{isZh ? "技能列表" : "Skill List"}
					<span className="rounded-[10px] bg-badge-blue-bg px-2 py-[2px] text-[11px] font-semibold text-badge-blue-text">
						{allSkills.length}
					</span>
				</button>
				<button
					type="button"
					onClick={() => setSubTab("upload")}
					className={`flex items-center gap-[6px] px-4 py-2 text-[14px] ${
						subTab === "upload"
							? "font-semibold text-foreground border-b-2 border-primary"
							: "font-medium text-text-secondary"
					}`}
				>
					<Upload size={14} />
					{isZh ? "上传技能" : "Upload Skill"}
				</button>
			</div>

			{/* Skills List */}
			{subTab === "all" && (
				<div className="flex flex-col gap-3">
					{/* Category Pills */}
					<div className="flex gap-2 flex-wrap">
						{categories.map((cat) => (
							<button
								type="button"
								key={cat}
								onClick={() => setActiveCat(cat)}
								className={`rounded-[16px] px-3 py-[5px] text-[12px] font-medium transition-colors ${
									activeCat === cat
										? "bg-primary text-white"
										: "bg-muted border border-border text-foreground"
								}`}
							>
								{cat === "__all__" ? (isZh ? "全部" : "All") : cat}
							</button>
						))}
					</div>

					{/* Skill Cards */}
					<div className="flex flex-col gap-[10px]">
						{filteredSkills.map((skill) => (
							<SkillCard
								key={skill.id}
								skill={skill}
								onDelete={() => deleteSkill.mutate(skill.id)}
								onUpdate={() => {
									setUpdatingSkillId(skill.id);
									updateFileRef.current?.click();
								}}
								isDeleting={deleteSkill.isPending}
								isUpdating={reuploadSkill.isPending && updatingSkillId === skill.id}
							/>
						))}
						{filteredSkills.length === 0 && (
							<p className="text-center py-8 text-[13px] text-text-secondary">
								{isZh
									? "暂无技能，上传 .zip 文件添加技能"
									: "No skills yet. Upload a .zip package to add one."}
							</p>
						)}
					</div>
				</div>
			)}

			{/* Upload Tab */}
			{subTab === "upload" && (
				<UploadZone
					onUpload={(file) => uploadSkill.mutate(file)}
					isPending={uploadSkill.isPending}
					error={uploadSkill.error?.message ?? null}
					isZh={isZh}
				/>
			)}

			{/* Hidden file input for update */}
			<input
				ref={updateFileRef}
				type="file"
				accept=".zip"
				className="hidden"
				onChange={handleUpdateFile}
			/>
		</div>
	);
}

function SkillCard({
	skill,
	onDelete,
	onUpdate,
	isDeleting,
	isUpdating,
}: {
	skill: Skill;
	onDelete: () => void;
	onUpdate: () => void;
	isDeleting: boolean;
	isUpdating: boolean;
}) {
	const uiLanguage = useAppStore((state) => state.uiLanguage);
	const isZh = uiLanguage === "zh";

	return (
		<div
			className="flex items-center justify-between rounded-[10px] bg-white border border-[#d8dee4] gap-3"
			style={{ padding: "14px 16px" }}
		>
			<div className="flex items-center gap-3 flex-1 min-w-0">
				<SkillIcon icon={skill.icon} />
				<div className="flex flex-col gap-1 min-w-0">
					<div className="flex items-center gap-2">
						<span className="text-[15px] font-semibold text-foreground">{skill.name}</span>
						<span className="rounded-[6px] bg-muted px-[6px] py-[2px] text-[11px] text-text-muted">
							{skill.category}
						</span>
						{skill.version > 1 && (
							<span className="rounded-[6px] bg-[#dbeafe] px-[6px] py-[2px] text-[11px] text-[#2563eb]">
								v{skill.version}
							</span>
						)}
						{skill.author && <span className="text-[11px] text-text-muted">by {skill.author}</span>}
					</div>
					<span className="text-[12px] text-[#6e7781] line-clamp-2">{skill.description}</span>
				</div>
			</div>
			<div className="flex items-center gap-[8px]">
				{skill.dirPath && (
					<button
						type="button"
						onClick={onUpdate}
						disabled={isUpdating}
						title={isZh ? "更新技能" : "Update skill"}
						className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border border-border bg-white hover:bg-muted disabled:opacity-50"
					>
						<RefreshCw size={14} className={`text-[#6e7781] ${isUpdating ? "animate-spin" : ""}`} />
					</button>
				)}
				<button
					type="button"
					onClick={onDelete}
					disabled={isDeleting}
					className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border border-border bg-white hover:bg-muted disabled:opacity-50"
				>
					<Trash2 size={14} className="text-destructive" />
				</button>
			</div>
		</div>
	);
}

function UploadZone({
	onUpload,
	isPending,
	error,
	isZh,
}: {
	onUpload: (file: File) => void;
	isPending: boolean;
	error: string | null;
	isZh: boolean;
}) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [dragOver, setDragOver] = useState(false);

	const handleFile = (file: File) => {
		if (!file.name.toLowerCase().endsWith(".zip")) {
			return;
		}
		onUpload(file);
	};

	return (
		<div className="flex flex-col gap-4">
			<button
				type="button"
				onDragOver={(e) => {
					e.preventDefault();
					setDragOver(true);
				}}
				onDragLeave={() => setDragOver(false)}
				onDrop={(e) => {
					e.preventDefault();
					setDragOver(false);
					const file = e.dataTransfer.files[0];
					if (file) handleFile(file);
				}}
				onClick={() => fileInputRef.current?.click()}
				className={`w-full flex flex-col items-center justify-center gap-3 rounded-[12px] border-2 border-dashed p-10 cursor-pointer transition-colors ${
					dragOver
						? "border-primary bg-[#f0f7ff]"
						: "border-border-light bg-white hover:border-primary/50"
				}`}
			>
				<Upload size={32} className="text-text-muted" />
				<div className="flex flex-col items-center gap-1">
					<span className="text-[14px] font-medium text-foreground">
						{isPending
							? isZh
								? "上传中..."
								: "Uploading..."
							: isZh
								? "拖拽或点击上传技能包"
								: "Drag or click to upload a skill package"}
					</span>
					<span className="text-[12px] text-text-muted">
						{isZh
							? "支持 .zip 文件，包内需包含 SKILL.md 文件"
							: "Supports .zip files. The package must include SKILL.md."}
					</span>
				</div>
				<input
					ref={fileInputRef}
					type="file"
					accept=".zip"
					className="hidden"
					onChange={(e) => {
						const file = e.target.files?.[0];
						if (file) handleFile(file);
						e.target.value = "";
					}}
				/>
			</button>

			{error && (
				<div className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
					{error}
				</div>
			)}

			{/* Upload guide */}
			<div className="rounded-[10px] border border-border-light bg-muted p-4">
				<h4 className="text-[14px] font-semibold text-foreground mb-2">
					{isZh ? "技能包格式说明" : "Skill Package Format"}
				</h4>
				<div className="flex flex-col gap-[6px] text-[12px] text-[#6e7781]">
					<p>
						{isZh
							? "技能包是一个 .zip 压缩文件，解压后的目录结构："
							: "A skill package is a .zip archive. Expected extracted structure:"}
					</p>
					<pre className="bg-white border border-border rounded-[6px] p-3 text-[11px] font-mono">
						{`my-skill/
├── SKILL.md          # Required - skill definition (YAML frontmatter + instructions)
├── reference.md      # Optional - references
└── scripts/          # Optional - helper scripts
    └── helper.py`}
					</pre>
					<p className="mt-1">
						{isZh
							? "SKILL.md 需包含 YAML frontmatter，至少包含 "
							: "SKILL.md must include YAML frontmatter with at least "}
						<code className="bg-white px-1 rounded">name</code> {isZh ? "和" : "and"}{" "}
						<code className="bg-white px-1 rounded">description</code> {isZh ? "字段。" : "fields."}
					</p>
				</div>
			</div>
		</div>
	);
}
