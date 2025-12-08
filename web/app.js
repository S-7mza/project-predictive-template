const sections = document.querySelectorAll(".content-section");
const navButtons = document.querySelectorAll(".nav-link");
const mobileTabs = document.querySelectorAll(".mobile-tab");
const navToggle = document.querySelector(".nav-toggle");
const topNav = document.querySelector(".top-nav");

function activateSection(target) {
  if (!target) return;

  navButtons.forEach((b) => {
    b.classList.toggle("active", b.dataset.section === target);
  });

  mobileTabs.forEach((t) => {
    t.classList.toggle("active", t.dataset.section === target);
  });

  sections.forEach((sec) => {
    sec.classList.toggle("active", sec.id === target);
  });

  // Clear document viewer when switching main sections
  if (typeof clearDocumentViewer === "function") {
    clearDocumentViewer();
  }

  // On small screens, collapse the nav after selection
  if (window.innerWidth <= 900 && topNav && navToggle) {
    topNav.classList.remove("open");
  }
}

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;
    activateSection(target);
  });
});

mobileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.section;
    activateSection(target);
  });
});

if (navToggle && topNav) {
  navToggle.addEventListener("click", () => {
    topNav.classList.toggle("open");
  });
}

let workshopData = [];

const tableBody = document.querySelector("#workshopTable tbody");
const filterSelect = document.getElementById("filterPriority");
const ganttContainer = document.getElementById("ganttContainer");

// Fallback embedded CSV matching templates/WORKSHOP_DETAILED_SESSION_PLAN.csv
const embeddedWorkshopCsv = `#,Session,When (relative),Duration,Pre-work lead,Required participants,Dependency,Priority,Deliverables
1,Kickoff,"Week 0","60–90 min","3 days","Sponsor; Product Owner; Data Science Lead; ML Engineers",None,"CRITICAL (High)","Updated docs/PROJECT_BRIEF.md; meeting minutes (templates/MEETING_MINUTES.md); action items in templates/ACTION_LOG.csv; initial templates/RACI.md entries; communication/COMM_01_KICKOFF.md"
2,Data & Feature Discovery (deep),"Weeks 1–3","90–120 min (may repeat per source)","5–7 days","Data Owners; Data Engineers; Data Scientists; ML Engineers","Kickoff","CRITICAL (High)","Completed deliverables/DATA_INVENTORY.md; feature source catalog; sample datasets; historical data assessment; data quality notes; communication/COMM_02_DATA_DISCOVERY.md"
2a,"Security, Privacy & Compliance","Weeks 0–1 (parallel/early)","60 min","3–5 days","Security/Compliance; Data Owner; Data Science Lead","Kickoff (or before Data Discovery)","CRITICAL (High if PII)","Data classification register; feature masking rules; compliance sign-offs; model fairness requirements; updated docs/DATA_GOVERNANCE.md; communication/COMM_02A_SECURITY_PRIVACY.md"
3,Feature Engineering & Data Prep,"Weeks 3–4","90–120 min","3–5 days","Data Science Lead; Data Engineers; ML Engineers; Data Owner","Data Discovery","CRITICAL (High)","Feature engineering pipeline; training/validation/test splits; feature store setup; documented in deliverables/ARCHITECTURE.md and deliverables/MODEL_SPEC.md mappings; communication/COMM_03_MODELING.md"
4,Model Selection & Training Design,"Weeks 4–5","90 min","3–5 days","Data Scientists; ML Engineers; Data Owner; MLOps","Feature Engineering","CRITICAL (High)","Model selection criteria; training pipeline design; hyperparameter tuning strategy; experiment tracking setup; model registry configuration (scripts/README.md); communication/COMM_04_ETL_DESIGN.md"
5,"Model Training & Experimentation","Weeks 5–7","90 min","3 days","Product Owner; Data Scientists; ML Engineers","Feature Engineering; some baseline models",High,"Trained baseline and candidate models; model performance reports; finalized deliverables/MODEL_SPEC.md; deliverables/PREDICTION_OUTPUT_SPEC.md; model artifacts in registry; communication/COMM_05_DASHBOARD_DESIGN.md (for model-consumption UX)"
6,"Model Validation & Performance Testing","Weeks 7–8","60–90 min","3 days","QA Lead; Data Scientists; ML Engineers; Data Owner","Models trained and registered",High,"Model validation plan and test cases; cross-validation and holdout results; bias and fairness analysis; performance benchmark report; A/B testing framework; communication/COMM_06_QA_VALIDATION.md"
7,Model Deployment & Monitoring,"Weeks 8–9","60 min","3–5 days","MLOps; Data Science Lead; Security","Validation pass",Medium,"Model deployment pipeline; inference endpoints (batch/real-time); monitoring dashboards; drift detection setup; model versioning and rollback procedures; communication/COMM_07_DEPLOYMENT_MONITORING.md"
8,Stakeholder Demo & Handoff,"Weeks 9–10","60–90 min","3 days","Training lead; Product Owner; end-users; business stakeholders","Deployed model",Medium,"Prediction demo and use case examples; model user guide; confidence score interpretation; completed follow_up/FUP_TEMPLATE.md; sign-off document; communication/COMM_08_TRAINING_HANDOFF.md"
9,Retrospective & Model Performance Review,"Weeks 10–11","45–60 min","2–3 days","Data Science Lead; Data Owner; MLOps; Product Owner","Post-deployment monitoring data",Low,"Retrospective notes; lessons-learned document; model monitoring backlog; initial performance report (docs/BENEFITS_REALIZATION.md update); retraining triggers; communication/COMM_09_RETRO_BENEFITS.md"`;

function renderTable(filter) {
  tableBody.innerHTML = "";
  workshopData
    .filter((row) => {
      if (!filter || filter === "all") return true;
      if (filter === "CRITICAL") return row.priority.startsWith("CRITICAL");
      return row.priority.startsWith(filter);
    })
    .forEach((row) => {
      const tr = document.createElement("tr");

      const tdId = document.createElement("td");
      tdId.textContent = row.id;
      tr.appendChild(tdId);

      const tdSession = document.createElement("td");
      tdSession.textContent = row.session;
      tr.appendChild(tdSession);

      const tdWhen = document.createElement("td");
      tdWhen.textContent = row.when;
      tr.appendChild(tdWhen);

      const tdDur = document.createElement("td");
      tdDur.textContent = row.duration;
      tr.appendChild(tdDur);

      const tdPre = document.createElement("td");
      tdPre.textContent = row.prework;
      tr.appendChild(tdPre);

      const tdPart = document.createElement("td");
      tdPart.textContent = row.participants;
      tr.appendChild(tdPart);

      const tdDep = document.createElement("td");
      tdDep.textContent = row.dependency;
      tr.appendChild(tdDep);

      const tdPri = document.createElement("td");
      if (row.priority.startsWith("CRITICAL")) {
        const span = document.createElement("span");
        span.className = "badge-critical";
        span.textContent = row.priority;
        tdPri.appendChild(span);
      } else {
        tdPri.textContent = row.priority;
      }
      tr.appendChild(tdPri);

      const tdDocs = document.createElement("td");
      const docs = [];

      // Workshop materials
      switch (String(row.id).trim()) {
        case "1":
          docs.push({ label: "Pre-work", path: "workshops/01_PRE_WORK_KICKOFF.md" });
          docs.push({ label: "Agenda", path: "workshops/01_WORKSHOP_AGENDA_KICKOFF.md" });
          break;
        case "2":
          docs.push({ label: "Pre-work", path: "workshops/02_PRE_WORK_DATA_DISCOVERY.md" });
          docs.push({ label: "Agenda", path: "workshops/02_WORKSHOP_AGENDA_DATA_DISCOVERY.md" });
          break;
        case "2a":
        case "2A":
          docs.push({ label: "Agenda", path: "workshops/02_WORKSHOP_AGENDA_SECURITY_PRIVACY.md" });
          break;
        case "3":
          docs.push({ label: "Pre-work", path: "workshops/03_PRE_WORK_DATA_MODELING.md" });
          docs.push({ label: "Agenda", path: "workshops/03_WORKSHOP_AGENDA_DATA_MODELING.md" });
          break;
        case "4":
          docs.push({ label: "Pre-work", path: "workshops/04_PRE_WORK_ETL_PIPELINES.md" });
          docs.push({ label: "Agenda", path: "workshops/04_WORKSHOP_AGENDA_ETL_DESIGN.md" });
          break;
        case "5":
          docs.push({ label: "Pre-work", path: "workshops/05_PRE_WORK_DASHBOARD_DESIGN.md" });
          docs.push({ label: "Agenda", path: "workshops/05_WORKSHOP_AGENDA_DASHBOARD_DESIGN.md" });
          break;
        case "6":
          docs.push({ label: "Pre-work", path: "workshops/06_PRE_WORK_QA_VALIDATION.md" });
          docs.push({ label: "Agenda", path: "workshops/06_WORKSHOP_AGENDA_QA_VALIDATION.md" });
          break;
        case "7":
          docs.push({ label: "Pre-work", path: "workshops/07_PRE_WORK_DEPLOYMENT_MONITORING.md" });
          docs.push({ label: "Agenda", path: "workshops/07_WORKSHOP_AGENDA_DEPLOYMENT_MONITORING.md" });
          break;
        case "8":
          docs.push({ label: "Pre-work", path: "workshops/08_PRE_WORK_TRAINING_HANDOFF.md" });
          docs.push({ label: "Agenda", path: "workshops/08_WORKSHOP_AGENDA_TRAINING_HANDOFF.md" });
          break;
        case "9":
          docs.push({ label: "Pre-work", path: "workshops/09_PRE_WORK_RETROSPECTIVE.md" });
          break;
        default:
          break;
      }

      // Communication plans per workshop
      switch (String(row.id).trim()) {
        case "1":
          docs.push({ label: "Comms", path: "communication/COMM_01_KICKOFF.md" });
          break;
        case "2":
          docs.push({ label: "Comms", path: "communication/COMM_02_DATA_DISCOVERY.md" });
          break;
        case "2a":
        case "2A":
          docs.push({ label: "Comms", path: "communication/COMM_02A_SECURITY_PRIVACY.md" });
          break;
        case "3":
          docs.push({ label: "Comms", path: "communication/COMM_03_MODELING.md" });
          break;
        case "4":
          docs.push({ label: "Comms", path: "communication/COMM_04_ETL_DESIGN.md" });
          break;
        case "5":
          docs.push({ label: "Comms", path: "communication/COMM_05_DASHBOARD_DESIGN.md" });
          break;
        case "6":
          docs.push({ label: "Comms", path: "communication/COMM_06_QA_VALIDATION.md" });
          break;
        case "7":
          docs.push({ label: "Comms", path: "communication/COMM_07_DEPLOYMENT_MONITORING.md" });
          break;
        case "8":
          docs.push({ label: "Comms", path: "communication/COMM_08_TRAINING_HANDOFF.md" });
          break;
        case "9":
          docs.push({ label: "Comms", path: "communication/COMM_09_RETRO_BENEFITS.md" });
          break;
        default:
          break;
      }

      docs.forEach((d, index) => {
        if (index > 0) {
          const sep = document.createTextNode(" · ");
          tdDocs.appendChild(sep);
        }
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = d.label;
        a.dataset.doc = d.path;
        a.addEventListener("click", (e) => {
          e.preventDefault();
          loadDoc(d.path);
        });
        tdDocs.appendChild(a);
      });

      tr.appendChild(tdDocs);

      tableBody.appendChild(tr);
    });
}
filterSelect.addEventListener("change", () => {
  renderTable(filterSelect.value);
});

async function loadWorkshopCsv() {
  try {
    let text;

    // Try to load the CSV via HTTP first (works on GitHub Pages or any server)
    try {
      const res = await fetch("templates/WORKSHOP_DETAILED_SESSION_PLAN.csv");
      if (res.ok) {
        text = await res.text();
      } else {
        console.warn("CSV HTTP error, using embedded fallback:", res.status);
        text = embeddedWorkshopCsv;
      }
    } catch (fetchErr) {
      // Network / CORS errors → fallback
      console.warn("Fetch failed, using embedded workshop CSV", fetchErr);
      text = embeddedWorkshopCsv;
    }

    const rows = text
      .trim()
      .split(/\r?\n/)
      .map((line) => line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map((v) => v.replace(/^"|"$/g, "")));

    const header = rows.shift();
    const idx = {
      id: header.indexOf("#"),
      session: header.indexOf("Session"),
      when: header.indexOf("When (relative)"),
      duration: header.indexOf("Duration"),
      prework: header.indexOf("Pre-work lead"),
      participants: header.indexOf("Required participants"),
      dependency: header.indexOf("Dependency"),
      priority: header.indexOf("Priority"),
    };

    workshopData = rows.map((cols) => ({
      id: cols[idx.id] || "",
      session: cols[idx.session] || "",
      when: cols[idx.when] || "",
      duration: cols[idx.duration] || "",
      prework: cols[idx.prework] || "",
      participants: cols[idx.participants] || "",
      dependency: cols[idx.dependency] || "",
      priority: cols[idx.priority] || "",
    }));
  } catch (err) {
    console.error("Failed to load workshop CSV", err);
  }
}
// Initial load
loadWorkshopCsv().then(() => {
  renderTable("all");
  renderGantt();
});

// Allow in-page reload of CSV data without full page refresh
const refreshBtn = document.getElementById("refreshWorkshops");
if (refreshBtn) {
  refreshBtn.addEventListener("click", () => {
    const currentFilter = filterSelect ? filterSelect.value : "all";
    loadWorkshopCsv().then(() => {
      renderTable(currentFilter);
      renderGantt();
    });
  });
}

function parseWeekRange(when) {
  const text = when || "";
  // Match "Week 3" or "Weeks 3–4" / "Weeks 3-4"
  const rangeMatch = /Weeks?\s*(\d+)(?:\s*[–-]\s*(\d+))?/i.exec(text);
  if (!rangeMatch) return null;
  const start = Number(rangeMatch[1]);
  const end = rangeMatch[2] ? Number(rangeMatch[2]) : start;
  if (Number.isNaN(start) || Number.isNaN(end)) return null;
  return { start, end };
}

function renderGantt() {
  if (!ganttContainer) return;
  ganttContainer.innerHTML = "";

  if (!workshopData.length) return;

  const rows = workshopData.map((row) => {
    const range = parseWeekRange(row.when);
    if (!range) {
      return { ...row, startWeek: null, endWeek: null };
    }
    return { ...row, startWeek: range.start, endWeek: range.end };
  });

  const validWeeks = rows
    .flatMap((r) => [r.startWeek, r.endWeek])
    .filter((w) => typeof w === "number" && !Number.isNaN(w));
  // Always show the full project span from Week 0 to Week 11 (12 weeks)
  const minWeek = 0;
  const maxWeek = 11;
  const slots = Math.max(1, maxWeek - minWeek + 1);

  rows.forEach((row) => {
    // If we could not parse a week, place the bar at the end of the timeline
    const startWeek =
      typeof row.startWeek === "number" && !Number.isNaN(row.startWeek)
        ? row.startWeek
        : maxWeek;

    const rowEl = document.createElement("div");
    rowEl.className = "gantt-row";

    const label = document.createElement("div");
    label.className = "gantt-label";
    label.textContent = `${row.id} – ${row.session}`;
    rowEl.appendChild(label);

    const track = document.createElement("div");
    track.className = "gantt-track";

    const bar = document.createElement("div");
    bar.className = "gantt-bar";
    if (row.priority && row.priority.startsWith("CRITICAL")) {
      bar.classList.add("critical");
    }

    const durationWeeks = Math.max(1, (row.endWeek || startWeek) - startWeek + 1);
    // Each week is an equal slice of the full span; align bars to week cells
    const offset = (startWeek - minWeek) / slots;
    const width = durationWeeks / slots;
    bar.style.left = `${offset * 100}%`;
    bar.style.width = `${width * 100}%`;

    track.appendChild(bar);
    rowEl.appendChild(track);
    ganttContainer.appendChild(rowEl);
  });

  const scale = document.createElement("div");
  scale.className = "gantt-week-scale";
  for (let w = minWeek; w <= maxWeek; w += 1) {
    const tick = document.createElement("span");
    tick.textContent = `W${w}`;
    scale.appendChild(tick);
  }
  ganttContainer.appendChild(scale);
}

// Simple in-app Markdown viewer

const docContent = document.getElementById("docContent");
const docStatus = document.getElementById("docStatus");
const docTitle = document.getElementById("docTitle");
const docClear = document.getElementById("docClear");

function clearDocumentViewer() {
  if (!docContent || !docStatus || !docTitle) return;
  docContent.innerHTML = "";
  docStatus.textContent = "";
  docTitle.textContent = "Select a project document from the left to view it here.";
}

docClear.addEventListener("click", () => {
  clearDocumentViewer();
});

function markdownToHtml(md) {
  // Very small, non-complete Markdown renderer; good enough for these docs
  let html = md;
  // Escape basic HTML
  html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Headings
  html = html.replace(/^###### (.*)$/gm, "<h6>$1</h6>")
             .replace(/^##### (.*)$/gm, "<h5>$1</h5>")
             .replace(/^#### (.*)$/gm, "<h4>$1</h4>")
             .replace(/^### (.*)$/gm, "<h3>$1</h3>")
             .replace(/^## (.*)$/gm, "<h2>$1</h2>")
             .replace(/^# (.*)$/gm, "<h1>$1</h1>");
  // Bold and italics
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
             .replace(/\*(.*?)\*/g, "<em>$1</em>");
  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  // Lists
  html = html.replace(/^(\s*)- (.*)$/gm, "$1<li>$2</li>");
  // Paragraphs (simple)
  html = html.replace(/^(?!<h\d|<li|<code|<pre)(.+)$/gm, "<p>$1</p>");
  // Wrap list items in <ul>
  html = html.replace(/(<li>[\s\S]*?<\/li>)/gm, "<ul>$1</ul>");
  return html;
}

async function loadDoc(relativePath) {
  docStatus.textContent = "Loading...";
  docContent.innerHTML = "";
  docTitle.textContent = relativePath;
  try {
    const res = await fetch(`../${relativePath}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const text = await res.text();
    docContent.innerHTML = markdownToHtml(text);
    docStatus.textContent = "";
  } catch (err) {
    docStatus.textContent = `Could not load document (${err.message}).`;
  }
}

function bindDocLinks(root = document) {
  root.querySelectorAll("a[data-doc]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const path = link.getAttribute("data-doc");
      if (path) {
        loadDoc(path);
      }
    });
  });
}

bindDocLinks(document);

// Static audit summary content (loaded from docs/audit files conceptually)

const auditSummaryEl = document.getElementById("auditSummary");
const auditPMIEl = document.getElementById("auditPMI");
const auditISOEl = document.getElementById("auditISO");
const auditAgileEl = document.getElementById("auditAgile");
const auditMaturityEl = document.getElementById("auditMaturity");

if (auditSummaryEl && auditPMIEl && auditISOEl && auditAgileEl && auditMaturityEl) {
  auditSummaryEl.innerHTML = `
    <table class="simple-table">
      <thead>
        <tr>
          <th>Reference</th>
          <th>Score (/10)</th>
          <th>Key strengths</th>
          <th>Main improvements</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#" class="audit-link" data-doc="docs/audit/PROCESS_AUDIT_PMI.md">PMI / PMBOK</a></td>
          <td><strong>8 / 10</strong></td>
          <td>Strong on scope, schedule, stakeholders, quality, and gating.</td>
          <td>Keep cost and change control light but clarify them when needed.</td>
        </tr>
        <tr>
          <td><a href="#" class="audit-link" data-doc="docs/audit/PROCESS_AUDIT_ISO21500.md">ISO 21500 / 21502</a></td>
          <td><strong>8 / 10</strong></td>
          <td>Good structure, governance, and visible principles for predictive projects.</td>
          <td>Optionally add portfolio linkage and strict ISO-style mapping.</td>
        </tr>
        <tr>
          <td><a href="#" class="audit-link" data-doc="docs/audit/PROCESS_AUDIT_AGILE_SCRUM.md">Agile / Scrum</a></td>
          <td><strong>9 / 10</strong></td>
          <td>Strong Scrum ceremonies, artefacts, DoD, and PO guidance.</td>
          <td>Add explicit WIP policies and advanced product discovery where useful.</td>
        </tr>
        <tr>
          <td><a href="#" class="audit-link" data-doc="docs/audit/PROCESS_AUDIT_MATURITY.md">ML Maturity / MLOps</a></td>
          <td><strong>8 / 10</strong></td>
          <td>Standardized ML process and templates across projects.</td>
          <td>Increase model measurement automation, drift detection, and feedback-driven model evolution.</td>
        </tr>
      </tbody>
    </table>
  `;

  // Ensure newly injected audit links are wired to the document viewer
  bindDocLinks(auditSummaryEl);

  auditPMIEl.innerHTML = `
    <p><strong>Score:</strong> 8 / 10 (PMI / PMBOK for predictive projects).</p>
    <p><strong>Barème:</strong> 0–3: ad-hoc, 4–6: most areas partially covered, 7–8: all key areas present with some integration gaps, 9–10: fully integrated and continuously improved.</p>
    <ul>
      <li><strong>Strengths:</strong> strong integration & scope artefacts, a workshop-based schedule, stakeholder and communication plans, QA/UAT coverage, and practical gating and status templates.</li>
      <li><strong>Gaps:</strong> explicit budget/effort tracking and detailed change-control RACI or thresholds are left to organizations.</li>
      <li><strong>Path to 10/10:</strong> add a light budget/effort section to the plan, define when to use <code>CHANGE_REQUEST.md</code>, and standardize where status reports are stored.</li>
    </ul>
  `;

  auditISOEl.innerHTML = `
    <p><strong>Score:</strong> 8 / 10 (ISO 21500 / 21502-style view).</p>
    <p><strong>Barème:</strong> 0–3: fragmented practices, 4–6: core processes exist, 7–8: processes and roles are clear with some gaps, 9–10: fully aligned governance and improvement system.</p>
    <ul>
      <li><strong>Strengths:</strong> clear context and objectives, defined roles and governance artefacts, planning and resource view, and visible principles and continuous-improvement guidance.</li>
      <li><strong>Gaps:</strong> explicit mapping to ISO terminology, portfolio/strategy linkage, and a cross-project evidence register.</li>
      <li><strong>Path to 10/10:</strong> add an optional ISO mapping in <code>BEST_PRACTICES.md</code>, describe portfolio linkage in <code>PROJECT_BRIEF.md</code> or a new note, and keep a simple register of completed artefacts per project.</li>
    </ul>
  `;

  auditAgileEl.innerHTML = `
    <p><strong>Score:</strong> 9 / 10 (Agile / Scrum for predictive projects).</p>
    <p><strong>Barème:</strong> 0–3: ad-hoc agile, 4–6: partial Scrum, 7–8: consistent Scrum with some gaps, 9–10: mature, metrics-driven agile culture.</p>
    <ul>
      <li><strong>Strengths:</strong> clear ceremonies, backlog and acceptance templates, strong DoD and DoD cases, <code>PRODUCT_OWNER_GUIDE.md</code>, and optional flow-metrics guidance.</li>
      <li><strong>Gaps:</strong> explicit WIP limits, advanced product discovery practices, and scaled tech-debt policies are left as optional enhancements.</li>
      <li><strong>Path to 10/10:</strong> define simple WIP rules, add outcome-based roadmap examples for POs, and reserve some capacity for debt when teams are ready.</li>
    </ul>
  `;

  auditMaturityEl.innerHTML = `
    <p><strong>Score:</strong> 8 / 10 (Maturity / CMMI-style view).</p>
    <p><strong>Barème:</strong> ~Level 3 (Defined) with early Level 4 traits: processes are documented and repeatable, with simple measurement available.</p>
    <ul>
      <li><strong>Strengths:</strong> defined, reusable process with artefacts for each phase, plus simple process metrics, audits, and an onboarding guide.</li>
      <li><strong>Gaps:</strong> regular use of process KPIs, cross-project comparisons, and a central change-log are recommended but not enforced.</li>
      <li><strong>Path to 10/10:</strong> record KPIs per project in <code>PROCESS_METRICS.md</code>, review them in retros and benefits reviews, and periodically update <code>BEST_PRACTICES.md</code> and templates based on trends.</li>
    </ul>
  `;
}
