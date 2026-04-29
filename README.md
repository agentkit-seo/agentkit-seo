<p align="center">
  <img src=".assets/image/banner.png" alt="AgentKit SEO Banner" width="80%" />
</p>

<p align="center">
  <em>Stop giving career agents the same context again and again. Give them a source of truth, platform rules, and a repeatable workflow.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Agent--Ready-000000?style=for-the-badge&logo=openai&logoColor=white" alt="Agent-Ready" />
  <img src="https://img.shields.io/badge/Markdown--First-4285F4?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown-First" />
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/CV_&_ATS-000000?style=for-the-badge&logo=googledocs&logoColor=white" alt="CV & ATS" />
  <img src="https://img.shields.io/badge/Web_Portfolio-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  <img src="https://img.shields.io/badge/X_(Twitter)-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" />
</p>

<p align="center">
  <a href="#start-here">Start Here</a> •
  <a href="#what-it-is">What It Is</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#modules">Modules</a> •
  <a href="#agent-context-file">Agent Context File</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#what-you-get">What You Get</a> •
  <a href="#install">Install</a> •
  <a href="#support">Support</a>
</p>

---

## Start Here

Most AI agents can rewrite a CV, LinkedIn bio, or GitHub README. The problem is that they usually rewrite from whatever context happens to be in the chat.

AgentKit SEO changes the starting point. It gives the agent a reusable personal context file, platform-specific rules, and installable skills for CVs, LinkedIn, GitHub, portfolios, and X.

The fastest useful path is:

1. Create a private agent-context-file with the `agentkit-seo-agent-context-optimization` skill.
2. Pick one platform module, usually `cv-ats`, `github`, or `linkedin`.
3. Ask the agent for an audit, rewrite, or prioritized action plan using the context file as the source of truth.

If you are only browsing, start with the module that matches the thing you want to improve:

| Goal | Start here |
| --- | --- |
| Build the reusable personal context layer | [agent-context-optimization](./agent-context-optimization/README.md) |
| Improve a GitHub profile or repository | [github](./github/README.md) |
| Rewrite a LinkedIn profile | [linkedin](./linkedin/README.md) |
| Tailor a CV for ATS parsing | [cv-ats](./cv-ats/README.md) |
| Fix portfolio SEO and indexability | [web-portfolio](./web-portfolio/README.md) |
| Improve X profile and posting strategy | [x-twitter](./x-twitter/README.md) |

Small example of the difference:

```text
Weak agent output:
"I am a passionate developer with experience in many technologies."

AgentKit SEO-style output:
"Security-focused software engineer building verified, search-ready career systems
across GitHub, CVs, LinkedIn, and portfolio sites."
```

## What It Is

AgentKit SEO is a modular skill pack for AI coding agents that work on career artifacts and professional discoverability.

Most agents rewrite career material generically because they lack durable personal context and platform-specific rules. AgentKit SEO gives the agent:

- one shared skill source in `.skills/agent-skill/`
- one focused module per system
- one install/export CLI for provider-specific layouts
- one human-readable repo hub for research and maintenance

The goal is simple: make agent output for profiles, resumes, portfolios, and personal-branding workflows more structured, more evidence-based, and less generic.

## Quick Start

First choose the invocation style for the agent provider you are using. The stable cross-provider contract is the shared skill name; slash-command wrappers exist only where the provider supports them.

| Provider | Preferred invocation |
| --- | --- |
| Codex | Select or mention the installed skill directly, for example `$agentkit-seo-agent-context-optimization` or `$agentkit-seo-github` |
| Claude Code | Use the installed skill by name; Claude may auto-select from the skill description, but explicit skill naming is safer |
| Gemini CLI | Use namespaced commands such as `/agentkit-seo:context`, `/agentkit-seo:github`, or `/agentkit-seo:linkedin` |
| OpenCode | Use native skill loading or flat commands such as `/agentkit-seo-context`, `/agentkit-seo-github`, or `/agentkit-seo-linkedin` |

If you do not have an agent-context-file yet, start with the context optimization skill:

```text
Use agentkit-seo-agent-context-optimization to create my agent-context-file.
I can provide my CV, LinkedIn sections, GitHub URL, portfolio URL, project notes,
screenshots, or any other career material you need.
Before writing a file, ask me where to store it: in this workspace, at a path I choose,
or at a portable default such as ~/.agentkit-seo/<name-surname>-seo-context.md.
If you cannot write files, return a compact outline first and ask whether I want the full
Markdown draft split into sections.
```

Once the context file exists, call the relevant platform skill directly:

```text
Use agentkit-seo-github to audit my GitHub profile for hiring visibility.
Use my personal context file at the path I provide.
```

The agent can return a focused action plan covering:

- weak project positioning and missing proof points
- missing GitHub repository topics, metadata, or README structure
- portfolio title, description, canonical, schema.org, and indexability gaps
- CV/ATS keyword alignment risks
- LinkedIn headline, About, Experience, Featured, and Skills improvements
- next actions ranked by impact and evidence

## Modules

| Module | Use it for |
| --- | --- |
| `agent-context-optimization` | Build the structured personal context file the other modules rely on. |
| `linkedin` | Headline, About, Experience, Skills, Featured, activity, and profile audits. |
| `github` | Profile metadata, pinned repositories, README positioning, topics, and repo hygiene. |
| `cv-ats` | ATS-safe resume structure, keyword alignment, bullet writing, and CV audits. |
| `web-portfolio` | Portfolio architecture, metadata, structured data, indexability, and AEO signals. |
| `x-twitter` | Bio, pinned post, threads, posting strategy, and account audits. |

Browse the editorial hub directly from the repo root:

- [agent-context-optimization](./agent-context-optimization/README.md)
- [linkedin](./linkedin/README.md)
- [github](./github/README.md)
- [cv-ats](./cv-ats/README.md)
- [web-portfolio](./web-portfolio/README.md)
- [x-twitter](./x-twitter/README.md)

## Agent Context File

The central concept behind AgentKit SEO is the **agent-context-file**: a private, structured Markdown file that acts as the user's professional source of truth.

Instead of pasting a CV, LinkedIn export, GitHub bio, project list, and job target into every new chat, the user maintains one reusable file containing:

- verified identity, positioning, and target roles
- education, experience, projects, publications, certifications, and languages
- proof points, metrics, links, constraints, and preferred tone
- reusable facts that agents can cite when rewriting public material

This file does not belong in this repository. It lives in the user's own workspace and can be reused by any agent that can read local files. A good portable convention is `~/.agentkit-seo/<name-surname>-seo-context.md`, but the user can also keep a draft in the current project, choose another private directory, or ask the agent to return the file content in-chat when file writing is not available. The repository provides the schema, template, maintenance workflow, and platform-specific skills that know how to use it.

The practical workflow is:

1. Build or update the agent-context-file using [agent-context-optimization](./agent-context-optimization/README.md).
2. Load the relevant platform skill, such as LinkedIn, GitHub, CV/ATS, portfolio, or X.
3. Ask the agent to audit or rewrite a specific asset using the context file as the factual source of truth.
4. Keep public outputs grounded in verified facts instead of generic personal-branding language.

This is the main architectural bet of the project: better agent outputs come less from longer prompts and more from a durable, well-structured personal context layer.

## How It Works

AgentKit SEO is built around a two-layer workflow:

```text
Raw user material
  CVs, profile URLs, LinkedIn exports, screenshots, portfolio code, project notes
        |
        v
Agent context file
  one private, structured source of truth for verified career facts
        |
        v
Platform skill
  LinkedIn, GitHub, CV/ATS, web portfolio, X, or cross-platform audit rules
        |
        v
Grounded output
  audit, rewrite, prioritized action plan, patch proposal, or maintenance checklist
```

The human-readable folders explain the reasoning. The `.skills/agent-skill/` folders are the runtime bundles that agents actually install. The export CLI turns the same shared source into provider-specific layouts, so the methodology can travel across Claude Code, Codex, Gemini CLI, OpenCode, and generic agents.

This is not a prompt collection. It is closer to an operating manual for agents working on professional identity: gather inputs, verify facts, route to the right platform rules, produce an evidence-linked answer, and avoid inventing claims that are not present in the user's material.

The deeper workflow is the personal agent context file: a structured career source of truth that lives outside this repository and can be reused across agents, profiles, CVs, portfolios, and job applications.

The files inside module-level `examples/` folders are personal working examples, not normative fixtures. They reflect material used during real application workflows, including interviews and applications with companies such as Anthropic, Apple, and Bending Spoons, and the personal context example supported cover-letter and application drafting. Treat them as practical reference artifacts rather than strict implementations of the current best-practice architecture; the canonical rules live in the module docs, templates, and runtime skill references.

## What You Get

| Capability | What the agent receives | Typical output |
| --- | --- | --- |
| Personal context architecture | Raw career facts, existing CVs, profile dumps, project notes, or screenshots | A structured `agent-context-file` that becomes the reusable source of truth |
| LinkedIn optimization | Public profile URL when available, copied section text, exported data, or screenshots | Section-by-section audit, headline/About rewrites, Featured strategy, and activity suggestions |
| GitHub optimization | Public GitHub URL, repository URLs, profile README, pinned repositories, and repo metadata | Profile and repository discoverability audit with README, topic, naming, and proof-point fixes |
| CV/ATS optimization | Existing CV text, job description, target role, and context file | ATS-safe rewrite plan, keyword alignment, bullet improvements, and formatting risks |
| Web portfolio optimization | Portfolio URL or local source code, metadata, pages, and case studies | SEO/AEO audit, structured-data recommendations, indexability checks, and content improvements |
| X optimization | Public account URL, bio, pinned post, recent posts, or copied analytics | Bio, pinned-post, posting strategy, and engagement loop recommendations |

Every platform skill should first determine which inputs are available, ask for missing private material when it cannot be fetched publicly, and recommend creating or updating the agent-context-file before making major rewrites.

---

## Who It's For

AgentKit SEO is designed for:

- developers preparing for job search or promotion cycles
- students turning projects into credible portfolio proof
- founders and freelancers improving public trust signals
- agents that need structured personal context before editing public profiles
- maintainers building portable skills for more than one coding agent

Authoring and runtime conventions are defined in [.assets/docs/STYLEGUIDE.md](./.assets/docs/STYLEGUIDE.md) and [.skills/architecture.md](./.skills/architecture.md).

---

## Install

Treat `.skills/agent-skill/` as the canonical source tree. Provider-specific material lives in `.skills/providers/`.

After the package is published, install directly into the target agent's global skills folder:

```bash
npx agentkit-seo install --provider codex
```

For Codex, this copies the shipped skill folders into `CODEX_HOME/skills` when `CODEX_HOME` is set, otherwise into `~/.codex/skills`.

From a local checkout, use:

```bash
node .skills/export/scripts/agentkit-seo.mjs install \
  --provider codex
```

Supported install targets today:

| Provider | Default global install location |
| --- | --- |
| Shared bundle | Portable `SKILL.md` folders for manual reuse or packaging |
| Claude Code | `~/.claude/skills/` |
| Codex | `CODEX_HOME/skills` or `~/.codex/skills/` |
| Gemini CLI | `~/.gemini/extensions/agentkit-seo/` with namespaced commands |
| OpenCode | `~/.config/opencode/skills/` plus command wrappers in `~/.config/opencode/commands/` |

If you want to install into a project-local folder instead:

```bash
npm exec --package ./. -- agentkit-seo install \
  --provider codex \
  --project-root .
```

This writes the same skill folders into `.codex/skills/` inside the selected project.

If you want to inspect a generated bundle before installing it:

```bash
node .skills/export/scripts/agentkit-seo.mjs export \
  --provider claude-code \
  --output /tmp/agentkit-seo-bundles
```

## Compatibility

| Agent | Status | Current path |
| --- | --- | --- |
| Claude Code | Ready | Global or project-local skill install |
| Codex | Ready | Global or project-local skill install |
| Gemini CLI | Ready | Extension install with namespaced commands such as `/agentkit-seo:linkedin` |
| OpenCode | Ready | Global or project-local skill install plus flat commands such as `/agentkit-seo-linkedin` |
| Generic agents | Partial | Read the repo or reuse the portable `SKILL.md` files manually |

## Release Readiness

Before public release, the project should have:

- verified install/export behavior for every supported provider
- a successful package dry run
- clear root skill routing into the focused modules
- grounded skill instructions that avoid unsupported ranking, ATS, or algorithm promises
- a README that lets a new user install and try the project quickly

The first launch-readiness focus is `cv-ats`, `github`, and `linkedin`. Other modules can remain beta while packaging, provider support, and the main launch narrative are finished.

## Support

| Target | Status |
| --- | --- |
| Shared skill source | Ready |
| Install/export CLI | Ready |
| Claude Code direct install | Ready |
| Codex direct install | Ready |
| OpenCode direct install | Ready |
| Gemini CLI extension install | Ready locally |
| Published `npx agentkit-seo ...` package | Not shipped yet |
| Marketplace / registry distribution | Not shipped yet |

Current internal implementation notes live in [.assets/docs/current-status.md](./.assets/docs/current-status.md). The current release process lives in [.assets/docs/release-plan.md](./.assets/docs/release-plan.md).

---

## Authors

Maintained by **Renato Mignone** and **Elia Innocenti**.

| Author | GitHub | LinkedIn | Portfolio |
| --- | --- | --- | --- |
| **Renato Mignone** | [GitHub](https://github.com/RenatoMignone) | [LinkedIn](https://www.linkedin.com/in/renato-mignone/) | [Portfolio](https://renatomignone.github.io/) |
| **Elia Innocenti** | [GitHub](https://github.com/eliainnocenti) | [LinkedIn](https://www.linkedin.com/in/eliainnocenti/) | [Portfolio](https://eliainnocenti.github.io/) |
