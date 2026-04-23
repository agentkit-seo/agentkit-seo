---
title: "GitHub optimization"
platform: "github"
objective: "Master index and routing logic for optimizing a GitHub profile and repositories for internal search and Copilot."
status: "draft"
last_updated: "2026-04-23"
tags: ["github", "index", "seo", "blackbird"]
agent_priority: "high"
---

# GitHub optimization

> This directory contains the rules and strategies for engineering a GitHub profile and repositories that rank highly in GitHub's internal search algorithm (Blackbird) and are perfectly indexed for AI agents and GitHub Copilot.

---

## 1. Overview: The internal ecosystem

Optimizing for GitHub is fundamentally different from optimizing for Google or a traditional ATS. You are optimizing for an ecosystem that weights open-source contribution graphs, exact-match code queries, and semantic vector indexing.

The first audience is GitHub's internal code search engine, known as **Blackbird**. It dictates how your repositories appear when recruiters or developers search for specific technologies or projects.

The second audience consists of **AI Agents and Copilot**. Copilot uses a sophisticated semantic search index that updates in the background. Ensuring your documentation and codebase are structured to feed this index correctly is the foundation of Agentic Engine Optimization (AEO) for code.

## 2. Module index

The optimization logic is divided into the following documents, ordered from foundational algorithms to specific technical configurations:

- **[The Blackbird algorithm](./algorithm-blackbird.md):** Deep dive into GitHub's internal search engine, including exact-match weighting and indexing exclusions.
- **[Profile architecture](./profile-architecture.md):** Foundational settings, optimizing the 160-character bio, strategic repository pinning, and contribution graph management.
- **[Profile README](./profile-readme.md):** Strategy for the special `username/username` repository, using markdown badges, and maintaining token efficiency.
- **[Repository SEO](./repository-seo.md):** Rules for optimizing individual projects, including naming conventions, the 15-word "About" description, and topic tags.
- **[Linguist and statistics](./linguist-and-stats.md):** How to manipulate the repository language statistics bar using `.gitattributes` to prevent CSS or vendor files from skewing your perceived stack.
- **[Engagement signals](./engagement-signals.md):** How GitHub uses "social proof" (stars, forks, releases) to rank repositories.
- **[Copilot and agents](./copilot-and-agents.md):** The definitive guide to AEO within GitHub, including Copilot's semantic vector indexing and `AGENTS.md` boundaries.
- **[Sources](./sources.md):** Citations and research validating the internal mechanics of GitHub search and Copilot indexing.

## 3. Usage for agents

When an AI agent is tasked with optimizing a user's GitHub presence:

1. Review this index to determine which specific sub-module is relevant to the task.
2. If optimizing the overarching profile (`username/username`), load `profile-architecture.md` and `profile-readme.md`.
3. If optimizing a specific project repository, load `repository-seo.md` and `linguist-and-stats.md`.
4. If writing AI instructions for a codebase, load `copilot-and-agents.md`.
5. Always enforce the formatting constraints defined in the sub-modules over generic creative writing.

---

*Next step: Understand the search engine in [The Blackbird algorithm](./algorithm-blackbird.md).*