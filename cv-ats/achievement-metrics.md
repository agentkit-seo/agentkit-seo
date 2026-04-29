<!--
metadata:
  title: "CV achievement metrics"
  platform: "cv-ats"
  objective: "Defines the syntactic formula for writing high-impact, easily parsed experience bullet points."
  status: "draft"
  last_updated: "2026-04-28"
  tags: ["cv", "ats", "metrics", "achievements"]
  agent_priority: "medium"
-->

# CV achievement metrics

> This file defines the mandatory formula for structuring work experience bullet points so they highlight quantifiable impact for both parsers and human reviewers.

---

## 1. Overview

Recruiters and many screening workflows prioritize candidates who demonstrate impact rather than just listing responsibilities. The structure of a bullet point must clearly connect an action to a business result. This document enforces a specific syntactic formula so bullet points are rich in relevant keywords, easily parsed, and persuasive to humans.

## 2. The bullet point formula

**Rule:** Structure every bullet point using an established framework like STAR, STAR+R, or XYZ. Adopt a rigorous formula to make impact visible. The baseline is Action Verb + Task + Result. Highly recommended variations include:
- **STAR:** Situation (context), Task (challenge), Action (what you did), Result (quantifiable outcome).
- **STAR+R:** Adds *Reflection* to STAR (what was learned or how it shaped future architectural decisions). This is useful for seniority signals and interview preparation, especially when a reviewer wants evidence of reasoning.
- **XYZ:** Accomplished [X] as measured by [Y], by doing [Z].

**Rule:** Quantify achievements with hard numbers. Use numeric values (%, $, #) to define the result. Numbers make impact easier to scan and easier to search. If exact numbers are unknown, use the **Resume Quantifier** strategy to ethically estimate impact based on defensible proxy metrics (e.g., "Reduced latency by an estimated 30% based on baseline profiling").

**Rule:** Use the active voice and past tense for past roles. Avoid passive phrases like "Responsible for" or "Tasked with." Start immediately with the action. Use present tense only for ongoing responsibilities in a current role.

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
**Why it fails:** Listing duties proves you held the job, but it does not prove you were good at it. It lacks the target keywords and metrics that recruiters and screening systems use to understand fit.
**What to do instead:** Translate duties into achievements using the Action Verb + Task + Result formula.

---

*Next step: Automate this process in [Agent workflow](./agent-workflow.md).*
