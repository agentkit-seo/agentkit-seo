<!--
metadata:
  title: "X (Twitter) optimization"
  platform: "x-twitter"
  objective: "Index and overview for the X (Twitter) platform optimization module."
  status: "review"
  last_updated: "2026-04-29"
  tags: ["x", "twitter", "overview", "indexing"]
  agent_priority: "high"
-->

# X (Twitter) optimization

> This module helps make an X profile and posting loop easier to understand, easier to follow, and less dependent on vague growth advice.

---

## 1. Overview

Posting more is not a strategy. A strong X presence needs clear positioning, useful native posts, and a repeatable engagement loop that fits the account's niche.

X (Twitter) is no longer a simple chronological feed. Public engineering material and open-source repository snapshots show a multi-stage recommendation pipeline (candidate sourcing, ranking, filtering, and diversity controls). This module converts that evidence into practical constraints for profile and content optimization.

The primary audience for this module is AI agents generating or reviewing X content and humans looking to maximize their reach and authority on the platform. Where behavior is officially documented, we treat it as a rule. Where behavior is inferred from field observation, we mark it as a recommendation to test.

```text
Weak post:
"Here are 10 tools every developer needs."

Stronger post:
"I rebuilt my portfolio for search visibility. The biggest gain was not metadata.
It was giving every serious project its own crawlable URL and proof-of-work page."
```

## 2. Use this module when

- An X profile needs clearer positioning, bio structure, or pinned-post strategy.
- Posts need stronger hooks, better formatting, or more useful native value.
- The account needs a repeatable engagement loop instead of random posting.
- Advice must separate documented behavior from contested algorithm claims.

## 3. Fast path

1. For profile setup, start with [profile-optimization.md](./profile-optimization.md).
2. For individual posts and threads, use [posting-strategy.md](./posting-strategy.md).
3. For growth loops, use [engagement-and-growth.md](./engagement-and-growth.md).
4. For Premium-specific choices, use [premium-strategies.md](./premium-strategies.md).
5. Use [algorithm-phoenix.md](./algorithm-phoenix.md) when a task depends on ranking assumptions.

## 4. Module index

Agents must route to the specific file needed for the task at hand. Do not load the entire module unless requested.

- [algorithm-phoenix.md](./algorithm-phoenix.md) — Historical engagement-weight baseline, documented architecture components, and clearly marked inferences.
- [profile-optimization.md](./profile-optimization.md) — Treating the profile as a searchable landing page (bio, display name, handle).
- [posting-strategy.md](./posting-strategy.md) — Content SEO, opening-hook heuristics, link placement experiments, and native media.
- [engagement-and-growth.md](./engagement-and-growth.md) — Conversation depth, replies, and community building via SimClusters.
- [premium-strategies.md](./premium-strategies.md) — Officially documented Premium capabilities and practical tactics.
- [sources.md](./sources.md) — Primary and secondary sources with confidence notes.

## 5. Rules

**Rule:** When optimizing an X profile or generating a tweet, the agent must consult the relevant file from the index above before generating output.

**Rule:** Output must prioritize algorithmic readability and high-weight engagements (replies, retweets) over generic social media fluff.

---
