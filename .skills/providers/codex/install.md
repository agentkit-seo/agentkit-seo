# Codex adapter

## Preferred install target

Keep Codex compatibility centered on the shared `SKILL.md` folders and the
`agents/openai.yaml` metadata already bundled in each shared skill.

In practice, the reusable source of truth is:

- `.skills/agent-skill/<skill-name>/SKILL.md`
- `.skills/agent-skill/<skill-name>/references/`
- `.skills/agent-skill/<skill-name>/agents/openai.yaml`

## Source-first workflow

Do not hand-maintain a second Codex skill tree in the repo root. Author in
`.skills/agent-skill/`, keep Codex adapter notes in
`.skills/providers/codex/`, then install a Codex-facing layout when needed:

```bash
node .skills/export/scripts/agentkit-seo.mjs install \
  --provider codex \
  --project-root .
```

This installs the shared skills into:

- `.codex/skills/`

Use `export` only when you want a preview bundle or a packaging artifact.

## Invocation model

Codex skills are better treated as explicit skills than as slash commands.
Design the Codex experience around selecting or explicitly invoking the shared
skill, for example:

- `$agentkit-seo-linkedin`
- `$agentkit-seo-github`
- `$agentkit-seo-cv-ats`

## Practical recommendation

Do not force a slash-command abstraction onto Codex. Keep the core workflow in
the shared skills and let Codex use them through its native skill selection
flow.
