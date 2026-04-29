import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const host = process.env.HOST || "127.0.0.1";
const startingPort = process.env.PORT ? Number(process.env.PORT) : 4173;
const rootDir = fileURLToPath(new URL(".", import.meta.url));

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

startServer(startingPort);

function startServer(port) {
  const server = createAppServer();

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.warn(`Port ${port} is busy, trying ${port + 1}...`);
      startServer(port + 1);
      return;
    }

    throw error;
  });

  server.listen(port, host, () => {
    console.log(`Resume Checkmark Maker running at http://${host}:${port}`);
  });
}

function createAppServer() {
  return createServer((request, response) => {
    const requestPath = new URL(request.url, `http://${request.headers.host}`).pathname;
    const safePath = normalize(requestPath).replace(/^\/+/, "").replace(/^(\.\.[/\\])+/, "");
    const filePath = requestPath === "/" ? join(rootDir, "index.html") : join(rootDir, safePath);

    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
      "Cache-Control": "no-store",
    });

    createReadStream(filePath).pipe(response);
  });
}
