---
layout: docs
title: Aggregates, Sagas and an unresolved concurrency issue
description: How to model the Bank Account example - simplified without unnecessary complexity. Understanding aggregates, sagas, and handling concurrency in event sourcing.
author: Martin Dilger
date: 2025-11-29
category: Event Sourcing
keywords: aggregates, sagas, concurrency, event sourcing, bank account example, DDD, process managers, optimistic concurrency
featured_image: /assets/images/blog/aggregates-sagas-concurrency.png
tags: [event-sourcing, aggregates, sagas, concurrency, ddd]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Aggregates, Sagas and an unresolved concurrency issue</h1>
    <p class="blog-post-subtitle">How to model the Bank Account example - simplified without unnecessary complexity</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>8 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/aggregates-sagas-concurrency.png' | relative_url }}" alt="Aggregates, Sagas and Concurrency">
  </div>

  <div class="blog-post-content" markdown="1">

( This was issue #33 of the Event Modeling and Event Sourcing Newsletter - make sure to subscribe! )

Recently, I was asked how I would model the Bank Account example by someone learning Event Sourcing. His attempt was far too complicated – aggregates all over the place, two sagas, and an unresolved concurrency issue… let's have a look if that can be simplified.

In the last few days, there were also lot of discussions about how to model and build the bank account example, especially together with DBC ( Dynamic Consistency Boundary ).

Some were right, some were interesting, many were a bit too complicated..

Here on LinkedIn ( make sure to read the comments, some good discussions )

Here in an article by Ralf Westphal focusing on the consistency part ( good read! )

And also of course the discussion I had with a colleague, which resulted in the model you see now.

Let´s clear one thing first - if you´ve never heard about DCB, you either live under a rock or you are just getting started in Event Sourcing ( just kidding.. ). It´s the one thing everybody seems to be talking about these days, and I agree, it´s a big thing.

There is chapter 44 about DCB in my book "Understanding Eventsourcing" ( if you subscribed to the Newsletter, you received a Voucher, don´t miss that ), or you an dive into the topic using the official page under https://dcb.events/

DCB is about consistency, it´s not about information flow. So if you model a system, it will look similar using DCB or not ( DCB might have fewer events, that´s all )

Looking at the information flow, I typically just try to model what might happen step by step - not thinking at all about technology, implementation patterns or aggregates. Moving money is not one Transaction, it happens in several steps. ( I´m not a financial expert - correct me if I´m wrong )


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## 1) Open Account

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/aggregates-sagas-concurrency-1.png' | relative_url }}" alt="Open Account">
</div>

## 2) Request transfer from Account A to Account B ( no money is moving yet )

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/aggregates-sagas-concurrency-2.png' | relative_url }}" alt="Request Transfer">
</div>

## 3) Process the transfer and move the money to the other Account ( this is where money is flowing )

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/aggregates-sagas-concurrency-3.png' | relative_url }}" alt="Process Transfer">
</div>

## 4) Close the transfer ( final step )

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/aggregates-sagas-concurrency-4.png' | relative_url }}" alt="Close Transfer">
</div>

Do you need a "Money Transfer" Aggregate? It´s not wrong, but it´s also not absolutely necessary. Of course there are different ways to model the flow and this is my attempt ( which came out of a recent discussion with a colleague )

I´m not claiming that this is the "perfect" model, but the simplistic way I would approach it. Feel free to comment, happy to discuss the details.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/aggregates-sagas-concurrency-5.png' | relative_url }}" alt="Complete Model">
</div>

Want to see this in action? I made a short Video, how to run this example as a Prototype.

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/a2ebae77d02948f9af72d4dab6607d0b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Best regards,

Martin

If your project is drowning in unclear requirements, your meetings are just firefighting sessions, and deadlines are creeping closer while velocity keeps dropping – maybe I can help and provide some clarity.

Often, finding the real bottlenecks unties the knot. That's exactly what we do in my new offer: a 90-minute CTO Call to quickly gain deep clarity.

You can book it here.

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
    <a href="{{ '/docs/blog/aggregate-state-projections' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Aggregate State and Projections</h3>
        <p>Understanding the relationship between aggregates and projections</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/what-is-aggregate' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>What Is an Aggregate?</h3>
        <p>Understanding aggregates in domain-driven design</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/command-handler-simplicity' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Command Handler Simplicity</h3>
        <p>How to keep command handlers simple and maintainable</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
