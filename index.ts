import { $ } from "bun";

const server = Bun.serve({
  port: 80,
  async fetch(req, server) {
    const path = new URL(req.url).pathname;
    const args = path.split("/").slice(1);

    const file = Bun.file(`react/dist/${path}`);
    if (await file.exists()) return new Response(file);

    try {
      return new Response(Bun.file("react/dist/index.html"));
    } catch {
      // @ts-expect-error type trolling me.
      return Response.redirect("Something went wrong, please try again", { status: 500 });
    }
  },
});

console.log(`server running on ${server.hostname}:${server.port}`);
