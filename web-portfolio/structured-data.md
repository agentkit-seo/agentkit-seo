---
title: "Portfolio structured data"
platform: "portfolio"
objective: "Define the schema strategy that helps search engines and AI systems understand a personal website without introducing misleading markup."
status: "draft"
last_updated: "2026-04-24"
tags: ["portfolio", "schema", "structured-data", "person"]
agent_priority: "high"
---

# Portfolio structured data

> This file defines the structured data types that are most useful for a personal website and the constraints for deploying them safely.

---

## 1. Overview

Structured data does not replace good content or good architecture, but it gives search systems explicit clues about what a page represents. For a personal portfolio, the highest-value outcome is not a pile of random schema types; it is a small, accurate set of page-specific markup that reinforces the visible content. This file focuses on the schema strategy that fits a personal site without drifting into spammy or irrelevant markup.

## 2. Best practices

**Rule:** Put `WebSite` structured data on the homepage.
Use the homepage to define the site's preferred name and canonical root URL. This supports site-name interpretation and creates a stable top-level identity signal.

**Rule:** Use `ProfilePage` with a `Person` `mainEntity` on the About page or author page.
Google explicitly supports `ProfilePage` for pages whose primary focus is a single person or organization. A personal About page is a valid use case when the visible content is genuinely centered on the person behind the site.

**Recommendation:** Use `BreadcrumbList` on nested project and writing pages.
Breadcrumbs help reinforce hierarchy on pages that sit below a hub such as `/projects/` or `/writing/`.

**Recommendation:** Use `Article` or `BlogPosting` only for real editorial pages.
Case studies, technical essays, and blog posts can use article markup when they have visible headings, body copy, dates, and author information. A generic project landing page should not pretend to be an article if it is not written as one.

**Recommendation:** Link authors to a real author or About URL.
When article markup includes an author, use `Person` and provide a valid `url` or `sameAs` value that points to a page or profile that identifies the author clearly.

**Rule:** Keep markup aligned with visible page content.
Structured data must describe what users can actually see on the page. Hidden, misleading, or generic markup can invalidate rich-result eligibility and weaken trust signals.

**Rule:** Do not expect blocked or `noindex` pages to yield rich-result benefits.
If a page is blocked from Googlebot or marked `noindex`, search systems cannot reliably use the structured data on that page for search appearance.

## 3. Validation workflow

Use this validation sequence after every template change:

1. Validate syntax with JSON-LD aware tools.
2. Test eligible pages in Google's Rich Results Test.
3. Inspect the live URL in Search Console to confirm that the rendered HTML includes the markup.
4. Recheck the relevant rich result reports after deployment.

## 4. Examples

Good example:

```html
<!-- CORRECT: ProfilePage markup for an About page -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Renato Mignone",
    "url": "https://example.com/about/",
    "sameAs": [
      "https://github.com/example",
      "https://www.linkedin.com/in/example/"
    ]
  }
}
</script>
```

## 5. Anti-Patterns

### The fake rich-result stack

**What it looks like:** Marking the homepage as a product, review, article, event, and FAQ page because a plugin suggested every available schema type.
**Why it fails:** The markup no longer matches the visible focus of the page. At best it is ignored; at worst it becomes a quality problem.
**What to do instead:** Mark up the primary purpose of each page only. Home page gets site identity. About page gets profile identity. Writing pages get article identity. Hierarchical pages get breadcrumbs.

---

*Related reading: [Content and case studies](./content-and-case-studies.md) and [Web portfolio optimization sources](./sources.md).*
