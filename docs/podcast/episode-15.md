---
layout: docs
title: Episode 15 - Event Sourcing Provides Accountability Traditional Systems Can't Match
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 15 - Event Sourcing Provides Accountability Traditional Systems Can't Match</h1>
    <p class="blog-post-subtitle">Dealing with large projection replays and responding to criticisms of event sourcing</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 15</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vwJkHAnRen4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

Martin and Adam address common criticisms of event sourcing, particularly around projection replay performance and perceived complexity. They demonstrate how event sourcing provides unmatched accountability and auditability that traditional systems cannot offer. The discussion tackles the "skill issues" accusation - that developers who struggle with event sourcing simply lack experience.

## Main Discussion Points

- **Accountability Advantage**: How event sourcing's complete audit trail provides accountability impossible in traditional CRUD systems
- **Projection Replay Strategies**: Techniques for handling large event streams including snapshots, incremental updates, and selective replay
- **Addressing Critics**: Responding to common arguments against event sourcing complexity and performance concerns
- **Skill Development**: Why event sourcing requires different thinking patterns than traditional development and how to develop those skills
- **Simplifying Sagas Redux**: Further discussion on avoiding saga complexity through simpler event choreography patterns
- **Performance Realities**: Actual performance characteristics of event-sourced systems versus theoretical concerns

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Event sourcing's complete history provides accountability and auditability that CRUD systems achieve only through complex, often incomplete audit logging mechanisms. Projection replay concerns are overstated - with proper snapshot strategies and incremental updates, even large event streams rebuild efficiently. Critics often conflate implementation complexity from poor pattern choices with inherent event sourcing complexity. The "skill issue" criticism has merit in that event sourcing requires unlearning CRUD habits, but the patterns themselves are learnable and simpler than traditional distributed system patterns.

## Memorable Quotes

1. "The bigger the project gets the bigger you need a context window so you need to tell thei needs to understand more and more and more to make the right decisions" - Martin
2. "What I give the AI is always basically the slice the current slice and the context so what are the events that go into the slice what are the read models that are connected" - Martin
3. "We will no longer write code I'm I'm 100% sure about it but what we need to do is we need to provide the proper guard guard ra for the AI and for the code generation" - Martin
4. "Not only not only AI has a context window also humans have the context window" - Martin
5. "If you ask me nulles is always a red flag if that that the topic comes up I it's always suspicious normally you shouldn't use nulles" - Martin

## Key Learnings

1. AI code generation fails when context windows become too large - projects become unmaintainable when AI generates heterogeneous code without consistent patterns
2. Event modeling provides natural context boundaries for AI - feed only the relevant slice, connected events, and read models rather than entire codebases
3. The future of programming involves providing guardrails for AI through system design (like event modeling) rather than writing detailed code
4. Both AI and humans have context window limitations - event modeling's slice architecture works well for both by limiting scope
5. Using separate processors for external API calls (one per API/cloud provider) keeps complexity manageable rather than having one processor reach out to multiple services

<div class="info-box" markdown="1">
### Ready to Learn More?

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices on January 20/21, 2026](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
