---
title: "GitHub profile README"
platform: "github"
objective: "Strategy for the username/username repository, focusing on Markdown badges and token efficiency."
status: "draft"
last_updated: "2026-04-23"
tags: ["github", "readme", "badges", "seo"]
agent_priority: "high"
---

# GitHub profile README

> This file defines the strategy for creating the special `username/username` repository, transforming it into a visual landing page for humans and a structured keyword hub for AI agents.

---

## 1. Overview

By creating a public repository with a name that exactly matches your GitHub username, the `README.md` file within it will be automatically displayed at the top of your profile page. This is your developer landing page. It must balance high-impact visual design to increase human "dwell time" with token-efficient text for AI agents and search engines.

## 2. Content constraints

**Rule:** Apply the "First 100 Words" rule.
Search engines (like Google) and LLMs index the beginning of a document most heavily. Place your primary keywords (e.g., "Full-Stack Engineer," "Distributed Systems," "React") in the H1/H2 tags and the very first paragraph. Do not start with a long, rambling personal story.

**Rule:** Use Markdown Badges for the tech stack.
Use the `Ileriayo/markdown-badges` syntax to create a visual tech stack. This serves a dual purpose:
1.  **For Humans:** It creates a clean, scannable, and colorful UI that increases dwell time.
2.  **For AI:** The `alt` text in the Markdown image tag (e.g., `![PostgreSQL](...)`) acts as a pure, machine-readable keyword for scrapers and indexing algorithms.

## 3. Formatting rules

**Rule:** Maintain a strict H2/H3 hierarchy.
Do not use bold text to simulate headers. Use standard Markdown headers (`## About Me`, `## Tech Stack`, `## Featured Projects`). LLM agents use these headers to chunk the document semantically.

**Rule:** Avoid heavy dynamic stat cards if token efficiency is required.
While dynamic stat cards (like GitHub Readme Stats) look great to humans, they inject complex SVG code into the DOM. If your primary goal is Agentic Engine Optimization (AEO), excessive dynamic SVGs can bloat the context window of an agent scraping your profile. Stick to static Markdown badges for maximum efficiency.

## 4. Examples

Good example (Tech Stack Badges):
```markdown
<!-- CORRECT: Visually appealing for humans, keyword-rich for machines -->
## Tech Stack
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
```

Bad example:
```markdown
<!-- WRONG: Boring for humans, lacks visual hierarchy -->
## Skills
- Python
- Go
- Kubernetes
```

## 5. Anti-Patterns

### The empty landing page

**What it looks like:** Creating the `username/username` repository but leaving the default "Hi there 👋" template without adding any specific skills or projects.
**Why it fails:** It pushes your actual pinned repositories down the page and wastes the most valuable SEO real estate on your entire GitHub profile.
**What to do instead:** If you are not going to fully populate the profile README with a bio, tech stack, and links, delete the repository entirely so your pinned projects sit at the top of the page.

---

*Next step: Optimize individual projects in [Repository SEO](./repository-seo.md).*