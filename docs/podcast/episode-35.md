---
layout: docs
title: Episode 35 - The Sane Way to Migrate Legacy Systems
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 35 - The Sane Way to Migrate Legacy Systems</h1>
    <p class="blog-post-subtitle">The Three-Source Truth Method - how to understand what your legacy system actually does before you start migrating</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 35</span>
      <span>Legacy Migration & Event Modeling</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aznGpTWXjN4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

In this episode, we tackle one of the most common disasters in software engineering: legacy migration projects that go sideways. We share a story from 2018 about a JBoss migration that failed because everyone focused on the shiny new tech stack instead of understanding what needed to be migrated. The key lesson: "as-is" is a trap, and you need the Three-Source Truth Method to surface the iceberg before it sinks your project.

## Main Discussion Points

- **The "As-Is" Trap** - Why migrating everything is actually the highest-risk approach
- **The 40% Rule** - At least 40% of features in legacy systems are unused or never were
- **The Iceberg Problem** - Roadmaps show the happy path, not the edge cases, tribal knowledge, and workarounds
- **Three-Source Truth Method** - Triangulating from requirements, business experts, and code
- **Finding the Gaps** - Where the three sources contradict is where the real complexity hides
- **From Model to Architecture** - How Event Models become your migration roadmap

## The Three-Source Truth Method

### Phase 1: Extract from Existing Requirements
Start with Jira tickets, roadmaps, and documentation. Extract them to an Event Model timeline. This gives you the **official story** - what someone thought was important enough to document.

### Phase 2: Extract from Business Experts
Talk to the people who use the system every day. They know what's actually used, what never worked, and what's critical but undocumented. Build Event Models with them. This gives you the **real story** - what actually exists in practice.

### Phase 3: Extract from the Codebase
Use AI to analyze the codebase, especially unit tests, APIs, and databases. They reveal the real logic. Extract Event Models from what actually runs in production. This gives you the **brutal truth** - regardless of intentions.

## The Magic: Combining All Three

When you overlay the three Event Models:
- Requirements describe features never built
- Experts know processes not in requirements
- Code does things nobody remembers asking for

**Those mismatches ARE the gaps.** That's where the iceberg lives. Surface them now, not in production.

## Making Migration Decisions

Go through chapter by chapter, slice by slice:

- **Kill what's unused** - If nobody uses it, don't migrate it. Risk removed.
- **Find critical gaps** - If experts use it daily but it's not in the roadmap, you just avoided disaster.
- **See the dependencies** - What's foundational vs what can be postponed?

Your roadmap becomes a logical consequence of a mapped-out system. No guessing. No estimating in the dark.

## Key Takeaways

1. **Don't start with technology** - Start with understanding
2. **"As-is" is a trap** - You'll carry forward 40% of features nobody needs
3. **Each source lies differently** - Triangulate to find the truth
4. **Gaps = iceberg** - Where sources contradict is where complexity hides
5. **Every feature not migrated is risk removed** - Be ruthless
6. **Let the model tell you the order** - Dependencies show what's foundational
7. **Two days of Event Modeling saves months** - Stop building on quicksand

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

Read the full blog post: [The Sane Way to Migrate Your Legacy Project]({{ '/docs/blog/sane-way-migrate-legacy-event-driven' | relative_url }})

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
