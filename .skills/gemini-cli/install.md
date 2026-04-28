# Gemini CLI adapter

## Preferred install targets

Use two layers:

- skills exported from `.skills/agent-skill/<skill-name>/`
- commands in `.gemini/commands/agentkit-seo/<module>.toml`

## Why Gemini CLI is a strong fit for namespaced commands

Gemini CLI documents namespaced custom commands derived from nested command file
paths. That makes `/agentkit-seo:linkedin` a good fit for Gemini CLI command
wrappers.

## Practical recommendation

1. Install the shared skill folders as real skills.
2. Add very small command wrappers that map:
   - `/agentkit-seo:linkedin` -> tell Gemini to use `agentkit-seo-linkedin`
   - `/agentkit-seo:github` -> tell Gemini to use `agentkit-seo-github`
   - `/agentkit-seo:cv-ats` -> tell Gemini to use `agentkit-seo-cv-ats`
3. Keep the wrapper prompt thin so the reusable logic stays in the shared skill.

## Distribution note

Gemini is the best first candidate for GitHub-URL installation because its
extension tooling already supports installing from a GitHub repository URL or a
local path. If a provider-packaged artifact is built first, start here.
