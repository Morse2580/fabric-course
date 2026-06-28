# Module 99 · Tooling Appendix — the fabricstack.dev Ecosystem

> A curated catalog of community + Microsoft tools for Microsoft Fabric and Power BI, built from [**fabricstack.dev**](https://fabricstack.dev) (a directory maintained by Peer Grønnerup; site code MIT, catalog content CC BY 4.0). Organized by the directory's 10 categories. ~45 unique tools.

**How to use this appendix:** when a module says "use an external tool for X," it's almost always one of these. The 🔑 marks the handful every serious Fabric team ends up adopting.

---

## 1. Platform, APIs & SDKs

| Tool | What it does | Link |
|---|---|---|
| 🔑 **Fabric CLI** | Official command-line interface to script workspace/item/capacity management. | [fabricstack.dev/tools/fabric-cli](https://fabricstack.dev/tools/fabric-cli) |
| **Fabric REST APIs** | Official REST surface for workspace/item/capacity/admin ops — foundation of all automation. | [link](https://fabricstack.dev/tools/fabric-rest-apis) |
| **Fabric SDK for .NET** (`Microsoft.Fabric.Api`) | Typed C# access to the Fabric data-plane APIs. | [link](https://fabricstack.dev/tools/fabric-dotnet-sdk) |
| **Fabric SDK for Go** | Experimental open-source Go SDK. | [link](https://fabricstack.dev/tools/fabric-go-sdk) |
| 🔑 **Fabric SDK for Python** (`microsoft-fabric-api`) | Official Python SDK — manage Fabric resources programmatically. | [link](https://fabricstack.dev/tools/fabric-python-sdk) |
| **Power BI .NET REST API Client** | Typed .NET access to Power BI workspaces/reports/datasets. | [link](https://fabricstack.dev/tools/powerbi-dotnet-api) |
| **Power BI PowerShell** (`MicrosoftPowerBIMgmt`) | Official cmdlets to automate workspaces/reports/admin. | [link](https://fabricstack.dev/tools/powerbi-powershell) |
| **Power BI REST APIs** | Official REST surface — embedding, admin, governance, content. | [link](https://fabricstack.dev/tools/power-bi-rest-apis) |

---

## 2. DevOps & CI/CD  *(see Module 13)*

| Tool | What it does | Link |
|---|---|---|
| 🔑 **fabric-cicd** | Python library to deploy Fabric items from source control into workspaces — the core CI/CD engine. | [link](https://fabricstack.dev/tools/fabric-cicd) |
| **Deploy Fabric items with fabric-cicd** (ADO extension) | Azure DevOps extension that runs fabric-cicd deployments in a pipeline. | [link](https://fabricstack.dev/tools/ado-deploy-fabric-cicd) |
| **FabricOps** | Reference implementation of enterprise DevOps / IaC / CI-CD on Fabric. | [link](https://fabricstack.dev/tools/fabricops) |
| **Microsoft Fabric Extension for Azure DevOps** | Official ADO extension adding the `FabricCLITask` to pipelines. | [link](https://fabricstack.dev/tools/fabric-azure-devops-extension) |
| 🔑 **Terraform Provider for Microsoft Fabric** | Official provider to manage workspaces/capacities/items as infrastructure-as-code. | [link](https://fabricstack.dev/tools/terraform-provider-fabric) |

---

## 3. AI, Copilot & MCP

| Tool | What it does | Link |
|---|---|---|
| **Fabric Core MCP Server** | Microsoft's cloud-hosted MCP server exposing Fabric REST APIs as typed tools for AI agents. | [link](https://fabricstack.dev/tools/fabric-core-mcp) |
| **Fabric Data Agent Python SDK** | Preview SDK to create/consume Fabric Data Agents (conversational analytics). | [link](https://fabricstack.dev/tools/fabric-data-agent-sdk) |
| **Fabric Local MCP Server** | Open-source local MCP server giving agents Fabric docs + OneLake file ops. | [link](https://fabricstack.dev/tools/fabric-local-mcp) |
| **pbi-cli** | CLI giving Claude Code token-efficient "skills" to read/write Power BI models without MCP infra. | [link](https://fabricstack.dev/tools/pbi-cli) |
| **Power BI Modeling MCP Server** | Official MCP server letting agents create/edit tables and validate DAX. | [link](https://fabricstack.dev/tools/powerbi-modeling-mcp) |
| **SemanticOps** | MCP server for AI-assisted Power BI modeling with rollback/governance/testing. | [link](https://fabricstack.dev/tools/semanticops) |

---

## 4. Semantic Modeling  *(see Modules 09–10)*

| Tool | What it does | Link |
|---|---|---|
| 🔑 **Tabular Editor 2** (free) | Open-source editor for Tabular/Power BI models via XMLA; C# scripting + Best Practice Analyzer. **Required for OLS authoring.** | [link](https://fabricstack.dev/tools/tabular-editor-2) |
| **Tabular Editor 3** (commercial) | Full IDE: DAX editor/debugger, scripting, model optimization. | [link](https://fabricstack.dev/tools/tabular-editor-3) |
| 🔑 **Tabular Editor CLI** | Cross-platform CLI for model editing, **BPA**, VertiPaq analysis, deploy/refresh/test — enables CI/CD (Module 13). | [link](https://fabricstack.dev/tools/tabular-editor-cli) |
| **ALM Toolkit** | Free dataset compare/merge/deploy with source-control integration. | [link](https://fabricstack.dev/tools/alm-toolkit) |
| **ModelViz** | Parses model archives → interactive ERD, star schema, lineage, RLS diagrams. | [link](https://fabricstack.dev/tools/modelviz) |
| **Power BI Studio** | VS Code extension to manage a tenant via REST, edit datasets with TMDL, run DAX. | [link](https://fabricstack.dev/tools/powerbi-studio) |
| 🔑 **Semantic Link Labs** | Microsoft's open-source Python library extending Semantic Link (sempy) for Power BI/Fabric/Azure/Graph. | [link](https://fabricstack.dev/tools/semantic-link-labs) |

---

## 5. DAX & Performance  *(see Modules 09–11)*

| Tool | What it does | Link |
|---|---|---|
| 🔑 **DAX Studio** | Write/execute/format/tune DAX; query plans + server timings. | [link](https://fabricstack.dev/tools/dax-studio) |
| 🔑 **VertiPaq Analyzer** | Inspect model storage: table/column sizes, cardinality, memory. | [link](https://fabricstack.dev/tools/vertipaq-analyzer) |
| **Bravo for Power BI** | Free companion: model optimization, size analysis, DAX formatting, date tables. | [link](https://fabricstack.dev/tools/bravo) |
| **DAX Optimizer** | Hosted service pinpointing DAX bottlenecks with prioritized fixes. | [link](https://fabricstack.dev/tools/dax-optimizer) |
| **Measure Killer** | Find unused measures/columns/tables across the tenant; lineage analysis. | [link](https://fabricstack.dev/tools/measure-killer) |

---

## 6. Reporting & Embedding  *(see Module 11)*

| Tool | What it does | Link |
|---|---|---|
| **pbi-tools** | Brings source control to Power BI by extracting `.pbix` into a diff-able folder. | [link](https://fabricstack.dev/tools/pbi-tools) |
| **PBIR Tools** | CLI to browse/edit/validate/publish reports in the PBIR (enhanced report) format. | [link](https://fabricstack.dev/tools/pbir-tools) |
| **Power BI Client (JavaScript)** | Official JS/TS library to embed reports/dashboards/tiles/Q&A. | [link](https://fabricstack.dev/tools/powerbi-client-js) |
| **Power BI Client React** | Official React wrapper for embedding Power BI content. | [link](https://fabricstack.dev/tools/powerbi-client-react) |

---

## 7. IDE & Extensibility

| Tool | What it does | Link |
|---|---|---|
| 🔑 **Microsoft Fabric VS Code Extension** | Official extension: sign in, browse/manage workspaces, create/edit items. | [link](https://fabricstack.dev/tools/microsoft-fabric-vscode) |
| **Fabric Studio** | Community VS Code extension to manage a tenant + run REST ops. | [link](https://fabricstack.dev/tools/fabric-studio) |
| **Fabric Apps React Webapp Starter** | React template for building Fabric Apps embedded in the portal. | [link](https://fabricstack.dev/tools/fabric-apps-react-starter) |
| **Fabric Workload Development Kit** | Framework to build custom Fabric workloads (embed an ISV app in the UI). | [link](https://fabricstack.dev/tools/fabric-workload-development-kit) |

---

## 8. Data Engineering  *(see Modules 04–07)*

| Tool | What it does | Link |
|---|---|---|
| 🔑 **Fabric Data Engineering VS Code Extension** | Official extension to author/run notebooks + SJDs on remote Spark, with lakehouse exploration. | [link](https://fabricstack.dev/tools/fabric-data-engineering-vscode) |
| **Fabric Jumpstart** | Curated, tested solution accelerators (data/notebooks/pipelines/reports) deployable in one command. | [link](https://fabricstack.dev/tools/fabric-jumpstart) |
| **Fabric User Data Functions VS Code Extension** | Author/test/publish Fabric User Data Functions (Python) locally. | [link](https://fabricstack.dev/tools/fabric-user-data-functions-vscode) |
| **FMD Framework** | Metadata-driven accelerator for governed, repeatable integration — implements the medallion pattern (Module 07 §1). | [link](https://fabricstack.dev/tools/fmd-framework) |

---

## 9. Data Science & ML

| Tool | What it does | Link |
|---|---|---|
| **Semantic Link (SemPy)** | Microsoft's Python library bridging Power BI models and Fabric data science — expose models/DAX to pandas in notebooks. | [link](https://fabricstack.dev/tools/semantic-link) |

---

## 10. Governance & Admin  *(see Module 12)*

| Tool | What it does | Link |
|---|---|---|
| 🔑 **FUAM: Fabric Unified Admin Monitoring** | Holistic, near-real-time **tenant-wide** monitoring (activities, inventory, capacity, usage). The advanced capacity-monitoring practice (Module 12 §5). | [link](https://fabricstack.dev/tools/fuam) |
| 🔑 **Fabric Cost Analysis (FCA)** | Microsoft FinOps accelerator to monitor/optimize Fabric spend. | [link](https://fabricstack.dev/tools/fabric-cost-analysis) |
| **Fabric Toolbox** | Microsoft (Fabric CAT) collection of tools/accelerators/scripts/samples. | [link](https://fabricstack.dev/tools/fabric-toolbox) |
| **FabricTools** | Community PowerShell module for Fabric/Power BI admin automation. | [link](https://fabricstack.dev/tools/fabrictools) |
| **Impact IQ** | One-click impact-analysis + governance with lineage down to the visual level. | [link](https://fabricstack.dev/tools/impactiq) |

---

## The starter toolkit (if you adopt nothing else)

| Need | Tool |
|---|---|
| Model editing + linting + CI | **Tabular Editor 2** (free) / **Tabular Editor CLI** |
| DAX performance | **DAX Studio** + **VertiPaq Analyzer** |
| Automation / scripting | **Fabric CLI** + **Fabric Python SDK** |
| CI/CD | **fabric-cicd** (+ **Terraform provider** for IaC) |
| Local dev | **Fabric VS Code** + **Fabric Data Engineering VS Code** extensions |
| Capacity monitoring | **Capacity Metrics app** (built-in) + **FUAM** + **Fabric Cost Analysis** |
| Python ↔ semantic models | **Semantic Link / Semantic Link Labs** |

---

*Catalog source: [fabricstack.dev](https://fabricstack.dev). Tools cross-list across categories on the site; each is placed here under its primary category page. For exact external GitHub/vendor URLs, open the per-tool detail page.*
