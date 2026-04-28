---
title: "CV core sections"
platform: "cv-ats"
objective: "Standardizes the required CV sections, their naming conventions, and correct chronological ordering."
status: "draft"
last_updated: "2026-04-28"
tags: ["cv", "ats", "sections", "structure"]
agent_priority: "high"
---

# CV core sections

> This file specifies the safest default sections for an ATS-optimized CV, using standard naming and structural hierarchy.

---

## 1. Overview

Applicant Tracking Systems and resume parsers work better with recognizable section names than with novelty labels. This document defines the safest naming patterns and ordering conventions for a machine-readable CV.

## 2. Core sections and naming rules

**Rule:** Use standard section headers.
Do not use creative variations for core sections. Safe defaults include:
- Contact Information (Do not use a header; place directly at the top)
- Professional Summary
- Work Experience or Experience
- Skills
- Education

**Recommendation:** Format section headers consistently.
ALL CAPS is acceptable, but consistency matters more than the exact visual treatment.

**Rule:** Structure the CV in reverse-chronological order.
Within the Work Experience and Education sections, list entries from the most recent to the oldest.

## 3. Formatting rules within sections

**Rule:** Follow the "Top Line" rule for your name.
The first line of the document should contain the full name only. Move degrees or credentials to later lines so the file opens with one clean identity signal.

**Rule:** Place contact information in the document body.
Do not put email, phone number, or LinkedIn URL in the header or footer, because these areas are handled less reliably by parsers.

**Rule:** Use one explicit date format throughout the document.
Use an unambiguous format such as `MM/YYYY - MM/YYYY` or `Month YYYY - Month YYYY`, and apply it consistently. Do not use seasons such as "Summer 2021" or year-only ranges if a month is known.

## 4. Examples

Good example:
```markdown
<!-- CORRECT -->
## Work Experience

**Software Engineer**
Tech Corp | San Francisco, CA | 06/2021 - Present
- Bullet point one.
- Bullet point two.
```

Bad example:
```markdown
<!-- WRONG -->
## Professional Journey

**Tech Corp** — Software Engineer (Summer '21 to Now)
- Bullet point one.
- Bullet point two.
```
*Why it fails:* The header is harder to classify, and the date format is ambiguous.

## 5. Anti-Patterns

### Creative section headers

**What it looks like:** Using "What I've Built" instead of "Work Experience".
**Why it fails:** The section becomes harder for both parsers and recruiters to classify quickly.
**What to do instead:** Use a standard header such as "Work Experience" or "Experience".

---

*Next step: Apply the strict layout constraints in [Formatting rules](./formatting-rules.md).*
