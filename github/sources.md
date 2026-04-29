<!--
metadata:
  title: "GitHub optimization sources"
  platform: "github"
  objective: "Centralized citations and research validating the mechanics of GitHub search and Copilot indexing."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["github", "sources", "research", "blackbird"]
  agent_priority: "low"
-->

# GitHub optimization sources

> This file contains the research, citations, and system documentation that validate the rules and constraints defined in the github module.

---

## 1. Overview

The rules defined in the `github` module are based primarily on GitHub's official documentation. Community or blog sources are used only where GitHub publishes guidance informally rather than as product documentation.

## 2. Sources

- [Indexing repositories for GitHub Copilot (GitHub Docs)](https://docs.github.com/en/copilot/concepts/context/repository-indexing) — Official description of repository indexing, initial indexing time, and automatic updates.
- [Adding repository custom instructions for GitHub Copilot (GitHub Docs)](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) — Official documentation for `.github/copilot-instructions.md`, path-specific instructions, and `AGENTS.md` precedence.
- [Searching code (GitHub Docs source)](https://github.com/github/docs/blob/main/content/search-github/searching-on-github/searching-code.md) — Primary source for legacy code-search restrictions such as default-branch indexing, fork rules, searchable file size, and archived-repository exclusions.
- [Navigating code on GitHub (GitHub Docs)](https://docs.github.com/en/repositories/working-with-files/using-files/navigating-code-on-github) — Official documentation for code navigation and symbol search behavior.
- [Archiving repositories (GitHub Docs)](https://docs.github.com/repositories/archiving-a-github-repository/archiving-repositories) — Official behavior of archived repositories and their read-only state.
- [Setting repository visibility (GitHub Docs)](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility) — Official behavior for public and private visibility.
- [How to write a great agents.md: Lessons from over 2,500 repositories (GitHub Blog)](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/) — Useful secondary guidance for the structure and practical use of `AGENTS.md`.
