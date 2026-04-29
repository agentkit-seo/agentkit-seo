---
name: agentkit-seo-linkedin
description: Optimize LinkedIn profile structure and discoverability for headline, about, featured, experience, skills, and AI-readable positioning. Use when the user asks to improve a LinkedIn profile, headline, about section, featured section, experience entry, skills list, creator visibility, or LinkedIn search and feed discoverability.
---

# AgentKit SEO LinkedIn

## Overview

Use only the LinkedIn module unless the user explicitly asks for cross-platform alignment. Keep claims conservative, search-oriented, and easy to justify.

## Reference selection

Load only the references needed for the task:

- Headline, About, Experience, Skills, Featured, profile architecture: [references/positioning-and-structure.md](references/positioning-and-structure.md)
- Ready-to-paste section rewrites: [references/section-recipes.md](references/section-recipes.md)
- Search visibility, activity, comments, AI readability: [references/discoverability-and-activity.md](references/discoverability-and-activity.md)
- Full-profile review, consistency checks, update workflow: [references/profile-audit-and-maintenance.md](references/profile-audit-and-maintenance.md)
- Algorithm rationale, confidence labels, `360Brew`: [references/algorithm-confidence.md](references/algorithm-confidence.md)

## Token discipline

- Do not request or process the whole LinkedIn profile for a single section rewrite if the section and target role are enough.
- For full optimization, ask for a profile text export or compact section dump before screenshots, because text is cheaper and easier to ground.
- Read algorithm-confidence material only when explaining why a tactic works.

## Intake workflow

- Assume most LinkedIn profile details are login-gated or incomplete from a public URL alone.
- If the user gives a LinkedIn URL, use only public information that tools can access, then ask for pasted section text, screenshots, an export, or a local text file for the full profile.
- Ask for the headline, About, Featured items, Experience entries, Skills, target roles, target geography, and proof links when doing a full profile optimization.
- If the user's facts are scattered or the task affects multiple profile sections, recommend creating or updating the agent context file before rewriting.
- If the user supplies a context file, use it as the factual source of truth and treat LinkedIn copy as a channel-specific adaptation.
- Do not infer private metrics, endorsements, applicant outcomes, or hidden profile fields from public visibility.

## Rules

- Treat disputed `360Brew` rollout claims as disputed, not as settled production truth.
- Do not invent credentials, metrics, or employers.
- Keep profile text searchable, human-readable, and aligned with the user's actual positioning.
- If the user asks for full profile optimization, recommend or use the `agentkit-seo-agent-context-optimization` skill first when facts are messy.
- Prefer standard job titles and explicit skills over novelty phrasing.
- Keep structured profile fields, prose sections, proof links, and recent activity aligned around the same positioning.
- For section rewrites, preserve factual claims and improve only structure, clarity, and discoverability unless the user asks for strategic repositioning.

## Output expectation

Produce LinkedIn-ready copy or restructuring recommendations that improve clarity, keyword alignment, and profile completeness without overstating algorithm certainty.

## Response shape

Return:

1. profile inputs used and missing sections
2. positioning diagnosis
3. ready-to-paste LinkedIn section copy or ordered edits
4. keyword and proof alignment notes
5. requests for the smallest missing inputs needed to finish the next pass
