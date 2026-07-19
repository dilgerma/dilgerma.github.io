---
layout: docs
title: Episode 47 - Agentic Modeling, Audit Trails, and the Fish Shell Effect
description: "Martin runs two AI agents modeling alongside him and unveils a skill that grills event models for unspecified gaps, while Adam explains why AI agents need"
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 47 - Agentic Modeling, Audit Trails, and the Fish Shell Effect</h1>
    <p class="blog-post-subtitle">Martin runs two AI agents modeling alongside him and unveils a skill that grills event models for unspecified gaps, while Adam explains why AI agents need an audit trail, not a snapshot — and why good tools always face the same resistance.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 47</span>
      <span>Episode 47 • Agentic Modeling, Audit Trails & Fish Shell Resistance</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/p7w38COHTZM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin lets two AI agents model alongside him at once — and it feels eerily like modeling with humans. He unveils a new "what do you think" skill that points an agent at an event model to hunt for unspecified gaps, and the hosts argue over how to tune it so it finds real gaps instead of flooding the model with noise. Along the way: why events give AI agents an audit trail instead of a snapshot, why screens keep getting wrongly dismissed as a "distraction," and why resisting a better shell is exactly like resisting event sourcing.

## Main Discussion Points

- **Two AI Agents Modeling Together** — Martin ran a Claude Code instance and a Hermes agent modeling alongside him simultaneously, adding slices and comments; he says it was indistinguishable from modeling with humans.
- **The "What Do You Think" Skill** — A new skill that points an agent at an event model, has it read through the slices, and post comments asking clarifying questions — like what should happen if a user clicks "clear cart" twice.
- **Tuning Against Over-Specification** — The first version flooded the model with 100 comments inventing hypothetical gaps; restricting the agent to only comment on what's actually present, without inventing scenarios, made it dramatically more valuable.
- **The Risk of Bloating a Slice** — Adam warns that an over-eager agent flooding a given-when-then list with edge cases can make a simple slice look far more complex than it really is, since event modeling is visual.
- **Specification by Example as the Real Insight** — Event modeling already solves the "infinite possibility tree" problem: draw a few representative example paths and trust the implementer to infer the rest, rather than trying to specify everything.
- **Events as an Audit Trail for AI Agents** — A LinkedIn post by Svet Angelov argues event sourcing is the right foundation for AI-assisted development because agents need an audit trail, not a snapshot, to trace and fix their own mistakes.
- **The Industry Is Rediscovering Old Ideas** — Posts about "good architecture makes you a dumb developer" and repeatable patterns are independently arriving at conclusions event modeling and event sourcing practitioners have lived by for a decade.
- **Screens Are Not a Distraction** — A domain-driven design community post "rediscovers" that showing users' screens carries real information; event modeling has always treated screens as legitimate, simple, information-only artifacts.
- **Golo Rhoden Confirmed for the Event Modeling Conference** — Announced as a speaker for the already sold-out conference, with a talk pitched at an audience that already knows event sourcing and event modeling well.
- **Fish Shell vs. Bash as a Tooling Metaphor** — Adam's switch to fish shell as his default, and the pushback he gets for it, mirrors the same "that's not how we work here" resistance event sourcing and event modeling face.

## The "What Do You Think" Skill In Action

> "He commented on the slice and asked: well, what happens if a user clicks this twice? What should be the behavior? This was a comment on the event model, right? And this is perfectly valid — a perfectly valid question." - Martin

## Agents Need an Audit Trail, Not a Snapshot

> "Agents need an audit trail, not a snapshot. Events are the truth, the full story, not just the current state. Read models are derived and disposable. If an agent goes sideways, follow the event trail, find the divergence, fix it, replay. No mystery, no data surgery." - Adam

## Tuning Out the Noise

> "I refined the skill and I said: don't just look at what is there — don't comment on something because it's not specified. Just look at what is there and make sense of it, then give me comments. And then it got significantly better." - Martin

## Gatekeeping by Architect Wannabes

> "That's why all the arguments about not having screens and design sessions is just gatekeeping by architect wannabes." - Adam

## Key Takeaways

1. **Agentic modeling feels like modeling with humans** — Running two AI agents alongside him in real time, Martin couldn't tell the difference from collaborating with people.
2. **A well-tuned gap-finding skill beats a flooding one** — Restricting an agent to comment only on what's actually present, instead of inventing hypothetical missing cases, turned 100 noisy comments into genuinely useful ones.
3. **Specification by example already solves the infinite-tree problem** — A handful of representative given-when-then paths lets developers infer the rest — the insight spec-driven development is still catching up to.
4. **Events give AI agents an audit trail, not a snapshot** — Immutable event logs let an agent's mistakes be traced, diffed, and replayed instead of debugged blind.
5. **Screens are information, not a distraction** — Event modeling has always treated UI as a legitimate part of the model; dismissing it as noise is gatekeeping in disguise.
6. **Repeatable patterns beat reinvented abstractions** — Event modeling gives teams an industry-wide shared vocabulary — command handlers, event handlers — instead of one-off, in-house conventions that don't scale across companies.
7. **Golo Rhoden joins the sold-out Event Modeling Conference** — Confirmed for a deep, assumed-knowledge talk aimed at an audience that already knows event sourcing.
8. **Resistance to better tools is never really about the tool** — Adam's fish-shell-vs-bash story stands in for the same "that's not how we do it here" resistance event sourcing and event modeling still face.

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
