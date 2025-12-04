---
layout: docs
title: Episode 6 - Event Modeling Course Launches
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 6 - Event Modeling Course Launches</h1>
    <p class="blog-post-subtitle">Announcing a new companion course featuring practical exercises with implementations in multiple programming languages</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 6</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/JZWHv-V7Xeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Episode Summary

Martin and Adam announce the launch of a comprehensive online course as a companion to the event sourcing book. The course features hands-on exercises with complete implementations in multiple programming languages, providing practical experience beyond theoretical knowledge. They discuss the importance of properly scoping event models and avoiding common pitfalls when defining system boundaries.

## Main Discussion Points

- **Course Launch**: Introduction of an online companion course to the book, featuring practical exercises and real-world implementation examples
- **Multi-Language Support**: Course includes implementations in Java, C#, TypeScript, and other popular languages to serve diverse development communities
- **Event Modeling Scope**: How to properly define boundaries for event models - avoiding both too narrow (missing critical interactions) and too broad (overwhelming detail)
- **Hands-On Exercises**: Structured practice problems that build from basic patterns to complex real-world scenarios
- **Book Integration**: How the course complements the book by providing interactive learning experiences that reinforce theoretical concepts
- **Community Building**: Creating a learning ecosystem that supports practitioners at all levels, from beginners to advanced users

## Key Takeaways

The new online course fills a critical gap by providing hands-on practice implementing event sourcing patterns across multiple technology stacks. While the book provides comprehensive theoretical foundation and guidance, the course offers practical exercises that cement understanding through implementation. Properly scoping event models requires balancing detail against comprehensibility - include enough context to make workflows understandable while avoiding overwhelming technical minutiae.

## Memorable Quotes

1. "Don't design events, design the system." - Adam Dymitruk
2. "If you want that if you want to avoid the rising exponential curve of costs to Features you will need to do this [decouple]. If you try to take the quote unquote easy way out which is not really an easy way out, the minute you draw an extra line as a connection that's coupling that's going to cause you more costs later." - Adam Dymitruk
3. "Event modeling is like coding just without the code. It's so fascinating to me." - Martin Dilger
4. "If you ever worked like this, you have your slice, you have your scope, you cannot work any other way. If you smell this once it's impossible to do it any other way." - Martin Dilger
5. "If your excitement, get a Rubik's Cube. If you want excitement get a Rubik's Cube [instead of solving puzzles in your codebase]." - Martin Dilger

## Key Learnings

1. Command handlers should be kept simple with minimal nested if statements - they should focus on storing events quickly rather than handling complex business logic
2. Read models should be decoupled and duplicated when necessary to avoid excessive coupling between slices - it's better to have multiple specific projections than to share generic ones
3. IDs in event models should use business-friendly identifiers (like email or phone number) rather than technical UUIDs to keep discussions accessible to non-technical stakeholders
4. Eventual consistency can often be solved through business conversations rather than technical solutions - ask if inconsistency is actually a problem for the business
5. Initial brainstorming sessions should be chaotic by design, with 100-200 events generated without strict rules to encourage full participation and information gathering

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
