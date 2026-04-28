<p align="center">
  <img src=".assets/image/banner.png" alt="AgentKit SEO Banner" width="80%" />
</p>

<p align="center">
  <em>Agent skills that help AI tools audit, rewrite, and maintain your professional presence across CVs, LinkedIn, GitHub, portfolios, and X.</em>
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
  <a href="#what-it-is">What It Is</a> •
  <a href="#example">Example</a> •
  <a href="#who-its-for">Who It's For</a> •
  <a href="#modules">Modules</a> •
  <a href="#install">Install</a> •
  <a href="#quality-gate">Quality Gate</a> •
  <a href="#support">Support</a> •
  <a href="#authors">Authors</a>
</p>

---

## What It Is

AgentKit SEO is a modular skill pack for AI coding agents that work on career
artifacts and professional discoverability.

Most agents rewrite career material generically because they lack durable
personal context and platform-specific rules. AgentKit SEO gives the agent:

- one shared skill source in `.skills/agent-skill/`
- one focused module per system
- one install/export CLI for provider-specific layouts
- one human-readable repo hub for research and maintenance

The goal is simple: make agent output for profiles, resumes, portfolios, and
personal-branding workflows more structured, more evidence-based, and less
generic.

## Example

Ask your agent:

```text
Use AgentKit SEO to audit my GitHub profile and portfolio for hiring visibility.
Use my personal context file at ~/.agentkit-seo/context.md.
```

The agent can return a focused action plan covering:

- weak project positioning and missing proof points
- missing GitHub repository topics, metadata, or README structure
- portfolio title, description, canonical, schema.org, and indexability gaps
- CV/ATS keyword alignment risks
- LinkedIn headline, About, Experience, Featured, and Skills improvements
- next actions ranked by impact and evidence

The deeper workflow is the personal agent context file: a structured career
source of truth that lives outside this repository and can be reused across
agents, profiles, CVs, portfolios, and job applications.

## Who It's For

AgentKit SEO is designed for:

- developers preparing for job search or promotion cycles
- students turning projects into credible portfolio proof
- founders and freelancers improving public trust signals
- agents that need structured personal context before editing public profiles
- maintainers building portable skills for more than one coding agent

## Modules

| Module | Focus |
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

Authoring and runtime conventions are defined in
[.assets/docs/STYLEGUIDE.md](./.assets/docs/STYLEGUIDE.md) and
[.skills/architecture.md](./.skills/architecture.md).

## Install

Treat `.skills/agent-skill/` as the canonical source tree. Provider-specific
material lives in `.skills/providers/`.

Install directly into the target agent folder:

```bash
node .skills/export/scripts/agentkit-seo.mjs install \
  --provider claude-code \
  --project-root .
```

Supported install targets today:

| Provider | Install location |
| --- | --- |
| Claude Code | `.claude/skills/` |
| Codex | `.codex/skills/` |
| OpenCode | `.opencode/skills/` |

If you want the CLI entrypoint from a local checkout:

```bash
npm exec --package ./. -- agentkit-seo install \
  --provider codex \
  --project-root .
```

If you want to inspect a generated bundle before installing it:

```bash
node .skills/export/scripts/agentkit-seo.mjs export \
  --provider claude-code \
  --output /tmp/agentkit-seo-bundles
```

## Compatibility

| Agent | Status | Current path |
| --- | --- | --- |
| Claude Code | Ready | Direct skill install |
| Codex | Ready | Direct skill install |
| OpenCode | Ready | Direct skill install |
| Gemini CLI | Planned | Provider notes exist; wrapper export is not shipped yet |
| Generic agents | Partial | Read the repo or reuse the portable `SKILL.md` files manually |

## Quality Gate

Before public release, each launch-ready module should include:

- one reproducible scenario
- expected output shape
- hallucination and overclaim guardrails
- verification checklist

The first launch-readiness focus is `cv-ats`, `github`, and `linkedin`. Other
modules can remain beta until their scenarios and demos are executable.

## Support

| Target | Status |
| --- | --- |
| Shared skill source | Ready |
| Install/export CLI | Ready |
| Claude Code direct install | Ready |
| Codex direct install | Ready |
| OpenCode direct install | Ready |
| Gemini CLI extension install | Not shipped yet |
| Published `npx agentkit-seo ...` package | Not shipped yet |
| Marketplace / registry distribution | Not shipped yet |

Current internal implementation notes live in
[.assets/docs/current-status.md](./.assets/docs/current-status.md). Public-release
scenario checks are drafted in
[.assets/docs/evaluation-plan.md](./.assets/docs/evaluation-plan.md).

## Authors

Maintained by **Renato Mignone** and **Elia Innocenti**.

| Author | GitHub | LinkedIn | Portfolio |
| --- | --- | --- | --- |
| **Renato Mignone** | [GitHub](https://github.com/RenatoMignone) | [LinkedIn](https://www.linkedin.com/in/renato-mignone/) | [Portfolio](https://renatomignone.github.io/) |
| **Elia Innocenti** | [GitHub](https://github.com/eliainnocenti) | [LinkedIn](https://www.linkedin.com/in/eliainnocenti/) | [Portfolio](https://eliainnocenti.github.io/) |
