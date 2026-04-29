# AgentKit SEO release plan

This maintainer note defines the current release process. The project is not using an `evals/` folder, benchmark suite, or public showcase track during the current phase.

The priority is to make the skill pack installable, understandable, and useful before investing in formal testing assets or polished demos.

## Current release focus

Work should focus on:

- keeping `.skills/agent-skill/` as the canonical portable skill source
- keeping provider adapters generated from the shared source instead of maintained separately
- verifying the install/export CLI for every supported provider
- tightening the root skill routing and module instructions
- preparing the package for public `npx agentkit-seo ...` usage
- making the README clear enough for a new user to install and try the project quickly

The npm publishing runbook lives in `.assets/docs/npm-publishing-process.md`.

## Manual release checks

Before public release, run the local checks that prove the package can be listed, exported, packed, and installed:

```bash
npm run list:skills
npm run list:providers
node .skills/export/scripts/agentkit-seo.mjs export --provider all --output /tmp/agentkit-seo-review-export --force
npm --cache /tmp/npm-cache pack --dry-run
```

Add provider-specific install checks when a provider integration changes.

## Skill quality checks

For each launch module, manually inspect that:

- the `SKILL.md` has a clear task boundary
- the skill tells the agent which local references to load
- the skill avoids unsupported ranking, ATS, or algorithm promises
- outputs are grounded in user-provided facts
- provider metadata stays aligned with the shared skill name

The first launch focus remains:

- `agentkit-seo-cv-ats`
- `agentkit-seo-github`
- `agentkit-seo-linkedin`

Other modules can remain beta while the install flow and main narrative are completed.

## Later, optional

Testing and showcasing can be added later if they become useful for public trust or launch content. That future work can be a small `demo/`, `showcase/`, or manual example set, but it is not a current blocker and should not shape the near-term process.
