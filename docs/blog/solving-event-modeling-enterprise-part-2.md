---
layout: docs
title: "Solving Event Modeling for the Enterprise, Part 2: Mapping Event Models to Tasks and Tickets"
description: Estimation is broken because engineers guess before they understand. Here's how Event Modeling replaces the guess with slices - small, independent units of work that map cleanly onto epics and tickets, and give honest, countable progress.
author: Martin Dilger
date: 2026-09-13
category: Event Modeling & Planning
keywords: event modeling, slices, estimation, tickets, epics, reporting, em-studio, eventmodelers
featured_image: /assets/images/blog/solving-event-modeling-enterprise-part-2.png
tags: [event-modeling, planning, em-studio, enterprise]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Solving Event Modeling for the Enterprise, Part 2: Mapping Event Models to Tasks and Tickets</h1>
    <p class="blog-post-subtitle">Estimation is broken because engineers guess before they understand. Here's how slices replace the guess with something you can actually count.</p>
    <div class="blog-post-meta">
      <span>September 13, 2026</span>
      <span>8 min read</span>
      <span>Event Modeling &amp; Planning</span>
      <span>By Martin Dilger</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-2.png' | relative_url }}" alt="Solving Event Modeling for the Enterprise - Part 2: Mapping Event Models to Tasks and Tickets">
  </div>

  <div class="blog-post-content" markdown="1">

This article is part of an ongoing series named "Solving Event Modeling for the Enterprise."
{: .lead}

## The Problem With Holding It All in Your Head

If you put a task in front of most engineers, their brain immediately jumps in five different directions. Business logic. Architecture. The API. Security. All at once, none of it fully thought through. At least that's what typically happens to me.

You're trying to hold the whole system in your head, and none of the five layers get the attention they actually need.

I remember very well those planning and refinement meetings, where a stakeholder explained a problem, and all I was thinking about were the modules I would have to touch for this. Already sketching out the implementation.

That used to be me. All the time.

Then I found Event Modeling. It felt like a revelation, because the process forces a strict rule: linear thinking. One step at a time, in order. Suddenly reasoning about a whole system stopped being five things at once, and became one thing. It made my thinking linear, and that turned out to be exactly what my brain needed.

That personal relief is nice on its own. But Solving Event Modeling for the Enterprise isn't about my brain. It's about how a whole team organizes its work, together, at scale - without everyone secretly doing their own version of the five-directions problem in their head. And that starts with the thing almost everybody in software hates.

## Why Estimation Is Broken

Every project needs estimates. Everybody hates giving estimates. You're forced to guess, everybody in the room knows you're guessing, and later you get held accountable for the guess as if it was a promise you made in good faith. I've sat in enough of those meetings, on both sides of the table, to know how dishonest the whole ritual is. You give a number because you're asked for a number, not because you actually know.

The root cause is simple, once you say it out loud. Most engineers estimate without actually doing the work first - simply because they don't get enough time to do it. You can't know how long something takes until you understand it, and understanding takes time too. So the estimate is really a guess about a guess.

### The Trap Nobody Talks About

It's a trap, and not an obvious one. The more time you spend analyzing something to give a better estimate, the more you've already invested before you even know if the story survives prioritization. If it gets cut after that analysis, all that time is gone, spent on something that never shipped. So from a business point of view, "estimation preparation" gets labeled as waste. Just tell me how long it takes, don't waste my money figuring that out.

It's a completely reasonable thing to say, and it's also exactly what keeps estimation broken.

## Starting With Understanding, Not Estimation

One reason I went on a journey to solve Event Modeling for the enterprise is because it provides solutions to exactly those nasty problems that are really hard to fix. It's not the technology that needs fixing - it's the process.

Event Modeling gets around that trap by changing what comes first. We don't start with estimation. We don't start with code either. We start by understanding the process, the actual problem in front of us. And we do something almost nobody else does when they try to plan work.

We decompose it into tiny pieces from the beginning. We call them slices.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-2-1.png' | relative_url }}" alt="Four slices on a timeline, each a self-contained Command, Event and Read Model moving forward in time">
</div>

### Building the Timeline by Asking "What's Next"

In EM-Studio, slices sit on a timeline. We call it a "chapter," like a chapter in the story of the system. (And yes, it intentionally looks like Excel, because Event Modeling and Excel have a lot in common.)

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-2-2.png' | relative_url }}" alt="An empty Chapter with three columns and Actor, Interaction, Swimlane and Spec Lane rows">
</div>

You build that timeline by asking one question, over and over, until there's nothing left to ask: what's next. Not what should the system technically do next, but what would the user actually do next. That single constraint, always asking from the user's side of the screen, keeps the whole exercise honest and keeps it moving forward instead of sideways into architecture debates too early.

## From Feature-Sized Questions to Slice-Sized Questions

That shift changes the size of the question you're actually answering. Instead of "how big is this feature," which can easily hide weeks of work behind a single, comfortable-sounding sentence, you ask "how many steps are in this feature?" and "how big is this first step of the feature?"

One step (one Slice) is often nothing more than a screen, a button, and everything that happens the moment someone clicks it. A feature can be made of dozens of these slices, strung together on the timeline. A slice is only one of them, and it's small enough that you can actually reason about it in full in just a few minutes.

## Not Replacing Your Ticketing System, Extending It

Organizing work with Event Modeling for an enterprise doesn't mean replacing what they already have. That's not going to happen, and honestly, it shouldn't. Almost every company runs its work and its reporting through some ticketing system, whatever it is, and every process around it - every habit, every dashboard, every stand-up - is built on top of that system.

Event Modeling doesn't replace that - it provides the necessary input.

Walking into a company and saying "throw that out" is a fast way to get shown the door, and it wouldn't even be the right advice.

So instead of replacing it, we combine with it.

### The Mapping: Chapters, Slices, Epics, Tickets

A chapter, which typically describes one user flow or one process in the system, becomes an epic. A slice, one tiny next step in that process, becomes a ticket. That mapping is deliberately simple, because simple is what survives contact with an existing enterprise workflow. Even if two engineers split a single slice - one on the frontend and one on the backend - it stays one ticket, one unit of work. It's only done once everything inside that slice is done, not when one half of it is done and the other half is someone else's problem for next sprint.

## Independent by Design

Here's where it gets good, and honestly where I think the real value sits. Slices are designed to be independent. Not by accident, and not as a side effect of how the tool happens to work, but by design, when you model the right way. That independence means you can think about a slice in isolation, without needing the rest of the system in your head. You don't even need to understand the rest of the chapter the slice lives in.

And just as importantly, you can build it in isolation too.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-2-3.png' | relative_url }}" alt="A slice being modeled: an HTML Screen at the Actor row, an Add new Deal interaction, and a New Deal Added event on the swimlane">
</div>

Which brings me back to where this whole post started. The relief I felt personally, being able to reason about one thing at a time instead of five, is the exact same relief a team gets once work is organized this way. An engineer picking up a ticket doesn't need to hold the entire chapter, or the entire system, in their head before they can start. Just their one slice. And if it's done, just pick the next one.

The rest of the system can stay someone else's concern for now, and that's not a gap in understanding - it's the whole point.

## The Life of a Slice

Each slice moves through a simple lifecycle from there. It starts as Created, while it's still being modeled and shaped on the timeline.

Once it's ready to be picked up, it moves to Planned.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-2-4.png' | relative_url }}" alt="Slice Info dialog with an Assignee field, a Ticket field, and a Status dropdown listing Created, Done, Assigned, InProgress, Review, Blocked, Planned and Informational">
</div>

Planned means exactly what it says: this piece of work is ready, for a human or for an agent, whichever gets to it first. Whoever picks it up assigns it to themselves, and the mechanism is the same either way - there's no separate process for agents versus people. Then it gets built. And it ends in one of two states: Done, or Blocked.

(There are more statuses, but I personally don't use them much.)

### When Slices Get Blocked

Blocked should almost never happen, and when it does, it should never come as a surprise. "Doability" gets clarified early, long before a slice ever reaches Planned status, so the team isn't discovering "we can't actually build this" halfway through a sprint.

And it's never a dependency on another slice, since slices don't depend on each other by design. When something does block a slice, it's almost always external to the model itself. An API key that isn't available yet is a perfectly normal, perfectly human example. The model wasn't wrong. The world just wasn't ready yet.

## Reporting Without Guessing

Solving Event Modeling for the Enterprise also means solving reporting, because organizing the work is only half the problem a company actually has. Leadership still wants to know how things are going, and they want that answer without having to trust one more person's gut feeling.

Here's the part I like best. Most reporting still happens in the tools a company already trusts, and that's fine - that's exactly how it should stay. EM-Studio doesn't try to take that over. It just delivers the necessary input into it.

Because slices are independent, and because it turns out they're all roughly the same size once you model them properly, counting them gives you an honestly accurate picture of progress. (Read that again, please.)

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-2-5.png' | relative_url }}" alt="Planning list of slices with statuses Created, Done and Blocked, with a footer reading 70 slices, 0 assigned, 54 done, 1 blocked">
</div>

A hundred slices in a project, fifty of them done, and you can say with real confidence that the project is fifty percent done. No guessing, no padding the number to look better in a meeting, no getting held accountable months later for a figure you basically made up under pressure.

Add the "Slice Cycle Time" (if you really want, call it velocity) - the time it takes the team on average to build a slice - and you'll get a date when the project will be done.

Whenever, during an Event Modeling session, slices are added, this transparently changes that number on the fly. The impact of change becomes visible.

Solving Event Modeling for the enterprise means giving stakeholders the right input to make decisions.

"If we add those 6 slices, we won't make the deadline by 3 days." Either move this feature or cut it by a few slices. Choose.

### An Extension, Not a Replacement

EM-Studio ships a basic reporting view of its own, but that's not really the point of it. It's not meant to replace whatever your company already runs on, and it never will be. It's built as an extension, made to plug into whatever solution you already trust, so the honest numbers Event Modeling produces show up where your team is already looking, instead of in one more tab nobody opens.

## What's Next in This Series

That's the second problem solved in this series - not by replacing what enterprises already rely on, but by giving it something honest to work from, both in how work gets organized and in how progress gets reported.

Part 3 is next: Collaboration - solving the big problems together, with humans and with agents.

### Links

- [EM-Studio](https://app.eventmodelers.ai)
- [EM Spec](https://app.eventmodelers.ai/documentation#em-spec-overview)
- [EM Build Kits](https://app.eventmodelers.ai/documentation#agentic-building)
- [EM Cheatsheet]({{ '/cheatsheet' | relative_url }})
- [Event Modeling Use-Cases]({{ '/use-cases' | relative_url }})
- [Explore Real World Event Models](https://app.eventmodelers.ai/catalog)

<div class="course-cta" markdown="1">
### Join the Agentic Engineer Program

Apply Spec-Driven Development Hands-On - Event Modeling, Event Sourcing, and AI Engineering with autonomous agents.

[Learn More →]({{ '/agentic-engineer-course' | relative_url }}){:.cta-button}
</div>

<div class="course-cta" markdown="1">
### Book a Call Today

Want to talk through how Event Modeling could work for your team or project? Let's have a quick, no-pressure conversation.

[Book a Call Today →](https://tidycal.com/1gj56y6/15-minute-meeting){:.cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/solving-event-modeling-enterprise-part-1' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Solving Event Modeling for the Enterprise, Part 1: How It All Started</h3>
        <p>Event Modeling works beautifully as a planning tool - until the model grows and a whiteboard can't keep it alive.</p>
        <span class="related-post-meta">Event Modeling &amp; Architecture • September 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/planning-software-slices' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Reliably Planning Software With Slices</h3>
        <p>How Event Modeling and Slices provide transparent, data-driven roadmap planning.</p>
        <span class="related-post-meta">Event Modeling &amp; Planning • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/80-percent-planning' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>If You Are in Software Engineering - 80% of Your Work Should Be Planning</h3>
        <p>Real planning means all questions are cleared and you only need to execute.</p>
        <span class="related-post-meta">Planning &amp; Execution • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
