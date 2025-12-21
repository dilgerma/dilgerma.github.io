---
layout: docs
title: Episode 11 - Code Reviews Aren't Always Necessary
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 11 - Code Reviews Aren't Always Necessary</h1>
    <p class="blog-post-subtitle">The nuanced role of code reviews in event-sourced systems with proper architectural patterns</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 11</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/D84blR0TVno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

In a controversial take, Martin and Adam question the universal need for code reviews in well-architected event-sourced systems. When slices are properly isolated, comprehensive tests exist, and patterns are consistent, traditional code review benefits diminish. They explore when code reviews add value versus when they become process overhead without commensurate benefit.

## Main Discussion Points

- **Slice Isolation Benefits**: How properly designed slices eliminate the coupling that makes code reviews critical in traditional architectures
- **Test Coverage as Review**: Comprehensive given-when-then tests provide stronger guarantees than human code review for business logic correctness
- **Pattern Consistency**: When all code follows identical patterns, the main value of reviews (catching architectural deviations) becomes less critical
- **Knowledge Sharing Alternatives**: Other mechanisms for knowledge transfer that may be more effective than synchronous code reviews
- **When Reviews Matter**: Specific scenarios where code reviews still provide value even in event-sourced systems
- **Cultural Considerations**: How team maturity and organizational culture influence the necessity of formal code review processes

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Event sourcing's strong architectural patterns and comprehensive test coverage reduce the necessity of code reviews for catching bugs and architectural violations. When every slice follows the same predictable patterns and has complete test coverage, human review adds less value than in traditional architectures where coupling creates unexpected side effects. However, code reviews may still serve other purposes like knowledge sharing, mentoring, or maintaining team awareness - the question is whether those goals justify the overhead or if alternative mechanisms work better.

## Memorable Quotes

1. "I don't think code reviews as that important in some cases which is um very sacrilegious in a lot of circles" - Adam
2. "I like to call this the done is done principle so when code is done the only reason I want to touch it is if the requirements change for exactly this piece of code or for this slice" - Martin
3. "If your slice is so small uh typically there's 's no reason to to Really reject something" - Martin
4. "The amount of coupling because if I think you gave an example of uh changing one dto for that's used all around and you don't have the slice architecture yeah I mean the the the topic came up in one of the discords I don't remember which one" - Adam
5. "If it ain't broke don't fix it" - Adam

## Key Learnings

1. In slice-based architectures with isolated functional blocks, traditional code reviews become less critical because the impact of bad code is limited to a single slice
2. The "done is done" principle means completed code should only be touched when requirements change for that specific slice, not when requirements change elsewhere in the system
3. Code reuse across slices creates coupling issues - changing a shared DTO forces changes to all slices even when they don't care about the new fields
4. Slice architecture provides similar benefits to compartmentalized design in other industries (oil tankers, submarines, cars) - failures are isolated and don't cascade
5. Traditional code review gatekeeping can become subjective and harmful; focus should be on creating systems that protect you rather than manual control processes

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
