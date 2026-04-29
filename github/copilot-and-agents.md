---
title: "Copilot and agent optimization"
platform: "github"
objective: "Guide to Agentic Engine Optimization (AEO) within GitHub, utilizing AGENTS.md and Copilot context."
status: "draft"
last_updated: "2026-04-24"
tags: ["github", "copilot", "aeo", "agents"]
agent_priority: "high"
---

# Copilot and agent optimization

> This file explains how to structure a repository so GitHub Copilot and other AI agents can find the right context quickly. It distinguishes official GitHub behavior from general recommendations for external tooling.

---

## 1. Overview

Developers and recruiters increasingly use AI tools to evaluate repositories. On GitHub itself, Copilot uses repository indexing and repository-specific instruction files. Outside GitHub, other agents and retrieval pipelines often depend on clean documentation and file structure. These are related needs, but they are not the same system.

## 2. Copilot semantic indexing

**Rule:** Expect initial indexing to take time on large repositories. GitHub documents that repository indexing runs in the background and can take up to 60 seconds for a large repository. The first question in a fresh repository context may therefore be weaker than later questions once indexing completes.

## 3. Repository instruction files

**Rule:** Use `.github/copilot-instructions.md` for repository-wide Copilot guidance. GitHub's official repository custom instructions file for Copilot is `.github/copilot-instructions.md`. Use it for broad repository guidance such as coding conventions, test commands, and validation expectations.

**Rule:** Use `.github/instructions/*.instructions.md` for path-specific guidance. GitHub supports path-specific instruction files inside `.github/instructions`. These use frontmatter with `applyTo` globs so guidance can target only certain parts of the codebase.

**Rule:** Use `AGENTS.md` for agent-specific instructions, and place it where scope matters. GitHub documents that `AGENTS.md` files can be stored anywhere within the repository, and that the nearest `AGENTS.md` in the directory tree takes precedence when Copilot is working.

**Recommendation:** Keep instruction files focused and non-conflicting. GitHub's docs do not prescribe a strict template, but concise, task-oriented instructions are easier for agents to follow than sprawling policy documents.

**Recommendation:** Use a simple boundary structure inside `AGENTS.md`. A practical pattern is:

- **Always do:** non-negotiable conventions.
- **Ask first:** actions that require confirmation.
- **Never do:** hard boundaries and dangerous areas.

This is a recommendation pattern drawn from GitHub's blog, not a product requirement.

## 4. External agent preparedness

**Recommendation:** Keep critical operational documentation in Markdown and easy-to-find paths. This is not a GitHub product requirement. It is an inference for external agents and retrieval systems. Many simple tooling stacks work better with clean Markdown in obvious locations than with scattered PDFs or generated documentation.

**Recommendation:** Include an architectural index somewhere near the root. Do not force an agent to infer the repository map from scratch. A short map of where core domains live is high-value context for both humans and AI tools.

## 5. Documentation hygiene

**Recommendation:** Prefer source-of-truth docs over duplicated summaries. External retrieval systems perform better when the repository has one authoritative place for setup instructions, one for architecture, and one for conventions. Duplication creates conflicting context.

---

*Return to the [GitHub optimization index](./README.md).*
