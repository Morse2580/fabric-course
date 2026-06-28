# Screenshot Manifest

Every screenshot the course references, in one place. Each module embeds a `![SCREENSHOT: ...](assets/<file>.png)` placeholder; drop the matching PNG into [`assets/`](assets/) and it renders inline.

**Source column:**
- 🌐 **Online** — a representative version exists on **Microsoft Learn** or a public repo; you can grab one quickly (link hint provided). Good enough for a generic course.
- 🖥️ **Your tenant** — best captured from **your own Fabric** so it shows real items/your conventions. (Microsoft Learn often has a similar image if you'd rather not capture it.)

> Tip: keep a clean `Course-Demo` workspace and a throwaway capacity so captures are consistent. Use a 1280×800+ window, light theme, and crop tightly to the described element.

---

## What to capture, by module

| # | File (`assets/…`) | What it shows | Source | Where to find / capture |
|---|---|---|---|---|
| 00 | `00-fabric-home.png` | Fabric home with the workload switcher + recent items | 🖥️ Your tenant | app.fabric.microsoft.com home |
| 01 | `01-start-trial.png` | Account manager → "Start trial" dialog | 🌐 Online | MS Learn *"Fabric trial"* |
| 01 | `01-new-item-menu.png` | "+ New item" dialog with all item types categorized | 🖥️ Your tenant | Inside a workspace → **+ New item** |
| 01 | `01-create-workspace.png` | Create-workspace pane, Advanced → License mode = Fabric capacity | 🖥️ Your tenant | Workspaces → **+ New workspace** |
| 01 | `01-monitoring-hub.png` | Monitoring hub list of recent runs | 🖥️ Your tenant | Left nav → **Monitor** |
| 02 | `02-capacity-assignment.png` | Workspace settings → License info → capacity dropdown | 🖥️ Your tenant | Workspace settings → License info |
| 02 | `02-workspace-roles.png` | Manage access pane, four roles on security groups | 🖥️ Your tenant | Workspace → **Manage access** · MS Learn *"roles in workspaces"* |
| 02 | `02-domains.png` | Admin portal → Domains, assigned workspaces + assignment options | 🌐 Online | MS Learn *"Fabric domains"* |
| 03 | `03-new-shortcut.png` | New-shortcut dialog: OneLake / ADLS / S3 / GCS / Dataverse | 🌐 Online | MS Learn *"OneLake shortcuts"* |
| 03 | `03-connections-gateways.png` | Manage connections & gateways: cloud connection + on-prem gateway | 🌐 Online | MS Learn *"on-premises data gateway"* |
| 03 | `03-lakehouse-vs-warehouse.png` | Lakehouse explorer beside Warehouse object explorer | 🖥️ Your tenant | Open a lakehouse + a warehouse side by side |
| 04 | `04-materialized-lake-views.png` | Materialized lake view lineage graph (bronze→silver→gold) | 🌐 Online | MS Learn *"materialized lake views"* tutorial |
| 05 | `05-sjd-create.png` | Spark Job Definition form (main file, args, reference files, default lakehouse) | 🖥️ Your tenant | New → Spark Job Definition · MS Learn *"Spark job definition"* |
| 05 | `05-environment.png` | Environment item: Libraries / Spark compute (NEE toggle) / Spark properties | 🖥️ Your tenant | New → Environment |
| 05 | `05-notebook-configure.png` | Notebook with `%%configure` (NEE) + high-concurrency session indicator | 🖥️ Your tenant | Open a notebook, add `%%configure` cell |
| 06 | `06-table-maintenance.png` | Lakehouse table → Maintenance dialog (OPTIMIZE + V-Order, VACUUM) | 🖥️ Your tenant | Lakehouse → table context menu → **Maintenance** |
| 07 | `07-pipeline-canvas.png` | Pipeline canvas: Copy → Notebook → ForEach → Maintenance → Refresh SQL endpoint | 🖥️ Your tenant | Build the Module 07 pipeline |
| 07 | `07-monitoring-hub.png` | Monitoring hub with a pipeline run expanded + Spark UI link | 🖥️ Your tenant | Monitor → open a pipeline run |
| 09 | `09-direct-lake-model.png` | Model view: star schema relationships + "Direct Lake" indicator | 🖥️ Your tenant | Semantic model → Model view |
| 10 | `10-calculation-groups.png` | Calculation-groups pane with Current / YoY / YoY% / YTD items | 🖥️ Your tenant | Power BI Desktop or Tabular Editor |
| 10 | `10-metric-sets.png` | Metrics hub / a Metric set (base measure, dims, time grain, Certified) | 🌐 Online | MS Learn *"Create and manage metric sets"* |
| 11 | `11-report-builder.png` | Power BI Report Builder: tablix + parameters + data-source dialog | 🌐 Online | MS Learn *"paginated reports in Report Builder"* |
| 12 | `12-spn-tenant-setting.png` | Tenant settings: "Service principals can use Fabric APIs" scoped to a group | 🌐 Online | MS Learn Fabric admin/identity docs |
| 12 | `12-fuam-overview.png` | FUAM report overview: tenant-wide capacity/inventory/activity | 🌐 Online | FUAM repo (`microsoft/fabric-toolbox`) README screenshots |
| 13 | `13-git-integration.png` | Workspace settings → Git integration, source-control status on items | 🖥️ Your tenant | Workspace settings → Git integration |
| 13 | `13-deployment-pipeline.png` | Deployment pipelines: Dev/Test/Prod compare + deployment rules | 🌐 Online | MS Learn *"deployment pipelines"* |

---

## Already provided (vector — no capture needed)

These ship as clean SVGs in `assets/` and render directly:

| File | Used in |
|---|---|
| `notation-legend.svg` | [DIAGRAM-CONVENTIONS.md](DIAGRAM-CONVENTIONS.md) |
| `08-data-product-solution-design.svg` | [Module 08](08-data-products-mesh.md) |
| `03-external-source-connectivity.svg` | [Module 03](03-onelake-lakehouse-warehouse.md) |

Plus every architecture/flow/decision diagram is inline **Mermaid** (no image files needed).

---

## Priority order (if you only capture a few)

> 👉 **Click-by-click capture labs for the priority set are in [SCREENSHOT-LABS.md](SCREENSHOT-LABS.md)** — each lab performs the real action *and* frames the exact shot.

The highest-teaching-value captures, in order:

1. `00-fabric-home.png` — orients a first-time reader.
2. `01-create-workspace.png` + `01-new-item-menu.png` — the first thing anyone does.
3. `03-lakehouse-vs-warehouse.png` — anchors the #1 decision.
4. `05-sjd-create.png` + `05-environment.png` — the compute decision in the UI.
5. `09-direct-lake-model.png` — proves the model is Direct Lake.
6. `07-pipeline-canvas.png` — the orchestration through-line.
7. `12-spn-tenant-setting.png` + `13-deployment-pipeline.png` — the ops/CICD story.

Everything else can stay as a placeholder or pull from Microsoft Learn.
