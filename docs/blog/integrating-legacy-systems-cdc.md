---
layout: docs
title: Integrating with Legacy Systems
description: How Change Data Capture (CDC) unchains data from legacy systems - a practical guide to modern integration patterns and techniques.
author: Martin Dilger
date: November 29, 2025
category: Legacy Integration & CDC
keywords: change data capture, CDC, legacy systems, data integration, legacy integration, database integration, event streaming, data unchaining, system integration, modernization patterns
featured_image: /assets/images/blog/integrating-legacy-systems-cdc.png
tags: [cdc, legacy-systems, integration, change-data-capture, data-streaming, modernization, system-integration]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Integrating with Legacy Systems</h1>
    <p class="blog-post-subtitle">How Change Data Capture (CDC) unchains data from legacy systems</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>8 min read</span>
      <span>Legacy Integration & CDC</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/system-design-architecture.png' | relative_url }}" alt="Integrating with Legacy Systems">
  </div>

  <div class="blog-post-content" markdown="1">

This time we dive into one of my favorite topics - CDC - which means "Change Data Capture".

CDC "unchains" data. This is especially important if you need to integrate with existing (legacy) systems. The first question you typically have to answer is - how do I get the data out of the legacy system?

CDC typically sits directly on the relevant tables in the legacy system. This allows us to capture all changes to rows in these tables.

I love to work with Apache Kafka and also Kafka Connect for this.

With Kafka Connect, I can just add a so called "JDBC Source" Connector that gets triggered when a row gets added or updated ( delete is not so easy ).

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/system-design-architecture-1.png' | relative_url }}" alt="CDC with Kafka Connect">
</div>

If we have the possibility to make small adjustments to the legacy system, using a Transactional Outbox Table often simplifies the process. Everytime time a business operation gets triggered in the legacy system, we simply store a new entry in the Outbox-Table. In fact it´s nothing but an Event as an indication that the state of the legacy system has changed.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/system-design-architecture-2.png' | relative_url }}" alt="Transactional Outbox Pattern">
</div>


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## How do you model that?

If we model a system, we want to show how and when external information enters the system. I typically treat the CDC-"Event" as an external Event that needs to be translated to something internal and easily usable by the system.

External Events are yellow for me - I want to see immediately, where in the system we are dealing with external data.

Oftentimes the CDC Event is overly generic and I try to limit the effect of this to as few places as possible.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/system-design-architecture-3.png' | relative_url }}" alt="Modeling CDC Events">
</div>

The "Price Changed" Event is something internal and well-known to the system. From the system perspective it doesn´t even matter technically how price changes comes into the system. We might switch from CDC to an API-based integration. In this case we just delete the "Slice" for the CDC Integration and replace it with an Automation to fetch prices by API.

So the really important part in this process is the Price Translation - it acts as an Anti-Corruption-Layer and shields us from the external (legacy) System.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/system-design-architecture-4.png' | relative_url }}" alt="Anti-Corruption Layer">
</div>

And another important thing - we can also show how this translation works using Given / When / Thens. Sometimes a rather generic CDC Events can result in many different "Domain"-Events in our system, depending on the changes that were captured. It´s important to visualize the logic that applies.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/system-design-architecture-5.png' | relative_url }}" alt="Given When Then for CDC">
</div>

Hope that helped. If you have questions, I´d suggest we have a quick chat about it. Feel free to just contact me directly here on LinkedIn.

Always here to help.

Cheers

Martin

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**[Event Sourcing with Slices on January 20/21, 2026](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/300-column-database-legacy' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The 300-Column Database: A Legacy System Horror Story</h3>
        <p>How a monolithic database became a cautionary tale</p>
        <span class="related-post-meta">Legacy Systems • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/dont-rewrite-legacy-system' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Don't Rewrite Your Legacy System</h3>
        <p>Why rewriting from scratch usually fails</p>
        <span class="related-post-meta">Legacy Systems • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/documenting-legacy-systems-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Documenting Legacy Systems with Event Modeling</h3>
        <p>Using Event Modeling to understand and document legacy systems</p>
        <span class="related-post-meta">Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
