---
layout: docs
title: The Sane Way to Migrate Your Legacy Project Towards an Event-Driven Architecture
description: Stop building on quicksand. Learn the Three-Source Truth Method for legacy migrations - extracting Event Models from requirements, business experts, and code to find the gaps before they find you.
author: Martin Dilger
date: 2026-01-20
category: Legacy Modernization
keywords: legacy migration, event-driven architecture, event modeling, legacy modernization, three-source truth, software migration, technical debt, system analysis
featured_image: /assets/images/blog/sane-way-legacy-migration.png
tags: [legacy, migration, event-modeling, event-driven, modernization]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Sane Way to Migrate Your Legacy Project Towards an Event-Driven Architecture</h1>
    <p class="blog-post-subtitle">Two days of Event Modeling can save you months of "this is way bigger than we planned."</p>
    <div class="blog-post-meta">
      <span>January 20, 2026</span>
      <span>15 min read</span>
      <span>Legacy Modernization</span>
    </div>
  </div>

  <div class="blog-post-content" markdown="1">

Back in 2018, I made an offer for a legacy migration project that still haunts me. Not because I failed. I didn't even get the chance to fail.
{: .lead}

It was a Java-based monolith running on JBoss. Completely entangled. Direct database access everywhere. Enterprise Java Beans happily mixing technical concerns with business logic. No boundaries whatsoever. "Components" reused everywhere because, why not? Everything was one massive bounded context.

If you've worked with legacy systems, you know exactly what I'm talking about.

The kickoff meeting was electric. Everyone was excited. The energy in the room was great. And guess what dominated the conversation?

**The bright, shiny new tech stack.**

Kafka. Drools rules engine. All the potential. All the possibilities.

I remember sitting there, watching slide after slide about the architecture we'd build, the technologies we'd use, the modern patterns we'd implement. And something nagged at me.

So I asked the question that probably made me the least popular person in the room:

> "Wait a second. Technology aside for a moment - do we actually know what we need to migrate?"

Silence.

Then the answer that always comes: "Of course. The basic requirement is 'as-is.'"

## The "As-Is" Trap

**As-is.** Two words that sound so safe, so reasonable, so risk-averse. Two words that are actually a trap.
{: .highlight-box}

Because "as-is" means migrating everything. Every feature. Every edge case. Every piece of technical debt. Every component that was built five years ago for a use case that no longer exists. Every "temporary" workaround that became permanent. Every feature that literally no one uses.

From my experience, **at least 40% of features in legacy systems are either not being used or never were** (I guess the number is even higher).

But "as-is" means bringing all of that forward. It means you get one shot at modernization, one chance to shed decades of accumulated cruft, and you choose to carry it all with you into the future.

I didn't get that contract. Apparently, the reason was that I lacked experience with JBoss.

Let that sink in. They wanted JBoss experience for a project that was migrating AWAY from JBoss.

A few months later, I heard through the grapevine that they'd realized something: "This is way bigger than originally planned."

They'd hit the iceberg and I wasn't surprised. There was no schadenfreude there - it actually made me really sad.

## The Real Problem: The Iceberg Under the Surface

What typically happens... Someone pulls up Jira. Or Confluence. Or whatever tool holds the "requirements." They look at the roadmap. They count the tickets. And someone says those fatal words:

> "It's not that difficult. Look, just a few tickets."

The roadmap paints the happy path. Click button A, system does B, user sees C. Simple. Clean. Straightforward.

**What the roadmap doesn't show you is everything below the surface.**

- The edge cases
- The implicit business rules that exist only in the heads of three people who've been at the company for 15 years
- The workarounds for bugs that were never fixed
- The integrations with systems that were supposed to be temporary
- The validation logic buried in stored procedures
- The business processes that fork in seventeen different directions based on conditions that aren't documented anywhere

This is where the real iceberg lurks.

**Every one of those features you DON'T have to migrate removes risk from the roadmap.**

This is not to be underestimated.

Every line of code you don't have to write is a line that can't have a bug. Every feature you don't migrate is one less thing that can break. Every business rule you don't carry forward is one less thing to maintain.

But how do you know what's safe to leave behind? How do you identify that 40% of unused features without accidentally cutting something that's actually business-critical?

You can't guess. You can't assume. And you definitely can't rely on "as-is."

**You need to see the whole system. Not the version that exists in the documentation. The version that actually exists.**

## The Three-Source Truth Method

Over the years, I've developed an approach that solves this problem. It's not magic. It's just refusing to build on quicksand.

I call it the **Three-Source Truth Method**, and it's based on a simple insight: if you want to understand what a legacy system actually does, you need to triangulate from three different sources.

Because each source tells you something different. Each source lies to you in a different way. And where they contradict each other - that's where you find the truth.

### Phase 1: Extract from Existing Requirements

We start with what already exists. Jira tickets. Roadmaps. Documentation. Whatever requirements the team has been working from.

But we don't just read them. We extract them to a timeline. We automatically deduce the first two phases of Event Modeling - brainstorming and storyboarding. We visualize the roadmap not with a list of tickets, but with behavior.

What events happen? In what order? What triggers them? What's the outcome?

This gives us the **official story**. The version of the system that someone, at some point, thought was important enough to document.

### Phase 2: Extract from Business Experts

Then we talk to the real heroes: the business experts.

These are the people who actually use the system every day. They know what's being used and what's collecting dust. They know what never worked properly. They know what's absolutely crucial, even if it's not in any documentation.

**They know the invisible, undocumented reality.**

We sit with them and extract what they know. Not through interviews where they try to remember. Not through requirements workshops where they try to anticipate every edge case.

We build Event Models with them. We map out the processes they actually execute. We capture their lived experience as events on a timeline.

This gives us the **real story**. The version of the system that actually exists in practice.

### Phase 3: Extract from the Codebase

Finally, we go to the source of truth that never lies: the code.

We use AI to analyze the existing codebase. We look especially at unit tests, APIs and the Database, because they reveal the real logic. We do this in iterations.

**Phase 1:** Identify the processes. What are the major workflows? What are the bounded contexts, even if nobody called them that?

**Phase 2:** Map out those processes. Look at APIs. Look at tests. Look at workflows. Look at database schemas. Look at integration points.

Extract Event Models from all of it.

This gives us the **brutal truth**. The version of the system that actually runs in production, regardless of what anyone intended or documented.

## The Magic: Combining All Three

Now comes the moment of truth.

We overlay the three Event Models. Requirements. Business experts. Code.

**They typically don't match.**

The requirements describe features that were never built. The experts know about processes that aren't in the requirements. The code does things that nobody remembers asking for.

And that's not a problem. **That's the point.**

Those mismatches ARE the gaps. That's where the iceberg lives. That's where the hidden complexity waits to derail your migration.

But now it's there on paper. Black and white. Visible. Discussable. Decidable.

## Making Decisions: Chapter by Chapter, Slice by Slice

Once you have this complete picture, the migration planning becomes straightforward.

We break the system down into chapters - logical groupings of related functionality. And we break chapters down into slices - individual work items that deliver value.

Then we go through them systematically.

> "What's with this chapter? Do we need it?"

And we can actually answer that question, because we have three different perspectives on it.

Sometimes, the answer is obvious. Nobody uses it. It's not in the roadmap. The code shows it's been deprecated for years. **Kill it. Risk removed.**

Sometimes, the answer is terrifying. The business experts covered this chapter extensively. They use it every single day. It's absolutely crucial to their workflow.

**But it's not mentioned anywhere in the roadmap.**

That's the best thing that can happen. You just found a critical gap. You just avoided shipping a new system that would have been missing something essential. You just saved yourself from a production disaster.

And here's where Event Modeling really shines: we can see the dependencies.

What belongs together? What relies on what? What's foundational versus what's at the edges?

This allows us to clearly identify things that can be postponed or done later. Or, just as importantly, things that cannot be postponed because other parts of the system rely on them.

I've seen this play out dozens of times. Someone initially thinks, "We need to migrate this feature right away." Then we show them the Event Model and the dependencies, and we realize: actually, nothing depends on this. We can push it to phase 3. Or kill it entirely.

That changes everything. Your migration strategy. Your timeline. Your risk profile.

## The Blueprint: From Model to Architecture

These Event Models are pure gold for migrations. They're living pictures that clearly map out the TODOs.

You can create Jira tickets directly from the Event Model. The chapters become epics. The slices become stories. Your roadmap is just a logical consequence of a mapped-out system.

You're not guessing anymore. You're not estimating in the dark. The system itself is telling you what needs to be built and in what order.

Then we take it further.

We generate code from this. We deduce the architecture blueprint from the Event Model. We structure capabilities. We map out context boundaries - this is where the Domain-Driven Design part comes in, often demanded by architecture teams. We create C4 diagrams.

We add more and more context. More and more detail. The specifications get richer. The boundaries get clearer.

**But the source of truth stays the Event Model.**

Everything else - the architecture diagrams, the context maps, the code generation templates, the roadmap - all of it flows downstream from that model.

## What Would Have Been Different in 2018

Sometimes I think about that JBoss project. The one that went sideways a few months later.

If I could go back in time with what I know now, here's what would have been different.

We would have spent two days really mapping out the architecture. Not the future architecture. The current one.

We would have used AI to analyze the codebase, especially unit tests, to find the real logic.

We would have built the Event Model with the experts. We would have made them part of the process from day one.

And then - only then - would we have made decisions about technology based on those facts.

Not: "What's our tech stack? Kafka and Drools sound cool."

But: "What does this system actually do? What are the real requirements? What can we leave behind? What's foundational? What depends on what?"

"Now, given that understanding, what's the right architecture?"

**That's the sane way.**

## The Sane Way Forward

Here's your migration checklist:

1. **Don't start with technology.** Start with understanding.

2. **Extract Event Models from three sources:** requirements, experts, and code.

3. **Find the gaps where they don't match.** Those gaps are your iceberg. Surface them now, not in production.

4. **Make decisions chapter by chapter about what to migrate.** Be ruthless. Every feature you don't migrate is risk removed.

5. **Use the dependencies to sequence what's foundational.** Don't guess at the order. Let the model tell you.

6. **Let the architecture emerge from the model.** Don't impose an architecture on a system you don't understand.

7. **Generate your roadmap from the model.** Don't guess at it.

**The sane way to migrate isn't about picking the right tech stack first. It's about refusing to build on quicksand.**

Two days of Event Modeling can save you months of "this is way bigger than we planned."

Because the last thing you want is to spend a year migrating a legacy system, only to discover you migrated the wrong things, missed the critical things, and carried forward 40% of features that nobody needed in the first place.

Ask me how I know.

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/aznGpTWXjN4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint for understanding and modernizing legacy systems.

I can teach your team how to apply the Three-Source Truth Method to your legacy systems. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/dont-rewrite-legacy-system' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Please Don't Rewrite Your Legacy System</h3>
        <p>Why your legacy codebase is a treasure trove of expensive knowledge and how to modernize without starting over.</p>
        <span class="related-post-meta">Architecture • December 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/kartographing-legacy-system' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Why Kartographing Your Legacy System is the Best Investment You'll Ever Make</h3>
        <p>Skipping it will cost you 10x later.</p>
        <span class="related-post-meta">Legacy Modernization • December 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/documenting-legacy-systems-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Documenting Legacy Systems with Event Modeling</h3>
        <p>How to document existing systems using Event Modeling patterns.</p>
        <span class="related-post-meta">Event Modeling & Legacy Systems • October 2023</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
