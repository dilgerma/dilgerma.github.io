---
layout: docs
title: "The Protocol, Step 1 & 2: Get the Knowledge on the Board, Then Build the Timeline"
description: A seven-step protocol for building maintainable software that lasts. Step 1 gathers the knowledge, Step 2 turns it into a timeline - and reveals the "Larry problem" hiding in your process.
author: Martin Dilger
date: 2026-04-14
category: Event Modeling & Process
keywords: event modeling, requirements gathering, spec-driven development, software planning protocol, storyboarding, timeline modeling
featured_image: /assets/images/blog/the-protocol-get-knowledge-on-the-board.png
tags: [event-modeling, spec-driven-development, requirements, planning]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Protocol, Step 1 &amp; 2: Get the Knowledge on the Board, Then Build the Timeline</h1>
    <p class="blog-post-subtitle">A seven-step protocol for building maintainable software that lasts. Step 1 gathers the knowledge, Step 2 turns it into a timeline - and reveals the "Larry problem" hiding in your process.</p>
    <div class="blog-post-meta">
      <span>April 14, 2026</span>
      <span>10 min read</span>
      <span>Event Modeling &amp; Process</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/the-protocol-get-knowledge-on-the-board.png' | relative_url }}" alt="The Protocol - Get the Knowledge on the Board">
  </div>

  <div class="blog-post-content" markdown="1">

I spent 15 years building software systems before I finally admitted something uncomfortable to myself: I had no idea what I was doing.
{: .lead}

Not in the way a junior developer doesn't know what they're doing. I mean it in a deeper, more unsettling way. I had built successful systems. I had built failed ones. I had shipped products that are still running today. And when I looked back honestly at all of them, I couldn't tell you why some worked and others didn't. It felt, more than anything else, like luck.

That realization hit me hard in 2021. I had enough. I didn't want to build software like that anymore.

One of the biggest systems I ever built was an ecommerce platform that is still running today. Massive complexity hiding underneath what was actually a quite simple business model. From the outside, it looked like a success. And in many ways it was. But I knew what was underneath. I knew that system was one requirement away from cracking.

That is true for most systems. No matter how beautiful you design your architecture, one requirement that simply doesn't fit can break everything.

That's the thing nobody talks about. You can deliver a project on time, within budget, and still know in your gut that the whole thing is one unexpected change request away from falling apart. That knowledge sits with you. It changes how you show up. It changes how you feel about your own craft.

And the worst part? I knew that if we ever tried to fix it - if we refactored that system from the ground up - we would end up in exactly the same spot two or three years later. Because if the same people, with the same mindset, refactor a broken system they built themselves, the result will be the same system with newer technology.

The problem was never the code. The problem was how we were thinking about building software in the first place.

I didn't have a solution yet. I just knew something had to change.

Then I read a blog post.

"Event Modeling - What Is It" by Adam Dymitruk. I don't remember exactly what time I started reading it, but I know that by the time I finished, something had shifted permanently. Overnight, I changed my entire business model and how I work.

What hit me wasn't a new technology or a clever framework. It was a reframe so simple it almost made me angry. We had the whole process backwards. For years, the industry had been writing rough requirements, making big architectural decisions early, and then figuring out the hard questions later - usually when it was too expensive to change anything. Event Modeling turns that completely around. You clarify all the hard questions very early in the process, before a single line of code is written, before any architectural commitments are made.

When I first describe this to people, the reaction is almost always the same: "Isn't that just waterfall?"

It isn't. Waterfall hates change. It treats a changed requirement as a failure of planning. If you build systems using the Protocol, we embrace change - we expect it, we make room for it. It gives teams the tools to handle it without the whole system cracking under the pressure. It's exactly that - it's a tool teams can use.

A protocol is a defined set of rules or conventions that governs how something works or how parties interact. A Protocol is something you can follow - ideally almost blindly. It's a proven, seven-step process for building maintainable, scalable, and easy-to-understand systems that last.

Over the next several articles, I'm going to walk through each step in detail. Not the polished, theoretical version. The real version - with the friction, the resistance, and the moments where it gets uncomfortable before it gets better.

## Step 1: Get the Knowledge on the Board

Most projects fail because the hard questions get asked too late. By the time you realize a requirement doesn't fit your architecture - by the time you're standing there holding a square shape and every hole in the system is round - the decisions that caused that problem were made months ago. You can't easily undo them. You can't turn the ship around. Like a big oil tanker, every change in direction has to be planned, agreed upon, negotiated. And by then, the cost is enormous.

Step 1 of the Protocol exists to surface those questions before they become expensive. Before the architecture is set. Before anyone has committed to anything they'll regret.

It's simple in concept: gather the people and get all the knowledge on the board.

Virtual or physical, it doesn't matter. What matters is who is in the room - business stakeholders and technical people together - and what you're asking them to do. You're not making decisions. You're not estimating timelines. You're not debating architecture. You are simply collecting everything everyone knows about the system, the business, the users, and the flows - and putting it somewhere everyone can see it.

Here's what happens when you remove decisions from the equation: people open up.

Every project kickoff I've ever been part of before this looked roughly the same. Everyone has their own agenda. The developer who thinks the requirements are already clear enough. The business stakeholder who's worried about scope creep. The manager who has already privately decided on the architecture. Everyone is protecting something - their budget, their timeline, their preferred solution. That defensiveness makes people hold back. It makes them answer questions instead of asking them. It makes them say "yes" in a meeting and raise the real concern in a hallway conversation afterward.

Step 1 removes all of that. There's no budget being spent in this step. There are no restrictions. No decisions are being finalized. The only job is to gather knowledge. And when people understand that, something changes in the room. They stop protecting their corner and start sharing what they actually know. They bring up the edge cases they assumed someone else had already thought about. They ask the questions they were embarrassed to ask in front of a formal requirements document.

Even the skeptic in the corner - the senior developer who walked in convinced this was going to be a waste of time - is fine. The format is open. Nobody is forced. And more often than not, that person ends up contributing more than anyone expected, because there's finally a format where their technical knowledge and the business knowledge are being captured in the same place at the same time.

One of my clients ran an experiment that stuck with me. They really wanted to know how well it works. They took two groups and gave them the same system to review for gaps and errors - with deliberately placed small errors or inconsistencies in those requirements - one group worked with traditional requirements documents, the other worked with Event Modeled specifications. The group using Event Modeling found seven times more errors in the early phases than the traditional group found later in the process.

Seven times.

This is what Step 1 makes possible. Not because the people are smarter, or more experienced, or more motivated. But because the format forces the knowledge to the surface at the moment when acting on it is still cheap. Finding a gap in a brainstorming session costs you a sticky note and a conversation. Finding the same gap after six months of development costs you everything.

The Protocol is not a silver bullet. It is a proven way to stop building systems that are one requirement away from cracking. And it starts here, in a room with the right people, with nothing to lose and everything to gain from being honest about what you actually know.

## Step 2: Build the Timeline

I was sitting in a room with a client once. Big organization. Complex system. And nobody in that room could fully explain how their own software worked. Everyone knew a piece of it. Nobody knew all of it.

So we started sketching it out.

And at some point, everybody got silent. We just stopped. What now?

Nobody could explain what happened next. There was this awkward silence. People looked at each other. Some shaking heads, some thinking - how does that work? And then somebody called Larry from Marketing.

After Step 1, you have a room full of knowledge. Now what?

In Step 1, I talked about getting the right people in the room and getting everything they know onto the board. Business stakeholders and developers, together, with nothing to protect and everything to gain from being honest.

But here's what nobody tells you about that moment. When you're done, it can feel a little chaotic. You've got all this raw material. Sticky notes everywhere. Half-formed ideas. Fragments of flows.

Step 2 is where you bring order to that chaos.

You put everything on a single timeline.

### Writing the Movie Script of Your System

You are now writing the movie script of your system.

And a movie script has a very specific discipline to it. Every scene earns its place. Nothing is vague. You know exactly what happens, in what order, and why. There is no room for interpretation.

That last part is crucial - because interpretation is exactly what kills software projects.

Think about a requirement like this: "and then we display the order items."

Simple enough, right? Everyone nods. Everyone moves on. But there are a million ways to implement that sentence. And only one of them matches what the person who wrote it actually had in mind. The developer who builds it has their interpretation. The business stakeholder who wrote it has theirs. And three months later, when the feature ships, someone in the room says "that's not what I meant at all."

This happens on every project. All the time. Not because people are careless or incompetent. But because vagueness is the default. We are not trained to be precise. We are not used to writing a compelling, specific, unambiguous story about how something works.

Storyboarding forces that. And it's uncomfortable.

### Start at the End

When I sit down with a team to build their timeline, the first question I ask is - where does this story end?

People look at me confused. "What do you mean?"

Simple question, where does it end?

Because most good stories are not written by an author sitting down, writing page 1, saying "let's see where this goes." A movie script never starts at the beginning. The author has the exact ending in mind - and then slowly builds up the tension, the scenes, the cause and effect that leads there.

In software, the ending is usually something simple. "The order was successfully submitted." "The report was sent." "The user was approved."

That's your anchor. That's where you start. And then you work backwards - what had to happen just before that? And before that? And before that?

This also solves one of the biggest fears teams have when they first encounter this: "our system is too complex, it can't be broken down this simply."

It can. Because you're not modeling the entire system at once. You're modeling one process at a time. One story at a time. One plot at a time. Each with its own clear ending. The complexity doesn't disappear - but it becomes manageable, one narrative at a time.

### When the Timeline Stops

Back to our starting story. The story stopped. Nobody can explain what happens next. There's a gap in the process that everyone assumed someone else understood.

I call it the Larry Problem. Larry from Marketing. Larry from Finance. Larry from Operations. A Larry is employed in every organization. He's the person who has been quietly filling a critical gap in the process for years. Manually sending reports. Manually triggering a flow. Manually doing something that everyone assumed was automated - or assumed someone else was handling.

Most Larrys don't know how important they are. They're just doing their job. But when Larry goes on vacation, strange things happen. Bugs appear that nobody can explain. Processes stall. And then, like magic, everything resolves itself when Larry comes back.

The biggest Larry I ever found was in an organization where hundreds of millions in budget could be traced back to a single person doing something manually that nobody had ever bothered to document or automate.

Hundreds of millions. One person. And nobody knew - until the timeline stopped and we had to ask Larry to join.

The timeline doesn't create the problem. It reveals it.

That's the thing I want you to understand about storyboarding.

Larry was always there. The risk was always there. The ticking timebomb existed long before we walked into that room. A requirements document would never have surfaced it. A Jira ticket would never have surfaced it. Because Larry doesn't know he needs to write a ticket about himself.

But when you put everything on a single timeline - when you commit to writing the full movie script of your process, specific and unambiguous - Larry inevitably shows up. He's part of the story. The gaps appear. The manual steps surface. The single points of failure show up exactly where they are.

And finding them in a storyboarding session costs you a conversation. Finding them six months into development can risk everything.

Most teams don't know how many ticking timebombs live in their processes. Not because they're not smart enough to find them. But because they've never had a format that forced the story into the open.

### Where to Start

If you're reading this and thinking - we need to do this - my advice is simple.

Don't overthink it. The Protocol is there to be used. Start with Step 1. Let it lead you naturally to Step 2. Pick one process. Find the ending. Work backwards. And when the timeline stops - find Larry.

You might be surprised who walks through the door.

This is Part 1 &amp; 2 of a multi-part series on the Protocol - a proven, step-by-step process for building maintainable systems that require no rework.

This process is also what is described in my book "Understanding Eventsourcing" - fundamentally it's not about Event Sourcing, it's about how to enable the Protocol in any project. I also help companies adopt this process - let's have a chat if you want to find out if this applies to you.

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
    <a href="{{ '/docs/blog/event-modeling-isnt-waterfall' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Isn't That Just Waterfall?</h3>
        <p>Why breaking requirements into slices makes planning flexible instead of rigid.</p>
        <span class="related-post-meta">Event Modeling &amp; Planning • May 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/red-sticky-notes-knowledge-gaps' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>You Can't Argue with a Red Sticky Note</h3>
        <p>Those red sticky notes aren't marking failures - they're marking discoveries.</p>
        <span class="related-post-meta">Event Modeling &amp; Process • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
