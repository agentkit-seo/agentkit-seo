# Module routing

Use this routing table when deciding which AgentKit SEO skill to load.

| User intent | Shared skill | Internal skill references to start with |
| --- | --- | --- |
| Personal context file, source-of-truth document, fact consolidation | `agentkit-seo-agent-context-optimization` | `references/spec-and-structure.md`, `references/operating-workflow.md` |
| Detailed career graph, hierarchical records, graph validation, indexing, or selective deep retrieval | `agentkit-seo-vitaegraph` | `references/record-workflow.md`, `references/retrieval-and-handoff.md` |
| CV rewrite, ATS-safe formatting, keyword strategy | `agentkit-seo-cv-ats` | `references/structure-and-formatting.md`, `references/keywords-and-bullets.md` |
| GitHub profile, repos, README, discoverability, Copilot-facing repo context | `agentkit-seo-github` | `references/profile-and-repo-structure.md`, `references/copilot-and-agent-readiness.md` |
| LinkedIn headline, about, featured, experience, skills, profile discoverability | `agentkit-seo-linkedin` | `references/positioning-and-structure.md`, `references/discoverability-and-activity.md` |
| Personal site, metadata, snippets, structured data, JavaScript SEO, llms.txt | `agentkit-seo-web-portfolio` | `references/indexing-and-architecture.md`, `references/metadata-structured-data-and-js.md` |
| X/Twitter bio, pinned post, posting strategy, discoverability | `agentkit-seo-x-twitter` | `references/profile-and-posts.md`, `references/engagement-and-ranking.md` |

## Cross-platform sequence

When a request spans multiple surfaces, use this order unless the user asks otherwise:

1. Resolve the factual source: use an explicit existing personal career context file for compact repeated facts, or an explicit existing VitaeGraph for selective deep records.
2. Use `agentkit-seo-agent-context-optimization` first when facts are scattered, conflicting, or no usable source of truth exists.
3. Use the target output surface, such as `agentkit-seo-linkedin`.
4. Add supporting surfaces only when they must align with the same positioning.

Do not create or convert either private artifact merely because the other one exists. If both exist, use the compact context file for current positioning and repeated hard facts, then retrieve only the smallest relevant VitaeGraph subtree for deeper evidence.

## Ambiguity tie-breakers

Use these defaults when the user asks for broad improvement without naming a platform:

- Job search, applications, recruiter screens, or a specific job description: start with `agentkit-seo-cv-ats`.
- Recruiter discovery, profile search, or professional positioning: start with `agentkit-seo-linkedin`.
- Developer credibility, proof-of-work, repositories, README quality, or technical trust: start with `agentkit-seo-github`.
- Personal site, Google snippets, crawlability, structured data, or portfolio pages: start with `agentkit-seo-web-portfolio`.
- Audience building, posting, niche, pinned post, or engagement loop: start with `agentkit-seo-x-twitter`.
- Mixed facts, inconsistent claims, or more than one public surface: start with `agentkit-seo-agent-context-optimization`.
- Detailed projects, roles, degree subtrees, thesis work, record relationships, graph validation, or graph indexing: start with `agentkit-seo-vitaegraph`.

If two routes remain plausible, state the assumption and proceed with the route that can produce the smallest useful next action.
