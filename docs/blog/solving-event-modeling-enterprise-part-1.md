---
layout: docs
title: "Solving Event Modeling for the Enterprise, Part 1: How It All Started"
description: Event Modeling works beautifully as a planning tool - until the model grows and a whiteboard can't keep it alive anymore. The first part of a series on the boring, unglamorous problems that keep Event Modeling small.
author: Martin Dilger
date: 2026-09-12
category: Event Modeling & Architecture
keywords: event modeling, event sourcing, em-studio, enterprise adoption, spec-driven development, eventmodelers
featured_image: /assets/images/blog/solving-event-modeling-enterprise-part-1.png
tags: [event-modeling, enterprise, em-studio, spec-driven-development]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Solving Event Modeling for the Enterprise, Part 1: How It All Started</h1>
    <p class="blog-post-subtitle">Event Modeling works beautifully as a planning tool - until the model grows and a whiteboard was never built to keep it alive.</p>
    <div class="blog-post-meta">
      <span>September 12, 2026</span>
      <span>6 min read</span>
      <span>Event Modeling &amp; Architecture</span>
      <span>By Martin Dilger</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-1.png' | relative_url }}" alt="Solving Event Modeling for the Enterprise - Part 1: How it all started">
  </div>

  <div class="blog-post-content" markdown="1">

October 2023 - I decided I'll go all in on Event Modeling. I knew it since November 2021, ran a lot of projects with it, and was convinced. So I decided that would be my next big bet.
{: .lead}

In February 2024 I started building an app for Miro, because I believed better tooling would make Event Modeling easier to run. I would not start this journey again.

I was right about the tooling. I was wrong about how small the problem was.

We ran dozens of projects with plain Miro, then far more once the toolkit existed. And every project taught me the same thing: modeling isn't the hard part. Keeping the model alive is.

Event Modeling works beautifully as a planning tool. Teams get a shared language, meetings improve, decisions get clearer - literally from day one. But at some point those models grow, and if you want to use them for something bigger, like agentic engineering, they start breaking in ways a whiteboard was never built to handle.

There's no history. Someone makes a change without really thinking about it, and there's no way back. No one knows if the model still matches the code.

Nothing prevents you from doing the wrong things. On a whiteboard, anything is allowed - unfortunately.

Slowly, people stop trusting the model. They go back to reading source code instead. At least there's some truth to that. The model gets abandoned over time.

For years my answer to this was "just be more disciplined." Make deliberate changes. Always model together. Take screenshots so you have some kind of history.

That was never a real answer. And I knew it. It just avoided the truth: without tooling, Event Modeling won't survive contact with the enterprise. Same as a company typically won't try to do Scrum at scale without some tooling support.

For small teams, a bunch of sticky notes beats any tool. But at scale, sticky notes just don't cut it anymore.

So I decided to solve those problems, one at a time, by building the best Event Modeling platform available - based on my years of experience and a ton of feedback from the Event Modeling Community.

The first commit was made on August 28, 2026 - about a year ago. I posted about this experiment here. It was just for fun first - can I port what we have in Miro to the web somehow? It worked, and pretty quickly so.

Later that year, I started to work more seriously on it. I already had a JSON specification for Event Modeling I was using for Spec-Driven Development, so the model could be read by agents and for code generation. Then I had generators - static and using LLMs - that turned that specification into working code. Then, as it got cheap enough, we let LLMs take over that generation completely. Then, so we didn't depend on subsidized token prices or ship enterprise data off-site, we moved that generation onto local, on-prem models.

I didn't abandon static code generation because it didn't work - it's just the effort to maintain those static code generators doesn't justify the investment right now. Generating with LLMs is just faster and cheaper.

None of it was one big idea. Each step just solved the next real problem standing in the way.

That's what EM-Studio and our current agentic workflows are. Not a leap. The next logical step in a chain that started with a Miro app three years ago.

## What Are Those Enterprise Problems You Talk About?

Event Modeling solves problems most companies genuinely struggle with: unclear requirements, misaligned teams, specifications AI agents can actually build from.

But for years it stayed a niche practice, because nobody solved the boring, unglamorous problems that make it survive contact with a real enterprise.

Over the next few days I'm writing a series, "Solving Event Modeling for the Enterprise," going through those problems one at a time - the ones that kept this practice small, and exactly how we solve each one now.

**Part 2 - Mapping Event Models to Tasks & Tickets**

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-1-1.png' | relative_url }}" alt="Planning view filtering Slices by context, chapter and status, with a TODO List slice marked Blocked">
</div>

**Part 3 - Collaboration - Solving the Big Problems Together (Collaborating with Humans and Agents)**

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-1-2.png' | relative_url }}" alt="Board collaboration controls showing an Agent, Follow, Show users, Show assignees and Mentions of you">
</div>

**Part 4 - Structure and Ownership (Boards, Contexts, Chapters and Slices)**

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-1-3.png' | relative_url }}" alt="Two related boards, TODO App and Failure Flow, connected through a shared TODO context">
</div>

**Part 5 - Evolving Event Models (Change, Strategy and Version Control)**

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-1-4.png' | relative_url }}" alt="Board History view with a timeline slider, event count and a Restore this state action">
</div>

**Part 6 - Describing Business Rules (Guard Rails for Agentic Development)**

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-1-5.png' | relative_url }}" alt="Storyline editor showing a Given/When/Then flow with a failing Add TODO List event">
</div>

**Part 7 - Generating Code (Slices First, Spec First, Agent First)**

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/solving-event-modeling-enterprise-part-1-6.png' | relative_url }}" alt="Table of current and planned Build Kits across tech stacks, UI kits and community kits">
</div>

Make sure to follow me here on LinkedIn to not miss any of them. Feel free to ask questions along the way.

### Links

- [EM-Studio](https://app.eventmodelers.ai)
- [EM Spec](https://app.eventmodelers.ai/documentation#em-spec-overview)
- [EM Build Kits](https://app.eventmodelers.ai/documentation#agentic-building)

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
    <a href="{{ '/docs/blog/agentic-ui-building-ui-from-event-models' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Agentic UI - Building the UI from an Event Model</h3>
        <p>The backend is a solved problem. Here's how the first UI-Build-Kit turns your Event Model into a real frontend.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • September 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/bring-event-modeling-company' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How to Bring Event Modeling to Your Company</h3>
        <p>Start small, win big: practical ways to introduce Event Modeling without overwhelming your team.</p>
        <span class="related-post-meta">Event Modeling &amp; Adoption • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>AI is the accelerant. Event Modeling is the structure that makes it work.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
