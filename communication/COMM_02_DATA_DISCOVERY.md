# Communication Plan – Workshop 2: Technical Data Discovery (deep)

This plan ensures that everyone involved in data discovery knows **why** the session matters, **what** is expected of them, and **how** outcomes will be tracked and followed up.

---

## 1. Objectives

- Ensure data owners and technical teams clearly understand **scope and objectives** of data discovery.
- Confirm which **systems, tables, KPIs, and APIs** are in scope for the dashboard.
- Align on **access constraints, privacy/security requirements, and data quality expectations**.
- Capture **open questions and risks** in a structured data discovery log.

---

## 2. Stakeholder Groups

- **Tech Manager** (overall lead and facilitator)
- **Product Owner** (business context and priorities)
- **Data Owners / Domain SMEs**
- **ETL / Data Engineers**
- **BI Developers / Analytics Engineers**
- **Security & Compliance** (as needed)

---

## 3. Timeline & Touchpoints

- **T–7 to T–5:** Initial invite with objectives + who should attend.
- **T–3:** Detailed agenda + required pre-work (sample extracts, data dictionaries, system diagrams).
- **T–0 morning:** Same-day reminder with concrete expectations.
- **T+0 / T+1:** Recap + link to the **Data Discovery Log** and updated **Environment Inventory**.
- **T+2 to T+3:** Targeted follow-ups on missing inputs, open questions, and access requests.

---

## 4. Pre-Workshop Email – Save the Date (T–7 to T–5)

**From:** Tech Manager  
**To:** Data owners; ETL / data engineers; BI developers; PO  
**Subject:** `[Predictive Analysis Project] Technical Data & Feature Discovery – hold the date`

Hi all,

As part of the **Predictive Analysis / ML Project**, we are organizing a **Technical Data & Feature Discovery workshop** to identify and qualify the data sources and candidate features needed for the solution.

**Objective:**
- Confirm which **systems, tables, views, and APIs** are in scope.
- Understand **access constraints**, privacy/security requirements, and **data quality** considerations.

**Proposed slot:** Week X, Day Y – 90–120 minutes  
**Participants:** Data owners, ETL/data engineers, BI developers, PO, Tech Manager

Please keep this time blocked in your calendars. A detailed agenda and pre-work will follow.

Best regards,
Tech Manager

---

## 5. Pre-Workshop Email – Agenda & Pre-work (T–3)

**From:** Tech Manager  
**To:** Confirmed participants  
**Subject:** `[Predictive Analysis Project] Technical Data & Feature Discovery – agenda & pre-work`

Hi all,

Thank you for holding time for the **Technical Data Discovery workshop**. Below are the details and expectations.

**When:** Week X, Day Y – 90–120 minutes  
**Where:** `<meeting room or virtual link>`  
**Participants:** Data owners; ETL/data engineers; BI developers; PO; Tech Manager

**Draft agenda**
1. Context & business objectives recap (10–15 min)
2. Systems landscape: applications, databases, APIs (20–30 min)
3. Deep dive per domain/table: availability, latency, volumes, history (30–40 min)
4. Data quality, privacy, and security constraints (20–30 min)
5. Open questions, risks, and next steps (15–20 min)

**Pre-work (to be completed before the session)**
- **Data owners / SMEs**: List key systems and tables that support the in-scope KPIs.  
- **ETL / data engineers**: Prepare **sample extracts** or **schemas** where possible (even with limited rows).  
- **Security / compliance**: Flag sensitive domains (PII, financial, HR, etc.) and any **must-have controls**.  
- **All**: Review any existing data dictionaries, lineage documentation, or data catalogs.

Please send any **known constraints or blockers** (access, latency, quality, regulatory) ahead of time so we can structure the discussion efficiently.

Best regards,
Tech Manager

---

## 6. Same-Day Reminder (T–0 morning)

**From:** Tech Manager  
**To:** Participants  
**Subject:** `Reminder – Predictive Analysis Project Technical Data & Feature Discovery today`

Hi all,

A quick reminder that our **Technical Data Discovery workshop** is today:

- **Time:** `<time>`  
- **Duration:** 90–120 minutes  
- **Location / Link:** `<meeting details>`

Please come prepared with:
- Clarity on your **systems and datasets** in scope.
- Any known **data quality issues**, **access limitations**, or **privacy constraints**.
- Pointers to any **existing documentation** we should reuse rather than recreate.

See you there,
Tech Manager

---

## 7. Post-Workshop Email – Recap & Actions (T+0 / T+1)

**From:** Tech Manager  
**To:** Participants; key tech stakeholders; PO (cc Sponsor as needed)  
**Subject:** `[Predictive Analysis Project] Technical Data & Feature Discovery – recap & next steps`

Hi all,

Thank you for your contributions in the **Technical Data Discovery workshop**. Below is a short recap and the agreed next steps.

**1. Confirmed systems and domains**  
- `<list of systems (e.g., DWH, CRM, ERP, web tracking, etc.)>`

**2. Key tables/views / APIs in scope**  
- `<list the priority tables/views/APIs mapped to KPIs>`

**3. Access, privacy, and security constraints**  
- `<summary of access needs, role-based controls, masking, anonymization, etc.>`

**4. Data quality & technical risks**  
- `<top 3–5 issues: completeness, timeliness, history, duplicates, etc.>`

**5. Actions**  
- Logged in `templates/ACTION_LOG.csv` with **owner**, **due date**, and **status**.  
- Data discovery details captured in a **Data Discovery Log** (sheet or file linked from `docs/ENVIRONMENT_INVENTORY.md` or `docs/DATA_GOVERNANCE (C).md`).

**6. Next steps**  
- Validate feasibility of key KPIs given available data.  
- Confirm and document required **ETL / integration work**.  
- Feed confirmed structures into **data modeling / semantic layer design** (Workshop 3).

Best regards,
Tech Manager

---

## 8. What to Check for a “Perfect” Data Discovery Communication Plan

To ensure this communication stream is **best-in-class**, verify that:

- **Audience is complete:** All relevant systems owners, domain SMEs, and data engineers are invited (no critical system left out).
- **Expectations are explicit:** Every email clearly states what is expected **before**, **during**, and **after** the workshop.
- **Links to artifacts:** Invites and recaps reference concrete artifacts: `docs/ENVIRONMENT_INVENTORY.md`, `docs/DATA_GOVERNANCE (C).md`, `docs/CONFIGURATION_MANAGEMENT.md`, discovery logs, and `templates/ACTION_LOG.csv`.
- **Risks and constraints are visible:** Recaps highlight **gaps and risks**, not only what worked.
- **Decisions are documented:** Any decision on systems/tables in or out of scope is logged in `templates/DECISION_LOG.md`.
- **Follow-ups are closed:** Reminders (T+2/T+3) explicitly chase **missing samples, extracts, or approvals**, not just “pinging”.
- **Consistency of narrative:** The story told here aligns with the **Project Brief**, **Project Charter**, and the downstream **modeling and ETL workshops**.

If all of the above are satisfied, communication around Technical Data Discovery should be clear, anticipatory, and reliable.
