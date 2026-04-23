---
title: "GitHub profile architecture"
platform: "github"
objective: "Rules for foundational profile settings, including the bio, pinned repositories, and the contribution graph."
status: "draft"
last_updated: "2026-04-23"
tags: ["github", "profile", "bio", "contributions"]
agent_priority: "medium"
---

# GitHub profile architecture

> This file defines the foundational structural settings required for a fully optimized GitHub profile, covering the bio limit, strategic repository pinning, and contribution graph management.

---

## 1. Overview

Before writing a custom profile README, the native architecture of the GitHub profile must be optimized. These are the built-in fields and visual elements that GitHub provides by default. Recruiters and automated scrapers use these fields as the first pass to determine a developer's seniority, tech stack, and activity level.

**Rule:** Establish the 'Username Anchor'.
Maintain consistent usernames across GitHub, LinkedIn, Twitter/X, and your personal portfolio. This creates a unified "Developer Brand" that simplifies cross-platform indexing for AI agents and recruiters.

**Rule:** Build Authority via Public Contributions.
Internal and external search algorithms weigh your "Trust Score" based on where you contribute. Submitting Public Pull Requests to high-star, high-authority repositories (e.g., React, VS Code, or popular community tools) provides powerful "internal backlinks" that boost your profile's overall ranking.

## 2. The Bio constraint

**Rule:** Treat the 160-character bio as a meta description.
GitHub restricts the bio to 160 characters. Do not waste this space on quotes or vague statements. It must follow a strict formula: `[Role] | [Core Tech Stack] | [Location/Remote]`.

**Rule:** Link out to your portfolio or LinkedIn.
Ensure the "Website" field in your profile settings is populated. Do not put the URL in your 160-character bio, as it consumes valuable keyword space and is not clickable. Use the dedicated URL field.

## 3. Strategic repository pinning

**Rule:** Pin exactly 4 to 6 repositories.
GitHub allows you to pin up to 6 repositories to the top of your profile. Leaving this default means GitHub will auto-populate it with your most recently updated repos, which may include trivial forks or incomplete test projects. You must manually curate this section.

**Rule:** Pin finished, documented projects only.
Do not pin a repository that lacks a detailed `README.md`. A pinned repository without documentation signals a lack of professional communication skills.

## 4. The Contribution Graph

**Rule:** Prioritize public commits for external SEO.
The "green square" contribution graph is a strong visual signal of activity. However, if your settings are configured to "hide private contributions," recruiters will see a blank graph, assuming you do not code.

**Recommendation:** Show private contributions if necessary.
If the majority of your work is in closed-source enterprise repositories, toggle the setting to "Include private contributions on my profile." This will display the activity (the green squares) without revealing the code or the names of the private repositories.

## 5. Examples

Good example (Bio):
```text
<!-- CORRECT: Clear role, specific stack, and location. Exactly 68 characters. -->
Senior Backend Engineer | Go, Kubernetes, PostgreSQL | Berlin
```

Bad example (Bio):
```text
<!-- WRONG: Vague, wastes space on fluff, lacks technical keywords. -->
Passionate coder turning coffee into software. I love building things!
```

---

*Next step: Build your custom landing page in [Profile README](./profile-readme.md).*