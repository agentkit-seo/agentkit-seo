---
name: agentkit-seo-web-portfolio
description: Optimize personal website and web portfolio discoverability, crawlability, metadata, structured data, content usefulness, and AI-readable signals. Use when the user asks about portfolio pages, titles, meta descriptions, canonical tags, snippets, indexability, JavaScript SEO, structured data, performance, llms.txt, or web-based personal branding.
---

# AgentKit SEO Web Portfolio

## Overview

Use this skill to improve how a personal site is crawled, rendered, summarized, and trusted by search engines and AI systems.

## Reference selection

Load only the references needed for the task:

- Crawlability, sitemaps, robots, launch, URL structure: [references/indexing-and-architecture.md](references/indexing-and-architecture.md)
- Titles, canonicals, schema, JavaScript rendering: [references/metadata-structured-data-and-js.md](references/metadata-structured-data-and-js.md)
- Homepage, About, project page, metadata, `llms.txt` copy: [references/section-recipes.md](references/section-recipes.md)
- Case studies, performance, AI retrieval conventions: [references/content-performance-and-aeo.md](references/content-performance-and-aeo.md)
- Existing-site audit or maintenance: [references/portfolio-audit-and-maintenance.md](references/portfolio-audit-and-maintenance.md)

## Token discipline

- For a URL audit, inspect homepage, robots, sitemap, and only priority pages first.
- For local source work, search for metadata, routes, layout, and structured data before opening broad files.
- Do not load content-writing references for a technical crawlability fix.

## Intake workflow

- If the user provides a public portfolio URL, fetch and inspect the homepage, important pages, metadata, canonicals, sitemap, robots, structured data, and visible copy when tools allow it.
- If the portfolio source is available locally, inspect the source and prefer direct code edits for metadata, structured data, semantic HTML, links, and content.
- If public crawling is blocked or the site is not deployed, ask for local source paths, built HTML, screenshots, page inventory, or pasted page copy.
- If the site copy depends on biography, project claims, or career facts, recommend using the agent context file before rewriting.
- Do not invent projects, testimonials, metrics, employers, or credentials to fill portfolio pages.

## Rules

- Separate documented standards from emerging conventions such as `llms.txt`.
- Prefer changes that improve crawlability, information scent, and snippet quality without adding hype.
- Do not present unofficial AI or SEO proposals as universal standards.
- Keep metadata, structured data, and visible copy aligned.
- Keep page purpose, URL structure, internal links, and proof assets aligned so every important claim resolves to a crawlable page.
- When facts are missing, ask for the canonical URL, page inventory, or source content before inventing portfolio copy or structured data.
- When editing portfolio code, preserve existing styling and application logic unless the user explicitly asks for a redesign. Prefer metadata, structured data, semantic HTML, crawlability, and content changes before layout changes.
- For direct code edits, run the available build, lint, test, or preview command when the project provides one, and report any verification that could not run.

## Output expectation

Return web-ready changes or recommendations tied to real pages, metadata, and site structure rather than vague SEO advice.

## Response shape

Return:

1. URLs or local files inspected
2. crawlability, metadata, structured-data, and content issues
3. direct code edits or page-ready copy
4. verification run or checks still needed
5. context-file gaps that affect public claims
