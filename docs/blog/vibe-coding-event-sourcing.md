---
layout: docs
title: Every Solution the AI Suggested Was Technically Correct — But Would Have Killed the Architecture
description: The AI built everything I asked for — correctly. And every single decision would have been fatal. Here's the JSON blob, the sync nightmare, and how event sourcing saved the architecture.
author: Martin Dilger
date: 2026-03-28
category: AI & Architecture
keywords: vibe coding, event sourcing, single source of truth, architecture, AI coding, event-driven
featured_image: /assets/images/blog/vibe-coding-event-sourcing.png
tags: [ai, event-sourcing, architecture, vibe-coding]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Every Solution the AI Suggested Was Technically Correct — But Would Have Killed the Architecture</h1>
    <p class="blog-post-subtitle">The AI built everything I asked for — correctly. And every single decision would have been fatal. Here's the JSON blob, the sync nightmare, and how event sourcing saved the architecture.</p>
    <div class="blog-post-meta">
      <span>March 28, 2026</span>
      <span>6 min read</span>
      <span>AI & Architecture</span>
    </div>
  </div>

  <div class="blog-post-content" markdown="1">

Every solution the AI suggested was technically correct. And every single decision would have been fatal.
{: .lead}

## The Story Starts With a JSON Blob

I'm building a web-based alternative to my Miro Event Modeling toolkit. Like most builders right now, of course I'm using AI to accelerate the process (Claude in my case) - and it works great. I migrated from the Miro platform to a full web application in a fraction of the time it would have taken traditionally.

Everything looked great. Until I looked under the hood.

The AI had stored all the data in one giant JSON blob. Nodes, metadata, positions, relationships - all of it, one big file. Clean on the surface. A ticking timebomb underneath.

Anyone who has ever tried to build a collaborative, multi-user application knows exactly what that means. It won't scale. It can't.

## Breaking It Apart - The First Attempt

The natural first move was decomposition. We broke the blob into three separate stores - metadata, nodes, and local nodes held in memory. Cleaner. More organized. A real improvement.

Then we hit the next wall.

To keep those three stores in sync, the system needed to update all of them together - essentially a 2-phase commit. And that works fine as long as everything runs locally in a single browser with local storage. The moment you introduce a real network, real users, real failure scenarios - the question becomes unavoidable: what happens when something goes wrong mid-sync?

## The Facade, The Listener, And The Abstraction Trap

I asked the AI for solutions. The first suggestion was to build a facade - wrap everything in a unified interface that handles the sync internally.

I pushed back. A facade doesn't solve the problem. It hides it one layer deeper. This is one of the most common anti-patterns in software architecture - when something is hard, we add a layer of abstraction and call it solved. The sync issue was still there. The failure risk was still there. We'd just given it a nice paint job.

The next suggestion was a change listener mechanism - plug a listener into each store, so whenever one updates, it notifies the others. Sounds good on first thought. Practically a nightmare.

Here's why: when something goes wrong in that web of listeners, you have no trail. Which store updated first? Did the notification fire? Did it fire twice? Was the data already corrupt before the listener kicked in? You're debugging ghosts. And in a collaborative environment, those ghosts show up constantly.

## The Real Problem: No Single Source of Truth

This is where the actual diagnosis landed - and it's the same diagnosis I make in almost every team I work with.

In the vibe-coded architecture the AI had built, everything was the source of truth, and therefore nothing was. Sometimes a node got updated. Sometimes the metadata got updated. And somehow the UI was supposed to reflect a consistent reality that didn't actually exist anywhere.

**The whole architecture was broken. You just couldn't see it.**
{: .highlight-box}

You cannot sync what was never unified. And this is exactly where vibe coding falls apart - if the foundation is broken, you cannot vibe code yourself out of the mess. Velocity stops being an asset. It becomes the thing that buries you faster.

This architecture was broken beyond repair - so we needed to get back to basics.

## Coming Back to the Answer I Already Knew

Eventually, we arrived where we should have started. Every change gets registered as an event - a fact. This node was moved. This metadata was changed. This command was added.

These facts are immutable. They happened. You don't argue with them, you don't sync them through a listener chain, you don't hide them behind a facade. If it happened, it's registered as a fact.

"Node moved from x to y" translates to updated coordinates in the system. "Command added" results in a new node in the node store. All data becomes a projection of what has actually happened - and the event log is the single source of truth.

Simple, easy, natural.

The stores don't need to watch each other anymore. They just listen to the stream of facts and update accordingly. There's no logic in the stores - they just update constantly based on facts.

## So Am I Biased?

Here's what I think is honest: yes, I have a bias toward event sourcing. And I think it's justified. I've spent years teaching it, building with it, helping teams adopt it.

But the reason I have that bias is because I've watched the alternative fail - not in theory, but in practice. In my own code, built with one of the most capable AI tools available today.

The AI reproduced every wrong instinct that developers have been having for decades. The blob, the sync problem, the facade, the listener web.

Every solution coded was technically sound - it was just the wrong thing built in a good way. Every single decision would have been fatal. A death blow to the architecture.

These patterns feel like solutions until you see what happens when something goes wrong.

**Event sourcing isn't better because it's elegant. It's better because it's honest.** It records what actually happened, and builds everything else on top of that foundation. The ultimate simplicity.

And a foundation that's honest is one you can actually build on.

---

Want to learn how to plan Event Sourced Systems properly? Join me for an in-depth workshop where I teach the fundamentals of Event Modeling from scratch.

**[Grab your seat here](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**

Want to give the Event Modeler a try? It's still work in progress, but I'm already using it myself daily.

**[Start modeling here](https://app.eventmodelers.de/canvas){:target="_blank"}**

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the foundation to design systems that are honest from the start — so AI can build on them without breaking them.

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
    <a href="{{ '/docs/blog/auditability-not-just-regulated' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Auditability is Not Just for Regulated Industries</h3>
        <p>Your system makes decisions every day. The only question is whether you're storing them.</p>
        <span class="related-post-meta">Event Sourcing • March 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/software-project-dies-day-2' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Your Software Project Dies on Day 2 - It's the Data That Kills You</h3>
        <p>We learned to deal with messy code. But when you hit coupling in your data layer, that's where the cursing starts.</p>
        <span class="related-post-meta">AI & Architecture • March 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/event-sourced-saas-zero-joins' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>An Event-Sourced SaaS Story - 150+ Tables, Zero Joins, Almost Zero Operation Cost</h3>
        <p>What a production event-sourced system actually looks like at scale.</p>
        <span class="related-post-meta">Event Sourcing • February 2026</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>