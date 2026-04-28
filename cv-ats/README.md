---
title: "CV and ATS optimization"
platform: "cv-ats"
objective: "Master index and routing logic for formatting and optimizing CVs for Applicant Tracking Systems."
status: "draft"
last_updated: "2026-04-28"
tags: ["cv", "ats", "resume", "index"]
agent_priority: "high"
---

# CV and ATS optimization

> This directory contains the rules, templates, and strategies for creating CVs that successfully pass Applicant Tracking Systems (ATS) used by major tech companies.

---

## 1. Overview: The ATS problem

When you apply for a job, a human recruiter may not read your CV first. Many hiring teams use an Applicant Tracking System (ATS) to store applications, parse resumes into structured fields, search for candidates, and manage review workflows before a human evaluates the final profile.

The problem is that ATS parsers do not understand visual design the way a human does. They extract text from PDF or Word files, look for standard section headers such as "Experience" and "Education," and map the result into database fields. Some workflows also use keywords, filters, or matching tools to help recruiters find relevant candidates.

The solution is to design a CV for reliable parsing first and human readability second. This module provides constraints and strategies for building a machine-readable CV that gives the user's qualifications the best chance of being extracted correctly.

## 2. Module index

The optimization logic is divided into the following documents, ordered from the most foundational structural rules to advanced AI workflows:

- **[Core sections](./core-sections.md):** The mandatory CV sections you must include, their exact naming conventions, and the correct chronological ordering.
- **[Formatting rules](./formatting-rules.md):** Hard constraints on the single-page layout, typography, file types, and eliminating wasted space.
- **[Common pitfalls](./common-pitfalls.md):** The elements that immediately break ATS parsers (graphics, tables), how to run the mandatory "copy-paste-friendly" test, and avoiding the LinkedIn "Trust Gap".
- **[Keyword strategy](./keyword-strategy.md):** The methodology for extracting hard and soft skills, handling gap analysis and skill translation, and injecting keywords for Reasoning-Based Matching.
- **[Achievement metrics](./achievement-metrics.md):** The syntactic formula (Action Verb + Task + Result) and STAR/STAR+R/XYZ methods for writing high-impact bullet points, including the Resume Quantifier strategy.
- **[Agent workflow](./agent-workflow.md):** Why plain-text LaTeX (.tex) is the preferred format for automated CV tailoring by AI agents.
- **[Sources](./sources.md):** Citations and research on legacy and LLM-based ATS algorithms and parsing logic.

## 3. Usage for agents

When an AI agent is tasked with optimizing a user's CV:

1. Review this index to determine which specific sub-module is relevant to the task.
2. If building a CV from scratch, start with `core-sections.md` and `formatting-rules.md`.
3. If fixing parsing issues, load `common-pitfalls.md`.
4. If rewriting bullet points, load `achievement-metrics.md` and `keyword-strategy.md`.
5. Always prioritize empirical constraints over creative formatting.

---
