<!--
metadata:
  title: "GitHub repository SEO"
  platform: "github"
  objective: "Rules for optimizing individual projects for GitHub search, external search, and human evaluation."
  status: "draft"
  last_updated: "2026-04-29"
  tags: ["github", "repository", "seo", "topics"]
  agent_priority: "high"
-->

# GitHub repository SEO

> This file provides the rules for optimizing an individual project repository so it is easier to find, understand, and evaluate across GitHub, external search, and AI tools.

---

## 1. Overview

Creating a great codebase is only half the battle; if the repository metadata is weak, fewer people will understand or find it. Repository names, About descriptions, README headings, and topic tags all provide structured context for GitHub search surfaces, external search engines, AI tools, and human visitors.

## 2. Metadata constraints

**Rule:** Use hyphenated, keyword-rich repository names. Do not use internal project codenames (e.g., `project-phoenix`). Use clear, descriptive names separated by hyphens so the search engine can tokenize the words (e.g., `react-native-auth-template`).

**Rule:** Optimize the "About" section as a meta description. The short description in the right sidebar is critical for discovery. Keep it short, concrete, and front-loaded with the main concept. Answer "What is it?" and, when useful, "Who is it for?" Do not leave this field blank.

**Rule:** Maximize the 20 Topic tags. GitHub allows up to 20 topics per repository. These work as structured discovery tags. Aim to use the most relevant topics instead of filling the list with weak matches.
*   Include the core language/framework (`python`, `fastapi`).
*   Include the architectural pattern (`microservices`, `rest-api`).
*   Include the industry or use case (`ecommerce`, `automation`).

## 3. Visual and structural constraints

**Recommendation:** Upload a custom Social Preview image. Navigate to Settings > General > Social preview and upload a custom 1280 x 640 px image. When your repository is shared on LinkedIn, X, Discord, or chat tools, this image acts as a professional card and can improve click-through.

**Rule:** Provide a clear "Quickstart" in the README. The project `README.md` must have an explicit "Installation" or "Quickstart" section near the top, featuring a one-line install command (e.g., `npm install package-name`). This reduces friction and increases the likelihood that a visitor will actually test the code and star the repository.

**Recommendation:** Include Security and Maintenance signal files. Human developers and automated tools look for signals of professional maintenance. Including files like `CODEOWNERS`, `SECURITY.md`, and `LICENSE`, plus relevant security badges such as OpenSSF Scorecard, makes the project easier to evaluate. These files support trust; do not describe them as a guaranteed authority-score boost.

## 4. Examples

Good example (About section):
```text
<!-- CORRECT: 11 words, starts with the core keyword, clear use case -->
A lightweight React component library for building accessible enterprise dashboards.
```

Bad example (About section):
```text
<!-- WRONG: Vague, no keywords, focuses on the author rather than the tool -->
This is my final project for the web dev bootcamp.
```

## 5. Anti-Patterns

### The undocumented monolith

**What it looks like:** Pushing 10,000 lines of complex backend code to a repository with a README that only says "Backend Server." **Why it fails:** Neither humans nor AI agents can understand the value of the code without context. Search tools may still index the code, but they will not receive clear project-level language about the architecture, use case, or value. Recruiters and developers are also more likely to leave quickly. **What to do instead:** Always document the architecture, the "Why," and the tech stack in the repository README, even if the code itself is clean.

---

*Next step: Fix your language stats in [Linguist and statistics](./linguist-and-stats.md).*
