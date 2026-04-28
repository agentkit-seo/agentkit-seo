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
- public demos/evals

### Why this file exists

Use this document for:

- local rollout notes
- implementation-state reminders
- near-term packaging gaps
- decisions that matter to maintainers but should not dominate the public README
