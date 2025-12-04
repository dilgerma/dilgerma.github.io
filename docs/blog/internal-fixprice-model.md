---
layout: docs
title: The Internal Fix Price Model - Why Assuming the Risk Makes You a Better Developer
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Internal Fix Price Model - Why Assuming the Risk Makes You a Better Developer</h1>
    <p class="blog-post-subtitle">If you take on a fixed-price project, you assume the risk—not the client. This powerful approach transforms how we think about projects, whether in consulting, client work, or leading an internal development team.</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>12 min read</span>
      <span>Event Modeling & Project Management</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/internal-fixprice-model.png' | relative_url }}" alt="Internal Fix Price Model">
  </div>

  <div class="blog-post-content" markdown="1">

In this issue, I want to write about something that is dear to my heart. I call it the "internal fix price model" and it's about the way I like to think about projects.

If you take on a fixed-price project, you assume the risk—not the client. I find this to be a powerful way to approach projects, whether in consulting, client work, or leading an internal development team.

Let's start with what most projects look like—the exact opposite of a fixed-price approach:

They exceed deadlines.
They go over budget.
They suffer from "mandatory" features being added long after commitment.
They lack clear requirements.
They have no well-defined acceptance criteria.

A fixed-price model eliminates these problems by enforcing strict boundaries.

To make it work:

No features can be added after the initial commitment - at least not without affecting the price. Every late addition is a liability that reduces profitability. Don't worry, of course change is inevitable - we'll address this in the next issue.
Going over budget is, by definition, not an option.

This approach ensures predictability, profitability, and efficiency—but it requires discipline and clear agreements upfront.


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Faster delivery = more profit

Think of your local pizza delivery guy. What if he found a way to deliver twice as many pizzas in the same time? Or better yet—what if he became so efficient that each delivery took half as long?

He could handle more orders.
His tips would likely increase—customers love fast service.

This principle applies directly to the Internal Fixed-Price Model. Fixed prices reward efficiency—the faster and more effectively you deliver, the more profitable you become.

It's a model worth striving for.

## NO BIG DESIGN UPFRONT

I'm not sure exactly when it started, but in the teams I worked with, it felt like a revolution against the Waterfall approach and the Big Design Upfront (BDUF) imposed by others.

We were tired of it.

Back then, teams were often treated as little more than code monkeys—translating requirements handed down by architects and requirement engineers into running code. No discussions, no real collaboration. We all know how that ended for most projects—not well.

So when "No Big Design Upfront" emerged, it felt like a relief. Finally, we could have real discussions and keep systems flexible over time—to a certain extent.

But this shift had a clear downside: a lack of predictability and planning. Without a structured plan, we suddenly couldn't say, "When will this be done?"

I bought into it at the time—because we became agile alongside it. The new mindset was simple:

Prioritize.
Deliver the most important things by the deadline.
You can't have it all. Sorry.

## The plan

That simply doesn't work in a Fixed-Price Model.

The deal is clear: this price, all features, delivered on time. No excuses.

Imagine ordering 10 pizzas at your local pizza shop, paying for all of them, and then only getting 7 because the rest weren't ready in time. That would be unacceptable—and it's no different in software.

A fixed-price commitment means delivering everything agreed upon, within the deadline. No surprises. No "we ran out of time."

## How do we make this plan?

For a long time, this was a mystery to me.

I was always a fan of Event Storming, a collaborative modeling technique, but after the initial session, I often struggled to turn it into action. That's when Event Modeling came into play—it was exactly what I had been looking for.

Event Modeling finally gave me "the plan."

I won't go into the details here—I've been writing about it almost daily since January 2024.

Want to try it in your Team - I offer a 2-Day Workshop to apply this in your Team

But what I do want to show you is how Event Modeling enables us to create a solid plan, making internal fixed-price development possible.

To be clear, it's not about whether you should use fixed prices. It's about having the ability to do it—if you had to.

First, plan the system in Slices. Want to know how that works in detail? Check the book, which describes the whole process.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/internal-fixprice-model-1.png' | relative_url }}" alt="Planning the system in Slices">
</div>

Important, we also define the business rules per Slice using "Given / When / Thens".

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/internal-fixprice-model-2.png' | relative_url }}" alt="Defining business rules with Given/When/Then">
</div>

These slices are the key to everything.

They allow us to break the system into small, meaningful building blocks, making it easier to understand and implement. And the best part? We only need a handful of patterns to model the entire system:

State Change – How does information enter the system?
State View – How does information leave the system?

With just these core patterns, we can map out the whole system efficiently.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/internal-fixprice-model-3.png' | relative_url }}" alt="Core patterns for modeling">
</div>

These slices are incredibly powerful because they are independent of each other—which means they can be planned and implemented separately. But how does that help?

## Measuring Progress

Let's say that after a few Event Modeling sessions, we've modeled 4 workflows with 60 slices.

In a fixed-price model, we need to accurately estimate how long it will take to implement the system.

Workflows (which we call chapters) are marked with a blue arrow.
Each workflow can contain any number of slices.

By breaking the system into these slices, we create a clear, measurable plan—one that allows for accurate time estimates and ensures predictability in fixed-price development.

Slices are our unit of measurement.

Each slice is small enough to be implemented within a limited timeframe—typically 1 to 2 days.

## How Do We Know How Long a Slice Takes?

We measure.

For the first two sprints, we track how long it takes the team to implement slices. Let's say we complete 10 slices in those two sprints. On average, it takes 2 days to build a production-ready slice.

Now, with 60 slices in total, we can estimate that implementing the 4 workflows will take 120 days. No Story Points, no abstract measurements - simple third-grade math.

Why is this important?

Early measurement is critical—but over time, as we complete more workflows and projects, we establish a default cycle time. This makes future planning even more predictable.

Instead of estimating with abstract sizes like story points - we use our default cycle time for slices.

Why does this work? because the Slices are small and follow the same 4 Patterns again and again, the implemenation is very often just a copy of a previous slice with little adjustments.

## Change is inevitable

All fine - but change is inevitable. In a fixed price model, you need to be able to deal with change. What if we realize, that we forgot a few slices? What if for a new feature, some additional slices need to be added?

How do we deal with that?

This will be part of Issue #21 in this series about the "Internal Fixprice Model".

Stay tuned!

Want to learn more about the process - the best way is to read the book and take the companion online course at the same time.

If you want to work with me, feel free to just send me a message on LinkedIn or simply reply to this E-Mail.

Have a nice day!

**Martin Dilger**

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

  </div>
</div>
