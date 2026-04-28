---
name: agentkit-seo
description: Route personal-branding optimization work to the correct
  AgentKit SEO sub-skill and keep the agent scoped to the minimum relevant
  context. Use when the request spans multiple surfaces, when the correct
  platform is ambiguous, or when the user asks for overall digital presence,
  indexing, discoverability, portfolio, ATS, LinkedIn, GitHub, web portfolio,
  X/Twitter, or agent-context optimization strategy.
---

# AgentKit SEO

## Overview

Use this skill as the orchestrator for the whole repository. Its main job is to
select the right module skill, avoid loading irrelevant platform rules, and
sequence cross-platform work in a sane order.

## Routing workflow

1. Identify the target surface from the request.
2. Load only the matching module skill unless the user explicitly asks for a
   cross-platform pass.
3. If the request spans multiple surfaces, start with
   `agentkit-seo-agent-context-optimization` so the factual source of truth is
   stable before editing platform outputs.
4. If the request is only about the skill system itself, read the references in
   this skill before changing provider adapters or install instructions.

## Module map

- LinkedIn work: `agentkit-seo-linkedin`
- GitHub work: `agentkit-seo-github`
- CV or ATS work: `agentkit-seo-cv-ats`
- Web portfolio work: `agentkit-seo-web-portfolio`
- X or Twitter work: `agentkit-seo-x-twitter`
- Personal source-of-truth context work:
  `agentkit-seo-agent-context-optimization`

## Boundaries

- Do not load every module by default.
- Do not invent platform behavior that the hub has explicitly marked as
  uncertain or disputed.
- Do not rewrite the shared methodology in provider adapter folders. Keep the
  portable source of truth in `.skills/agent-skill/`.

## References

- Read [references/module-routing.md](references/module-routing.md) when the
  user request is broad or ambiguous.
- Read [references/provider-matrix.md](references/provider-matrix.md) when
  changing adapter behavior.
- Read [references/installation-strategy.md](references/installation-strategy.md)
  when changing packaging or install guidance.
