---
title: "The 360brew algorithm"
platform: "linkedin"
objective: "Explains the mechanics of the 360brew semantic algorithm and how it evaluates profile and content coherence."
status: "draft"
last_updated: "2026-04-23"
tags: ["linkedin", "360brew", "algorithm", "semantic"]
agent_priority: "medium"
---

# The 360brew algorithm

> This file details the mechanics of LinkedIn's 360brew algorithm, shifting the focus from statistical keyword matching to semantic coherence, dwell time, and targeted reach.

---

## 1. Overview

LinkedIn has replaced its legacy "mini-algorithms" (which handled the feed, jobs, and notifications separately) with a unified foundation model internally known as "360brew." This LLM-based engine evaluates a user's entire behavior across the platform to build a comprehensive semantic map of their professional identity. It is designed to prioritize value-added consumption and strict thematic relevance over broad viral spread.

## 2. Core mechanics

**Rule:** Maintain strict Semantic Coherence across all sections and activity.
The 360brew algorithm evaluates whether your Headline, About section, Experience, and the content you engage with all tell a consistent story. If you claim to be an "AI Engineer" but frequently comment on unrelated topics like cooking, the algorithm struggles to categorize you and suppresses your overall visibility.

**Rule:** Optimize for Dwell Time over vanity metrics.
The algorithm tracks "Dwell Time" (the consumption rate or time spent reading a post or profile) as its primary quality signal. It no longer promotes posts simply because they accumulate fast, low-effort likes. Content and profiles must be formatted to keep the user reading.

**Rule:** Leverage In-Context Learning (ICL).
The model adapts the feed in real-time based on immediate actions. If a recruiter or peer interacts with your profile or content, the algorithm uses its long context window to immediately surface more of your historical content in their feed. 

**Rule:** Respect Frequency Capping.
To prevent feed fatigue, 360brew silently limits how many posts from the same person appear in a single session, regardless of engagement velocity. Posting multiple times a day cannibalizes your own reach.

## 3. Anti-Patterns

### The engagement pod

**What it looks like:** Participating in groups where users artificially "like" and comment on each other's posts to boost metrics.
**Why it fails:** The 360brew AI detects artificial engagement that lacks semantic coherence with the topic or the author's historical data. It penalizes accounts participating in these pods, drastically reducing their organic reach.
**What to do instead:** Focus on organic "Comment Marketing" by leaving insightful, relevant comments on posts from genuine industry leaders in your niche.

---

*Next step: Learn how to optimize for external scrapers in [AI agent optimization](./ai-agent-optimization.md).*
