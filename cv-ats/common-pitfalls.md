---
title: "CV common pitfalls"
platform: "cv-ats"
objective: "Lists specific elements that break ATS parsers and introduces the Plain Text Test for verification."
status: "draft"
last_updated: "2026-04-28"
tags: ["cv", "ats", "pitfalls", "testing"]
agent_priority: "medium"
---

# CV common pitfalls

> This file catalogs common errors that cause a CV to be misparsed, and provides a practical method to verify ATS compatibility.

---

## 1. Overview

Many candidates are filtered out or slowed down not because they lack qualifications, but because the CV is difficult for parsing systems to extract cleanly. This document highlights the most common technical formatting mistakes and introduces a quick plain-text compatibility test.

## 2. Critical errors to avoid

**Rule:** Do not use headers and footers for critical information.
Keep contact information in the main document body. Many resume parsers and screening workflows handle headers and footers unreliably, so they are the wrong place for email addresses, phone numbers, or portfolio links.

**Rule:** Do not embed hyperlinks in text.
Write out URLs explicitly (e.g., `linkedin.com/in/username` or `github.com/username`). Do not rely on anchor text such as "Portfolio" or "Click here" as the only visible representation of the link.

**Rule:** Avoid visual skill rating elements.
Do not use progress bars, star ratings, or pie charts to represent your proficiency in a skill (e.g., "Python: 4/5 stars"). The parser cannot read the visual graphic, and the resulting text extraction will be gibberish.

**Rule:** Avoid the "Trust Gap" (LinkedIn De-sync).
Ensure the CV and public LinkedIn profile remain factually aligned. If dates, titles, or major claims differ across public materials, the candidate creates an avoidable credibility problem.

## 3. Verification: The Copy-Paste-Friendly test

**Rule:** Always verify the CV using a hard copy-paste into a plain text editor.
Many modern ATS platforms parse PDFs well, but a plain-text check is still the cheapest way to catch missing text, reordered content, and broken layout before submission.

1. Open the finalized PDF in a standard PDF viewer.
2. Select all text (Ctrl+A / Cmd+A) and perform a hard copy.
3. Paste the text into a plain text editor (e.g., Notepad on Windows, TextEdit on macOS in plain text mode).
4. Review the output. 

If the text is out of order, missing entirely, or contains strange characters, the file needs to be fixed before submission. Adjust the layout until the plain-text output reads logically from top to bottom.

## 4. Anti-Patterns

### The hyperlink masking

**What it looks like:** `[View my GitHub profile here](https://github.com/username)`
**Why it fails:** When the ATS strips the formatting, the resulting text will just say "View my GitHub profile here," and the actual URL is lost.
**What to do instead:** Write the URL directly into the text: `GitHub profile: github.com/username`.

---

*Next step: Extract and inject the right vocabulary using the [Keyword strategy](./keyword-strategy.md).*
