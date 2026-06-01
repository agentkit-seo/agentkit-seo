# LinkedIn headline and About before and after

> Illustrative example built from the public [sample context file](../../agent-context-optimization/examples/renato-mignone-context-file-example.md). It shows the kind of output `agentkit-seo-linkedin` produces from verified facts. It is a worked illustration, not a ranking guarantee, and every "after" line traces back to a fact already present in the context file.

This example rewrites the two highest-leverage LinkedIn fields, the headline and the About section, for a cybersecurity security research engineer targeting security and research roles. The rules applied here come from [headline-strategy.md](../headline-strategy.md) and [about-section.md](../about-section.md).

## Headline

The headline travels with the name across search, comments, and the feed. The recipe is `[Target Role] | [Top 2-3 stacks] | [Impact or USP]`, with clean delimiters and no buzzwords.

**Before:**

```text
Passionate Cybersecurity Student | Tech Enthusiast | Always learning
```

**After:**

```text
Security Research Engineer | Post-Quantum Cryptography, Rust, AI for Security | Building quantum-resistant authentication at Huawei Data Privacy Lab
```

**Why:** The before headline uses banned filler ("Passionate", "Tech Enthusiast", "Always learning") that recruiters never search for and that wastes the most visible text on the profile. The after headline follows the Role + Stack + Impact formula, separates blocks with pipes, and ends on a concrete, verified current project. Every element is a fact in the context file.

## About section

The About section should open with a concrete positioning sentence, support it with specific proof, and avoid corporate buzzwords.

**Before:**

```text
I am a passionate and motivated person who loves technology and cybersecurity.
I am always looking to learn new things and improve my skills. I enjoy
working in teams and solving challenging problems. I am open to new
opportunities in the tech field.
```

**After:**

```text
Security research engineer and cybersecurity master's student (Politecnico di
Torino, GPA 29.48/30) working at the intersection of cryptography, AI, and
low-level systems security.

I currently research post-quantum anonymous authentication tokens at Huawei Data
Privacy Lab, implementing NIST PQC candidates and zero-knowledge proof
constructions in Rust. My recent project work includes:

- Discovering 5 local privilege-escalation vulnerabilities in the Linux 6.8 LTS
  kernel by bypassing the eBPF static verifier.
- Building AI threat-detection models reaching 97.5% network-flow and 98.1%
  malware API-call classification.
- Winning 1st place at the IEEE-HKN International Budget Hack 2025 as backend and
  security lead.

I am most interested in roles spanning applied cryptography, AI for security, and
systems security.

Proof: github.com/RenatoMignone · renatomignone.github.io
```

**Why:** The before section is entirely generic and contains no verifiable claim a recruiter can act on. The after section front-loads role and specialty, then supports it with precise, verified achievements and proof links. It keeps security claims at their exact scope and avoids the buzzwords the headline rules prohibit.

## What this example does not claim

- It does not promise reach or ranking; the LinkedIn feed and search are not guaranteed by copy alone.
- It does not invent metrics, titles, or employers. Each claim is copied from the verified context file.
- It uses the background "Open to Work" setting rather than an "actively seeking" tag in the headline, as the headline anti-pattern guidance recommends.

---

See also: [headline-strategy.md](../headline-strategy.md), [about-section.md](../about-section.md), and the [sample context file](../../agent-context-optimization/examples/renato-mignone-context-file-example.md).
