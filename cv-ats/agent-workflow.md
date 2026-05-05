<!--
metadata:
  title: "Agent workflow for CV optimization"
  platform: "cv-ats"
  objective: "Explains why LaTeX (.tex) is the superior format for AI agents automating CV tailoring."
  status: "draft"
  last_updated: "2026-04-29"
  tags: ["cv", "ats", "latex", "agents", "automation"]
  agent_priority: "high"
-->

# Agent workflow for CV optimization

> This file details a robust technical workflow for AI agents managing CVs, advocating for LaTeX (`.tex`) as a version-controlled source format with precise visual control.

---

## 1. Overview

While word processors like Microsoft Word are standard for humans, they introduce invisible metadata, complex XML structures, and layout shifts when edited programmatically. For an AI agent tasked with continuously updating a user's CV to match specific job descriptions, plain text source formats are easier to review and version. LaTeX (`.tex`) is a strong default for this workflow when the user is comfortable compiling PDFs.

## 2. The LaTeX advantage

**Rule:** Use `.tex` as the source of truth for programmatic CV generation. LaTeX files are pure plain text. This allows AI agents to directly inject keywords, rewrite bullet points, and reorder sections without ever breaking the visual layout.

**Recommendation:** Compile `.tex` directly to PDF for the final ATS submission. A PDF generated from LaTeX gives strong control over layout, margins, and typography. Unlike Word-to-PDF exports that can scramble the underlying text layer with floating text boxes, `pdflatex` or `xelatex` usually produces a cleaner text layer. The exported PDF still needs to pass a plain-text extraction check before submission.

## 3. Agent workflow constraints

**Rule:** Maintain strict separation of content and styling macros. When an agent edits a `.tex` file, it must only modify the content strings within predefined macros (e.g., `\cventry{Role}{Date}`). Do not alter the document preamble (`\usepackage`, `\geometry`) unless explicitly directed to change the global design.

**Recommendation:** Use the provided templates as the baseline. Keep personal CV examples outside the public repository unless they are fully anonymized. Apply the canonical rules from this workflow, the formatting rules, and the templates when generating or editing user-facing CVs.

## 4. Examples

Good example:
```latex
<!-- CORRECT -->
% Clean, macro-driven content injection \mysection{Experience} \cventry{Security Engineer Intern, Tech Corp}{Feb 2026 - Present} \begin{itemize}
    \item Architected a microservices backend... \end{itemize}
```
*Why it works:* The agent can easily locate the `\cventry` and the `itemize` block using regex or basic parsing, safely injecting new bullet points tailored to a specific job description without affecting the alignment of the date.

Bad example:
```latex
<!-- WRONG -->
% Hardcoded spatial formatting \noindent \textbf{Security Engineer Intern, Tech Corp} \hspace{4cm} \textbf{Feb 2026 - Present} \\
Architected a microservices backend...
```
*Why it fails:* Manual spacing (`\hspace`) and forced line breaks (`\\`) make the document fragile. If the agent changes the job title length, the date alignment will break.

---

*Return to the [CV and ATS optimization index](./README.md).*
