---
layout: docs
title: Episode 13 - Slice Architecture Prevents Coupling
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 13 - Slice Architecture Prevents Coupling</h1>
    <p class="blog-post-subtitle">Deep discussion on what defines a slice and why preventing coupling is more important than following traditional DRY principles</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 13</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7MPi2PqTuME" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

With a nod to Vanilla Ice, Martin and Adam deep-dive into slice architecture, exploring what truly defines a slice and why vertical isolation matters more than code reuse. They challenge traditional DRY (Don't Repeat Yourself) principles, arguing that some duplication prevents harmful coupling. The discussion reveals how slice-based architecture enables independent development and deployment.

## Main Discussion Points

- **Defining Slices**: What constitutes a proper slice - one vertical workflow step with its complete implementation stack from UI to persistence
- **Coupling vs DRY**: Why preventing coupling between slices is more valuable than eliminating all code duplication
- **Strategic Duplication**: When duplicating code across slices actually improves maintainability by preventing shared dependencies
- **Independent Deployment**: How slice isolation enables deploying individual features without coordinating with other teams
- **Slice Boundaries**: Determining where to draw slice boundaries - at what granularity do you split functionality
- **Shared Kernels**: When some sharing is appropriate (domain events, infrastructure) versus when it creates problematic coupling

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Slice architecture prioritizes decoupling over code reuse, challenging the traditional DRY principle when it creates shared dependencies. A slice encompasses one complete workflow step with everything needed for that feature - UI components, command handlers, event processors, and projections - isolated from other slices. Some code duplication across slices is acceptable and even desirable when it prevents coupling that would force coordinated deployments. The autonomy gained from slice isolation outweighs the maintenance cost of duplicated code, especially as teams scale.

## Memorable Quotes

1. "Sagas are a strange thing for me" - Martin
2. "The biggest problem that that saga's um bring in is that they open this kind of temporary or secondary timeline so they have their own timeline which makes it really really hard to reason about the system" - Martin
3. "I would rather have um if given the choice uh to have an extra event that says oh by the way the exceptional case where there is hotels where you still can smoke in a room I'm going to make a special event for that" - Adam
4. "Looking at just um information flow and having just State views you can clearly uh not worry about getting the right detail right" - Adam
5. "Any zaga no matter how big it is can be broken down into just a few processes in order that it it always works" - Martin

## Key Learnings

1. Sagas create secondary timelines that make systems harder to reason about - they should be avoided in favor of simple processors and state views
2. Instead of using nullable fields in events, create optional additional events that can be present or absent, keeping core events simple
3. Event modeling's timeline approach helps avoid the "pipeline thinking" trap where information must be funneled through intermediate stages
4. Any saga can be decomposed into simpler processes by following the information flow on the event model timeline
5. Multi-tenancy differences should be modeled as separate slices only for the workflows that differ, not forcing all slices to accommodate all tenant variations

<div class="info-box" markdown="1">
### Ready to Learn More?

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices on January 20/21, 2026](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
