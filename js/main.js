/* ==========================================================================
   CONFIG — edit these to re-point the site at your own accounts/services
   ========================================================================== */
const CONFIG = {
  githubUsername: "yadavprateek084",
  // EmailJS — sign up free at emailjs.com, then fill these in.
  // Leaving them blank makes the contact form fall back to a mailto: link.
  emailjs: {
    publicKey: "",
    serviceId: "",
    templateId: "",
  },
  contactEmail: "hello@example.com",
};

/* ==========================================================================
   DATA — skills, projects, certifications
   ========================================================================== */
const SKILLS = [
  { category: "Programming", items: [["Python (Pandas, NumPy)", 85], ["SQL", 92]] },
  { category: "Databases", items: [["PostgreSQL", 80], ["MySQL", 78]] },
  { category: "Visualization & BI", items: [["Power BI (PL-300)", 90], ["Tableau", 72], ["Matplotlib", 75]] },
  { category: "Analytics", items: [["EDA & Statistics", 82], ["DAX / Power Query", 80]] },
  { category: "Tools", items: [["Excel", 85], ["Git / GitHub", 78]] },
  { category: "Soft Skills", items: [["Business Communication", 84], ["Stakeholder Reporting", 80]] },
];

const FEATURED_PROJECTS = [
  {
    title: "Sales & Revenue Intelligence Dashboard",
    desc: "End-to-end analysis of ~120K transactions to surface revenue drivers, seasonal dips, and underperforming categories for a retail business.",
    tags: ["SQL", "Python", "Power BI", "DAX"],
    metrics: [["120K", "transactions"], ["1", "exec dashboard"]],
    github: "https://github.com/yadavprateek084",
    demo: "",
    caseStudy: "projects/sales-revenue-intelligence.html",
  },
  {
    title: "Customer Behavior & RFM Segmentation",
    desc: "Segmented ~50K customers by Recency, Frequency and Monetary value to identify at-risk high-value customers and target retention campaigns.",
    tags: ["SQL", "Python", "Pandas", "Power BI"],
    metrics: [["50K", "customers"], ["5", "segments"]],
    github: "https://github.com/yadavprateek084",
    demo: "",
    caseStudy: "projects/rfm-segmentation.html",
  },
  {
    title: "Retail Demand Forecasting & Inventory Analytics",
    desc: "Forecasted demand across ~100K records to reduce stockouts and overstock, pairing time-series analysis with an inventory health dashboard.",
    tags: ["Python", "SQL", "Forecasting", "Power BI"],
    metrics: [["100K", "records"], ["~", "SKU-level view"]],
    github: "https://github.com/yadavprateek084",
    demo: "",
    caseStudy: "projects/demand-forecasting.html",
  },
  {
    title: "Ola Ride Booking Analytics",
    desc: "Analyzed ride-booking data to uncover cancellation patterns, peak-demand windows, and driver-utilization gaps for a ride-hailing operation.",
    tags: ["SQL", "Python", "Power BI"],
    metrics: [["Ride-level", "granularity"], ["1", "ops dashboard"]],
    github: "https://github.com/yadavprateek084",
    demo: "",
    caseStudy: "projects/ola-ride-booking-analytics.html",
  },
];

const MINI_PROJECTS = [
  { title: "Customer Churn Analysis", desc: "SQLite-backed churn analysis identifying the behavioral signals that precede cancellation.", github: "https://github.com/yadavprateek084" },
  { title: "Cognifyz Restaurant Analysis", desc: "Exploratory analysis of ~9,500 restaurant records — ratings, cuisines, and pricing patterns.", github: "https://github.com/yadavprateek084" },
  { title: "HR Workforce Analytics", desc: "Attendance and workforce analytics for AtliQ Technologies — absenteeism trends and team-level insight.", github: "https://github.com/yadavprateek084" },
];

const CERTIFICATIONS = [
  { name: "Microsoft Power BI (PL-300)", issuer: "Microsoft · Data Analyst Associate", url: "#" },
  { name: "Databricks AI Fundamentals", issuer: "Databricks", url: "#" },
  { name: "SQL (5-star rating)", issuer: "HackerRank", url: "#" },
];

/* ==========================================================================
   RENDER: skills
   ========================================================================== */
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = SKILLS.map(group => `
    <div class="skill-card">
      <h4>${group.category}</h4>
      ${group.items.map(([name, pct]) => `
        <div class="skill-item" style="--pct:${pct}%">
          <span>${name}</span><span>${pct}%</span>
          <div class="bar-track"><div class="bar-fill"></div></div>
        </div>
      `).join("")}
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER: projects
   ========================================================================== */
function renderProjects() {
  const featured = document.getElementById("featured-projects");
  featured.innerHTML = FEATURED_PROJECTS.map((p, i) => `
    <article class="project-card reveal">
      <div class="project-index">0${i + 1}</div>
      <div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-metrics">
          ${p.metrics.map(([val, label]) => `<div><strong>${val}</strong>${label}</div>`).join("")}
        </div>
      </div>
      <div class="project-links">
        <a href="${p.caseStudy}" class="btn btn-outline btn-sm">Case Study</a>
        <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">GitHub ↗</a>
      </div>
    </article>
  `).join("");

  const mini = document.getElementById("mini-projects");
  mini.innerHTML = MINI_PROJECTS.map(p => `
    <div class="mini-card reveal">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub ↗</a>
    </div>
  `).join("");
}

/* ==========================================================================
   RENDER: certifications
   ========================================================================== */
function renderCerts() {
  const grid = document.getElementById("cert-grid");
  grid.innerHTML = CERTIFICATIONS.map(c => `
    <div class="cert-card reveal">
      <h4>${c.name}</h4>
      <div class="issuer">${c.issuer}</div>
      <a href="${c.url}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="align-self:flex-start;">Verify ↗</a>
    </div>
  `).join("");
}

/* ==========================================================================
   THEME TOGGLE
   ========================================================================== */
function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}
/* Note: localStorage works fine on a real deployed site. If you're previewing
   this inside an environment that blocks storage APIs, theme choice just
   won't persist across reloads — everything else still works. */

/* ==========================================================================
   MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const btn = document.getElementById("mobile-toggle");
  const menu = document.getElementById("mobile-menu");
  btn.addEventListener("click", () => {
    const open = menu.style.display === "block";
    menu.style.display = open ? "none" : "block";
    btn.setAttribute("aria-expanded", String(!open));
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { menu.style.display = "none"; }));
}

/* ==========================================================================
   HERO QUERY TYPE-ON + ANIMATED COUNTERS
   ========================================================================== */
function typeQuery() {
  const el = document.getElementById("typed-query");
  const table = document.getElementById("result-table");
  const text = 'SELECT * FROM candidates WHERE role = <span class="str">\'data_analyst\'</span> AND ready = <span class="kw">TRUE</span>;';
  let plain = text.replace(/<[^>]+>/g, "");
  let i = 0;
  el.innerHTML = "";
  const cursor = document.createElement("span");
  cursor.className = "cursor-blink";

  const timer = setInterval(() => {
    i++;
    el.textContent = plain.slice(0, i);
    el.appendChild(cursor);
    if (i >= plain.length) {
      clearInterval(timer);
      el.innerHTML = text;
      setTimeout(() => {
        table.classList.add("show");
        animateCounters(table.querySelectorAll("[data-count]"));
      }, 350);
    }
  }, 22);
}

function animateCounters(nodes) {
  nodes.forEach(node => {
    const target = parseInt(node.getAttribute("data-count"), 10);
    if (Number.isNaN(target)) return;
    let current = 0;
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      current = Math.floor(progress * target);
      node.textContent = current.toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else node.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  });
}

/* ==========================================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================================== */
function initReveal() {
  const targets = document.querySelectorAll(".reveal, .skill-item, .stat-strip strong");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        if (entry.target.matches("strong[data-count]")) {
          animateCounters([entry.target]);
        }
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  targets.forEach(t => obs.observe(t));
}

/* ==========================================================================
   GITHUB API INTEGRATION
   ========================================================================== */
async function loadGithub() {
  const statsEl = document.getElementById("gh-stats");
  const listEl = document.getElementById("repo-list");
  try {
    const userRes = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}`);
    if (!userRes.ok) throw new Error("user fetch failed");
    const user = await userRes.json();
    statsEl.innerHTML = `
      <div><strong>${user.public_repos}</strong><span>Public repos</span></div>
      <div><strong>${user.followers}</strong><span>Followers</span></div>
      <div><strong>${user.following}</strong><span>Following</span></div>
    `;

    const repoRes = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=6`);
    if (!repoRes.ok) throw new Error("repos fetch failed");
    const repos = await repoRes.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      listEl.innerHTML = `<p class="gh-error">No public repositories found yet.</p>`;
      return;
    }
    listEl.innerHTML = repos.map(r => `
      <div class="repo-item">
        <a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a>
        <p>${r.description ? r.description : "No description provided."}</p>
        <div class="repo-meta">
          <span>${r.language || "—"}</span>
          <span>★ ${r.stargazers_count}</span>
        </div>
      </div>
    `).join("");
  } catch (err) {
    listEl.innerHTML = `<p class="gh-error">Couldn't reach the GitHub API right now — visit the profile directly instead.</p>`;
  }
}

/* ==========================================================================
   CONTACT FORM — validation + EmailJS (falls back to mailto)
   ========================================================================== */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("cf-submit");

  // Load EmailJS SDK only if a public key is configured.
  if (CONFIG.emailjs.publicKey) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => window.emailjs && window.emailjs.init(CONFIG.emailjs.publicKey);
    document.head.appendChild(script);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot spam trap — bots fill hidden fields, humans don't.
    if (form.website.value) return;

    let valid = true;
    form.querySelectorAll(".form-error").forEach(el => el.classList.remove("show"));

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) { toggleError(form.name, true); valid = false; }
    if (!email || !emailPattern.test(email)) { toggleError(form.email, true); valid = false; }
    if (!message) { toggleError(form.message, true); valid = false; }
    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    try {
      if (CONFIG.emailjs.publicKey && window.emailjs) {
        await window.emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, {
          from_name: name,
          from_email: email,
          company: form.company.value.trim(),
          message,
        });
        showToast("Message sent — thanks for reaching out!");
        form.reset();
      } else {
        // Fallback when EmailJS isn't configured: open a pre-filled mail client.
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})${form.company.value ? " · " + form.company.value : ""}`);
        window.location.href = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent("Portfolio contact from " + name)}&body=${body}`;
        showToast("Opening your email client…");
      }
    } catch (err) {
      showToast("Something went wrong — email me directly instead.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }
  });

  function toggleError(input, show) {
    const err = input.closest(".form-group").querySelector(".form-error");
    if (err) err.classList.toggle("show", show);
  }
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

renderSkills();
renderProjects();
renderCerts();
initTheme();
initMobileMenu();
typeQuery();
initReveal();
loadGithub();
initContactForm();
