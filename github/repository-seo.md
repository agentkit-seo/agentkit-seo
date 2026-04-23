---
title: "GitHub repository SEO"
platform: "github"
objective: "Rules for optimizing individual projects for GitHub Explore and internal search ranking."
status: "draft"
last_updated: "2026-04-23"
tags: ["github", "repository", "seo", "topics"]
agent_priority: "high"
---

# GitHub repository SEO

> This file provides the rules for optimizing an individual project repository to ensure it ranks highly in GitHub Explore, internal search queries, and external search engines.

---

## 1. Overview

Creating a great codebase is only half the battle; if the repository metadata is not optimized, no one will find it. GitHub's internal search algorithm relies heavily on specific, structured metadata fields—namely the repository name, the About description, and Topic tags.

## 2. Metadata constraints

**Rule:** Use hyphenated, keyword-rich repository names.
Do not use internal project codenames (e.g., `project-phoenix`). Use clear, descriptive names separated by hyphens so the search engine can tokenize the words (e.g., `react-native-auth-template`).

**Rule:** Optimize the "About" section as a meta description.
The short description in the right sidebar is critical for SEO. Keep it between 5 and 15 words. Start with the main keyword. Answer "What is it?" and "Who is it for?" immediately. Do not leave this field blank.

**Rule:** Maximize the 20 Topic tags.
GitHub allows up to 20 topics (tags) per repository. These function as Latent Semantic Indexing (LSI) keywords. You should aim to use 10 to 20 relevant topics.
*   Include the core language/framework (`python`, `fastapi`).
*   Include the architectural pattern (`microservices`, `rest-api`).
*   Include the industry or use case (`ecommerce`, `automation`).

## 3. Visual and structural constraints

**Rule:** Upload a custom Social Preview image.
Navigate to Settings > General > Social preview and upload a custom 1280x640px image. When your repository is shared on LinkedIn, Twitter, or Discord, this image acts as a professional card, drastically increasing the Click-Through Rate (CTR).

**Rule:** Provide a clear "Quickstart" in the README.
The project `README.md` must have an explicit "Installation" or "Quickstart" section near the top, featuring a one-line install command (e.g., `npm install package-name`). This reduces friction and increases the likelihood that a visitor will actually test the code and star the repository.

**Rule:** Include Security and Maintenance signal files.
Both human developers and algorithms look for signals of professional maintenance. Including files like `CODEOWNERS`, `SECURITY.md`, `LICENSE`, and displaying security badges (like the OpenSSF Scorecard) signals to external SEO algorithms and AI agents that the project is actively maintained and secure, boosting its authority score.

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

**What it looks like:** Pushing 10,000 lines of complex backend code to a repository with a README that only says "Backend Server."
**Why it fails:** Neither humans nor AI agents can understand the value of the code without context. The Blackbird search engine cannot index the architectural concepts, and recruiters will immediately leave the page.
**What to do instead:** Always document the architecture, the "Why," and the tech stack in the repository README, even if the code itself is clean.

---

*Next step: Fix your language stats in [Linguist and statistics](./linguist-and-stats.md).*