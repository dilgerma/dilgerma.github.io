---
layout: docs
title: Episode 7 - Workshop Insights and Community Pattern Discussion
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 7 - Workshop Insights and Community Pattern Discussion</h1>
    <p class="blog-post-subtitle">Recap of six major topics from a recent four-hour advanced workshop</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 7</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/F02n6qntPAA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin and Adam recap their intensive four-hour advanced workshop, covering six major topics that push beyond basic event modeling patterns. They discuss pure command handlers, sparse timelines for given-when-thens, and advanced patterns that experienced practitioners encounter. The episode highlights how workshop interactions reveal common misunderstandings and implementation challenges.

## Main Discussion Points

- **Pure Command Handlers**: Maintaining strict functional purity by eliminating all side effects from command handlers, moving I/O operations to event processors
- **Sparse Timelines**: How to use incomplete timelines in given-when-then specifications to test specific scenarios without unnecessary setup complexity
- **Workshop Format Evolution**: Refinements to the 15-minute block format based on participant feedback and engagement patterns
- **Advanced Patterns**: Exploring scenarios beyond basic CRUD operations, including complex workflows and cross-aggregate coordination
- **Common Pitfalls**: Recurring mistakes workshop participants make, revealing gaps in understanding that need clearer documentation
- **Interactive Learning**: Why hands-on workshops reveal implementation details that reading and videos cannot effectively convey

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Advanced workshops expose the nuances of event sourcing that only emerge during actual implementation. Pure command handlers - those with zero side effects - prove more testable and reliable than handlers mixing business logic with I/O operations. Sparse timelines in given-when-then tests allow focusing on specific scenarios without building elaborate setup, making tests more maintainable. The interactive workshop format continues proving its value by revealing common misconceptions and providing immediate corrective feedback.

## Memorable Quotes

1. "Event sourcing is so good that it deserves a better unit testing framework." - Adam Dymitruk
2. "The important part here is this line here where we actually collect the events so far to create that history that we put in as a parameter... as we go through our story line, visually for business people they can see how we continue to move down." - Adam Dymitruk
3. "How tied do we, how are we, how tightly tied are we to our unit testing tool? Because unit testing is simple... can we free ourselves from this?" - Adam Dymitruk
4. "I would provide implementations for [handling sensitive data]. I think it's really good that we're providing code all the time but the concepts... we're also talking about these Concepts to business people where we continue to keep that bridge alive between the two sides." - Martin Dilger
5. "Event modeling tremendously helps with GDPR because you know at all times where is data used and how... everything is transparent." - Martin Dilger

## Key Learnings

1. Given-when-then testing in event sourcing can use previous rows as the event history (the "given"), making test conventions consistent and easy to understand for both humans and AI
2. Event sourcing systems deserve purpose-built testing frameworks that leverage the timeline structure rather than forcing traditional unit testing tools onto event-based architectures
3. GDPR and sensitive data handling become significantly easier with event modeling because you can trace exactly where data is used throughout the system
4. Test harnesses for event sourcing should iterate through event timelines with accumulators that build up history, allowing clear assertions on state at each point
5. Labels in test scenarios bridge the gap between business user stories and technical implementation, making tests more expressive and accessible

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
