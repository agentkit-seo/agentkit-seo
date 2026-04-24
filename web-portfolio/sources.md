---
title: "Web portfolio optimization sources"
platform: "portfolio"
objective: "Centralized citations and official documentation validating the mechanics of portfolio indexing, metadata, structured data, and AI discovery."
status: "draft"
last_updated: "2026-04-24"
tags: ["portfolio", "sources", "research", "indexing"]
agent_priority: "low"
---

# Web portfolio optimization sources

> This file contains the official documentation, standards, and product guidance that validate the rules and recommendations in the web-portfolio module.

---

## 1. Overview

The rules in this module are based primarily on Google Search Central, Google Search Console Help, Bing Webmaster and IndexNow documentation, and official crawler guidance from AI-search vendors. Google remains the main reference for technical indexability, while Bing, OpenAI, Anthropic, and Perplexity are included where their official documentation adds operational guidance for discovery and retrieval.

## 2. Sources

- [Google Search technical requirements](https://developers.google.com/search/docs/essentials/technical) — Confirms the minimum conditions for Google index eligibility: crawl access, HTTP `200`, and indexable content.
- [Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) — Confirms that `robots.txt` controls crawling, not reliable deindexing, and points to `noindex` for search suppression.
- [Robots `meta` tag, `data-nosnippet`, and `X-Robots-Tag` specifications](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) — Defines page-level index and snippet controls and explains the interaction between crawl access and indexing directives.
- [Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) — Validates the role of `sitemap.xml`, `lastmod`, and sitemap extensions.
- [Sitemaps ping endpoint is going away](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping) — Confirms that Google's old sitemap ping endpoint was deprecated and should not be used as a modern submission workflow.
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080) — Documents Search Console verification methods, including DNS verification for Domain properties.
- [Inspect and troubleshoot a single page](https://support.google.com/webmasters/answer/12482179) — Defines the live URL inspection workflow and request-indexing workflow for individual pages.
- [Influencing title links in search results](https://developers.google.com/search/docs/appearance/title-link) — Validates best practices for page titles and explains how Google generates title links.
- [Control your snippets in search results](https://developers.google.com/search/docs/appearance/snippet) — Confirms that snippets are usually generated from visible page content and only sometimes from meta descriptions.
- [What is canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization) — Defines canonical selection and duplicate clustering.
- [Understand the JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) — Documents Google's crawl, render, and index pipeline for JavaScript-powered sites.
- [Dynamic rendering as a workaround](https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering) — Confirms that dynamic rendering is a workaround and that static rendering, SSR, or hydration are preferred.
- [Fix lazy-loaded content](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading) — Defines safe lazy-loading behavior for content that still needs to be discovered and indexed.
- [Mobile-first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) — Confirms that Google indexes with the mobile crawler and explains mobile parity requirements.
- [Link best practices for Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) — Validates the requirement for crawlable `<a href>` links and meaningful anchor text.
- [Provide a site name to Google Search](https://developers.google.com/search/docs/appearance/site-names) — Explains homepage site-name signals and the role of `WebSite` structured data.
- [Profile page structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page) — Confirms `ProfilePage` support and explicitly includes About-style profile pages as valid use cases.
- [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) — Validates breadcrumb markup and the recommendation to support site hierarchy with structured data.
- [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article) — Documents article markup and author markup best practices relevant to writing and case-study pages.
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) — Confirms that structured data must match visible content and must not be blocked if rich-result eligibility is desired.
- [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals) — Defines the current performance metrics Google recommends monitoring for page experience.
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — Provides the quality framework for people-first portfolio content and the "Who, How, and Why" self-assessment.
- [IndexNow documentation](https://www.indexnow.org/documentation) — Defines the official protocol for notifying participating search engines about added, updated, or deleted URLs.
- [Bing Webmaster Tools URL and Content Submission API](https://www.bing.com/webmasters/url-submission-api?source=card) — Documents Bing's direct URL and content submission APIs.
- [ChatGPT search](https://help.openai.com/en/articles/9237897-chatgpt-search/) — Confirms that inclusion in ChatGPT Search depends in part on allowing `OAI-Searchbot` and its published IP ranges.
- [The `/llms.txt` file](https://llmstxt.org/) — Official proposal describing `llms.txt` as an inference-time guidance file for LLMs.
- [Does Anthropic crawl data from the web, and how can site owners block the crawler?](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) — Documents Anthropic's crawler separation and robots.txt controls.
- [Perplexity crawlers](https://docs.perplexity.ai/guides/bots) — Official crawler guidance for Perplexity, including robots.txt tags and use distinctions.
- [RFC 9309: Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309) — The formal standard for `robots.txt`.
- [Sitemaps XML format](https://www.sitemaps.org/protocol.html) — The canonical protocol reference for sitemap structure.
