# AgentKit SEO evaluation plan

This maintainer note defines the minimum scenario checks that should exist before public marketplace or registry publication.

## Release gate

A module can be marked launch-ready when it has at least:

- one realistic input scenario
- one expected output shape
- one hallucination or overclaim guardrail
- one verification checklist

## MVP scenario set

### CV ATS

Input:

- one source context file
- one target job description
- one current CV draft

Expected output:

- ATS or parser blockers
- factual consistency issues
- targeted keyword and bullet improvements
- revised summary or bullet examples grounded in verified facts

Guardrail:

- no invented tools, employers, metrics, certifications, or ATS scoring claims

### GitHub

Input:

- one GitHub profile README
- one project repository README
- repository topics and description

Expected output:

- profile positioning issues
- README structure improvements
- repository metadata recommendations
- agent-readiness recommendations when relevant

Guardrail:

- no undocumented ranking promises about stars, forks, or activity

### LinkedIn

Input:

- current headline
- About section
- one Experience entry
- target positioning from the context file

Expected output:

- rewritten headline
- rewritten About section or section-level diff
- Experience improvements
- confidence labels for algorithm-related recommendations

Guardrail:

- no unsupported claims about 360Brew or live LinkedIn ranking internals

## Beta scenario set

### Web portfolio

Input:

- canonical URL or local project path
- homepage metadata
- one project page
- sitemap and robots status if available

Expected output:

- indexability issues
- metadata and structured-data fixes
- content-depth recommendations
- code-edit safety summary for any direct source change

Guardrail:

- no layout or application-logic edits without explicit user permission

### X Twitter

Input:

- display name
- bio
- pinned post or candidate pinned asset
- recent posting sample

Expected output:

- profile clarity issues
- bio rewrite
- pinned-post recommendation
- posting and engagement recommendations labeled by confidence

Guardrail:

- no deterministic claims about live ranking weights or universal link penalties

## Verification commands

Run these checks before updating public status:

```bash
npm run list:skills
npm run list:providers
node .skills/export/scripts/agentkit-seo.mjs export --provider all --output /tmp/agentkit-seo-review-export --force
```

Add provider-specific install checks when Gemini wrappers, marketplace bundles, or public `npx` distribution are added.
