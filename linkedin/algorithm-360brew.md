---
title: "360Brew and LinkedIn ranking signals"
platform: "linkedin"
objective: "Explains what is officially documented about LinkedIn ranking, what the public 360Brew paper adds, and which conclusions remain inferred."
status: "draft"
last_updated: "2026-04-24"
tags: ["linkedin", "360Brew", "ranking", "search"]
agent_priority: "medium"
---

# 360Brew and LinkedIn ranking signals

> This file separates confirmed LinkedIn behavior from public research and speculation. Use it to avoid treating 360Brew commentary as settled fact.

---

## 1. Overview

LinkedIn has publicly documented how Feed and search relevance work, and LinkedIn researchers have also published the 360Brew paper. These are not the same level of evidence.

As of April 24, 2026, the grounded position is:

- LinkedIn officially says Feed ranking uses signals from profile identity, content, network, and recent activity.
- LinkedIn officially says people search results depend on relevance to the searcher, profile completeness, skills, connections, and standard job titles.
- LinkedIn publicly published the 360Brew paper as a pre-production foundation model for ranking and recommendation tasks.
- LinkedIn has not publicly confirmed that 360Brew is fully deployed as the live production feed algorithm.

## 2. What LinkedIn officially documents

**Rule:** Optimize the profile around identity, content, and activity signals.
LinkedIn's help center says Feed personalization looks at three main groups of signals:

- **Identity:** profile details such as role, location, workplace, and skills.
- **Content:** what a post is about, how recent it is, and whether it provides knowledge or advice.
- **Activity:** what a member reacts to, comments on, shares, spends time viewing, and engages with recently.

**Rule:** Optimize for relevance to the searcher, not a universal rank position.
LinkedIn explicitly says it cannot guarantee a fixed order in people search results. The order depends on the searcher's profile, connections, filters, and other relevance signals.

**Rule:** Complete the profile using standard language.
LinkedIn's own search guidance says profile completeness, relevant skills, and standard job titles improve discoverability. Novel titles may express personality, but they are worse for search.

## 3. What the 360Brew paper changes

**Rule:** Treat 360Brew as evidence of direction, not proof of rollout.
The 360Brew paper is important because it shows LinkedIn is actively researching a large textual model for ranking and recommendation across many tasks. The paper describes a pre-production model with a textual interface, which supports a simple strategic conclusion: clear language and explicit skill naming are becoming more important, not less.

**Inference:** semantic consistency probably matters more over time.
Because the paper emphasizes natural-language representations of members, behaviors, and connections, it is reasonable to infer that clear role positioning, consistent topic focus, and explicit evidence of skills are durable bets. It is not reasonable to infer a specific live "semantic coherence score" unless LinkedIn publishes that behavior.

**Inference:** recent behavior likely remains important.
LinkedIn's official help pages already emphasize recent engagement and recent content. The 360Brew paper reinforces the idea that recent behavior can be useful ranking context, but it does not prove specific folklore rules such as fixed weighting windows or exact feed caps.

## 4. Anti-patterns

### The engagement pod

**What it looks like:** Participating in groups where users artificially "like" and comment on each other's posts to boost metrics.
**Why it fails:** LinkedIn explicitly says it reduces the visibility of low-quality content and weighs the quality and constructiveness of conversation. Pod activity pushes behavior in the opposite direction.
**What to do instead:** Publish useful, niche-relevant posts and participate in real discussions where expertise is visible.

### The topic scatter

**What it looks like:** Claiming one specialization on the profile while most recent activity points somewhere else.
**Why it fails:** Even without a confirmed 360Brew rollout, LinkedIn already uses profile details, content, and recent activity together. Mixed signals make both search relevance and human evaluation worse.
**What to do instead:** Keep headline, About, Experience, Skills, and public activity aligned around a small number of real topic pillars.

---

*Next step: Learn how to optimize for external scrapers in [AI agent optimization](./ai-agent-optimization.md).*
