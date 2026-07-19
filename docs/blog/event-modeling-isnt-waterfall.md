---
layout: docs
title: Isn't That Just Waterfall? Why Event Modeling Slices Make Planning Flexible
description: Event Modeling looks like upfront planning at first glance. It isn't waterfall - it fixes what agile never actually solved by breaking requirements into small, isolated slices instead of XXL user stories.
author: Martin Dilger
date: 2026-05-05
category: Event Modeling & Planning
keywords: event modeling, waterfall, agile, slices, spec-driven development, software planning, story points, requirements engineering
featured_image: /assets/images/blog/event-modeling-isnt-waterfall.png
tags: [event-modeling, agile, waterfall, planning, slices]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Isn't That Just Waterfall?</h1>
    <p class="blog-post-subtitle">One objection I get very often when I publicly talk about this process is whether it's not a step back to the rigid planning we tried to get rid of with agile.</p>
    <div class="blog-post-meta">
      <span>May 5, 2026</span>
      <span>10 min read</span>
      <span>Event Modeling &amp; Planning</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/event-modeling-isnt-waterfall.png' | relative_url }}" alt="Isn't That Just Waterfall">
  </div>

  <div class="blog-post-content" markdown="1">

One objection I get very often when I publicly talk about this process is whether this is not a step back to the waterfall planning we tried to get rid of with agile. We worked hard to get away from rigid waterfall and the handovers we suffered so much from.
{: .lead}

## Waterfall

What's the problem with waterfall? Most engineers today have never experienced what it means to work on a real waterfall project. With the advent of agile around 2006, most companies adopted some agile practices in hope of getting more flexibility in their daily work.

For some it worked, for most it didn't.

The idea of waterfall was originally defined in the paper "Managing the Development of Large Software Systems" by Winston W. Royce. In summary: software is built by first analyzing the system requirements on a high level, then going into detailed requirements, design, coding, testing, and finally deployment.

This idea is still very much alive, even in companies that claim to be agile. And even reading it, it seems to make sense. Of course I first need to analyze and understand the problem before I can write any code. Who would argue with that? The problem is the scale at which this is done.

Applied at a project level, it starts to fall apart. First understanding all requirements, then translating them into requirements documents, then doing the design - this is costly and takes a lot of time and effort. By the time those requirements reach implementation, they've typically changed, and all that earlier work was nothing but waste, since we now have to rework what's been done, which is often even more work than designing from scratch.

Dwight D. Eisenhower famously said, "Plans are worthless, but planning is essential." This sounds paradoxical at first, but it's essentially how successful software projects work. He's also quoted as saying: "The details of a plan which was designed years in advance are often incorrect, but the planning process demands the thorough exploration of options and contingencies. The knowledge gained during this probing is crucial to the selection of appropriate actions as future events unfold."

The details of the plan don't matter so much, because they will change rather quickly. What's missing in classic waterfall is the flexibility to change. I can't count how many projects I've endured that insisted on implementing a specification everybody knew was a waste of time and resources, because the requirements had long since changed.

This is also a kind of sunk cost fallacy. Oftentimes we invest so much time into a plan that we simply can't throw it away. It was too expensive to come up with in the first place.

## Handovers

The second problem with a classic waterfall approach is the handovers that invariably happen between the different phases of a project. Requirements need to be translated into a specification, the specification needs to be translated into a design. Every time we hand something over to the next phase, information gets lost or mistreated, and small misunderstandings accumulate until we end up building something that was never requested.

The best-case scenario is that we realize something is missing from the requirements. But then we need to go back to earlier phases, answer questions, and adjust the designs and the plan. By that point, budgets may already be allocated and plans may already have been communicated to stakeholders. Change becomes expensive, and sometimes devastating.

## Being Agile

Agile tried to fix this by tackling the biggest problem we faced in waterfall: the size of the plan. Having weeks and months planned in advance is a massive waste, since most of those plans will never make it to production. So we started planning smaller. Instead of planning the whole project in advance, we plan a sprint, just two weeks of work.

We started defining sprint goals and breaking bigger chunks of work down into smaller user stories: "As a ..., I need ..., so that ..."

To break down and orchestrate the work, we added all kinds of meetings during a sprint: estimation sessions, backlog grooming, refinements, standups. In the beginning, this felt comfortable. Stakeholders could add new tickets to the backlog and trust that those tickets would be broken down, estimated properly, and put into production based on the priority defined in the backlog.

There are only three levers you can use to adjust a project: time, quality, or scope. Either you deliver everything but not by a fixed date, or you deliver by a fixed date but maybe not everything. Most companies choose a third option, which was never really an option: deliver everything by a fixed date but sacrifice quality, and happily call it "technical debt." Debt is something we can pay off later. What most companies don't realize is that to take on debt, you need to provide some guarantees. There's no such thing as free debt.

In theory this doesn't sound so bad. Prioritize the work, break it down, build the most important things first, and if we can't deliver everything, at least guarantee that the most important things get delivered on time.

What we don't take into account is that most companies simply don't work like that. Budgets need to be allocated, delivery dates need to be committed to, campaigns need to be planned. For this we need reliable estimates and delivery dates we can count on. But estimates themselves were always a big problem, at least in every project I've been involved with.

Typically the requirements used for estimation are coarse-grained, describing at a pretty high level what needs to be done, and typically those requirements are pretty big. Breaking them down into manageable chunks of work usually takes a lot of effort from engineers - effort that's far too expensive to spend properly, especially when it's not even clear whether those requirements will ever get built. So we try to invest as little as possible in those early requirements.

I can pretty accurately tell you what I can do in a day, maybe even two days, but anything beyond that gets very blurry. Humans are simply bad at estimating how long something will take. We're typically far too optimistic, underestimating how much overhead development actually involves.

Building software isn't just writing code, or nowadays, letting an agent write it for you. It involves exactly the meetings mentioned above, all in an attempt to make the plan work. And funny enough, the one question every project manager needs a simple answer to almost never gets one: "When is it done?"

Since we can't commit to a date, we get creative in dodging the question. For me it started with T-shirt sizes ("this feature is an L"). When a customer asked what that meant, they usually got a shoulder shrug. To be more accurate, we then moved on to story points, which made things even worse.

"This feature is 5 story points." Same question: what does that mean? "Story points measure complexity, you can't translate them into person-days." To get an expected delivery date, you just multiply the estimated story points by the team's typical velocity. Now it's the other person who does the shoulder shrug.

"Last sprint we delivered 17 story points, so our current velocity is 1.7 story points per day." In reality, most companies have a table somewhere in Confluence that translates story points into person-days at a fixed exchange rate. So if a product owner needs a feature by a certain date, all they have to do is prioritize the features so the story points match the team's velocity for that date.

This completely misses the point that most company processes aren't "agile" in that sense. They rely on accurate estimates, budget allocations, and delivery plans measured in person-days. So we tried to force an agile culture onto companies, which resulted in shallow agile implementations layered on top of existing processes that couldn't be changed so easily.

## How Do We Make It Flexible?

So what's different this time? Now that we realize agile, as most companies apply it, doesn't work, are we going back to waterfall? No. Neither approach works well. But there's one thing we do differently that makes all the difference: the size of the work items. Instead of looking at XXL user stories, we break requirements down by modeling them in slices.

Slices are typically very small and manageable, describing one small business capability end to end. Slices are roughly equal in size. Similar to the idea of velocity, we simply measure how long it takes us to implement a slice. We call this "slice cycle time." For us that number is currently half a day on average.

A slice includes the UI, the API, the business logic, and the persistence - technically something that delivers value and that we could build, deliver, and run in production.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-isnt-waterfall-1.png' | relative_url }}" alt="A timeline of slices, each combining a Command, Event, and Read Model">
</div>

So we invest the time to break requirements down, but at the same time we remove all handovers. Defining those slices isn't done in isolation, but in collaboration. This makes all the difference. Since stakeholders, engineers, and management are in the same room, it's possible to address requirements gaps and open questions early, when they're still cheap to answer. But this alone doesn't guarantee flexibility.

True flexibility becomes possible through feature isolation with slices. Since every slice stands on its own, we can move it, swap it, or delete it without changing the overall plan. The whole plan starts to behave like a big box of Lego bricks. When we start building, we might have a plan in mind, but in the process of building, that plan typically changes, whether we run out of the right bricks or simply have a better idea thanks to what we learned while building.

So the big difference is - we do the hard work of breaking it down right in the beginning. We can rearrange parts of what we've already built without much effort and without breaking everything apart. The unit of work becomes the slice, and each decision typically focuses on one slice at a time. Have you ever heard the phrase "if it's painful, do it more often"? Of course you have. Breaking requirements down into small enough chunks to make them manageable has always been one of the hardest parts of the engineering process. There was never a clear process for it, and doing it properly involved so much work that you might as well just build the feature. It didn't make much of a difference.

Using Event Modeling to break down the system collaboratively solves exactly that. We make the plan flexible, and fully expect - even embrace - change by being able to change single slices in the system in isolation. And this is exactly what typically happens in reality: single slices change, but the overall plan stays intact.

This is a draft of a chapter in my upcoming book "Spec Driven". I'm helping teams design business solutions with AI and Spec-Driven Development using a proven process.

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
    <a href="{{ '/docs/blog/we-forgot-how-to-think-before-we-code' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>We Forgot How to Think Before We Code</h3>
        <p>AI didn't create the planning problem. It just made it impossible to hide anymore.</p>
        <span class="related-post-meta">AI &amp; Architecture • April 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/the-protocol-get-knowledge-on-the-board' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Protocol, Step 1 &amp; 2</h3>
        <p>Get the knowledge on the board, then build the timeline.</p>
        <span class="related-post-meta">Event Modeling &amp; Process • April 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/planning-software-slices' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Reliably Planning Software with Slices</h3>
        <p>How Event Modeling and Slices provide transparent, data-driven roadmap planning.</p>
        <span class="related-post-meta">Event Modeling &amp; Planning • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
