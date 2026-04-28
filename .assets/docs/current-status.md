# AgentKit SEO Current Status

This file is the local working status note for the repository. It is meant to
hold implementation-state context that would make the public `README.md` too
heavy.

## As of April 28, 2026

### Core architecture

- `.skills/agent-skill/` is the canonical source of truth.
- `.skills/providers/` contains provider-specific adapter notes.
- `.skills/export/` contains the install/export tooling.
- The repo root docs remain the human-readable editorial hub.
- `.assets/docs/STYLEGUIDE.md` defines the schema boundaries between editorial docs,
  runtime skills, provider notes, templates, and examples.

### Skill coverage

The shared portable skills currently exist for:

- `agentkit-seo`
- `agentkit-seo-agent-context-optimization`
- `agentkit-seo-linkedin`
- `agentkit-seo-github`
- `agentkit-seo-cv-ats`
- `agentkit-seo-web-portfolio`
- `agentkit-seo-x-twitter`

Each module has been reworked into a self-contained bundle with:

- `SKILL.md`
- local `references/`
- provider-agnostic structure suitable for export/install

### Install/export status

Working today:

- direct install for `claude-code`
- direct install for `codex`
- direct install for `opencode`
- shared bundle export
- provider-shaped export bundles
- local `npm exec --package ./. -- agentkit-seo ...` usage

Not shipped yet:

- published npm package for public `npx agentkit-seo ...`
- Gemini CLI extension wrapper
- marketplace / registry distribution
- executable public demos/evals

Drafted but not executable yet:

- public evaluation plan in `.assets/docs/evaluation-plan.md`

Last verified locally on April 28, 2026:

- `npm run list:skills`
- `npm run list:providers`
- `node .skills/export/scripts/agentkit-seo.mjs export --provider all --output /tmp/agentkit-seo-review-export --force`

### Why this file exists

Use this document for:

- local rollout notes
- implementation-state reminders
- near-term packaging gaps
- decisions that matter to maintainers but should not dominate the public README
