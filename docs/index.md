# Mastering Microsoft Fabric

> A practitioner's course and **information framework** for building, organizing, and operating Microsoft Fabric well — for **data engineers and analysts** who want to get maximum value from the platform.

This is not a feature tour. It's a **decision-and-practice framework**. For every major choice in Fabric — Lakehouse vs. Warehouse, Notebook vs. Spark Job Definition, Import vs. Direct Lake, Power BI vs. paginated reports, how to split workspaces, where to put bronze/silver/gold — you get a **decision rule, a recommended default, and the trade-offs**, then a hands-on walkthrough with diagrams and **exact Fabric portal navigation** (where to click, what you'll see).

> 🖥️ **Overview deck:** there's a slide presentation summarizing the whole course at **[morse2580.github.io/fabric-course/slides/](https://morse2580.github.io/fabric-course/slides/)** (live) — built from this content, exportable to PDF/PowerPoint. See [Publishing this site](DOCS-SITE.md).

---

## Start here

<div class="grid cards" markdown>

-   :material-rocket-launch: **New to Fabric?**

    Read [00 · Overview & Mental Model](00-overview.md) then [01 · Platform Foundations](01-platform-foundations.md).

-   :material-database: **Data engineer?**

    Foundations → [05 Compute](05-compute-notebooks-sjd.md) → [06 Ingestion](06-ingestion-transformation.md) → [07 Orchestration](07-orchestration-realtime.md).

-   :material-chart-box: **Analyst / BI dev?**

    [09 Semantic Modeling](09-semantic-modeling-direct-lake.md) → [10 KPIs](10-kpis-metrics.md) → [11 Reports](11-reports-paginated.md).

-   :material-shield-account: **Platform lead?**

    [02 Workspaces & Domains](02-workspaces-domains.md) → [12 Governance & Cost](12-governance-security-cost.md) → [14 Operating Model](14-operating-model.md).

</div>

---

## The four big decisions

The course is built around four recurring choices. Make them deliberately and you can build anything in Fabric.

| # | Decision | Default → | Module |
|---|---|---|---|
| 1 | **Lakehouse vs. Warehouse** | Lakehouse unless SQL-first + transactions | [03](03-onelake-lakehouse-warehouse.md) |
| 2 | **Notebook vs. SJD vs. Pipeline** | Notebook; SJD for compiled/retry batch | [05](05-compute-notebooks-sjd.md) |
| 3 | **Import vs. Direct Lake** | Direct Lake on well-tuned gold | [09](09-semantic-modeling-direct-lake.md) |
| 4 | **Power BI vs. Paginated report** | Power BI to explore; paginated to print/export | [11](11-reports-paginated.md) |

---

## Full module list

| # | Module |
|---|---|
| 00 | [Overview & Fabric Mental Model](00-overview.md) |
| 01 | [Platform Foundations](01-platform-foundations.md) |
| 02 | [Workspaces, Domains & Organization](02-workspaces-domains.md) |
| 03 | [OneLake, Lakehouse & Warehouse](03-onelake-lakehouse-warehouse.md) |
| 04 | [Medallion Architecture](04-medallion-architecture.md) |
| 05 | [Compute: Notebooks vs SJD vs Pipelines](05-compute-notebooks-sjd.md) |
| 06 | [Ingestion & Transformation Patterns](06-ingestion-transformation.md) |
| 07 | [Orchestration, Scheduling & Real-Time](07-orchestration-realtime.md) |
| 08 | [Data Products, Ontology & Data Mesh](08-data-products-mesh.md) |
| 09 | [Semantic Modeling & Direct Lake](09-semantic-modeling-direct-lake.md) |
| 10 | [KPIs, Metrics & the Metrics Layer](10-kpis-metrics.md) |
| 11 | [Power BI vs Paginated Reports](11-reports-paginated.md) |
| 12 | [Governance, Security & Cost](12-governance-security-cost.md) |
| 13 | [CI/CD, Git & Deployment Pipelines](13-cicd-deployment.md) |
| 14 | [The Fabric Operating Model](14-operating-model.md) |
| — | [Diagram Conventions](DIAGRAM-CONVENTIONS.md) |
| 99 | [Tooling Appendix (fabricstack.dev)](99-tooling-appendix.md) |

---

## How to read it

- **As a taught course:** 00 → 14 in order, doing each lab. ~20–30 hours.
- **As a field reference:** jump to a module; every decision table and checklist stands alone.
- **As onboarding:** new hires get 00–04 + 14 in week one.

Each module has 🎯 objectives, 📖 concepts, 🧭 decision tables + **In the Fabric portal** navigation callouts, 🛠️ a hands-on lab, 📐 diagrams, ✅ a checklist, and ⚠️ anti-patterns.
