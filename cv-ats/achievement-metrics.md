---
title: "CV achievement metrics"
platform: "cv-ats"
objective: "Defines the syntactic formula for writing high-impact, easily parsed experience bullet points."
status: "draft"
last_updated: "2026-04-22"
tags: ["cv", "ats", "metrics", "achievements"]
agent_priority: "medium"
---

# CV achievement metrics

> This file defines the mandatory formula for structuring work experience bullet points to ensure they highlight quantifiable impact that ranks highly in ATS scoring.

---

## 1. Overview

Modern ATS algorithms and human recruiters both prioritize candidates who demonstrate impact rather than just listing responsibilities. The structure of a bullet point must clearly connect an action to a business result. This document enforces a specific syntactic formula to ensure bullet points are rich in keywords, easily parsed, and highly persuasive.

## 2. The bullet point formula

**Rule:** Structure every bullet point using an established framework like STAR, STAR+R, or XYZ.
Adopt a rigorous formula to guarantee impact. The baseline is Action Verb + Task + Result. Highly recommended variations include:
- **STAR:** Situation (context), Task (challenge), Action (what you did), Result (quantifiable outcome).
- **STAR+R:** Adds *Reflection* to STAR (what was learned or how it shaped future architectural decisions). This plays very well with modern LLM-based ATS parsers looking for seniority and reasoning.
- **XYZ:** Accomplished [X] as measured by [Y], by doing [Z].

**Rule:** Quantify achievements with hard numbers.
Use numeric values (%, $, #) to define the result. ATS parsers are often configured to identify numbers as indicators of senior-level experience or high-impact work. If exact numbers are unknown, use the **Resume Quantifier** strategy to ethically estimate impact based on industry benchmarks or proxy metrics (e.g., "Reduced latency by an estimated 30% based on baseline profiling").

**Rule:** Use the active voice and past tense for past roles.
Avoid passive phrases like "Responsible for" or "Tasked with." Start immediately with the action. Use present tense only for ongoing responsibilities in a current role.

## 3. Examples

Good example:
```markdown
<!-- CORRECT -->
- Architected and migrated the legacy monolithic application to a microservices architecture using Docker and AWS, reducing server response time by 40% and cutting hosting costs by $12,000 annually.
```
*Why it works (STAR/XYZ method):* It establishes the Action (Architected and migrated), the Task (legacy monolithic to microservices with Docker/AWS), and the clear Result/Measurement (40% reduction, $12,000 savings).

Bad example:
```markdown
<!-- WRONG -->
- Responsible for migrating the old application to the cloud, which made it run faster and saved the company money.
```
*Why it fails:* It uses passive phrasing ("Responsible for") and lacks any specific technical keywords or quantifiable numbers.

## 4. Anti-Patterns

### The job description replica

**What it looks like:** Bullet points that read like a list of duties: "Attended daily standups," "Wrote code for the frontend," "Fixed bugs."
**Why it fails:** Listing duties proves you held the job, but it does not prove you were good at it. It lacks the target keywords and metrics that the ATS uses to rank candidates.
**What to do instead:** Translate duties into achievements using the Action Verb + Task + Result formula.

---
