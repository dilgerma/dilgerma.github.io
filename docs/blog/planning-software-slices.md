---
layout: docs
title: Reliably planning software with slices
description: How Event Modeling and Slices provide transparent, data-driven roadmap planning - making software planning reliable and predictable.
author: Martin Dilger
date: November 29, 2025
category: Event Modeling & Planning
keywords: software planning, event modeling slices, roadmap planning, project estimation, data-driven planning, transparent planning, slice architecture, software estimation, project management, predictable delivery
featured_image: /assets/images/blog/planning-software-slices.png
tags: [event-modeling, planning, slices, estimation, roadmap, project-management, transparency, predictability]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Reliably planning software with slices</h1>
    <p class="blog-post-subtitle">How Event Modeling and Slices provide transparent, data-driven roadmap planning</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>15 min read</span>
      <span>Event Modeling & Planning</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/planning-software-slices.png' | relative_url }}" alt="Reliably planning software with slices">
  </div>

  <div class="blog-post-content" markdown="1">

Planning software projects is hard. Why? Because it usually means developers are asked to make estimations. And more often than not, what's really needed is a simple answer to a simple question: "When will it be done?"

Yet somehow, that's one of the hardest things to answer.

As an industry, we've even gotten creative - coming up with things like Story Points - just to avoid the dreaded topic of Person Days. But let's be honest: most companies still plan using good old-fashioned person days. Because in the end, there's always a real deadline. A specific date we're all working toward.

"Will it be done by then?"


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The problem with Story Points

Story Points are a measure of complexity — but why do we even need them?

The truth is: we humans are terrible at estimating large things. In my experience, once a task goes beyond a day or two, our estimation quality drops off a cliff. The bigger the thing we're trying to estimate, the worse it gets - and we're usually far too optimistic.

That's why Story Points exist. They shift the focus from "how long will this take?" to "how complex is this?" Because estimating complexity is often easier than estimating time. Why? Because complexity doesn't fluctuate when we have more or fewer meetings. Throughput does — but complexity stays the same.

So how do we use Story Points for planning?

We use velocity. We look at how many Story Points a team has delivered in past sprints, and then forecast how many they'll likely deliver in upcoming ones. By prioritizing the backlog, we ensure that the most important items make it into the sprint.

And yes — in theory, this works. But there's one big problem:

It still doesn't answer the real question.

Just yesterday, we had this very discussion on LinkedIn — and someone nailed it perfectly:

My stepfather once told me, the problem with your industry is that you never get a clear answer on how long something will take or how much it will actually cost. In every other industry, that works. That's been on my mind ever since, because he's right. I always said it's difficult. I think you only really see things clearly once you're the one responsible — that's when your perspective shifts. Before that, maybe it's too easy to brush it off. Because giving an estimate is hard. But an estimate is better than nothing, even if it turns out to be wrong. After all, that's what an estimate is for.

Most companies aren´t interested in how many story points we can deliver. They want to know if it´s done by July 12.

The reality is, most organizations don't have processes in place to support complexity-based estimations. So what happens?

Somewhere - in almost every company — there's that awkward Confluence page. The one with the infamous:

"Story Points to Person Days" formula.

A quiet admission that we've come full circle — back to time-based estimates, just with a lot of extra steps.

## An alternative way

So how can we do better?

As I mentioned earlier, a big part of the problem lies in the size of the stories we're trying to estimate. We simply can't reliably estimate large stories or epics. But breaking them down? That's often tricky and error-prone — the devil is in the details.

Fortunately, there's a proven way to break down a system. And the good news? We're already doing it - naturally - through Event Modeling.

The answer is: Slices.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-software-slices-1.png' | relative_url }}" alt="Breaking down systems with slices">
</div>

By modeling a system along a single timeline, we naturally break it down into the smallest meaningful process steps - steps that must happen in a specific order. Each of these steps forms a Slice: a perfectly bite-sized piece of functionality, small enough to estimate reliably.

Why does this work so well? Because a Slice is focused. It doesn't require us to think about side effects, edge cases, or technical noise. It's just one clear, meaningful step in the user journey.

And just like Story Points, we can use Slices to measure velocity — but with the added benefit that each Slice represents real, observable progress in the system

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-software-slices-2.png' | relative_url }}" alt="Measuring velocity with slices">
</div>

We can measure how many Slices the team delivers per sprint and use that to calculate the Slice Cycle Time — the average time it takes to implement a single Slice.

For many teams, this number falls somewhere between 1 and 2 days per Slice.

It's a simple, transparent metric - grounded in actual delivery - and it gives us a reliable way to forecast progress. No need for abstract conversions or estimation gymnastics. Just: How many Slices do we need? And: How long does a Slice usually take?

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-software-slices-3.png' | relative_url }}" alt="Transparent forecasting">
</div>

Instead of relying on abstract measures like Story Points and Velocity, Slices are concrete and easy to translate into person days. By simply examining the remaining Slices in a project, we can fairly accurately estimate the effort still required.

## Embrace Change

But requirements change. They always do. In my view, being agile isn't about daily stand-ups, retrospectives, or endless meetings. It's about transparently adapting to change - embracing evolving requirements with confidence.

And with Slices, we have a powerful tool to do just that.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-software-slices-4.png' | relative_url }}" alt="Adapting to change">
</div>

We can add or remove Slices from the model at any time - without having written a single line of code yet. We simply treat changes as new Slices.

If a Slice hasn't been started yet, removing or changing it doesn't affect the roadmap. If a Slice has already been implemented, then we add a new Slice to represent the change — effectively adding one more Slice Cycle to the timeline.

This approach keeps the roadmap flexible and realistic, reflecting the true impact of evolving requirements.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-software-slices-5.png' | relative_url }}" alt="Impact of new features">
</div>

So, if we add a new feature to the roadmap that's modeled as 10 Slices — and our Slice Cycle Time is 2 days - we've effectively added 20 days to our timeline.

The question "Will we make July 12?" now has a simple, straightforward answer: yes or no.

Suddenly, we can transparently show how changes impact the roadmap: "If we add this feature, we won't make it."

This lets us have data-driven conversations and make prioritization decisions - without relying on gut feelings.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-software-slices-6.png' | relative_url }}" alt="Data-driven decisions">
</div>

## Why does this work?

The reason this approach works is that we do the preparation upfront. We model the system and break it down using Event Modeling.

There's no need for guesswork or estimation - we already know exactly how many Slices the model contains. This is a completely different approach from what most teams do today, where estimates are often based on experience and gut feeling.

Is it perfect? No — we might still miss something. But Event Modeling includes built-in safeguards like the Information-Completeness Check and Given/When/Then scenarios to help catch gaps early in the process.

Plus, you can use the modeled Slices to perform statistical forecasting, like in the next illustration. (More on that soon!)

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-software-slices-7.png' | relative_url }}" alt="Statistical forecasting">
</div>

## Conclusion

I'm not arguing against Story Points and Velocity-based estimations — if a company is truly agile and able to adapt its processes, these methods can work well. But most companies simply aren't there yet.

Modeling the system upfront and investing the time to deeply understand the information flow provides the transparency that many organizations desperately need.

If you want to try this, I´m offering Workshops to get started with your Team.

Also my Book "Understanding Eventsourcing" describes the whole process in great detail.

Hope that was helpful!

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
    <a href="{{ '/docs/blog/software-hard-to-estimate-easy-to-plan' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Software Is Hard to Estimate, Easy to Plan</h3>
        <p>Why planning works better than estimating</p>
        <span class="related-post-meta">Planning • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/internal-fixprice-model' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Internal Fixed-Price Model</h3>
        <p>How to make internal projects more predictable</p>
        <span class="related-post-meta">Planning • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/red-sticky-notes-knowledge-gaps' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Red Sticky Notes and Knowledge Gaps</h3>
        <p>Using red sticky notes to identify and track unknowns</p>
        <span class="related-post-meta">Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
