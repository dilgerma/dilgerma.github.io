---
layout: docs
title: The Question That Won't Go Away - Event Sourcing and User Experience
description: How to combine the asynchronous nature of Event Sourcing with good user experience - a systematic approach using four simple tricks.
author: Martin Dilger
date: December 22, 2025
category: Event Sourcing
keywords: event sourcing, user experience, async patterns, UI patterns, CQRS, event-driven architecture, UX design, optimistic UI, event sourcing UI, asynchronous processing
featured_image: /assets/images/blog/event-sourcing-async-ux.png
tags: [event-sourcing, user-experience, async-patterns, ui-design, cqrs, architecture, ux-patterns]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Question That Won't Go Away</h1>
    <p class="blog-post-subtitle">How to combine the asynchronous nature of Event Sourcing with good user experience</p>
    <div class="blog-post-meta">
      <span>December 22, 2025</span>
      <span>15 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/event-sourcing-async-ux.png' | relative_url }}" alt="Event Sourcing and User Experience">
  </div>

  <div class="blog-post-content" markdown="1">

"How do you combine the asynchronous nature of Event Sourcing with good user experience?"

I've heard this question hundreds of times. At conferences, in workshops, during consulting calls. It's THE question that stops teams from adopting Event Sourcing. And for good reason.

But here's what nobody talks about: I struggled with this exact same question when I first started with Event Sourcing.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The Night I Googled Until 3 AM and Found Nothing

I remember sitting at my desk, Googling frantically. "Event Sourcing UI patterns." "Async commands user experience." "Event Sourcing frontend best practices."

Nothing.

Well, not nothing. I found plenty of articles explaining Event Sourcing architecture. Plenty of diagrams showing commands flowing into aggregates and events flowing out. But when it came to the actual user experience? Radio silence.

At first, I thought it must be a well-kept secret. Like there was some inner circle of Event Sourcing practitioners who all knew the answer but weren't sharing it publicly.

Then I thought - maybe there just aren't that many event-sourced systems in production. Maybe this is still too theoretical.

Finally, I realized the uncomfortable truth: the people who had solved it probably just weren't writing online about it. They were too busy building systems.

And I was on my own.

## The Question That Changed Everything

That's when I stopped searching and started thinking.

"Okay Martin," I said to myself, "if YOU had to solve this now, how would you do it?"

And that simple question led me to figure out something that nobody seemed to be teaching - a systematic approach that makes the async nature of Event Sourcing not just manageable, but actually an advantage.

## What We're Really Solving (And Why Everyone Gets It Wrong)

Let me be crystal clear about what we're actually solving here.

The problem isn't technical. It's psychological.

Think of a TODO App.. a User saves aTODO item. The User expects to see it in the TODO Items list immediately. That's what decades of CRUD applications have trained us to expect. You hit save, BAM, it's there.

But in Event Sourcing, when you save something, you're sending a command. That command gets validated. It produces events. Those events get stored. They flow through the system. Projections get updated. And THEN - maybe - your UI can query for the updated data.

This takes time. Not much time. Maybe milliseconds. Maybe a second. But it's not instant.

And here's where most developers panic and start building complex notification systems, WebSocket connections, polling mechanisms - all to solve what they think is a technical problem.

## The File Upload That Broke My Brain

I just finished a project with a lot of documents, file uploads, file type conversions...

Users are uploading documents. The system is converting them to PDFs in the background - storing them in S3, running conversions, generating previews. This took several seconds.

At some point I raised my typical question.

"Does it really make sense to show the user the file they just uploaded?"

Think about it. The user JUST selected that file. They clicked upload. They watched the file name appear. They know it's there.

So why are we obsessed with immediately showing them what they already know? it´s horrible UX..

We've been solving the wrong problem.

The problem isn't "how do we make the backend fast enough to show data immediately."

The problem is "why do we think we need to show data the user already has?"

## Magic Trick #1: Redirect Their Attention

From that realization, I developed a systematic approach. Not one solution, but three tricks I try in order - from simplest to most complex.

Instead of showing users the same table again with their new item in it, give them something better to do.

In our file upload app, after a user uploads a document, we don't show them a loading spinner or try to display the file list again. We prompt them: "What do you want to do next?"

While they're thinking about their next action - maybe adding another file, or moving to a different section - the background processing completes. By the time they're done deciding, the system has caught up.

No waiting. No spinners. Just a natural flow that makes sense from the user's perspective.

This isn't a workaround. It's better UX.

## Magic Trick #2: Fake It Until You Make It

If we just added a TODO item and we know it's going to be saved, why not just show it immediately?

Add it to the UI state right now. Treat it as if it's already saved. By the time anyone would notice a difference, the backend has caught up and it IS saved.

We do this in our app for non-editable items. The user uploads a file, we show it in their list immediately. They see it, they know everything probably worked, and they move on with their life.

Here's the key: you have to be conscious about when to use this. Non-editable items? Perfect. The user isn't going to immediately try to edit the file they just uploaded. By the time they want to interact with it again, it's real in the system.

## Magic Trick #3: Give Them a Reload Button (Yes, Really)

This one raises eyebrows every time I suggest it.

"Martin, are you seriously saying the solution is... a reload button? We're building a modern event-sourced system and you want users to manually refresh?"

Yes. Sometimes. And users are perfectly fine with it.

We strategically place reload buttons in the UI. Not everywhere - that would be lazy. But in specific places where it makes sense.

It's not a solution to every problem. But it's perfectly fine in some cases. And it's infinitely simpler than building a real-time notification system you don't actually need.

## "But Users Expect To See Their Data Immediately"

When I teach this approach in workshops, I always get pushback on Trick #3.

"But users expect to see their data immediately," someone always says.

And that's when I challenge them: "Why?"

Usually there's a long pause.

"Because... that's how it always works?"

"Just because we've always done it that way doesn't mean it's good," I tell them. "That's old thinking. Same as CRUD. We're not prisoners to CRUD patterns anymore - so why are we prisoners to CRUD expectations?"

I've seen this play out dozens of times now. The moment someone stops defending the expectation and starts questioning it, everything changes.

They realize they've been building complexity to solve a problem that might not actually exist.

## The Fourth Approach (When You Actually Need The Technical Solution)

Now, I said there are three magic tricks. But there's actually a fourth approach - the one developers always think of first and want to jump to immediately.

The cool technical solution.

Here's how it works: every command and event holds the currently logged-in user ID. This information propagates through all subsequent events. So even when a file upload triggers automatic processes - S3 storage, PDF conversion, preview generation - we know exactly which user triggered the entire chain.

Now a client can subscribe to a Notification Channel using the logged in User Id.

Each process step can send notifications. UI clients subscribe to these notifications and get updated when deep background processes finish.

It's elegant. It works. And it's actually pretty straightforward once you understand the pattern - you just make sure you have all the information everywhere, like in Event Sourcing itself.

## But We Do This LAST

Here's the critical part: we build the notification system only after the first three tricks don't work.

Because 80% of the time, you don't need it. Redirecting attention, optimistic UI updates, or a strategically-placed reload button solves the problem more simply.

## How A Random Collection of Solutions Became A Framework

I didn't set out to create a methodology. I was just solving problems, one project at a time.

But after applying these same solutions across multiple clients, multiple workshops, multiple training sessions, I realized I kept explaining them in the same order.

First, redirect attention. If that doesn't work, try optimistic UI. If that doesn't work, consider a reload button. And only if none of those work - build the notification system.

It's like a pattern language. You learn the patterns. You recognize when they apply. And you use the simplest one that solves the problem.

Event Sourcing makes building systems simpler. Much simpler. Once you understand the patterns.

## Why The People Who Know Don't Write About It

Remember when I said I couldn't find anything online about this?

I finally understand why.

The people building real event-sourced systems in production are too busy solving actual problems to write blog posts. And the people writing blog posts are often still exploring the theory.

But here's what I've learned from teaching this to dozens of teams: this knowledge is too valuable to keep hidden.

## What Happens When Teams Don't Know These Patterns

Every team adopting Event Sourcing hits this same wall. They understand the architecture. They get the benefits. But then they try to build a UI and suddenly everything feels wrong.

They start second-guessing their decision to use Event Sourcing.

They start building overly complex solutions.

Or worse - they give up and go back to CRUD.

And it's completely unnecessary.

## Event Sourcing Doesn't Make UX Harder - It Makes It better.

Here's what I want you to understand: Event Sourcing doesn't make UX harder. It makes it different. It forces you to think about the Experience.. what makes sense.. what not.

And if you're willing to question your assumptions about what users "expect," you'll discover that the async nature of Event Sourcing actually pushes you toward BETTER user experiences.

It forces you to think about the actual user journey instead of defaulting to "show them the same list again with their new item in it."

It makes you design flows that make sense, not just flows that match old CRUD patterns.

The async nature isn't a bug. It's a feature that forces you to be more thoughtful.

## Stop Fighting It. Start Embracing It.

So when someone asks me now - "How do you combine the asynchronous nature of Event Sourcing with good user experience?" - I don't give them a technical answer anymore.

I tell them: Stop trying to fight the async nature. Embrace it.

Ask yourself: What makes sense from the user's perspective? Not what matches the CRUD pattern they're used to. What actually makes sense for THIS action in THIS context?

Then apply the simplest solution that works:

1. Redirect their attention
2. Show it optimistically
3. Let them reload if they need to
4. Build the notification system only if you must

And suddenly, Event Sourcing and great UX aren't in conflict anymore.

They're partners.

( I didn´t come up with all of this myself, I´m pretty sure it was a video by Greg Young who brought the right mindset shift for me, just cannot remember which one it was. )

## See This Methodology In Action (3-Day Workshop: January 19-21)

Want to see this methodology in practice? Learn how to apply these patterns to your own projects?

Join me for my 3-day intensive workshop: January 19-21, 2025.

Here's how it works:

**Day 1 (January 19): Event Modeling Foundations**
We'll model an entire system together - the exact way I approach every project. You'll learn the visual language, the patterns, and how to collaborate with stakeholders to create crystal-clear specifications.

**Days 2-3 (January 20-21): Build It At Lightning Speed**
We take that model and build it. At lightning speed. Using the exact methodology I've developed over years of production systems. You'll see these three UI tricks applied in real-time. You'll understand when to use each one. And you'll leave with a complete system you helped build.

This isn't theory. This is the exact process I use with clients who pay thousands for consulting.

### Book By December 31st - Get Day 1 Free

If you register by December 31st, you get the Event Modeling Foundations workshop (Day 1) completely free.

You'll only pay for Days 2-3, but you get the full 3-day experience.

Why am I doing this? Because I'm tired of watching teams struggle with problems that have already been solved. I'm tired of seeing Event Sourcing get a bad reputation because of UX challenges that don't need to exist.

I want to show you there's a better way.

### Limited to 12 Participants

I keep these workshops small so I can work directly with each team, answer your specific questions, and make sure you actually internalize the patterns.

Ready to stop fighting the async nature of Event Sourcing and start embracing it?

**Martin Dilger** is the founder of Nebulit and a recognized expert in Event Modeling and event-driven architectures. He helps teams modernize their systems using Event Sourcing and Event Modeling approaches.

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**[Event Sourcing with Slices on January 20/21, 2026](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
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
        <p>Why Event Sourcing is actually simple once you understand it</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/command-handler-simplicity' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Command Handler Simplicity</h3>
        <p>How to keep command handlers simple and maintainable</p>
        <span class="related-post-meta">Event Sourcing • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/cqrs-real-world-architecture' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>CQRS in Real-World Architecture</h3>
        <p>Practical guidance on implementing CQRS in production systems</p>
        <span class="related-post-meta">Architecture • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
