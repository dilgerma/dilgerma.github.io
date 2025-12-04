---
layout: docs
title: Episode 4 - Command-Event-State Patterns and Deconstructing Sagas
---

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 4 - Command-Event-State Patterns and Deconstructing Sagas</h1>
    <p class="blog-post-subtitle">Why simple command-event-state patterns outperform complex orchestration patterns like sagas</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 4</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EOPh8rTg_dA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin and Adam explore why keeping event sourcing implementations simple is more valuable than adopting complex patterns. They deconstruct the saga pattern, demonstrating how event modeling's basic command-event-state flow handles most distributed transaction scenarios without additional orchestration complexity. The discussion emphasizes that simplicity in architecture leads to more maintainable and understandable systems.

## Main Discussion Points

- **Simplicity Over Patterns**: The danger of pattern soup - adopting complex patterns like sagas, CQRS variations, and orchestration frameworks when simple command-event-state flows suffice
- **Saga Deconstruction**: How most saga use cases can be modeled as straightforward event-driven workflows using to-do list processors without dedicated saga frameworks
- **Event-Driven Choreography**: Natural workflow coordination through events and processors eliminates the need for centralized orchestration in most business scenarios
- **Command Handler Purity**: Keeping command handlers purely functional and side-effect-free, with all external interactions happening through events and processors
- **Pattern Resistance**: Why developers should resist the urge to adopt sophisticated patterns prematurely, focusing instead on the three basic event modeling building blocks
- **Boring Code Philosophy**: Embracing "boring" code that's straightforward and easy to understand over clever implementations that showcase technical prowess

## Key Takeaways

Event modeling's fundamental patterns - commands triggering events, events building state, and processors reacting to events - handle the vast majority of business scenarios without additional complexity. The saga pattern, while useful in specific distributed transaction contexts, is often unnecessarily applied to problems better solved through simple event choreography. Keeping implementations boring and predictable reduces cognitive load and makes systems more maintainable over time.

## Memorable Quotes

1. "We've made programming boring again" - Rob (quoted by Martin Dilger)
2. "Eventual consistency is almost a nonissue" - Workshop participant
3. "Test cases for processes should almost be unnecessary" - Workshop participant
4. "Don't use upcasters" - Workshop participant/Yordis
5. "If you test your command handlers and if you test your read models and if you test everything in your slice the processor is basically not doing too much" - Martin Dilger

## Key Learnings

1. Making programming "boring" through predictable patterns is a feature, not a bug - it creates reliability
2. Eventual consistency is rarely an actual problem in real-world systems; businesses are naturally eventually consistent
3. Events should contain only minimal information needed to show state changes, not redundant data
4. Upcasters centralize decision-making inappropriately; handling multiple event versions directly is more honest
5. The workshop format of 15-minute focused blocks with hands-on practice proved highly effective for learning

<div class="info-box" markdown="1">
### Ready to Learn More?

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**Join our [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"}** to get hands-on experience.
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
