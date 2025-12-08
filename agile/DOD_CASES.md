DoD Cases for Predictive Analysis / ML Project

Overview
This document consolidates Definition of Done (DoD) cases tailored to common work types in a predictive analysis / ML project. Each case lists testable criteria and the expected evidence when the work is declared "Done".

1) Simple Bug Fix
- Criteria:
  - Reproduction steps documented in the issue.
  - Fix implemented and covered by a unit/regression test where applicable.
  - PR reviewed and approved by at least one peer.
  - Lint/static analysis checks pass.
  - Deployed to staging and smoke-tested against repro steps.
  - PO verifies and closes the issue.
- Evidence:
  - Issue with repro steps, PR link + CI green, staging smoke test notes, entry in `templates/DECISION_LOG.md` or `templates/ISSUE_LOG.md`.

2) New KPI / Model Output Visual (e.g., dashboard tile, report, or app view)
- Criteria:
  - KPI spec completed and approved (`deliverables/KPI_SPEC.md`).
  - Data source(s), transformations and lineage documented.
  - ETL/transformations produce expected values against sample/reconciliation datasets.
  - Visualization mock/prototype validated for accessibility and UX.
  - Cross-team data owner validation completed.
  - Performance meets render/query thresholds (or documented mitigation).
  - Documentation and user-help updated.
  - Demo delivered and PO/stakeholder acceptance recorded.
- Evidence:
  - `deliverables/KPI_SPEC.md`, `deliverables/VIS_SPEC.md`, reconciliation reports, demo notes, `templates/ACCEPTANCE_CRITERIA.md`, Decision Log sign-off.

3) ETL / Data Pipeline Change
- Criteria:
  - Design and migration plan documented (including backfill/rollforward strategy).
  - Unit/integration tests for the transformation exist and pass in CI.
  - Reconciliation and row-count checks implemented and passing.
  - Monitoring/alerts and metrics added for the changed pipeline.
  - Staged run demonstrates correct outputs and downstream consumers validated.
  - Rollback procedures tested.
- Evidence:
  - Transformation tests, reconciliation logs, staging run output, runbook entry in `docs/CONFIGURATION_MANAGEMENT.md` or a dedicated runbook file.

4) Schema / Data Contract Change (breaking/versioned)
- Criteria:
  - Impact analysis completed with consumer list and owners notified.
  - Versioning/migration strategy defined and tested.
  - Compatibility tests with consumers pass in staging.
  - Migration automation and rollback tested.
  - Documentation updated and consumers signed off.
- Evidence:
  - Impact matrix, contract spec, consumer sign-offs, migration execution logs.

5) Performance Optimization
- Criteria:
  - Baseline metrics captured prior to changes.
  - Optimization implemented with measurable improvement vs baseline.
  - Load/perf tests executed and pass for target SLA.
  - No functional regressions.
  - Monitoring thresholds updated to reflect new performance expectations.
- Evidence:
  - Perf test reports, before/after charts, CI job results, updated monitoring dashboards / views.

6) Security / Privacy Sensitive Change
- Criteria:
  - Data classification verified and privacy impact assessment (if applicable) completed.
  - Secrets/credentials handled per policy; no credentials in code.
  - Automated SAST/DAST checks pass where applicable.
  - Access control and masking applied for sensitive fields.
  - Security review and approver sign-off obtained.
- Evidence:
  - `docs/DATA_GOVERNANCE.md`, security review ticket, SAST/DAST reports, Decision Log sign-off.

7) Production Release / Deployment
- Criteria:
  - All release items pass CI/CD.
  - Staging smoke tests pass and stakeholders approve.
  - Deployment runbook updated and validated; rollback tested.
  - Monitoring + SLO views/dashboards and alerting in place.
  - Release notes and stakeholder communication prepared.
- Evidence:
  - CI/CD pipeline status, runbook, monitoring views/dashboards, release announcement, Decision Log sign-off.

8) Spike / Research / Prototype
- Criteria:
  - Hypothesis and success criteria defined at spike start.
  - Lightweight prototype or PoC created if required.
  - Results, trade-offs and recommended next steps documented.
  - Follow-up tickets created for any production work.
- Evidence:
  - Spike notes, demo or PoC artifacts, recommended backlog items.

9) Training / Handoff / Support Enablement
- Criteria:
  - User guides, runbooks and support documentation updated.
  - Training session scheduled and delivered (or recording available).
  - Support runbook, escalation paths and SLAs documented.
  - Handoff acceptance from support/Product Owner recorded.
- Evidence:
  - `follow_up/FUP_TEMPLATE.md`, `docs/ENVIRONMENT_INVENTORY.md`, training materials or recordings, Decision Log sign-off.

When to Relax DoD
- Spikes and short exploratory tasks may use a reduced DoD; any relaxation must be documented on the ticket and approved by the Product Owner.
- Emergency hotfixes may use a trimmed checklist but require a follow-up ticket to complete full DoD items post-release.

Templates & Evidence (recommended)
- `templates/ACCEPTANCE_CRITERIA.md` — story-level criteria.
- `templates/DECISION_LOG.md` — stakeholder approvals and decisions.
- `templates/ISSUE_LOG.md` / `templates/ACTION_LOG.csv` — tracking defects and follow-ups.
- `deliverables/DATA_INVENTORY.md` — data lineage and contracts.
- `docs/DATA_GOVERNANCE.md` and `workshops/02_WORKSHOP_AGENDA_SECURITY_PRIVACY.md` — security & privacy evidence.
- `docs/CONFIGURATION_MANAGEMENT.md` — runbooks and deployment procedures.

Notes
- Treat this as a living document; update as the team learns new constraints, or when SLAs and monitoring thresholds change.
