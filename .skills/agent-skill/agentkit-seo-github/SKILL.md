---
name: agentkit-seo-github
description: Optimize GitHub profile and repository discoverability, clarity, and trust signals using documented search, metadata, and repository-structure guidance. Use when the user asks about profile README content, pinned repos, repository README structure, topics, descriptions, social preview, code search visibility, or GitHub-facing portfolio positioning.
---

# AgentKit SEO GitHub

## Overview

Use this skill to improve GitHub discoverability, comprehension, and trust without claiming undocumented ranking guarantees.

## Reference selection

Load only the references needed for the task:

- Bio, pinned repos, repo naming, About text, README packaging: [references/profile-and-repo-structure.md](references/profile-and-repo-structure.md)
- Copy blocks for bios, READMEs, About text, topics, pins: [references/section-recipes.md](references/section-recipes.md)
- Code search, indexing limits, Linguist, language stats: [references/search-indexing-and-linguist.md](references/search-indexing-and-linguist.md)
- Full-profile or repository audit: [references/profile-and-repo-audit.md](references/profile-and-repo-audit.md)
- `AGENTS.md`, Copilot instructions, AI-readable repo structure: [references/copilot-and-agent-readiness.md](references/copilot-and-agent-readiness.md)

## Token discipline

- Do not load every repository README unless the user asks for a full profile audit.
- For profile work, inspect profile metadata, pinned repos, and only the highest-signal repositories first.
- For one repository, stay inside that repository unless cross-profile positioning is explicitly requested.

## Intake workflow

- If the user provides a GitHub profile or repository URL, fetch and inspect public profile, pinned repository, repository metadata, README, topics, default branch, and visible language signals when tools allow it.
- If the user provides only a username, treat it as enough to inspect public GitHub material when tools allow it.
- If the task depends on private repositories, contribution details, or account settings, ask the user for screenshots, copied settings, exports, or explicit local files instead of guessing.
- If the user has or needs an agent context file, load or recommend `agentkit-seo-agent-context-optimization` before rewriting profile-level positioning.
- For repository-specific work, prefer concrete file edits when the repository is available locally; otherwise return copy blocks and a change checklist.
- Do not request login or tokens unless the user explicitly asks for private repository work.

## Rules

- Distinguish documented GitHub behavior from inference.
- Optimize for search clarity, repository comprehension, and maintainer trust.
- Do not promise hidden ranking boosts from stars, forks, or activity patterns.
- Keep examples factual to the user's real projects.
- Keep recommendations scoped to the user's actual repositories and public goals.
- Keep profile metadata, pinned repositories, README copy, and repository structure aligned around the same public positioning.
- For rewrites, improve clarity, proof, and discoverability before inventing a more aggressive branding angle.

## Output expectation

Produce GitHub-specific edits or recommendations that improve profile clarity, repository packaging, or discoverability while staying within documented platform behavior.

## Response shape

Return:

1. public inputs inspected and any inaccessible inputs
2. priority issues by profile, pinned repos, and repositories
3. ready-to-apply copy or file changes
4. confidence notes where advice is inferred rather than documented
5. next actions, including context-file creation when profile facts are weak
