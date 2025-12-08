Model Specification

Project: [PROJECT_NAME]

Model: [MODEL_NAME]
Purpose: What this model predicts and why it matters to the business.
Owner: [DATA_SCIENCE_LEAD]

Target Variable(s): [e.g., customer_churn, sales_forecast, risk_score]
Prediction Type: [Classification / Regression / Time Series / Clustering]

Feature Sources:
- Primary features: [table.column, feature_store.feature_name]
- Derived features: [calculated features, transformations]
- Historical window: [e.g., 90 days, 12 months]

Training Data:
```
Data range: [start_date to end_date]
Sample size: [N records]
Train/Val/Test split: [70/15/15% or other]
```

Algorithm(s): [e.g., Random Forest, XGBoost, Neural Network, LSTM]
Hyperparameters: [key parameters and tuning approach]

Performance Metrics:
- Accuracy / Precision / Recall / F1-Score: [target thresholds]
- RMSE / MAE / R²: [for regression]
- AUC-ROC: [for classification]
- Business metric: [e.g., reduction in false positives by X%]

Acceptance Criteria:
- Model must achieve [X%] accuracy on holdout test set.
- Prediction latency < [Y ms] for real-time inference.
- Explainability: SHAP values available for top features.
- Fairness: No significant bias across [demographic groups].

Inference Requirements:
- Batch vs Real-time: [batch daily, real-time API]
- Expected load: [requests per second, records per batch]
- Monitoring: drift detection, performance tracking

Dependencies: Feature engineering pipeline, model registry, serving infrastructure.
