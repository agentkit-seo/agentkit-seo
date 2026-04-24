---
title: "Agent context optimization"
platform: "general"
objective: "Navigation index for the agent-context-optimization folder, including the specification, workflow, maintenance guide, template, and example file."
status: "draft"
last_updated: "2026-04-24"
tags: ["context-file", "index", "navigation"]
agent_priority: "medium"
---

# Agent context optimization

> This folder defines the standard for building and maintaining a personal agent context file. It is the source-of-truth module for grounding career-focused AI work in verified facts.

---

## 1. Overview

This directory contains the architecture, workflow, and maintenance rules for a personal agent context file. The file itself is a structured Markdown knowledge base describing a person's academic and professional record in a format that both humans and AI agents can navigate reliably.

The intended use is simple: keep one canonical context file up to date, load it into an agent session, and combine it with the platform-specific modules in this repository when generating CVs, LinkedIn text, portfolio copy, or interview prep.

## 2. Directory contents

- [context-file-spec.md](./context-file-spec.md): The authoritative specification for structure, section order, semantic tags, and validation.
- [why-context-files.md](./why-context-files.md): The motivation document explaining why a context file outperforms copy-pasted raw text or agent memory.
- [agent-workflow.md](./agent-workflow.md): The operational guide for loading the file into agent sessions and combining it with other modules.
- [file-maintenance.md](./file-maintenance.md): The maintenance lifecycle for updates, token growth, verified facts, and version history.
- [templates/context-file-template.md](./templates/context-file-template.md): A guided template for building a new personal context file.
- [examples/renato-mignone-context-file.md](./examples/renato-mignone-context-file.md): A full worked example showing how the spec looks in practice.

## 3. Recommended reading order

Read the files in this order when onboarding a new user or agent:

- Start with [why-context-files.md](./why-context-files.md) if the reader does not yet understand the purpose.
- Read [context-file-spec.md](./context-file-spec.md) before authoring or editing any real file.
- Use [templates/context-file-template.md](./templates/context-file-template.md) to draft a new file.
- Use [agent-workflow.md](./agent-workflow.md) when operating with the file in live sessions.
- Use [file-maintenance.md](./file-maintenance.md) whenever new achievements, grades, roles, or certifications need to be added.

## 4. Usage for agents

When an AI agent is asked to work with a personal context file:

1. Load [context-file-spec.md](./context-file-spec.md) before editing or validating the file.
2. Load [agent-workflow.md](./agent-workflow.md) when the task is about prompting or module routing.
3. Load [file-maintenance.md](./file-maintenance.md) when new content must be integrated into an existing file.
4. Treat the personal context file itself as the factual source of truth, not the surrounding explanatory docs.
