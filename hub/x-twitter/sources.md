<!--
metadata:
  title: "X optimization sources"
  platform: "x-twitter"
  objective: "Centralized official and maintainer-published sources for X profile, post, search, accessibility, Premium, and recommendation claims."
  status: "review"
  last_updated: "2026-05-27"
  tags: ["x", "twitter", "sources", "recommendations"]
  agent_priority: "low"
-->

# X optimization sources

> This file lists official X, Twitter, and maintainer-published sources that can support X/Twitter module claims. Empirical creator advice and agency SEO posts are excluded from `stable` source support.

---

## 1. Overview

The `x-twitter` module separates current official product behavior from historical open-source recommendation material. The 2023 Twitter recommendation release is useful as architecture evidence, but it is not a complete contract for current production ranking behavior.

## 2. Source table

| Source | URL | Type | Covers | Confidence |
|---|---|---|---|---|
| X Help: How to customize your profile | https://help.x.com/articles/166743 | help-center | Profile image, header image, name, bio, location, website, birth date, pinned post, image recommendations, and 160-character bio limit | stable |
| X Help: How to change your X username | https://help.x.com/articles/14609 | help-center | Username, handle, display-name behavior, username length, allowed handle characters | stable |
| X Help: About our approach to recommendations | https://help.x.com/en/rules-and-policies/recommendations | help-center | Recommendation surfaces, amplification limits, For You signals, Trends inputs, user controls | likely |
| X Engineering Blog: Twitter's Recommendation Algorithm | https://blog.x.com/engineering/en_us/topics/open-source/2023/twitter-recommendation-algorithm | official-blog | Historical For You candidate sourcing, ranking, filtering, and open-source release context | likely |
| twitter/the-algorithm | https://github.com/twitter/the-algorithm | official-docs | Historical open-source recommendation code and architecture | inferred |
| twitter/the-algorithm-ml | https://github.com/twitter/the-algorithm-ml | official-docs | Historical open-source ML artifacts, including Heavy Ranker and TwHIN material | inferred |
| X Help: About X Premium | https://help.x.com/en/using-twitter/twitter-blue-help | help-center | Premium tiers and product capabilities such as longer posts, longer videos, reply prioritization, formatting, and articles | likely |
| X Help: About longer videos for X Premium subscribers | https://help.x.com/en/using-x/premium-longer-videos | help-center | Video upload duration, resolution, platform, and file-size limits by Premium status | likely |
| X Help: Undo Post | https://help.x.com/en/using-x/undo-post | help-center | Undo Post behavior and timing as a Premium feature | likely |
| X Help: How to add image descriptions | https://help.x.com/en/using-x/add-image-descriptions | help-center | Alt Text purpose, user flow, and 1,000-character image-description field | stable |
| X Help: How to use the ALT badge and GIF label | https://help.x.com/en/using-x/how-to-use-alt-gif | help-center | ALT badge and GIF label behavior | stable |
| X Help: How to use X search | https://help.x.com/articles/459288 | help-center | Search surfaces, keyword and hashtag search, safe-search controls | stable |
| X Business: Boost | https://business.x.com/en/products/boost | official-docs | Paid amplification product separate from organic ranking | likely |

## 3. Removed or downgraded sources

The previous source list included agency blogs, independent experiments, traffic-statistics posts, and a SimClusters research paper. Those sources are excluded from the authoritative source table. Use them only as background for `inferred` or `disputed` notes when explicitly needed.

The `xai-org/x-algorithm` repository is not retained here because a clean official X product relationship was not established from an official X source. Do not use it to support current X production-behavior claims.

No clean official source was found for exact live ranking weights, universal external-link penalties, shadowban diagnosis, posting-frequency thresholds, or Grok-era production ranking details. Treat those claims as `disputed` unless the user supplies current account evidence or official source material.

---
