# Context file operating workflow

## Use this reference for

- loading the context file into agent sessions
- combining the file with platform modules
- updating it safely over time

## Session workflow

1. load the context file first
2. state the task and hard constraints
3. load the matching platform skill only if needed
4. review the output against factual grounding
5. revise the source context file if the task exposed missing or conflicting
   facts

## File discovery convention

Prefer an explicit path supplied by the user, such as:

```text
Use the context file at ~/career/context.md.
```

If the user wants a default location, use:

```text
~/.agentkit-seo/context.md
```

Do not search the user's full filesystem for a context file. If no explicit path
or confirmed default exists, ask for the path before using this skill.

## Combination rule

The context file supplies facts.

The platform skill supplies formatting, discoverability, and channel-specific
constraints.

Do not let the platform skill become the factual source of truth.

## Maintenance rules

- update only when a fact is real and verifiable
- do not add speculative future items
- when adding new content, also update the `VERIFIED FACTS` anchor if relevant
- keep a version history, ideally in Git
- when a file is structurally weak, repair canonical structure before
  downstream rewriting

## Token management

- keep the `QUICK REFERENCE` block current and selective
- preserve the full historical record in the body
- compress peripheral detail rather than deleting important evidence

## Agent editing rule

When integrating new material, add or revise only the relevant entry and avoid
gratuitous rewrites of unrelated sections.
