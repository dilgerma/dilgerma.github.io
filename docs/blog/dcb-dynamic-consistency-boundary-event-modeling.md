---
layout: docs
title: How Does DCB Affect Event Modeling?
description: Dynamic Consistency Boundary (DCB) changes how we structure event streams - but it changes nothing about Event Modeling itself. Swimlanes become integration points, and tags are indices, not domain concepts.
author: Martin Dilger
date: 2026-07-06
category: Event Sourcing
keywords: DCB, Dynamic Consistency Boundary, event modeling, event sourcing, aggregates, Axon Framework, event tags, given when then, CQRS
featured_image: /assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling.png
tags: [event-sourcing, dcb, event-modeling, axon]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>How Does DCB Affect Event Modeling?</h1>
    <p class="blog-post-subtitle">Dynamic Consistency Boundary changes how we structure event streams - but it changes nothing about Event Modeling itself. If anything, everything gets simpler.</p>
    <div class="blog-post-meta">
      <span>July 6, 2026</span>
      <span>10 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling.png' | relative_url }}" alt="How Does DCB Affect Event Modeling">
  </div>

  <div class="blog-post-content" markdown="1">

One of the real innovations for me in Event Sourcing - not necessarily in terms of technology, but in terms of mindset - has been DCB (Dynamic Consistency Boundary).
{: .lead}

Instead of having to define up front how to structure events into streams (typically using aggregates), we technically treat all events within a bounded context as one global stream. That sounds counterintuitive in the beginning, but makes a lot of sense. Let's dive in.

First benefit - this makes those cumbersome technical discussions go away immediately.

Where is the aggregate? How to structure streams?

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-1.png' | relative_url }}" alt="A Customer Management timeline showing Register Customer, Notify Customer, and Subscribe to Course as one continuous slice flow">
</div>

Where are the boundaries? Looking at the picture above, at some point in time we had to make a decision - "what belongs to Customer Management," "what belongs to Course Subscriptions."

Latest when we move to production, this is often set in stone. But things change, business models change, and some of those early decisions turn out to be wrong or at least not ideal.

That's also why I refer to aggregates as "static consistency boundaries" - changing those decisions later is not impossible, but typically a lot of work, and typically nobody does that. We have to live with past decisions for better or worse, typically.

## DCB Changes the Focus

With DCB we focus on "what actually happened?" - the whole big idea of Event Sourcing in general.

But one question has been bothering me - how will this affect Event Modeling? With Event Modeling, we reason about systems, not with engineers - no, with everybody. It's a visual plan we build. A visual language.

Now that I modeled a few systems with DCB, I found my answer - it's not affected at all. Quite the opposite, everything gets simpler.

Event Modeling has been surprisingly hesitant to change. Which shows how mature it is. Keeping things simple is the hardest thing to do.

Now we can show "what actually happened" - using one swimlane per system / bounded context.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-2.png' | relative_url }}" alt="The same timeline with Subscription and Registration flows labeled inside a single Customer Management swimlane">
</div>

And swimlanes become what they always were meant for - showing the interaction between systems and teams, not stream-design itself.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-3.png' | relative_url }}" alt="Two swimlanes, Customer Management and Payments, showing a different system managed by a different team">
</div>

Payments, for example - that's a different system managed by a different team. So we show that using swimlanes. They become integration points. Whenever information crosses a lane, we need to pay attention - this is important.

## Micro-Decisions and Business Rules

It's all about consistency.

To execute the command "Subscribe to Course," the system needs to know which rules apply.

DCB has not changed that. Let's make an example. Only registered customers can subscribe to a course. We discover those rules in collaboration and express them with Given/When/Then scenarios.

Those scenarios can be expressed easily on the Eventmodelers platform.

Rule 1 - registered customers can subscribe to courses.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-4.png' | relative_url }}" alt="Given/When/Then scenario: Customers can register to a course">
</div>

Scenario 2 - needs to be registered to subscribe.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-5.png' | relative_url }}" alt="Given/When/Then scenario: only registered customers can subscribe, error expected when there is no registration">
</div>

Scenario 3 - cannot subscribe twice.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-6.png' | relative_url }}" alt="Given/When/Then scenario: cannot subscribe twice, error expected already subscribed">
</div>

Now, to implement the business logic for a course registration, we need to know which information we need to decide whether a subscription is allowed or not.

How do we know?

It's the Given/When/Thens that provide this information automatically. We just have to look at the GIVEN part.

This is what I couldn't wrap my head around in the beginning - how do we model the "decision model," the information the system needs to process a command. The answer that came up surprised me - we don't. At least I don't.

Aggregates or DCB - it has no effect on Event Modeling.

## The Context for Decisions

With aggregates, it was quite simple - to make a decision you had to load all the events guarded by this one aggregate. Consistency across aggregates required orchestration, the saga pattern, or some steps to handle compensating transactions - this becomes complicated quickly.

Those aggregates can become large over time, and they can become performance bottlenecks. That's why we introduce some technical optimizations like snapshotting - think of it like a cache for big aggregates.

With DCB, those decisions become much more granular. We basically just decide on a command-by-command basis what needs to be done.

How that is done varies from framework to framework, from technology to technology. In the Axon Framework, for example, for each command handler you define a Criteria. Think of it like an SQL query to fetch all events necessary to decide whether the command can be processed or not.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-7.png' | relative_url }}" alt="Java code defining an EventCriteria that combines CustomerRegistered and SubscribedToCourse events tagged by email and course ID">
</div>

"Give me all the events of type Customer Registered for the email, but also all the events of Subscribed To Course for this email and the course ID, the customer wants to subscribe to - so I can check whether a subscription is possible or not."

Writing this by hand is cumbersome.

That's why we typically generate this code directly from the specifications. AI is really good at that - and the Axon Build Kit for the Eventmodelers platform knows how to translate the Event Model to the executable code.

You focus on the business - the platform takes care of the rest. This especially pays off later, because rules change - adding Given/When/Thens will automatically be reflected in code. Generating the test cases, of course, as well.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-8.png' | relative_url }}" alt="Generated JUnit test case cannotSubscribeTwice derived directly from the Given/When/Then scenario">
</div>

## Tags Are Indices, Not Domain Concepts

How do you model tags in the Event Model? Probably the question I hear most. You don't. Tags aren't a domain concept, it's not essential to the business - it's a technical optimization.

So there's no place for it in the Event Model.

To be able to query a certain event for a decision in a command handler, it has to be tagged though. How do you express this so AI can generate that?

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-9.png' | relative_url }}" alt="SubscribedToCourse event annotated with EventTag for email and course ID">
</div>

We use a publicly available and documented schema. This allows anyone to build code generators that can plug into the Eventmodelers platform. And many tools and code generators already do. It has proven to work for years in countless projects.

We typically have two kinds of modeling sessions: discovery and detailed modeling.

In discovery, there's no place for technical details like tags. Nobody cares. And stakeholders the least.

But later, we might want to add those details to support code generation, often just with engineers before handing the slice to an agent.

In the Eventmodelers platform, you can add meta information to the schema of events, commands, and read models.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-10.png' | relative_url }}" alt="Eventmodelers UI panel for defining a read model field with id, optional, generated, and technical flags">
</div>

One of them we used in the past was the "id" attribute. In the UI, you can specify for each attribute whether it's an identifying attribute. In the code generation, this can be used to identify the stream. Something like a "customer id," for example, might be a good candidate.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-11.png' | relative_url }}" alt="Close-up of the id, optional, generated, and technical attribute checkboxes">
</div>

For DCB, I just reuse this attribute for now. We might add a new attribute at some point in time named "indexed" - but I'm slow in changing the public schema, so for now we just reuse the id attribute.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-12.png' | relative_url }}" alt="Subscribed to course event node showing email and courseId marked as identifying attributes with an asterisk">
</div>

In the UI you can see the id-attributes if you look for the "*".

AI can figure this out by itself pretty well, but I typically want to have a little more control over that. If you use it or not - completely up to you.

In code this becomes something like this.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/dcb-dynamic-consistency-boundary-event-modeling-13.png' | relative_url }}" alt="Final generated SubscribedToCourse event record with EventTag annotations for email and courseId">
</div>

With the attributes being tagged, they are now basically indexed and can be used in command handlers to make decisions.

## Conclusion

With DCB we can put more focus on the business domain itself. Within one context, just model "what happened."

Inter-context communication - use swimlanes to show how systems integrate and communicate. Showing "integration," not "implementation."

Use Event Modeling to plan, generate code where possible. Use the Build Kit for Axon, for example.

Learn this? Grab the book and the accompanying online course.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** - learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Full Agentic Event Modeling Plattform

AI-Enabled Event Modeling and Code-Generation

[Start Modeling here →](https://app.eventmodelers.ai){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/building-software-should-feel-like-uber' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Building Software Should Feel Like Uber, Not Like Being the Mechanic</h3>
        <p>Simplicity isn't about dumbing things down - it's about protecting people from complexity.</p>
        <span class="related-post-meta">Event Modeling &amp; Architecture • June 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/loop-engineering-never-argue-with-agent' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Loop Engineering - Or Why You Should Never Argue With an Agent</h3>
        <p>Clean iterations with recorded learnings outperform long, polluted conversations every time.</p>
        <span class="related-post-meta">AI &amp; Architecture • June 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/what-is-aggregate' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>What Is an Aggregate - and Why I Hate This Question</h3>
        <p>Understanding aggregates through the lens of consistency and use cases, not objects.</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
