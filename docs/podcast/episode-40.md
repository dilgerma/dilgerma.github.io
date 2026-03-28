---
layout: docs
title: Episode 40 - Workshop Reflections, Event Sourcing in SQL, and Git as an Event Store
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 40 - Workshop Reflections, Event Sourcing in SQL, and Git as an Event Store</h1>
    <p class="blog-post-subtitle">Martin and Adam reflect on a recent 4-day workshop, then explore technical territory: storing events in SQL, using Git as an event store with orphan branches, and the limits of SQL indexing for temporal data.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 40</span>
      <span>Episode 40 • Workshop, SQL Event Sourcing & Git as Event Store</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/W1lCoY23XW8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

After reflecting on a recent 4-day event modeling and event sourcing workshop, Martin and Adam dive deep into storing events in relational SQL databases, using Git as an event store, DCB with Git tags, and what Google Trends reveals about event sourcing's resurgence.

## Main Discussion Points

- **Workshop Retrospective** — Reflections on a 4-day workshop split between event modeling (2 days) and event sourcing (2 days); challenges mixing beginners with experienced practitioners
- **Workshops as the Start of a Journey** — A workshop on event modeling is like a class on riding a bike — it starts you on the path; real expertise comes from years of practice
- **Unlearning CRUD Patterns** — The core mental shift: moving from coupled persistence-layer thinking to a world where the event store is the single source of truth
- **Event Sourcing in SQL** — Detailed exploration of modeling an event store with relational tables; one table per event type plus a master ordering table; cross-table indexing challenges
- **Temporal Limits of SQL** — SQL's indexing model is fundamentally poor for temporal/time-series queries; tracking "all open orders" requires materialised views or external indexes
- **Git as an Event Store** — Martin's experiments using Git with orphan branches as streams; using `git log -S` (pickaxe search) for blazing-fast event type queries
- **Git Tags as DCB Markers** — Using Git tags as stationary pointers to implement Decider-style Causal Boundary (DCB) concepts
- **Event Sourcing Resurgence** — Google Trends shows event sourcing interest is climbing to new highs driven by AI spec-driven development
- **Mixed Workshop Audiences** — Experienced attendees came looking for edge cases; beginners needed foundational concepts — a useful but challenging dynamic

## Workshops as the Start of a Journey

> "You have to unlearn many years of previous patterns. Think of a half-hour class on learning to ride a bike — the workshop's not going to teach you to ride the bike." - Adam

## Git as an Event Store

> "Git log -S — the pickaxe search — is blazing fast. You can search a million commits within the blink of an eye." - Martin

## The Dysfunction of the Industry

> "The dysfunction of the industry — I can't see how they're going to have AI magically solve inherently bad practices." - Adam

## Key Takeaways

1. **Workshops start the journey, not complete it** — Real expertise comes from years of practice beyond the workshop
2. **CRUD unlearning is the hardest challenge** — The core mental shift takes time; workshops begin but don't complete the process
3. **SQL is fundamentally limited for event sourcing** — Temporal/time-series queries require materialised views or external indexes
4. **Git is a surprisingly capable event store** — Orphan branches as streams, pickaxe search for blazing-fast queries
5. **Git tags enable DCB-style consistency** — Stationary pointers implement Decider-style Causal Boundary concepts
6. **Event sourcing interest is resurging** — Google Trends shows climbing interest driven by AI spec-driven development
7. **Mixed audiences create productive tension** — Experienced and beginner attendees challenge each other productively
8. **Community discussion drives real learning** — Shared exploration of edge cases builds deeper understanding

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

Read the full blog post: [The Future Doesnt Need Your Perfect Code]({{ "/docs/blog/future-doesnt-need-perfect-code" | relative_url }})

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ "/docs/event-modeling-tutorial" | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning &rarr;](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>