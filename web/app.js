const sections = document.querySelectorAll(".content-section");
const navButtons = document.querySelectorAll(".nav-link");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.section;

    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    sections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === target);
    });

    // Clear document viewer when switching main sections
    if (typeof clearDocumentViewer === "function") {
      clearDocumentViewer();
    }
  });
});

let workshopData = [];

const tableBody = document.querySelector("#workshopTable tbody");
const filterSelect = document.getElementById("filterPriority");
const ganttContainer = document.getElementById("ganttContainer");

// Fallback embedded CSV matching templates/WORKSHOP_DETAILED_SESSION_PLAN.csv
const embeddedWorkshopCsv = `#,Session,When (relative),Duration,Pre-work lead,Required participants,Dependency,Priority,Deliverables
1,Kickoff,"Week 0, Day 0","60–90 min","3 days","Sponsor; PM; Product Owner; Tech leads",None,"CRITICAL (High)","Updated docs/PROJECT_BRIEF.md; meeting minutes (templates/MEETING_MINUTES.md); action items in templates/ACTION_LOG.csv; initial templates/RACI.md entries; communication/COMM_01_KICKOFF.md"
2,Technical Data Discovery (deep),"Week 1, Days 1–5","90–120 min (may repeat per source)","5–7 days","Data Owners; ETL; BI Dev; PM","Kickoff","CRITICAL (High)","Completed deliverables/DATA_INVENTORY.md; sample extracts (CSV/SQL); data dictionaries; data access log; initial data quality notes; communication/COMM_02_DATA_DISCOVERY.md"
2a,"Security, Privacy & Compliance","Week 0–1 (parallel/early)","60 min","3–5 days","Security/Compliance; Data Owner; PM; BI Lead","Kickoff (or before Data Discovery)","CRITICAL (High if PII)","Data classification register; masking rules; compliance sign-offs; updated docs/DATA_GOVERNANCE.md; communication/COMM_02A_SECURITY_PRIVACY.md"
3,Data Modeling / Semantic Layer,Week 2,"90–120 min","3–5 days","BI Lead; Data Modeler; ETL; Data Owner","Data Discovery","CRITICAL (High)","Model diagram (PNG/MD); canonical table definitions (documented in deliverables/ARCHITECTURE.md or separate model file); updated deliverables/KPI_SPEC.md mappings; communication/COMM_03_MODELING.md"
4,ETL / Pipeline Design,Week 3,"90 min","3–5 days","ETL engineers; Data Owner; BI Dev; Ops","Modeling","CRITICAL (High)","ETL design document; pipeline diagrams; schedule definitions; runbook draft (scripts/README.md) and monitoring checks; communication/COMM_04_ETL_DESIGN.md"
5,"Dashboard Design (UX + BI)","Week 3–4","90 min","3 days","Product Owner; Designer; BI Dev; PM","Modeling; some ETL mock data",High,"Wireframes and mockups; finalized deliverables/KPI_SPEC.md; deliverables/VIS_SPEC.md; mock datasets for prototyping; communication/COMM_05_DASHBOARD_DESIGN.md"
6,"Performance & QA / Validation",Week 5,"60–90 min","3 days","QA Lead; BI Dev; Data Owner; PM","ETL working; prototype available",High,"QA plan and checklist; validation scripts and test cases; performance benchmark report; UAT acceptance criteria; communication/COMM_06_QA_VALIDATION.md"
7,Deployment & Monitoring,Week 6,"60 min","3–5 days","DevOps/Ops; BI Lead; PM; Security","QA pass",Medium,"Final runbook and deployment checklist; monitoring and alerting rules; access matrix; security/compliance sign-off; communication/COMM_07_DEPLOYMENT_MONITORING.md"
8,User Training & Handoff,Week 7,"60–90 min","3 days","Training lead; PM; Product Owner; end-users","Deployed dashboard",Medium,"Training slides and recordings; user guide/quick-start; completed follow_up/FUP_TEMPLATE.md; sign-off document; communication/COMM_08_TRAINING_HANDOFF.md"
9,Retrospective & Benefits Review,Week 8,"45–60 min","2–3 days","PM; BI Lead; Data Owner; Ops; Product Owner","Post-go-live data",Low,"Retrospective notes; lessons-learned document; prioritized backlog; initial benefits report (docs/BENEFITS_REALIZATION.md update); communication/COMM_09_RETRO_BENEFITS.md"`;

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
      const res = await fetch("/templates/WORKSHOP_DETAILED_SESSION_PLAN.csv");
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      text = await res.text();
    } catch (fetchErr) {
      // If fetch fails (e.g., file:// or offline demo), fall back to embedded CSV
      console.warn("Falling back to embedded workshop CSV", fetchErr);
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

function parseWeekNumber(when) {
  const match = /Week\s*(\d+)/i.exec(when || "");
  if (!match) return null;
  return Number(match[1]);
}

function renderGantt() {
  if (!ganttContainer) return;
  ganttContainer.innerHTML = "";

  if (!workshopData.length) return;

  const rows = workshopData.map((row) => {
    const week = parseWeekNumber(row.when);
    return { ...row, week };
  });

  const validWeeks = rows.map((r) => r.week).filter((w) => typeof w === "number" && !Number.isNaN(w));
  const minWeek = validWeeks.length ? Math.min(...validWeeks) : 0;
  const maxWeek = validWeeks.length ? Math.max(...validWeeks) : 8;
  const span = Math.max(1, maxWeek - minWeek + 1);

  rows.forEach((row) => {
    if (typeof row.week !== "number" || Number.isNaN(row.week)) return;

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

    const offset = (row.week - minWeek) / span;
    const width = 1 / span;
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
          <td>Strong on scope, schedule, stakeholders, quality.</td>
          <td>Clarify monitoring, cost management, and change control workflow.</td>
        </tr>
        <tr>
          <td><a href="#" class="audit-link" data-doc="docs/audit/PROCESS_AUDIT_ISO21500.md">ISO 21500 / 21502</a></td>
          <td><strong>7 / 10</strong></td>
          <td>Good coverage of lifecycle, governance, and documentation.</td>
          <td>Make responsibilities, interfaces, and governance cycles more explicit.</td>
        </tr>
        <tr>
          <td><a href="#" class="audit-link" data-doc="docs/audit/PROCESS_AUDIT_AGILE_SCRUM.md">Agile / Scrum</a></td>
          <td><strong>8 / 10</strong></td>
          <td>Clear ceremonies, DoD, and backlog practices.</td>
          <td>Strengthen product ownership, metrics, and continuous improvement loops.</td>
        </tr>
        <tr>
          <td><a href="#" class="audit-link" data-doc="docs/audit/PROCESS_AUDIT_MATURITY.md">Maturity / CMMI-style</a></td>
          <td><strong>8 / 10</strong></td>
          <td>Standardized process and templates across projects.</td>
          <td>Increase measurement, automation, and feedback-driven evolution.</td>
        </tr>
      </tbody>
    </table>
  `;

  // Ensure newly injected audit links are wired to the document viewer
  bindDocLinks(auditSummaryEl);

  auditPMIEl.innerHTML = `
    <p><strong>Score:</strong> 8 / 10 (PMI / PMBOK).</p>
    <p><strong>Barème:</strong> 0–3: ad-hoc, 4–6: partial, 7–8: complete but with some gaps, 9–10: fully integrated and continuously improved.</p>
    <ul>
      <li><strong>Strengths:</strong> integration & scope artefacts, detailed workshop schedule, strong stakeholder and communication plans, solid QA/UAT coverage.</li>
      <li><strong>Gaps:</strong> integrated monitoring across knowledge areas, explicit cost management, and a formalized change control workflow.</li>
      <li><strong>Path to 10/10:</strong> institutionalize a PMI-style status report, define a lightweight change control process, extend project plan with effort/cost tracking, and feed lessons learned back into best practices.</li>
    </ul>
  `;

  auditISOEl.innerHTML = `
    <p><strong>Score:</strong> 7 / 10 (ISO 21500 / 21502).</p>
    <p><strong>Barème:</strong> 0–3: fragmented practices, 4–6: basic project guidance, 7–8: coherent model with clear lifecycle, 9–10: fully aligned integrated governance system.</p>
    <ul>
      <li><strong>Strengths:</strong> lifecycle phases mapped to workshops, documented governance artefacts, and clear project context through charters and briefs.</li>
      <li><strong>Gaps:</strong> responsibilities and interfaces between roles not always explicit, governance cadence not fully described, and benefits realization loop can be strengthened.</li>
      <li><strong>Path to 10/10:</strong> add a concise RACI for each phase, document standard governance events and inputs/outputs, and link benefits tracking more tightly to decision points.</li>
    </ul>
  `;

  auditAgileEl.innerHTML = `
    <p><strong>Score:</strong> 8 / 10 (Agile / Scrum).</p>
    <p><strong>Barème:</strong> 0–3: ad-hoc agile, 4–6: partial Scrum, 7–8: consistent Scrum with some scaling gaps, 9–10: mature, metrics-driven agile culture.</p>
    <ul>
      <li><strong>Strengths:</strong> clear ceremonies, backlog templates, Definition of Done, and engineering practices connected to QA and releases.</li>
      <li><strong>Gaps:</strong> role clarity for Product Owner, explicit link between sprint goals and KPIs, and systematic use of velocity/burndown metrics.</li>
      <li><strong>Path to 10/10:</strong> formalize PO responsibilities, make sprint goals and KPIs explicit in planning, and use metrics dashboards (velocity, burndown, benefits) as standard inputs to reviews and retrospectives.</li>
    </ul>
  `;

  auditMaturityEl.innerHTML = `
    <p><strong>Score:</strong> 8 / 10 (maturity / CMMI-style view).</p>
    <p><strong>Barème:</strong> roughly Level 3–4 out of 5 translated to 8/10: processes are defined and largely standardized, with some quantitative management in place.</p>
    <ul>
      <li><strong>Strengths:</strong> repeatable process across projects, rich template library, and clear end-to-end lifecycle for dashboard initiatives.</li>
      <li><strong>Gaps:</strong> limited quantitative measurement of process performance, partial automation, and improvement loop mostly qualitative.</li>
      <li><strong>Path to 10/10:</strong> add KPIs for process performance (cycle time, rework, defect rates), automate key checks (data quality, gating), and make periodic process reviews with actions to evolve templates and checklists.</li>
    </ul>
  `;
}
