import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { guideGroups, pages, sources } from "../src/site-data.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");
const siteOrigin = (process.env.SITE_ORIGIN || "https://dawnwalker-field-guide-scys.vercel.app").replace(/\/$/, "");
const bySlug = Object.fromEntries(pages.map((page) => [page.slug, page]));

const esc = (value) => String(value).replace(/[&<>\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
const pathFor = (slug = "") => slug ? `/${slug}/` : "/";

function layout({ title, description, body, current = "" }) {
  const nav = `
    <header class="site-header">
      <div class="shell nav">
        <a class="brand" href="/"><span class="brand-mark" aria-hidden="true"></span>Dawnwalker Field Guide</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-label="Open navigation">Menu</button>
        <nav class="nav-links" aria-label="Primary navigation">
          <a href="/guides/">Guides</a><a href="/release-date/">Release</a><a href="/pc-requirements/">PC</a><a href="/vampire-powers/">Vampire powers</a>
        </nav>
      </div>
    </header>`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${siteOrigin}${pathFor(current)}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>${nav}${body}
  <footer class="footer"><div class="shell footer-grid"><p>Dawnwalker Field Guide · Independent, source-linked reference.</p><p>Fact check: August 26, 2026 · Not affiliated with Rebel Wolves or Bandai Namco.</p></div></footer>
  <script src="/assets/app.js" defer></script>
</body>
</html>`;
}

function sourceList(keys) {
  return `<aside class="source-box" aria-label="Sources"><h2>Sources</h2><ul>${keys.map((key) => `<li><a href="${sources[key].url}" rel="noreferrer">${esc(sources[key].label)}</a></li>`).join("")}</ul><small>Links support the claims on this page. Unknowns remain labeled as unknown.</small></aside>`;
}

function renderPage(page) {
  const body = `<main>
    <section class="hero"><div class="shell"><p class="eyebrow">${esc(page.eyebrow)}</p><h1>${esc(page.title)}</h1><div class="answer-box"><strong>${esc(page.status)}</strong><p>${esc(page.answer)}</p></div></div></section>
    <section class="section"><div class="shell article"><article class="prose">${page.sections.map(([heading, copy]) => `<section><h2>${esc(heading)}</h2><p>${esc(copy)}</p></section>`).join("")}<div class="notice">This pre-release page separates official facts from unresolved questions. It will not invent hands-on results before the game is available.</div></article>${sourceList(page.sourceKeys)}</div></section>
  </main>`;
  return layout({ title: page.title, description: page.description, body, current: page.slug });
}

function renderGuides() {
  const groups = guideGroups.map(([title, slugs]) => `<section class="section"><div class="shell"><div class="section-head"><h2>${esc(title)}</h2><p>Each page answers one search question and links the official evidence used.</p></div><div class="card-grid">${slugs.map((slug) => { const p = bySlug[slug]; return `<a class="card" href="/${p.slug}/"><span class="kicker">${esc(p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.answer)}</p></a>`; }).join("")}</div></div></section>`).join("");
  const body = `<main><section class="hero"><div class="shell"><p class="eyebrow">Guide hub</p><h1>Answers with an evidence boundary.</h1><p class="hero-copy">Browse confirmed release details, gameplay systems and the questions that official sources cannot yet answer.</p></div></section>${groups}</main>`;
  return layout({ title: "The Blood of Dawnwalker Guides & Confirmed Answers", description: "Browse source-backed The Blood of Dawnwalker guides for release, gameplay, systems, characters and pre-release unknowns.", body, current: "guides" });
}

function renderHome() {
  const featured = ["release-date", "gameplay-open-world", "time-limit", "pc-requirements", "multiplayer-coop", "vampire-powers"].map((slug) => bySlug[slug]);
  const body = `<main>
    <section class="hero"><div class="shell"><p class="eyebrow">Unofficial · source-linked · pre-release</p><h1>Walk the line between daylight and blood.</h1><p class="hero-copy">A focused field guide to The Blood of Dawnwalker—built from official sources, with every unknown labeled instead of guessed.</p><div class="cta-row"><a class="button primary" href="/guides/">Explore all guides</a><a class="button" href="${sources.official.url}">Visit official site</a></div><div class="status-strip"><div><strong>September 3, 2026</strong><span>Official release date</span></div><div><strong>PS5 · Xbox Series · PC</strong><span>Confirmed platforms</span></div><div><strong>Single-player RPG</strong><span>Official positioning</span></div></div></div></section>
    <section class="section"><div class="shell"><div class="section-head"><h2>Start with what is confirmed</h2><p>Every guide is scoped to a real search question and preserves the boundary between official facts and post-launch unknowns.</p></div><div class="card-grid">${featured.map((p) => `<a class="card" href="/${p.slug}/"><span class="kicker">${esc(p.status)}</span><h3>${esc(p.nav)}</h3><p>${esc(p.answer)}</p></a>`).join("")}</div></div></section>
    <section class="section"><div class="shell article"><article class="prose"><section><h2>What is The Blood of Dawnwalker?</h2><p>The official site describes an open-world dark fantasy action RPG starring Coen, a Dawnwalker who is human by day and vampire by night. Quests, choices and limited time shape his attempt to save his family.</p></section><section><h2>Why this guide is different</h2><p>The game has not launched yet. Instead of publishing imaginary builds, maps or romance routes, this first version answers only what the linked official material can support and records a dated update boundary.</p></section></article>${sourceList(["official", "bandai", "gameplay"])}</div></section>
  </main>`;
  return layout({ title: "The Blood of Dawnwalker Guide — Release, Gameplay & Answers", description: "A source-backed guide to The Blood of Dawnwalker release date, gameplay, PC requirements, time system, characters and vampire powers.", body });
}

await rm(out, { recursive: true, force: true });
await mkdir(join(out, "assets"), { recursive: true });
await cp(join(root, "src/styles.css"), join(out, "assets/styles.css"));
await cp(join(root, "src/app.js"), join(out, "assets/app.js"));
await cp(join(root, "src/favicon.svg"), join(out, "assets/favicon.svg"));

async function writePage(route, html) {
  const folder = route ? join(out, route) : out;
  await mkdir(folder, { recursive: true });
  await writeFile(join(folder, "index.html"), html);
}

await writePage("", renderHome());
await writePage("guides", renderGuides());
for (const page of pages) await writePage(page.slug, renderPage(page));
await writeFile(join(out, "robots.txt"), "User-agent: *\nAllow: /\n");
await writeFile(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["", "guides", ...pages.map((p) => p.slug)].map((slug) => `<url><loc>${siteOrigin}${pathFor(slug)}</loc></url>`).join("")}</urlset>`);

console.log(`Built ${pages.length + 2} pages in ${out}`);
