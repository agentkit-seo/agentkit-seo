# Provider matrix

This matrix captures the current adapter assumptions for April 28, 2026.

| Provider | Shared skill-bundle fit | Custom command fit | Best user-facing module trigger |
| --- | --- | --- | --- |
| Claude Code | Strong | Strong, but local commands do not give clean colon namespacing from directories | Direct skill use or later plugin namespace |
| Codex | Strong | Do not assume slash wrappers are the primary interface | Explicit skill selection such as `$agentkit-seo-linkedin` |
| Gemini CLI | Strong | Strong, with documented namespaced commands from nested paths | `/agentkit-seo:linkedin` |
| OpenCode | Strong | Strong, but safest documented command surface is flat by filename | Native skill loading or `/agentkit-seo-linkedin` |

## Policy

Do not force one command syntax across all providers. Keep the shared skill
names stable and let adapters expose the cleanest native interface each provider
actually supports.

## Packaging policy

The provider-facing artifact should be the self-contained shared skill bundle.
Provider adapters may add wrapper commands, installer metadata, or export
layout, but they should not become alternate knowledge bases.
