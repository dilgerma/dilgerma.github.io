---
layout: docs
title: Documenting Legacy Systems with Event Modeling
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Documenting Legacy Systems with Event Modeling</h1>
    <p class="blog-post-subtitle">Event Modeling is excellent for documenting Event Sourcing based systems. But can existing systems also be documented with it? Here's how to understand and document legacy systems using Event Modeling.</p>
    <div class="blog-post-meta">
      <span>October 2023</span>
      <span>12 min read</span>
      <span>Software Documentation & Legacy Systems</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/legacy-banner.png' | relative_url }}" alt="Documenting Legacy Systems with Event Modeling">
  </div>

  <div class="blog-post-content" markdown="1">

A simple description of how Event Modeling works for software documentation can be found [here](/docs/blog/documenting-software-event-modeling)

Event Modeling is excellent for documenting Event Sourcing based systems.
But can existing systems also be documented with it?

First, let's clarify one of the most important questions


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Is It Worth the Effort?

Documenting an existing system from scratch? The effort doesn't pay off, does it?

The answer is the same as always... _it depends_

How long do you plan to maintain and further develop the system for more than 12 months?

Does onboarding new employees take much longer than it should?

Is it planned in the foreseeable future that parts of the system will be redeveloped and possibly even extracted as separate services from the existing system?

If the answer to only one of these questions is "Yes," there's a high probability that the initial effort for system documentation will quickly pay off.

## What Are the Benefits

#### Information Completeness

This is the most important reason why I would consider (post-)documentation with Event Modeling for every system.
Event Modeling allows you to easily check at every step which data is used, where the data comes from, and how the data is passed on.

> The one thing you must get right is absolute clarity about data flows in your system

#### Documentation of Dependencies

You can see at a glance where the data you're working with comes from and also where encapsulation is not correct, because you might be accessing tables that belong to other systems.

#### Easy Onboarding

As always with Event Modeling - even for existing systems, we document functionality readable like a story, like a book from beginning to end.

## How Do You Document Legacy Applications?

The basic approach has already been described by Adam Dymitruk in (3). The goal of the description is to document the data flows in a way that they are comprehensibly prepared.

As Adam so nicely describes it:
> We document what remains when we pull the plug on the system.

The documentation can be divided into a handful of patterns.

For a refresher, here are the familiar patterns from _Event Modeling_

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/legacy-modeling-patterns.png' | relative_url }}" alt="Event Modeling Patterns" style="width:80%">
  <p class="image-caption">Buying cinema tickets</p>
</div>

Since all systems can be described with these patterns, this also works for existing systems.

Instead of using events as the persistence medium, however, most existing systems work with a (relational) database or a distributed message broker like _Apache Kafka_

Simple example - A software system for operating a cinema.

First use case - the software should allow buying cinema tickets.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/legacy-cinema01.png' | relative_url }}" alt="Buying Cinema Tickets" style="width:40%">
  <p class="image-caption">Buying cinema tickets</p>
</div>

It's important here that besides the patterns, we document how the data is stored in the system.
So we could imagine a "Reservations" table.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/legacy-cinema02.png' | relative_url }}" alt="Buying Cinema Tickets with Tables" style="width:40%">
  <p class="image-caption">Buying cinema tickets with tables</p>
</div>

From this diagram alone, we already get valuable information.
We apparently store a separate reservation for each seat in a cinema hall including the reservation date and a flag whether paid or not.

Let's assume the external payment system confirms the card payment.
After that, the flag in the database is set to "1". The reservation becomes a purchase.
However, only one payment was confirmed.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/legacy-cinema03.png' | relative_url }}" alt="Payment Process" style="width:80%">
  <p class="image-caption">Payment process</p>
</div>

Additionally, we have a background process that periodically checks the reservations for their expiration date.
Reservations are valid for 30 minutes.
We also see here that reservations are deleted directly upon expiration.
No chance to get the tickets after expiration.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/legacy-cinema04.png' | relative_url }}" alt="Reservation Process" style="width:80%">
  <p class="image-caption">Reservation process</p>
</div>

These rules can be mapped via policies in the Event Model to make clear which rules apply.
For each of these policies there **must** be a unit test. This is where the business logic lives.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/legacy-cinema05.png' | relative_url }}" alt="Policies" style="width:40%">
  <p class="image-caption">Policies</p>
</div>

Besides the purchase process, there are apparently other systems that access the _Reservations_ table, for example _Reporting_.

For reporting, the performance per showing is calculated from the total capacity of a cinema hall (_Rooms_ table) and the paid reservations (_Reservations_ table).

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/legacy-cinema06.png' | relative_url }}" alt="Reporting" style="width:60%">
  <p class="image-caption">Reporting</p>
</div>

## Conclusion

Even for existing systems, an Event Model can be created with manageable effort.
It doesn't matter how the system is technically structured.
The Event Model is technology-neutral at first.

But the model allows you to think _easily_ about the system.

We see how data flows through the system.

And we already have the roadmap to make improvements.
Instead of aggregating the paid reservations for reporting, for example, it might make sense to provide a "MovieScreeningReportGenerated" event after a showing ends that already pre-calculates the necessary information. (And this may of course initially be stored in its own _Reporting_ table.)

---

I can help you document your existing systems and prepare important technical decisions.

The first step is a simple Event Modeling workshop.

Book a free 15-minute call now and I'll show you what possibilities we have.
I look forward to getting to know you.

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

## Links

(1) [Documenting Software with Event Modeling](/docs/blog/documenting-software-event-modeling)

(2) [What is Event Modeling?](https://eventmodeling.org/posts/what-is-event-modeling/) by Adam Dymitruk

(3) [Event Modeling Traditional Systems?](https://eventmodeling.org/posts/event-modeling-traditional-systems/) by Adam Dymitruk

  </div>
</div>
