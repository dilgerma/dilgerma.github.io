---
layout: docs
title: Episode 22 - Event Modeling Reveals True System Complexity
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 22 - Event Modeling Reveals True System Complexity</h1>
    <p class="blog-post-subtitle">How workshops reveal that most companies don't understand their own systems, and how event modeling uncovers hidden complexity</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 22</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NPB38JgSLeU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

Martin and Adam discuss the eye-opening moment when companies realize through event modeling workshops that they don't fully understand their own systems. The episode explores how collaborative modeling sessions surface assumptions, edge cases, and complexity that traditional requirements gathering misses. They also address the controversial claim that "SQL is an anti-pattern" in event-sourced systems.

## Main Discussion Points

- **Hidden Complexity Discovery**: How event modeling sessions reveal system complexity that stakeholders didn't realize existed
- **Knowledge Gaps**: Companies discovering they lack complete understanding of their own business processes
- **SQL as Anti-Pattern**: Discussion of whether direct SQL queries violate event sourcing principles and when they're acceptable
- **Collaborative Discovery**: How bringing diverse stakeholders together surfaces conflicting assumptions about system behavior
- **Documentation Gap**: Why traditional documentation fails to capture system complexity that event modeling reveals
- **Workshop Revelations**: Common patterns of discovery that emerge across different workshop participants

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Most organizations significantly underestimate their system complexity until forced to explicitly model all workflows and edge cases. Event modeling workshops consistently reveal gaps in understanding where different stakeholders have conflicting assumptions about how systems should behave. This collaborative discovery process provides immense value beyond the resulting model - it aligns understanding across teams. The "SQL is an anti-pattern" debate highlights tensions between event sourcing purity and pragmatic implementation choices. While direct database queries bypass event sourcing's guarantees, pragmatic teams sometimes accept trade-offs for specific use cases.

## Memorable Quotes

1. "The the problem with AI is all about bad requirements." - Adam
2. "SQL is a language that was developed in the late 60s or whatever for um doing bespoke reports by a person that understands that SQL syntax on a terminal... it's not an official programming language and it sucks to be programming in something that is not meant to be used for programming." - Uncle Bob Martin (referenced by Adam)
3. "Most projects I'm involved with they they are some kind of uh integration projects where you integrate a lot of systems. Um and almost often the the root of most of the problems is the database triggers that tie everything together." - Martin
4. "Don't teach your grandmother to suck eggs" - Adam (about developers trying to control implementation details)
5. "I refuse to work like an idiot" - Adam (about unnecessary complexity in traditional development)

## Key Learnings

1. Event modeling should focus on information flow (the "what"), not implementation details (the "how") - business people don't care about async/sync or technical architecture
2. SQL was designed for interactive queries, not as a programming interface - this fundamental mismatch causes many problems in modern systems
3. Database triggers and SQL-driven systems create unmaintainable complexity - Martin sees this as the root cause in most integration projects
4. Event modeling can be used at different levels of detail - high-level for business understanding, with ability to zoom into implementation details as needed
5. Timeline-based specifications (given-when-then) are more natural for humans to understand than traditional BDD formats

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
