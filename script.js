const GITHUB_USERNAME = "Lindany98";
const CV_PATH = "Lindani_Mabaso_Final_CV.pdf";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Lindany98",
    icon: githubIcon(),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lindaniricardomabaso/",
    icon: linkedinIcon(),
  },
  {
    name: "Email",
    href: "mailto:mabasolindaniricardo@gmail.com",
    icon: "✉",
  },
];

const skills = {
  Backend: ["Java", "Spring Boot", ".NET Core", "C#", "Node.js", "REST APIs", "Microservices"],
  Cloud: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"],
  Data: ["PostgreSQL", "SQL", "NoSQL"],
  Frontend: ["TypeScript", "Vue.js", "Material UI"],
};

const experience = [
  {
    company: "Synthesis Software Technologies",
    context: "Client: Standard Bank",
    period: "Aug 2023 – Present",
    role: "Software Engineer",
    points: [
      "Leading backend development in Corporate & Investment Banking environments.",
      "Designing and developing backend services using Java and Spring Boot.",
      "Building and maintaining RESTful APIs for enterprise financial systems.",
      "Optimizing database performance, data integrity, and security.",
      "Mentoring junior developers and onboarding new team members.",
      "Improving CI/CD processes and automating deployment workflows.",
    ],
  },
  {
    company: "Takealot",
    period: "Aug 2021 – Aug 2023",
    role: "Software Engineer",
    points: [
      "Developed scalable backend systems using Scala and Kotlin.",
      "Built onboarding systems supporting large-scale logistics operations.",
      "Worked with AWS, Docker, Kubernetes, and PostgreSQL.",
      "Provided production support and resolved critical operational issues.",
    ],
  },
  {
    company: "LifeTech",
    period: "Aug 2020 – Jun 2021",
    role: "Software Developer",
    points: ["Developed full-stack applications using Python, Flask, and AWS."],
  },
  {
    company: "Retro Rabbit",
    period: "Jan 2019 – Jul 2020",
    role: "Junior Software Developer",
    points: ["Built and maintained web applications for multiple clients."],
  },
];

const fallbackProjects = [
  {
    title: "Featured Project Coming Soon",
    description:
      "This fallback card stays available if GitHub projects cannot be loaded or if you want to pin a hand-crafted case study above the live repositories.",
    shortExplanation:
      "Use this area to explain the business problem, your technical approach, and the measurable outcome in a few concise lines.",
    videoTitle: "Project walkthrough video",
    videoDescription: "Add a YouTube, Loom, or demo link here to give a quick visual explanation of the project.",
    videoUrl: "#",
    stack: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/Lindany98",
  },
];

function githubIcon() {
  return '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.222.682-.495 0-.244-.009-.89-.014-1.747-2.782.621-3.369-1.379-3.369-1.379-.455-1.185-1.11-1.5-1.11-1.5-.908-.637.069-.624.069-.624 1.004.072 1.532 1.058 1.532 1.058.892 1.565 2.341 1.113 2.91.851.091-.664.349-1.113.635-1.369-2.221-.259-4.555-1.14-4.555-5.073 0-1.12.389-2.036 1.029-2.754-.103-.26-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.052A9.303 9.303 0 0 1 12 6.836a9.28 9.28 0 0 1 2.504.349c1.909-1.328 2.748-1.052 2.748-1.052.546 1.412.202 2.454.1 2.714.64.718 1.028 1.634 1.028 2.754 0 3.943-2.337 4.811-4.566 5.065.359.317.679.942.679 1.898 0 1.37-.012 2.474-.012 2.811 0 .276.18.596.688.494C19.138 20.611 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z"/></svg>';
}

function linkedinIcon() {
  return '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.89 3.3 4.97c0 1.08.87 1.97 1.95 1.97h.02c1.09 0 1.96-.89 1.96-1.97C7.23 3.89 6.36 3 5.27 3h-.02ZM20.7 12.74c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.11-3.37 1.89V8.5H9.63c.04.7 0 11.5 0 11.5H13v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.91 1.05 1.91 2.58V20h3.38v-6.26Z"/></svg>';
}

function formatRepoName(name) {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderSocials() {
  const socialsHtml = socials
    .map(
      (social) => `
        <a class="social-link" href="${social.href}" target="_blank" rel="noreferrer">
          <span class="icon">${social.icon}</span>
          <span>${social.name}</span>
        </a>`
    )
    .join("");

  document.getElementById("socials").innerHTML = socialsHtml;
  document.getElementById("contactLinks").innerHTML = socials
    .map(
      (social) => `
        <a class="contact-link" href="${social.href}" target="_blank" rel="noreferrer">
          <span class="icon">${social.icon}</span>
          <span>${social.name}</span>
          <span>↗</span>
        </a>`
    )
    .join("");
}

function renderSkills() {
  const html = Object.entries(skills)
    .map(
      ([group, items]) => `
        <div class="card">
          <h3>${escapeHtml(group)}</h3>
          <div class="skill-tags">
            ${items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
          </div>
        </div>`
    )
    .join("");

  document.getElementById("skillsGrid").innerHTML = html;
}

function renderExperience() {
  const html = experience
    .map(
      (item) => `
        <div class="card experience-item">
          <div class="experience-meta">
            <div class="experience-period">${escapeHtml(item.period)}</div>
            <h3>${escapeHtml(item.company)}</h3>
            ${item.context ? `<p class="muted">${escapeHtml(item.context)}</p>` : ""}
            <div class="experience-role">${escapeHtml(item.role)}</div>
          </div>
          <ul class="bullets muted">
            ${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
          </ul>
        </div>`
    )
    .join("");

  document.getElementById("experienceList").innerHTML = html;
}

function renderProjectCards(projects) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects
    .map((project, index) => {
      const tags = (project.stack || [])
        .filter(Boolean)
        .map((tech) => `<span class="tag project-accent">${escapeHtml(tech)}</span>`)
        .join("");

      const stars = project.stars !== undefined ? `<div class="github-stars">★ GitHub stars: ${project.stars}</div>` : "";

      return `
        <article class="card project-card reveal visible" data-project-index="${index}">
          <div>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="muted">${escapeHtml(project.description)}</p>
          </div>
          <div class="project-tags">${tags}</div>
          <div class="project-video">
            <div><strong>${escapeHtml(project.videoTitle)}</strong></div>
            <p class="muted">${escapeHtml(project.videoDescription)}</p>
            <a class="mini-link" href="${escapeHtml(project.videoUrl)}" target="_blank" rel="noreferrer">Add or open project video ↗</a>
          </div>
          <div class="project-footer">
            <button class="toggle-explainer" type="button" data-toggle-index="${index}">Show short explanation</button>
            <div class="project-explainer muted hidden" data-explainer-index="${index}">${escapeHtml(project.shortExplanation)}</div>
            ${stars}
            <a class="mini-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">View on GitHub ↗</a>
          </div>
        </article>`;
    })
    .join("");

  document.querySelectorAll("[data-toggle-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-toggle-index");
      const panel = document.querySelector(`[data-explainer-index="${index}"]`);
      const isHidden = panel.classList.contains("hidden");
      panel.classList.toggle("hidden", !isHidden);
      button.textContent = isHidden ? "Hide short explanation" : "Show short explanation";
    });
  });
}

function renderSkeletonProjects() {
  document.getElementById("projectsGrid").innerHTML = [1,2,3]
    .map(() => '<div class="card skeleton"></div>')
    .join("");
}

async function loadGithubProjects() {
  const status = document.getElementById("projectsStatus");
  renderSkeletonProjects();

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
    if (!response.ok) throw new Error("Failed to load repositories");

    const repos = await response.json();
    const projects = Array.isArray(repos)
      ? repos
          .filter((repo) => !repo.fork)
          .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0) || new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6)
          .map((repo) => ({
            title: formatRepoName(repo.name),
            description: repo.description || "A GitHub repository from my portfolio. Add a custom summary later for stronger storytelling.",
            shortExplanation: `Built and maintained as part of my public developer portfolio. Primary language: ${repo.language || "Not specified"}. Last updated ${new Date(repo.updated_at).toLocaleDateString()}.`,
            videoTitle: "Project demo video",
            videoDescription: "Add a Loom, YouTube, or hosted demo URL here when available.",
            videoUrl: repo.homepage || repo.html_url,
            stack: [repo.language || "Code", ...(repo.topics || []).slice(0, 3)],
            link: repo.html_url,
            stars: repo.stargazers_count || 0,
          }))
      : [];

    renderProjectCards(projects.length ? projects : fallbackProjects);
    if (!projects.length) {
      status.textContent = "GitHub returned no usable public repositories, so a fallback project card is being shown.";
      status.classList.remove("hidden");
    }
  } catch (error) {
    renderProjectCards(fallbackProjects);
    status.textContent = "GitHub projects could not be loaded right now. A fallback project card is being shown instead.";
    status.classList.remove("hidden");
  }
}

function setupTheme() {
  const body = document.body;
  const savedTheme = localStorage.getItem("portfolio-theme");
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector(".theme-icon");
  const label = toggle.querySelector(".theme-label");

  function applyTheme(theme) {
    body.setAttribute("data-theme", theme);
    const dark = theme === "dark";
    icon.textContent = dark ? "☀" : "☾";
    label.textContent = dark ? "Light mode" : "Dark mode";
    localStorage.setItem("portfolio-theme", theme);
  }

  applyTheme(savedTheme || "dark");
  toggle.addEventListener("click", () => {
    const next = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

renderSocials();
renderSkills();
renderExperience();
setupTheme();
setupReveal();
loadGithubProjects();
