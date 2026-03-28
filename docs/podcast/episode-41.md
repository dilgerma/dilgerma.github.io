---
layout: docs
title: Episode 41 - Reverse Engineering Legacy Code With AI Browser Automation
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 41 - Reverse Engineering Legacy Code With AI Browser Automation</h1>
    <p class="blog-post-subtitle">Martin ran Claude Code for 40 straight hours on a 1.2-million-line legacy codebase — then discovered that pointing an AI agent at the UI with MCP browser automation produced far better results. This episode covers the full legacy analysis strategy.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 41</span>
      <span>Episode 41 • Legacy Analysis, AI Browser Automation & Event Model Extraction</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0Gt49AeHczE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin shares his experience running Claude Code on a 1.2-million-line codebase for 40 hours (~$500 in API costs), then discovering that browser automation via MCP produced far better event models. The full strategy: overlay event models from UI automation, database deltas, code analysis, and documentation.

## Main Discussion Points

- **40-Hour AI Legacy Analysis** — Martin ran Claude Code on a 1.2M-line codebase for ~40 hours, burning ~40 million tokens (~$500); the code-based event models were okay but not great
- **Browser Automation as the Better Approach** — Pointing Claude Code via MCP at the legacy UI and saying "explore this and build an event model" dramatically outperformed static code analysis
- **UI Screenshots → Event Model** — Feed browser automation screenshots directly into the event model: commands from buttons, read models from data displays, events inferred from state changes
- **Database Delta Watching** — Sandwich UI automation with database snapshot diffing: if a "navigation" click causes DB writes, it reveals a hidden command disguised as a read
- **Multi-Angle Legacy Analysis** — The most robust strategy overlays event models from: UI automation, database deltas, codebase analysis, and documentation; gaps reveal technical debt
- **Documentation Correlation** — Using Git history and wiki page timestamps to determine whether documentation predates or follows implementation; stale docs actively mislead
- **Local GPU Inference Economics** — Adam runs smaller models on his own GX10 hardware; Martin has three Spark machines; local vs. cloud inference tradeoffs
- **Event Model JSON as the Specification** — Reiterating that the Miro JSON export is already the complete AI-ready specification; no translation layer needed
- **Work Shifting to Higher Abstraction** — Industry catching up to what event modeling practitioners knew: "the spec is the thing, not the code"
- **Open Agent Orchestration** — Discussion of open-source agent orchestration frameworks; both using MCP browser automation

## Browser Automation as the Better Approach

> "I just pointed Claude Code using an MCP server to this UI. I didn't tell it anything. Just said: go to this UI, find out what this thing is doing, and build an event model from that. It worked like a charm." - Martin

## The Spec Is the Thing

> "Code is no longer the thing. It's the spec. Oh, really? Interesting. Thanks for telling us what we knew for many many years." - Adam

## Lessons No Longer Apply

> "The lessons you learned from before AI no longer apply — just like lessons you learned for CRUD don't apply to event sourcing. It's the same thing." - Martin

## Key Takeaways

1. **Browser automation beats static code analysis for legacy** — Pointing an AI agent at the UI dramatically outperforms 40 hours of static code analysis
2. **Database deltas reveal hidden commands** — Snapshot diffing exposes navigation clicks that secretly write to the database
3. **Multi-angle overlay produces the most complete event model** — UI automation + database deltas + code analysis + documentation fill each other's gaps
4. **Stale documentation actively misleads** — Git history and timestamps reveal whether docs predate or follow implementation
5. **~$500 for 1.2M LOC analysis is affordable** — The economics of AI-powered legacy analysis are increasingly viable
6. **Event model JSON is already AI-ready** — The Miro JSON export is the complete specification; no translation layer needed
7. **Local GPU inference is becoming viable** — GX10 hardware runs smaller models competitively against cloud inference
8. **The spec is the new source of truth** — Industry is catching up to what event modeling practitioners knew for years

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** on March 16/17 — learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning &rarr;](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>