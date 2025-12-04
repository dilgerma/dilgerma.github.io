---
layout: docs
title: Episode 16 - Scaling Event Sourcing: Handling Long Event History
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 16 - Scaling Event Sourcing: Handling Long Event History</h1>
    <p class="blog-post-subtitle">The critical challenge of replaying long event histories during deployments and how this affects system scaling</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 16</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5HUpQwOKpj4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Episode Summary

Martin and Adam tackle one of event sourcing's most significant scaling challenges: handling systems with millions of events accumulated over years. They discuss strategies for dealing with API variety, projection rebuilds during deployments, and architectural patterns that enable systems to scale to massive event volumes without degrading performance.

## Main Discussion Points

- **Millions of Events**: Real-world strategies for systems that have accumulated years of event history without archiving
- **Deployment Challenges**: How to handle projection updates when full replay of millions of events becomes impractical
- **Snapshot Strategies**: Different approaches to snapshotting including frequency, granularity, and versioning
- **Incremental Projections**: Building projections that update incrementally rather than requiring full replay
- **API Variety**: Dealing with diverse integration points and API styles while maintaining event-sourced architecture
- **Performance Patterns**: Indexing, caching, and other optimization techniques for large-scale event stores

## Key Takeaways

Systems with millions of events require thoughtful scaling strategies beyond basic event sourcing patterns. Snapshot mechanisms become essential not just for performance but for practical deployment timelines when projection logic changes. Incremental projection updates that process only new events since last checkpoint dramatically reduce deployment time compared to full replays. Proper indexing and caching strategies enable event stores to handle substantial query loads efficiently. The key is planning for scale from the beginning rather than retrofitting solutions after problems emerge.

## Memorable Quotes

1. "If you have to wait for hours then something is wrong it should not take hours take seconds" - Martin Dilger
2. "Event sourcing is the default because I don't care which system you're talking about if it's Information Management the problem that I just said about being able to dig out you know some issue from years ago and how it propagated bad information within the system over the years through many different versions of the code because that high coupling um you never actually solve the problem" - Adam Dymitruk
3. "I never my whole career my more than 15 years career I never used the history table to solve such a problem because they simply don't work" - Martin Dilger
4. "It's like dusting your floor with a fork it's just you can try but you need that nice clean mop of event modeling to or event sourcing and event modeling to really say that I've got everything" - Adam Dymitruk
5. "Boring is good though I mean this is back to you know this is this is coming from someone that's done way more software development than most people on the planet and that's lennis tals who's written an entire operating system and came up with G and wrote the initial version of it" - Adam Dymitruk

## Key Learnings

1. Replay times in event sourcing systems can become a major bottleneck if not managed properly - systems should aim for seconds, not hours, for deployments
2. Natural business boundaries (trading days, billing cycles, inventory periods) should be used to limit stream sizes rather than relying on technical solutions like snapshots
3. Metrics and instrumentation are superpowers in event-sourced systems, making it easy to identify and optimize performance issues
4. Infrastructure code should follow DRY principles while business logic should remain isolated and independent to avoid coupling
5. Unit tests can be greatly simplified in event sourcing by using JSON serialization for comparison rather than complex assertion logic

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
