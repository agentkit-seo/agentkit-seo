---
title: "CV core sections"
platform: "cv-ats"
objective: "Standardizes the required CV sections, their naming conventions, and correct chronological ordering."
status: "draft"
last_updated: "2026-04-22"
tags: ["cv", "ats", "sections", "structure"]
agent_priority: "high"
---

# CV core sections

> This file specifies the mandatory sections every ATS-optimized CV must contain, enforcing standard naming and structural hierarchy.

---

## 1. Overview

Applicant Tracking Systems are programmed to identify specific section headers to categorize extracted text into database fields (e.g., mapping a block of text to the "Experience" field). If a section header is unrecognized, the parser may skip the section entirely or assign the data to the wrong category. This document dictates the exact section names and their logical order.

## 2. Mandatory sections and naming rules

**Rule:** Use standard section headers exactly as written below.
Do not use creative variations. Use these exact titles:
- Contact Information (Do not use a header; place directly at the top)
- Professional Summary (Not "About Me" or "My Journey")
- Work Experience (Not "Professional History" or "Career")
- Skills (Not "Core Competencies" or "Tech Stack")
- Education (Not "Academic Background")

**Recommendation:** Format section headers in ALL CAPS.
Using all capital letters (e.g., `WORK EXPERIENCE`) acts as an additional signal for rudimentary older ATS parsers to identify the start of a new data block.

**Rule:** Structure the CV in reverse-chronological order.
Within the Work Experience and Education sections, list entries from the most recent to the oldest.

## 3. Formatting rules within sections

**Rule:** Follow the "Top Line" rule for your name.
The very first line of the document must contain only your full name. Do not append degrees, credentials, or certifications (e.g., "John Doe, MBA" or "John Doe, CPA") to this line, as it breaks the name-parsing algorithm. Move credentials to the second line. Furthermore, do not use parentheses or slashes in your name (e.g., "John (Jack) Doe").

**Rule:** Place contact information in the document body.
Do not put your email, phone number, or LinkedIn URL in the header or footer of the Word document, as parsers frequently ignore these areas.

**Rule:** Use consistent `MM/YYYY` formatting for all dates.
ATS algorithms calculate total years of experience by parsing dates. Use a strict `MM/YYYY` to `MM/YYYY` format (e.g., `06/2021 - 08/2023`). Do not use seasons (e.g., "Summer 2021") or years only, as parsers will default to January 1st of that year, potentially miscalculating experience.

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
*Why it fails:* The header is non-standard, and the date format cannot be accurately parsed by the ATS for duration calculations.

## 5. Anti-Patterns

### Creative section headers

**What it looks like:** Using "What I've Built" instead of "Work Experience".
**Why it fails:** The ATS parser relies on hardcoded string matches to categorize data. It will not recognize "What I've Built" and may skip parsing your experience entirely or dump the text into an "Uncategorized" field.
**What to do instead:** Always use "Work Experience".

---

*Next step: Apply the strict layout constraints in [Formatting rules](./formatting-rules.md).*
