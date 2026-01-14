---
layout: docs
title: I Still Feel the Urge to Reuse Code (Even Though I Know It's Wrong)
description: After years of watching software projects slow to a crawl, I finally figured out what nobody wanted to admit - the real enemy isn't bad developers or changing requirements. It's coupling.
author: Martin Dilger
date: January 14, 2026
category: Architecture
keywords: coupling, event modeling, event sourcing, code reuse, DRY principle, software architecture, slices, vertical slice architecture, redundancy
featured_image: /assets/images/blog/urge-to-reuse-code.png
tags: [coupling, architecture, slices, event-sourcing, event-modeling, DRY, redundancy]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>I Still Feel the Urge to Reuse Code (Even Though I Know It's Wrong)</h1>
    <p class="blog-post-subtitle">After years of watching software projects slow to a crawl, I finally figured out what nobody wanted to admit - the real enemy isn't bad developers or changing requirements. It's coupling.</p>
    <div class="blog-post-meta">
      <span>January 14, 2026</span>
      <span>12 min read</span>
      <span>Architecture & Design</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/urge-to-reuse-code.png' | relative_url }}" alt="I Still Feel the Urge to Reuse Code">
  </div>

  <div class="blog-post-content" markdown="1">

A word of caution - if you are a software developer, architect or tester, this article might challenge some of the fundamental beliefs you have about your work. When I started to look for different ways to build systems in 2021 - I rejected every single one of the ideas presented here. It took a long time to forget what I learned. And even longer to re-learn.

After years of watching software projects slow to a crawl, I finally figured out for me, what nobody wanted to admit or could explain: the real enemy isn't bad developers or changing requirements.

**It's coupling.**

And I'm not talking about the academic, textbook definition you learned in computer science. I'm talking about the silent killer that turns your greenfield rocket ship into a rusty freight train.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The Cost Curve Nobody Talks About

Look at any software project. In the beginning, you're flying. Features ship fast. The team is pumping out value like crazy. Everything feels possible.

Then something shifts.

Suddenly, simple changes take days instead of hours. Bugs multiply. The team slows down. And the worst part? Nothing obvious has changed. Same team, same codebase, same tools.

**That's the first coupling wave hitting you.**

Features are only fast until they start to get too tightly coupled. You change one thing and suddenly you have to adjust 2 other things. Then 3. Then 10. Before you know it, every change ripples through the entire system like a sledgehammer through a house of cards.

I spent my entire career feeling this pain but couldn't name the real problem. I blamed process. I blamed people. I blamed unclear requirements.

I was wrong every time.

## The Trade Nobody Wants to Make

When I discovered event modeling and event sourcing, everything changed. The approach is simple but radical: slice your system into tiny, independent pieces. Each slice stands alone.

But here's the part that makes people think I'm insane: **we happily trade coupling for redundancy.**

Instead of shared tables, joins, and views, we use dedicated tables per slice. Sometimes several of them. Which means we keep a lot of redundant data in the system.

Yes, you read that right. Redundant data. On purpose.

This goes against everything we've been taught. DRY principle. Normalization. Efficiency. All that sacred computer science dogma screaming at you that redundancy is waste.

**But here's what nobody tells you: coupling is a far more expensive waste than redundancy ever will be.**

## The Urge Never Goes Away

Let me be honest with you - even after years of doing this, even after countless successful projects, I still feel the pull.

**The urge to "reuse" things never fully leaves you.**

Here's a concrete example from one of our recent projects: Users could create "submissions" - small text blocks with placeholders. These submissions get reused in several places throughout the app, so naturally we had a submissions table. ID, title, text (stored as JSON, with formatting and stuff), and some other attributes. Standard stuff.

Then we built a template engine. Users could choose a template, pick any submission, and combine them into a rendered PDF or whatever format they needed.

And here's where the urge hit me like a truck: Should we just access the submissions table that's already storing all this data?

It's right there. Just one select statement away. Even in the same schema. It has everything we need. Why duplicate it?

Every fiber of my "efficient developer" instincts screamed YES. Just query the damn table. Don't waste time. Don't waste storage. Don't be ridiculous.

**But that's the trap.**

## The Line I Won't Cross

We didn't do it.

Instead, we created another table: submissions_for_templates. We filled it with exactly the data the template engine needs - in this case, just the ID and title for displaying in the UI. And it's so counterintuitive - for some it might feel plain wrong. And I'm with you there.

Yes, we duplicated data that already existed. Yes, it felt wrong. Yes, I still wanted to take the shortcut.

**But connecting the template engine directly to the submissions table would have coupled our "template engine" slice to "submissions."** And I know exactly where that leads. I've been there dozens and more times.

I get tons of pushback for this. Every single time. It's against everything we've ever learned.

"Martin, that's wasteful." "We already have the data." "This is inefficient." "You're being extreme."

I don't care.

I'm willing to accept a lot of things in projects now - quite different from myself a few years ago. I used to argue about everything. Tools, patterns, Code Formatting, Structure, practices, you name it. I had an opinion on everything.

**But coupling? Coupling is the only thing I refuse to debate nowadays.**

I won't accept it. Because I know where it leads.

## What You Buy When You Prevent Coupling

Here's what people miss: when you prevent coupling and build your system using slices, anything - literally anything - can be changed in 1-2 days.

Want to switch Libraries for PDF Generation? Fine. It's just another slice. Need to completely rewrite how submissions work? No problem. Template engine doesn't care. Business decides to change the entire PDF rendering logic? Go ahead. Nothing else breaks. Want to remove one feature completely? Delete the slice - nothing else in the system will care.

There's no reason to argue whether something is done this way or that way. If you want to switch, it's just another slice around the corner.

**Nothing is sacred except preventing coupling.**

That's the freedom you buy. The optionality. The ability to adapt without fear.

Most teams are trapped by their past decisions. Every change is a negotiation with the existing system. Every new feature is a gamble - will this be the change that finally breaks everything?

The one feature that becomes the nail in the coffin? **When you prevent coupling, there's no coffin.**

## The Cost Curve, Inverted

Remember that cost curve from the beginning? The one where every project inevitably slows down?

**It doesn't have to be that way.**

When you ruthlessly prevent coupling, the cost curve stays flat. Month 12 looks like month 2. Year 3 looks like year 1. Slice 200 looks like Slice 5.

Is it easy? No. Does it feel natural? Hell no. Will people think you're extreme? Absolutely.

But after years of doing it both ways, I'll never go back.

## The Implications of It

Doing Systems like this has far reaching implications - more than you might see in the beginning.

If a Slice works, is tested (no matter if manually or automated) and guaranteed to work - you won't touch this feature ever again unless the requirements for the feature change (which might be years from now or never). There is literally no other reason to touch it. If it works, it works. We call it **"Done is done"**.

Now if this feature is guaranteed to work, and there's no accidental side effects that might break it without us knowing - do you really need to re-test it every time you run your build pipeline? Or is it enough to test it when it changed?

If you think more about it - If you need to test it when it changed anyways - do you really need to have automated tests for it or is it enough to just test it manually and check it off until requirements change the next time? Crazy idea, right?

For me, Unit Tests were never a tool for quality Assurance.

**The one reason we need unit-tests in almost any system is accidental side effects.** If the Template Engine and Submissions share the submissions table, and you change the submissions table by renaming a column - you might accidentally break template rendering - and without tests you will never know.

Tests just help you spot the problem - the root cause though is coupling.

**Accidental Side-Effects is exactly what we rule out on a system level by designing in slices.** It's baked into the architecture. That's why I'm so ruthlessly debating and defending it.

Coupling is the root of all evil in software. And I'll die on this hill.

## Want to Experience This First Hand?

There are still seats left in my **"Event Sourcing and Slicing Fundamentals" Workshop** - if you subscribe today, you'll not only reserve your seat, but you'll immediately get access to my "Implementing Event Sourcing" Online Course, which you can use to prepare for the Workshop. See you there?

**[Claim your seat here](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

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
    <a href="{{ '/docs/blog/code-reuse-problem' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The problem with code reuse</h3>
        <p>Why DRY isn't always the answer and preventing coupling is more important than code reuse</p>
        <span class="related-post-meta">Architecture • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/show-me-the-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Show Me the Coupling</h3>
        <p>Your wonderful microservice architecture? I don't care. Show me the coupling.</p>
        <span class="related-post-meta">Architecture • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/aggregate-state-projections' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Should You Reuse Aggregate-State in Your Projections?</h3>
        <p>Finding the right Aggregate Boundaries and understanding the role of state in Event Sourcing</p>
        <span class="related-post-meta">Event Sourcing • November 2024</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
