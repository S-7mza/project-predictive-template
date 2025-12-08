Technical Data & Feature Discovery — Pre-work Checklist

Send 5–7 working days before the session for access provisioning; 3 days minimum for samples.

Required items from data owners
- Connection details: host, port, database, schema, sample user/contact person.
- Small sample extract for each source (CSV or SQL `LIMIT 1000`) and a representative larger sample if possible.
- Data dictionary or schema documentation for key tables.
- Row counts for primary tables and refresh frequency.
- Note any PII/sensitive fields and applicable compliance rules.

Required items from BI/ETL teams
- List of tools and clients to be used (SQL client, transformation engine, scheduler).
- Initial list of expected joins and key fields.

Attachments to include in invite
- `deliverables/DATA_INVENTORY.md` (template)
- Example SQL templates for sample queries (see `templates`).

Goals for the session
- Inventory sources, access paths, and candidate feature locations.
- Confirm sample extracts and initial data quality observations relevant to the predictive use case.
- Identify blockers requiring remediation before feature engineering and model training.

Post-meeting outputs
- Completed `deliverables/DATA_INVENTORY.md` entries.
- Action items for access provisioning, remediation, or alternative sources.
