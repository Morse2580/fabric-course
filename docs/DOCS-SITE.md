# Publishing this course as a clean documentation site

You asked for a site **cleaner than the Microsoft Fabric docs browser** — one where a developer who knows *nothing* can land, read top-to-bottom, and immediately start building Fabric the right way. This page explains the recommendation, the trade-offs, and exactly how to run it. The site is **already scaffolded** in this folder (`mkdocs.yml`, `requirements.txt`, `index.md`, and a GitHub Action) — you can serve it in two commands.

## Recommendation: MkDocs Material (primary) — Astro Starlight (premium alternative)

| Generator | Why for this course | Trade-off |
|---|---|---|
| **✅ MkDocs Material** | Zero-friction from the **existing flat Markdown**; gorgeous clean default theme; built-in **search, dark mode, Mermaid, code-copy, admonitions**; **YAML** config (no JS); Python-native (fits a data-engineering audience); every premium feature is now free. | Core MkDocs is in slow maintenance; no MDX/React components. |
| **Astro Starlight** | The cleanest *modern* theme; ships **< 50 KB JS/page**; sidebar/TOC/search/dark-mode/i18n out of the box; MDX for interactive components. | Needs content under `src/content/docs/` (a small restructure of these files); versioning isn't native. |
| Docusaurus | Largest plugin ecosystem; mature **versioning**; MDX + Algolia search. | Heavier; multi-file JS config; React learning curve. Overkill here. |
| Mintlify | Beautiful **managed/hosted** docs; API playground; generous free tier. | SaaS (not self-hosted); less control; best for product/API docs. |

**Why MkDocs Material wins here:** your content is already clean Markdown with Mermaid fenced blocks and flat relative links. Material renders all of it **as-is** with a world-class reading experience and the smallest possible setup — which is exactly "a dev who knows nothing can immediately start." Pick **Starlight** instead only if you want the most minimal modern aesthetic and don't mind moving the `.md` files into `src/content/docs/`.

> Comparisons drawn from: [Starlight Docs review 2026 (Docsio)](https://docsio.co/blog/starlight-docs) · [Docusaurus vs MkDocs 2026 (Docsio)](https://docsio.co/blog/docusaurus-vs-mkdocs) · [Docusaurus alternatives 2026 (HeroThemes)](https://herothemes.com/blog/docusaurus-alternatives/) · [Alternatives to Docusaurus (Hackmamba)](https://hackmamba.io/technical-documentation/alternatives-to-docusaurus-for-software-product-documentation/) · [A flight of static site generators (Just Write Click)](https://justwriteclick.com/2025/02/06/a-flight-of-static-site-generators-sampling-the-best-for-documentation/)

## Run it locally (2 commands)

```bash
cd fabric-course
pip install -r requirements.txt
mkdocs serve            # live-reload preview at http://127.0.0.1:8000
```

## Publish to GitHub Pages

- **Automatic:** push to `main` — the included action (`.github/workflows/deploy-docs.yml`) builds and deploys. One-time: repo **Settings → Pages → Source = GitHub Actions**.
- **Manual:** `mkdocs gh-deploy`.

Other hosts: `mkdocs build` produces a static `site/` folder you can drop on **Netlify, Vercel, Azure Static Web Apps, Cloudflare Pages, or any static host**.

## What's already configured (`mkdocs.yml`)

- Clean **Inter/JetBrains Mono** typography, indigo theme, **light/dark toggle**.
- **Mermaid** diagrams render automatically (Material superfences).
- **Instant navigation**, top tabs, section grouping, **client-side search**, **code-copy** buttons.
- A curated **nav** grouping the 15 modules into *Foundations → Engineering → Analytics & BI → Operate → Reference*.
- `index.md` is a purpose-built **landing page** with role-based "start here" cards and the four-big-decisions table.

## To make it truly "better than the Fabric browser"

1. **The inline _“In the Fabric portal”_ callouts** give every UI step as an exact click-path, so a brand-new dev can do it live in Fabric instead of squinting at a screenshot.
2. **Keep the diagram notation consistent** ([DIAGRAM-CONVENTIONS.md](DIAGRAM-CONVENTIONS.md)) — one visual language across the whole site.
3. **Enable the optional plugins** in `requirements.txt` (minify + "last updated" stamps) for polish.
4. Consider a short **"Day 1" path** callout on the homepage so a brand-new dev knows the exact 5 pages to read before touching Fabric (00 → 01 → 02 → 03 → 04).
