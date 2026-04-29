# CV parser risks and agent workflow

## Use this reference for

- diagnosing ATS breakage
- agent-driven CV tailoring
- LaTeX-source workflows

## Common parser risks

- critical info in headers or footers
- hyperlinks hidden behind anchor text only
- skill bars, stars, and visual ratings
- two-column layouts disguised with invisible tables
- inconsistent public facts between CV and LinkedIn
- image-only or scan-derived PDFs
- manual spacing hacks that break reading order

## Plain-text test

Use this cheap validation loop:

1. open the final PDF
2. copy all text
3. paste into a plain-text editor
4. confirm reading order, missing text, and character integrity

If the extracted text is scrambled, the layout is not ready.

## Agent-friendly source workflow

- Prefer plain-text source when the user supports it.
- `.tex` is strong for versioned, programmatic editing.
- Keep content and layout macros separate.
- Agents should edit content blocks, not redesign the template unless asked.
- `.docx` can still be a valid final target, but it is less pleasant as the source of truth for repeated automated tailoring.

## Guardrails

- Never promise ATS success.
- Never claim a vendor-specific scoring rule unless sourced.
- Optimize for reliable parsing first, then recruiter readability, then visual polish.
