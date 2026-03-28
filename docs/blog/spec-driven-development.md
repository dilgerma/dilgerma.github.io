---
layout: docs
title: A Simple Guide to Spec-Driven Development
description: What I've built is closer to a very disciplined, very tireless junior developer. The thinking still happens before the agent touches a single line. Here's exactly how spec-driven development works.
author: Martin Dilger
date: 2026-03-28
category: AI & Architecture
keywords: spec driven development, AI agents, event modeling, RALPH loop, code generation, automation
featured_image: /assets/images/blog/spec-driven-development.png
tags: [ai, automation, event-modeling, spec-driven-development]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>A Simple Guide to Spec-Driven Development</h1>
    <p class="blog-post-subtitle">What I've built is closer to a very disciplined, very tireless junior developer. The thinking still happens before the agent touches a single line.</p>
    <div class="blog-post-meta">
      <span>March 28, 2026</span>
      <span>8 min read</span>
      <span>AI & Architecture</span>
    </div>
  </div>

  <div class="blog-post-content" markdown="1">

I keep my AI Agents running 24/7. Most people hear "AI writes your code overnight" and picture a black box doing the thinking.
{: .lead}

That's not at all what this is.

What I've built is closer to a very disciplined, very tireless junior developer who never gets bored. The thinking - the architecture, the design decisions, the business rules - that all happens before the agent touches a single line. What the agent handles is the part that used to drain me: the repetitive, tedious, mechanical translation from a clear specification into working code.

Let me show you exactly how this works.

## It Started With One Client Project

Last year I was working with a client and we used that project as a blueprint. So it wasn't greenfield, but something already there. Not a perfect process from day one - more like a foundation I kept improving, iteration by iteration.

The key insight from that project was simple: if your specification is precise enough, the code almost writes itself. And event modeling gives you exactly that kind of precision. Every slice - every small, distinct business capability - is defined so clearly that there is almost no room for ambiguity.

The first slices we generated, I reviewed every single line. Carefully. Skeptically.

But here's what I kept seeing: the code looked like code I would have written myself. Same structure. Same decisions. Because the blueprint architecture - the patterns we defined by hand at the start - became the rules the agent followed every single time.

At some point, I just stopped reviewing every slice. It didn't happen dramatically. It quietly became unnecessary.

## Step One - The Blueprint Architecture

Before the agent writes a single line on its own, you do something important by hand.

You take two or three slices - small, representative ones - and you implement them yourself. This takes maybe two to three hours. Not days. Not a week. A focused morning.

This is not throwaway work. This is the most important work in the entire process.

What you are doing is defining what "good" looks like for this specific project. How is a state change slice structured here? Where does the API layer live? Right now for example I'm defining this for Axon5 and DCB. How are test cases written? What does the command handler look like?

You answer those questions once, by hand, with full attention. Then you take those implemented slices and use them - together with AI - to generate skill files. One skill file per slice pattern. A skill file is just a precise description: "this is how we build things here."

This is the structure. These are the rules.

**From this point forward, the agent never has to guess. It has a template. It has examples. It has your decisions encoded as instructions.**
{: .highlight-box}

## Step Two - The Event Model as the Source of Truth

The specification lives in the event model - not in markdown files, not in tickets, not in a requirements document someone wrote six months ago and nobody reads anymore.

Every slice in the event model gets exported as a structured JSON file directly into the project repository. This means the specification is versioned alongside the code. You can see how it changed. You can revert it. The agent reads it directly - no translation, no interpretation, no ambiguity introduced in between.

Each slice also carries its behavior - the given/when/then rules that describe exactly what this slice should do, what it should allow, what it should reject. Three rules, five rules, sometimes thirty for a complex slice. All of it encoded before the agent starts.

When a slice is ready to be built, its status changes to planned. That's the only signal the agent needs.

## Step Three - The Night Shift

<img src="{{ '/assets/images/blog/spec-driven-development-1.png' | relative_url }}" alt="The RALPH Loop - overnight agent running slices" class="blog-post-image">

This is where the overnight magic happens - and it's simpler than it sounds. And actually, it's not necessarily overnight. It happens anytime during the day.

The agent runs in a loop. It looks for any slice in status planned. It picks one up, sets it to in progress, implements it according to the skill files and the given/when/then rules, runs the tests, records what it learned, and clears its context.

Then it starts again.

The context clearing is the key insight. Most people who work with AI agents long enough notice the same thing: the longer a session runs, the worse the output gets. Wrong decisions accumulate in the context. The agent gets confused by its own history.

The Ralph Loop solves this by treating every iteration as a fresh start - but carrying the learnings forward in a separate file that persists across iterations. Early on, that learnings file grows quickly. Corrections, adjustments, edge cases discovered. Over time it stabilizes. The agent stops making the same mistakes because they are already encoded as rules.

What you end up with is an agent that gets smarter the longer you run it - not dumber.

## Step Four - The Check

When I get to the office, I check how many slices were implemented overnight.

If the tests are green, I move on.

That's it.

Not because I stopped caring about quality - but because the quality is already enforced by the blueprint architecture, the skill files, and the given/when/then specifications. The agent didn't make design decisions. It followed yours. The code looks like code you would have written yourself, because in a very real sense, you wrote the rules it followed.

Whether you incorporate a dedicated review, or you add more guardrails - fully dependent on the project itself.

## What This Means for Your Team

Requirements still change - they always will. But with this approach, a changed requirement usually means one thing: update the slice in the event model, set it back to planned, and the agent picks it up in the next iteration.

You stop fearing change. You stop dreading the moment a client calls with new requirements. Because the system is built to absorb change without rework.

The thinking is still yours. The architecture is still yours. The business rules are still yours.

**What you've automated is the boring part. And that turns out to be worth more than most people expect.**

<img src="{{ '/assets/images/blog/spec-driven-development-2.png' | relative_url }}" alt="Event Modeling Specification - versioned alongside the code" class="blog-post-image">

This is the Event Modeling Specification I use - also what is versioned and stored in code. I help Software Teams define those clear specifications for AI - and build maintainable systems that require no rework.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint for defining tasks that AI agents can actually execute.

Want a repository to try this out immediately? I have a repository prepared with an exported Event Model and all the Prompts you need. Git clone and run, and you'll see the magic.

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
    <a href="{{ '/docs/blog/ralph-loop-ai-agents' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>What Happens if You Run Claude-Code in a Loop? The RALPH Loop Explained</h3>
        <p>The RALPH Loop isn't magic - it's Agile for AI. And it only works if you invest in defining tasks properly first.</p>
        <span class="related-post-meta">AI & Architecture • January 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>AI is the accelerant. Event Modeling is the structure that makes it work.</p>
        <span class="related-post-meta">AI & Event Modeling • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/legacy-modernization-plan' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Why Your Legacy Modernization Plan Might Fail</h3>
        <p>The invisible complexity underneath your system is the real challenge — not the roadmap.</p>
        <span class="related-post-meta">Legacy Systems & Modernization • March 2026</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>