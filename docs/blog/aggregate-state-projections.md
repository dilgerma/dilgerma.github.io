---
layout: docs
title: Should You Reuse Aggregate-State in Your Projections?
description: Finding the right Aggregate Boundaries and understanding the role of state in Event Sourcing. Learn when to reuse aggregate state in your projections.
author: Martin Dilger
date: 2024-11-15
category: Event Sourcing & DDD
keywords: aggregate design, event sourcing, projections, DDD aggregates, aggregate boundaries, CQRS, read models, event store
featured_image: /assets/images/blog/aggregate-state-projections.png
tags: [event-sourcing, ddd, aggregates, projections, cqrs]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Should You Reuse Aggregate-State in Your Projections?</h1>
    <p class="blog-post-subtitle">Finding the right Aggregate Boundaries and understanding the role of state in Event Sourcing</p>
    <div class="blog-post-meta">
      <span>November 2024</span>
      <span>8 min read</span>
      <span>Event Sourcing & DDD</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/aggregate-state-projections.png' | relative_url }}" alt="Aggregate State and Projections">
  </div>

  <div class="blog-post-content" markdown="1">


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## How do you find the Aggregate Boundaries?

Instead of looking for the "Nouns" like Cart, Customer, Product, it often helps to look for the invariants, the rules the Aggregate protects. The things that always need to be consistent in the system.

Here the Aggregates start to make real sense.

In the book we defined the Cart-Aggregate which is obviously the first thing that comes to mind. Were there other candidates? Let´s find out.

What are the invariants that need to be true while a customer is enjoying the Online-Shop?

Here are a few examples:

- A customer must neither see nor add "Adult" Products to the Cart Session
- Customers must never order more than 3 products
- The total value of a Cart must never be more than 1000 €

Looking at these rules, they all circle around the selection of products, so defining a set of rules for the "Product Selection" might also be a possible candidate.

Does it make any significant difference - for this case I doubt it, in other cases absolutely. I revisit these 3 Articles by Vaughn Vernon from time to time that explain this in great detail.

**Effective Aggregate Design I** - ( Vaughn Vernon ) - [https://www.dddcommunity.org/wp-content/uploads/files/pdf_articles/Vernon_2011_1.pdf](https://www.dddcommunity.org/wp-content/uploads/files/pdf_articles/Vernon_2011_1.pdf)

**Effective Aggregate Design II** - ( Vaughn Vernon ) - [https://www.dddcommunity.org/wp-content/uploads/files/pdf_articles/Vernon_2011_2.pdf](https://www.dddcommunity.org/wp-content/uploads/files/pdf_articles/Vernon_2011_2.pdf)

**Effective Aggregate Design III** - ( Vaughn Vernon ) - [https://www.dddcommunity.org/wp-content/uploads/files/pdf_articles/Vernon_2011_3.pdf](https://www.dddcommunity.org/wp-content/uploads/files/pdf_articles/Vernon_2011_3.pdf)

## What else happened recently?

### Missing Chapter "Handling the UI"

The new "Missing Chapter" for my Book "Understanding Eventsourcing" with the title "Handling the UI" was sent out to the Reviewers last night.

It´s longer than expected and goes into great detail on how to structure UIs for Vertical Slices and also how to keep them in sync with the eventually consistent projections. It will hopefully be released this weekend.

There are also implementation examples for all discussed approaches ( fenced polling, version polling and server sent events )

You´ll get access to all chapters for free if you bought the book

### Online Course "Implementing Eventsourcing"

I started to work on the Online Course for the book called "Implementing Eventsourcing".

It will follow the same structure as the book. So you will be able to jump between the book chapter and the course lecture seamlessly.

But wait - I make a change here. I will not just record some sessions and offer it for purchase. That alone would be beneficial, but I think we can do better. You can take part in the creation process. I´ll open the course very soon, and you can join each session while it is recorded in several live webinars.

You can ask as many questions as you want and of course review it as often as you want in the course plattform.

That is basically your benefit for the trust you give me with the course as an "Early Bird".

Your questions will shape the structure of the course. Don´t worry, each session will be cut or maybe even re-recorded after the webinar, but including answers to your burning questions. This will make the course so much better. At least, that´s my idea.

### Is your Team considering to work with Spring, Axon, Kotlin and Apache Kafka?

I have some free spots in my "Accelerate" Program that offers full access to the "Accelerate Tools" in Miro for Eventmodeling and Code-Generation.

If your teams plans to start on a new Service or Module, we should talk. Just answer to the E-Mail with "Accelerate" if you want some additional information.

And last but not least, did you know there is a free E-Mail Course spanning several days showing you how to build a custom code generator for your Event Model? Just subscribe here ( even if you already subscribed to the Newsletter )

See you next week!

<div class="info-box" markdown="1">
### Ready to Learn More?

Want to dive deeper into Event Sourcing and Aggregate Design? Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your organization.

**Still 2 Team-Spots left for the [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"} this month.**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

{% include related-posts.html %}

  </div>
</div>
