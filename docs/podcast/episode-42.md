---
layout: docs
title: Episode 42 - Coupling, Event Sourcing Books, and Why Event Storming Missed the Point
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 42 - Coupling, Event Sourcing Books, and Why Event Storming Missed the Point</h1>
    <p class="blog-post-subtitle">Martin and Adam explore coupling mechanics in event-sourced systems, discuss their books in progress, and react to the event storming community's rediscovery that sticky note photos feed AI better than markdown.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 42</span>
      <span>Episode 42 • Coupling Theory, Event Sourcing Books & Event Storming vs Event Modeling</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7l98sdONWq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

The event storming community runs an experiment showing sticky note photos beat markdown for AI prompting. Martin and Adam aren't surprised — they've been using structured event model JSON for 18 months. Deep dive into why coupling through an immutable event store is the healthiest form of coupling, plus updates on both hosts' event sourcing books.

## Main Discussion Points

- **Event Storming Rediscovers AI Photo Prompting** — Event storming community found photos of sticky notes give better AI results than markdown; the hosts have been using structured JSON with better results for 1.5 years
- **Event Modeling Survives Technological Turmoil** — Unlike JavaScript frameworks, event modeling is a convention that has remained applicable through every shift in tooling
- **Why Event Sourcing Improves AI Accuracy** — Given-when-then specs give AI a precise structure to target; fully spec'd event sourcing slices outperform photo prompting
- **The Healthy Form of Coupling** — Coupling through an immutable event store is qualitatively different: it creates an auditable, temporally precise record of when and how two concepts were related
- **Temporal Coupling Bugs** — Hidden coupling that changes over time is invisible in traditional systems but explicit in event store versioning
- **Martin's Event Sourcing Book Version 2** — Stronger focus on slices — the concept readers consistently struggle to fully grasp
- **Adam's Book in Progress** — Adam is on chapter 5; how to explain coupling benefits in business-language terms
- **Stopping Short of Event Sourcing** — Many teams use events for pub/sub (like Redux) but stop short of using them as primary state storage; this misses the core benefits
- **Event Sourcing Adoption Curve** — Community resistance in early years (downvoted at event storming summit in 2018); now seeing mainstream momentum
- **Slice Independence as Missing Mental Model** — The hardest concept: how independently-implemented slices form a coherent system without shared abstractions

## Event Storming Rediscovers AI Photo Prompting

> "Event storming: they realized it's a good idea to use event storming and take photos from the sticky notes and give it to AI — the results were much better than prompting or writing markdown. I was not surprised at all." - Martin

## The Healthy Form of Coupling

> "The immutable event store makes that the healthiest form of coupling you can possibly get — because you have the audit on what was coupled at what time to do whatever you wanted." - Adam

## Slices Are the Hardest Concept

> "People read the book, they really like it, but they don't really get the idea of slices. The core idea of it all is slices and breaking things down. This is where people really struggle." - Martin

## The Code Is No Longer the Source of Truth

> "The code is no longer the ultimate source of truth — because only developers read the code and so your source of truth is horrible, it creates a bottleneck." - Adam

## Key Takeaways

1. **Structured JSON beats photo prompting for AI** — 18 months of using event model JSON produces better results than sticky note photos
2. **Event modeling conventions outlast all tools** — Unlike JavaScript frameworks, event modeling applies through every shift in tooling
3. **Given-when-then specs enable accurate AI generation** — Precise structure gives AI a clear target; outperforms photo prompting
4. **Immutable events are the healthiest coupling** — Creates an auditable, temporally precise record of all relationships
5. **Temporal coupling bugs are only visible in event stores** — Hidden coupling that changes over time is invisible in traditional systems
6. **Slices are the hardest concept to teach** — The core idea readers most consistently struggle to fully grasp
7. **Redux-style pub/sub misses event sourcing benefits** — Using events only for pub/sub stops short of the primary state storage benefit
8. **Event sourcing is reaching mainstream adoption** — From downvotes in 2018 to mainstream momentum today

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