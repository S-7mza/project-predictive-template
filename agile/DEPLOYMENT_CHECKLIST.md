Deployment Checklist (Agile)

Pre-deployment
- [ ] UAT sign-off recorded (`templates/DECISION_LOG.md`).
- [ ] P0 defects closed; P1/P2 with mitigation plan.
- [ ] Runbook updated (`docs/CONFIGURATION_MANAGEMENT.md` / deployment runbook).
- [ ] Backups or snapshots verified.
- [ ] Rollback plan tested.

Deployment Steps
- [ ] Announce maintenance window if required.
- [ ] Run deployment script / pipeline (link to `scripts/deploy.ps1` or CI job).
- [ ] Apply schema/ETL changes where needed.
- [ ] Validate successful job completion.

Post-deployment
- [ ] Smoke tests run (key views, KPIs, logins).
- [ ] Monitoring and alerts enabled and checked (`docs/MONITORING_SLO_CHECKLIST.md`).
- [ ] Access/permissions confirmed for target user groups.
- [ ] Release notes published (`agile/RELEASE_NOTES_TEMPLATE.md`).

Sign-off
- Deployed by: [Name/date]
- Approved by: [PO/Sponsor]
- Links to artifacts: [UAT results, model monitoring views/dashboards].
