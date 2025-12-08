# Communication Plan – Workshop 3: Data Modeling / Semantic Layer

This plan ensures everyone understands how **business concepts** will be translated into a **data model / semantic layer** and what decisions must be taken in this workshop.

---

## 1. Objectives

- Lifecycle role: turn Data & Feature Discovery outputs into a concrete **feature and data model design** that the ETL/feature pipelines and model training will implement.
- Align business and technical stakeholders on the **logical data model**, **feature sets**, and **semantic layer** that will support the predictive model and any consuming UIs/dashboards.
- Define **facts, dimensions, measures, and hierarchies** that support the agreed KPIs.
- Decide on **naming conventions, grain, and aggregation rules**.
- Identify modeling constraints from **source data** and **tooling** (e.g., Power BI, Tableau, Looker, custom solution).

---

## 2. Stakeholder Groups

- **Tech Manager** (facilitator, ensures feasibility)
- **BI Lead / Analytics Engineer**
- **Product Owner / Business SMEs**
- **Data Modeler / Architect**
  

---

## 3. Timeline & Touchpoints

- **T–7 to T–5:** Invite + context + link to **confirmed KPIs** and **data discovery outcomes**.
- **T–3:** Detailed agenda + pre-work (review KPI spec, propose initial model sketch if available).
- **T–0 morning:** Reminder + focus on key decisions to be made.
- **T+0 / T+1:** Recap + link to **modeling decisions**, updated **KPI spec**, and **action log**.
- **T+3:** Checkpoint on any open modeling decisions or data constraints.

---

## 4. Pre-Workshop Email – Save the Date (T–7 to T–5)

**From:** Tech Manager  
**To:** BI lead; data modeler; Product Owner; business SMEs  
**Subject:** `[Predictive Analysis Project] Data Modeling / Feature Design – hold the date`

Hi all,

Following the **Technical Data & Feature Discovery** workshop, we will run a **Data Modeling / Feature Design workshop** to agree how the data will be structured to support the predictive KPIs and model features.

**Objective:**
- Define the **analytics/feature model** (facts, dimensions, hierarchies, features, business rules) that will power the predictive model and any dashboards/UIs that consume its outputs.

**Proposed slot:** Week X, Day Y – 90–120 minutes  
**Participants:** BI lead, data modeler/architect, Product Owner, key business SMEs, Tech Manager

Please keep this time blocked. A detailed agenda and pre-work will follow.

Best regards,
Tech Manager

---

## 5. Pre-Workshop Email – Agenda & Pre-work (T–3)

**From:** Tech Manager  
**To:** Confirmed participants  
**Subject:** `[Predictive Analysis Project] Data Modeling / Feature Design – agenda & pre-work`

Hi all,

Here are the details for the **Data Modeling / Semantic Layer workshop**.

**When:** Week X, Day Y – 90–120 minutes  
**Where:** `<meeting room or virtual link>`  
**Participants:** BI lead; data modeler/architect; Product Owner; SMEs; Tech Manager

**Draft agenda**
1. Recap of business objectives and confirmed KPIs (10–15 min)
2. Summary of available data and constraints from discovery (15–20 min)
3. Proposed conceptual / logical model (facts, dimensions, grain) (30–40 min)
4. Discussion of business rules, calculations, and hierarchies (20–30 min)
5. Prioritization of model scope (MVP vs. later phase) (10–15 min)
6. Actions, decisions, and next steps (10–15 min)

**Pre-work**
- **Product Owner / SMEs:** Review `deliverables/KPI_SPEC (C).md` and confirm priority KPIs and definitions.  
- **BI / data modeler:** Prepare a **draft model diagram** (or table list) based on discovery outcomes.  
- **All:** List any **non-negotiable business rules** (e.g., how to define “active customer”, “qualified lead”) that must be reflected in the model.

Please share any questions or concerns on scope, tooling, or constraints ahead of time.

Best regards,
Tech Manager

---

## 6. Same-Day Reminder (T–0 morning)

**From:** Tech Manager  
**To:** Participants  
**Subject:** `Reminder – Predictive Analysis Project Data Modeling / Feature Design today`

Hi all,

A quick reminder that our **Data Modeling / Semantic Layer** workshop is today:

- **Time:** `<time>`  
- **Duration:** 90–120 minutes  
- **Location / Link:** `<meeting details>`

Please come prepared with:
- Your view on the **most critical KPIs** to support.
- Any **constraints** you see around data definitions or granularity.
- Comments on the **draft model** (if already circulated).

See you there,
Tech Manager

---

## 7. Post-Workshop Email – Recap & Actions (T+0 / T+1)

**From:** Tech Manager  
**To:** Participants; Sponsor / key stakeholders (as needed)  
**Subject:** `[Predictive Analysis Project] Data Modeling / Feature Design – recap & next steps`

Hi all,

Thank you for the productive **Data Modeling / Semantic Layer** session. Here is a summary of what we agreed.

**1. Model scope & boundaries**  
- `<describe main subject areas and what is in/out of scope>`

**2. Facts, dimensions, and grain**  
- `<list core fact tables and their grain, key dimensions, and relationships>`

**3. Key measures & business rules**  
- `<list the main measures, including their business definitions and calculation logic>`

**4. Open points and constraints**  
- `<summarize any open questions, dependencies on data quality, performance concerns, etc.>`

**5. Actions**  
- Logged in `templates/ACTION_LOG.csv` with **owners** and **due dates** (e.g., refine model, validate rules with finance, test performance, etc.).

**6. Next steps**  
- Update `deliverables/KPI_SPEC (C).md` and any **modeling documentation**.  
- Hand over to **ETL / pipeline design** (Workshop 4) with a clear view of required structures.

Best regards,
Tech Manager

---

## 8. What to Check for a “Perfect” Modeling Communication Plan

To ensure communication is robust for this workshop, verify that:

- **Inputs are aligned:** Everyone has a shared view of **KPIs**, Data & Feature Discovery outputs, and lifecycle context (we are between Discovery and ETL/Feature Pipeline Design) before the meeting.
- **Decisions are explicit:** The recap clearly lists modeling decisions and what is still open.
- **Dependencies are visible:** Any dependency on later **data quality fixes** or **tool configuration** is recorded.
- **Artifacts are linked:** Emails point to the updated `deliverables/KPI_SPEC (C).md`, data model diagrams, and `templates/DECISION_LOG.md`.
- **Scope is realistic:** Communication makes clear what is **MVP** vs. later phase to avoid over-promising.
- **Traceability:** There is a clear thread from **Project Charter** → **KPI spec** → **Data & Feature Discovery** → **Model/feature design** so stakeholders can follow the logic into later ETL and model training.

If these points are covered, your modeling communication plan will help avoid confusion and rework downstream.
