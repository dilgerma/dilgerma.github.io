---
layout: docs
title: A Beautifully Simple Solution to Multi-Tenancy in Event Sourcing
description: One forgotten WHERE clause and Customer A sees Customer B's invoices. Here's how we made tenant data leaks impossible using Row Level Security and Event Sourcing.
author: Martin Dilger
date: 2026-02-01
category: Event Sourcing
keywords: multi-tenancy, event sourcing, row level security, RLS, SaaS, tenant isolation, data security, CQRS, projections
featured_image: /assets/images/blog/multi-tenancy-event-sourcing.png
tags: [event-sourcing, multi-tenancy, security, saas, architecture]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>A Beautifully Simple Solution to Multi-Tenancy in Event Sourcing</h1>
    <p class="blog-post-subtitle">One forgotten WHERE clause and Customer A sees Customer B's invoices. Here's how we made it impossible.</p>
    <div class="blog-post-meta">
      <span>February 1, 2026</span>
      <span>10 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/multi-tenancy-event-sourcing.png' | relative_url }}" alt="Multi-Tenancy in Event Sourcing">
  </div>

  <div class="blog-post-content" markdown="1">

One forgotten WHERE clause and Customer A sees Customer B's invoices. That's the nightmare scenario every SaaS developer fears.
{: .lead}

Here's how we made it impossible - completely removing the burden from each developer's shoulder.

## The Problem Every Platform Faces

The moment someone can register for your platform, you're typically dealing with multi-tenancy. It's inevitable for any SaaS business.

In traditional CRUD architectures, the solution is typically to add a tenant discriminator column to every single table. Every query becomes:

```sql
SELECT * FROM invoice_items WHERE tenant_id = 'xyz'
```

Simple, right? You filter by tenant, and each customer only sees their own data.

Until someone forgets that WHERE clause or even worse - a JOIN breaks it without you noticing.

Those queries can become quite complicated, especially when you start to join over multiple tables. Harder and harder to ensure correctness.

Maybe it's a junior developer on their first week. Maybe it's a senior developer shipping a hotfix at 2 AM. Maybe it's you, distracted by three Slack messages and a production alert.

So typically you add an extensive test harness to ensure tenant isolation. But you're never sure. The cognitive burden is enormous. Every single query. Every single time. No exceptions.

## The Wrong Assumption - Event Sourcing Makes This Harder

When you move to event sourcing, the first question that comes up is: Wait a second, how do we even handle multi-tenancy here?

This isn't just an academic question. The answer has to be baked into your architecture.

We recently faced this exact decision while building a SaaS platform - fully event-sourced. We had to analyze the requirements, consider data security concerns, and answer the critical question: Is it acceptable to have multiple tenants' data in the same event store?

Using Event Sourcing - there are two places where data is stored. Raw data lives in the event store - but data your clients work with lives in projections - tailor-made views on the raw data. Those live in relational tables (or whatever is preferred by the client).

We made a decision - yes, it's fine to have the data in the same event store if the architecture enforces tenant isolation. But how did we make this bulletproof?

In our event-sourced system, multi-tenancy lives on the read side - in projections. That's where you're querying data, building views, and serving information to users. So basically the same approach discussed earlier.

With the same problem. One mistake and you've mixed tenant data. Customer A sees Customer B's invoices. Your compliance team has a heart attack. Your customers lose trust. Your SaaS business is in serious trouble.

So we added one small twist.

The critical difference - with Event Sourcing we have full control over each and every projection. Instead of having those gigantic-tables, exposing all information and relying on the client to do the filtering - we plan & design tailor-made projections for every use-case before any code is written.

We define exactly, which Data goes into which projection.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/multi-tenancy-event-sourcing-1.png' | relative_url }}" alt="Tailor-made projections for multi-tenancy">
</div>

But that alone is not enough. How do we ensure that a developer doesn't forget to filter by tenant? How do we remove human error from the equation entirely?

## The Infrastructure Solution: Row Level Security

We implemented Row Level Security (RLS) at the database layer for each tailor-made projection.

Here's how it works: You define a policy that says "a client can only read data for their assigned tenant." When RLS is active, even if a developer writes:

```sql
SELECT * FROM invoice_items
```

Without any WHERE clause, they only get their own tenant's data. The database enforces the filter automatically.

It's like having dedicated schemas per tenant, without actually having dedicated schemas per tenant. You get logical isolation with physical sharing.

**Beautifully simple.**

## Making It Bulletproof

For RLS to work, we need to guarantee that every single event holds tenant information. No exceptions.

We store four critical pieces of metadata alongside every event:

- **correlation-id** - tracks the entire flow
- **causation-id** - tracks the immediate cause
- **tenant-id** - identifies which tenant this belongs to
- **user-id** - identifies who triggered this

We enforce this at two levels:

First, at the framework level using Axon, which automatically copies metadata from element to element. Once you set the tenant context, it flows through your entire event chain.

Second, at the infrastructure layer. You literally cannot write an event without this metadata. The system will reject it.

No human discipline required. No code reviews needed to catch missing metadata. The architecture itself makes mistakes impossible.

## The Principle Behind It All

Real good solutions are almost always simple.

If you need to bend and twist to make something work - if you're fighting against the grain of your tools and patterns - it's probably not the right solution.

This multi-tenancy architecture embodies that principle:

- **Basic rules** (every event has tenant metadata, RLS enforces access)
- **Massive flexibility** (shared by default, isolated when needed)
- **Zero chance of data leaks** (infrastructure prevents errors)

No complexity. No fragility. Just elegant simplicity that scales.

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
    <a href="{{ '/docs/blog/event-sourcing-simple' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Day Event Sourcing Finally Made Sense</h3>
        <p>Event sourcing isn't complex - it's complete</p>
        <span class="related-post-meta">Event Sourcing</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/cqrs-real-world-architecture' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>CQRS in Real-World Architecture</h3>
        <p>Practical guidance on implementing CQRS in production systems</p>
        <span class="related-post-meta">Architecture</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/protecting-systems-seismic-shifts' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How to Protect Your System Against Seismic Shifts</h3>
        <p>Building adaptable systems with Event Sourcing</p>
        <span class="related-post-meta">Architecture</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
