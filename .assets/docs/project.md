# AgentKit SEO

### **1. Executive Summary & Vision**

**The Project:** A dual-purpose repository that serves as a centralized, human-readable Knowledge Hub for personal branding, SEO, and ATS optimization, and simultaneously acts as an installable "Skill" for coding AI agents (Claude, Gemini, Codex).

**The Two Scopes of This Repository:**
- **Online Knowledge Hub.** Users read the repository directly on GitHub, navigating the `.md` files in each platform folder to learn best practices, consult templates, and reference working examples. No local installation required.
- **Agent Skill.** Users install the Skill into their coding agent of choice and invoke it from any working directory to let the agent actively optimize their digital presence, using their own files as input.

**The Ultimate Goal:** To allow a user to plug this repository into their local AI agent, point it at their existing GitHub profile, website, LinkedIn export, or CV, and say: *"Optimize my digital presence based on the best practices in the Skill."*

**The Core Best Practice — The Personal Agent Context File:** Beyond platform-specific optimization, the deepest use of this repo is enabling users to build and maintain a **personal agent context file**: a single, structured document containing all the relevant information about a user's career, skills, projects, and positioning. This file becomes the user's portable professional identity, readable by any agent, and lives entirely outside of this repository in the user's own environment. The best workflow is to use this repo and its Skill to let the agent help build and refine that context file incrementally. The user feeds new material whenever it becomes available (PDF exports, raw text, LinkedIn data dumps, GitHub activity summaries) and the agent, using its own native tool capabilities, handles parsing and structuring into the context file automatically.

---

### **2. Core Components & Architecture**

The architecture serves two distinct users simultaneously: the Human and the AI Agent.

**A. The Knowledge Hub (Human & AI Context)**

The repository is the human-readable reference layer. It is dense, well-hyperlinked, and written in clean Markdown following the conventions defined in `.assets/docs/STYLEGUIDE.md`. That file is the single source of truth for editorial Knowledge Hub files, runtime skill files, provider adapter notes, examples, and templates. Contributors and agents alike must read it before authoring content.

Content is organized by platform or output type. Each platform directory contains the rules, best practices, templates, and real examples relevant to that platform, as well as a `sources.md` file listing the credibility links, research, and algorithm documentation specific to it. Current platforms include:

- `/linkedin/` — Headline, Featured section, About, Experience entries
- `/github/` — Profile README, repository READMEs, pinned repo structuring
- `/web-portfolio/` — SEO meta tags, accessibility, performance metrics, copywriting
- `/cv-ats/` — Keyword optimization, formatting rules, personal examples, and templates for ATS-safe CV workflows
- `/x-twitter/` — Bio, pinned post strategy, content positioning

More platform directories will be added as the project grows. The structure is designed to be extended without breaking existing conventions.

All working templates, personal examples, sample READMEs, and before/after comparisons live inside their respective hub directories (e.g., `/cv-ats/templates/`, `/github/examples/`). Files under `examples/` are practical reference artifacts, not canonical fixtures; the canonical rules live in the module docs, templates, and runtime skill references. The repo hub remains the human-editing and source-traceability layer. The portable runtime layer lives in `.skills/agent-skill/`, where each skill carries its own compressed local references.

**B. The Agent Skill System (The Engine)**

The `.skills/` directory is the machine-readable layer. It is structured as a collection of focused submodules, one per platform or output type, so that an agent loads only the context it needs for a given task.

```text
.skills/
    agent-skill/
        agentkit-seo/
        agentkit-seo-agent-context-optimization/
        agentkit-seo-cv-ats/
        agentkit-seo-github/
        agentkit-seo-linkedin/
        agentkit-seo-web-portfolio/
        agentkit-seo-x-twitter/
    providers/
        claude-code/
        codex/
        gemini-cli/
        opencode/
    export/
        export-config.json
        scripts/
```

The shared source of truth lives in `.skills/agent-skill/`. Each folder there is an actual portable skill bundle with its own `SKILL.md`, local `references/` directory, and optional provider metadata such as `agents/openai.yaml`. The root `agentkit-seo` skill acts as an orchestrator, while the platform-specific skills keep context scoped to a single surface whenever possible.

**Provider-agnostic and provider-specific:** The shared skills use a portable `SKILL.md` format and optional provider metadata such as `agents/openai.yaml`. The sibling provider folders are adapters only: they define install targets, wrapper commands, and provider-specific behavior without duplicating the core methodology.

**Scoped invocation:** The stable cross-provider contract is the shared skill name, such as `agentkit-seo-linkedin` or `agentkit-seo-github`. Some providers can expose ergonomic wrapper commands on top of those skills. For example, Gemini CLI exposes `/agentkit-seo:linkedin` through the generated extension's namespaced command files, OpenCode uses flat wrappers such as `/agentkit-seo-linkedin`, Codex is better treated as explicit skill selection, and Claude Code needs either direct skill invocation or a later plugin wrapper for exact namespacing.

This architecture still solves the context window problem: a user who only wants LinkedIn help loads the LinkedIn skill instead of the whole system.

---

### **3. Development Strategy & Workflow**

Keeping the repository clean and well-structured from the start is critical. AI agents perform worse when fed chaotic file histories or unstructured data. The commit history itself is a signal of quality.

- **Phase 1: The "Dirty" Beta** Work in a private or local repository. Sketch the folder structure, test the Markdown formatting with a local agent, and validate that the agent can successfully read the rules and rewrite a sample CV or README.

- **Phase 2: Architectural Lockdown (Current state)** Finalize the folder hierarchy. Lock the schema boundaries defined in `.assets/docs/STYLEGUIDE.md`. Keep `.skills/agent-skill/` as the only portable source of truth. Keep `.skills/providers/` as adapter notes. Keep `.skills/export/` as the install/export implementation. Direct installs now work for Claude Code, Codex, OpenCode, and Gemini CLI.

- **Phase 3: The "Clean" Repository** Create the official GitHub Organization and the final public repository. Commit the finalized structure from scratch to ensure a pristine commit history.

- **Phase 4: Prompt Engineering & Context Tuning** Refine each shared skill in `.skills/agent-skill/` so the agent does not hallucinate. Write strict routing rules in the root `agentkit-seo` skill, for example: *"When optimizing a GitHub README, load `agentkit-seo-github` before generating any output."* Test the adapter commands and direct skill invocation end-to-end for each supported provider.

- **Phase 5: Public Packaging & Distribution** Publish the `npx` package, tighten the public README, add provider-specific release artifacts, and prepare launch communication only after the shared source tree and direct installs are stable. GIFs, demos, showcase examples, or manual test scenarios can be added later if they help explain the project, but they are not a current process requirement.

---

### **4. Architectural Decisions Now Defined**

The foundational decisions below are now part of the project contract:

1. **The Data Schema:** Editorial Knowledge Hub files use hidden metadata comments plus the visible structure defined in `.assets/docs/STYLEGUIDE.md`, so GitHub and VS Code render the page cleanly while agents still have routing metadata. Runtime skill entrypoints use Agent Skills frontmatter with `name` and `description`. Runtime references and provider adapter notes use lean Markdown optimized for loading cost and operational clarity.

2. **The Scope of the MVP:** All seven shared skill bundles now exist, but launch polish should focus first on `cv-ats`, `github`, and `linkedin`. The remaining modules can ship as beta modules while the install flow, package distribution, and main README narrative are completed.

3. **The Install Strategy:** Copy/export install is the default. The CLI copies self-contained skill folders into provider-specific targets instead of relying on symlinks. Published-package installs default to the user's global agent skills folder, such as `CODEX_HOME/skills` or `~/.codex/skills` for Codex. Project-local installs remain available through `--project-root`. This avoids common Windows symlink failure modes and keeps installed bundles portable.

4. **The Personal Context File schema:** The schema is defined in `agent-context-optimization/context-file-spec.md` and mirrored in the context optimization runtime references. The discovery convention is explicit path first, then optional user-confirmed storage: in-chat draft, local workspace file, user-chosen path, or portable default such as `~/.agentkit-seo/<name-surname>-seo-context.md`.

---

### **5. Important to Define LATER (Post-MVP)**

- **Published CLI Installer:** Publish the existing CLI as an npm package so users can run `npx agentkit-seo ...` without cloning the repository.
- **Marketplace Publishing:** Listing on official provider hubs (Claude's MCP marketplace, Gemini extensions, and equivalents).
- **Organization Website:** A public-facing landing page explaining the project to non-developer users. Non-developer users can already use the Knowledge Hub by reading the repo directly on GitHub, or by pasting the repository URL into any LLM chat interface that can fetch web content.
- **Multi-user / Team support:** Allowing a team (e.g., a startup founding team) to share a base Skill while each member maintains their own personal context file independently.
- **Demos or Showcase Assets:** Add GIFs, before/after examples, or small manual examples only when they support public communication. They are useful later, but not a current blocker.

---

### **6. Open Doubts & Questions**

- *"Which minimum manual release checks are enough before publishing the first public `npx` package?"*

- *"How are we managing context window limits at the submodule level? If a single platform's submodule (e.g., `linkedin/`) grows large enough, does it need its own lite version for agents with smaller context windows?"*

- *"For the subcommand routing (e.g., `/agentkit-seo:linkedin`), how much is implemented natively by each provider's CLI versus by our adapter layer, and what is the fallback when a provider does not support namespaced slash commands?"*

- *"How do we handle the provider-specific Skill publications in parallel with the provider-agnostic core? Is there a single source of truth that gets compiled into provider-specific formats, or does each provider version get maintained separately?"*

- *"Should the Gemini CLI extension remain generated by `.skills/export/`, or should it later become a dedicated provider-facing release artifact once public demand justifies it?"*
