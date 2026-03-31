import { randomUUID } from "node:crypto";
import { access, cp, mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { type ExecuteResponse, LocalShellBackend } from "deepagents";

type SupportedLanguage = "python" | "javascript" | "bash";

interface ExecuteCodeInput {
	conversationId: string;
	language: string;
	code: string;
}

interface ExecuteCodeResult extends ExecuteResponse {
	language: SupportedLanguage;
	command: string;
}

interface TemplateMarker {
	templateDir: string | null;
	templateName: string;
	appliedAt: string;
}

const REPO_ROOT_DIR = fileURLToPath(new URL("../../../../", import.meta.url));
const SANDBOX_ROOT_DIR = path.join(REPO_ROOT_DIR, "data", "sandboxes");
const TEMPLATE_ROOT_DIR = path.join(REPO_ROOT_DIR, "data", "sandbox-templates");
const DEFAULT_TEMPLATE_NAME = "python-base";
const WORKSPACE_TEMPLATE_MARKER = ".template-applied.json";
// NOTE:
// Andes scripts may incur significant cold-start cost on the first run in a
// fresh conversation sandbox (model/codegen initialization). A 20s timeout is
// too aggressive and causes false-negative timeouts on first execution.
const DEFAULT_COMMAND_TIMEOUT_SEC = 120;
const DEFAULT_MAX_OUTPUT_BYTES = 150_000;

const LANGUAGE_ALIAS_MAP: Record<string, SupportedLanguage> = {
	python: "python",
	py: "python",
	javascript: "javascript",
	js: "javascript",
	node: "javascript",
	bash: "bash",
	sh: "bash",
	shell: "bash",
	zsh: "bash",
};

const LANGUAGE_RUNTIME: Record<
	SupportedLanguage,
	{ extension: string; buildCommand: (fileName: string) => string }
> = {
	python: {
		extension: "py",
		buildCommand: (fileName) =>
			`if [ -x ./.venv/bin/python ]; then ./.venv/bin/python '${fileName}'; elif command -v python3 >/dev/null 2>&1; then python3 '${fileName}'; elif command -v python >/dev/null 2>&1; then python '${fileName}'; else echo 'Python runtime not found.'; exit 127; fi`,
	},
	javascript: {
		extension: "js",
		buildCommand: (fileName) =>
			`if command -v node >/dev/null 2>&1; then node '${fileName}'; else echo 'Node.js runtime not found.'; exit 127; fi`,
	},
	bash: {
		extension: "sh",
		buildCommand: (fileName) => `bash '${fileName}'`,
	},
};

class CodeSandboxService {
	private readonly backends = new Map<string, LocalShellBackend>();
	private readonly creatingBackends = new Map<string, Promise<LocalShellBackend>>();

	private sanitizeConversationId(conversationId: string): string {
		const sanitized = conversationId.replace(/[^a-zA-Z0-9_-]/g, "_");
		return sanitized.length > 0 ? sanitized : "default";
	}

	/** Returns the sandbox workspace directory path for a conversation. */
	getWorkspaceDirForConversation(conversationId: string): string {
		const key = this.sanitizeConversationId(conversationId);
		return this.getWorkspaceDir(key);
	}

	/** Ensures the sandbox workspace directory exists (creates if needed). */
	async ensureWorkspaceDir(conversationId: string): Promise<string> {
		const dir = this.getWorkspaceDirForConversation(conversationId);
		await mkdir(dir, { recursive: true });
		return dir;
	}

	private normalizeLanguage(language: string): SupportedLanguage | null {
		const normalized = language.trim().toLowerCase();
		return LANGUAGE_ALIAS_MAP[normalized] ?? null;
	}

	private async pathExists(targetPath: string): Promise<boolean> {
		try {
			await access(targetPath);
			return true;
		} catch {
			return false;
		}
	}

	private getTemplateDir() {
		const explicitDir = process.env.LOCAL_SANDBOX_TEMPLATE_DIR?.trim();
		if (explicitDir) {
			return path.resolve(explicitDir);
		}

		const templateName = process.env.LOCAL_SANDBOX_TEMPLATE_NAME?.trim() || DEFAULT_TEMPLATE_NAME;
		return path.join(TEMPLATE_ROOT_DIR, templateName);
	}

	private getWorkspaceDir(conversationKey: string) {
		const root = process.env.LOCAL_SANDBOX_ROOT_DIR?.trim();
		const sandboxRoot = root ? path.resolve(root) : SANDBOX_ROOT_DIR;
		return path.join(sandboxRoot, conversationKey);
	}

	private parsePositiveInt(value: string | undefined, fallback: number): number {
		if (!value) {
			return fallback;
		}

		const parsed = Number.parseInt(value, 10);
		if (!Number.isFinite(parsed) || parsed <= 0) {
			return fallback;
		}

		return parsed;
	}

	private async applyTemplateToWorkspace(workspaceDir: string): Promise<void> {
		await mkdir(workspaceDir, { recursive: true });

		const markerPath = path.join(workspaceDir, WORKSPACE_TEMPLATE_MARKER);
		if (await this.pathExists(markerPath)) {
			return;
		}

		const templateDir = this.getTemplateDir();
		const templateName = path.basename(templateDir);
		const templateExists = await this.pathExists(templateDir);

		if (templateExists) {
			const templateItems = await readdir(templateDir);
			for (const item of templateItems) {
				await cp(path.join(templateDir, item), path.join(workspaceDir, item), {
					recursive: true,
					force: false,
					errorOnExist: false,
					verbatimSymlinks: true,
				});
			}
		}

		const marker: TemplateMarker = {
			templateDir: templateExists ? templateDir : null,
			templateName,
			appliedAt: new Date().toISOString(),
		};
		await writeFile(markerPath, JSON.stringify(marker, null, 2), "utf8");
	}

	private async createBackend(conversationKey: string): Promise<LocalShellBackend> {
		const workspaceDir = this.getWorkspaceDir(conversationKey);
		await this.applyTemplateToWorkspace(workspaceDir);

		const timeoutSec = this.parsePositiveInt(
			process.env.LOCAL_SANDBOX_COMMAND_TIMEOUT_SEC,
			DEFAULT_COMMAND_TIMEOUT_SEC,
		);
		const maxOutputBytes = this.parsePositiveInt(
			process.env.LOCAL_SANDBOX_MAX_OUTPUT_BYTES,
			DEFAULT_MAX_OUTPUT_BYTES,
		);

		const localPath = process.env.PATH ?? "";
		const venvPath = path.join(workspaceDir, ".venv", "bin");
		const backend = await LocalShellBackend.create({
			rootDir: workspaceDir,
			virtualMode: true,
			inheritEnv: true,
			timeout: timeoutSec,
			maxOutputBytes,
			env: {
				PATH: localPath ? `${venvPath}:${localPath}` : venvPath,
				VIRTUAL_ENV: path.join(workspaceDir, ".venv"),
			},
		});
		return backend;
	}

	private async getBackendByKey(conversationKey: string): Promise<LocalShellBackend> {
		const existing = this.backends.get(conversationKey);
		if (existing) {
			return existing;
		}

		const creating = this.creatingBackends.get(conversationKey);
		if (creating) {
			return creating;
		}

		const createPromise = this.createBackend(conversationKey)
			.then((backend) => {
				this.backends.set(conversationKey, backend);
				return backend;
			})
			.finally(() => {
				this.creatingBackends.delete(conversationKey);
			});
		this.creatingBackends.set(conversationKey, createPromise);

		return createPromise;
	}

	private async runWithConversationSandbox<T>(
		conversationId: string,
		action: (sandbox: LocalShellBackend) => Promise<T>,
	): Promise<T> {
		const key = this.sanitizeConversationId(conversationId);
		const backend = await this.getBackendByKey(key);
		return action(backend);
	}

	async getBackendForConversation(conversationId: string): Promise<LocalShellBackend> {
		const key = this.sanitizeConversationId(conversationId);
		return this.getBackendByKey(key);
	}

	async closeConversationSandbox(conversationId: string): Promise<void> {
		const key = this.sanitizeConversationId(conversationId);

		const creating = this.creatingBackends.get(key);
		if (creating) {
			this.creatingBackends.delete(key);
			try {
				const backend = await creating;
				await backend.close();
			} catch {
				// no-op
			}
		}

		const existing = this.backends.get(key);
		if (!existing) {
			return;
		}

		this.backends.delete(key);
		await existing.close().catch(() => undefined);
	}

	async closeAllSandboxes(): Promise<void> {
		const keys = Array.from(this.backends.keys());
		await Promise.all(keys.map((key) => this.closeConversationSandbox(key)));
	}

	async executeCode(input: ExecuteCodeInput): Promise<ExecuteCodeResult> {
		const language = this.normalizeLanguage(input.language);
		if (!language) {
			throw new Error(`Unsupported language: ${input.language}`);
		}

		const runtime = LANGUAGE_RUNTIME[language];
		const fileName = `snippet-${Date.now()}-${randomUUID().slice(0, 8)}.${runtime.extension}`;
		const filePath = `/${fileName}`;
		const command = runtime.buildCommand(fileName);

		return this.runWithConversationSandbox(input.conversationId, async (sandbox) => {
			const writeResult = await sandbox.write(filePath, input.code);
			if (writeResult.error) {
				throw new Error(writeResult.error);
			}

			const result = await sandbox.execute(command);

			return {
				...result,
				language,
				command,
			};
		});
	}
}

export const codeSandboxService = new CodeSandboxService();
