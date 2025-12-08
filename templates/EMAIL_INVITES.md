Email Invite Templates for Workshops

Guidance: Use these templates as starting points. Include links to required documents, the meeting agenda, and the pre-work items.

1) Kickoff — Invite
Subject: Kickoff — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

You are invited to the project kickoff for **[PROJECT_NAME]**.

When: [DATE, TIME]
Duration: 60-90 minutes
Location: [meeting link]

Purpose: Align on objectives, scope, timeline and success criteria.

Please review before the meeting:
- `docs/PROJECT_BRIEF.md` (fill the placeholders)
- Draft `docs/PROJECT_PLAN.md`

Please come prepared to:
- Confirm objectives and constraints
- Identify key stakeholders and their availability

Attachments: `docs/PROJECT_BRIEF.md`, agenda (Kickoff)

Best,
[PM]

---

2) Technical Data Discovery — Invite
Subject: Technical Data Discovery — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

You are invited to the Technical Data Discovery session for **[PROJECT_NAME]**.

When: [DATE, TIME]
Duration: 90-120 minutes
Location: [meeting link]

Purpose: Inventory data sources, confirm access, review sample extracts and identify data quality gaps.

Required pre-work (please complete 3-7 days before):
- Provide a sample extract (CSV or query LIMIT 1000) for each data source.
- Send connection details and contact person for each source.
- Mark any fields that are sensitive or restricted.

Required attendees: Data owners, ETL engineers, BI developers.

Attachments: `deliverables/DATA_INVENTORY.md`, list of requested sample files.

Best,
[PM]

---

3) Data Modeling / Semantic Layer — Invite
Subject: Data Modeling — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

Please join the Data Modeling workshop to agree canonical entities, grain, keys and semantic logic.

When: [DATE, TIME]
Duration: 90 minutes
Location: [meeting link]

Pre-work:
- Review `deliverables/DATA_INVENTORY.md` and sample extracts.
- Propose definitions for primary entities and suggested grain.

Attachments: `deliverables/DATA_INVENTORY.md`, `deliverables/KPI_SPEC.md`

Best,
[PM]

---

4) ETL / Pipeline Design — Invite
Subject: ETL Design — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

Invite to design ETL pipelines, schedules, error handling and deployment approach.

When: [DATE, TIME]
Duration: 90 minutes
Location: [meeting link]

Pre-work:
- ETL owners to draft pseudo-SQL or diagrams for key transforms.
- Confirm target compute and scheduler details.

Attachments: ETL diagram drafts, `deliverables/ARCHITECTURE.md`.

Best,
[PM]

---

5) Model Consumption UX / Dashboard Design — Invite
Subject: Model Consumption UX / Dashboard Design — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

Join us to translate KPIs into wireframes and visualization choices.

When: [DATE, TIME]
Duration: 60-90 minutes
Location: [meeting link]

Pre-work:
- Product owner: list top 5 questions users need model outputs (predictions) to answer quickly (whether via dashboard, report, or app).
- Designers: bring initial wireframes or sketches.
- BI: prepare mock charts using sample data.

Attachments: `deliverables/KPI_SPEC.md`, wireframes.

Best,
[PM]

---

6) Performance & QA / Validation — Invite
Subject: QA & Validation — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

Purpose: Define acceptance tests, performance targets and validation checks.

When: [DATE, TIME]
Duration: 60-90 minutes
Location: [meeting link]

Pre-work:
- Provide baseline query runtimes and expected totals.
- Draft a small set of validation queries.

Attachments: QA checklist, sample validation queries.

Best,
[PM]

---

7) Deployment & Monitoring — Invite
Subject: Deployment & Monitoring — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

Purpose: Agree deployment, runbooks, monitoring and alerts.

When: [DATE, TIME]
Duration: 60 minutes
Location: [meeting link]

Pre-work:
- Ops: provide environment and access details.
- Prepare proposed monitoring metrics and alert thresholds.

Attachments: `scripts/README.md`, draft runbook.

Best,
[PM]

---

8) User Training & Handoff — Invite
Subject: User Training — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

Purpose: Train end-users and hand over runbooks and materials.

When: [DATE, TIME]
Duration: 60-90 minutes
Location: [meeting link]

Pre-work:
- Provide list of attendees and their proficiency level.
- Share training slides or user guide drafts.

Attachments: training slides, `follow_up/FUP_TEMPLATE.md`.

Best,
[PM]

---

9) Retrospective — Invite
Subject: Retrospective — [PROJECT_NAME] — [DATE]

Body:
Hello [Name],

Purpose: Review what went well, what to improve, and next steps.

When: [DATE, TIME]
Duration: 45-60 minutes
Location: [meeting link]

Pre-work:
- Submit feedback and a short list of major blockers experienced.
- Bring metrics or tickets that illustrate key points.

Attachments: action log extract, bug/issue list.

Best,
[PM]
