---
layout: docs
title: "Podcast Episode 29: Legacy Migration - Why You Need a Plan Before You Start"
description: Martin and Adam discuss legacy system migration strategies, the shelf pattern anti-pattern, helper read models, and why event modeling is essential before touching legacy code.
author: Martin Dilger
date: 2025-12-08
category: Event Modeling & Podcast
keywords: legacy migration, event modeling, shelf pattern, helper read models, legacy code, migration strategy, event sourcing podcast
featured_image: /assets/images/blog/podcast-29.png
tags: [podcast, event-modeling, legacy-systems, migration, anti-patterns, event-sourcing]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Podcast Episode 29: Legacy Migration - Why You Need a Plan Before You Start</h1>
    <p class="blog-post-subtitle">Martin and Adam discuss legacy system migration strategies, the shelf pattern anti-pattern, and why you need an event model before touching legacy code.</p>
    <div class="blog-post-meta">
      <span>December 8, 2025</span>
      <span>25 min listen</span>
      <span>Event Modeling & Podcast</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/podcast-29.png' | relative_url }}" alt="Podcast Episode 29">
  </div>

  <div class="blog-post-content" markdown="1">

Welcome to Episode 29 of the Event Modeling and Event Sourcing Podcast with Martin Dilger and Adam Dymitruk.

**Watch on YouTube:** [https://youtu.be/g9FCrbQ3Y4E](https://youtu.be/g9FCrbQ3Y4E)

## Episode Highlights

In this episode, Martin and Adam dive deep into several critical topics for software development teams:

- **Legacy system migration strategies** - Why you absolutely need a plan
- **The Shelf Pattern** - A dangerous anti-pattern that makes slices unmaintainable
- **Helper Read Models** - How to decompose complex processors
- **Corporate culture** - Thought leadership and team ownership
- **Fixed-cost pricing** - How event modeling enables predictable estimates

## Legacy Migration: Hope is Not a Strategy

Martin kicks off the main discussion with a topic close to every developer's heart: dealing with legacy systems.

> "The first thing I typically say is: before you do anything, you need to have a plan. Successful migrations of legacy always start with a plan. Everything else is starting with hope. Hope is not a strategy."

### The Golden Rule: Model What You Have First

Before attempting any migration, you must understand what you're dealing with. Martin emphasizes:

**Model your system with event modeling - not what you want to have, but what is happening right now.**

Many teams are surprised by this advice because it takes significant time and effort. But every minute invested in understanding your current system pays dividends later.

Adam shares a practical example of working with a city government using an old Microsoft Access system:

> "I said, 'The simplest thing we can do is have a meeting where you walk me through your system by example.' I recorded the call, pressed pause on each screen, and translated it to an event model."

This approach revealed:
- All the screens and data being used
- Every button press and workflow
- The complete scope of what needed to be replaced

Most importantly, it showed the client the true cost and complexity - preventing them from starting a doomed migration project.

## The Reality Hidden in Legacy Code

Martin makes a crucial point that many developers overlook:

> "Every if statement in there, everything, was a bug that you paid big money to fix. All these workarounds in your legacy system - that's your reality. That's how your processes work."

If you rewrite without understanding this reality, you'll:
- End up in the exact same spot in a few years
- Burn a tremendous amount of money
- Lose all the hard-won knowledge embedded in the code

### Use Git History to Find What Matters

One of Martin's favorite techniques is analyzing git history to see where the real churn happens:

> "Look at the git history - how much churn is there? You didn't change this piece of code in the last 10 years. Why in all the world would we migrate that? It just works. Leave it alone."

Focus your migration efforts on:
- Code that changes frequently
- Areas with high "flux" (a concept from Michael Feathers)
- Pain points that block new features

## The Shelf Pattern: When One Slice Gets Too Big

Adam introduces one of the key anti-patterns in event modeling - the **Shelf Pattern**:

> "If you have a slice that goes over a certain amount of given-whens - like over 20 tests - you're making a god class. That's not fair for someone to work on this one thing for a month while someone else gets a normal slice and works on it for two days."

### What Makes a Shelf?

A shelf pattern appears when:
- One slice has dramatically more given-when-then specifications than others
- The complexity jumps out visually on the event model
- You need to attach another piece of paper below to see it all
- It would take weeks instead of days to implement

Martin adds:

> "It's one of my anti-patterns. Typically when you have this shelf pattern, it jumps right at you. When they are really big, they are huge. The complexity jumps out at you - it's visual."

### How to Fix the Shelf Pattern

Adam shares his invoicing example - generating an invoice involves:
- Different billing rates (hourly vs. per-slice)
- Time bucket configurations (monthly, bi-weekly, weekly)
- Rate changes mid-project
- Multiple projects and sub-projects
- Revisions and corrections

Instead of one massive slice, break it down using **helper read models**:

1. **Time Bucket Read Model** - Handles when to generate invoices
2. **Rate Calculation Read Model** - Manages billing rate changes
3. **Lookup Read Models** - Product names and other display data
4. **Core Invoice Read Model** - The actual invoice generation

> "You would have these helper read models on the side. Your processor would not just have one read model, but it would have two or three or four."

Martin's approach:

> "I try to zoom in into this processor. Let's open up a second time. Let's zoom in. Let's break this processor down into dedicated steps."

This reveals that what looked like one slice is actually 3-7 slices worth of work.

## Helper Read Models: Design Pattern or Overhead?

An interesting discussion emerges about helper read models:

**Adam's Rule of Thumb:**
- Don't charge for helper read models with no screen and fewer than 3 given-whens
- They're supporting infrastructure for the main slice
- If there's 4+ given-whens, it counts as its own slice

Martin agrees:

> "These lookup models, I do have them on the event model, but I don't put in any given-when-thens typically."

The key insight: helper read models should be:
- Used ONLY by one processor (no DRY across processors)
- Simple lookup or calculation logic
- Not shared across multiple slices

This keeps each processor self-contained while managing complexity.

## Corporate Culture: "My Team" and Thought Leadership

The conversation takes an interesting turn to corporate culture issues.

### The Problem with "My Team"

Adam raises concerns about managers who say "my team":

> "I've seen lots of good people's work kind of be taken credit for without attribution. The word 'my' implies ownership."

Better alternatives:
- "The team I'm on"
- "The team I manage"
- "The project team"

Adam prefers flat organizations where:
- Credit is given explicitly to individuals
- Event modeling shows who did what work
- Management overhead is automated through transparency

### Thought Leadership

Both hosts express skepticism about the term "thought leader":

Adam:

> "I hate the word thought leadership. It implies that I'm telling you how to think or that I thought of all these things by myself. Event sourcing is as old as accounting itself."

Martin takes a more measured view:

> "I think most people don't do this out of bad intention. They just like what you do. They like how you try to bring change."

The key distinction:
- Being a "loudmouth" who shares ideas ≠ being a thought leader
- Everyone should be an independent thinker
- Ideas build on the work of many people
- Give credit explicitly when ideas come from others

## Fixed-Cost Pricing with Event Modeling

Throughout the discussion, both hosts reference how event modeling enables fixed-cost pricing per slice.

The challenge: How do you ensure slices are similarly sized?

**The Litmus Test:**
- Count the given-when-then specifications
- If dramatically different, something's wrong
- Use git history to verify actual complexity
- Zoom in on complex processors to find hidden steps

This creates fairness:
- Developers aren't stuck with god classes
- Clients don't overpay for simple work
- Everyone can see the scope visually

## Upcoming Workshop

Martin and Adam mention their upcoming introductory event modeling workshop on December 9th.

Key points:
- Covers all the bases for beginners
- Q&A can go deep into rabbit holes
- Student discounts available
- Designed to help people recently laid off learn valuable skills

Adam emphasizes:

> "The best thing you can do with the time you now have is learning event modeling. That's a skill that prepares you for what's to come. Learn how to think in systems."

## Key Takeaways

1. **Never start a legacy migration without an event model** - Model what exists first, not what you want
2. **Watch for the Shelf Pattern** - If one slice is dramatically larger, break it down
3. **Use helper read models** - Decompose complex processors into manageable pieces
4. **Analyze git history** - Focus migration efforts on high-churn areas
5. **Fixed-cost pricing works** - When slices are properly sized and visible
6. **Give credit explicitly** - Avoid "my team" language and thought leadership traps

## Join the Conversation

Have questions about legacy migration or event modeling? Reach out to Martin or Adam on LinkedIn or join the event modeling community.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

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
    <a href="{{ '/docs/blog/dont-rewrite-legacy-system' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Don't Rewrite Your Legacy System</h3>
        <p>Why rewriting legacy systems usually fails and what to do instead</p>
        <span class="related-post-meta">Legacy Systems • December 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/documenting-legacy-systems-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Documenting Legacy Systems with Event Modeling</h3>
        <p>How to capture the reality of your legacy systems</p>
        <span class="related-post-meta">Event Modeling • December 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/event-modeling-adoption' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Why Your Event Modeling Workshop Didn't Stick</h3>
        <p>Event Modeling doesn't fail in isolation</p>
        <span class="related-post-meta">Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
