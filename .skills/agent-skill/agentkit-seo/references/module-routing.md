# Module routing

Use this routing table when deciding which AgentKit SEO skill to load.

| User intent | Shared skill | Internal skill references to start with |
| --- | --- | --- |
| Personal context file, source-of-truth document, fact consolidation | `agentkit-seo-agent-context-optimization` | `references/spec-and-structure.md`, `references/operating-workflow.md` |
| CV rewrite, ATS-safe formatting, keyword strategy | `agentkit-seo-cv-ats` | `references/structure-and-formatting.md`, `references/keywords-and-bullets.md` |
| GitHub profile, repos, README, discoverability, Copilot-facing repo context | `agentkit-seo-github` | `references/profile-and-repo-structure.md`, `references/copilot-and-agent-readiness.md` |
| LinkedIn headline, about, featured, experience, skills, profile discoverability | `agentkit-seo-linkedin` | `references/positioning-and-structure.md`, `references/discoverability-and-activity.md` |
| Personal site, metadata, snippets, structured data, JavaScript SEO, llms.txt | `agentkit-seo-web-portfolio` | `references/indexing-and-architecture.md`, `references/metadata-structured-data-and-js.md` |
| X/Twitter bio, pinned post, posting strategy, discoverability | `agentkit-seo-x-twitter` | `references/profile-and-posts.md`, `references/engagement-and-ranking.md` |

## Cross-platform sequence

When a request spans multiple surfaces, use this order unless the user asks
otherwise:

1. `agentkit-seo-agent-context-optimization`
2. Target output surface, such as `agentkit-seo-linkedin`
3. Supporting surfaces that must align with the same positioning
