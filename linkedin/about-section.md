---
title: "LinkedIn About section"
platform: "linkedin"
objective: "Constraints for writing the About section, focusing on first-person perspective, defining the Ideal Role, and keyword injection."
status: "draft"
last_updated: "2026-04-23"
tags: ["linkedin", "about", "storytelling", "llm"]
agent_priority: "high"
---

# LinkedIn About section

> This file defines the constraints for the About section, which must function as both a compelling human-readable narrative, a keyword-rich document for LLMs, and a hook for profile Dwell Time.

---

## 1. Overview

The About section is the core of the profile's semantic map. While the headline acts as the hook, the About section provides the context and evidence required by both human recruiters and AI qualification agents. It must clearly articulate the problems you solve, the tools you use, and the specific role you are targeting, while keeping the reader engaged to boost internal algorithm ranking.

## 2. Content constraints

**Rule:** Write in the first person.
LinkedIn is a professional networking platform, not a formal CV. Do not write in the third person (e.g., "Alex is a senior developer"). Use "I" to establish a direct, conversational tone.

**Rule:** Clearly define your "Ideal Role" and target audience.
State explicitly who you are trying to help or what roles you are seeking. LLM agents parse this section to qualify candidates against job descriptions; explicit matching language (e.g., "I am currently targeting Senior Backend Engineer roles") drastically improves classification accuracy.

**Rule:** Inject LLM-friendly keywords naturally.
Do not use a comma-separated list of technologies. Write complete, context-rich sentences that incorporate your primary tools and frameworks to satisfy "Reasoning-Based Matching." 

**Rule:** Include a clear Call to Action (CTA).
End the section by telling the reader exactly what to do next (e.g., "Feel free to DM me to discuss distributed systems, or reach out at email@example.com").

## 3. Formatting rules

**Rule:** Design for profile Dwell Time.
The 360brew algorithm tracks how long a user stays on your profile as a primary quality signal. Use a strong opening hook in the first two sentences to force the user to click "see more." Break up the text into readable chunks (no more than 3-4 sentences per paragraph) and use bullet points to keep the reader engaged all the way to the end.

**Rule:** Use short paragraphs and bullet points.
Large walls of text are ignored by human readers and can sometimes confuse rudimentary parsers. Break up the text into readable chunks (no more than 3-4 sentences per paragraph) and use bullet points for key achievements or technical stacks.

## 4. Examples

Good example:
```text
<!-- CORRECT: Strong hook for Dwell Time, first-person, clear focus, quantifiable impact, and CTA -->
I build resilient, scalable cloud infrastructure that does not wake engineers up at 3 AM. Over the past 5 years, I have focused on automating deployment pipelines and migrating legacy monolithic systems to Kubernetes.

My core expertise lies in designing GitOps workflows using ArgoCD and Terraform on AWS, which recently helped my team reduce average deployment times by 40% while maintaining 99.99% uptime.

I am currently open to Senior Site Reliability Engineer (SRE) or Platform Engineering roles. 

Let's connect! Feel free to DM me here or reach out at email@example.com.
```

Bad example:
```text
<!-- WRONG: Third-person, buzzwords, no formatting to support Dwell Time, no CTA -->
John is an innovative, passionate, and results-driven professional with a proven track record of success in the technology sector. He excels at synergizing cross-functional teams to deliver impactful solutions that drive business growth. 

Skills: Python, Java, C++, HTML, CSS, SQL, AWS, Azure, Agile, Scrum, Leadership.
```

---

*Next step: Build your visual portfolio in the [Featured section](./featured-section.md).*
