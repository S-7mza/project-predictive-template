Environment Inventory

Use this document to capture environment details for Dev / Staging / Prod used by the project.

Environment | Purpose | Host / URL | Owner | Access method | Credentials vault location | Notes
---|---|---|---|---|---|---
Dev | Development and prototyping (models, pipelines, and consuming apps) | [host] | [owner] | VPN/SSO | [vault link] | Sample/Masked data recommended
Staging | Pre-production testing for model deployments and integrations | [host] | [owner] | VPN/SSO | [vault link] | Mirror prod for UAT
Prod | Production model serving and consumption (APIs, batch jobs, dashboards, applications) | [host] | [owner] | SSO/managed | [vault link] | Monitoring and alerts active

Include network, firewall, subnet, and region info if relevant. Do not store credentials in repo.