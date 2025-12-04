---
layout: docs
title: Episode 10 - To-Do Lists, Real-World Scaling, and Effective Grooming
---

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 10 - To-Do Lists, Real-World Scaling, and Effective Grooming</h1>
    <p class="blog-post-subtitle">Proper design of to-do list processors for complex workflows and real-world scaling concerns</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 10</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-m9hXz_wQXk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin and Adam tackle the often-misunderstood to-do list pattern for automation and workflow orchestration. They explain how to properly design processors that react to events, avoiding the pattern soup that comes from prematurely adopting complex orchestration frameworks. The discussion addresses real-world scaling considerations and how event modeling facilitates effective requirements grooming sessions.

## Main Discussion Points

- **To-Do List Pattern Mastery**: How to design event-driven processors that coordinate multi-step workflows without centralized orchestration
- **Avoiding Pattern Soup**: The danger of mixing too many architectural patterns (sagas, process managers, orchestrators) when simple to-do lists suffice
- **Scaling Considerations**: Addressing concerns about system performance and scalability as event streams grow over time
- **Event-Driven Grooming**: How event models transform traditional requirements gathering into collaborative design sessions
- **Processor Design**: Best practices for building reliable, idempotent processors that handle failures gracefully
- **Pattern Selection**: Guidelines for choosing appropriate patterns based on actual requirements rather than perceived sophistication

## Key Takeaways

To-do list processors provide a simple, powerful pattern for workflow automation without the complexity of saga frameworks or process managers. Most business workflows can be modeled as events triggering processors that issue new commands, creating a clear event-driven choreography. Event modeling transforms traditional grooming sessions by giving business stakeholders and developers a shared visual language, dramatically improving requirement clarity and reducing misunderstandings. Real-world scaling concerns are often overstated - event sourcing systems handle substantial load when implemented with proper indexing and projection strategies.

## Memorable Quotes

1. "Engineers who start with event sourcing they don't really know how to get started so they do what they can do best and this is technology, so they start just building a framework to see how it works... in my mind it would be much more beneficial if they just modeled a real world application using event modeling and translated [it to] a real application without a framework." - Martin Dilger
2. "The only way to understand how event sourcing actually works is build something meaningful with it. Build a complete application with event sourcing... it took me weeks to implement this application but when I was finished I really knew exactly how event sourcing works." - Martin Dilger
3. "If you implement processes and command handlers, you need to keep the command handler pure. If you don't do this you need to start using mocks and stuff like that and this makes testing really awkward and ugly." - Martin Dilger
4. "For me a fake event is just an event that is basically the contract, so events are the contract between these slices. So if the event is in the event store you have everything ready to implement your slice independent of everything else." - Martin Dilger
5. "It behaves basically like a microservice, like a mini microservice... this beautifully shows the power of the combination of slices and event sourcing. This combination is just magical." - Martin Dilger

## Key Learnings

1. Stop writing custom event sourcing frameworks - either use battle-tested frameworks like Axon or implement without a framework, as event sourcing mechanics are simpler than most developers realize
2. Command handlers should be pure functions with external API calls happening outside the handler to maintain deterministic behavior and enable easy testing without mocks
3. Fake events enable independent slice development by providing the contract between slices, allowing teams to work on the most important features first without waiting for dependencies
4. To-do lists can be hierarchical with multiple levels - an overall progress to-do list can coordinate sub-processors that each have their own specific to-do lists for different tasks
5. Use Spring profiles or similar mechanisms to bootstrap event stores with fake events, enabling isolated slice testing and making each slice behave like an independent microservice

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
