import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const isProd = process.env.NODE_ENV === "production";

const app = new Hono()
	.basePath("/api")
	.use(
		cors({
			origin: isProd ? "" : "http://localhost:4000",
		}),
	)
	.get("/", (c) => c.text("Hello from Hono server!"));

const port = 3000;
console.log(`Running at http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port,
});

export type HonoApp = typeof app;
