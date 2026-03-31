import { serve } from "@hono/node-server";
import { app } from "./app.js";

const port = Number(process.env.PORT ?? 3000);

function startServer(retries = 5, delay = 500) {
	const server = serve({
		fetch: app.fetch,
		port,
	});

	server.on("listening", () => {
		console.log(`Server running on http://localhost:${port}`);
	});

	server.on("error", (err: NodeJS.ErrnoException) => {
		if (err.code === "EADDRINUSE" && retries > 0) {
			console.log(`Port ${port} in use, retrying in ${delay}ms... (${retries} left)`);
			setTimeout(() => startServer(retries - 1, delay), delay);
		} else {
			console.error(err);
			process.exit(1);
		}
	});
}

startServer();
