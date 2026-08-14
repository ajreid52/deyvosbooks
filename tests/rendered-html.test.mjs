import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Deyvos homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>AJ Reid \| Shadow of the Beast<\/title>/i);
  assert.match(html, />Shadow of<br\/>the Beast</i);
  assert.match(html, /href="\/books">Books<\/a>/i);
  assert.match(html, /Join Deyvos Letters/i);
  assert.doesNotMatch(html, /Building your site|codex-preview/i);
});

test("server-renders the Books catalog", async () => {
  const response = await render("/books");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Books of Deyvos \| AJ Reid<\/title>/i);
  assert.match(html, /Books of<br\/>Deyvos/i);
  assert.match(html, /Shadow of the Beast/i);
  assert.match(html, /Currently in editing/i);
  assert.match(html, /Future books in Deyvos will join the shelf here/i);
});
