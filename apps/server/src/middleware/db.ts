import { existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { type Db, createDb } from "@nano-agent/db";
import type { MiddlewareHandler } from "hono";

let db: Db | null = null;

function getDb(): Db {
	if (db) return db;

	const dbPath = process.env.DATABASE_URL ?? resolve(process.cwd(), "../../data/nano-agent.db");
	const dir = resolve(dbPath, "..");
	if (!existsSync(dir)) {
		mkdirSync(dir, { recursive: true });
	}

	db = createDb(dbPath);
	return db;
}

declare module "hono" {
	interface ContextVariableMap {
		db: Db;
	}
}

export const dbMiddleware: MiddlewareHandler = async (c, next) => {
	c.set("db", getDb());
	return next();
};
