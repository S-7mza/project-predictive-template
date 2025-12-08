# Predictive Analysis Project Process Audit – ISO 21500 / 21502 Reference

Score: **8 / 10**

## Scoring barème

- **0–3:** Processes largely undocumented; governance and principles unclear.
- **4–6:** Core processes exist but principles, roles, and alignment to organization are partial.
- **7–8:** Processes and roles are clear; most ISO expectations met with some gaps in principles and continual improvement.
- **9–10:** Processes, principles, governance, and continual improvement fully defined and practiced.

The **8/10** reflects: good structure and governance for predictive analysis / ML work, with principles and continual improvement made visible in best practices and process metrics, while portfolio‑level linkage and strict ISO terminology remain for organizations to tailor.

## Scope of this audit

Reference: ISO project management guidance (principles, processes, governance) mapped to your predictive analysis / machine learning playbook.

## Score breakdown

Area | Score (/10) | Rationale
---|---|---
Context & Objectives | 8 | Clear purpose, outcomes, and constraints in `PROJECT_BRIEF`, `PROJECT_CHARTER (C)`, and `BENEFITS_REALIZATION`.
Governance & Roles | 8 | `TEAM_CHARTER`, `STAKEHOLDER_ENGAGEMENT_PLAN`, `RACI`, and `PLAYBOOK_ONBOARDING_GUIDE` define who does what and how work is coordinated.
Planning & Resources | 8 | Workshop roadmap, `WORKSHOP_DETAILED_SESSION_PLAN.csv`, `CAPACITY_PLANNING`, and `ENVIRONMENT_INVENTORY` cover planning and resource setup.
Risk & Opportunities | 8 | `RISK_REGISTER`, `ISSUE_LOG`, and `GATING_CHECKLIST` support proactive risk management with explicit ML lifecycle gates.
Quality & Change | 7 | `QUALITY_MANAGEMENT_PLAN`, `TEST_UAT_PLAN (C)`, and `CHANGE_REQUEST` templates exist but with light change-approval structure.
Principles & Ethics | 8 | Security/privacy/ethics content plus the principles and continuous-improvement section in `BEST_PRACTICES` make underlying principles visible.
Continual Improvement | 7 | `PROCESS_METRICS`, retros, and benefits tracking provide a loop, but periodic, organization-wide updates are not prescribed.
Portfolio Alignment & Evidence | 6 | Portfolio-/strategy-level linkage and a cross-project evidence register are left for each organization to define.

## Strengths

- **Context and objectives (8/10):** Project brief, charter, and benefits documentation (`docs/PROJECT_BRIEF.md`, `docs/PROJECT_CHARTER (C).md`, `docs/BENEFITS_REALIZATION.md`) describe purpose, outcomes, and constraints.
- **Governance & roles (7/10):** Team and stakeholder artefacts (`docs/TEAM_CHARTER.md`, `docs/STAKEHOLDER_ENGAGEMENT_PLAN.md`, `templates/RACI.md`) define roles and engagement.
- **Planning & resources (7/10):** Workshop roadmap, agile capacity planning, and environment inventory (`templates/WORKSHOP_DETAILED_SESSION_PLAN.csv`, `agile/CAPACITY_PLANNING.md`, `docs/ENVIRONMENT_INVENTORY.md`).
- **Risk and opportunity management (7/10):** Risk register and gating checklist are aligned with ISO expectations for proactive risk handling.
- **Quality & change (7/10):** Quality management plan, UAT plan, and change request template support controlled delivery.

## Gaps / improvement opportunities

- **Principles not fully spelled out for teaching purposes:**
  - ISO emphasizes explicit principles (e.g., responsibility, complexity, adaptability). Your playbook now has a principles and continuous‑improvement section in `docs/BEST_PRACTICES.md`, but teams who need stricter mapping may still want an explicit cross‑reference to ISO language.

- **Organization-level alignment (portfolio view):**
  - The link between this predictive analysis / ML process and a corporate portfolio process is not fully described, which is fine for team‑level projects but a gap for central PMOs.

- **Formalized continual improvement loop (now minimal but sufficient for teams):**
  - A simple loop exists via retrospectives, benefits tracking, and updates to `docs/BEST_PRACTICES.md` and `docs/PROCESS_METRICS.md`; organization‑wide institutionalization is still optional work for more mature PMOs.

## Suggested actions to reach a strict ISO-style 10/10

1. **Optionally refine ISO-style principles mapping:** extend the principles section in `docs/BEST_PRACTICES.md` with an explicit mapping to ISO 21500/21502 language when training PMOs.
2. **Clarify portfolio linkage:** in `docs/PROJECT_BRIEF.md` or a new `PORTFOLIO_LINK.md`, describe how predictive analysis / ML projects connect to organizational strategy and portfolio selection.
3. **Keep the improvement loop alive:** ensure that after each project, outputs from retrospectives and benefits realization are reviewed and used to update templates, best practices, and, where relevant, `docs/PROCESS_METRICS.md`.

## Concrete path to 10 / 10

To move from this practical **9/10** toward a strict **10/10** ISO-style alignment:

1. **Formalize ISO-aligned principles**
  - In `docs/BEST_PRACTICES.md`, add a short section mapping your process explicitly to ISO-style principles (responsibility, stakeholder engagement, adaptability, risk-based thinking).
  - Reference those principles in key artefacts (e.g., charter, quality plan) so they are visible to practitioners.

2. **Clarify organization and portfolio linkage**
  - Create a short note or section (e.g., `docs/PROJECT_BRIEF.md` or a new `docs/PORTFOLIO_LINK.md`) describing how predictive analysis / ML projects are initiated, prioritized, and governed at portfolio level.
  - Specify which governance body approves starting and closing a predictive analysis / ML project.

3. **Institutionalize lessons learned and standard updates**
  - Define a simple procedure: after each project, review retrospectives and benefits results and capture at least 2–3 improvements into `docs/BEST_PRACTICES.md`.
  - Schedule periodic (e.g., quarterly) reviews of templates based on accumulated lessons.

4. **Evidence and records**
  - Keep a minimal register (even a table in a markdown file) with links to completed charters, plans, risks, and benefits documents for each project to demonstrate consistent application of the process.

---

**Overall ISO-style alignment:** good structure and governance for predictive analysis / ML delivery, with room to make principles and improvement cycles more explicit.
