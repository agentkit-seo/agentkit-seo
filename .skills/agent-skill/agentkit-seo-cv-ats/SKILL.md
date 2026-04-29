---
name: agentkit-seo-cv-ats
description: Optimize CV and resume content for recruiter readability and parser-safe ATS handling without making unsupported claims about exact vendor scoring. Use when the user asks about resumes, CVs, ATS formatting, keyword strategy, bullets, section order, achievement metrics, or job-targeted resume tailoring.
---

# AgentKit SEO CV ATS

## Overview

Use only the CV and ATS guidance relevant to the requested deliverable. Keep the advice conservative, parser-safe, and grounded in documented, durable constraints.

## Reference selection

Load only the references needed for the task:

- Layout, section order, file type, ATS-safe structure: [references/structure-and-formatting.md](references/structure-and-formatting.md)
- Summary, experience, skills, and education rewrites: [references/section-recipes.md](references/section-recipes.md)
- Job-description tailoring and bullet rewrites: [references/keywords-and-bullets.md](references/keywords-and-bullets.md)
- Parser-failure diagnosis or plain-text extraction: [references/parser-risks-and-agent-workflow.md](references/parser-risks-and-agent-workflow.md)
- Full-document review, consistency checks, maintenance: [references/cv-audit-and-maintenance.md](references/cv-audit-and-maintenance.md)

## Token discipline

- Do not load all references for a single bullet, section, or parser question.
- For long CVs, inspect contact, summary, target role, recent experience, and only sections relevant to the user's request first.
- Summarize missing inputs instead of asking for the whole career history when a narrow edit can proceed.

## Intake workflow

- Ask for the current resume or CV, target role, and job description before doing role-specific optimization.
- If the user supplies only a resume, perform a general parser-safety and recruiter-readability pass and identify the missing target-role inputs.
- If the user supplies a context file, use it to verify facts before rewriting bullets, summaries, projects, or skills.
- If the user has no context file and the CV conflicts with LinkedIn, GitHub, or portfolio facts, recommend creating or repairing the context file first.
- Accept source material as pasted text, PDF text extraction, LaTeX, Markdown, DOCX text, screenshots when supported, or local files.
- Never add keywords, tools, metrics, employers, dates, or credentials that are not supported by the supplied material.

## Rules

- Do not claim guaranteed ATS success or exact ranking behavior.
- Prefer simple structure, plain section names, and measurable outcomes.
- Tailor wording to the target role, but do not fabricate tools, metrics, or employers.
- If the user supplies a job description, align terminology to that role while preserving the user's real experience.
- Optimize for reliable parsing first, recruiter readability second, and visual polish third.
- Preserve factual alignment with the user's context file, LinkedIn, and public portfolio.
- For rewrites, improve section clarity and evidence density before changing the user's positioning strategy.

## Output expectation

Return edits that are specific to the user's target role and easy to apply to a real resume or CV draft.

## Response shape

Return:

1. inputs used and target role assumptions
2. parser and structure issues
3. rewritten sections or bullet changes
4. keyword alignment notes tied to the job description
5. missing facts or evidence needed before stronger claims
