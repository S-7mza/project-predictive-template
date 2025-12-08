Project Charter — [PROJECT_NAME]

Project Sponsor: [SPONSOR]
Project Manager: [PM]
Start Date: [START_DATE]
Target Delivery Date: [TARGET_DATE]

1. Purpose and Background
- Brief background: why the predictive model is initiated, business context, forecasting or prediction needs.
- Purpose: what decisions the model will enable, automated predictions to provide, and primary users.

2. Objectives / Success Criteria
- Objective 1: e.g., Deliver predictive model with X% accuracy for forecasting Y by Z date.
- Objective 2: Enable automated predictions reducing manual analysis time by Z%.
- Success criteria: List measurable acceptance criteria (model accuracy, precision, recall, F1-score, RMSE, MAE, inference latency, explainability thresholds).

3. Scope
- In-scope: target variables, feature sources, model types (regression, classification, time series), training data, deployment infrastructure, prediction frequency.
- Out-of-scope: items not included in this release (advanced ensemble methods, real-time streaming inference, exploratory what-if scenarios).

4. Deliverables
- `deliverables/MODEL_SPEC.md` completed for all agreed models and target variables.
- `deliverables/DATA_INVENTORY.md` completed with feature sources.
- Trained and validated models with performance reports.
- Model deployment pipeline and inference endpoints.
- Model documentation, monitoring views or dashboards (for model performance and data drift), and user guides for consuming and interpreting predictions.

5. Milestones (high-level)
- Kickoff: [date]
- Complete Data & Feature Discovery: [date]
- Feature engineering and data prep completed: [date]
- Model training and selection: [date]
- Model validation and performance testing complete: [date]
- Model deployment & monitoring setup: [date]

6. Budget & Resources
- Estimated budget: [amount]
- Core team: PM, Data Science Lead, Data Scientists, ML Engineers, Data Engineers, MLOps, QA
- Compute resources: Training infrastructure, model registry, serving infrastructure
- External vendors: [if any]

7. Roles & Responsibilities
- Sponsor: Approve scope, budget, and model performance criteria.
- PM: Manage schedule, risks, and communications.
- Data Science Lead: Technical ownership of model design, feature selection, and performance targets.
- ML Engineers: Model training pipeline, hyperparameter tuning, model deployment.
- Data Engineers: Feature engineering, data pipelines, and feature store.
- MLOps: Model versioning, deployment automation, monitoring, and retraining workflows.
- Product Owner: Prioritize prediction requirements and accept validation results.

8. Constraints & Assumptions
- Historical data will be provided within X days of kickoff.
- Sensitive features require masking or anonymization.
- Model must meet explainability requirements for regulatory compliance.
- Infrastructure will support required training compute and inference load.

9. Major Risks & Mitigation
- Risk: Insufficient historical data quality — Mitigation: early data profiling, agreed quality thresholds, data cleaning sprint.
- Risk: Model performance below target — Mitigation: multiple model experiments, ensemble methods, feature engineering iterations.
- Risk: Model drift in production — Mitigation: monitoring dashboards, automated retraining triggers, A/B testing framework.
- Risk: Model drift in production — Mitigation: monitoring views/dashboards and alerts, automated retraining triggers, A/B testing framework.

10. Approval
- Sponsor: [name / signature / date]
- PM: [name / signature / date]

Notes
- Attach `docs/PROJECT_BRIEF.md`, `deliverables/DATA_INVENTORY.md`, `deliverables/MODEL_SPEC.md` and `templates/RACI.md` for reference.