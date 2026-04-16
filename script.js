
const GITHUB_USERNAME = "Lindany98";
const fallbackProjects = [
  {
    title: "AI-Powered Backend Platform",
    description: "A backend platform integrating LLMs to automate workflows, enrich data, and expose intelligent APIs.",
    shortExplanation: "Focuses on combining traditional backend engineering with AI capabilities such as summarization, recommendations, and automation pipelines.",
    videoTitle: "Architecture & demo",
    videoDescription: "Showcase how AI integrates with APIs, data pipelines, and real-world use cases.",
    videoUrl: "#",
    stack: ["Java", "Spring Boot", "OpenAI API", "PostgreSQL"],
    link: "https://github.com/Lindany98"
  },
  {
    title: "Social Media Monetisation Platform",
    description: "A platform exploring analytics, creator tools, and monetisation strategies across social platforms.",
    shortExplanation: "Combines backend APIs, data insights, and automation to help creators optimise engagement and revenue.",
    videoTitle: "Product walkthrough",
    videoDescription: "Explain business model, features, and technical architecture.",
    videoUrl: "#",
    stack: ["Node.js", "AWS", "Analytics", "APIs"],
    link: "https://github.com/Lindany98"
  }
];

function formatRepoName(name) {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  document.getElementById("themeIcon").textContent = theme === "dark" ? "☀" : "☾";
  document.getElementById("themeLabel").textContent = theme === "dark" ? "Light mode" : "Dark mode";
  localStorage.setItem("portfolio-theme", theme);
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "glass-card project-card reveal";

  article.innerHTML = `
    <h3>${project.title}</h3>
    <p class="project-desc muted">${project.description}</p>
    <div class="chip-wrap project-meta">
      ${project.stack.filter(Boolean).map((tech) => `<span class="chip">${tech}</span>`).join("")}
    </div>
    <div class="project-meta">
      <div class="project-video">
        <div class="title-sm" style="font-size:0.98rem;">${project.videoTitle}</div>
        <p class="muted small" style="margin-top:8px;">${project.videoDescription}</p>
        <a class="inline-link" style="display:inline-flex;margin-top:10px;" href="${project.videoUrl}" target="_blank" rel="noreferrer">Add or open project video ↗</a>
      </div>
      <button class="toggle-btn" type="button">Show short explanation</button>
      <div class="short-explainer muted">${project.shortExplanation}</div>
      ${typeof project.stars === "number" ? `<div class="project-stars muted">GitHub stars: ${project.stars}</div>` : ""}
      <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View on GitHub ↗</a>
    </div>
  `;

  const toggle = article.querySelector(".toggle-btn");
  const explainer = article.querySelector(".short-explainer");
  toggle.addEventListener("click", () => {
    const open = explainer.classList.toggle("open");
    toggle.textContent = open ? "Hide short explanation" : "Show short explanation";
  });

  return article;
}

function renderProjects(projects) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  projects.forEach((project) => grid.appendChild(createProjectCard(project)));
  observeReveals();
}

async function loadProjects() {
  const message = document.getElementById("projectsMessage");
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
    if (!res.ok) throw new Error("Failed");
    const repos = await res.json();

    const projects = Array.isArray(repos)
      ? repos
          .filter((repo) => !repo.fork)
          .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0) || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6)
          .map((repo) => ({
            title: formatRepoName(repo.name),
            description: repo.description || "A live GitHub repository presented as part of my premium engineering portfolio.",
            shortExplanation: `A concise walkthrough of this project can be expanded here. Primary language: ${repo.language || "Not specified"}. Last updated ${new Date(repo.updated_at).toLocaleDateString()}.`,
            videoTitle: "Project demo video",
            videoDescription: "Add a Loom, YouTube, or hosted demo URL here when available.",
            videoUrl: repo.homepage || repo.html_url,
            stack: [repo.language || "Code", ...(repo.topics || []).slice(0, 3)].filter(Boolean),
            link: repo.html_url,
            stars: repo.stargazers_count || 0
          }))
      : [];

    renderProjects(projects.length ? projects : fallbackProjects);
    if (!projects.length) {
      message.textContent = "GitHub returned no public repositories, so fallback premium project cards are shown instead.";
      message.classList.remove("hidden");
    }
  } catch (e) {
    renderProjects(fallbackProjects);
    message.textContent = "GitHub projects could not be loaded right now. Fallback premium project cards are shown instead.";
    message.classList.remove("hidden");
  }
}

function observeReveals() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("portfolio-theme") || "dark");
  document.getElementById("themeToggle").addEventListener("click", () => {
    applyTheme(document.body.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
  observeReveals();
  loadProjects();
});
