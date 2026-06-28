# Mastering Microsoft Fabric — Overview Deck (Slidev)

A ~30-slide overview presentation built with [Slidev](https://sli.dev), derived from the course
and structured like Microsoft's *Fabric Readiness — Introducing Unified Analytics* session.
Slides are plain Markdown in `slides.md` (Mermaid diagrams + code render natively).

## Run / present
```bash
cd slides
npm install
npm run dev        # live presenter at http://localhost:3030 (press F for fullscreen, P for presenter)
```

## Export
```bash
npm run build         # static HTML site -> slides/dist/ (host anywhere)
npm run export        # -> slides-export.pdf   (needs: npx playwright install chromium)
npm run export-pptx   # -> editable PowerPoint (.pptx)
```

## Edit
- One `---` separates slides; per-slide options (e.g. `layout: section`) go in the YAML block after a separator.
- Speaker notes: add `<!-- note text -->` at the end of a slide.
- Theme is `@slidev/theme-seriph`; change `theme:` in the headmatter to restyle.
