---
title: "X algorithm and ranking signals"
platform: "x-twitter"
objective: "Explains what is officially documented in the X open-source code versus what is inferred about Grok and the Phoenix update."
status: "review"
last_updated: "2026-04-24"
tags: ["algorithm", "open-source", "weights", "ranking"]
agent_priority: "high"
---
# X algorithm and ranking signals

> This file separates confirmed X (Twitter) ranking behavior found in the open-source codebase from inferred behavior related to Grok and the "Phoenix" updates.

---

## 1. Overview

X open-sourced major parts of its recommendation stack (`twitter/the-algorithm` and `twitter/the-algorithm-ml`), giving high-confidence visibility into the For You pipeline architecture and historical ranking signals. Later snapshots (such as `xai-org/x-algorithm`) provide additional architectural detail, but should not be assumed to be a full, immutable mirror of live production.

When optimizing content, prioritize documented architecture and official platform documentation first. Treat tactical creator heuristics as testable hypotheses, not guaranteed ranking laws.

## 2. The historical baseline (Heavy Ranker)

The values below are historical examples from the 2023 open-source release and are most useful as directional priors. They should not be treated as guaranteed live constants.

**Rule:** Optimize for conversation depth and dwell time, not just likes.

- **Reply Engaged by Author (~75.0):** Historically one of the strongest positive signals.
- **Reply (~13.5):** A strong conversational signal.
- **Good Profile Click (~12.0):** Profile visit and downstream engagement.
- **Good Click / Dwell (~11.0):** Conversation click with meaningful dwell.
- **Retweet (~1.0):** Positive but lower than deep conversation.
- **Favorite / Like (~0.5):** Positive but comparatively low signal.

**Rule:** Avoid negative feedback signals.
- **Report (~-369.0):** Historically a severe negative outcome.
- **Negative feedback (~-74.0):** "Show less often," mute, and block events.

## 3. SimClusters and Two-Tower Retrieval

X sources out-of-network content using a mix of embedding models.

**Rule:** Stay in your lane to maximize out-of-network reach.
Historically, SimClusters modeled community affinity from follow and engagement graphs. More recent architecture snapshots describe Two-Tower retrieval (User Tower + Candidate Tower) for semantic matching. Strategic takeaway: strong topical consistency generally improves retrieval quality and out-of-network fit.

## 4. The current architecture (Phoenix and Grok)

Recent public architecture snapshots describe a Phoenix pipeline with:

- In-network and out-of-network candidate sourcing.
- Multi-action prediction and weighted scoring.
- Author diversity scoring to avoid feed monotony.
- Filtering layers for policy, safety, duplication, and user preferences.

These are useful high-confidence design signals, but not a full public contract for every live ranking behavior.

**Not publicly documented as deterministic rules:**

- A universal penalty for external links.
- A strict sentiment-only rule that dictates distribution.
- Exact posting-frequency thresholds that trigger suppression.

**Recommendation:** Use controlled A/B tests for contested tactics (for example, inline links vs first-reply links), and prefer clear, value-dense posts over engagement bait.

**Rule:** Pace posts to reduce self-competition in the same feed session.

## 5. Examples

Good example:
```text
<!-- CORRECT: optimized for replies and conversation depth -->
We migrated our entire backend from Node.js to Go last month. Memory usage dropped by 60%, but the developer learning curve was steeper than expected.

Has your team attempted a similar migration? What was the hardest part?
```

Bad example:
```text
<!-- WRONG: optimized for low-value likes and engagement bait -->
10 tools every developer needs. Like and bookmark this right now!
```

## 6. Anti-Patterns

### The Like-farming thread

**What it looks like:** "10 tools you need. Like and bookmark this!"
**Why it fails:** Historically, likes were much lower-weight than replies and conversation depth.
**What to do instead:** End the thread with a specific, open-ended question to invite substantive replies, then continue the discussion in follow-up responses.

---
