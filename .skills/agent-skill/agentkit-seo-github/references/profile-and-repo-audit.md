# GitHub profile and repository audit

## Use this reference for

- full GitHub profile reviews
- repository discoverability audits
- consistency checks across profile and projects
- maintenance recommendations over time

## Audit workflow

1. confirm the user's target role, stack, or public positioning
2. review native profile fields first
3. review pinned repositories and profile README
4. review showcase repositories for metadata, README quality, and trust signals
5. review searchability and language-stat integrity
6. separate blocking issues from optional improvements

## Profile checklist

Check the following:

- username consistency with other public surfaces when relevant
- bio clarity and keyword usefulness
- website field populated
- pinned repositories curated intentionally
- contribution visibility settings match the user's public goals
- profile README adds real context instead of filler

## Repository checklist

For each showcase repository, check:

- public visibility if public discovery is the goal
- default branch health
- descriptive repository name
- About text filled
- useful topic tags
- real README with quickstart and evaluation path
- social preview image for showcase repos when worthwhile
- trust files such as LICENSE, SECURITY.md, or CI signals when appropriate

## Search and stats checklist

- the repository is not archived if search visibility matters
- large generated or vendored files are not skewing language stats
- `.gitattributes` overrides are semantically correct
- forks are not being treated as strong portfolio anchors without considering GitHub's fork-search limits

## Agent and Copilot readiness checklist

- `.github/copilot-instructions.md` exists when repo-wide guidance is needed
- path-specific instruction files exist only where they add real value
- `AGENTS.md` files are concise and non-conflicting
- architecture, setup, and validation docs are easy to find

## Maintenance rules

- keep pinned repositories aligned with current positioning
- refresh README copy when the project scope or maturity changes
- rotate stale showcase repos out when stronger work exists
- avoid duplicating conflicting source-of-truth docs

## Output format for audits

When auditing GitHub presence, organize findings into:

1. factual or structural issues
2. discoverability improvements
3. trust and proof-of-work improvements
4. agent-readiness improvements
