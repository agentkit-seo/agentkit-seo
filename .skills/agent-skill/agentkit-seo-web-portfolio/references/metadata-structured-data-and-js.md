# Web portfolio metadata, structured data, and JavaScript SEO

## Metadata rules

- Every indexable page needs a unique title.
- Lead with the page topic, then the site or person name.
- Keep titles concise enough to avoid common truncation.
- Write a real meta description for important pages.
- Keep visible copy aligned with metadata.
- Choose one canonical host and protocol.
- Keep the visible `h1` aligned with the page topic so titles and headings do not send conflicting signals.

## Social-preview rules

- Set `og:title`, `og:description`, `og:image`, and `og:url` on public pages.
- Use page-specific preview images where possible.
- Add X card tags as a fallback.
- Prefer a project screenshot over a generic site logo on project pages.

## Structured-data rules

- Use a small, accurate schema set.
- Homepage: `WebSite`
- About/profile page: `ProfilePage` with `Person`
- hierarchical pages: `BreadcrumbList`
- software project pages: `SoftwareSourceCode` or `SoftwareApplication` when the visible page actually supports that type
- writing pages: article-type markup where appropriate
- outbound identity links: `rel="me"` where useful

Keep markup aligned with visible content. Do not pile on unrelated schema types.

## JavaScript SEO rules

- Prefer static generation, SSR, or hybrid rendering for core pages.
- Ensure titles, headings, primary copy, canonical tags, structured data, and important links exist in rendered HTML.
- Lazy-load media, not the main meaning of the page.
- Provide lightweight fallback identity content when a strict environment may skip JS entirely.
- Return real status codes for missing pages.
- Treat dynamic rendering as a workaround, not the ideal default.
