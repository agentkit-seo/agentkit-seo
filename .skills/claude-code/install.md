# Claude Code adapter

## Preferred install target

Install the shared skills into:

- `.claude/skills/<skill-name>/SKILL.md` for project-local use
- `~/.claude/skills/<skill-name>/SKILL.md` for personal global use

Copy the whole self-contained shared skill folder, not only the root
`SKILL.md`. The local `references/` directory is part of the runtime bundle.

## What works well

- Claude Code supports `SKILL.md`-based skills directly.
- Claude can auto-select a matching skill from its description.
- Claude also supports direct skill invocation by name.

## Important constraint

The exact `/agentkit-seo:linkedin` syntax is not the normal project-skill path
for Claude Code. Local project commands live in `.claude/commands/`, but
subdirectories do not create namespaced command names. The clean
`plugin-name:skill-name` namespace exists for plugin skills.

## Practical recommendation

Use the shared skills directly for the first version:

- `agentkit-seo-linkedin`
- `agentkit-seo-github`
- `agentkit-seo-cv-ats`
- `agentkit-seo-web-portfolio`
- `agentkit-seo-x-twitter`
- `agentkit-seo-agent-context-optimization`

If you later want the exact `/agentkit-seo:linkedin` interface in Claude Code,
package the provider adapter as a Claude plugin instead of relying only on local
project commands.
