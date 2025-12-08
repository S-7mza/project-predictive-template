Monitoring & SLO Checklist

Purpose
- Define what to monitor for the predictive model and its ecosystem (data pipelines, features, model performance, KPIs, infrastructure) and the service-level objectives (SLOs).

Monitoring Scope
- ETL / feature pipelines
- Data quality checks
- Model performance and drift
- Availability and performance of model-serving interfaces (APIs, batch jobs, dashboards, applications)

SLOs & Metrics
| Area | Metric | Target / SLO | Owner | Tool / Dashboard |
|------|--------|--------------|-------|------------------|
| ETL / feature freshness | Time since last successful load / feature computation | [e.g., < 2h] | Data Engineer | [Monitoring tool link] |
| ETL / feature reliability | Failed jobs per week | [e.g., < 1] | Data Engineer | |
| Data / KPI accuracy | Reconciliation error | [e.g., < 1%] | Data Owner | |
| Model performance | Key metric vs baseline (e.g., AUC, F1, MAPE) | [e.g., no more than X% degradation] | Data Science / ML Lead | |
| Model drift | Data or prediction drift indicators | [e.g., within defined thresholds] | Data Science / ML Lead | |
| Serving availability | Uptime of model-serving endpoints / consuming UI | [e.g., 99.5%] | Ops | |
| Serving performance | P95 response time / page load time | [e.g., < 500ms API / < 5s UI] | Ops / BI Lead | |

Alerts & Escalation
- Define alert thresholds for each metric.
- Map to escalation path in `follow_up/FUP_TEMPLATE.md`.

Runbooks
- For each critical alert, link to a runbook page or script in `scripts/` explaining how to investigate and resolve.

Review
- Review SLOs quarterly or when usage patterns change.
