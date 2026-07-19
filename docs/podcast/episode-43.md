---
layout: docs
title: Episode 43 - Claude Grades the Podcast, and the Event Model Catalog Goes Live
description: "Martin and Adam mark 42 episodes by asking Claude to rank their best lessons, debate coupling and AI debugging, and unveil the Event Model Catalog."
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 43 - Claude Grades the Podcast, and the Event Model Catalog Goes Live</h1>
    <p class="blog-post-subtitle">Martin and Adam mark 42 episodes by asking Claude to rank their most important lessons, break down why coupling through an immutable event store is the only good kind, and unveil the drag-and-drop Event Model Catalog so nobody has to model a login screen from scratch again.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 43</span>
      <span>Episode 43 • AI Self-Review, Coupling & The Event Model Catalog</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uleenc2hX5M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Hitting episode 42 (with the obligatory Hitchhiker's Guide joke), Martin fed every past transcript to Claude and asked for the five most important lessons the podcast has taught. The hosts argue through the results — coupling through an immutable ledger, why AI debugging loops mean your specs are bad, and why event sourcing should just be the default — before Martin unveils something new: a drag-and-drop Event Model Catalog that means nobody has to model a login flow from scratch ever again.

## Main Discussion Points

- **42 Episodes and the Hitchhiker's Guide Joke** — Martin and Adam realize how long they've been running weekly without ever running out of things to say about event modeling and event sourcing
- **Claude Grades 42 Episodes of the Podcast** — Martin fed every transcript to Claude and asked for the top five learnings; the hosts react to the ranked list live, agreeing with four and disputing one
- **Coupling Through the Immutable Ledger Is the Healthy Kind** — Slices force coupling to happen only through an immutable event store, which Adam argues is fundamentally different from — and safer than — coupling on mutable state or shared libraries
- **A Real Coupling Slip, Caught in Three Days** — Martin returns from three days away to find a teammate had already reused another slice's table to render an email link in the UI — proof of how easily coupling creeps back in
- **Event Modeling Is the Spec, the Code Is Just a Projection** — Adam argues that if you're spending more than 20 minutes debugging what an AI gave you, the real problem is your specification, not the model
- **Event Sourcing Should Be the Default** — Discussion of a client whose "event sourcing" was really an ungoverned mess of read models stealing each other's tables, because there was no event modeling behind it
- **Worktrees and Blindfolded Agents** — Adam floats a workflow where each AI agent works in its own git worktree/branch with only the event model as reference, merging slices deliberately on integration branches rather than ignoring git entirely
- **Launching the Event Model Catalog** — Martin ships a drag-and-drop catalog of reusable event model templates (starting with login), with three tiers: expert-graded, community, and private/enterprise
- **Given-When-Then 2.0 Supports Both Notations** — The new story structure adds an optional query/"where" clause for read models but keeps classic given-when-then working exactly as before
- **Shoutout: "Pull the Plug Modeling"** — Praise for Maxim Guselin's community article on designing processes as if all electricity and IT systems vanished, forcing focus on real information flow over implementation

## Coupling Through the Immutable Ledger

> "If you have coupling that's on mutable state between transient objects, and just like library reuse — that's horrible coupling. I think the beauty of slices is that the coupling is forced through the immutable ledger, and that is the biggest difference." - Adam

## Your Specifications Are Bad, Not the AI

> "If you're spending more than 20 minutes debugging what AI gave you, go back and update your specifications to be finer grained or just better — don't go down the rabbit hole of chasing a bug. People are blaming AI for their own crappy work, which is lazy specifications." - Adam

## Not Actually Event Sourcing

> "What you're doing is not event sourcing. What you're doing is a weird mixture of everything — a little bit of event-driven architecture, a little bit of event sourcing approaches. You mixed everything and hope for the best. Of course that doesn't work." - Martin

## Nobody Wants to Model Login Again

> "Whenever someone says, 'oh, we need to model the login' — no, please not again login. I've modeled it hundreds of times. I don't want to model login." - Martin

## Key Takeaways

1. **Coupling forced through an immutable event store is the healthy kind** — mutable-state coupling between transient objects or shared libraries is the real villain
2. **A long AI debugging session is a specification smell** — past 20 minutes of chasing a bug in AI-generated code, the fix is finer-grained specs, not more prompting
3. **"Event-driven" without event modeling isn't event sourcing** — read models freely reusing each other's tables is exactly the mess event modeling exists to prevent
4. **Coupling regressions happen fast** — three days away was enough for a teammate to quietly wire two slices together
5. **Git and branching aren't the problem to throw away** — worktrees give AI agents healthy isolation; integration branches let you merge deliberately instead of by accident
6. **The Event Model Catalog turns boilerplate slices into drag-and-drop templates** — starting with login, spanning expert-graded, community, and private/enterprise tiers
7. **Event Modeling 2.0's given-when-then notation is additive, not a rewrite** — teams using classic given-then can keep doing so
8. **"Pull the plug modeling" is a useful thought experiment** — designing a process as if you had no computers at all exposes the real information flow AI and software should be built around

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** on March 16/17 — learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning &rarr;](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
