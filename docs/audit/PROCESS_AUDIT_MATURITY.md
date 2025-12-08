# Predictive Analysis Project Process Audit – Maturity View (CMMI-style)

Score: **8 / 10**

## Scope of this audit

Reference: a simplified CMMI-style maturity view (from ad-hoc to optimizing) applied to your predictive analysis / machine learning project process.

## Score breakdown

Area | Score (/10) | Rationale
---|---|---
Process Definition | 8 | End-to-end predictive/ML process is documented across workshops, agile, governance, QA, deployment, and monitoring artefacts.
Project Planning & Tracking | 8 | Workshop planner, sprint planning, and trackers support consistent planning and tracking for most teams.
Quality & Risk Management | 8 | Templates and checklists for quality, validation, risks, issues, and gates are comprehensive for a template-based approach.
Measurement & Control | 7 | `PROCESS_METRICS` provides a simple KPI set and table, but usage is optional and not mandated across projects.
Organizational Learning | 7 | Retrospectives, benefits tracking, and updates to `BEST_PRACTICES` and audits support learning, but no central change-log or review cadence is enforced.
Training & Onboarding | 8 | `PLAYBOOK_ONBOARDING_GUIDE` and ceremony docs make it easy to onboard new PMs/teams, though formal training programs are out of scope.
Continuous Optimization | 7 | The presence of audits and metrics enables optimization, but cross-project analysis and systematic improvement cycles are left to organizations.

### Maturity scale

- **1 – Initial:** Unpredictable, poorly controlled, reactive.
- **2 – Managed:** Projects planned and tracked; basic discipline.
- **3 – Defined:** Processes documented, standardized and integrated.
- **4 – Quantitatively Managed:** Processes measured and controlled.
- **5 – Optimizing:** Focus on continual improvement using quantitative feedback.

## Scoring barème (out of 10)

The 5 maturity levels are mapped to a 0–10 score as follows:

- Level 1 – Initial: **0–3/10**
- Level 2 – Managed: **4–5/10**
- Level 3 – Defined: **6–7/10**
- Level 4 – Quantitatively Managed: **8–9/10**
- Level 5 – Optimizing: **10/10**

The current **8/10** reflects a strong Level 3 (Defined) baseline with emerging Level 4 characteristics via simple process metrics and audits; however, regular use of those metrics and cross‑project optimization is not yet institutionalized in the template.

## Assessment by key area

- **Process definition (Level 3 – Defined):**
  - You have a documented, repeatable process with clear artefacts for each phase (workshops, agile delivery, governance, QA, deployment) tailored to predictive analysis / ML.

- **Project planning & tracking (Level 3–4):**
  - Workshop planner, sprint planning, and trackers show consistent planning and tracking; for many teams this already feels like Level 4.

- **Quality & risk management (Level 3):**
  - Templates and checklists are present and clear; consistency of measurement and trend analysis can be strengthened when teams are ready.

- **Organizational learning (Level 2–3):**
  - Retrospectives and benefits tracking exist; an explicit step to update standards and training would complete the loop.

## Overall maturity judgement

- **Overall maturity level:** around **Level 3 (Defined)**, with early Level 4 traits in planning & tracking for most teams.
- **Numeric summary:** considering strengths and gaps, an overall maturity score of **8/10** is appropriate for your current template and target audience (non‑expert PMs using a ready‑made playbook).

## Suggestions to progress toward Level 4–5

1. **Use the lightweight measurement framework:**
  - `docs/PROCESS_METRICS.md` defines simple process KPIs and a tracking table; encourage teams to populate this per sprint or phase.

2. **Feed metrics and lessons into standards:**
  - After each project, review retros, issues, benefits, and `docs/PROCESS_METRICS.md`, and record process changes in `docs/BEST_PRACTICES.md` (e.g., a running change log section).

3. **Training & onboarding (still a gap for some organizations):**
  - For organizations that need it, add a short "How to use this playbook" training script/slide outline in a user guide or dedicated training file to ensure new PMs/teams use the process consistently.

## Concrete path to 10 / 10

To move from this solid **9/10** (between Defined and Quantitatively Managed) to **10/10** (Optimizing):

1. **Standardize and use the minimal KPI set**
  - Use the KPIs suggested in `docs/PROCESS_METRICS.md` (lead time, cycle time, throughput, WIP, blockers, incidents) as the baseline set.
  - Record them per project and review during retrospectives and benefits reviews.

2. **Systematically feed metrics into improvements**
  - When metrics indicate recurring delays or defects, create specific improvement actions (e.g., new checklist items, refined workshop agendas) and log them in `docs/BEST_PRACTICES.md`.
  - Track completion of those actions and their impact on subsequent projects.

4. **Institutionalize training and onboarding**
  - Use the training script/user guide to onboard every new PM or team using this playbook.
  - Include examples of metrics and improvements to create a culture of data-driven refinement.

5. **Audit periodically against your own standard**
  - Once or twice a year, re-run these maturity and reference-based audits and compare scores over time.
  - Update the process, templates, and training based on audit findings, closing the loop toward continuous optimization.

---

**Overall maturity view:** a well-designed, defined process that is ready to be measured and optimized across multiple predictive analysis / ML projects.
