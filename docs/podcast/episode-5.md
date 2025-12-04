---
layout: docs
title: Episode 5 - Workshop Lessons: Simplicity, Boring Code, and Upcast Patterns
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 5 - Workshop Lessons: Simplicity, Boring Code, and Upcast Patterns</h1>
    <p class="blog-post-subtitle">Key learnings from a hands-on workshop including the dangers of upcasts and the value of simple patterns</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 5</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/W7mpfjW7nhw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Fresh from conducting a hands-on workshop, Martin and Adam share critical insights about event sourcing implementation patterns. They make a strong case against using upcasters for event schema evolution, explaining how this seemingly convenient pattern creates technical debt and complexity. The discussion reinforces the value of keeping implementations simple and boring rather than clever.

## Main Discussion Points

- **The Case Against Upcasters**: Why transforming old event versions to new schemas during reads creates hidden complexity and makes debugging difficult
- **Event Schema Evolution**: Better strategies for handling event schema changes over time, including weak schema approaches and additive-only changes
- **Workshop Format Success**: How the concentrated 15-minute block format kept participants engaged and maximized learning outcomes
- **Boring Code Wins**: Reinforcing that straightforward, predictable code is more valuable than showcasing technical sophistication
- **Hands-On Learning Value**: Why workshops with actual implementation exercises reveal patterns and anti-patterns that reading alone cannot teach
- **Pure Command Handlers**: Maintaining functional purity in command handlers by avoiding side effects and keeping all I/O in processors

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Upcasters represent a tempting shortcut for event schema evolution but create long-term maintenance problems by hiding transformations in the read path. Better approaches include accepting weak schemas, making only additive changes to events, or creating new event types when needed. Workshop participants consistently discover that the simplest patterns - boring, predictable code - lead to the most maintainable systems. The hands-on format reveals implementation pitfalls that theoretical discussions miss.

## Memorable Quotes

1. "Keep patterns simple and boring - everybody was talking about how important it is to keep things simple to not put any logic into the command Handler" - Martin Dilger
2. "Don't over engineer for scale - most systems don't need complex solutions for eventual consistency or high performance" - Workshop participant
3. "We are solving the problems business has solved decades ago" - Chris Condren
4. "It's so much easier to think about all these single process steps in the timeline than to think about this big bloated thing that coordinates or orchestrates process" - Martin Dilger
5. "For almost 10 years now our company's been around I've been doing this since 2008 this problem [eventual consistency] is not a problem" - Adam Dymitruk

## Key Learnings

1. Avoid reusing read models - create separate purpose-built read models instead of sharing them across workflow steps
2. Duplicate lookup tables per context (e.g., separate product lookups for cart vs invoice) to reduce coupling
3. Sagas can be deconstructed into simple automation steps (processors) visible in event models
4. The five biggest workshop learnings: keep patterns simple, don't over-engineer, avoid reusing read models, keep events minimal, model in business language
5. Infrastructure code in event sourcing rarely changes and doesn't need frequent testing - focus testing on business logic

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
