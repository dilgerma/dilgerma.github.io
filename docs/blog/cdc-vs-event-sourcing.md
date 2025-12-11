---
layout: docs
title: CDC is What You Do When You're Not Allowed to Use Event Sourcing
description: Teams willingly embrace CDC's complexity but reject Event Sourcing as too complicated. What's really going on? Understanding the familiarity trap and why intent matters.
author: Martin Dilger
date: December 11, 2025
category: Event Sourcing & Architecture
keywords: event sourcing, CDC, change data capture, event-driven architecture, state-based thinking, event-based thinking, debezium, kafka, software architecture, domain events, business intent
featured_image: /assets/images/blog/cdc-vs-event-sourcing.png
tags: [event-sourcing, cdc, architecture, event-driven, debezium, kafka, intent]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>CDC is What You Do When You're Not Allowed to Use Event Sourcing</h1>
    <p class="blog-post-subtitle">Teams willingly embrace CDC's complexity but reject Event Sourcing as too complicated. What's really going on?</p>
    <div class="blog-post-meta">
      <span>December 11, 2025</span>
      <span>15 min read</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/cdc-vs-event-sourcing.png' | relative_url }}" alt="CDC vs Event Sourcing">
  </div>

  <div class="blog-post-content" markdown="1">

I recently read Gunnar Morling's article (https://www.morling.dev/blog/you-gotta-push-if-you-wanna-pull/) about change data capture and push-based queries. As I worked through it, I couldn't shake a thought: he is basically describing Event Sourcing, without mentioning Event Sourcing. He's describing exactly what most teams would love to have - reactive systems, event-driven flows, derived views. Yet many of these same teams will tell in the same sentence, that Event Sourcing is "too complex."

There's a fascinating paradox here. Teams willingly embrace CDC's - setting up Debezium, managing Kafka connectors, dealing with schema evolution in CDC streams - but simultaneously reject Event Sourcing as too complicated. What's really going on?

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The Familiarity Trap

I think it comes down to something simpler than complexity: familiarity. Capturing changes from a relational database still feels like known territory. You're working with tables, columns, primary keys - the mental models developers have used for years.

I often hear people argue that CDC is "better Event Sourcing" because people don't have to learn a new paradigm. But here's the problem: learning the new paradigm - or better yet, unlearning the old one - is exactly what makes it work.

The distinction is fundamental. What Gunnar describes is deriving changes from state. Event Sourcing is deriving state from changes. CDC reverse-engineers events from state mutations. With Event Sourcing, the events ARE the source of truth, and state is just a projection.

## The Mental Shift That Changes Everything

State-based thinking asks: "What is the state?" Event-based thinking asks: "What happened?"

The moment I truly understood Event Sourcing, there was no going back. When you've captured all those state changes as first-class events, you're free to do whatever you want with them. It's fascinating - the possibilities unfold in ways that simply aren't available when you're locked into state-first thinking.

Here's what's interesting: even if your implementation remains state-based, thinking in events is always beneficial. It captures system behavior much more clearly. You see what actually happens in your domain, the facts, the flow of time.

But if event-based thinking is valuable even without Event Sourcing implementation, why push teams to go all the way? Why not just say "think in events, model in events, but store state" - which is essentially what CDC gives you?

## The Missing Piece: Intent

CDC gets you halfway there. You capture the changes, you can materialize views, you can precalculate things. But you lose something critical: intent.

CDC gives you "what changed." Event Sourcing gives you "why it changed" - the business intent behind the change. That intent is where true flexibility lives.

Let me give you a concrete example. We use CDC extensively in integration scenarios - it's not a bad tool at all. Actually it's crucial for integration.

But sometimes it makes people do crazy things. In one project where Event Sourcing didn't play any role (forbidden by Enterprise Architecture - Event Sourcing is not part of the Blue Print), we used CDC to capture changes to a customers table. We had the state deltas, we knew fields had changed, but we didn't know why.

So what did we do? We built custom "intent check" logic that analyzed the incoming change against the current state to rediscover the business event. Come on, I know you are doing this as well.. admit it. We were comparing deltas, looking at which fields changed together, trying to reverse-engineer: "Was this a customer upgrade? A correction? A cancellation?"

Think about that for a moment. We threw away the intent, then built custom logic to guess at what it might have been. We were doing "poor man's Event Sourcing" - building the hardest parts ourselves, just badly.

And here's the thing: this is what most teams do. They avoid Event Sourcing because it requires radically different thinking. They stick with what feels familiar, even when that means recreating Event Sourcing piece by piece, without the benefits that come from embracing the paradigm fully.

## Why the Resistance?

When I work with teams, the resistance isn't really technical. It's a people problem. If you truly apply Event Sourcing, it's radically - really radically - different from what you've been doing for years.

You only focus on what happens in the system, the facts. You don't think in state. That shift feels wrong to experienced developers. Their instincts, built over years of CRUD applications and normalized databases, push back hard.

Some team members get it, get excited about the possibilities. But the majority isn't ready. They need to change their thinking, and that's the really hard part. It's not about learning new technology - it's about rewiring fundamental assumptions about how systems work.

## The Question You Should Ask

Look, CDC has its place - it's crucial for integration. But it's often misused as poor man's Event Sourcing.

If you're already doing CDC, look closely at what you're building on top of it. Are you writing logic to figure out business intent from state changes? Are you reconstructing the "why" from the "what"? Are you building sophisticated change analysis to understand what actually happened?

If so, you're already doing Event Sourcing. You're just doing it the hard way, without the tooling, patterns, and clarity that come from embracing it directly.

The real complexity isn't Event Sourcing. The real complexity is pretending you don't need it while recreating it badly, one custom integration at a time.

CDC is what you do when you're not allowed to use Event Sourcing. But maybe it's time to ask: who's not allowing it? And what are they actually protecting you from - complexity, or just unfamiliarity?

Martin Dilger is the founder of Nebulit and a recognized expert in Event Modeling and event-driven architectures. He helps teams cut through project chaos by bringing clarity to complex systems.

<div class="headline-divider"></div>

Your team works with CDC, Kafka and streaming technologies and you have the feeling it's not running smoothly? You feel there's a lack of know-how and experience? Maybe we can help. <a href="https://calendly.com/nebulit/erstgespraech" target="_blank">Learn more now</a>. You can also place some technical questions here.

<div class="headline-divider"></div>

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
    <a href="{{ '/docs/blog/event-sourcing-simple' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Day Event Sourcing Finally Made Sense</h3>
        <p>Event sourcing isn't complex - it's complete. It doesn't hide information; it preserves it.</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/integrating-legacy-systems-cdc' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Integrating with Legacy Systems</h3>
        <p>How Change Data Capture (CDC) unchains data from legacy systems</p>
        <span class="related-post-meta">Legacy Integration & CDC • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/event-sourcing-when-not-to' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>When Event Sourcing Doesn't Make Sense</h3>
        <p>An event marks a business-relevant change in your domain or system</p>
        <span class="related-post-meta">Event Sourcing • December 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
