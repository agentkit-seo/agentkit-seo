---
title: "X optimization sources"
platform: "x-twitter"
objective: "Centralized citations for the X module, separating official source code analysis from empirical research."
status: "review"
last_updated: "2026-04-24"
tags: ["x", "twitter", "sources", "research"]
agent_priority: "low"
---

# X optimization sources

> This file contains the citations used by the `x-twitter` module. Sources are grouped by confidence level so agents can distinguish hard constraints from hypotheses.

---

## 1. Overview

The rules defined in the `x-twitter` module are grounded in two distinct types of evidence:
1. **Primary evidence (highest confidence):** Official X documentation and open-source repositories.
2. **Secondary evidence (lower confidence):** External analyses and agency testing that should be treated as empirical guidance.

## 2. Primary sources (highest confidence)

- [twitter/the-algorithm (GitHub)](https://github.com/twitter/the-algorithm) — Open-source recommendation stack and architecture components for For You.
- [ScoredTweetsParam.scala (direct path)](https://github.com/twitter/the-algorithm/blob/main/home-mixer/server/src/main/scala/com/twitter/home_mixer/product/scored_tweets/param/ScoredTweetsParam.scala) — Historical and configurable scoring/diversity parameters. Pin specific commits when citing exact constants.
- [twitter/the-algorithm-ml (GitHub)](https://github.com/twitter/the-algorithm-ml) — Open-source ML artifacts including Heavy Ranker and TwHIN material.
- [xai-org/x-algorithm (GitHub)](https://github.com/xai-org/x-algorithm) — Public architecture snapshot of a Phoenix/Grok-based recommendation pipeline.
- [Twitter's Recommendation Algorithm (X Engineering)](https://blog.x.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm) — Official overview of candidate sourcing, ranking, and filtering stages.
- [About X Premium (Help Center)](https://help.x.com/en/using-x/x-premium) — Official Premium feature set and reply-priority language.
- [About longer videos for X Premium subscribers](https://help.x.com/en/using-x/premium-longer-videos) — Official upload limits by platform/tier.
- [How to write great image descriptions](https://help.x.com/en/using-x/write-image-descriptions) — Official Alt Text guidance focused on accessibility and clarity.
- [How to use X search](https://help.x.com/en/using-x/x-search) — Official search usage and filtering controls.
- [Boost (business.x.com)](https://business.x.com/en/products/boost) — Official paid amplification product documentation.
- [SimClusters KDD 2020 paper (DOI)](https://doi.org/10.1145/3394486.3403370) — Core research on community-based representations used by Twitter.

## 3. Secondary sources (empirical, use with caution)

- `[Agency blog]` [X (Twitter) SEO: How to Optimize Your Content for Visibility Beyond Google (SEO Sherpa)](https://seosherpa.com/x-twitter-seo/) — Practical SEO heuristics for profile and post formatting.
- `[Agency blog]` [Twitter (X) Header & Profile Optimization Guide (TryMyPost)](https://www.trymypost.com/blog/twitter-x-header-optimization) — Practical profile-optimization framework for creators.
- `[Agency blog]` [Optimizing Your X Business Profile: Strategies for 2026 (Wadi Digital)](https://wadidigital.com/blog/x-twitter-profile-optimization-strategies-for-peak-performance/) — Business-profile optimization ideas (not official algorithm documentation).
- `[Independent experiment]` [Twitter Carousels & Google Search (Brodie Clark)](https://brodieclark.com/twitter-carousels-google-search/) — Evidence that tweet carousels can affect Google Search Console impressions/clicks.
- `[Traffic statistics]` [X User Stats (Exploding Topics)](https://explodingtopics.com/blog/x-user-stats) — Secondary mobile/desktop traffic breakdowns and demographic estimates.

## 4. Evidence handling rules for agents

- **Use primary sources for hard rules** (for example, Premium features, official architecture stages, documented product behavior).
- **Use secondary sources for recommendations only** and phrase as hypotheses to test.
- **Do not present contested claims as deterministic facts** unless an official source explicitly documents them.

---
