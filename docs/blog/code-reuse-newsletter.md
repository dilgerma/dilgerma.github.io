---
layout: docs
title: The Problem with Code Reuse - Why DRY Isn't Always the Answer
description: Why DRY isn't always the answer and preventing coupling is more important than code reuse. Understanding when to duplicate code vs when to abstract.
author: Martin Dilger
date: 2025-11-30
category: Architecture & Design
keywords: code reuse, DRY principle, coupling, software design, abstraction, code duplication, design patterns, software architecture
featured_image: /assets/images/blog/code-reuse-problem.png
tags: [design-principles, coupling, architecture, best-practices, code-quality]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Problem with Code Reuse - Why DRY Isn't Always the Answer</h1>
    <p class="blog-post-subtitle">Why DRY isn't always the answer and preventing coupling is more important than code reuse</p>
    <div class="blog-post-meta">
      <span>November 30, 2025</span>
      <span>10 min read</span>
      <span>Architecture & Design</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/code-reuse-newsletter.png' | relative_url }}" alt="The Problem with Code Reuse">
  </div>

  <div class="blog-post-content" markdown="1">

(This was episode #11 of my Event Modeling & Event Sourcing newsletter)

This week's edition is arriving a little later than expected, but I hope it's worth the wait! Today, we'll dive into the topic of code reuse and why, contrary to popular belief, it's often not the best idea.

The discussion began with a common question: "Should we reuse simple classes like DTOs across the system?"

If you had asked me this 10 years ago, my answer would have been an enthusiastic "Yes! Keep it DRY. Reuse is good!" But today, my perspective has shifted. Let me explain.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/code-reuse-newsletter-1.png' | relative_url }}" alt="Code Reuse Question">
</div>


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Why Code Reuse Is Tricky

For many of us, the principle of reusing code is ingrained—perhaps from university, where it's still taught as a best practice. So, when we encounter simple value classes like Email, Address, or Location, it feels natural to think: Why not reuse them? They rarely change, right?

Well, here's my answer: Don't, if there is not a very good reason.

I know this sounds controversial. In fact, during the discussion, someone quickly raised the usual counterargument:

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/code-reuse-newsletter-2.png' | relative_url }}" alt="Counterargument">
</div>

"If we don't reuse classes, won't we end up with mapping chaos and duplicate code everywhere?"

## A Real-Life Story

To illustrate my point, here's an excerpt from chapter 10 of my book, Understanding Event Sourcing. It's based on one of my first projects—a classic example of how reusing value classes can backfire.

Before you dive into this topic - there is a new Online Course "Implementing Eventsourcing", that will guide you step by step through this process. Find more details at the end of this article.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/code-reuse-newsletter-3.png' | relative_url }}" alt="Real-Life Example">
</div>

Imagine you're faced with a choice:

1. Create a central location for these reusable classes and share them across the project (from domain to presentation).
2. Reimplement them in each module, risking what I call Mapping Hell—most of your code ends up translating from one context to another.

Which is the smaller problem?

## The Problem with Reuse

Let's take a Location class as an example. It contains latitude and longitude—seems simple enough to reuse, right? Not so fast.

By reusing the Location class, you're assuming that its definition is consistent across the entire system. For some modules, this might hold true. But in others, "location" might represent something completely different, like a physical address.

Now consider an Address class. At first, it might seem reusable too. But what happens when one module needs to add a companyName field to support business addresses? Suddenly, every module in the system inherits this new field—even those that don't care about it. This creates strong coupling between modules.

The biggest issue? Where do you draw the line? Is Location reusable but not Address? How do you decide—on gut feeling?

## My Approach: No Coupling Between Modules

My approach is simple: Prevent coupling at all costs. Code reuse or DRY is not my priority.

So, I never reuse value classes across slice- or module-contexts. Ever. It might seem extreme, but this clear guideline ensures that vertical slices remain independent. And the freedom this approach brings is worth it.

## But What About Mapping Hell?

Yes, at some point, you need to translate between contexts. But if you're working with Event Sourcing, you're already projecting data from your event store to your target models. There are no global assumptions—you simply build the models you need.

In this sense, CQRS complements Event Sourcing beautifully. You store data one way but read it in multiple ways. If you find yourself constantly mapping the same information between layers, it's worth revisiting your system design. Mapping should not dominate your codebase.

## Food for Thought

As always, this email reflects how I personally approach a common challenge. My solution may not be the best for everyone, but it offers a perspective that I hope you find thought-provoking. It's the kind of discussion that's best enjoyed over a few beers.

Want to see this in action?

Join the free newsletter to get Event Modeling & Event Sourcing once per week to your inbox.

If this topic resonates with you, there is a full recording of my Webinar: Full Circle: Plan, Build, and Verify

We'll cover the entire process—from requirements to prototype to code—in just 90 minutes. You'll see exactly how I work, and the Q&A at the end will be a perfect opportunity to ask your questions.

Want to practice your skills in a safe environment?

The Online Course "Implementing Eventsourcing" gives you exactly that. It's a perfect companion to the Book "Understanding Eventsourcing"!

Everything I know about Evenet Modeling & Event Sourcing in one course.

**Martin Dilger**

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
    <a href="{{ '/docs/blog/code-reuse-problem' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Code Reuse Problem</h3>
        <p>Understanding the hidden costs of code reuse</p>
        <span class="related-post-meta">Software Design • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/10-learnings-from-10-years-microservice-development' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>10 Learnings from 10 Years of Microservice Development</h3>
        <p>Hard-won lessons from a decade of building distributed systems</p>
        <span class="related-post-meta">Microservices • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-agents-brooks-law-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>AI Agents, Brooks' Law, and Coupling</h3>
        <p>How AI agents change the dynamics of software development</p>
        <span class="related-post-meta">AI & Software • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
