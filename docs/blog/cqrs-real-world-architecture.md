---
layout: docs
title: CQRS in Action - A Real World Simple Architecture
description: How event sourcing and CQRS provide the flexibility to adapt and grow your system without mental tax. Real-world CQRS architecture patterns.
author: Martin Dilger
date: 2025-11-27
category: CQRS & Architecture
keywords: CQRS, event sourcing, CQRS architecture, command query separation, read models, write models, CQRS patterns, system flexibility
featured_image: /assets/images/blog/cqrs-architecture.png
tags: [cqrs, event-sourcing, architecture, patterns, scalability]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>CQRS in Action - A Real World Simple Architecture</h1>
    <p class="blog-post-subtitle">How event sourcing and CQRS provide the flexibility to adapt and grow your system without mental tax</p>
    <div class="blog-post-meta">
      <span>November 27, 2025</span>
      <span>10 min read</span>
      <span>CQRS & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/cqrs-in-action.png' | relative_url }}" alt="CQRS in Action">
  </div>

  <div class="blog-post-content" markdown="1">

It took me ages to understand what it really means to work with event sourcing and CQRS.
{: .lead}

I came from the state-based world, like most of us did - tables, relations, Object Mappers. Event Sourcing seems like just a small change. Just switch the persistence scheme. But the mental impact? Massive.


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The Inevitable Complexity Spiral

Any system built on state alone is doomed to grow in complexity over time - unless you heavily invest in fighting it.

Adding features means adding columns. Adding columns means touching things that already work. Side effects guaranteed.

### The Point of No Return

Eventually, you reach a level where new features don't fit the architecture anymore. You'd have to restructure your table schema - but in state-based systems, that comes with high cost. Restructuring is crazy expensive, so you typically can't do it.

Restructuring in a grown systems means, table migrations and high risk.

You're left with one option: add nullable columns and squeeze it in somehow.

### The Real Cost: Mental Tax

Let's say you have a customers table. Now you need to add tax numbers because you're targeting businesses - which wasn't the original plan.

Since private customers don't have tax numbers, you keep it the same table, but make the tax information nullable. Now, every time you work with a customer, you have to deal with nullable columns. Or you map them by "discriminator" to an object hierarchy using something like Hibernate - hiding what's really going on.

Crazy complex for a simple thing.

### The Compound Effect

It's mental tax. The more of these "subtleties" you have, the more expensive it gets. At some point, you will miss something - resulting in bad bugs. The more you squeeze features, the more bugs come out of your system.

## The Alternative - Just Another Event

In an event-sourced system? It's could be just another event - "CompanyInfoAttached."

You now have a customer AND an attached tax number. You can work with this information.

### The Key Difference: Flexibility

If you badly want, you can still project this information into the same customers table with the nullable column. But chances are - you might want to do it differently, and now you can.

You can have:

- A `customers` projection
- A `business_customers` projection
- A `tax_information` projection

**You have the flexibility to change and adapt your system. That's the key.**

## Real World Example: Adding Licensing to a SaaS

### The Requirement

For a SaaS application, we needed to build a licensing system. Adding users would trigger license fees. This was added much later in the project.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/cqrs-in-action-1.png' | relative_url }}" alt="Licensing System Event Flow">
</div>

### The Solution

We just reacted to "User Activated" (which already existed), which resulted in "License Added", which triggered the whole licensing (re-)calculation.

We didn't have to touch any of the existing, working things. We just added new slices - that's all.

### 100% Confidence

We had 100% confidence because we saw the impact of this feature already from the event model - no surprises.

We sat down with the business expert: "Tell me, how should this work?" We added a few slices, some new automations. In the end, it was super simple - including the payment integration.

## The Architecture in Practice - It Works

The neat thing: we used Supabase for projections. The client "only" saw tables and never knew about the event-sourced backend. We basically built two systems.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/cqrs-in-action-2.png' | relative_url }}" alt="Architecture Overview">
</div>

The client fired requests against the backend API, changing the system. New Events resulted in updated table projections. There was no need to make the client aware of the "events" - it had all it needed. And we could leverage all the benefits like row-level security out of the box.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/cqrs-in-action-3.png' | relative_url }}" alt="Event Projection Flow">
</div>

### Why Direct Table Access?

We first provided an API for the client, "wrapping" Supabase, but then we realized - why not just use the tables directly? They are perfectly crafted for every use case anyway.

Using Event Sourcing, you don't work with generic tables. There are no joins typically. Each slice has the "perfect" table for exactly this use case, with exactly the data it needs. (of course you can make exceptions to that rule, I had a good discussion with Alexander Miertsch about that recently here on LinkedIn)

That's why we chose to go for tables directly from the client - the data is already prepared, so building the client is super simple. You just use the prepared information.

## The Real Benefit: An Architecture That Works

This is CQRS in action. Essentially it's 2 systems - loosely coupled.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/cqrs-in-action-4.png' | relative_url }}" alt="CQRS Architecture">
</div>

### Plan Ahead with Confidence

We can plan the system ahead, build it, and add functionality - the architecture works.

You can model the whole system upfront. I'm typically pretty confident in what we model since we involve everybody from the start.

### Maintain Without Fear

You can maintain systems over months and years - since you only add new features and typically rarely touch existing ones. When we need to "modify" something, we treat it as "adding new" - we replace slices. We don't adjust existing slices - we delete them and regenerate them.

In the beginning, we provided this "backend" API to provide the client with Read-Access.. when we later decided to skip that - we had to replace some Live-Projections (reading directly from the Event Stream) with Database-Projections. It was easily done - just delete the slices and regenerate them from the Event Model.

## The Problem You're Facing

If you're stuck in the state-based trap - watching complexity spiral, scared to add features, drowning in mental tax from nullable columns and discriminators - you are stuck where everybody is stuck.

And your next feature might break something that works.

## What to do now

What you want is..

Being able to add new features without touching existing code. Plan systems with confidence before writing a line. See exactly what will break - before it does.

✅ **Model-first approach** — Business and dev working together, aligned visually, not playing telephone

✅ **Predictable delivery** — The number of modelled slices give you a GREAT and accurate idea of how big a new feature is.

✅ **Changes welcome** — Embrace change - it'll come anyways. Using the slice-based approach, change is welcome. You can stay flexible and adaptive.

✅ **Code Generation** — You can leverage AI and Code Generation (+ generate running specifications directly from your models). Your team can work this way too.

This Skill is learnable - I can help. And I take care of one more thing:

✅ **Train an Internal champion** — Someone on your team who can drive this independently, facilitate workshops and help grow your Teams.

Only 2 Spots available in November 2025 → [Book your Discovery Call now](https://www.nebulit.de) - I can give you some details

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

{% include related-posts.html %}

  </div>

</div>
