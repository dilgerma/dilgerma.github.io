---
layout: docs
title: Episode 46 - Crud Forms, Hidden Coupling, and the Schema Migration Myth
description: "Martin and Adam tackle crud forms, why upcaster functions hide coupling, and why event sourcing schema migration isn't the unsolved problem critics claim."
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 46 - Crud Forms, Hidden Coupling, and the Schema Migration Myth</h1>
    <p class="blog-post-subtitle">Martin and Adam tackle the eternal crud-form question, why upcaster functions are a sneaky form of hidden coupling, and why claiming event sourcing schema migration is "unsolved" ignores the stack of band-aids traditional migrations run on.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 46</span>
      <span>Episode 46 • Crud Forms, Event Versioning & the Schema Migration Myth</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Bfvp7mueMOM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

After a running joke about Germany's 4-day internet outage, Martin and Adam dig into one of the most recurring questions they get: should a big, nasty crud form become one giant event or many? That leads straight into event versioning — why centralized upcaster functions are hidden coupling in disguise, and how Axon Framework v5's dynamic converters validate the per-projection approach they've already been using. They close by tearing into a LinkedIn take that "event sourcing schema migration is an unsolved problem," calling traditional migration tooling a stack of band-aids over a dysfunction nobody actually cured.

## Main Discussion Points

- **The Evergreen Crud Form Question** — One of the most recurring questions they get: should submitting a large, multi-section form produce one giant event or several domain events?
- **Design for UX, Not Domain Purity** — Expanding a section, filling it out, and collapsing it is itself an event; you don't need to be a domain expert, just think about the user's cognitive load section by section.
- **Wizards Work the Same Way** — Multi-step wizards can be treated as automation performed by a human, tracked by the same kind of to-do-list read model a saga would use.
- **Avoid the Other Extreme Too** — A single command exploding into fifteen events is just as much an anti-pattern as one 300-field mega-event.
- **Events Capture a Decision, Not All the Data** — Large blobs, documents, or images should be stored elsewhere with the event holding a reference back to them, git-style.
- **Giant Events Are Coupling Through the Back Door** — When dozens of slices depend on the same sprawling event, adding one field turns into a breaking change for everyone.
- **Upcaster Functions Are Hidden Coupling** — A single global function deciding how every old event version gets transformed is a centralized decision that violates their own "don't repeat yourself" rhetoric.
- **Per-Projection Converters, Credit to Yordis** — Each read model should decide for itself how to interpret an old event version instead of relying on one shared upcaster.
- **Axon v5 Validates the Pattern** — Axon Framework's new dynamic converters attach per-event, letting each projection request whichever version it needs.
- **The "Solved Problem" Pushback** — A LinkedIn argument claimed event sourcing schema migration kills adoption because migrations are unsolved; Martin and Adam call traditional migration tooling a stack of band-aids, not a cure.

## Design for the User's Cognitive Load, Not Domain Purity

> "The true spirit of this complex form is going through it a section at a time... don't try to be a domain expert, be a UX expert as to what the human needs to attain when they're looking at a wall of blank fields." - Adam

## Neither One Mega-Event Nor Fifteen Tiny Ones

> "What I also don't like is you have this one command and then you have 15 events coming out of that. That's also not a good pattern. So it fully depends on what you're doing." - Martin

## Upcasters Are a Global Decision Disguised as Infrastructure

> "Upcaster functions... that is a form of coupling because the way I want to translate the absence of a date of birth actually is on the responsibility of the individual read models or projections that I have. Huge shout out to Yordis for pushing us on our own rhetoric about don't repeat yourself." - Martin / Adam

## Schema Migration Is Not a Solved Problem — It's a Thousand Band-Aids

> "It's a solved problem with a trap. It's a solved problem with like a thousand band-aids. If you ever saw a soccer ball that's been kicked around for 10 years in a family and it has duct tape basically replaced the leather — band-aid over band-aid is what they're talking about." - Adam

## Key Takeaways

1. **Big form submissions should mirror UX sections, not become one giant event** — treat each expand/fill/collapse step, or wizard step, as its own event.
2. **Don't over-correct into fifteen events per command either** — one command exploding into a pile of granular events is its own anti-pattern.
3. **Events capture a decision, not necessarily all the data behind it** — large blobs and documents belong in dedicated storage, referenced from the event.
4. **Sprawling multi-field events create coupling through the back door** — when many slices depend on one giant event, adding a field becomes a breaking change for everyone.
5. **Upcaster functions centralize a decision that isn't yours to make globally** — each projection should decide for itself how to interpret an old event version.
6. **Axon Framework v5's dynamic converters validate the per-projection approach** — converters attach per event so each projection pulls whichever version it needs.
7. **Traditional schema migration tooling is a stack of band-aids, not a cure** — Flyway- and Liquibase-style tools manage the dysfunction; they never remove it.
8. **Event-sourced systems make rollbacks and shifting requirements dramatically cheaper** — you're not stuck reconciling new-schema data against an old schema after a bad deploy.

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
