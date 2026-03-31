import { messagesApi, sandboxApi } from "@/lib/api";
import { Check, Copy, LoaderCircle, Pencil, Play, Sparkles, X } from "lucide-react";
import {
	Children,
	type ReactElement,
	type ReactNode,
	isValidElement,
	useEffect,
	useMemo,
	useState,
} from "react";
import Markdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

export interface CodeExecutionResultMap {
	[codeHash: string]: {
		output: string | null;
		exitCode: number | null;
		error: string | null;
	};
}

interface ChatMarkdownProps {
	content: string;
	conversationId?: string | null;
	messageId?: string | null;
	executionResults?: CodeExecutionResultMap;
	readOnly?: boolean;
	showStreamingCursor?: boolean;
	onAnalyzeResult?: (result: string) => void;
}

const RUNNABLE_LANGUAGES = new Set([
	"python",
	"py",
	"javascript",
	"js",
	"node",
	"bash",
	"sh",
	"shell",
]);

const LANGUAGE_LABEL_MAP: Record<string, string> = {
	python: "Python",
	py: "Python",
	javascript: "JavaScript",
	js: "JavaScript",
	node: "JavaScript",
	bash: "Bash",
	sh: "Shell",
	shell: "Shell",
	text: "Code",
};

function normalizeLanguage(language: string): string {
	return language.trim().toLowerCase();
}

function getLanguageFromClassName(className?: string): string {
	const match = /language-([a-zA-Z0-9_-]+)/.exec(className ?? "");
	return normalizeLanguage(match?.[1] ?? "text");
}

function toPlainText(node: ReactNode): string {
	if (typeof node === "string" || typeof node === "number") {
		return String(node);
	}

	if (Array.isArray(node)) {
		return node.map((item) => toPlainText(item)).join("");
	}

	if (isValidElement(node)) {
		const childNode = (node.props as { children?: ReactNode }).children;
		return toPlainText(childNode ?? "");
	}

	return "";
}

function extractCodeBlock(children: ReactNode): { language: string; code: string } | null {
	const firstChild = Children.toArray(children)[0];
	if (!isValidElement(firstChild)) {
		return null;
	}

	const codeElement = firstChild as ReactElement<{ className?: string; children?: ReactNode }>;
	const language = getLanguageFromClassName(codeElement.props.className);
	const rawCode = toPlainText(codeElement.props.children ?? "");
	const code = rawCode.replace(/\n$/, "");

	return {
		language,
		code,
	};
}

function simpleHash(str: string): string {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const ch = str.charCodeAt(i);
		hash = ((hash << 5) - hash + ch) | 0;
	}
	return (hash >>> 0).toString(36);
}

export function ChatMarkdown({
	content,
	conversationId,
	messageId,
	executionResults,
	readOnly = false,
	showStreamingCursor = false,
	onAnalyzeResult,
}: ChatMarkdownProps) {
	const markdownComponents = useMemo<Components>(
		() => ({
			h1: ({ children }) => (
				<h1 className="mt-4 text-[21px] font-semibold leading-[1.35] text-foreground">
					{children}
				</h1>
			),
			h2: ({ children }) => (
				<h2 className="mt-4 text-[19px] font-semibold leading-[1.4] text-foreground">{children}</h2>
			),
			h3: ({ children }) => (
				<h3 className="mt-3 text-[17px] font-semibold leading-[1.45] text-foreground">
					{children}
				</h3>
			),
			p: ({ children }) => (
				<p className="my-2 text-[14px] leading-[1.65] text-foreground">{children}</p>
			),
			ul: ({ children }) => (
				<ul className="my-2 list-disc space-y-1 pl-6 text-[14px] leading-[1.6] text-foreground">
					{children}
				</ul>
			),
			ol: ({ children }) => (
				<ol className="my-2 list-decimal space-y-1 pl-6 text-[14px] leading-[1.6] text-foreground">
					{children}
				</ol>
			),
			li: ({ children }) => <li className="pl-1">{children}</li>,
			blockquote: ({ children }) => (
				<blockquote className="my-3 border-l-[3px] border-[#d0d7de] bg-[#f6f8fa] px-3 py-2 text-[14px] leading-[1.6] text-text-secondary">
					{children}
				</blockquote>
			),
			a: ({ href, children }) => (
				<a
					href={href}
					target="_blank"
					rel="noreferrer"
					className="text-primary underline underline-offset-2 hover:text-[#0969da]"
				>
					{children}
				</a>
			),
			hr: () => <hr className="my-4 border-0 border-t border-[#d0d7de]" />,
			table: ({ children }) => (
				<div className="my-3 overflow-x-auto rounded-[8px] border border-[#d0d7de] bg-white">
					<table className="min-w-full border-collapse text-left text-[13px] leading-[1.55]">
						{children}
					</table>
				</div>
			),
			thead: ({ children }) => <thead className="bg-[#f6f8fa]">{children}</thead>,
			tr: ({ children }) => <tr className="border-b border-[#e5e7eb]">{children}</tr>,
			th: ({ children }) => (
				<th className="px-3 py-2 font-semibold text-text-secondary">{children}</th>
			),
			td: ({ children }) => <td className="px-3 py-2 align-top text-foreground">{children}</td>,
			pre: ({ children }) => {
				const block = extractCodeBlock(children);
				if (!block) {
					return (
						<pre className="my-3 overflow-x-auto rounded-[12px] border border-[#d0d7de] bg-[#f6f8fa] p-3">
							{children}
						</pre>
					);
				}

				if (readOnly) {
					return (
						<ReadOnlyCodeBlock code={block.code} language={block.language} />
					);
				}

				const codeHash = simpleHash(block.code);
				const savedResult = executionResults?.[codeHash];
				return (
					<RunnableCodeBlock
						code={block.code}
						language={block.language}
						conversationId={conversationId}
						messageId={messageId}
						savedResult={savedResult}
						onAnalyzeResult={onAnalyzeResult}
					/>
				);
			},
			code: ({ children }) => (
				<code className="rounded-[4px] bg-[#eaeef2] px-1 py-0.5 font-mono text-[13px] text-[#1f2937]">
					{children}
				</code>
			),
		}),
		[conversationId, messageId, executionResults, readOnly, onAnalyzeResult],
	);

	return (
		<div className="chat-markdown max-w-none min-w-0 break-words text-[14px] leading-[1.55] text-foreground [overflow-wrap:anywhere]">
			<Markdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
				{content}
			</Markdown>
			{showStreamingCursor && (
				<span className="inline-block h-[16px] w-[6px] animate-pulse rounded-sm bg-primary/60 align-middle" />
			)}
		</div>
	);
}

function ReadOnlyCodeBlock({ code, language }: { code: string; language: string }) {
	const normalizedLanguage = normalizeLanguage(language);
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		if (typeof navigator === "undefined" || !navigator.clipboard) return;
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 1200);
	};

	return (
		<div className="my-3 overflow-hidden rounded-[14px] border border-[#d0d7de] bg-[#f6f8fa]">
			<div className="flex items-center justify-between border-b border-[#d0d7de] px-3 py-2">
				<span className="text-[14px] font-semibold text-text-secondary">
					{RUNNABLE_LANGUAGES.has(normalizedLanguage) ? "运行结果" : "Code"}
				</span>
				<button
					type="button"
					onClick={handleCopy}
					className="inline-flex h-[28px] items-center gap-1 rounded-full border border-[#d0d7de] bg-white px-3 text-[12px] font-semibold text-text-secondary hover:bg-[#f8fafc]"
				>
					{copied ? <Check size={14} /> : <Copy size={14} />}
					{copied ? "已复制" : "复制"}
				</button>
			</div>
			<pre className="overflow-x-auto bg-transparent px-3 py-3 font-mono text-[15px] leading-[1.5] text-[#1f2328]">
				<code>{code}</code>
			</pre>
		</div>
	);
}

function RunnableCodeBlock({
	code,
	language,
	conversationId,
	messageId,
	savedResult,
	onAnalyzeResult,
}: {
	code: string;
	language: string;
	conversationId?: string | null;
	messageId?: string | null;
	savedResult?: { output: string | null; exitCode: number | null; error: string | null };
	onAnalyzeResult?: (result: string) => void;
}) {
	const [editableCode, setEditableCode] = useState(code);
	const [isEditing, setIsEditing] = useState(false);
	const [isRunning, setIsRunning] = useState(false);
	const [result, setResult] = useState<string | null>(savedResult?.output ?? null);
	const [runError, setRunError] = useState<string | null>(savedResult?.error ?? null);
	const [exitCode, setExitCode] = useState<number | null>(savedResult?.exitCode ?? null);
	const [copied, setCopied] = useState(false);

	const normalizedLanguage = normalizeLanguage(language);
	const canRun = !!conversationId && RUNNABLE_LANGUAGES.has(normalizedLanguage);
	const languageLabel = LANGUAGE_LABEL_MAP[normalizedLanguage] ?? normalizedLanguage.toUpperCase();

	useEffect(() => {
		setEditableCode(code);
		setIsEditing(false);
		setResult(savedResult?.output ?? null);
		setRunError(savedResult?.error ?? null);
		setExitCode(savedResult?.exitCode ?? null);
	}, [code, savedResult]);

	const handleCopy = async () => {
		if (typeof navigator === "undefined" || !navigator.clipboard) {
			return;
		}
		await navigator.clipboard.writeText(editableCode);
		setCopied(true);
		setTimeout(() => setCopied(false), 1200);
	};

	const handleRun = async () => {
		if (!conversationId) {
			setRunError("请先创建会话后再运行代码。");
			return;
		}
		if (!RUNNABLE_LANGUAGES.has(normalizedLanguage)) {
			setRunError("当前代码语言暂不支持运行。");
			return;
		}

		setIsRunning(true);
		setRunError(null);

		try {
			const runResult = await sandboxApi.executeCode(conversationId, {
				language: normalizedLanguage,
				code: editableCode,
			});
			setResult(runResult.output);
			setExitCode(runResult.exitCode);
			// Persist to server if we have a messageId
			if (messageId) {
				const codeHash = simpleHash(code);
				messagesApi
					.saveExecutionResult(conversationId, messageId, {
						codeHash,
						output: runResult.output,
						exitCode: runResult.exitCode,
						error: null,
					})
					.catch((err) => console.error("Failed to persist execution result:", err));
			}
		} catch (error) {
			const errMsg = error instanceof Error ? error.message : "运行失败";
			setRunError(errMsg);
			if (messageId) {
				const codeHash = simpleHash(code);
				messagesApi
					.saveExecutionResult(conversationId, messageId, {
						codeHash,
						output: null,
						exitCode: null,
						error: errMsg,
					})
					.catch((err) => console.error("Failed to persist execution result:", err));
			}
		} finally {
			setIsRunning(false);
		}
	};

	return (
		<div className="my-3 overflow-hidden rounded-[14px] border border-[#d0d7de] bg-[#f6f8fa]">
			<div className="flex items-center justify-between border-b border-[#d0d7de] px-3 py-2">
				<span className="text-[14px] font-semibold text-text-secondary">{languageLabel} 示例</span>
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => setIsEditing((prev) => !prev)}
						className="inline-flex h-[28px] items-center gap-1 rounded-full border border-[#d0d7de] bg-white px-3 text-[12px] font-semibold text-text-secondary hover:bg-[#f8fafc]"
					>
						{isEditing ? <X size={14} /> : <Pencil size={14} />}
						{isEditing ? "完成" : "编辑"}
					</button>
					<button
						type="button"
						onClick={handleCopy}
						className="inline-flex h-[28px] items-center gap-1 rounded-full border border-[#d0d7de] bg-white px-3 text-[12px] font-semibold text-text-secondary hover:bg-[#f8fafc]"
					>
						{copied ? <Check size={14} /> : <Copy size={14} />}
						{copied ? "已复制" : "复制"}
					</button>
					<button
						type="button"
						onClick={handleRun}
						disabled={!canRun || isRunning}
						className="inline-flex h-[28px] items-center gap-1 rounded-full bg-primary px-3 text-[12px] font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#9fbce8]"
					>
						{isRunning ? <LoaderCircle size={14} className="animate-spin" /> : <Play size={14} />}
						{isRunning ? "运行中" : "运行"}
					</button>
				</div>
			</div>
			{isEditing ? (
				<textarea
					value={editableCode}
					onChange={(e) => setEditableCode(e.target.value)}
					spellCheck={false}
					className="min-h-[140px] w-full resize-y border-0 bg-transparent px-3 py-3 font-mono text-[15px] leading-[1.5] text-[#1f2328] outline-none"
				/>
			) : (
				<pre className="overflow-x-auto bg-transparent px-3 py-3 font-mono text-[15px] leading-[1.5] text-[#1f2328]">
					<code>{editableCode}</code>
				</pre>
			)}
			{(result !== null || runError) && (
				<div className="border-t border-[#d0d7de] bg-white px-3 py-2">
					<div className="mb-1 flex items-center justify-between">
						<p className="text-[12px] font-semibold text-text-secondary">
							运行结果{exitCode !== null ? `（Exit ${exitCode}）` : ""}
						</p>
						{result && onAnalyzeResult && (
							<button
								type="button"
								onClick={() => onAnalyzeResult(result)}
								className="inline-flex items-center gap-1 rounded-full border border-[#d0d7de] bg-white px-2.5 py-1 text-[11px] font-semibold text-text-secondary hover:bg-[#f6f8fa]"
							>
								<Sparkles size={12} />
								分析结果
							</button>
						)}
					</div>
					<pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-[1.5] text-foreground">
						{runError ?? result}
					</pre>
				</div>
			)}
		</div>
	);
}
