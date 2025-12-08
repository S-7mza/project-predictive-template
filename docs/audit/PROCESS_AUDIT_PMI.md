# Predictive Analysis Project Process Audit – PMI / PMBOK Reference
 
Score: **8 / 10**

## Scoring barème

- **0–3:** Major parts of PMBOK are missing or ad‑hoc.
- **4–6:** Most knowledge areas are documented but unevenly applied.
- **7–8:** All key areas present and generally used; some integration gaps.
- **9–10:** Fully integrated, consistently applied, and continuously improved.

This **8/10** reflects: very strong coverage of scope, schedule, stakeholders, and quality for predictive model delivery, plus practical templates for status reporting and change requests, while keeping cost management and formal change control intentionally lightweight and organization-specific.

## Scope of this audit

Reference: PMI PMBOK (process groups + knowledge areas) applied to your predictive analysis / machine learning playbook (workshops, agile folder, docs, templates).

## Score breakdown

Area | Score (/10) | Rationale
---|---|---
Integration & Scope | 8 | Clear brief, charter, and plan (`PROJECT_BRIEF`, `PROJECT_CHARTER (C)`, `PROJECT_PLAN (C)`), plus workshop roadmap; integration with portfolio tools left to organizations.
Schedule & Workshops | 9 | Detailed `00_WORKSHOP_TIMEPLAN (C).md`, `WORKSHOP_DETAILED_SESSION_PLAN.csv`, and numbered workshop/comms files give a strong, practical schedule baseline.
Stakeholders & Comms | 9 | `COMMUNICATION_PLAN`, `STAKEHOLDER_ENGAGEMENT_PLAN`, and per-workshop comms plus decision/action/minutes templates cover most PMI expectations.
Quality & UAT | 8 | `QUALITY_MANAGEMENT_PLAN`, `TEST_UAT_PLAN (C)`, DoD and DOD cases provide clear quality gates for ML deliverables.
Risk, Issues & Gating | 8 | `RISK_REGISTER`, enhanced `ISSUE_LOG` with tech-debt flag, `02_GATING_CHECKLIST (C).md`, and `STATUS_REPORT_TEMPLATE` give good control for non-expert PMs.
Monitoring & Controlling | 7 | Status reporting and gating exist, but no built-in cadence, central repository, or portfolio dashboard.
Cost & Resources | 6 | Effort and capacity handled mostly via Agile and workshops; there is no explicit budget/effort tracking section in the plan.
Change Control | 7 | `CHANGE_REQUEST.md` and governance notes exist but without detailed thresholds, RACI, or integration into enterprise tools.

## Strengths (what is well covered)

- **Integration & Scope (8/10):** Clear artefacts for project brief, charter and plan (`docs/PROJECT_BRIEF.md`, `docs/PROJECT_CHARTER (C).md`, `docs/PROJECT_PLAN (C).md`), and a workshop-based roadmap in `templates/WORKSHOP_DETAILED_SESSION_PLAN.csv`.
- **Schedule & Workshops (9/10):** Detailed workshop plan, pre-work, agendas (`workshops/*`), and comms (`communication/*`) provide a strong, structured schedule baseline.
- **Stakeholder & Communications (9/10):** Dedicated communication plans (`docs/COMMUNICATION_PLAN.md`, `communication/*`) and templates for minutes, decisions, and actions (`templates/MEETING_MINUTES.md`, `templates/DECISION_LOG.md`, `templates/ACTION_LOG.csv`).
- **Quality & UAT (8/10):** Specific artefacts for QA and UAT (`docs/QUALITY_MANAGEMENT_PLAN.md`, `docs/TEST_UAT_PLAN (C).md`, `agile/DEFINITION_OF_DONE.md`, `agile/DOD_CASES.md`).
- **Risk, Issues & Gating (8/10):** Templates for risk and issue registers (`templates/RISK_REGISTER.md`, `templates/ISSUE_LOG.md` with tech‑debt tagging), a gating checklist (`02_GATING_CHECKLIST (C).md`) and a status report template (`templates/STATUS_REPORT_TEMPLATE.md`) give non‑expert PMs solid control tools.

## Gaps / improvement opportunities

- **Monitoring & Controlling integration (for advanced users):**
  - With `templates/STATUS_REPORT_TEMPLATE.md` and the governance section in `docs/PROJECT_PLAN (C).md`, non‑expert PMs now have a simple integrated status view; advanced PMOs may still want portfolio‑level dashboards across many projects.

- **Cost management (kept intentionally light):**
  - Cost/effort is handled implicitly through Agile capacity and workshop planning; this is often enough for internal analytics projects, but heavier budgeting is not covered.

- **Formal change control (simple, but not enterprise‑grade):**
  - Change impact and approvals are described at a lightweight level in the plan and `templates/CHANGE_REQUEST.md`, but large organizations may want to embed this into central tools and formal boards.

## Suggested actions to reach a fully "enterprise" 10/10

1. **Use the PMI-style status report template** (`templates/STATUS_REPORT_TEMPLATE.md`) at a regular cadence (e.g., weekly) and store reports centrally for each project.
2. **Refine change control where needed:** for organizations with stricter governance, extend `templates/CHANGE_REQUEST.md` and `docs/CONFIGURATION_MANAGEMENT.md` with more detailed approval steps and thresholds.
3. **Clarify cost/effort management for larger projects:** when projects are budget‑sensitive, extend `docs/PROJECT_PLAN (C).md` with a small budget and tracking section linked to `agile/CAPACITY_PLANNING.md`.

## Concrete path to 10 / 10

To reach a full **10/10** on PMI alignment for your predictive analysis / ML process:

1. **Institutionalize the status reporting cycle**
  - Make the new PMI-style status report mandatory at a defined cadence (e.g., weekly) and tie it to decision forums.
  - Ensure each project logs these reports centrally (e.g., in a folder or tracker) so governance can see trends over time.

2. **Operationalize change control**
  - Define a simple RACI for change approval in `docs/CONFIGURATION_MANAGEMENT.md`.
  - Require a signed `CHANGE_REQUEST.md` for any scope, schedule, or cost impact beyond a small threshold.

3. **Add lightweight cost/effort planning and tracking**
  - Extend `docs/PROJECT_PLAN (C).md` with a section for estimated effort/budget and a simple tracking table.
  - Link this with `agile/CAPACITY_PLANNING.md` so sprint capacity and workshop effort align with the plan.

4. **Close the loop with lessons learned**
  - After each project, review variances in scope/schedule/cost and document corrective actions in `docs/BEST_PRACTICES.md`.
  - Periodically update templates (charter, plan, gating checklist) based on these lessons.

---

**Overall PMI alignment:** strong, practical coverage for a predictive analysis / ML project context, with minor gaps mainly around cost and integrated monitoring across both project and model lifecycle.
