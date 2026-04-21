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

The repository is the human-readable reference layer. It is dense, well-hyperlinked, and written in clean Markdown following the conventions defined in `STYLEGUIDE.md` at the root of the repository. That file is the single source of truth for how every `.md` file in this repo is written. Contributors and agents alike must read it before authoring any content.

Content is organized by platform or output type. Each platform directory contains the rules, best practices, templates, and real examples relevant to that platform, as well as a `sources.md` file listing the credibility links, research, and algorithm documentation specific to it. Current platforms include:

- `/linkedin/` — Headline, Featured section, About, Experience entries
- `/github/` — Profile README, repository READMEs, pinned repo structuring
- `/portfolio/` — SEO meta tags, accessibility, performance metrics, copywriting
- `/cv-ats/` — Keyword optimization, formatting rules, examples and templates that have passed real ATS screening (Apple, Anthropic, Google)
- `/twitter-x/` — Bio, pinned post strategy, content positioning
- `/zenodo/` — Research output formatting, DOI-based credibility signals

More platform directories will be added as the project grows. The structure is designed to be extended without breaking existing conventions.

All working templates, real CV examples, sample READMEs, and before/after comparisons live inside their respective hub directories (e.g., `/cv-ats/templates/`, `/github/examples/`). The Skill references them by path, keeping the `.skills/` layer lean and the examples human-inspectable and version-controlled directly on GitHub.

**B. The Agent Skill System (The Engine)**

The `.skills/` directory is the machine-readable layer. It is structured as a collection of focused submodules, one per platform or output type, so that an agent loads only the context it needs for a given task.

```
.skills/
    SKILL.md
    linkedin/
    github/
    portfolio/
    cv-ats/
    twitter-x/
    zenodo/
    ...
```

`SKILL.md` is the master index. It defines the agent's persona, its boundaries, and the routing logic for loading submodules. Each subdirectory mirrors a platform directory in the Knowledge Hub and contains the prompts and rules the agent uses when working on that platform.

**Provider-agnostic and provider-specific:** The core `.skills/` structure uses no provider-specific syntax, making it portable across agents. At the same time, provider-specific versions of the Skill will be published separately, so that users can pull and install the Skill directly from within their agent of choice. For example, a Claude Code user will be able to install the Skill straight into the `.claude/` folder in their home directory without any manual configuration. The same applies for other supported providers as they are onboarded.

**Subcommand routing:** Because each platform lives in its own subfolder, the Skill exposes scoped commands. If the installed skill is named `personal-branding-seo`, the user can invoke:

- `/personal-branding-seo:linkedin` loads only the LinkedIn submodule
- `/personal-branding-seo:github` loads only the GitHub submodule
- `/personal-branding-seo:cv-ats` loads only the CV and ATS submodule
- `/personal-branding-seo` loads the full `SKILL.md` master index for orchestration tasks

This directly solves the context window problem: a user who only wants to optimize their LinkedIn profile does not load any GitHub or CV rules, and wastes no tokens on irrelevant context.

---

### **3. Development Strategy & Workflow**

Keeping the repository clean and well-structured from the start is critical. AI agents perform worse when fed chaotic file histories or unstructured data. The commit history itself is a signal of quality.

- **Phase 1: The "Dirty" Beta (Current state)**
  Work in a private or local repository. Sketch the folder structure, test the Markdown formatting with a local agent, and validate that the agent can successfully read the rules and rewrite a sample CV or README.

- **Phase 2: Architectural Lockdown (The Milestone Phase)**
  Finalize the folder hierarchy. Lock the YAML frontmatter schema defined in `STYLEGUIDE.md`. Agree on the exact structure of each `.skills/` submodule. Define the provider-specific installation flow for at least one provider.

- **Phase 3: The "Clean" Repository**
  Create the official GitHub Organization and the final public repository. Commit the finalized structure from scratch to ensure a pristine commit history.

- **Phase 4: Prompt Engineering & Context Tuning**
  Refine each submodule in `.skills/` so the agent does not hallucinate. Write strict routing rules in `SKILL.md`, for example: *"When optimizing a GitHub README, load `.skills/github/` before generating any output."* Test the subcommand routing end-to-end for each supported provider.

---

### **4. Mandatory to Define NOW**

Before writing a single line of final content, these foundational decisions must be agreed on:

1. **The Data Schema:** Every `.md` file in the Knowledge Hub follows the structure and YAML frontmatter defined in `STYLEGUIDE.md`. The open question is whether the `.skills/` submodule files use the same schema, or a more structured format optimized specifically for agent parsing (e.g., XML-style tags like `<rule>`, `<example>`, `<anti-pattern>` inside the Markdown). The two schemas can coexist, but the boundary between them must be explicitly defined before writing any content.

2. **The Scope of the MVP:** Do not launch all platforms at once. Pick two submodules (recommended: `cv-ats` and `github`) to prove the Skill architecture works end-to-end before building the rest.

3. **The Symlink vs. Setup Script decision:** Symlinks are the cleanest solution for developers, but Windows users encounter frequent issues with them. The options are: rely on symlinks only and document the Windows workaround, or provide a cross-platform setup script (`init.sh` / `init.bat`) that handles provider routing automatically for Claude, Gemini, and Codex.

4. **The Personal Context File schema:** Define what the personal agent context file looks like structurally. Since it lives outside this repository, the Skill needs a clear convention for how the agent locates and reads it when the user invokes a subcommand from an arbitrary working directory.

---

### **5. Important to Define LATER (Post-MVP)**

- **CLI Installer:** A single executable that installs the Skill globally and sets up provider routing without manual symlinks or configuration.
- **Marketplace Publishing:** Listing on official provider hubs (Claude's MCP marketplace, Gemini extensions, and equivalents).
- **Organization Website:** A public-facing landing page explaining the project to non-developer users. Non-developer users can already use the Knowledge Hub by reading the repo directly on GitHub, or by pasting the repository URL into any LLM chat interface that can fetch web content.
- **Multi-user / Team support:** Allowing a team (e.g., a startup founding team) to share a base Skill while each member maintains their own personal context file independently.

---

### **6. Open Doubts & Questions**

- *"If the agent modifies a user's portfolio code to improve SEO, how do we prevent it from accidentally breaking the site's styling or logic? The dry-run output format defined in `STYLEGUIDE.md` handles this for Markdown files, but does it extend cleanly to HTML, CSS, and JS modifications?"*

- *"How are we managing context window limits at the submodule level? If a single platform's submodule (e.g., `linkedin/`) grows large enough, does it need its own lite version for agents with smaller context windows?"*

- *"For the subcommand routing (e.g., `/personal-branding-seo:linkedin`), is the implementation purely a convention enforced by `SKILL.md`, or does it require native support from each provider's CLI? What is the fallback for providers that do not support named subcommands?"*

- *"How do we handle the provider-specific Skill publications in parallel with the provider-agnostic core? Is there a single source of truth that gets compiled into provider-specific formats, or does each provider version get maintained separately?"*

- *"When a user's personal context file is stored outside the repo and the Skill is invoked from a new working directory, how does the agent know where to find it? Do we define a standard path convention (e.g., `~/.personal-context.md`), or does the user pass the path explicitly at invocation time?"*