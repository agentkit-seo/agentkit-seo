# GitHub profile before and after

> Illustrative example built from the public [sample context file](../../agent-context-optimization/examples/renato-mignone-context-file-example.md). It shows the kind of output `agentkit-seo-github` produces from verified facts. It is a worked illustration, not a ranking guarantee, and every "after" line traces back to a fact already present in the context file.

This example optimizes three GitHub surfaces for hiring and search visibility: the profile bio, the profile README, and repository packaging. The rules applied here come from [GitHub section recipes](../../../.skills/agent-skill/agentkit-seo-github/references/section-recipes.md) and [profile-readme.md](../profile-readme.md). The persona is a cybersecurity master's student and security research engineer; the target audience is security and software hiring managers.

## Profile bio

The bio field is limited to 160 characters and should read as `Role | Stack | Location or Remote`.

**Before:**

```text
CS student. Passionate about tech and security. Always learning new things!
```

**After:**

```text
Security Research Engineer | Post-quantum crypto, eBPF, AI for security | MSc Cybersecurity @ PoliTo | Düsseldorf
```

**Why:** The before line spends the most valuable text in the profile on fluff ("Passionate", "Always learning") that recruiters do not search for. The after line leads with the current role, names three central specialties that double as search keywords, and states location, following the `Role | Stack | Location` recipe. Every claim is verified in the context file.

## Profile README

The README should front-load the strongest keywords, use real Markdown headings, and keep evidence-backed projects above decorative cards.

**Before:**

```text
# Hi there

Welcome to my GitHub! I'm a passionate developer who loves coding and
cybersecurity. I enjoy working on cool projects and learning new technologies.
Feel free to look around!

![stats](https://github-readme-stats.example/api?username=user)
```

**After:**

```text
# Renato Mignone

Security research engineer and cybersecurity master's student working on
post-quantum cryptography, AI for security, and low-level systems security.
Currently researching quantum-resistant anonymous authentication tokens at
Huawei Data Privacy Lab.

## Focus areas

- Post-quantum cryptography, zero-knowledge proofs, and OPRFs
- AI and machine learning for threat detection
- Linux kernel and eBPF security, network and hardware security

## Featured projects

- Linux eBPF verifier bypass research: 5 confirmed local privilege-escalation
  vulnerabilities in the Linux 6.8 LTS kernel, with working proofs of concept.
- AI-driven threat detection: multi-model defence suite reaching 97.5% network-flow
  and 98.1% malware API-call classification.
- SoftEther VPN Guardian: dual-protocol enterprise VPN lab (IPsec and TLS) validated
  with Wireshark packet forensics.

## Contact

- LinkedIn: linkedin.com/in/renato-mignone
- Portfolio: renatomignone.github.io
```

**Why:** The before README buries identity behind a generic greeting and lets a stats card stand in for explanation. The after README opens with the name and a keyword-rich summary paragraph, uses real headings, and leads with three projects whose results are stated precisely and are all present in the context file. Security claims keep their exact scope (for example "5 confirmed" vulnerabilities) rather than amplifying impact.

## Repository packaging

For a featured repository, set concrete About text and accurate topics instead of leaving them empty.

**Before:**

```text
About: personal project
Topics: (none)
```

**After:**

```text
About: ML and NLP pipeline classifying ~230,000 honeypot SSH sessions into MITRE
ATT&CK attacker-intent categories.
Topics: machine-learning, nlp, cybersecurity, mitre-attack, bert, honeypot, python
```

**Why:** "Personal project" tells a recruiter or GitHub search nothing. The after About text front-loads what the project is and the scale of the dataset, and the topics include the core language, the technique, and the domain, which is what the recipe asks for.

## What this example does not claim

- It does not promise a search-ranking position; GitHub search and the feed are not guaranteed by copy alone.
- It does not invent metrics. Each number is copied from the verified context file.
- It does not add `AGENTS.md` guidance, because these repositories are showcase projects rather than agent-facing codebases.

---

See also: [profile-readme.md](../profile-readme.md), [repository-seo.md](../repository-seo.md), [section recipes](../../../.skills/agent-skill/agentkit-seo-github/references/section-recipes.md), and the [sample context file](../../agent-context-optimization/examples/renato-mignone-context-file-example.md).
