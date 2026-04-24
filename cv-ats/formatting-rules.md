---
title: "ATS formatting rules"
platform: "cv-ats"
objective: "Defines the hard technical constraints for ATS parsing to ensure a CV is machine-readable."
status: "draft"
last_updated: "2026-04-24"
tags: ["cv", "ats", "formatting", "layout"]
agent_priority: "high"
---

# ATS formatting rules

> This file dictates the absolute technical limits for CV formatting to ensure Applicant Tracking Systems can parse the document accurately.
> Deviation from these layout rules is the most common cause of automatic rejection.

---

## 1. Overview

Applicant Tracking Systems and resume parsers extract text from uploaded files and try to map it into structured fields. They are much less reliable than a human reader when layout becomes decorative. This document defines the safest constraints for fonts, layout, and file types.

## 2. Layout constraints

**Recommendation:** Default to one page unless the profile clearly needs more space.
This is mainly a recruiting and readability rule, not an ATS rule. For early-career candidates, one page is usually the strongest default.

**Rule:** Optimize horizontal space and eliminate orphan words.
If a bullet point wraps to a new line leaving only one or two words on that line (an "orphan"), you are wasting an entire line of vertical space. Either prune filler words to pull the sentence back onto a single line, or expand the achievement with more metrics to fully utilize the second line.

**Rule:** Use a strict single-column layout.
Multi-column layouts are still one of the most common causes of scrambled extraction. A single column is the safest default across parsers.

**Rule:** Do not use tables, text boxes, or floating elements.
Information placed inside tables or text boxes is more likely to be skipped, reordered, or appended incorrectly during extraction.

**Rule:** Keep margins within standard limits (0.5" to 1").
Set document margins between 0.5 inches (1.27 cm) and 1 inch (2.54 cm) on all sides. This ensures printing and PDF conversion do not clip text, while maintaining enough "white space" for OCR systems to distinguish between sections.

## 3. Typography constraints

**Rule:** Stick to standard system fonts and size.
Use established system fonts (Arial, Calibri, Georgia, Helvetica, Times New Roman, or Tahoma). Do not use custom web fonts. Maintain a minimum font size of 10pt, with 11pt body text preferred in most cases.

**Recommendation:** Disable automatic hyphenation.
Do not split words across lines with automatic hyphenation if the template can avoid it. Plain-text extraction is cleaner when keywords stay intact.

**Rule:** Avoid graphics, icons, and non-standard bullets.
Do not use SVG icons, PNG graphics, or custom bullet point shapes (like arrows, checkmarks, or diamonds) which can compile into garbled characters. Stick to standard, solid circles (`•`) or squares (`▪`).

## 4. File format rules

**Rule:** Submit CVs in `.docx` or text-based `.pdf` format only.
If the employer does not specify a format, `.docx` and text-based `.pdf` are the safest options. If the employer specifies a format, follow the employer's instruction.

**Recommendation:** Use LaTeX (`.tex`) compiled to PDF for absolute layout control.
LaTeX is a strong option for version-controlled, text-first workflows because the source file is plain text and layout is explicit. It is not magic: the exported PDF still needs to pass a plain-text extraction check.

> ⚠️ Never submit an image-based PDF (a scanned document or a flat image saved as a PDF). The ATS cannot read the text, resulting in a blank profile.

## 5. Examples

Good example:
```markdown
<!-- CORRECT -->
# Standard CV layout
- Font: Arial 11pt
- Layout: Single column, left-aligned
- File type: exported from Word as a text-PDF
```

Good example (LaTeX):
```latex
<!-- CORRECT -->
% Standard article class with clean Helvetica font
\documentclass[a4paper,10pt]{article}
\usepackage[scaled]{helvet}
\renewcommand{\familydefault}{\sfdefault}
\usepackage[left=1.4cm,right=1.4cm,top=1.2cm,bottom=1.2cm]{geometry}
```

Bad example:
```markdown
<!-- WRONG -->
# Creative CV layout
- Font: Custom Google Web Font (Inter)
- Layout: Two-column grid with a sidebar for skills
- File type: JPEG saved inside a PDF container
```

## 6. Anti-Patterns

### The invisible table hack

**What it looks like:** Using a two-column table with hidden borders to align dates on the right side of the page.
**Why it fails:** The parser may read the table in the wrong order, disconnecting the date from the job title.
**What to do instead:** Use standard tab stops or right-alignment formatting within a single text line to position dates. If using LaTeX, the `\hfill` command is perfect for this: `\textbf{Role}\hfill\textbf{Date}` generates the visual space while parsing sequentially as pure text.

---

*Next step: Learn how to test your layout in [Common pitfalls](./common-pitfalls.md).*
