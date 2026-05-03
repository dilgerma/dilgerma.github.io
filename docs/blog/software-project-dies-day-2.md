---
layout: docs
title: Your Software Project Dies on Day 2 - It's the Data That Kills You
description: We learned to deal with messy code. But when you hit coupling in your data layer, that's where the cursing starts. Why AI-generated projects fail after the first iteration and how slice-based architecture prevents it.
author: Martin Dilger
date: 2026-03-06
category: AI & Architecture
keywords: coupling, AI development, data modeling, slice architecture, event sourcing, legacy systems, software architecture
featured_image: /assets/images/blog/software-project-dies-day-2.png
tags: [ai, architecture, coupling, slices, data-modeling]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Your Software Project Dies on Day 2</h1>
    <p class="blog-post-subtitle">We learned to deal with messy code. It's the data that kills you.</p>
    <div class="blog-post-meta">
      <span>March 6, 2026</span>
      <span>8 min read</span>
      <span>AI & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/software-project-dies-day-2.png' | relative_url }}" alt="Software Project Dies on Day 2">
  </div>

  <div class="blog-post-content" markdown="1">

I see a lot of posts from people using my exported Event Models to generate code. It's fun and you can quickly get something working.
{: .lead}

And I'm looking at what is typically generated - 1000+ line TSX files, coupling in the backend - thinking "this is going to hurt you later."

Don't get me wrong. I don't blame anyone. I started exactly the same way. Everybody does.

Someone says "build me \<thing I need\>" and the AI generates it. On first look, it's fine. It works. You move on.

But then you see all these tiny problems starting to appear. They add up. **Projects don't fail on day 1. They fail on day 2.**

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## It's Not the Messy Code That Kills You

It's not even the messy code that kills your project in the end. **Handling existing data in a jungle of coupling. This is where the cursing starts.**

I've worked on tables with 400 columns and more. Making real change is impossible. Your job is not to break anything. An LLM will just add a new column to whatever table looks best. It's learned behavior - trained on some of the worst codebases in the world.

**That 400-column table? It's not a database table. It's a graveyard of feature requests.**
{: .highlight-box}

## The Modularity Test

Here's the test: Can you look at one specific feature - doesn't matter which one - delete it (including tables, UI, business logic) - start the system, and everything will still run? Just without that one feature?

**That's the level of modularity you need to work effectively with AI.**

When I started working with slices, it was such a revealing way of working. You get this "lego brick" feeling. Everything becomes just another slice. If you don't need something, you just delete the slice and you're good.

I was so fed up with projects turning into messes, even though we really tried to make it better this time. It seemed like an inevitable fate for most projects, if you keep adding features long enough.

## Coupling Is the End Boss

**Coupling is the end boss - AI amplifies this.**

If you base all features on one table, a migration to that table will affect all features. That's coupling.

If you can't adjust a table because two features are based on it - that's coupling.

Then you start doing workarounds. Introduce "special" columns. Add conditional logic. From here on everything gets worse.

And even though you used microservices, self-contained systems, API contract testing - you end up in the same place you were before.

**You just distributed the problem.**

## Structure First

That's why I always define the blueprint architecture by hand.

**"That is what good looks like."**

From there, you develop custom code generators and skills that allow the AI to work toward the blueprint architecture.

For the AI, it's painting by the numbers. If you prepare the structure, it can do it at lightning speed.

**If you don't define the blueprint, the AI will define it for you.**

And it's trained on some of the worst codebases in the world.

## After Day 1 Comes Day 2

After Day 1 comes Day 2. That's true for every project.

Have you hit Day 2 yet?

The difference between a prototype and a production system is not about code quality. It's about what happens when you need to change something. When requirements shift. When the business pivots. When you need to delete a feature without taking down the entire system.

Day 1 is about getting it to work.
Day 2 is about keeping it working while everything around it changes.

Most teams never prepare for Day 2. They think clean code and microservices will save them. They won't. Not if your data layer is coupled. Not if deleting one feature requires a three-week migration plan.

**Slice-based architecture is how you survive Day 2.**
{: .highlight-box}

Each slice is independent. Each slice owns its data. Each slice can be deleted, modified, or replaced without touching anything else.

That's not a nice-to-have. That's the only way forward when AI is generating code faster than humans can review it.

Structure first. Blueprint first. Slices first.

Then let the AI paint by numbers.

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** on March 16/17 — learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Full Agentic Event Modeling Plattform

AI-Enabled Event Modeling and Code-Generation

[Start Modeling here →](https://app.eventmodelers.de){:target="_blank" .cta-button}
</div>

  </div>
</div>
