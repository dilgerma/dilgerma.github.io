---
layout: docs
title: An Event-Sourced SaaS Story - 150+ Tables, Zero Joins, Almost Zero Operation Cost
description: The system is a Monolith running on the JVM, built with a Team of 4, one deployable, 240 independent slices. 150+ tables. 90% AI-generated code. And our server just sits there, waiting for something to do.
author: Martin Dilger
date: 2026-02-01
category: Event Sourcing
keywords: event sourcing, saas, cqrs, supabase, kotlin, spring, ai generated code, vertical slices, monolith, multi-tenancy
featured_image: /assets/images/blog/event-sourced-saas-zero-joins.png
tags: [event-sourcing, saas, cqrs, architecture, ai, vertical-slices]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>An Event-Sourced SaaS Story - 150+ Tables, Zero Joins, Almost Zero Operation Cost</h1>
    <p class="blog-post-subtitle">The system is a Monolith, running on the JVM, built with a Team of 4, one deployable, 240 independent slices.</p>
    <div class="blog-post-meta">
      <span>February 1, 2026</span>
      <span>18 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/event-sourced-saas-zero-joins.png' | relative_url }}" alt="Event-Sourced SaaS Architecture">
  </div>

  <div class="blog-post-content" markdown="1">

It's been quiet in the last few weeks, but that'll change. I've been working in several SaaS platforms, and I want to tell you about one in this newsletter.
{: .lead}

## 150+ Tables, Zero Joins, Almost Zero Cost

The System I want to talk about today has an interesting architecture. It is built using CQRS on Supabase. And to keep things simple, we made some really radical decisions. For example - our backend has no Read-API. What? Makes zero sense, right? Keep on reading if you want to know what that means.

The system is a Monolith, running on the JVM (Kotlin and Spring), built with a Team of 4, one deployable, 240 independent slices. 150+ tables. 90% AI-generated code. And our server just sits there, waiting for something to do.

I've been on the JVM my entire career - Kotlin, Spring, Axon for event sourcing and CQRS. But here's the controversial part that makes most developers look at me like I'm crazy.

## Why Event Sourcing? Because It Is So Much Simpler Than CRUD

I know. You don't believe me. Nobody does at first.

But here's what I've learned: CRUD systems look deceptively simple upfront. Then the complexity creeps in. Inevitably. You start with a clean schema, some basic endpoints, and everything feels great. Six months later, you're drowning in join tables, cached denormalized views, and business logic scattered across three layers of your application.

Event sourcing gives you flexibility that's unseen in traditional architectures. So when we started building our SaaS platform, the decision was clear: we won't fall into the CRUD trap.

## The PII Problem (And Our Elegant Solution)

Of course, event sourcing brings its own challenges. The big one: how do you handle PII in an immutable event log?

What's the PII Problem? We need to be very careful how we handle data (as in every architecture). And if a User requests data to be removed, we need to be able to do so.

But how do you handle this with an immutable list of events like in Event Sourcing? We can't just delete Events. That breaks the whole point. But legally, you might have to delete personal data.

Our solution: **crypto shredding**.

We built a simple functionality that plugs into serialization of the Event Store - it encrypts PII-relevant data and stores the keys in Supabase Vault. When someone requests data deletion, we don't touch the events. We just destroy the encryption key. The data's still in the event log technically, but it's permanently unreadable.

## The Most Radical Decision: No Read API

Here's where most developers' heads explode.

**There is no read API in our server.**

None. Zero.

The "read API" is direct table access - clients query Supabase tables directly.

### Why We Did It: Multi-Tenancy at the Database Layer

The driver was multi-tenancy. We handle 100% of tenant isolation at the database layer using Row Level Security (RLS) policies.

Our application layer knows nothing about multi-tenancy. Literally nothing.

A developer writes `SELECT * FROM persons` and it automatically returns only the persons for that tenant. The RLS policy states: "clients can only select persons which belong to the assigned tenant."

Zero application-level filtering. Super simple.

But it feels wrong.

We've been taught for decades NOT to give clients direct database access. It goes against everything we learned. And of course, if your application isn't structured for this, it creates tons of problems.

For example: there is not a single join in our system. Now the rest of the heads exploded I guess. As I said, we made some radical decisions.

## The "No Joins" Constraint

Not one join. Anywhere.

Why? Because with CQRS and direct database access, we're building dedicated, denormalized projections for each view. Every view has its own tailor-made table structure.

There's literally no need for joins in 90% of cases.

The other 10%? We simply make 2 queries. That's something we accept.

The key insight: the Event Model shows you exactly what structure each projection needs.

You're not guessing. You're not doing the classic "normalize first, denormalize later when performance sucks" dance. You model the view requirements upfront, and the projection structure is obvious.

## The Iron-Clad Development Rule

**We don't write a single line of code before we model it.**

This isn't a preference. It's discipline. Almost religious conviction.

Why?

Because I've been burned too many times by "just this small fix."

You know the pattern. Something seems simple. Thirty minutes, max. You skip the modeling because it's obvious, right? Then one change begets the next. What you thought was a small fix cascades into a major refactor. Days or weeks later, you're rebuilding half the system.

The Event Model shows you those ripple effects BEFORE you write code.

Getting burned is the best way to learn, unfortunately.

And I got burned enough times to make this rule absolute. I simply decided not to get burned anymore.

## UI Without Logic

Our frontend is React with very simple components.

Since the data is tailor-made in projections, there's literally no logic in the UI. Just:

- Select from table
- Show the data
- Fire off commands

That's it.

## The Game-Changer: AI-Generated Code

Here's where it gets interesting: This allows us to generate 80-90% of our UI.

"But Martin," you're thinking, "AI-generated code is usually garbage."

You're right. In traditional architectures, it is.

But with our approach? Even for AI, It feels unnatural to structure it wrong.

Using the sliced approach and based on tailor-made projections, there is literally no other way than to do it right. Even for AI.

The architecture constrains everything:

- Event Model defines the projections
- Projections define clean, purpose-built data structures
- AI generates components from clean structures
- The system almost can't produce bad code

We're at 90% generated now. We'll hit 100% soon.

## The Architecture at Scale

Our system has 240 independent slices (give or take).

Each slice can be deleted without affecting the others. Yes, we pay with redundancy - we're working with 150+ tables. But here's the thing:

**Each slice is one consistency boundary. Like a tiny microservice.**

It's all one monolithic deployment. There is simply no need to physically distribute it.

Best of both worlds. The isolation and independence of microservices, without the operational nightmare of deploying 240 separate services.

### Managing the Madness

"But how do you manage 150+ tables without going insane?"

The answer: most changes are isolated to a small set of slices. When multiple slices ARE affected, the Event Model shows you the dependencies exactly. No surprises. No hidden coupling.

Despite having 240 slices, the system feels lightweight.

## The "Bored" Server

Here's my favorite part: our system is bored most of the time.

It's a write engine. Process commands. Emit events. Update projections. 90% of the system is reading. All those queries never touch our system. This is completely handled by Supabase and Postgres. Hands off.

That's it.

Supabase and Postgres handle all the heavy lifting. Our application server just... waits.

The result? The whole system runs at almost no cost.

We could handle 100x the load without even noticing.

## The Two-Day Startup

This architecture isn't just elegant. It's a startup factory.

Our first system took 3 months to build. We were figuring out the patterns, establishing the approach, learning what worked. Now this is our blueprint.

The second system? From 3 months to two days.

- **Day 1:** Event Modeling - very focused, small group
- **Day 2:** Building (100% generated code)

Two days. Complete, production-ready SaaS.

Both are launching in March - the first one on March 1st, targeting a very specific market niche in one country. The second follows shortly after.

## What This All Means

This whole model works beautifully for new systems - and is incredibly fast.

But it works equally well for existing systems.

Are you planning a legacy modernization right now? Or are you in the middle of one?

As for the system I described in this newsletter, good solutions start with a clear understanding of the problem.

Most modernizations fail before they even start - death by requirement gaps. Hidden business rules buried in legacy code. Assumptions nobody documented. Handoffs that worked in the old system but nobody can quite explain why.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/multi-tenancy-event-sourcing' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>A Beautifully Simple Solution to Multi-Tenancy</h3>
        <p>How we made tenant data leaks impossible</p>
        <span class="related-post-meta">Event Sourcing</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>AI is the accelerant. Event Modeling is the structure.</p>
        <span class="related-post-meta">AI & Event Modeling</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/cqrs-real-world-architecture' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>CQRS in Real-World Architecture</h3>
        <p>Practical guidance on implementing CQRS in production systems</p>
        <span class="related-post-meta">Architecture</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
