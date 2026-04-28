---
title: "CV keyword strategy"
platform: "cv-ats"
objective: "Methodology for extracting and integrating job description keywords effectively into a CV."
status: "draft"
last_updated: "2026-04-28"
tags: ["cv", "ats", "keywords", "seo"]
agent_priority: "high"
---

# CV keyword strategy

> This file defines how to identify high-value keywords from a job description and integrate them naturally into a CV for safer ATS parsing and recruiter screening.

---

## 1. Overview

ATS platforms and recruiter workflows often use keyword matches, structured fields, and search filters to surface candidates. The exact scoring behavior varies by vendor and employer. This document provides the strategy for identifying the right keywords (hard vs. soft skills) and contextualizing them within the CV without creating spammy or unreadable text.

## 2. Keyword extraction rules

**Rule:** Differentiate between hard skills and soft skills.
Hard skills are technical abilities, tools, and platforms (e.g., "Python," "AWS," "Figma"). These are usually easier for parsers and recruiters to search directly, so prioritize them. Soft skills (e.g., "Leadership," "Communication") are secondary and should be demonstrated through context rather than listed verbatim.

**Rule:** Mirror the exact phrasing of the job description for hard skills.
If the job description asks for "Search Engine Optimization," do not write only "SEO Strategy." Some systems and recruiter searches still rely on exact string matching.

**Rule:** Handle acronyms defensively.
Include both the spelled-out term and the acronym on the first mention to capture all possible search queries.

**Rule:** Use Skill Translation for career transitions.
Map transferable skills from one industry to the terminology of another. For example, translate "Project Management" in construction to "Agile Delivery" in tech to align with the target ATS dictionary.

## 3. Keyword integration rules

**Recommendation:** Contextualize keywords for semantic matching.
Modern recruiting tools increasingly use semantic search or AI-assisted screening, but the exact models are usually not public. Integrate target keywords directly into Work Experience bullet points to show how the skill was used and why it mattered. Do not create a massive block of comma-separated keywords at the bottom of the CV.

**Rule:** Avoid keyword stuffing.
Do not hide keywords using white text or artificially repeat a keyword more than naturally required. Parsers may still extract hidden text, and human reviewers can reject the application if the tactic is discovered.

**Recommendation:** Balance tailoring with speed (The "First-Come" Factor).
Do not over-optimize at the expense of time. Many recruiters review applications in arrival order or in batches. A clear, well-tailored CV submitted early can outperform a heavily polished CV submitted after the hiring pipeline is already crowded.

## 4. Examples

Good example:
```markdown
<!-- CORRECT -->
- Managed Search Engine Optimization (SEO) strategies across 5 enterprise client accounts, increasing organic traffic by 45% year-over-year.
```
*Why it works:* It includes the exact phrasing, the acronym, and provides a contextual metric for the skill.

Bad example:
```markdown
<!-- WRONG -->
Skills: SEO, Search Engine Optimization, SEO strategy, search engine marketing, leadership, management, team player.
```
*Why it fails:* It lists variations of the same keyword without providing context, which reads poorly to humans and can be flagged by ATS filters.

## 5. Anti-Patterns

### The invisible keyword dump

**What it looks like:** A paragraph of job description keywords copy-pasted at the footer of the CV and changed to white text to blend into the background.
**Why it fails:** ATS parsers extract all text regardless of color. The resulting profile will show a block of disjointed text, causing human recruiters to immediately reject the candidate for attempting to game the system.
**What to do instead:** Integrate the most important keywords naturally into the Professional Summary and Work Experience sections.

---

*Next step: Prove your keywords with impact in [Achievement metrics](./achievement-metrics.md).*
