Team Charter — [Project Team Name]

Purpose
- Describe the team's purpose and how it supports the project objectives.

Team Composition
- Team lead / Data Science or ML Lead: [name]
- Project Manager: [name]
- BI Developers: [names]
- Data Engineers: [names]
- QA: [names]
- Ops: [names]

Working Agreements
- Meeting cadence: Weekly sprint sync (30 min), Design reviews (ad hoc), Standups (daily, 15 min) — adjust per project needs.
- Communication channels: Slack/Teams for async, email for formal updates, Confluence/Git for docs.
- Response time expectations: 24 hours for non-urgent requests, 2 hours for P1 during working hours.

Decision Making
- Decisions are made by the accountable role listed in `templates/RACI.md`.
- Escalation path: BI Dev → BI Lead → PM → Sponsor.
- Use Decision Log for all significant decisions (template: `templates/DECISION_LOG.md`).

Roles & Responsibilities (summary)
- PM: Schedule, risk, stakeholder communications and approvals.
- Data Science / ML Lead: Approve model and KPI definitions, model standards, and accept validation.
- Data Scientists / ML Engineers: Build, train, and validate models; implement unit tests and performance checks for model code.
- Data Engineers: Build and maintain ETL and canonical tables.
- QA: Define and run validation tests.

Collaboration & Handoffs
- Use `deliverables/` folder as single source of truth.
- All code and SQL to be stored in version control and PR-reviewed before merge.
- Handover checklist to operations included in `follow_up/FUP_TEMPLATE.md`.

Conflict Resolution
- Surface conflicts in weekly sync; if unresolved, escalate to PM for mediation, then Sponsor.

Team Norms & Values
- Respectful and evidence-driven discussions.
- Prefer small incremental deliveries and early demos.
- Prioritize data quality and reproducibility.

Success Measures
- On-time deliveries of milestones.
- Data quality thresholds met (<X% nulls, reconciled totals).
- Adoption and impact metrics (model usage, quality of decisions supported by predictions, stakeholder satisfaction).

Review cadence
- Review team charter quarterly or after each major release and update as needed.