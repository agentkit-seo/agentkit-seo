# Agent skill architecture

This directory stores the portable skill bundles, provider adapters, and export
tooling for `AgentKit SEO`.

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
  providers/
    claude-code/
    codex/
    gemini-cli/
    opencode/
  export/
    export-config.json
    scripts/
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

## Four layers

1. Repo hub:
   Human-readable editorial docs at the repo root.
2. Portable skill bundle:
   Self-contained skills in `.skills/agent-skill/` using `SKILL.md`,
   `references/`, and `agents/openai.yaml`.
3. Provider adapter:
   Install notes, wrappers, or provider-specific templates in
   `.skills/providers/<provider>/`.
4. Export layer:
   Generated provider-facing layouts produced from `.skills/export/`.

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
7. Keep provider packaging generated wherever possible; do not hand-maintain a
   second canonical copy of the skill tree at the repo root.

## Packaging stance

The shared skills should be installable on their own without requiring the
entire repository checkout. The repo hub remains the editorial workspace, but
the portable runtime artifact is the `.skills/agent-skill/` tree.

When a provider expects a different directory layout, install or export that
layout from the canonical `.skills` source tree instead of editing provider
folders by hand. The reference CLI lives at:

- `.skills/export/export-config.json`
- `.skills/export/scripts/agentkit-seo.mjs`

Current supported direct install targets are:

- `claude-code`
- `codex`
- `opencode`

Gemini CLI adapter notes exist, but Gemini is not a direct export/install target
until the command-wrapper artifact is implemented.

Direct install example:

```bash
node .skills/export/scripts/agentkit-seo.mjs install \
  --provider claude-code \
  --project-root .
```

Current supported export targets are:

- `shared`
- `claude-code`
- `codex`
- `opencode`

Do not list `gemini-cli` as an export target until `.gemini/commands/` wrappers
are generated or copied as part of the exported bundle.

Preview export example:

```bash
node .skills/export/scripts/agentkit-seo.mjs export \
  --provider claude-code \
  --output /tmp/agentkit-seo-bundles
```

## Root files and distribution

Keep the source of truth inside `.skills/`. Root-level packaging files should
exist only when they unlock a real distribution channel.

Today that means:

- a minimal root `package.json` is justified if we want an `npx`-friendly CLI
  for installing, exporting, or packaging the shared skills
- provider manifests such as `gemini-extension.json` or
  `.claude-plugin/plugin.json` do not need to live at the repo root while we
  are still authoring the shared source tree

Generate provider-facing manifests only when we intentionally publish a
provider-specific release artifact.
