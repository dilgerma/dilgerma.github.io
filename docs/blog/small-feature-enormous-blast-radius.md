---
layout: docs
title: "E.V.E - Event Modeling, Vertical Slices and Event Sourcing ( with a real example )"
description: A parking garage built with BDD looks perfect - until management asks for online payments. What happens when the same system is modeled with Event Modeling, Vertical Slices and Event Sourcing (EVE)?
author: Martin Dilger
date: 2026-11-18
category: Event Sourcing & Architecture
keywords: event sourcing, event modeling, vertical slices, coupling, blast radius, bdd, gherkin, given when then, emmet, em-studio, legacy
featured_image: /assets/images/blog/small-feature-enormous-blast-radius.png
tags: [event-sourcing, event-modeling, vertical-slices, coupling]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>E.V.E - Event Modeling, Vertical Slices and Event Sourcing ( with a real example )</h1>
    <p class="blog-post-subtitle">Johannes Rabauer used BDD to guide agents. What would happen if we did the same experiment with Event Modeling and Event Sourcing?</p>
    <div class="blog-post-meta">
      <span>November 18, 2026</span>
      <span>8 min read</span>
      <span>Event Sourcing &amp; Architecture</span>
      <span>By Martin Dilger</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/small-feature-enormous-blast-radius.png' | relative_url }}" alt="Small Feature, Enormous Blast Radius - a parking garage modeled as event-sourced slices">
  </div>

  <div class="blog-post-content" markdown="1">

Johannes Rabauer did a nice webinar just recently, using BDD to guide agents. Now what would happen if we did the same experiment with Event Modeling and Event Sourcing? Before you read the article - check out the running bdd-garage here - fully event-sourced using EVE.
{: .lead}

Event Sourcing always felt right to me. Intuitively.

Just store what happened. Keep the facts. Use that information however you need it, today and in the future. Any business person would agree immediately.

But when I talk to teams, I hear a very different story. Most of them tried it at some point in time. They got burned badly. And they never touched it again.

When I look closer, I almost always find the same thing. What they did wasn't Event Sourcing. It used events, yes... maybe an event table somewhere, but the system underneath was the same coupled design as before, just with many more moving parts.

So in this article, I don't want to argue about Event Sourcing. I want to show you something.

## A Nice Little Implementation

Recently, Johannes Rabauer did a nice experiment in one of his YouTube videos. He used BDD to guide agents in building software.

The example was a parking garage. Cars enter. Cars leave. You pay a fee. With a design I absolutely loved from the first minute.

The code he ended up with looked like this:

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/small-feature-enormous-blast-radius-1.png' | relative_url }}" alt="The parking garage code from the BDD experiment" style="width:50%">
</div>

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/small-feature-enormous-blast-radius-2.png' | relative_url }}" alt="FeeCalculator, FeeController and CheckoutRequest" style="width:50%">
</div>

A FeeCalculator. A FeeController. A CheckoutRequest. Exactly what you would expect.

I want to be very clear about this: there is absolutely nothing wrong with this implementation. It's simple. It's straightforward. It's a nice little piece of software.

And most projects start exactly like this.

## Everything Is Somehow "Fee" Related

A problem might come up much later... Let's think about where this might go next.

The FeeController has a checkout function. That makes sense, checkout is when you pay.

Next, you'll add checkin. That's where the parking time starts, so it's fee related. It goes into the fee package.

Then someone loses their ticket. Report lost ticket. There's a special fee for that. Fee related, sure.

It's all somehow fee related. So let's put this into the same place.

And then the next step feels completely natural. Since more and more "Fee"-related things come together, and someone read the Domain-Driven Design book - let's define the domain model for "Fees". One central place that knows everything about money in our garage.

Most engineers reading this would nod in agreement. "Makes sense to me..." I would have, too, for a big part of my career.

## Then Management Asks for Online Payments

At some point, management walks in.

"We need to support online payments."

Something we had never anticipated. And it simply doesn't fit into the Fee model. I mean... not at all. Maybe it's a missing abstraction... maybe it's a wrong abstraction... it's always something.

The first reaction in the team is always the same: if only they had told us earlier.

So we do what responsible engineers do. We look at what it would take to do it properly, and we put a price tag on the refactoring. And it's a big one. Even with AI.

Of course, that's rejected. Nobody will pay for that. From the outside, online payments look like a small feature.

"Let's do the quick fix. You'll get time later to fix this."

Yeah, sure... like last time?

## How the Workaround Becomes the System

So now we have this workaround.

But before we can fix it, we need to implement more features for the next release. And those features are built on top of the workaround, because that's what's there.

People go on vacation. People leave the company. New people join and learn the system as it is today, workaround included. More workarounds are added in the meantime, each one perfectly reasonable on its own.

And at some point, the workaround has become part of the "core" system. That's how we do Fees... just nobody remembers why anymore.

Nobody decided this. Nobody did anything seriously wrong. It just happened, one release at a time.

## The Real Problem

The real problem isn't obvious at first sight. It's coupling.

Over time, everything became somehow correlated. Checkin, checkout, lost tickets and now online payments all hang on the same Fee model. Changing one thing always means changing other things as well.

And if you change one thing, you have to test half of the system, because you simply cannot tell how big the impact really is.

Sometimes the feature looks small, but the blast radius is enormous.

It's why the refactoring price tag looks absurd to management. From their side, online payments is one feature. Just add it. Management doesn't know about coupling.

From our side, it's a change that touches everything that has ever been "somehow fee related".

Both sides are right. And that's the problem.

## The Same Garage, as 8 Slices

Now, what happens if we use EVE instead? (E)vent Modeling, (V)ertical Slices and (E)vent Sourcing?

I pointed EM-Studio to Johannes' codebase and invoked the "Analyze Codebase" skill. The idea is simple: read the existing system and turn it into an Event Model. "Find the process."

The process itself was pretty straightforward. The final model had 8 slices.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/small-feature-enormous-blast-radius-3.png' | relative_url }}" alt="The parking garage as an Event Model with 8 slices" style="width:50%">
</div>

Just that there is no concept of "Fee" in the Event Model. We look at the use cases like "Issuing a new Ticket", "Paying the Parking Fee" or "Reporting a lost ticket". No place for a central Fee model.

Each slice is one thing that happens in the garage. One request... one query... And the only thing they share is events. Online payments? Probably just a handful of new slices.

## The Rules Came Along for Free

There was one part of this that made me especially happy.

Johannes had already provided the business rules as Gherkin. That was the whole point of his experiment, using BDD to guide the agents.

Those rules translated directly into Given / When / Thens on the Event Modeling board.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/small-feature-enormous-blast-radius-4.png' | relative_url }}" alt="Gherkin business rules translated into Given / When / Then specifications on the Event Modeling board" style="width:50%">
</div>

And from the Event Model, they translated again, directly, into executable specifications in code.

Gherkin to Event Model to executable specs. The business rules survived the whole conversion without getting lost in translation.

This matters more than it might seem. The biggest fear with any modernization, migration or rewrite is that the new system quietly behaves differently than the old one. With the rules living as specifications all the way through, you have a safety net. The new system has to pass the same rules the old one was built on.

The biggest fear is not a system that breaks immediately. It's the one that breaks 3 months after the release. Now we have some fun...

And that's the real power of BDD and GWTs in Event Modeling - it does not specify how the system is or shall be implemented - it specifies how the system shall behave. And that remains true no matter the implementation.

## Online Payments, Second Try

Now let's bring management back into the room.

Same request. "We need to support online payments."

This time, it's just a handful of new slices. Completely orthogonal to what is already there. And we might add them later in another blog post.

IssueTicket stays as it is. ReportLostTicket stays as it is. TotalRevenue keeps working. Nothing existing has to be touched.

The blast radius shrinks to the size of the feature.

And suddenly, the conversation with management is very different. A small feature is actually small. The price tag roughly matches what they expected. Nobody has to say "you'll get time later", because there's nothing to fix later.

## So, Is Converting Worth It?

Here's the process I followed. It's not rocket science. Just follow the steps in the video.

1. **Convert the existing system into an Event Model.** Let the tooling read the code and show you what the system actually does. Let the agent guide you.
2. **Refine the model with business experts and AI.** The first version is a starting point. The people who know the business close the gaps, and AI keeps asking the questions.
3. **Choose the blueprint architecture.** Decide how slices will be built, so every slice follows the same structure.
4. **Build the slices.** One at a time, each with its own executable specifications.
5. **Add new features.** As new slices, next to the existing ones, not inside them.

That's it. No big bang rewrite. No months of refactoring that nobody wants to pay for.

## What I Want You to Take Away

Converting to Event Sourcing isn't the goal. Nobody cares.

The goal is to build something that stays maintainable for years and years.

Using EVE is a great way to get there, as everything is "just another slice".

Instead of one big model, you'll deal with many small, tailor-made models per slice. At least for me, this is so much easier to reason about. And token usage fully confirms this on the agent side as well.

Making sure that a small feature stays a small feature, and that the next unexpected request from management doesn't turn into a workaround that becomes the system.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/small-feature-enormous-blast-radius-5.png' | relative_url }}" alt="Event Sourcing - and especially EVE - every slice stands on its own, connected only by the facts of what happened" style="width:50%">
</div>

Event Sourcing - and especially EVE - is a nice way to get there. Every slice stands on its own, connected only by the facts of what happened.

Want to see me doing this step by step? Just watch the video.

That was a fun little experiment - thanks Johannes Rabauer for the inspiration.

Want to learn this for real? Join the [Agentic Engineer Cohort]({{ '/agentic-engineer-course' | relative_url }}) in January.

### Links

- Original Video by Johannes Rabauer
- [EM-Studio - Agentic Event Modeling Platform](https://app.eventmodelers.ai)
- [Build Kits on EM-Studio](https://app.eventmodelers.ai/documentation#agentic-building)
- The running example
- Source Code
- The implementation is using [Emmet](https://github.com/event-driven-io/emmett) by Oskar Dudycz
- [EM Cheatsheet]({{ '/cheatsheet' | relative_url }})
- [Event Modeling Use-Cases]({{ '/use-cases' | relative_url }})
- [Explore Real World Event Models](https://app.eventmodelers.ai/catalog)

<div class="course-cta" markdown="1">
### Hands-On Event Modeling Workshop

[Learn More →](https://nebulit.de/en/hands-on-event-modeling){:.cta-button}
</div>

<div class="course-cta" markdown="1">
### Book a Call Today

Want to talk through how Event Modeling could work for your team or project? Let's have a quick, no-pressure conversation.

[Book a Call Today →](https://tidycal.com/1gj56y6/15-minute-meeting){:.cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/inverse-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Inverse Event Modeling: Building the Model From the Code</h3>
        <p>For teams with existing systems, the model gets built from the code - and AI keeps it true.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • October 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/dont-rewrite-legacy-system' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Don't Rewrite Your Legacy System</h3>
        <p>Why big bang rewrites fail - and what to do instead.</p>
        <span class="related-post-meta">Legacy &amp; Architecture</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>Why AI and Event Modeling are a perfect match - and why vibe coding will always fail.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
