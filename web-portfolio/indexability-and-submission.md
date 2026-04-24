---
title: "Portfolio indexability and submission"
platform: "portfolio"
objective: "Define the technical requirements and submission workflow needed to get a personal website discovered and indexed."
status: "draft"
last_updated: "2026-04-24"
tags: ["portfolio", "indexing", "sitemap", "robots"]
agent_priority: "high"
---

# Portfolio indexability and submission

> This file defines the minimum technical requirements for making a personal website indexable, plus the correct workflow for submitting and monitoring important URLs.

---

## 1. Overview

Search engines do not index a portfolio because it looks polished. They index it when they can discover the URLs, fetch them successfully, render the important content, and decide the pages are worth storing. This file focuses on that first layer of SEO: crawlability, indexability, and the operational steps needed to move a new personal website into Google and Bing.

## 2. Best practices

**Rule:** Serve important public pages with HTTP `200` and indexable text.
Google's minimum technical requirements still begin with three checks: Googlebot must not be blocked, the page must work, and the page must contain indexable content. A portfolio page that loads behind a login wall, returns an error state, or renders no meaningful text is not index-ready.

**Rule:** Keep important pages and required assets crawlable.
Do not block the homepage, About page, Projects hub, project-detail pages, or the CSS and JavaScript files needed to render them. If rendering assets are blocked, search engines may see an incomplete page.

**Rule:** Use `noindex` or `X-Robots-Tag` to suppress search results, not `robots.txt`.
`robots.txt` is a crawl-control file, not a reliable deindexing mechanism. If a page must stay out of search, keep it crawlable long enough for bots to read the `noindex` directive, or protect it behind authentication.

**Rule:** Publish `/robots.txt` at the site root and include the sitemap location.
Keep the file short and explicit. Use it to block truly non-public or low-value paths such as `/admin/`, preview routes, or staging folders. Add a `Sitemap:` line that points to the canonical sitemap URL.

**Rule:** Publish `/sitemap.xml` and include only canonical, index-worthy URLs.
The sitemap should list the pages that deserve indexing, not every reachable route. Exclude parameter variants, thin utility pages, temporary previews, and non-canonical duplicates. Keep the `lastmod` field accurate enough to reflect meaningful content changes.

**Recommendation:** Verify the site as a Search Console Domain property.
Domain verification covers protocol and subdomain variants in one property. Use DNS verification first, then use URL Inspection to debug individual pages.

**Recommendation:** Add Bing Webmaster Tools and enable IndexNow when the stack supports it.
Bing still relies on normal crawl discovery, but its submission tooling is stronger than Google's for change notification. IndexNow is useful for fast updates to project pages, blog posts, and deleted URLs.

**Rule:** Do not rely on Google's deprecated sitemap ping endpoint.
Google completed the sitemap ping deprecation on June 26, 2023. The supported path is Search Console submission, sitemap discovery through `robots.txt`, and normal crawling.

## 3. Submission workflow

Use this sequence for a new or rebuilt portfolio:

1. Launch the canonical production site on HTTPS and redirect alternate hosts to the preferred host.
2. Verify the domain in Google Search Console with DNS.
3. Submit `/sitemap.xml` in Search Console.
4. Inspect the homepage, About page, Projects hub, and the most important project-detail pages in the URL Inspection tool.
5. Request indexing only for priority URLs that are already production-ready.
6. Add the site to Bing Webmaster Tools.
7. If supported, notify Bing and other participating engines about changed URLs through IndexNow.

## 4. Examples

Good example:

```text
# CORRECT: short robots.txt for a public portfolio
User-agent: *
Disallow: /admin/
Disallow: /preview/
Sitemap: https://example.com/sitemap.xml
```

Bad example:

```text
# WRONG: blocks the whole site, so bots cannot crawl or render key pages
User-agent: *
Disallow: /
```

## 5. Anti-Patterns

### The blocked homepage

**What it looks like:** The site launches with `Disallow: /`, a framework preview flag, or a blanket `noindex` left over from staging.
**Why it fails:** Search engines either never crawl the portfolio or keep seeing a non-indexable version of the site long after launch.
**What to do instead:** Keep a production-specific launch checklist. Before release, inspect the live homepage and confirm that both robots directives and status codes match the intended production policy.

---

*Related reading: [Launch and monitoring](./launch-and-monitoring.md) and [Web portfolio optimization sources](./sources.md).*
