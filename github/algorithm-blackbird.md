---
title: "The Blackbird algorithm"
platform: "github"
objective: "Deep dive into GitHub's code search mechanics and the documented restrictions that affect repository discoverability."
status: "draft"
last_updated: "2026-04-24"
tags: ["github", "algorithm", "blackbird", "search"]
agent_priority: "medium"
---

# The Blackbird algorithm

> This file details the mechanics of GitHub's internal code search engine, Blackbird, explaining how it indexes repositories and what causes a project to be excluded from search results.

---

## 1. Overview

GitHub's global code search is powered by Blackbird. Unlike standard web search engines, it is designed specifically for code and repository navigation. The most useful optimization work here is not "SEO theater"; it is removing conditions that prevent repositories or files from being searchable in the first place.

## 2. Indexing requirements and exclusions

**Rule:** Keep the repository public if it needs to appear in public search.
Private repositories can still be indexed for authorized users, but they will not appear in public recruiter or developer searches.

**Rule:** Keep the default branch non-empty and the repository reasonably active.
GitHub documents that only the default branch is indexed for code search. GitHub also documents that only repositories with recent activity, or repositories returned in search results within the last year, are searchable. A stale showcase repository is still usable, but it is safer to keep a small amount of maintenance activity on the default branch.

**Rule:** Respect the size limits.
GitHub documents several code-search limits. The important ones for personal projects are:

- Only files smaller than `384 KB` are searchable.
- Only the first `500 KB` of each file is searchable.
- Only repositories with fewer than `500,000` files are searchable.
- Archived repositories are not searchable.

## 3. Search behavior and visibility

**Rule:** Understand the fork restriction before using forks as portfolio pieces.
GitHub documents that forked repositories are only searchable in code search if the fork has more stars than the parent repository and has at least one pushed commit after being created. Even then, users must include `fork:true` or `fork:only` in their query to include forks in results.

**Rule:** Public visibility is absolute.
While private repositories are indexed, they are only searchable by users with explicit access. To appear in recruiter searches or open-source queries, the repository visibility must be set to Public.

## 4. Search features and qualifiers

**Rule:** Leverage the Symbol index.
GitHub code search includes symbol search and code navigation. Cleanly named functions, classes, and files are easier to discover than vague identifiers.

**Rule:** Use query-time qualifiers for discovery.
Users and agents can refine Blackbird searches using qualifiers such as `repo:`, `path:`, `language:`, and `symbol:`. A searchable repository with sensible paths and names is dramatically easier to inspect than one that depends on internal tribal knowledge.

## 5. Anti-Patterns

### The unmodified fork

**What it looks like:** Forking a popular repository and leaving it untouched.
**Why it fails:** Code search has special restrictions for forks, and untouched forks rarely satisfy the conditions needed to appear in search.
**What to do instead:** If starting from a scaffold, prefer a template repository or create a new standalone repository. If using a fork, make substantial changes and understand that fork visibility in code search is still constrained.

---

*Next step: Configure your foundational settings in [Profile architecture](./profile-architecture.md).*
