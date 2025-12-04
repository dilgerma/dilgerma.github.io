---
layout: docs
title: Episode 3 - Security Modeling and Modern Event Modeling Formats
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 3 - Security Modeling and Modern Event Modeling Formats</h1>
    <p class="blog-post-subtitle">Security modeling as a business-focused concern and new given-when-then notation improvements</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 3</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uX4_03cbJtU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Adam and Martin introduce a refined workshop format with intensive 15-minute blocks covering concentrated instruction. They unveil a revolutionary new given-when-then notation that adds timelines to both read and write side testing, making specifications more compact and organized. The episode tackles the frequently asked question of how to model security in event models, with clear guidance on keeping models business-focused.

## Main Discussion Points

- **Compact Workshop Format**: New 15-minute block structure with 7 minutes of concentrated instruction and 8 minutes of hands-on work, designed to maximize learning density while preventing workshop drag
- **New Given-When-Then Timeline Format**: Revolutionary notation improvement where test scenarios now flow as secondary timelines beneath each slice, with events on one side and commands on the other, dramatically reducing real estate needed for specifications
- **AI Code Generation Success**: Screenshots of given-then patterns pasted into AI tools like Cursor generate not only test arrays but complete implementations with remarkable accuracy, demonstrating how clear specifications eliminate hallucinations
- **Security Modeling Principles**: Only model security concerns that business experts understand and care about - avoid technical roles and implementation details in the event model itself
- **Role-Based Access Control**: Discussion of when to hand-roll RBAC versus using off-the-shelf solutions like Keycloak, with event sourcing providing natural accountability through metadata
- **Metadata for Security Context**: Store security-relevant information (user, roles, authorization context) in event metadata to maintain complete audit trails without cluttering business events

## Key Takeaways

The new given-when-then timeline notation represents a significant evolution in event modeling conventions, creating a secondary timeline that flows naturally beneath each slice while dramatically reducing the space needed for comprehensive test specifications. Security modeling should remain strictly business-focused - only include security concepts that stakeholders understand and discuss, leaving technical implementation details to metadata and infrastructure layers. Event sourcing's inherent accountability makes it an excellent fit for security-conscious domains.

## Memorable Quotes

1. "The idea with this newsletter is called the missing chapters for the book" - Martin Dilger
2. "For me given when then is one of the most important parts of event modeling because this is where you really get down to the nitty-gritty stuff" - Martin Dilger
3. "I model security only as far as the business experts are concerned with it" - Martin Dilger
4. "As soon as you start putting technical roles into the model it gets problematic because then suddenly not all people will understand what's in the model" - Martin Dilger
5. "Event sourcing plays very well together with security because you have The Ledger of what happened which is critical for security" - Adam Dymitruk

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Learnings

1. Missing chapters will cover advanced topics like GDPR compliance, stream rewriting, and personal information handling
2. Security should be modeled using business language and roles, not technical implementation details
3. Event sourcing naturally supports security auditing through its immutable event ledger
4. The new given-when-then format creates a secondary timeline that tells a complete story
5. Keep event models focused on business concepts to maintain understanding across all stakeholders

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
