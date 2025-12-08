Definition Of Done (DoD)

Purpose
- Provide a clear, testable set of exit criteria for user stories and sprint deliverables so the team and stakeholders share the same expectations.

General Rules (apply to every user story or backlog item)
- Acceptance Criteria: All acceptance criteria listed on the story are implemented and verified.
- Code Quality: Code is peer-reviewed (PR approved) and follows project coding standards.
- Tests: Unit tests and integration tests covering the change exist and pass locally and in CI. Test coverage for new code is acceptable per team threshold.
- Static Analysis: Linting and static analysis checks pass.
- Data Validation: Data pipelines and queries produce correct results against provided sample datasets; data schema changes are documented.
- Performance: No regressions in critical model-serving queries, prediction latency, or key dashboard/app views; performance tests (if applicable) pass or are documented with mitigation.
- Security & Privacy: Security review completed for changes that touch sensitive data; secrets and credentials are not hard-coded.
- Documentation: User-facing documentation, release notes, and runbook entries (if applicable) are updated. Technical docs updated for schema, ETL, and transformation logic.
- Deployment: Changes are deployed to a staging environment and smoke-tested.
- Demo & Acceptance: Feature is demoed to Product Owner / stakeholder and receives formal acceptance (comment or sign-off in Decision Log or ticket).

Exit Criteria for Sprint Increment
- All committed sprint items marked as Done meet the General Rules above.
- No critical or high-priority defects remain open without an agreed mitigation plan.
- Release notes for the increment are prepared.
- Acceptance sign-off recorded in `templates/DECISION_LOG.md` or the relevant story/ticket.

When DoD can be relaxed
- In specific, pre-approved spikes or research tasks, the team may agree a temporary, reduced DoD. Any relaxation must be documented in the sprint notes and approved by the Product Owner.

Governance
- DoD is reviewed quarterly or at the start of each release planning session and updated as needed.
- Team members should reference this DoD during Sprint Planning and when creating acceptance criteria.

Examples (short)
- Simple UI bug fix: PR approved, unit tests pass, deployed to staging, PO verifies — Done.
- New KPI / model output: ETL/feature transformations implemented and tested, model outputs (and any dashboard/app visuals) created with acceptance criteria met, performance validated, stakeholder demo + sign-off — Done.

Related files
- `agile/SPRINT_BACKLOG_TEMPLATE.csv`
- `templates/ACCEPTANCE_CRITERIA.md`
- `templates/DECISION_LOG.md`
- `docs/TEST_UAT_PLAN.md`
