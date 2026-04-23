---
title: "LinkedIn profile optimization"
platform: "linkedin"
objective: "Master index and routing logic for optimizing LinkedIn profiles for the 360brew algorithm and AI agents."
status: "draft"
last_updated: "2026-04-23"
tags: ["linkedin", "360brew", "index", "llm"]
agent_priority: "high"
---

# LinkedIn profile optimization

> This directory contains the rules and strategies for engineering a LinkedIn profile that ranks highly in both the internal 360brew algorithm and external AI-agent scrapers.

---

## 1. Overview: The dual-audience problem

Optimizing a LinkedIn profile is no longer just about adding keywords for a human recruiter to skim. You are now optimizing for two distinct, machine-driven audiences simultaneously.

The first audience is LinkedIn's internal **360brew algorithm**. This is a semantic AI foundation model that evaluates your profile for "Semantic Coherence." It penalizes generic profiles that try to appeal to everyone and rewards specialists whose headlines, experience, and content all point to a single, focused narrative.

The second audience consists of external **AI Agents and LLMs** (like open-source recruitment tools built on LangChain). These tools scrape LinkedIn's internal API, bypassing visual HTML to extract structured data. They evaluate profiles by clustering them in vector databases and using LLMs to qualify candidates against job descriptions. 

This module provides the exact structural rules, formatting constraints, and content formulas needed to satisfy both engines while maintaining an engaging narrative for the human reader who ultimately makes the hiring decision.

## 2. Module index

The optimization logic is divided into the following documents, ordered from foundational algorithms to specific section strategies:

- **[360brew algorithm](./algorithm-360brew.md):** Deep dive into how the internal semantic engine evaluates coherence, targets reach, and weights recent interactions.
- **[AI agent optimization](./ai-agent-optimization.md):** Rules for ensuring your profile clusters correctly in vector searches and is easily parsed by external LLM tools.
- **[Profile architecture](./profile-architecture.md):** Visual and structural basics, including custom URLs, the Verifications badge, the Voice badge, and Location settings.
- **[Headline strategy](./headline-strategy.md):** Strict formulas for writing highly discoverable, keyword-rich headlines without corporate fluff.
- **[About section](./about-section.md):** Constraints for writing the About section, focusing on the first-person perspective, defining the "Ideal Role," and injecting LLM-friendly keywords.
- **[Experience and skills](./experience-and-skills.md):** How to sync your LinkedIn experience with your CV to avoid the "Trust Gap," and why Verified Skill Assessments are mandatory.
- **[Featured section](./featured-section.md):** Structuring the Featured carousel with "Proof of Work" (video demos, architecture diagrams, GitHub repositories).
- **[Engagement strategy](./engagement-strategy.md):** The golden ratio of posting and the strategy for "Comment Marketing" to drive profile velocity.
- **[Sources](./sources.md):** Citations and research validating the 360brew mechanics and AI-agent scraping tactics.

## 3. Reference profiles

The following LinkedIn profiles are actively maintained using the strategies defined in this module and serve as real-world examples of dual-audience optimization:

- **Renato Mignone**: [linkedin.com/in/renato-mignone](https://www.linkedin.com/in/renato-mignone/)
- **Elia Innocenti**: [linkedin.com/in/eliainnocenti](https://www.linkedin.com/in/eliainnocenti/)

## 4. Usage for agents

When an AI agent is tasked with optimizing a user's LinkedIn profile:

1. Review this index to determine which specific sub-module is relevant to the task.
2. If optimizing the overall profile positioning, load `algorithm-360brew.md` and `ai-agent-optimization.md`.
3. If rewriting specific text sections, load `headline-strategy.md` or `about-section.md`.
4. Always enforce the formatting constraints defined in the sub-modules over generic creative writing.

---
