# Screenshot Capture Labs (Priority Set)

Click-by-click labs for the **highest-value screenshots** in [SCREENSHOTS.md](SCREENSHOTS.md). Each lab does double duty: you **perform the real action** (so it's also a hands-on exercise) and you **capture the exact image** the course references. Save each file with the **bold filename** into [`assets/`](assets/) and it renders inline automatically.

## Before you start — capture setup (do once)

- **Browser window:** ~**1440 × 900** (or larger), zoom **100%**. Consistent size = consistent shots.
- **Theme:** Fabric **light theme** (the course diagrams are light). Toggle in **Settings ⚙ → Theme** if needed.
- **Account:** sign in to **[app.fabric.microsoft.com](https://app.fabric.microsoft.com)** with a **Fabric trial or capacity** active (Module 01, Lab 1.0).
- **Capture tool:**
  - **macOS:** `⇧⌘4` then drag (region), or `⇧⌘4` then `Space` to grab a single window. Saves to Desktop → rename + move to `assets/`.
  - **Windows:** **Snipping Tool** (`Win+Shift+S`) → rectangular snip → Save As.
- **Crop tight** to the element described in *📸 Capture*. Hide personal data (real names/emails/tenant IDs) — blur or use the `Course-Demo` workspace.
- **Naming:** use the exact filename in each lab (e.g. `01-create-workspace.png`). Lowercase, no spaces.

> ⏱️ Total time for all eight priority shots: ~30–40 minutes, and you'll have built a workspace, a lakehouse, a warehouse, an environment, an SJD, a semantic model, a pipeline, and a deployment pipeline along the way.

---

## Lab S1 — Fabric home → `00-fabric-home.png`
**Ties to:** Module 00 · **Time:** 1 min

1. Go to **app.fabric.microsoft.com** and sign in.
2. You land on **Home**. Make sure the **left navigation rail** is expanded (Home, Create, Browse, OneLake, Workspaces, Monitor).
3. Look at the **bottom-left corner** — that's the **workload switcher** (shows the current experience, e.g. "Power BI"/"Fabric"). Click it once to reveal the workload list, then click away so the menu is closed but you've confirmed where it is.
4. 📸 **Capture** the **whole browser content area**: left nav + "Recent"/"Recommended" items + the workload switcher visible bottom-left.
   - Save as **`00-fabric-home.png`**.

---

## Lab S2 — Create a workspace → `01-create-workspace.png`
**Ties to:** Module 01 (Lab 1.1), Module 02 · **Time:** 2 min

1. Left nav → **Workspaces** → **+ New workspace** (bottom of the flyout).
2. In **Name**, type **`Course-Demo`**.
3. (Optional) add a Description.
4. Expand **▸ Advanced** at the bottom of the pane.
5. Under **License mode**, select **Trial** (or **Fabric capacity** / **Premium capacity** if you have one). Confirm a capacity is selected — this is the critical step.
6. 📸 **Capture** the **"Create a workspace" side pane** showing: the Name field filled with `Course-Demo`, and **Advanced → License mode** expanded with the **Fabric capacity** option selected.
   - Save as **`01-create-workspace.png`**.
7. Click **Apply** to actually create it (you'll use this workspace for every later lab).

---

## Lab S3 — The New item gallery → `01-new-item-menu.png`
**Ties to:** Module 01 · **Time:** 1 min

1. Open the **`Course-Demo`** workspace.
2. Click **+ New item** (top toolbar). The full **item gallery** opens, grouped by category: *Store data* (Lakehouse, Warehouse, …), *Prepare data* (Dataflow, Pipeline, …), *Analyze and train data* (Notebook, Semantic model, …), etc.
3. (Optional) type in the gallery's search box to show it filters.
4. 📸 **Capture** the **New item dialog** with the **categorized list of item types** visible (scroll so several categories show).
   - Save as **`01-new-item-menu.png`**.
5. Leave the dialog open — Lab S4 uses it.

---

## Lab S4 — Lakehouse vs Warehouse side by side → `03-lakehouse-vs-warehouse.png`
**Ties to:** Module 03 (the #1 decision) · **Time:** 5 min

**Create both items:**
1. From **+ New item**, choose **Lakehouse** → name it **`LH_STORE_Bronze`** → **Create**. (Tick "Lakehouse schemas" if prompted.)
2. In the lakehouse, the **explorer** shows **Tables/** and **Files/**. Upload a sample CSV to `Files/` (drag-drop) or add a shortcut so it isn't empty.
3. Back in `Course-Demo` → **+ New item** → **Warehouse** → name it **`WH_STORE_Gold`** → **Create**.
4. In the warehouse, the **Object explorer** shows **Schemas → Tables / Views / Stored procedures / Functions**.

**Capture (two options):**
- **Option A (one image):** open the Lakehouse in one browser window and the Warehouse in a second window, tile them side by side, and capture both.
- **Option B (simplest):** capture the **Lakehouse explorer** (Tables/Files) and the **Warehouse object explorer** as two crops and place them side by side in any image editor.
5. 📸 Save the combined image as **`03-lakehouse-vs-warehouse.png`** — the goal is to show **Tables/Files (lakehouse)** next to **Schemas/Tables/Views/Stored procedures (warehouse)** so the read-only-vs-writeable contrast is obvious.

---

## Lab S5 — Spark Job Definition form → `05-sjd-create.png`
**Ties to:** Module 05 (Notebook vs SJD) · **Time:** 3 min

1. In `Course-Demo` → **+ New item** → **Spark Job Definition** → name it **`SJD_TRNSF_Demo`** → **Create**.
2. The SJD editor opens. Note the fields/areas:
   - **Main definition file** — *Upload* or *Browse* for a `.py` / `.jar` / `.R`. (Upload any small `.py`, e.g. a one-line `print("hello")`, just to populate it.)
   - **Command line arguments** — type a sample like `--run_date 2026-06-28`.
   - **Reference files** — where extra libs/files go.
   - **Lakehouse reference** (right panel) — click **Add lakehouse** and pick `LH_STORE_Bronze` as the **default lakehouse** (required).
3. 📸 **Capture** the **SJD form** showing **Main definition file**, **Command line arguments**, **Reference files**, and the **default Lakehouse** selected.
   - Save as **`05-sjd-create.png`**.

---

## Lab S6 — Environment with NEE toggle → `05-environment.png`
**Ties to:** Module 05 (Spark config) · **Time:** 3 min

1. In `Course-Demo` → **+ New item** → **Environment** → name it **`ENV_Silver`** → **Create**.
2. The Environment editor has three areas — click through them:
   - **Libraries** (Public libraries / Custom libraries).
   - **Spark compute** — pool selection, **driver/executor cores & memory**, and **Acceleration → Enable native execution engine (NEE)**. **Toggle NEE on.**
   - **Spark properties** — key/value config (e.g. add `spark.highConcurrency.max = 10`).
3. Open the **Spark compute** tab so the **NEE toggle** is visible and **On**.
4. 📸 **Capture** the **Environment editor on the Spark compute tab**, showing the **pool + driver/executor sizing + the NEE toggle enabled**. (If you want one shot showing all three areas, capture with the left tab list visible.)
   - Save as **`05-environment.png`**.
5. Click **Publish** (top-right) to save the environment.

---

## Lab S7 — Direct Lake semantic model → `09-direct-lake-model.png`
**Ties to:** Module 09 (Import vs Direct Lake) · **Time:** 5 min

*Prereq:* you need a few gold tables. Quick path: in `WH_STORE_Gold` (or a Gold Lakehouse), create a tiny star — a `fact_sales` and one or two `dim_*` tables (a few rows are fine; use the SQL editor `CREATE TABLE … INSERT …`).

1. From the **Warehouse/Lakehouse** toolbar → **New semantic model** (or **Reporting → New semantic model**). Name it **`SM_ANLYZ_Sales`**, tick the fact + dim tables, **Confirm**. *(Models built this way over a Fabric store are **Direct Lake**.)*
2. The **model editor / Model view** opens. **Drag** from `dim_*[key]` to `fact_sales[key]` to create **one-to-many** relationships (single direction). Repeat for each dimension to form a star.
3. Click a relationship line to confirm it reads **1 → \*** and **Single** cross-filter.
4. Confirm the storage mode: select a table → in **Properties**/details it shows **Direct Lake** (or check the model **Settings**). 
5. 📸 **Capture** the **Model view** showing the **star schema with one-to-many relationships** and any **"Direct Lake"** indicator/badge visible.
   - Save as **`09-direct-lake-model.png`**.

---

## Lab S8 — Pipeline canvas → `07-pipeline-canvas.png`
**Ties to:** Module 07 (orchestration) · **Time:** 5 min

1. In `Course-Demo` → **+ New item** → **Data pipeline** → name it **`DP_ORCHS_NightlyBatch`** → **Create**.
2. On the canvas, add activities (from the **Activities** ribbon) and **connect them on success** (drag the green ✓ handle):
   - **Copy data** → **Notebook** → **Notebook** (second one represents the gold step) → **Refresh SQL endpoint** *(under "More" / search the activity list)*.
   - (Optional) drop a **ForEach** to mirror the metadata-driven pattern, and a **Lakehouse Maintenance** activity if available in your tenant.
3. Click the **Copy** activity → open its **Settings**, then the **General** tab — set a **Retry = 2** and a **Timeout**, so the settings pane is showing.
4. 📸 **Capture** the **pipeline canvas** showing the chained activities (**Copy → Notebook → Notebook → Refresh SQL endpoint**) with the **activity settings pane** open on **retry/timeout**.
   - Save as **`07-pipeline-canvas.png`**.

---

## Lab S9 — Enable service principal API access → `12-spn-tenant-setting.png`
**Ties to:** Module 12 §1, Module 13 · **Time:** 3 min · **Requires: Fabric/Power BI admin role**

1. Top-right **Settings ⚙ → Admin portal** (only visible to admins).
2. Left side → **Tenant settings**.
3. In the **search box**, type **`service principal`**. Locate **"Service principals can use Fabric APIs"** (and nearby, **"Service principals can use Power BI APIs"**).
4. Expand it → toggle **Enabled** → select **Specific security groups** → enter your automation group (e.g. **`fabric-automation-spns`**). *(Create that group in Entra ID first if needed — Module 12 §1.2.)*
5. 📸 **Capture** the expanded tenant setting showing **"Service principals can use Fabric APIs"** **Enabled** and **scoped to a specific security group**.
   - Save as **`12-spn-tenant-setting.png`**.
6. Click **Apply**.

> 🔒 If you're not a tenant admin, grab the equivalent image from **Microsoft Learn** (search *"Enable service principal authentication for Fabric APIs"*) — noted 🌐 in [SCREENSHOTS.md](SCREENSHOTS.md).

---

## Lab S10 — Deployment pipeline stages → `13-deployment-pipeline.png`
**Ties to:** Module 13 · **Time:** 4 min

1. Left nav → **Workspaces** → **+ New** → **Deployment pipeline** (or **Create → Deployment pipeline**). Name it **`Course-Demo-Pipeline`**.
2. Keep the default **three stages: Development / Test / Production**. Click **Create**.
3. **Assign a workspace** to the **Development** stage → pick **`Course-Demo`** (which now has items from the earlier labs).
4. Click **Deploy** from Dev → Test to populate the **compare view** (or just open the stage comparison) so you see items marked **changed / new / identical** between stages.
5. (Optional) open a **deployment rule**: on the Test stage, select a data source item → **Deployment rules** → show a data-source/parameter rule (Module 13 §3).
6. 📸 **Capture** the **deployment pipeline view** showing **Dev / Test / Prod** stages with the **item compare** (and the **Deployment rules** panel if you opened it).
   - Save as **`13-deployment-pipeline.png`**.

---

## After capturing

- Drop every PNG into **`assets/`** using the exact filenames above.
- Verify they render: open the relevant module file (e.g. `09-semantic-modeling-direct-lake.md`) in a Markdown preview or run `mkdocs serve` ([DOCS-SITE.md](DOCS-SITE.md)).
- The remaining (non-priority) shots in [SCREENSHOTS.md](SCREENSHOTS.md) can stay as placeholders or be pulled from Microsoft Learn (marked 🌐).

> Want labs for the **rest** of the screenshots (the 🖥️ "your tenant" ones in Modules 02, 04, 06, 10, 13-git)? Ask and I'll extend this file with S11+.
