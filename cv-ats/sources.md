<!--
metadata:
  title: "ATS optimization sources"
  platform: "cv-ats"
  objective: "Centralized credibility links and research on ATS algorithms and parsing logic."
  status: "draft"
  last_updated: "2026-04-24"
  tags: ["cv", "ats", "sources", "research"]
  agent_priority: "low"
-->

# ATS optimization sources

> This file contains the research, citations, and system documentation that validate the rules and constraints defined in the cv-ats module.

---

## 1. Overview

The rules defined in the `cv-ats` module are based on a mix of university career-center guidance and documentation from resume parsing vendors or ATS platforms. This file favors inspectable sources over generic marketing pages.

## 2. Core principles

The core principles of ATS optimization stem from the technical limitations of parsing software:
- Parsers extract text from uploaded files and map that text into structured candidate fields.
- Decorative layout elements increase the risk of missing or reordered extraction.
- Plain-text verification is an inexpensive way to catch extraction failures before applying.

## 3. Sources

- [Make your resume ATS-friendly (MIT CAPD)](https://capd.mit.edu/resources/make-your-resume-ats-friendly/) — Strong university source for avoiding tables, text boxes, graphics, and for using a plain-text test.
- [How to write an ATS friendly resume (Microsoft Create)](https://create.microsoft.com/en-us/learn/articles/how-to-write-ats-friendly-resume) — Supports single-column layouts, common fonts, and avoiding graphics or decorative formatting.
- [Resumes (Yale Office of Career Strategy)](https://ocs.yale.edu/channels/resumes/) — Provides ATS-formatted resume templates and institutional guidance on resume review workflows.
- [What is Resume Parsing and Why You Should be Using it (SmartRecruiters)](https://www.smartrecruiters.com/resources/glossary/resume-parsing/) — Explains resume parsing and gives concrete candidate-side formatting recommendations such as avoiding headers, footers, tables, and scanned PDFs.
- [Parse a resume (SmartRecruiters Developers)](https://developers.smartrecruiters.com/reference/candidatesresumeparse) — Official developer documentation showing that an unparseable resume can fail parsing, for example when the upload is an image.
- [Unsuccessful resume parse (Greenhouse Support)](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse) — Official support article confirming that formatting issues and oversized files can cause partial or failed parsing.
- [Plain Text Resume Parsing for Mobile Devices (Oracle Taleo)](https://docs.oracle.com/en/cloud/saas/taleo-enterprise/22d/otcug/c-plaintextresumeparsingmobile.html) — Official documentation showing that pasted plain text is parsed directly into candidate records.

---
