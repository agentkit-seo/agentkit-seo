---
title: "LinkedIn profile optimization"
platform: "linkedin"
objective: "Master index for optimizing LinkedIn profiles around current ranking signals, search discovery, and AI-readable profile structure."
status: "draft"
last_updated: "2026-04-24"
tags: ["linkedin", "360Brew", "search", "ai"]
agent_priority: "high"
---

# LinkedIn profile optimization

> This directory contains the rules and strategies for engineering a LinkedIn profile that performs well in LinkedIn search and recommendations while remaining easy for external AI tools to interpret.

---

## 1. Overview: The dual-audience problem

Optimizing a LinkedIn profile is no longer just about adding keywords for a human recruiter to skim. You are now optimizing for two distinct, machine-driven audiences simultaneously.

The first audience is LinkedIn's own ranking, recommendation, and people-search systems. LinkedIn's official help pages say these systems use signals from profile identity, content quality, and recent activity to personalize what members see.

The second audience consists of external AI tools used in recruiting and research. These tools may consume LinkedIn profile data through exports, enrichment products, browser automation, or scraping. The safest optimization strategy is still the same: use explicit job titles, clean skill names, and structured proof of work.

As of April 24, 2026, LinkedIn has publicly released the 360Brew research paper, but there is no official LinkedIn statement confirming a full production rollout of 360Brew as the live feed algorithm. This module therefore treats 360Brew as a relevant research direction, not as a fully confirmed production rulebook.

This module provides the structural rules, formatting constraints, and content formulas needed to satisfy both audiences while maintaining an engaging narrative for the human reader who ultimately makes the hiring decision.

## 2. Module index

The optimization logic is divided into the following documents, ordered from foundational algorithms to specific section strategies:

- **[360Brew and ranking signals](./algorithm-360brew.md):** What LinkedIn officially documents, what the public 360Brew paper shows, and what should still be treated as inference.
- **[AI agent optimization](./ai-agent-optimization.md):** Rules for making the profile easy for external AI tools, parsers, and enrichment workflows to understand.
- **[Profile architecture](./profile-architecture.md):** Visual and structural basics, including custom URLs, the Verifications badge, the Voice badge, and Location settings.
- **[Headline strategy](./headline-strategy.md):** Strict formulas for writing highly discoverable, keyword-rich headlines without corporate fluff.
- **[About section](./about-section.md):** Constraints for writing the About section, focusing on first-person voice, clear role positioning, and readable evidence.
- **[Experience and skills](./experience-and-skills.md):** How to keep profile facts aligned with the CV, surface proof links, and use current LinkedIn skills features well.
- **[Featured section](./featured-section.md):** Structuring the Featured carousel with "Proof of Work" (video demos, architecture diagrams, GitHub repositories).
- **[Engagement strategy](./engagement-strategy.md):** Evidence-based posting and commenting practices that align with documented relevance and quality signals.
- **[Sources](./sources.md):** Official help pages, the 360Brew paper, and limited external sources used in this module.

## 3. Reference profiles

The following LinkedIn profiles are actively maintained using the strategies defined in this module and serve as real-world examples of dual-audience optimization:

- **Renato Mignone**: [linkedin.com/in/renato-mignone](https://www.linkedin.com/in/renato-mignone/)
- **Elia Innocenti**: [linkedin.com/in/eliainnocenti](https://www.linkedin.com/in/eliainnocenti/)

## 4. Usage for agents

When an AI agent is tasked with optimizing a user's LinkedIn profile:

1. Review this index to determine which specific sub-module is relevant to the task.
2. If optimizing the overall profile positioning, load `algorithm-360brew.md` and `ai-agent-optimization.md`.
3. If rewriting specific text sections, load `headline-strategy.md` or `about-section.md`.
4. Prefer official LinkedIn guidance over third-party folklore, and label any inferred algorithm behavior as inference rather than fact.

---
