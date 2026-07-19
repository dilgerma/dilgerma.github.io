---
layout: docs
title: Building Software Should Feel Like Uber, Not Like Being the Mechanic
description: We force the driver to become the engineer. Why the best systems hide their engine room behind an IKEA-manual-simple interface - two recipes are all there ever is, "change something" or "read something."
author: Martin Dilger
date: 2026-06-24
category: Event Modeling & Architecture
keywords: event modeling, simplicity, DCB, projections, software architecture, client communication, DDD vocabulary
featured_image: /assets/images/blog/building-software-should-feel-like-uber.png
tags: [event-modeling, architecture, simplicity, dcb]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Building Software Should Feel Like Uber, Not Like Being the Mechanic</h1>
    <p class="blog-post-subtitle">We force the driver to become the engineer. What if we handed clients an IKEA manual instead of a tour of the engine room?</p>
    <div class="blog-post-meta">
      <span>June 24, 2026</span>
      <span>8 min read</span>
      <span>Event Modeling &amp; Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/building-software-should-feel-like-uber.png' | relative_url }}" alt="Building Software Should Feel Like Uber, Not Like Being the Mechanic">
  </div>

  <div class="blog-post-content" markdown="1">

I was organizing the Event Modeling conference in Munich last week.
{: .lead}

And somewhere between the logistics, the speakers, and the hallway conversations, one word kept coming up. Simplicity.

Allard Buijze said it best in his Friday keynote. We force the driver to become the engineer. He put up a slide with a blacklist of words - terms we use every day in the event sourcing world - and suddenly I saw it from the outside. Projection. DCB. Event stream. Slice. Words that mean everything inside the engine room, and absolutely nothing to the person who just needs to get from A to B.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/building-software-should-feel-like-uber-1.png' | relative_url }}" alt="Conference slide listing familiar event sourcing vocabulary that reads as a wall to everyone else">
</div>

His point was simple. Building systems should feel like Uber. I'm here. I need to go there. One swipe.

The problem is, we simply know too much.

We have proven recipes for building flexible, powerful, maintainable systems. We've built them dozens of times. We know exactly how the engine works. We had tons of "mechanics" at the conference.

And that's precisely the trap.

The moment a client asks us to explain what we do, we often walk them straight into the engine room. We start talking about how flexible projections are, how DCB adds adaptability, how event modeling captures domain intent, how slices solve the AI and human scalability problem.

And I've watched their eyes. I've seen the moment the thread is lost.

The truth is - for most clients, that is gibberish. And it should be. They shouldn't have to care what a projection is. They shouldn't have to understand the stack. That's our job.

I always had the goal to explain things in simple terms. But I can go further. I had a similar blacklist in mind - words I typically don't use in discussions.

## The IKEA Manual

What we should offer is an IKEA manual for software systems. Step by step. And on every step, you can call for help if you get stuck.

That's it. That's the whole thing.

It's not a rigid linear process either. It's more like a choose-your-own-path manual. Depending on what you're building, you follow different pages. Are you changing something? Continue on page 3. Are you reading something? Continue on page 12.

The manual routes you to the right recipe. You don't have to understand why.

There are only two recipes to understand.

"Change something" or "read something"

Every system I have ever built, every problem I have ever solved, comes down to two things.

Reading. And changing.

That's it.

Automatic processes sound like a third category - but they're not. An automatic process just reads something, then changes something. So even that collapses back into two.

Two recipes. That's the whole engine. And if you don't want to, you should not have to look into the engine room.

## From the Shelf, or Freshly Made

Inside those two recipes, there isn't much variation. Just follow the manual.

For some steps in the manual, you can make a decision. When you read data, do you want it pre-assembled from the shelf - assembled once, ready when you need it? Or freshly made - built on demand, every time.

The default answer is always: take it from the shelf. And this always works.

In the engine room - we know we either materialize a projection or we assemble it directly from the event stream - I call it a Live Projection. But to use it? You don't have to know. Just decide - from the shelf or freshly assembled? Not sure? Just take it from the shelf. Always.

Freshly made exists for specific situations - where you need to prepare state on the fly. But most clients will never need that page of the manual. And they don't need to know it exists.

This is the part that took me the longest to accept. The manual's job is to protect you from decisions you were never supposed to make. The best systems don't present you with choices - they have smart defaults, and they route you around complexity quietly.

Just like Uber never asks you which route the driver should take. The driver knows.

**Simplicity isn't about dumbing things down. It's about protecting people from complexity they were never supposed to carry.**
{: .highlight-box}

The engine still exists. The projections, the event streams, the architecture - all of it is still there, doing exactly what it's supposed to do. We understand it deeply. We built it carefully.

But the person in the backseat just needs to get where they're going.

That's what hopefully many participants took home from Munich. The best thing we can do for our clients is to close the engine room and show the manual instead.

## We Already Have the Manual

We talked about the manual for two days in Munich. Event Modeling is... another term from the engine room.

You don't have to know we are doing Event Modeling to visualize your processes. And you don't have to know that the manual is written with Event Modeling. You shouldn't care.

In the engine room, we know that our manuals are written with Event Modeling. Simply because it's the easiest way to do it.

One thing everybody knows about the IKEA manual - if you follow the steps in the manual, and you don't leave out anything, it'll work out almost always. Typically you don't deviate from the steps in the manual. There's no reason to. If something goes wrong, there are clear instructions on what to do - how to get new screws, how to order missing pieces.

And that's all you should care about.

Now I gathered my "engine-room vocabulary" here. I will not use those words anymore when I talk to you or other clients. You can expect clear and simple language. It might take a while to train myself and others, but we'll get there. And yes, there are also some terms from Event Modeling itself on the list.

Aggregate, Aggregate Root, Bounded Context, Ubiquitous Language, Saga, Projection, Read Model, Write Model, CQRS, Domain Event, Integration Event, Event-Carried State Transfer, Compensating Action, Outbox, Process Manager, Upcasting, Rehydration, Tombstone, Decider, DCB, Event Modeling, State Change, State View.

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
    <a href="{{ '/docs/blog/dcb-dynamic-consistency-boundary-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Does DCB Affect Event Modeling?</h3>
        <p>Focus on the business domain - and generate code where possible.</p>
        <span class="related-post-meta">Event Sourcing • July 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/event-modeling-conference-munich' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>40 Practitioners, 2 Days, and the Future of Software Design</h3>
        <p>What happened at the first Event Modeling Conference in Munich.</p>
        <span class="related-post-meta">Event Modeling &amp; Conference • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/hold-my-beer-engineering' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Hold My Beer Engineering</h3>
        <p>It's your engineer's understanding that goes to production, not your business knowledge.</p>
        <span class="related-post-meta">Event Modeling &amp; Process • May 2026</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
