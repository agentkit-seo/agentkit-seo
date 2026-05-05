<p align="center">
  <img src=".assets/image/banner.png" alt="AgentKit SEO Banner" width="80%" />
</p>

<p align="center">
  <em>Give your career agents a source of truth, platform rules, and a repeatable workflow.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Agent--Ready-000000?style=for-the-badge&logo=openai&logoColor=white" alt="Agent-Ready" />
  <img src="https://img.shields.io/badge/Markdown--First-4285F4?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown-First" />
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/CV_&_ATS-000000?style=for-the-badge&logo=googledocs&logoColor=white" alt="CV & ATS" />
  <img src="https://img.shields.io/badge/Web_Portfolio-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  <img src="https://img.shields.io/badge/X_(Twitter)-000000?style=for-the-badge&logo=x" alt="X" />
</p>

<p align="center">
  <a href="#why-it-exists">Why</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#modules">Modules</a> •
  <a href="#install">Install</a> •
  <a href="https://agentkit-seo.github.io/">Website</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#status">Status</a>
</p>

---

## Why It Exists

Most AI agents can rewrite a CV, LinkedIn bio, GitHub README, or portfolio page.

The problem is that they usually rewrite from whatever context happens to be in the chat. That produces generic personal-branding copy, missing facts, repeated questions, and platform advice that does not travel from one agent to another.

AgentKit SEO fixes the starting point:

- a private **agent-context-file** for verified career facts
- focused skills for **LinkedIn profile optimization**, **GitHub SEO**, **CV/ATS resume optimization**, **portfolio SEO**, and **X/Twitter profile optimization**
- one export/install CLI for Claude Code, Codex, Gemini CLI, OpenCode, and portable `SKILL.md` usage

```text
Weak agent output:
"I am a passionate developer with experience in many technologies."

AgentKit SEO-style output:
"Security-focused software engineer building verified, search-ready career systems
across GitHub, CVs, LinkedIn, and portfolio sites."
```

## Quick Start

Start with the context file, then send one platform through the right skill.

```text
Use agentkit-seo-agent-context-optimization to create my agent-context-file.
I can provide my CV, LinkedIn sections, GitHub URL, portfolio URL, project notes,
screenshots, or any other career material you need.
```

Then use a platform skill:

```text
Use agentkit-seo-github to audit my GitHub profile for hiring visibility.
Use my personal context file at the path I provide.
```

Typical outputs:

- prioritized profile or portfolio audit
- evidence-backed rewrite suggestions
- ATS-safe CV structure and bullet improvements
- GitHub README, topic, pin, and proof-point fixes
- LinkedIn headline, About, Experience, Featured, and Skills recommendations
- next actions ranked by impact and missing evidence

## Modules

| Goal | Start here |
| --- | --- |
| Build the reusable personal context layer | [agent-context-optimization](./agent-context-optimization/README.md) |
| Improve GitHub profile and repository SEO | [github](./github/README.md) |
| Rewrite a LinkedIn profile for search, recruiters, and AI-readable proof | [linkedin](./linkedin/README.md) |
| Tailor a CV or resume for ATS parsing | [cv-ats](./cv-ats/README.md) |
| Fix portfolio SEO and indexability | [web-portfolio](./web-portfolio/README.md) |
| Improve X/Twitter profile and posting strategy | [x-twitter](./x-twitter/README.md) |

## Install

Install from npm:

```bash
npx agentkit-seo install --provider codex
```

From a local checkout for development:

```bash
node .skills/export/scripts/agentkit-seo.mjs install --provider codex
```

Supported install targets:

| Provider | Installs to | Activation model |
| --- | --- | --- |
| Shared bundle | Portable `SKILL.md` folders | Manual reuse or packaging |
| Claude Code | `~/.claude/skills/` | Skill selection depends on Claude Code's skill loading; explicit skill naming is safest |
| Codex | `CODEX_HOME/skills` or `~/.codex/skills/` | Use installed skills by name when available; behavior depends on Codex skill support and workspace setup |
| Gemini CLI | `~/.gemini/extensions/agentkit-seo/` | Namespaced commands such as `/agentkit-seo:linkedin` |
| OpenCode | `~/.config/opencode/skills/` plus command wrappers | Native skill loading plus flat commands such as `/agentkit-seo-linkedin` |

Project-local install:

```bash
npm exec --package ./. -- agentkit-seo install \
  --provider codex \
  --project-root .
```

## How It Works

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

The **agent-context-file** is the core concept. It is a private Markdown file that stores verified identity, target roles, education, experience, projects, metrics, links, constraints, and preferred tone.

It should not be committed to this repository. A portable convention is:

```text
~/.agentkit-seo/<name-surname>-seo-context.md
```

The human-readable folders explain the methodology. The runtime skill source lives in `.skills/agent-skill/`. The export CLI turns that shared source into provider-specific layouts.

This is not a prompt collection. It is an operating manual for agents working on professional identity: gather inputs, verify facts, route to the right platform rules, produce grounded output, and avoid inventing unsupported claims.

## Invocation

Provider behavior is not identical. Some agents can select installed skills from their metadata, some expose slash commands, and some require you to mention the skill or add provider-specific rules. The shared skill names are the stable contract, but the way you invoke them depends on the provider.

**Codex**

Mention the installed skill when the environment supports it:

```text
$agentkit-seo-agent-context-optimization
$agentkit-seo-github
```

Exact activation depends on the Codex environment and installed skill support.

**Claude Code**

Ask for the installed skill by name. Claude may auto-select from skill metadata, but explicit naming is safer:

```text
Use the agentkit-seo-linkedin skill to audit my LinkedIn profile.
```

**Gemini CLI**

Use the namespaced commands shipped with the Gemini extension bundle:

```text
/agentkit-seo:context
/agentkit-seo:github
/agentkit-seo:linkedin
```

**OpenCode**

Use native skill loading or the flat command wrappers:

```text
/agentkit-seo-context
/agentkit-seo-github
/agentkit-seo-linkedin
```

**Other agents**

Install or copy the portable `SKILL.md` folders, then follow that agent's rule or skill system. If the agent cannot load skills automatically, paste or reference the relevant skill instructions manually.

## What's Inside

| Capability | Typical output |
| --- | --- |
| Personal context architecture | Structured `agent-context-file` that becomes the reusable source of truth |
| LinkedIn optimization | Section audit, headline/About rewrites, Featured strategy, and activity suggestions |
| GitHub optimization | Profile and repository discoverability audit with README, topic, naming, and proof-point fixes |
| CV/ATS optimization | ATS-safe rewrite plan, keyword alignment, bullet improvements, and formatting risks |
| Web portfolio optimization | SEO/AEO audit, structured-data recommendations, indexability checks, and content improvements |
| X optimization | Bio, pinned-post, posting strategy, and engagement loop recommendations |

## Status

| Target | Status |
| --- | --- |
| Shared skill source | Ready |
| Install/export CLI | Ready |
| Claude Code direct install | Ready |
| Codex direct install | Ready |
| OpenCode direct install | Ready |
| Gemini CLI extension install | Ready locally |
| Published `npx agentkit-seo ...` package | Shipped |
| Marketplace / registry distribution | Not shipped yet |

First launch focus: `cv-ats`, `github`, and `linkedin`. Other modules can remain beta while packaging, provider support, and the main launch narrative are finished.

Current project notes live in [.assets/docs/current-status.md](./.assets/docs/current-status.md). The release process lives in [.assets/docs/release-plan.md](./.assets/docs/release-plan.md).

Authoring and runtime conventions are defined in [.assets/docs/STYLEGUIDE.md](./.assets/docs/STYLEGUIDE.md) and [.skills/architecture.md](./.skills/architecture.md).

## Who It's For

- developers preparing for job search or promotion cycles
- students turning projects into credible portfolio proof
- founders and freelancers improving public trust signals
- agents that need structured personal context before editing public profiles
- maintainers building portable skills for more than one coding agent

## Authors

Maintained by **Renato Mignone** and **Elia Innocenti**.

| Author | GitHub | LinkedIn | Portfolio |
| --- | --- | --- | --- |
| **Renato Mignone** | [GitHub](https://github.com/RenatoMignone) | [LinkedIn](https://www.linkedin.com/in/renato-mignone/) | [Portfolio](https://renatomignone.github.io/) |
| **Elia Innocenti** | [GitHub](https://github.com/eliainnocenti) | [LinkedIn](https://www.linkedin.com/in/eliainnocenti/) | [Portfolio](https://eliainnocenti.github.io/) |
