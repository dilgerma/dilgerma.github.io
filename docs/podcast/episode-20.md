---
layout: docs
title: Episode 20 - Event Sourcing and GDPR: Transparency Over Compliance Theater
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 20 - Event Sourcing and GDPR: Transparency Over Compliance Theater</h1>
    <p class="blog-post-subtitle">Addressing the misconception that GDPR compliance is harder with event sourcing</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 20</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/-tjrPx2aISI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

Martin and Adam tackle the common misconception that event sourcing makes GDPR compliance harder due to immutability. They explain how event sourcing actually provides superior transparency and auditability compared to traditional systems. The discussion covers practical approaches to handling personal data deletion requests while maintaining event sourcing benefits.

## Main Discussion Points

- **GDPR Misconceptions**: Debunking the myth that immutable event stores violate GDPR's right to deletion
- **Transparency Advantage**: How event sourcing provides the complete audit trail that GDPR actually requires
- **Deletion Strategies**: Practical approaches including crypto-shredding, event encryption, and metadata separation
- **Learning Using Slices**: How slices provide excellent learning vehicles for junior developers and career changers
- **Compliance Theater**: Why many GDPR implementations focus on appearance rather than actual data protection
- **Event Store as Source of Truth**: Leveraging event sourcing's accountability for demonstrating compliance

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Event sourcing's immutability does not conflict with GDPR's right to deletion - it actually provides superior compliance capabilities compared to traditional systems. Personal data can be encrypted with per-user keys (crypto-shredding), stored in metadata separate from business events, or handled through other strategies that preserve business event history while enabling data deletion. Event sourcing's complete audit trail provides the transparency GDPR actually requires, unlike traditional systems where deletion often means losing all trace of past actions. The slice-based learning approach makes event sourcing accessible to developers at all skill levels.

## Memorable Quotes

1. "Event sourcing is the default and I only deviate from that if there is a compelling reason. Quite the opposite how the industry sees it" - Martin Dilger
2. "I simply will not um take as default uh losing information it's just absolutely uh non-starter for me" - Adam Dymitruk
3. "I don't want to have to be a detective to find out how something went wrong. He wants to have the evidence right there of how it went wrong. And that's what you get with event sourcing" - Adam Dymitruk
4. "If I am if I want to do GDPR, I would never ever want to do it without event sourcing because I need even more safety for missing, you know, holes of information" - Adam Dymitruk
5. "Keep everything on one board as long as possible. So, Miro is pretty good at that" - Martin Dilger

## Key Learnings

1. Event sourcing should be the default approach for information management systems, not a special case
2. GDPR compliance is actually easier with event sourcing because you can trace exactly where personal data is used
3. Swim lanes in event models are organizational tools for visualization, not necessarily implementation boundaries
4. One Miro board can handle 30,000+ elements and should be used for entire projects to maintain context
5. Communicating event modeling to C-level executives requires focusing on vision, goals, workflows, and budgets rather than technical details

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
