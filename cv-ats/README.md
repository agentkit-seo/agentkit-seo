---
title: "CV and ATS optimization"
platform: "cv-ats"
objective: "Master index and routing logic for formatting and optimizing CVs for Applicant Tracking Systems."
status: "draft"
last_updated: "2026-04-22"
tags: ["cv", "ats", "resume", "index"]
agent_priority: "high"
---

# CV and ATS optimization

> This directory contains the rules, templates, and strategies for creating CVs that successfully pass Applicant Tracking Systems (ATS) used by major tech companies.

---

## 1. Overview: The ATS problem

When you apply for a job, a human recruiter rarely reads your CV first. The first gatekeeper is almost always an Applicant Tracking System (ATS). Human Resources departments at major companies use these software platforms to automatically parse, filter, and rank thousands of applications before a human ever looks at a screen.

The problem is that ATS parsers do not see visual design. They strip away proprietary file formatting (like PDF or Word layers) to extract pure text. They look for standard section headers (like "Experience" and "Education") to map your text into their database fields. They calculate your years of experience by parsing standard date formats, and they rank your profile by matching the extracted text against the keywords in the job description.

The solution is to design a CV exclusively for the machine parser first, and the human reader second. This module provides the exact constraints and strategies needed to build a fully machine-readable CV that ensures your qualifications are correctly extracted and ranked.

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
