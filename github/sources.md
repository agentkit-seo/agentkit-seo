---
title: "GitHub optimization sources"
platform: "github"
objective: "Centralized citations and research validating the mechanics of GitHub search and Copilot indexing."
status: "draft"
last_updated: "2026-04-23"
tags: ["github", "sources", "research", "blackbird"]
agent_priority: "low"
---

# GitHub optimization sources

> This file contains the research, citations, and system documentation that validate the rules and constraints defined in the github module.

---

## 1. Overview

The rules defined in the `github` module are based on GitHub's official system documentation, community discussions, and empirical testing of the Blackbird search engine and Copilot semantic index.

## 2. Sources

- [Indexing repositories for GitHub Copilot (GitHub Docs)](https://docs.github.com/en/copilot/concepts/context/repository-indexing) — Validates the mechanics of semantic indexing, the 60-second initial indexing window, and context awareness limits.
- [GitHub Repo Indexing Guide (DevActivity)](https://devactivity.com/insights/unlocking-visibility-a-guide-to-github-repository-indexing-and-achieving-your-software-development-goals) — Details the requirements for Blackbird indexing, including the necessity of a default branch commit and the exclusion of archived or oversized repositories.
- [How to write a great agents.md (GitHub Blog)](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/) — Validates the structure and necessity of the `AGENTS.md` file for Agentic Engine Optimization (AEO), including the Three-Tier constraint system.
- [GitHub Community Discussions (#52095, #57889)](https://github.com/orgs/community/discussions) — Provides empirical evidence on forcing search indexing triggers via local repository search queries.
- [Markdown Badges (Ileriayo)](https://github.com/Ileriayo/markdown-badges) — Open-source standard for visual hierarchy and machine-readable SVG badges in profile READMEs.
- [Customizing GitHub Copilot Chat (GitHub Docs)](https://docs.github.com/en/copilot/customizing-copilot) — Documentation on the implementation and priority of the `.github/copilot-instructions.md` file.