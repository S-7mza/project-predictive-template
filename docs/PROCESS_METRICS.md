Process Metrics for Predictive Projects

Purpose
- Provide a lightweight way to track how the delivery process is performing over time.

Suggested metrics (track per sprint or phase)
- Lead time: Days from idea / request to first usable output (e.g., first model or dashboard).
- Cycle time: Days from "in progress" to "done" for user stories.
- Throughput: Number of stories completed per sprint.
- WIP (Work in Progress): Number of active stories at any time.
- Blockers: Count of blocked stories and average time blocked.
- Incidents: Number of production incidents related to data pipelines or models.

Simple tracking table (example)

Period | Lead time | Avg cycle time | Throughput | Avg WIP | Blockers (count / avg days) | Incidents
---|---|---|---|---|---|---
[YYYY-MM] | 30 | 5 | 12 | 4 | 3 / 2 | 1

How to use
- Update this table after each sprint or major phase.
- Review trends in retrospectives and `COMM_09_RETRO_BENEFITS.md`.
- Use insights to adjust WIP, improve handoffs, or prioritize tech debt and automation.
