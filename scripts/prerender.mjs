// Build-time prerender of the landing page so its content is in the served HTML
// (crawlers, social scrapers and no-JS clients see real content, not an empty <div>).
// Run automatically by `yarn build`, after the client and SSR bundles are built.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const MARK = '<div id="root"></div>';
if (!template.includes(MARK)) throw new Error("prerender: root placeholder not found in dist/index.html");

// Untouched shell for client-rendered routes (/blog, /blog/*). See public/_redirects.
fs.writeFileSync(path.join(dist, "app-shell.html"), template);

const { render } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const html = render("/");
let page = template.replace(MARK, `<div id="root">${html}</div>`);

// Inline the (small) stylesheet into the prerendered home page so first paint is not blocked by a
// second request. Client-rendered routes keep the normal <link> (they use app-shell.html).
const cssLink = page.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
if (cssLink) {
  const css = fs.readFileSync(path.join(dist, cssLink[1]), "utf8");
  if (css.length < 60_000 && !css.includes("</style")) page = page.replace(cssLink[0], () => `<style>${css}</style>`);
}
fs.writeFileSync(path.join(dist, "index.html"), page);
console.log(`prerender: / -> dist/index.html (${html.length} bytes of markup)`);
