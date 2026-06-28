# Mastering Microsoft Fabric — A Practitioner's Course

> An end-to-end information framework for **building, organizing, and operating** Microsoft Fabric well — written for **data engineers and analysts** who need to get the maximum value out of the platform.

This is not a feature tour. It is a **decision-and-practice framework**: for every major choice in Fabric (Lakehouse vs. Warehouse, Notebook vs. Spark Job Definition, Import vs. Direct Lake, Power BI vs. paginated reports, how to split workspaces, where to put bronze/silver/gold) the course gives you a **decision rule, a recommended default, and the trade-offs** — then walks you through implementing it with diagrams, screenshots, and hands-on labs.

---

## Who this is for

| Audience | What you'll get |
|---|---|
| **Data engineers** | Lakehouse/Warehouse design, medallion architecture, Spark & notebook patterns, incremental loading, orchestration, CI/CD, capacity & cost control. |
| **Analytics engineers / BI developers** | Semantic models, Direct Lake, star schema, DAX, KPIs/metrics, Power BI + paginated reports, deployment pipelines, RLS/OLS. |
| **Data platform leads / architects** | Workspace topology, domains & data mesh, governance, naming standards, the operating model for a Fabric tenant. |

**Prerequisites:** comfort with SQL; basic Python/PySpark helps for the engineering modules; basic Power BI helps for the BI modules. No prior Fabric experience assumed.

---

## How the course is structured

Each module is a self-contained markdown file with:

- 🎯 **Learning objectives** — what you'll be able to do.
- 📖 **Concepts** — the mental model, explained from first principles.
- 🧭 **Decision frameworks** — tables and flowcharts for "which should I use?".
- 🛠️ **Hands-on lab** — a concrete build you follow along with.
- 🖼️ **Screenshots** — marked `![SCREENSHOT: ...]` placeholders telling you exactly what to capture (see *Producing the screenshots* below).
- 📐 **Diagrams** — Mermaid diagrams you can render in any markdown viewer, VS Code, or a docs site.
- ✅ **Best-practice checklist** — the "do this" summary you can lift into a runbook.
- ⚠️ **Anti-patterns** — the traps to avoid.

---

## Learning path

```
00 · Course Overview & the Fabric Mental Model      ← start here
01 · Platform Foundations (tenant, capacity, items)
02 · Workspaces, Domains & Tenant Organization
03 · OneLake, Lakehouse & Warehouse
04 · Medallion Architecture in Fabric
05 · Data Engineering Compute — Notebooks vs Spark Job Definitions vs Pipelines
06 · Ingestion & Transformation Patterns (incremental load, MERGE, CDC)
07 · Orchestration, Scheduling & Real-Time/Activator
08 · Data Products & the Data Mesh Operating Model
09 · Semantic Modeling & Direct Lake
10 · KPIs, Metrics & the Metrics Layer
11 · Power BI Reports vs Paginated Reports
12 · Governance, Security & Cost Management
13 · CI/CD, Git & Deployment Pipelines
14 · The Fabric Operating Model — putting it all together
99 · Tooling Appendix (the fabricstack.dev ecosystem)
```

> The modules build on each other, but engineers can jump 03→07 and analysts can jump 09→11 after reading 00–04.

| # | Module | File |
|---|---|---|
| 00 | Course Overview & Fabric Mental Model | [00-overview.md](docs/00-overview.md) |
| 01 | Platform Foundations | [01-platform-foundations.md](docs/01-platform-foundations.md) |
| 02 | Workspaces, Domains & Organization | [02-workspaces-domains.md](docs/02-workspaces-domains.md) |
| 03 | OneLake, Lakehouse & Warehouse | [03-onelake-lakehouse-warehouse.md](docs/03-onelake-lakehouse-warehouse.md) |
| 04 | Medallion Architecture | [04-medallion-architecture.md](docs/04-medallion-architecture.md) |
| 05 | Compute: Notebooks vs SJD vs Pipelines | [05-compute-notebooks-sjd.md](docs/05-compute-notebooks-sjd.md) |
| 06 | Ingestion & Transformation Patterns | [06-ingestion-transformation.md](docs/06-ingestion-transformation.md) |
| 07 | Orchestration & Real-Time | [07-orchestration-realtime.md](docs/07-orchestration-realtime.md) |
| 08 | Data Products & Data Mesh | [08-data-products-mesh.md](docs/08-data-products-mesh.md) |
| 09 | Semantic Modeling & Direct Lake | [09-semantic-modeling-direct-lake.md](docs/09-semantic-modeling-direct-lake.md) |
| 10 | KPIs, Metrics & Metrics Layer | [10-kpis-metrics.md](docs/10-kpis-metrics.md) |
| 11 | Power BI vs Paginated Reports | [11-reports-paginated.md](docs/11-reports-paginated.md) |
| 12 | Governance, Security & Cost | [12-governance-security-cost.md](docs/12-governance-security-cost.md) |
| 13 | CI/CD, Git & Deployment Pipelines | [13-cicd-deployment.md](docs/13-cicd-deployment.md) |
| 14 | The Fabric Operating Model | [14-operating-model.md](docs/14-operating-model.md) |
| 99 | Tooling Appendix (fabricstack.dev) | [99-tooling-appendix.md](docs/99-tooling-appendix.md) |

### Reference & meta

| Doc | Purpose |
|---|---|
| [DOCS-SITE.md](docs/DOCS-SITE.md) | How to publish this as a clean docs site (MkDocs Material — already scaffolded: `mkdocs.yml`, `requirements.txt`, `index.md`, GitHub Action). Run `mkdocs serve`. |
| [DIAGRAM-CONVENTIONS.md](docs/DIAGRAM-CONVENTIONS.md) | The visual language: Mermaid + the generic **solution-design notation** ([legend SVG](docs/assets/notation-legend.svg)). |
| [SCREENSHOTS.md](docs/SCREENSHOTS.md) | Every screenshot the course needs, what it shows, and whether to grab it from Microsoft Learn online or capture it in your tenant. |

---

## Publishing as a website

This repo is ready to render as a clean documentation site with **MkDocs Material**:

```bash
pip install -r requirements.txt
mkdocs serve            # preview at http://127.0.0.1:8000
```

See [DOCS-SITE.md](docs/DOCS-SITE.md) for the recommendation rationale, hosting options, and the GitHub Pages action.

---

## Producing the screenshots

This repository ships with **screenshot placeholders** rather than baked-in images, so the course stays current as the Fabric UI evolves and so your screenshots can show *your* tenant. Each placeholder looks like:

```
![SCREENSHOT: Workspace settings → License info, showing the Fabric capacity assignment dropdown](docs/assets/02-capacity-assignment.png)
```

To complete the course visually:

1. Sign in to [app.fabric.microsoft.com](https://app.fabric.microsoft.com) (a **Fabric trial** capacity is enough for almost every lab).
2. Walk each lab in your own tenant.
3. Capture the screen described in each placeholder and save it to `assets/` using the filename in the placeholder.
4. The image then renders inline automatically.

> Tip: keep a dedicated `Course-Demo` workspace and a throwaway capacity so your screenshots are clean and reproducible.

---

## Conventions used throughout

- **`UPPER_SNAKE`** = a value you replace (e.g. `WORKSPACE_NAME`).
- 🟫 Bronze / ⬜ Silver / 🟨 Gold = medallion layers.
- Code blocks are tagged `python` (PySpark/Python), `sql` (T-SQL / Spark SQL), or `dax`.
- "**Default →**" marks the recommended choice when in doubt.

---

## How to use this as a course vs. a reference

- **As a taught course:** follow 00 → 14 in order, doing each lab. Budget ~20–30 hours.
- **As a field reference:** jump to the module you need; each decision table and checklist stands alone.
- **As an onboarding kit:** hand new hires modules 00–04 + 14 in week one.

---

*Sources and the community tooling ecosystem are catalogued in [99-tooling-appendix.md](docs/99-tooling-appendix.md), built from [fabricstack.dev](https://fabricstack.dev). Microsoft Learn citations appear inline in each module.*
