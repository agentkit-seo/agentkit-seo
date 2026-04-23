<h1 align="center">AgentKit SEO</h1>

> Optimize your digital presence for the algorithmic era. A dual-purpose Knowledge Hub for humans and an installable Skill for coding agents.

<p align="center">
  <img src="https://img.shields.io/badge/CV_&_ATS-000000?style=for-the-badge&logo=googledocs&logoColor=white" alt="CV & ATS" />
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/X_(Twitter)-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" />
  <img src="https://img.shields.io/badge/Web_Portfolio-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  <img src="https://img.shields.io/badge/Zenodo-024059?style=for-the-badge&logo=zenodo&logoColor=white" alt="Zenodo" />
  <img src="https://img.shields.io/badge/AI_Context-FF6C37?style=for-the-badge&logo=openai&logoColor=white" alt="AI Agents" />
</p>

## The Vision

AgentKit SEO is built for one ultimate goal: to let you plug this repository into your local AI agent (Claude, Gemini, Codex), point it at your GitHub profile, website, or CV, and simply say, *"Optimize my digital presence."*

It operates on two distinct layers:
1. **The Knowledge Hub (Human Layer):** A readable collection of dense, well-hyperlinked Markdown files containing best practices, templates, and strategies for every major professional platform.
2. **The Agent Skill (Machine Layer):** A machine-readable `.skills/` directory that installs directly into your coding agent, allowing it to autonomously execute the exact constraints defined in the Knowledge Hub.

## The Personal Agent Context File

The foundation of AgentKit SEO is the **Personal Agent Context File**. 

This is a single, heavily structured document containing all your relevant career information, skills, and projects in a format explicitly designed for LLM parsing. Instead of pasting fragmented resume snippets into every prompt, you feed this context file to your agent. The agent then references this verified ground truth to generate hyper-tailored CVs, optimized LinkedIn summaries, and compelling GitHub READMEs without hallucinating.

## Agent Submodules

The `.skills/` directory is modularized by platform to keep agent context windows lean. Subcommand routing ensures your agent only loads the context it needs for the task at hand.

- **`/agent-context-optimization/`**: Specifications and templates for building your foundational Personal Agent Context File.
- **`/cv-ats/`**: Deep technical constraints for Applicant Tracking Systems, keyword extraction, and parser-safe formatting.
- **`/linkedin/`**: Strategies for SEO-optimized headlines, algorithmic discoverability, and the "Trust Gap" defense.
- **`/github/`**: Profile README structuring, repository documentation, and pinned repo strategies to signal seniority.
- **`/portfolio/`**: Semantic HTML guidelines, SEO meta tags, accessibility standards, and copywriting.
- **`/twitter-x/`**: Bio optimization, pinned post strategies, and professional positioning.
- **`/zenodo/`**: Research output formatting and DOI-based credibility signals.

## Quick Start

Whether you are a human editing manually or an agent running a subcommand, the workflow is designed to be frictionless.

### For AI Agents (The Engine)

Install the Skill into your local agent environment. Then, invoke the specific submodule to optimize a file using subcommand routing.

```bash
# Load the CV submodule to tailor your resume
/personal-branding-seo:cv-ats "Rewrite my resume.md using the STAR+R framework based on my context file."

# Load the GitHub submodule to restructure your profile
/personal-branding-seo:github "Analyze my current GitHub profile and restructure it to highlight my backend engineering seniority."
```

### For Humans (The Hub)

Browse the directories directly on GitHub. Each folder contains the rules, best practices, templates, and real examples relevant to that platform. 

## Style Guide and Contributing

This repository strictly enforces the formatting and architectural constraints defined in `STYLEGUIDE.md`. All Markdown files must adhere to these rules to ensure both human readability and flawless machine parsability. Read the style guide before authoring or modifying any content.
