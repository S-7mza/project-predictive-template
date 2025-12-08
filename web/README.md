# Predictive Analysis Project Playbook Web UI

This `web/` folder contains a static, modern web interface that acts as the single reference to manage the predictive analysis / machine learning project end-to-end.

## Features

- Stellantis-inspired look & feel (placeholder logo and corporate-style colors).
- Clear navigation for:
  - Overview
  - Timeline & Workshops
  - PMI & Governance
  - Agile Delivery
  - Artifacts Library
- Workshop planner table populated from the same data as `templates/WORKSHOP_DETAILED_SESSION_PLAN.csv`.
- Direct links into the Markdown and CSV artifacts in the root project.

## How to use

1. Open `web/index.html` in a browser:

   ```powershell
   # from the repo root
   Start-Process .\web\index.html
   ```

2. Use the tabs at the top to move between sections.
3. Click any artifact link to open the underlying document or template.

You can customize colors, typography, or layout in `web/styles.css` and extend the JavaScript behavior in `web/app.js` if needed.
