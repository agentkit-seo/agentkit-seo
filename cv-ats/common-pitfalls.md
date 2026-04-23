---
title: "CV common pitfalls"
platform: "cv-ats"
objective: "Lists specific elements that break ATS parsers and introduces the Plain Text Test for verification."
status: "draft"
last_updated: "2026-04-22"
tags: ["cv", "ats", "pitfalls", "testing"]
agent_priority: "medium"
---

# CV common pitfalls

> This file catalogs the critical errors that cause a CV to be immediately rejected or misparsed, and provides a foolproof method to verify ATS compatibility.

---

## 1. Overview

Many candidates are rejected not because they lack qualifications, but because their CV is constructed in a way that breaks the ATS parsing logic. This document highlights the most common technical formatting errors that lead to automatic rejection and introduces the Plain Text Test, a verification step to ensure data extraction works as intended.

## 2. Critical errors to avoid

**Rule:** Do not use headers and footers for critical information.
Never place contact information (name, phone, email, links) in the header or footer sections of a Word document. Many older ATS parsers are configured to scan only the document body and will skip these sections entirely.

**Rule:** Do not embed hyperlinks in text.
Write out URLs explicitly (e.g., `linkedin.com/in/username` or `github.com/username`). Do not hide links behind anchor text like "Click Here" or "My Portfolio." ATS parsers often strip the underlying HTML, leaving the recruiter with plain text and no way to visit the link.

**Rule:** Avoid visual skill rating elements.
Do not use progress bars, star ratings, or pie charts to represent your proficiency in a skill (e.g., "Python: 4/5 stars"). The parser cannot read the visual graphic, and the resulting text extraction will be gibberish.

**Rule:** Avoid the "Trust Gap" (LinkedIn De-sync).
Ensure your optimized CV and public LinkedIn profile remain in semantic sync. If an automated background check tool or human recruiter finds differing dates, titles, or fundamentally different impacts between the two, it creates a major red flag and potential rejection due to trust issues.

## 3. Verification: The Copy-Paste-Friendly test

**Rule:** Always verify the CV using a hard copy-paste into a plain text editor.
While many modern ATS platforms are LLM-based, the "copy-paste-friendly" test is mandatory to ensure backwards compatibility with older ATS parsers that rely on basic text extraction.

1. Open the finalized PDF in a standard PDF viewer.
2. Select all text (Ctrl+A / Cmd+A) and perform a hard copy.
3. Paste the text into a plain text editor (e.g., Notepad on Windows, TextEdit on macOS in plain text mode).
4. Review the output. 

If the text is out of order, missing entirely, or contains strange characters, the CV will fail legacy ATS parsing. You must adjust the layout and formatting (like replacing hidden tables with `\hfill` in LaTeX) until the plain text output reads logically from top to bottom.

## 4. Anti-Patterns

### The hyperlink masking

**What it looks like:** `[View my GitHub profile here](https://github.com/username)`
**Why it fails:** When the ATS strips the formatting, the resulting text will just say "View my GitHub profile here," and the actual URL is lost.
**What to do instead:** Write the URL directly into the text: `GitHub profile: github.com/username`.

---

*Next step: Extract and inject the right vocabulary using the [Keyword strategy](./keyword-strategy.md).*
