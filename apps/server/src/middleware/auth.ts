import type { MiddlewareHandler } from "hono";

export const authMiddleware: MiddlewareHandler = async (c, next) => {
	const apiKey = process.env.API_KEY;

	// If no API_KEY is set, skip auth
	if (!apiKey) {
		return next();
	}

	const authHeader = c.req.header("Authorization");
	if (!authHeader || authHeader !== `Bearer ${apiKey}`) {
		return c.json({ error: "Unauthorized" }, 401);
	}

	return next();
};
