---
title: "Copilot and agent optimization"
platform: "github"
objective: "Guide to Agentic Engine Optimization (AEO) within GitHub, utilizing AGENTS.md and Copilot context."
status: "draft"
last_updated: "2026-04-23"
tags: ["github", "copilot", "aeo", "agents"]
agent_priority: "high"
---

# Copilot and agent optimization

> This file is the definitive guide to Agentic Engine Optimization (AEO) for codebases. It explains how to structure your repository so that GitHub Copilot, AI agents, and RAG pipelines can parse, index, and reason over your code flawlessly.

---

## 1. Overview

Developers and recruiters are increasingly using AI tools to evaluate code. GitHub Copilot indexes entire repositories to answer structural questions, while external agents use Retrieval-Augmented Generation (RAG) to scan documentation. Optimizing for these tools requires setting explicit boundaries and providing clear, token-efficient context.

## 2. Copilot semantic indexing

**Rule:** Understand the 60-second semantic window.
Unlike standard text search, GitHub Copilot uses a vector-based semantic code search index. When Copilot first encounters a large repository, it takes approximately 60 seconds to build this index. Do not expect Copilot to instantly understand complex architectural relationships the second you push code; allow the background indexing to complete.

## 3. The AGENTS.md file (AEO Standard)

**Rule:** Create an `AGENTS.md` file in the root of your repository.
This acts as a "README for AI." It is a dedicated file where you provide explicit instructions, constraints, and architectural maps for any AI agent interacting with the codebase.

**Rule:** Use the Three-Tier constraint system.
Structure your `AGENTS.md` with explicit boundary markers that LLMs easily comprehend:
1.  **Always do:** (e.g., "Always format TypeScript using the Prettier configuration in root").
2.  **Ask first:** (e.g., "Always ask the user for confirmation before executing `npm install`").
3.  **Never do:** (e.g., "Never modify configuration files in the `.github/workflows/` directory").

**Rule:** Provide an architectural index.
Do not force the agent to crawl the entire file tree to find the routing logic. Provide a clear map in the `AGENTS.md`: "Database schemas are in `/prisma`, API routes are in `/src/routes/`, and UI components are in `/src/components/`."

## 4. GitHub Copilot Instructions

**Rule:** Use `.github/copilot-instructions.md` for Copilot Chat.
While `AGENTS.md` is a general standard for all AI agents, GitHub Copilot specifically looks for a file named `copilot-instructions.md` located within the `.github/` directory. 

You can use this file to feed custom prompt instructions directly into Copilot Chat. For example, you can enforce specific coding styles (e.g., "Always use functional components in React") or direct the AI to specific testing frameworks.

**Rule:** Adhere to the 1,000-line recommended limit.
Do not treat this file as exhaustive API documentation. GitHub recommends keeping `.github/copilot-instructions.md` concise (ideally under 1,000 lines or 2 pages of text). Exceeding this limit can overwhelm the context window, causing Copilot to become slow or produce lower-quality responses.

**Rule:** Use YAML glob patterns for targeted instructions.
Instead of one massive file, you can modularize instructions (e.g., `.github/instructions/python.instructions.md`) and use YAML glob patterns at the top of the file (like `applyTo: "**/*.py"`) to inject rules only when specific files are open.

## 5. RAG Pipeline Preparedness

**Rule:** Keep documentation flat and in Markdown.
Many developers build custom RAG pipelines by syncing GitHub repositories to vector databases. If your documentation relies on complex HTML, dynamically generated React pages, or PDFs, it will fail to index properly in these vector stores. Maintain all critical project documentation as flat, clean `.md` files to ensure 100% extraction accuracy by external LLMs.

---

*Return to the [GitHub optimization index](./README.md).*