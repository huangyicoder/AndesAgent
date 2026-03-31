import AdmZip from "adm-zip";
import matter from "gray-matter";
import { mkdir, readFile, readdir, rename, rm, stat } from "node:fs/promises";
import path from "node:path";

const MAX_ZIP_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_EXTRACTED_SIZE = 100 * 1024 * 1024; // 100MB

export interface SkillMetadata {
	name: string;
	description: string;
	author: string | null;
	license: string | null;
}

/**
 * 解压 skill zip 到目标目录。
 * 处理嵌套单目录情况：如果 zip 内只有一个顶层文件夹，自动展平。
 */
export async function extractSkillZip(
	zipBuffer: Buffer,
	targetDir: string,
): Promise<void> {
	const zip = new AdmZip(zipBuffer);
	const entries = zip.getEntries();

	// 校验解压后总大小
	let totalSize = 0;
	for (const entry of entries) {
		totalSize += entry.header.size;
	}
	if (totalSize > MAX_EXTRACTED_SIZE) {
		throw new Error(`解压后总大小超过限制 (${Math.round(MAX_EXTRACTED_SIZE / 1024 / 1024)}MB)`);
	}

	// 解压到目标目录
	await mkdir(targetDir, { recursive: true });
	zip.extractAllTo(targetDir, true);

	// 处理嵌套单目录：如果 targetDir 下只有一个子目录且无文件，展平它
	await flattenSingleSubdir(targetDir);
}

/**
 * 如果目录下只有一个子目录（没有其他文件），将子目录内容提升到父目录。
 */
async function flattenSingleSubdir(dir: string): Promise<void> {
	const items = await readdir(dir, { withFileTypes: true });
	// 过滤掉 macOS 的 __MACOSX 目录
	const filtered = items.filter((i) => i.name !== "__MACOSX" && !i.name.startsWith("."));

	if (filtered.length === 1 && filtered[0].isDirectory()) {
		const subDir = path.join(dir, filtered[0].name);
		const subItems = await readdir(subDir);
		// 将子目录内容移到父目录
		for (const item of subItems) {
			await rename(path.join(subDir, item), path.join(dir, item));
		}
		// 删除空子目录
		await rm(subDir, { recursive: true });
		// 清理 __MACOSX
		const macosDir = path.join(dir, "__MACOSX");
		await rm(macosDir, { recursive: true, force: true });
	}
}

/**
 * 解析 SKILL.md 的 YAML frontmatter，返回元数据。
 */
export async function parseSkillMd(dirPath: string): Promise<SkillMetadata> {
	const skillMdPath = path.join(dirPath, "SKILL.md");
	const content = await readFile(skillMdPath, "utf-8");
	const { data } = matter(content);

	const name = data.name as string | undefined;
	if (!name) {
		throw new Error("SKILL.md 缺少必填的 frontmatter 字段: name");
	}

	return {
		name,
		description: (data.description as string) ?? "",
		author: (data.metadata?.author as string) ?? (data.author as string) ?? null,
		license: (data.license as string) ?? null,
	};
}

/**
 * 校验 skill 目录：SKILL.md 必须存在。
 */
export async function validateSkillDir(dirPath: string): Promise<void> {
	const skillMdPath = path.join(dirPath, "SKILL.md");
	try {
		await stat(skillMdPath);
	} catch {
		throw new Error("技能包中缺少 SKILL.md 文件");
	}
}

/**
 * 递归列出目录下所有文件的相对路径。
 */
export async function listSkillFiles(dirPath: string): Promise<string[]> {
	const files: string[] = [];

	async function walk(dir: string, prefix: string) {
		const items = await readdir(dir, { withFileTypes: true });
		for (const item of items) {
			const relativePath = prefix ? `${prefix}/${item.name}` : item.name;
			if (item.isDirectory()) {
				await walk(path.join(dir, item.name), relativePath);
			} else {
				files.push(relativePath);
			}
		}
	}

	await walk(dirPath, "");
	return files.sort();
}

/**
 * 校验上传的 zip 文件。
 */
export function validateZipFile(file: File): void {
	if (file.size > MAX_ZIP_SIZE) {
		throw new Error(`文件大小超过限制 (${Math.round(MAX_ZIP_SIZE / 1024 / 1024)}MB)`);
	}

	const name = file.name.toLowerCase();
	if (!name.endsWith(".zip")) {
		throw new Error("仅支持 .zip 格式的文件");
	}
}
