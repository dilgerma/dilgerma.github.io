---
layout: docs
title: Episode 26 - Immutability, Git History, and Event Sourcing
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 26 - Immutability, Git History, and Event Sourcing</h1>
    <p class="blog-post-subtitle">Martin and Adam connect their shared passion for git and event sourcing, recognizing that both are rooted in immutability and trustworthy history</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 26</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XhwG39VF1BY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

In a reflective episode, Martin and Adam draw parallels between git's immutable commit history and event sourcing's immutable event log. Both share a deep appreciation for systems built on append-only, immutable foundations that provide trustworthy history and enable time travel. The discussion explores how thinking in terms of immutable facts fundamentally changes how we build and reason about systems.

## Main Discussion Points

- **Git and Event Sourcing Parallels**: How both systems build on immutable, append-only logs that never rewrite history
- **Immutability Benefits**: Why immutable data structures provide reliability guarantees that mutable state cannot match
- **Time Travel Capabilities**: How both git and event sourcing enable examining system state at any point in history
- **Trustworthy History**: The value of having complete, tamper-proof records of all changes
- **Programming Language Metaphors**: Discussion of how event sourcing concepts could influence programming language design
- **Cultural Shift**: How adopting immutability requires unlearning assumptions from mutable-state programming

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

The fundamental similarity between git and event sourcing - both built on immutable, append-only logs - explains why developers who love git often gravitate toward event sourcing. Immutability provides guarantees about system behavior that mutable state cannot offer: complete history, ability to reconstruct any past state, and tamper-proof audit trails. This parallel suggests deeper principles about building reliable systems through immutable facts rather than mutable state. Both git and event sourcing require shifting from "update in place" thinking to "append new facts" thinking, a mental model change that initially feels awkward but ultimately provides superior capabilities.

## Memorable Quotes

1. "There was a question someone wanted to to ask for my opinion. what will happen in the next 12 months... you you cannot out code an an encoding agent... just focusing on code is is is a losing game." - Martin
2. "I I have a long long long history with uh with feature toggles and I I really I hate these feature toggles in code... putting the if statements in code is nothing I will never ever do that." - Martin
3. "No matter how how strong you try to to make your architecture, how much time you invest into your architecture, as long as you are based on tables and uh state-based systems, basically CRUD, you're doomed to fail." - Martin
4. "I put on headphones. I put on brain FM which is like focus music and I just started implementing one slice after the other... it was 12 slices or something I had this morning one after the other and they are all green now. Nothing more satisfying than that." - Martin
5. "If you add new tables if you want your state you need to join them and the more tables you have the more joins you need to make so it doesn't get simpler... longterm it just it just becomes very unmanageable" - Martin

## Key Learnings

1. Immersing yourself in a subject (like answering Stack Overflow questions) is the best way to become an expert - teaching forces you to understand deeply
2. Feature toggles should be at the slice level or infrastructure level, never scattered as if-statements throughout code - this prevents unmaintainable complexity
3. CRUD-based systems are doomed to fail long-term because adding features forces nullable columns, complex joins, and schema migrations that compound over time
4. Git and event sourcing share the same core principle: immutability provides a solid foundation you can always depend on for future changes
5. Slice-based development enables deep focus states where developers can complete many features in sequence without context switching or worrying about side effects

<div class="info-box" markdown="1">
### Ready to Learn More?

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**Join our [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"}** to get hands-on experience.
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
