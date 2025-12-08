Predictive Analysis Project Template

Purpose

How to use
 - For a guided tour of the structure, start with `docs/PLAYBOOK_ONBOARDING_GUIDE.md`.
 
High-level architecture
- `web/` – Single-page "Predictive Analysis Project Playbook" UI (open `web/index.html` in a browser). This is the main entry point for managers, business, data scientists, and ML engineers.
- `templates/WORKSHOP_DETAILED_SESSION_PLAN.csv` – Single source of truth for all workshops (id, timing, participants, priority, deliverables).
- `communication/COMM_0X_*.md` – Per-workshop communication plans (email templates, reminders, best-practice checklists).
- `docs/`, `deliverables/`, `workshops/`, `agile/`, `templates/`, `follow_up/`, `scripts/` – Content libraries referenced from the web UI.

How to use for a new project
- Copy this folder per new predictive analysis project.
- Update the high-level context in `docs/PROJECT_BRIEF.md`, `docs/PROJECT_CHARTER (C).md`, and `docs/PROJECT_PLAN (C).md`.
- Adapt `templates/WORKSHOP_DETAILED_SESSION_PLAN.csv` with your actual dates, priorities, and participants.
- Open `web/index.html` in a browser and use the UI as the primary playbook to navigate artifacts, workshops, and comms.

Section map (as seen in the web UI)
- **Overview** – Explains the approach (PMI + Agile) and audiences; use this when onboarding new stakeholders.
- **Timeline & Workshops** –
	- Workshop planner and Gantt view are driven by `templates/WORKSHOP_DETAILED_SESSION_PLAN.csv`.
	- Each row links to pre-work, agenda (`workshops/`) and comms plans (`communication/COMM_0X_*.md`).
- **PMI & Governance** – Links to `docs/PROJECT_CHARTER (C).md`, `docs/PROJECT_PLAN (C).md`, `docs/DATA_GOVERNANCE (C).md`, `docs/MODEL_VALIDATION_PLAN (C).md`, `02_GATING_CHECKLIST (C).md`, `01_PMI_BEST_PRACTICES (C).md`, and logs (`templates/DECISION_LOG.md`, `templates/RISK_REGISTER.md`, `templates/ISSUE_LOG.md`, `templates/ACTION_LOG.csv`).
- **Agile Delivery** – Provides user story templates, DoD, sprint backlog & metrics, and release planning assets under `agile/`.
- **Artifacts Library** – Curated access to all major docs in `docs/`, `deliverables/`, `workshops/`, `follow_up/`, and key `scripts/`.

Quick start (PMI / waterfall-style)
1) Initiate & govern
	- Fill `docs/PROJECT_BRIEF.md` and `docs/PROJECT_CHARTER.md`.
	- Review PMI guidance in `PMI/PMI_BEST_PRACTICES.md`.
2) Plan workshops & milestones
	- Use `00_WORKSHOP_TIMEPLAN (C).md` to sequence workshops and gates.
	- Schedule workshops using agendas and pre-work in `workshops/` (numbered files such as `01_WORKSHOP_AGENDA_KICKOFF.md`, `02_PRE_WORK_DATA_DISCOVERY.md`).
3) Define deliverables
	- Capture model specifications in `deliverables/MODEL_SPEC.md` and data sources in `deliverables/DATA_INVENTORY.md`.
	- Document architecture and prediction outputs in `deliverables/ARCHITECTURE.md` and `deliverables/PREDICTION_OUTPUT_SPEC.md`.
4) Control & gates
	- Use `PMI/GATING_CHECKLIST.md` during milestone reviews.
	- Track decisions, actions, risks and changes via `templates/DECISION_LOG.md`, `templates/ACTION_LOG.csv`, `templates/RISK_REGISTER.md`, `templates/CHANGE_REQUEST.md`.

Quick start (Agile / sprint-based)
1) Set up Agile workflow
	- Agree team ways-of-working using `docs/TEAM_CHARTER.md`.
	- Review `agile/DEFINITION_OF_DONE.md` and `agile/DOD_CASES.md`.
2) Plan a sprint
	- Capture candidate work in `agile/SPRINT_BACKLOG_TEMPLATE.csv`.
	- Estimate capacity with `agile/CAPACITY_PLANNING.md` and define the sprint in `agile/SPRINT_TEMPLATE.md`.
3) Run ceremonies
	- Use `agile/SPRINT_PLANNING.md`, `agile/DAILY_STANDUP.md`, `agile/SPRINT_REVIEW.md`, `agile/RETROSPECTIVE.md` to facilitate.
4) Track progress
	- Update `agile/VELOCITY_TRACKER.csv` and `agile/BURNDOWN_TEMPLATE.csv` each sprint.
	- For releases, use `agile/RELEASE_PLAN.md`, `agile/DEPLOYMENT_CHECKLIST.md` and `agile/RELEASE_NOTES_TEMPLATE.md`.

Operate & measure

Operating model (PMI + Agile together)

Contact
Replace this README footer with project-specific contact and repository links as needed.

PMI gating criteria: this repository includes PMI-aligned artifacts and gating guidance. For each major milestone (Data Discovery, Feature Engineering, Model Training, Validation, Deployment), ensure the gating checklist is satisfied before proceeding; see `00_WORKSHOP_TIMEPLAN (C).md` and `01_PMI_BEST_PRACTICES (C).md` for specific criteria and sign-off guidance.