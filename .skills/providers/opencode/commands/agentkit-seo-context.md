---
description: Build or maintain a personal AgentKit SEO context file
---

Use the `agentkit-seo-agent-context-optimization` skill before producing output.

Treat `$ARGUMENTS` as the user's context source, target file, or instruction. Prefer an explicit path supplied by the user. If no path is supplied, check for `~/.agentkit-seo/context.md`. Do not scan the whole filesystem. If neither an explicit path nor the default context file exists, ask for the intended source or target path.
