Configuration Management Plan

Purpose
- Track versions of ETL/feature pipeline code, SQL, model artifacts, and infrastructure definitions (including any dashboards or UIs that consume predictions).

Scope
- Source code for ETL, feature pipelines, and model code (SQL, scripts, notebooks, dbt models)
- Dashboard files, workbook artifacts, and application code that consume model outputs
- Infrastructure-as-code (Terraform, ARM templates)
- Runbooks and operational scripts

Version Control
- All code, model artifacts (configs, notebooks/scripts), and dashboard/UI artifacts stored in version control (git) with PR reviews.
- Semantic branching strategy: feature branches, develop/integration, release, main/prod.

Change Control
- Use `templates/CHANGE_REQUEST.md` for material scope changes that impact schedule or cost.
- Record configuration items and version in `templates/DECISION_LOG.md` when major changes occur.

Promote & Release Process
- CI for automated tests and linting.
- Promote from Dev → Staging → Prod following green pipelines and required approvals.

Rollback & Traceability
- Keep release tags and changelogs; store release artifacts for rollback.
- Maintain mapping from release to deployed versions in runbook.

Responsibilities
- DevOps: maintain CI/CD pipelines and release processes.
- Data Science / ML Lead (and/or BI Lead): approve model and UI/dashboard releases and manage schema/versioning.
- PM: coordinate approvals for scope changes.
