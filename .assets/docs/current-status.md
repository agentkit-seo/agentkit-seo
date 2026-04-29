# AgentKit SEO Current Status

This file is the local working status note for the repository. It is meant to hold implementation-state context that would make the public `README.md` too heavy.

## As of April 29, 2026

### Core architecture

- `.skills/agent-skill/` is the canonical source of truth.
- `.skills/providers/` contains provider-specific adapter notes.
- `.skills/export/` contains the install/export tooling.
- The repo root docs remain the human-readable editorial hub.
- `.assets/docs/STYLEGUIDE.md` defines the schema boundaries between editorial docs, runtime skills, provider notes, templates, and examples.

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
- direct extension install for `gemini-cli`
- direct install for `opencode`
- Gemini CLI namespaced command wrappers such as `/agentkit-seo:linkedin`
- OpenCode flat command wrappers such as `/agentkit-seo-linkedin`
- global user-level install for supported providers when `--project-root` is omitted
- shared bundle export
- provider-shaped export bundles
- local `npm exec --package ./. -- agentkit-seo ...` usage

Not shipped yet:

- published npm package for public `npx agentkit-seo ...`
- marketplace / registry distribution
- executable public demos/evals

Drafted but not executable yet:

- public evaluation plan in `.assets/docs/evaluation-plan.md`

Last verified locally on April 28, 2026:

- `npm run list:skills`
- `npm run list:providers`
- `node .skills/export/scripts/agentkit-seo.mjs list commands --provider gemini-cli`
- `node .skills/export/scripts/agentkit-seo.mjs list commands --provider opencode`
- `node .skills/export/scripts/agentkit-seo.mjs export --provider all --output /tmp/agentkit-seo-review-export --force`
- `node .skills/export/scripts/agentkit-seo.mjs install --provider codex --target-dir /tmp/agentkit-seo-codex-install --force`
- `node .skills/export/scripts/agentkit-seo.mjs install --provider gemini-cli --target-dir /tmp/agentkit-seo-gemini-extension --force`
- `node .skills/export/scripts/agentkit-seo.mjs install --provider opencode --target-dir /tmp/agentkit-seo-opencode-skills --commands-target-dir /tmp/agentkit-seo-opencode-commands --force`
- `npm --cache /tmp/npm-cache pack --dry-run`

Reverified locally on April 29, 2026 after content-alignment updates:

- `npm run list:skills`
- `npm run list:providers`
- `node .skills/export/scripts/agentkit-seo.mjs export --provider all --output /tmp/agentkit-seo-review-export --force`

### Why this file exists

Use this document for:

- local rollout notes
- implementation-state reminders
- near-term packaging gaps
- decisions that matter to maintainers but should not dominate the public README
