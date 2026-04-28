# OpenCode adapter

## Preferred install targets

OpenCode can discover skills from multiple compatible locations, including:

- `.opencode/skills/<skill-name>/SKILL.md`
- `.claude/skills/<skill-name>/SKILL.md`
- `.agents/skills/<skill-name>/SKILL.md`

Copy the full shared skill folder so the local `references/` directory remains
available at runtime.

## Source-first workflow

Keep `.skills/agent-skill/` as the only canonical source tree, then install an
OpenCode-friendly layout when needed. The OpenCode adapter notes belong in
`.skills/providers/opencode/`.

```bash
node .skills/export/scripts/agentkit-seo.mjs install \
  --provider opencode \
  --project-root .
```

This installs the shared skills into:

- `.opencode/skills/`

Use `export` only when you want a preview bundle or a packaging artifact.

## Invocation model

OpenCode has native skill discovery and also supports custom commands.

## Important constraint

The docs clearly describe flat custom command names from filenames, but they do
not document the same clean colon namespace pattern for commands that Gemini CLI
does. Because of that, the safest OpenCode command surface is flat:

- `/agentkit-seo-linkedin`
- `/agentkit-seo-github`
- `/agentkit-seo-cv-ats`

## Practical recommendation

Prioritize native skill loading first. If you add command wrappers, keep them
flat and map them to the shared skill names without inventing undocumented
namespacing behavior.
