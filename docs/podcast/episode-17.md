---
layout: docs
title: Episode 17 - Dynamic Consistency Boundaries Transform Event Sourcing
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 17 - Dynamic Consistency Boundaries Transform Event Sourcing</h1>
    <p class="blog-post-subtitle">Revolutionary changes to event sourcing fundamentals by introducing dynamic consistency boundaries that adapt at the command handler level</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 17</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/i_xPWdwQKPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

Martin and Adam discuss the revolutionary concept of dynamic consistency boundaries being developed by Axon Framework. This fundamentally changes how developers think about aggregates and transactional boundaries in event sourcing. Instead of fixed aggregate boundaries defined at design time, consistency boundaries can adapt based on the specific command being processed.

## Main Discussion Points

- **Dynamic Boundaries Explained**: How consistency boundaries can change dynamically based on command requirements rather than being fixed aggregate boundaries
- **Destroying the Aggregate**: Why the traditional aggregate pattern may be too rigid for complex business scenarios
- **Command-Level Flexibility**: How different commands might require different sets of events to validate business rules
- **Implementation Approaches**: How frameworks like Axon are exploring implementations of dynamic consistency boundaries
- **Event Volume Management**: Addressing concerns about loading too many events by being selective about what each command handler needs
- **Backwards Compatibility**: How this revolutionary change can coexist with traditional aggregate approaches

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Dynamic consistency boundaries represent a paradigm shift in event sourcing architecture, moving away from rigid aggregate patterns toward flexible command-specific consistency requirements. This allows business rules to span whatever event history they need without artificial aggregate boundary constraints. The approach promises to solve many awkward scenarios where business logic doesn't fit neatly into traditional aggregate boundaries. While still evolving in framework implementations, the concept challenges developers to rethink fundamental assumptions about event sourcing architecture.

## Memorable Quotes

1. "Everything is a reducer so uh when when I build systems I use metric a lot I I basically have metrics for everything" - Martin Dilger
2. "The command Handler and the the read model the queries in that way it sounds very very interesting to me because I I worked on on my on my course uh this week and I'm I'm not using any framework at all like you do in in your project here and I I recognized exactly the same pattern you do the same thing in the command Handler as you do in the in the read model it's exactly the same thing exactly the same code" - Martin Dilger
3. "I don't want a function I actually want a command object and I want a function that processes the command" - Adam Dymitruk
4. "It's getting more boring it's getting more boring every week we work on this" - Adam Dymitruk
5. "We're making taking the fun out of uh taking the fun out of software being a Rubik ski you solve" - Adam Dymitruk

## Key Learnings

1. Dynamic consistency boundaries apply to both read and write sides, enabling more flexible and performant systems
2. Command handlers and read models share the same fundamental pattern - both use reducers for hydration
3. Event handlers can be structured as objects containing collections of smaller event-specific handlers rather than monolithic functions
4. AI code generation works better with consistent, predictable patterns across all slices
5. Simplifying infrastructure patterns makes systems more maintainable and reduces cognitive load for developers

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
