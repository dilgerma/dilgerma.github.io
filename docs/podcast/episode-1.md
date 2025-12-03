---
layout: docs
title: Episode 1 - Destroying the Aggregate
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 1 - Destroying the Aggregate</h1>
    <p class="blog-post-subtitle">Adam and Martin introduce their podcast, discuss Martin's new book, and explore the emerging concept of dynamic consistency boundaries</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 1</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/L9FSmSaQWuQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Adam and Martin introduce their new podcast on event modeling and event sourcing, discussing Martin's newly released book that combines both concepts. They explore why event sourcing matters for data preservation and discuss the emerging concept of "dynamic consistency boundaries" that challenges traditional aggregate patterns in event sourcing.

## Main Discussion Points

- **Martin's Book Launch**: The book on event modeling and event sourcing reached #2 on LeanPub within days of launch, demonstrating strong demand for practical guidance in this space
- **Event Sourcing for Data Preservation**: Event sourcing preserves all historical data, enabling better business insights and future-proofing features beyond just compliance requirements
- **Dynamic Consistency Boundaries**: The "aggregate is dead" discussion presents dynamic consistency boundaries as an alternative to traditional aggregate-based event sourcing
- **Practical Challenges**: Eventual consistency and concurrency problems are significant challenges for newcomers to event sourcing that the book addresses
- **Testing Patterns**: Given-when-then patterns are critical for specifying business rules in event modeling
- **Event Streaming vs Event Sourcing**: Understanding the distinction between event streaming and event sourcing is essential for proper implementation

## Key Takeaways

Martin's comprehensive book merges event modeling with event sourcing implementation, answering crucial questions that developers typically struggle with after months of learning. The podcast explores why preserving all system events matters beyond compliance—it provides invaluable business intelligence and prevents feature requests from becoming data recovery nightmares. Emerging concepts like dynamic consistency boundaries challenge how developers should organize transactional boundaries in event-sourced systems, offering flexibility beyond traditional aggregate patterns.

## Memorable Quotes

1. "This is the book I desperately needed 5 years ago when I started with all this" - Martin Dilger
2. "The more data you keep the more strength you have as an organization" - Adam Dymitruk
3. "All events typically make up another story and that is also readable from top to bottom which is very very interesting" - Martin Dilger
4. "I spent 5 hours trying to get a test screen and he just didn't realize he had a race condition, he had an eventual consistency problem and didn't understand it" - Martin Dilger
5. "We do that in traditional systems but it's not done to the same extent. A lot of that information is passively stored in backups" - Adam Dymitruk

## Key Learnings

1. Event sourcing enables future-proofing by preserving complete historical data that can unlock new features retroactively
2. Dynamic consistency boundaries allow flexibility beyond traditional aggregates, enabling ad hoc locking across properties
3. Event modeling works as a blueprint regardless of implementation language or technology stack
4. The book combines hands-on practical guidance with event modeling and event sourcing concepts
5. Understanding the difference between event streaming and event sourcing is critical for proper implementation

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
