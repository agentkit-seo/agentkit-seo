---
name: agentkit-seo-agent-context-optimization
description: Build, normalize, and maintain the user's personal professional
  source-of-truth context so downstream platform outputs stay factual and
  consistent. Use when the user wants to consolidate CV data, LinkedIn exports,
  GitHub history, project summaries, bio facts, achievements, or positioning
  into a single agent-readable context file before editing platform-specific
  assets.
---

# AgentKit SEO Agent Context Optimization

## Overview

Use this skill before any cross-platform optimization pass that depends on a
stable factual record. The goal is to turn scattered inputs into one reliable,
agent-readable context file.

## Workflow

1. Read [references/why-and-when.md](references/why-and-when.md) when deciding
   whether a context file is needed before other optimization work.
2. Read [references/spec-and-structure.md](references/spec-and-structure.md)
   before drafting, validating, or restructuring the file.
3. Read [references/drafting-template.md](references/drafting-template.md)
   when creating a new file or repairing a weak one into the canonical shape.
4. Read [references/maintenance-and-validation.md](references/maintenance-and-validation.md)
   when integrating new material, managing growth, or checking file integrity.
5. Read [references/operating-workflow.md](references/operating-workflow.md)
   when combining the context file with downstream platform skills.
6. Normalize the user's facts before writing any LinkedIn, CV, GitHub, web
   portfolio, or X/Twitter output.

## Rules

- Preserve facts over polish.
- Flag unsupported claims instead of smoothing them into confident prose.
- Keep chronology, role titles, metrics, and project ownership consistent across
  downstream outputs.
- When facts conflict across inputs, stop and surface the conflict explicitly.
- Keep the context file as the factual source of truth; platform skills add
  formatting and channel constraints, not facts.
- When drafting from scratch, produce the canonical section order first and
  populate only verified material.
- When updating an existing file, prefer targeted entry-level edits over
  rewriting the whole document.

## Handoff

Once the context file is clean, hand off to exactly one target platform skill
unless the user explicitly requests a multi-surface pass.
