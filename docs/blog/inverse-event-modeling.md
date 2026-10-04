---
layout: docs
title: "Inverse Event Modeling: Building the Model From the Code"
description: Event Modeling usually comes before the code. For teams with existing systems, you can turn it around - the model gets built from the code, and AI keeps it true. Here's how Inverse Event Modeling works, and why detecting drift is nothing technical.
author: Martin Dilger
date: 2026-10-04
category: AI & Event Modeling
keywords: inverse event modeling, event modeling, process drift, legacy systems, documentation, ai, em-studio, eventmodelers
featured_image: /assets/images/blog/inverse-event-modeling.png
tags: [event-modeling, ai, legacy, em-studio]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Inverse Event Modeling: Building the Model From the Code</h1>
    <p class="blog-post-subtitle">For teams with existing systems, the model gets built from the code - and AI keeps it true. Why detecting drift is nothing technical.</p>
    <div class="blog-post-meta">
      <span>October 4, 2026</span>
      <span>7 min read</span>
      <span>AI &amp; Event Modeling</span>
      <span>By Martin Dilger</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/inverse-event-modeling.png' | relative_url }}" alt="Inverse Event Modeling - the Event Model is updated from the existing codebase when process drift is detected">
  </div>

  <div class="blog-post-content" markdown="1">

Event Modeling usually comes before the code. For teams with existing systems, you can turn it around and do Inverse Event Modeling: the model gets built from the code, and AI keeps it true. Here's how Inverse Event Modeling works, and why detecting drift is nothing technical.
{: .lead}

<div class="video-embed">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kuXy-_uew8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## The Code Is the Source of Truth. Sure.

Engineers LOVE to say the code is the source of truth. I've said it myself, many many times in my career. And it isn't even completely wrong.

But your product owner will never open the code to understand a process. That's a fact. Neither will your business analyst, your head of operations, or the new team lead who joined last month and wants to know how a refund actually works in your system.

They will ask engineers to create a one-pager to explain it, as the existing documentation is hopelessly out of date.

Nothing is worse than outdated documentation. It's worse than having none, because people trust it. And once it's gone or wrong, everybody who can't read code has exactly two options left: ask an engineer, or guess.

You need a place to go to.

## Where Event Modeling Pays Off the Most

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/inverse-event-modeling-1.png' | relative_url }}" alt="Owner &amp; Pet Care Event Model with screens, commands, read models and events like Owner Registered, Pet Added and Owner Details Updated">
</div>

Many of my clients love Event Modeling. And the biggest return on investment always shows up in the same place: when you adapt your processes.

You model first. You see the impact of a change before anyone writes a line of code. And then you decide, based on real evidence instead of gut feeling.

That's still what I teach. It's still what I believe. When a team can work that way, nothing else I know comes close. But for most teams, that's just not possible right away.

## Not Every Team Can Just "Event Model"

They have existing processes. They have existing codebases, often years old, sometimes decades. They can't stop everything and "just Event Model". Before they see any value, they first have to document the system they already have. That's a big effort, and it's easy to understand why many teams never start.

And even the teams that do invest run into the next wall.

I see this pattern a lot. A team puts real time into modeling. The workshop produces great insights, the kind that make people say "we never knew it worked like that". Everyone leaves aligned.

Then, at some point, model and code start to drift. Slowly. A field gets added here, a rule changes there, a flow gets reworked and nobody updates the board. Under pressure - you start with the code. Drift is a real problem, in the architecture and in the model.

With AI, and the rate of change we're seeing right now, it gets much worse, not better. An agent can change more in a day than a team used to change in a sprint. Nobody updates a model at that speed by hand.

Eventually someone opens the model, finds something that doesn't match, and quietly stops trusting it. They go back to reading the code. And the product owner is locked out again.

## Inverse Event Modeling - Turning Event Modeling Around

So here's what we do instead.

We do not use Event Modeling for discovery. We use Event Modeling as documentation of process. And we use AI to keep it up to date.

I know that sounds strange coming from me. I've spent years telling people to model first. But the method itself doesn't care which direction you go. An Event Model is a picture of a process that business people and engineers can read together. That picture is valuable whether you draw it before the code exists or long after.

For teams with an existing system, after is the only realistic starting point. So that's where we start.

## How It Works

The idea is simple. The details are what make it trustworthy.

**Point the agent at your codebase.** You let it build the Event Model from what's actually there. This takes a few iterations depending on the size of the codebase. We start high level, so we know which flows exist at all. Then we go flow by flow, each one small enough that a human can look at it and say whether it's right.

**Record the evidence.** For every step, the agent records why it mapped the code the way it did. Where in the code it found the behavior, and which decisions it made along the way. Call them Auto-ADRs if you want. The model isn't a guess dressed up as documentation. You can check every box on the board against the code it came from.

**Set a watermark.** Every analysis records what it was based on, typically a git commit hash. The model always knows which moment in the life of the code it describes.

**Run process-drift detection continually.** From then on, you don't rebuild the model. You look at what changed in the code since the watermark, update the model where the process changed, and get notified when the code drifts away from the process.

This works for any codebase - especially legacy CRUD codebases. Those are exactly the systems where the process is hardest to see. It's buried in update statements and if-branches, and nobody has written it down in years. That's where a model helps the most.

## Detecting Drift Is Nothing Technical

And this is the part that most teams get wrong.

When people talk about drift, they almost always mean architecture drift. Modules. Dependencies. Layering. Which package is allowed to call which. What tools are being used. There are good tools for that, and it's all important.

But in the end, nobody cares.

Your business doesn't care whether a dependency points in the wrong direction. Your product owner doesn't care which module a rule lives in. What they care about is whether the system still does what the business needs it to do.

Detecting drift is nothing technical. There's only one question that really matters: does the architecture still implement our business process (including all the non-functional requirements)?

If the answer is yes, I don't care too much about the implementation itself. If the answer is no, every green dashboard in the world won't help you.

That's why we call it process-drift detection. The behavior is what you protect. The structure is just how you got there.

## It Works in Both Directions

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/inverse-event-modeling-2.png' | relative_url }}" alt="Existing codebase and Event Model: update the model when process drift is detected, implement when the specification has changed">
</div>

Once the model exists and stays true, something interesting happens. It starts working in both directions.

Forward, you can add the plan to the Event Model and use it as the spec for new features. You document the intent, and the agent creates the tickets and the implementation from it.

Inverse, you get your existing processes documented from the code, without stopping the team for weeks to write it all down by hand.

And most importantly, you get notified when the code drifts from the process. Not months later, when someone happens to notice. Right when it happens.

The sketched model becomes a blueprint. The agent knows how the codebase maps to the model, because the evidence is recorded for every step. Trust in the model stops being something you hope for. It's something you check, like a test.

## A Place to Go To

So let the code stay the source of truth. For engineers, it might be forever.

The model becomes the place everyone else can actually read it. And it stays true, because it's checked against the code continually instead of drawn once and slowly forgotten.

For the teams that could never "just Event Model", that changes everything. They don't need a big upfront effort anymore to get started. They don't need discipline alone to keep the model alive.

You don't have to start from zero to start modeling. Start from where you are.

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
    <a href="{{ '/docs/blog/sane-way-migrate-legacy-event-driven' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Sane Way to Migrate Your Legacy Project Towards an Event-Driven Architecture</h3>
        <p>How to approach legacy migration step by step, without a big-bang rewrite.</p>
        <span class="related-post-meta">Legacy Modernization • January 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>Why AI and Event Modeling are a perfect match - and why vibe coding will always fail.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/solving-event-modeling-enterprise-part-2' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Solving Event Modeling for the Enterprise, Part 2: Mapping Event Models to Tasks and Tickets</h3>
        <p>Estimation is broken because engineers guess before they understand. Slices replace the guess with something you can count.</p>
        <span class="related-post-meta">Event Modeling &amp; Planning • September 2026</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
