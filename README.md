<p align="center">
  <img src=".assets/image/banner.png" alt="AgentKit SEO Banner" width="70%" />
</p>

<p align="center">
  <em>The open-source Knowledge Hub and Agent Skill for Personal Branding, SEO, and ATS Optimization.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Agent--Ready-000000?style=for-the-badge&logo=openai&logoColor=white" alt="Agent-Ready" />
  <img src="https://img.shields.io/badge/Markdown--First-4285F4?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown-First" />
  <img src="https://img.shields.io/badge/CV_&_ATS-000000?style=for-the-badge&logo=googledocs&logoColor=white" alt="CV & ATS" />
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/X_(Twitter)-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" />
  <img src="https://img.shields.io/badge/Web_Portfolio-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  <img src="https://img.shields.io/badge/Zenodo-024059?style=for-the-badge&logo=zenodo&logoColor=white" alt="Zenodo" />
</p>

<p align="center">
  <a href="#the-problem-vs-the-solution">Problem/Solution</a> •
  <a href="#module-index">Modules</a> •
  <a href="#quick-start-for-agents">Agent Install</a> •
  <a href="#quick-start-for-humans">Human Guide</a> •
  <a href="#about-the-authors">Authors</a>
</p>

---

## The Problem vs. The Solution

When you ask an AI agent to write a cover letter or update your LinkedIn, it usually fails because it is fed unstructured, bloated data (like PDF resumes or HTML scrapes). It hallucinates facts, misses critical keywords, and generates generic fluff.

**AgentKit SEO solves this.** It is built on the principle of **Agentic Engine Optimization (AEO)**.

We provide a strict, Markdown-first architecture. You feed your agent a verified, token-efficient *Context File*, and install our agent skill. The agent parses our rules flawlessly (100% extraction) and generates perfectly tailored, SEO-optimized career artifacts without hallucinating.

## Module Index

AgentKit SEO is modularized by platform to keep agent context windows lean. Browse the directories below for platform-specific rules, or instruct your agent to load a specific module.

| Module | Description |
| :--- | :--- |
| [**`/agent-context-optimization/`**](./agent-context-optimization/README.md) | Specs for your foundational Personal Agent Context File. |
| [**`/cv-ats/`**](./cv-ats/README.md) | Formatting constraints for Applicant Tracking Systems. |
| [**`/linkedin/`**](./linkedin/README.md) | Strategies for the 360brew algorithm & vector search. |
| [**`/github/`**](./github/README.md) | Profile README structuring and pinned repo SEO. |
| [**`/web-portfolio/`**](./web-portfolio/README.md) | Semantic HTML, `llms.txt`, and AEO compliance. |
| [**`/x-twitter/`**](./x-twitter/README.md) | Bio optimization and professional positioning. |
| [**`/zenodo/`**](./zenodo/README.md) | Research output formatting and DOI signals. |

## Quick Start for Agents

Whether you use Claude Code, Gemini CLI, or Cursor, the workflow is designed to be frictionless. AgentKit SEO is built to be an installable extension for your favorite coding agent.

1. Create your **Personal Agent Context File** (see `/agent-context-optimization/`).
2. Install the skill into your agent environment (e.g., via `npm`, `npx`, or your agent's native extension manager).
3. Use the agent's internal command to invoke the specific platform constraints you need:

```bash
# Example command in an AI Agent CLI
/agentkit-seo:linkedin "Rewrite my LinkedIn About section to target Senior Backend roles using my context file."
```

### The "Always-On" Hook (GEMINI.md / CLAUDE.md)
To make AgentKit SEO a permanent part of your agent's workflow, add this snippet to your project's `GEMINI.md`, `CLAUDE.md`, or `.cursorrules` file:

```markdown
Before generating any career documents, CVs, or profile updates, you MUST load the formatting rules and constraints from the AgentKit SEO skill. Never output unstructured or generic career advice.
```

## Quick Start for Humans

You don't need an AI agent to use this repository. Browse the directories in the **Module Index** directly on GitHub. Each folder acts as a "Knowledge Hub" containing plain-English best practices, templates, and real examples relevant to that platform.

## Style Guide and Contributing

This repository strictly enforces the formatting and architectural constraints defined in `.assets/docs/STYLEGUIDE.md`. All Markdown files must adhere to these rules to ensure both human readability and flawless machine parsability. Read the style guide before authoring or modifying any content.

---

## About the Authors

This project is maintained by **Renato Mignone** and **Elia Innocenti**.

| Author | GitHub | LinkedIn | Portfolio |
|---|---|---|---|
| **Renato Mignone** | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/RenatoMignone) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/renato-mignone/) | [![Portfolio](https://img.shields.io/badge/Portfolio-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://renatomignone.github.io/) |
| **Elia Innocenti** | [![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/eliainnocenti) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eliainnocenti/) | [![Portfolio](https://img.shields.io/badge/Portfolio-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://eliainnocenti.github.io/) |