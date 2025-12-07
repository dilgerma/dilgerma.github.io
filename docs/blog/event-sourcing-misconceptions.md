---
layout: docs
title: Event Sourcing Doesn't Mean Everything Must Be Event Sourced
description: Clearing up one of the biggest misconceptions about Event Sourcing. Learn why you don't need to event source everything and how to choose what to event source.
author: Martin Dilger
date: 2025-11-29
category: Event Sourcing
keywords: event sourcing, event sourcing misconceptions, event sourcing best practices, event-driven architecture, CQRS, event store, domain events, event sourcing patterns
featured_image: /assets/images/blog/event-sourcing-misconceptions.png
tags: [event-sourcing, architecture, best-practices, cqrs, patterns]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Event Sourcing Doesn't Mean Everything Must Be Event Sourced</h1>
    <p class="blog-post-subtitle">Clearing up one of the biggest misconceptions about Event Sourcing</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>7 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/event-sourcing-misconceptions.png' | relative_url }}" alt="Event Sourcing Misconceptions">
  </div>

  <div class="blog-post-content" markdown="1">

This was issue #32 of the Event Modeling & Event Sourcing Newsletter, and we're clearing up one of the biggest misconceptions about Event Sourcing.

This week, I worked with a new team facing the typical challenge most teams encounter when getting started with Event Sourcing – and making the one mistake that can put a project on a problematic path right from the start.

The situation is this: They receive notifications from an external system about orders that need to be processed. These notifications are huge, containing dozens and dozens of attributes.

The team had already started designing the system, and they were about to store these massive events in an "incoming-orders" stream. After all, when we do Event Sourcing, we do it properly and everything is event sourced, right?

Wrong.

That's a crucial misunderstanding. Event Sourcing doesn't mean every single attribute has to be event sourced – far from it.

What needs to be event sourced are the attributes crucial to our system: the information that affects our business decisions.

Most of the order attributes weren't relevant at all, or they were just passed through to the next system.

Designing these huge events will hurt later in the process (a lot!):

The more attributes, the higher the likelihood these events will change often (which requires versioning and maintenance).
Processing massive events can become a performance bottleneck (and a cost issue).
It becomes very hard to track changes and understand what's important and what isn't.

Often, teams become very creative trying to work around these issues:

Should we just store the whole order as a BLOB in one field in the event?
We thought about storing it as "metadata".

Why not just keep it simple?

That's a classic integration, and in Event Modeling we use the Translation Pattern for exactly this.

## Translation Pattern Applied

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-sourcing-misconceptions-1.png' | relative_url }}" alt="Translation Pattern">
</div>

But what about the other information? Should we just discard it? What about the information we need to pass through to other systems?

It´s perfectly fine to keep the redundant information in a separate Datastore - could be a Key Value Store like Redis, could be a relational database or even S3. It doesn´t really matter.

## Additional Storage

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-sourcing-misconceptions-2.png' | relative_url }}" alt="Additional Storage">
</div>

What is crucial is the discussion, what information on the order actually is relevant. In this case, the system really cared about the order information itself, like the order-id and the mandator.

## Identifying Relevant Attributes

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-sourcing-misconceptions-3.png' | relative_url }}" alt="Identifying Relevant Attributes">
</div>

Only this information is crucial to be available via Events. We do NOT need to store ALL information in Events in the Event Store. Stop doing that, please, it hurts so much later in the process.

We can now gradually extract more information from the stored order.

For example, whenever an order was placed and accepted for a new Mandator, our system needs to be aware of this new mandator. That is crucial information! From here on we can just treat the "order storage" as regular Read Model - it just provides the information to the stored orders.

Technically, it´s like an external API, that we can query for order details.

<div class="blog-post-image">
<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>
</div>

## Finding Relevant Business Events

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-sourcing-misconceptions-4.png' | relative_url }}" alt="Finding Relevant Business Events">
</div>

This typically results in big "Aha" Moments, as people finally start to see what Event Sourcing is really about.

How about you? Did you run into this trap? I would love to hear your thoughts.

If your project is drowning in unclear requirements, your meetings are just firefighting sessions, and deadlines are creeping closer while velocity keeps dropping – maybe I can help.

Often, finding the real bottlenecks unties the knot. I can help you with this. Just comment "KNOT" and let´s have a quick chat.

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**Still 2 Team-Spots left for the [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"} this month.**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/cqrs-real-world-architecture' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>CQRS in Real-World Architecture</h3>
        <p>Practical guidance on implementing CQRS in production systems</p>
        <span class="related-post-meta">Architecture • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/command-handler-simplicity' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Command Handler Simplicity</h3>
        <p>How to keep command handlers simple and maintainable</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/10-learnings-from-10-years-microservice-development' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>10 Learnings from 10 Years of Microservice Development</h3>
        <p>Hard-won lessons from a decade of building distributed systems</p>
        <span class="related-post-meta">Microservices • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
