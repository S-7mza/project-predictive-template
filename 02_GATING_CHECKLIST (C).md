PMI Gating Checklist — Go/No-Go Gates

Purpose
- A concise, facilitator-friendly checklist to confirm PMI-style gates before moving between major milestones. Use at milestone reviews to capture explicit sign-off, outstanding remediation, and next steps.

How to use
- Bring this checklist to the milestone review meeting. For each gate, tick the checkboxes, record sign-off name/date, and list any open remediation items (link to `templates/ACTION_LOG.csv`).
- Record the decision (Go / No-Go / Conditional Go) and rationale in `templates/DECISION_LOG.md`.
- If "No-Go" or "Conditional Go", assign actions in `templates/ACTION_LOG.csv` with owners and due dates and re-run the gate when remediation is complete.

Milestone Gate: After Kickoff (Gate → Proceed to Data Discovery)
- [ ] Project Charter signed by Sponsor (`docs/PROJECT_CHARTER (C).md`)
- [ ] Stakeholder register completed (`docs/STAKEHOLDER_ENGAGEMENT_PLAN.md`)
- [ ] RACI assigned and core team confirmed (`templates/RACI.md`)
- [ ] High-level timeline and critical milestones documented (`00_WORKSHOP_TIMEPLAN (C).md`)
Sign-off (Sponsor or delegate): Name: __________________  Date: ________
Decision (owned by Sponsor): Go / No-Go / Conditional Go
Open remediation (if any):
- Action ID / Short description / Owner / Due date

Milestone Gate: After Security & Privacy (Gate → Begin Data Discovery)
- [ ] Data classification completed; PII and sensitive fields identified (`docs/DATA_GOVERNANCE (C).md`)
- [ ] Access approval process defined and approvers named
- [ ] Any required masking or consent actions documented and owners assigned
- [ ] Security/Compliance sign-off recorded
Sign-off (Security/Compliance lead): Name: __________________  Date: ________
Decision (owned by Security/Compliance lead): Go / No-Go / Conditional Go
Open remediation:
- Action ID / Short description / Owner / Due date

Milestone Gate: After Technical Data Discovery (Gate → Proceed to Modeling)
- [ ] `deliverables/DATA_INVENTORY (C).md` completed for all in-scope sources
- [ ] Sample extracts received and profiled (row counts, null rates, cardinalities)
- [ ] Critical data quality issues logged with owners and mitigation plan (`templates/ISSUE_LOG.md`)
- [ ] Environment access requirements captured (`docs/ENVIRONMENT_INVENTORY.md`)
Sign-off: Name: __________________  Date: ________
Decision: Go / No-Go / Conditional Go
Open remediation:
- Action ID / Short description / Owner / Due date

Milestone Gate: After Data Modeling (Gate → Proceed to ETL design)
- [ ] Canonical model diagram and grain definitions documented (`deliverables/ARCHITECTURE.md` or model file)
- [ ] KPI-to-model mappings completed in `deliverables/KPI_SPEC (C).md`
- [ ] Performance considerations (partitioning, pre-agg) documented
- [ ] Modeling owner assigned to deliver canonical tables
Sign-off: Name: __________________  Date: ________
Decision: Go / No-Go / Conditional Go
Open remediation:
- Action ID / Short description / Owner / Due date

Milestone Gate: After ETL / feature pipeline implementation (Gate → Proceed to baseline model development / QA)
- [ ] ETL jobs scheduled and running in staging with reproducible outputs
- [ ] Key reconciliation tests passed (source vs canonical totals within thresholds)
- [ ] ETL monitoring and alerting configured and validated
- [ ] Runbook for ETL fail/restart documented (`scripts/README.md` or runbook)
Sign-off: Name: __________________  Date: ________
Decision: Go / No-Go / Conditional Go
Open remediation:
- Action ID / Short description / Owner / Due date

Milestone Gate: After candidate model selection (Gate → Proceed to model validation / UAT)
- [ ] Candidate model(s) and feature set documented (`deliverables/MODEL_SPEC (C).md`)
- [ ] Offline performance against key KPIs meets agreed thresholds
- [ ] Key business scenarios reviewed with stakeholders (e.g., win/loss examples, edge cases)
- [ ] Model risk, bias, and explainability considerations logged with actions where needed
Sign-off: Name: __________________  Date: ________
Decision: Go / No-Go / Conditional Go
Open remediation:
- Action ID / Short description / Owner / Due date

Milestone Gate: After QA / UAT (Gate → Proceed to Deployment)
- [ ] All P0 defects resolved; P1 defects have mitigations and timelines
- [ ] UAT acceptance criteria met and signed-off (`templates/ACCEPTANCE_CRITERIA.md`)
- [ ] Security/compliance approvals for production access obtained
- [ ] Deployment checklist and rollback plan reviewed (`docs/CONFIGURATION_MANAGEMENT.md`, `scripts/README.md`)
Sign-off: Name: __________________  Date: ________
Decision: Go / No-Go / Conditional Go
Open remediation:
- Action ID / Short description / Owner / Due date

Milestone Gate: After Deployment (Gate → Handoff to BAU)
- [ ] Runbook and monitoring live and smoke-checks passed
- [ ] Training completed; training materials and recordings stored (`follow_up/FUP_TEMPLATE.md`)
- [ ] Support contacts and SLA expectations recorded in `follow_up/FUP_TEMPLATE.md`
- [ ] Benefits tracking baseline recorded (`docs/BENEFITS_REALIZATION.md`)
Sign-off: Name: __________________  Date: ________
Decision: Go / No-Go / Conditional Go
Open remediation:
- Action ID / Short description / Owner / Due date

Notes & Tips
- Keep this checklist small and evidence-driven: attach links to artifacts proving each item is met (e.g., link to sample extracts, test results, or sign-off emails).
- For conditional gates, require specific remediation actions with owners and a target re-review date before allowing progress.
- Record final decisions in `templates/DECISION_LOG.md` with references to this checklist and any supporting artifacts.

Template table (optional) — copy into meeting notes for quick capture

| Gate | Decision | Sign-off (Name) | Date | Open actions (IDs) |
|---|---|---|---|---|
| After Kickoff | Go / No-Go / Conditional |  |  |  |
| After Security & Privacy | Go / No-Go / Conditional |  |  |  |
| After Data Discovery | Go / No-Go / Conditional |  |  |  |
| After Data Modeling | Go / No-Go / Conditional |  |  |  |
| After ETL Implementation | Go / No-Go / Conditional |  |  |  |
| After Prototype | Go / No-Go / Conditional |  |  |  |
| After UAT | Go / No-Go / Conditional |  |  |  |
| After Deployment | Go / No-Go / Conditional |  |  |  |
