<!--
metadata:
  title: "Portfolio structured data"
  platform: "portfolio"
  objective: "Define the schema strategy that helps search engines and AI systems understand a personal website without introducing misleading markup."
  status: "draft"
  last_updated: "2026-05-11"
  tags: ["portfolio", "schema", "structured-data", "person"]
  agent_priority: "high"
-->

# Portfolio structured data

> This file defines the structured data types that are most useful for a personal website and the constraints for deploying them safely.

---

## 1. Overview

Structured data does not replace good content or good architecture, but it gives search systems explicit clues about what a page represents. For a personal portfolio, the highest-value outcome is not a pile of random schema types; it is a small, accurate set of page-specific markup that reinforces the visible content. This file focuses on the schema strategy that fits a personal site without drifting into spammy or irrelevant markup.

## 2. Page-type strategy

JSON-LD is the preferred implementation format for most portfolio sites because it keeps machine-readable data separate from visible HTML while still placing the meaning of the page in the document. The goal is not to add every schema type that exists. The goal is to answer the crawler's core questions with evidence the page already supports: what the page is, who or what it represents, who authored or published it, when it was updated, which URL is canonical, and which image represents it.

**Rule:** Match schema type to page purpose. A homepage, About page, contact page, project page, article page, and index page do different jobs. Their structured data should reflect those jobs instead of forcing every route into article markup.

Use this map as the default schema strategy:

| Page type | Preferred schema | Use when |
|---|---|---|
| Homepage | `WebSite` | The page defines the site name, canonical root URL, and top-level identity. |
| About or profile page | `ProfilePage` with `Person` | The page primarily identifies one person and their public profile. |
| Software project page | `SoftwareApplication` or `SoftwareSourceCode` | The visible page describes a deployed app, tool, package, or repository. |
| Technical article or playbook | `TechArticle`, `Article`, or `BlogPosting` | The page has article-like body content, visible author/date information, and a clear headline. |
| Listing page | `CollectionPage` | The page primarily organizes links to child pages, such as projects, writing, docs, skills, or playbooks. |
| Contact page | `ContactPage` | The page exists to provide contact methods or inquiry routing. |
| Nested page | `BreadcrumbList` | The page sits under a clear hierarchy such as Home > Projects > Project name. |

**Rule:** Use article-like schema only when the page is article-like. A contact page is not an article. A listing page is not an article. A simple project landing page is not automatically an article. Article markup should be reserved for pages with visible body content, author information, publication or update dates, and a headline that represents the page.

**Recommendation:** Use `TechArticle` for technical playbooks, implementation guides, and engineering write-ups when the page teaches a technical topic. Use generic `Article` or `BlogPosting` for broader writing pages.

**Recommendation:** Use `CollectionPage` for index pages. Project, writing, skill, docs, provider, or playbook indexes should describe the collection rather than pretending to be standalone articles.

**Recommendation:** Use `ContactPage` for contact routes. Do not mark contact pages as articles or organization profiles unless the visible page genuinely has that primary purpose.

## 3. Best practices

**Rule:** Put `WebSite` structured data on the homepage. Use the homepage to define the site's preferred name and canonical root URL. This supports site-name interpretation and creates a stable top-level identity signal.

**Rule:** Use `ProfilePage` with a `Person` `mainEntity` on the About page or author page. Google explicitly supports `ProfilePage` for pages whose primary focus is a single person or organization. A personal About page is a valid use case when the visible content is genuinely centered on the person behind the site.

**Recommendation:** Use `BreadcrumbList` on nested project and writing pages. Breadcrumbs help reinforce hierarchy on pages that sit below a hub such as `/projects/` or `/writing/`.

**Recommendation:** Use `SoftwareSourceCode` or `SoftwareApplication` on developer project pages. Generic `Article` schema is often incorrect for a deployed tool or a GitHub repository write-up. Use `SoftwareSourceCode` for open-source repositories and `SoftwareApplication` for deployed applications or SaaS projects to accurately describe the project's requirements, language, and operating system.

**Recommendation:** Use `Article` or `BlogPosting` only for real editorial pages. Case studies, technical essays, and blog posts can use article markup when they have visible headings, body copy, dates, and author information. A generic project landing page should not pretend to be an article if it is not written as one.

**Recommendation:** Add article fields only when the page supports them. Use fields such as `headline`, `description`, `url`, `mainEntityOfPage`, `image`, `author`, `publisher`, `datePublished`, `dateModified`, `keywords`, and `inLanguage` when the values are real, stable, and aligned with the visible page.

**Rule:** Make freshness signals visible when using them in structured data. If JSON-LD includes `dateModified`, the page should visibly communicate an update date or last-reviewed date. Hidden freshness markup that users cannot verify can look inconsistent or low quality.

**Recommendation:** Link authors to a real author or About URL. When article markup includes an author, use `Person` and provide a valid `url` or `sameAs` value that points to a page or profile that identifies the author clearly.

**Recommendation:** Use `rel="me"` for cross-platform identity verification. On outbound links to external profiles (e.g., GitHub, LinkedIn, Mastodon), include the `rel="me"` attribute. This serves as a decentralized identity-verification function, helping AI disambiguation systems and search engines confirm that the portfolio and the social profiles belong to the exact same entity.

**Rule:** Keep markup aligned with visible page content. Structured data must describe what users can actually see on the page. Hidden, misleading, or generic markup can invalidate rich-result eligibility and weaken trust signals.

**Rule:** Do not expect blocked or `noindex` pages to yield rich-result benefits. If a page is blocked from Googlebot or marked `noindex`, search systems cannot reliably use the structured data on that page for search appearance.

**Recommendation:** Treat structured data as clarity, not ranking control. Schema can reduce ambiguity and make a page eligible for enhanced presentation, but it does not guarantee first-page ranking, rich results, image thumbnails, unchanged snippets, immediate indexing, or traffic increases.

## 4. Validation workflow

Use this validation sequence after every template change:

1. Validate syntax with JSON-LD aware tools.
2. Test eligible pages in Google's Rich Results Test.
3. Inspect the live URL in Search Console to confirm that the rendered HTML includes the markup.
4. Recheck the relevant rich result reports after deployment.

## 5. Examples

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

## 6. Anti-patterns

### The fake rich-result stack

**What it looks like:** Marking the homepage as a product, review, article, event, and FAQ page because a plugin suggested every available schema type. **Why it fails:** The markup no longer matches the visible focus of the page. At best it is ignored; at worst it becomes a quality problem. **What to do instead:** Mark up the primary purpose of each page only. Home page gets site identity. About page gets profile identity. Writing pages get article identity. Hierarchical pages get breadcrumbs.

### The article-everything portfolio

**What it looks like:** Every route emits `Article` or `TechArticle` because article schema feels more SEO-friendly. **Why it fails:** The site sends false page-type signals. A contact page, collection page, project app page, and article page are not interchangeable. **What to do instead:** Choose the schema type that matches the page's visible purpose and leave unsupported article fields out.

---

*Related reading: [Content and case studies](./content-and-case-studies.md) and [Web portfolio optimization sources](./sources.md).*
