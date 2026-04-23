---
title: "ATS optimization sources"
platform: "cv-ats"
objective: "Centralized credibility links and research on ATS algorithms and parsing logic."
status: "draft"
last_updated: "2026-04-22"
tags: ["cv", "ats", "sources", "research"]
agent_priority: "low"
---

# ATS optimization sources

> This file contains the research, citations, and system documentation that validate the rules and constraints defined in the cv-ats module.

---

## 1. Overview

The rules defined in the `cv-ats` module are based on empirical testing against major Applicant Tracking Systems (e.g., Workday, Greenhouse, Taleo) and documentation from resume parsing engine developers. This file centralizes those sources so that contributors and agents can verify the factual basis of the formatting and keyword strategies.

## 2. Core principles

The core principles of ATS optimization stem from the technical limitations of parsing software:
- Parsers convert proprietary file formats (.pdf, .docx) into plain text.
- Text is read strictly from top to bottom, left to right.
- Sections are categorized using hardcoded string matching against standard headers.

## 3. Sources

- [Google Vertex AI Search & Conversation documentation](https://cloud.google.com/enterprise-search) — Confirms the mechanics of how enterprise search and natural language processing engines extract and rank text from documents.
- [CV Anywhere Formatting Guidelines](https://cvanywhere.com) — Details the necessity of the plain text test and the dangers of using complex layouts for machine parsing.
- [Workday Parsing Documentation](https://www.workday.com) — Standard enterprise ATS behavior regarding header skipping and date formatting requirements.
- [ResumeAdapter ATS Insights](https://resumeadapter.com) — Research on how embedded hyperlinks are stripped and why URLs must be explicitly written out in the document body.
- [RemakeCV Technical Standards](https://remakecv.com) — Validates the strict requirement for standard system fonts to prevent OCR (Optical Character Recognition) failure during the text extraction phase.
- [Career-Ops (santifer)](https://github.com/santifer/career-ops) — Research validating Reasoning-Based Matching, the 4.0/5 rule, and the necessity of aligning with specific technical archetypes.
- [Resume ATS Checker (Kuldeep23345)](https://github.com/Kuldeep23345/resume-ats) — Insights into the modern ATS text extraction pipeline and the usage of LLMs for semantic matching over basic string matching.
- [ResumeSkills (Paramchoudhary)](https://github.com/Paramchoudhary/ResumeSkills) — Emphasizes maintaining the balance between ATS compatibility and visual hierarchy for creative and engineering roles.

---
