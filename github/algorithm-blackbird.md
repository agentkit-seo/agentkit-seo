---
title: "The Blackbird algorithm"
platform: "github"
objective: "Deep dive into GitHub's internal search engine mechanics and indexing requirements."
status: "draft"
last_updated: "2026-04-23"
tags: ["github", "algorithm", "blackbird", "search"]
agent_priority: "medium"
---

# The Blackbird algorithm

> This file details the mechanics of GitHub's internal code search engine, Blackbird, explaining how it indexes repositories and what causes a project to be excluded from search results.

---

## 1. Overview

GitHub's global code search is powered by a custom-built Rust search engine called Blackbird. Unlike standard web search engines that rely heavily on backlinks and page authority, Blackbird is designed specifically for code. It creates an N-gram index of codebases to allow for instant, exact-match regex queries across billions of files. Understanding its limitations is critical to ensuring your repositories are actually discoverable.

## 2. Indexing requirements and exclusions

**Rule:** Ensure the repository has activity on the default branch.
Blackbird will not index a repository if the default branch (usually `main` or `master`) is entirely empty or lacks a recent commit. The search engine prioritizes active codebases.

**Rule:** Do not archive repositories you want recruiters to find via search.
When a repository is marked as "Archived," it is fundamentally deprioritized or entirely excluded from global search results to prevent stale code from polluting the index. If a project is a portfolio piece, leave it active, even if you are no longer maintaining it daily.

**Rule:** Respect the size limits.
Very large repositories (typically 50+ GB), or individual files exceeding 384 KB, are not indexed by Blackbird. While this rarely affects personal projects, committing large datasets or binary assets can cause search indexing failures. Refer to the [official GitHub documentation](https://docs.github.com/en/search-github/searching-on-github/searching-code) for the latest indexing constraints.

## 3. Search triggers and visibility

**Rule:** Force indexing via local search if necessary.
GitHub automatically queues repositories for indexing. However, if a newly made public repository is not appearing in global search, you can often force the indexing queue to prioritize it by navigating to the repository and executing a local search query within that specific repo.

**Rule:** Public visibility is absolute.
While private repositories are indexed, they are only searchable by users with explicit access. To appear in recruiter searches or open-source queries, the repository visibility must be set to Public.

## 4. Search heuristics and qualifiers

**Rule:** Leverage the Symbol index.
Blackbird maintains a specialized index for symbol definitions (where a function or class is declared). While a plain text search may return both definitions and references, you can explicitly target definition sites using the `symbol:` qualifier. This is the most reliable way to surface architectural core logic to agents and recruiters.

**Rule:** Match precision matters.
An exact identifier match (e.g., searching for `thread` and finding a variable named `thread`) ranks higher in the result set than partial matches or substrings (e.g., `thread_id`).

**Rule:** Manage generated and test code visibility.
Files marked as `linguist-generated` or `linguist-vendored` are excluded from the Blackbird index entirely. While GitHub does not explicitly document a "penalty" for test files (e.g., `*_test.go`), keeping production logic separated from test suites is a logical best practice to ensure search results are focused on implementation rather than verification.

**Rule:** Use query-time qualifiers for discovery.
Users and agents can refine Blackbird searches using qualifiers like `path:` (to restrict to specific directories), `lang:` (to filter by Linguist IDs), and `content:` (to search within file contents only).

## 5. Anti-Patterns

### The unmodified fork

**What it looks like:** Forking a popular repository and leaving it untouched.
**Why it fails:** GitHub applies a strict **Conditional Exclusion** policy to forks in Blackbird. A fork's code is **only indexed and searchable** if the fork has more stars than the parent repository. If your fork has fewer stars, its contents are invisible to global code search, regardless of your commit activity.
**What to do instead:** If you are using a template, use the "Use this template" button. If you are showcasing a significant modification, ensure the project provides enough independent value to attract its own engagement signals (stars), or push the project as a fresh, independent repository to ensure it is indexed.

---

*Next step: Configure your foundational settings in [Profile architecture](./profile-architecture.md).*