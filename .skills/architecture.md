# Agent skill architecture

This directory stores the portable skill bundles and the provider-specific
adapter notes for `AgentKit SEO`.

## Recommended structure

```text
.skills/
  agent-skill/
    agentkit-seo/
    agentkit-seo-agent-context-optimization/
    agentkit-seo-cv-ats/
    agentkit-seo-github/
    agentkit-seo-linkedin/
    agentkit-seo-web-portfolio/
    agentkit-seo-x-twitter/
  claude-code/
  codex/
  gemini-cli/
  opencode/
```

## Why the shared skills are namespaced

The portable skill folders use names like `agentkit-seo-linkedin` instead of
plain `linkedin` for three reasons:

1. They avoid collisions with unrelated skills in a user's global skill
   directory.
2. OpenCode documents a stricter contract where the skill `name` must match the
   containing folder name.
3. Provider adapters can still expose a cleaner command surface on top, such as
   `/agentkit-seo:linkedin`, where that syntax is actually supported.

## Three layers

1. Repo hub:
   Human-readable editorial docs at the repo root.
2. Portable skill bundle:
   Self-contained skills in `.skills/agent-skill/` using `SKILL.md`,
   `references/`, and `agents/openai.yaml`.
3. Provider adapter:
   Install notes, wrappers, or export helpers in `.skills/<provider>/`.

## Design rules

1. Keep one portable source of truth in `.skills/agent-skill/`.
2. Treat provider folders as adapters, not as the canonical workflow logic.
3. Keep `SKILL.md` lean and procedural; move durable factual guidance into the
   local `references/` directory inside each skill.
4. Do not make shared skills depend on repo-root docs at runtime.
5. Use provider-specific slash commands only as thin wrappers that point the
   agent at the correct shared skill.
6. Do not assume one invocation style works everywhere. The slash namespace
   model is provider-dependent.

## Packaging stance

The shared skills should be installable on their own without requiring the
entire repository checkout. The repo hub remains the editorial workspace, but
the portable runtime artifact is the `.skills/agent-skill/` tree.
