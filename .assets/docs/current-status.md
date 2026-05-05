# AgentKit SEO Current Status

This file is the maintainer snapshot for the current state of AgentKit SEO. It records what is live, what is automated, and what still remains open without turning the public `README.md` into an internal log.

## As of 2026-05-05

### Public surfaces

AgentKit SEO currently has two live public surfaces:

- source repo: `https://github.com/agentkit-seo/agentkit-seo`
- website / human-readable hub: `https://agentkit-seo.github.io/`

The npm package is live at:

- `https://www.npmjs.com/package/agentkit-seo`

Current published version:

- `agentkit-seo@0.1.1`

GitHub releases currently published:

- `v0.1.0`
- `v0.1.1`

### Core architecture

- `.skills/agent-skill/` is the canonical source of truth for the runtime skill system.
- `.skills/providers/` contains provider-specific adapter notes and install shapes.
- `.skills/export/` contains the install/export CLI.
- the repo root and module folders remain the human-readable editorial layer
- the public site mirrors the human-readable layer for crawlability, indexing, and public navigation
- `.assets/docs/STYLEGUIDE.md` remains the schema reference for repo Markdown authoring

### Skill coverage

The shared portable skills currently shipped are:

- `agentkit-seo`
- `agentkit-seo-agent-context-optimization`
- `agentkit-seo-linkedin`
- `agentkit-seo-github`
- `agentkit-seo-cv-ats`
- `agentkit-seo-web-portfolio`
- `agentkit-seo-x-twitter`

Each runtime module is self-contained through:

- `SKILL.md`
- local `references/`
- provider-agnostic structure suitable for export and install

### Current install and distribution status

Working today:

- direct install for `codex`
- direct install for `claude-code`
- direct extension install for `gemini-cli`
- direct install for `opencode`
- shared bundle export
- provider-shaped export bundles
- published npm package usage through `npx agentkit-seo ...`
- direct GitHub install through `npx github:agentkit-seo/agentkit-seo ...`
- local maintainer execution through `npx . ...` and `npm exec --package ./. -- ...`

Provider-facing command shapes available today:

- Gemini CLI namespaced commands such as `/agentkit-seo:linkedin`
- OpenCode flat wrappers such as `/agentkit-seo-linkedin`

### Website status

The public website is live and acts as the human-readable knowledge hub.

Current role of the site:

- public project overview
- skill pages
- playbooks
- provider pages
- installation and usage docs
- changelog and contact routes

The site is statically built with Astro and deployed to GitHub Pages.

### Indexing and discoverability status

The current public indexing baseline is in place:

- canonical site URL configured in Astro
- `robots.txt` allows crawling and exposes the sitemap
- `sitemap.xml` is generated from public routes, skill routes, and playbooks
- `llms.txt` provides a public-safe AI-readable summary and route map
- the main repo has its website URL set to the live site

The OG preview asset for the site was corrected and regenerated to fix layout overflow and inconsistent preview styling.

### Automation status

Two main GitHub Actions pipelines now exist:

#### 1. Site deployment pipeline

Repo:

- `agentkit-seo/agentkit-seo.github.io`

Workflow:

- `.github/workflows/deploy-pages.yml`

Current behavior:

- triggers on pushes to `main`
- installs dependencies
- runs the Astro build
- uploads the `dist` artifact
- deploys to GitHub Pages

#### 2. npm publish pipeline

Repo:

- `agentkit-seo/agentkit-seo`

Workflow:

- `.github/workflows/npm-publish.yml`

Current behavior:

- triggers on tags matching `v*`
- runs `npm pack --dry-run`
- publishes to npm with provenance
- creates the matching GitHub release on success

Required secret:

- `NPM_TOKEN`

Important note:

- the token must work for non-interactive CI publishing; earlier failures were caused by npm `EOTP` until the token setup was corrected

### Repo and docs work already completed

Completed repository work includes:

- npm badge/link added to the main `README.md`
- install docs aligned with the published package
- canonical `npx agentkit-seo install --provider codex` flow documented
- direct GitHub invocation documented
- maintainer local install flow documented
- `SECURITY.md` added
- `.github/CODEOWNERS` added
- GitHub release flow created and verified
- GitHub organization profile README updated with clickable maintainer badges

### Current process boundaries

This project is still prioritizing:

- shared skill quality
- provider install reliability
- package clarity
- public documentation clarity
- website discoverability

This project is not currently prioritizing:

- marketplace / registry distribution
- benchmark or eval suites
- polished showcase/demo assets
- installed-version update detection inside Codex itself

### Remaining gaps

Important gaps still open:

- marketplace / registry distribution is not shipped
- the main repo does not yet have a separately configured custom GitHub social preview
- installed skills do not yet expose a local-vs-latest version check
- demo assets and before/after public examples are still missing
