Architecture & Data Flow

Overview:
- High-level diagram placeholder: source -> ETL -> DW/model -> BI layer -> Users

Components:
- Sources: list
- ETL/Transformations: tools, schedules, idempotency notes
- Data warehouse/tables: model schema description
- BI Layer: tool, version, compute sizing

Non-functional requirements:
- Latency, concurrency, retention, backups

Deployment & infra notes:
- Where model-serving components and any dashboards/UIs are hosted, access controls, secrets management.