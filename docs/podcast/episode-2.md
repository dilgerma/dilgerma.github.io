---
layout: docs
title: Episode 2 - From Book Success to Code Generation
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 2 - From Book Success to Code Generation</h1>
    <p class="blog-post-subtitle">Plans for companion resources including missing chapters on advanced topics, certification programs, and workshops</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 2</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EUydf8OdNDc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin and Adam discuss the overwhelming success of Martin's book, which has remained at number one on LeanPub. They announce upcoming companion resources including "missing chapters" covering advanced topics like GDPR compliance and stream rewriting, plus plans for a comprehensive workshop and certification program. The episode explores how event modeling and given-when-then patterns enable powerful code generation capabilities.

## Main Discussion Points

- **Missing Book Chapters**: Martin announces additional chapters covering advanced topics like handling personal information under GDPR, rewriting complete streams, and other implementation details not critical for getting started but valuable for production systems
- **Workshop Announcement**: A comprehensive one-day workshop scheduled for November 30th featuring both JVM and non-typed approaches to implementing event sourcing, providing hands-on examples as a companion to the book
- **Certification Program**: Plans for an official event modeling certification to help organizations validate baseline understanding, similar to AWS certifications, allowing companies to confidently hire practitioners
- **Given-When-Then Testing**: Deep dive into how these testing patterns are fundamental to event modeling, with Martin using them to generate test cases before implementation, creating a "red test" TDD workflow
- **Automation Testing**: Discussion of how to-do list processors and automation steps should be tested using given-then patterns (without the "when"), treating them as projections that automatically trigger
- **Source Control Management**: Extended discussion on how event modeling with slice-based development eliminates merge conflicts and enables both trunk-based and feature-branch workflows

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Event modeling's structured approach to defining business rules through given-when-then patterns creates an ideal foundation for code generation. The clear specification of state transitions and business logic reduces ambiguity to the point where automated tools can reliably generate test cases and even implementation code. The book's success demonstrates strong demand for practical guidance combining event modeling with event sourcing, leading to expansion plans including workshops, certification programs, and additional advanced content chapters.

## Memorable Quotes

1. "Given when then is one of the most important parts of event modeling because this is where you really get down to the nitty-gritty stuff and define what are the actual business rules" - Martin Dilger
2. "Long lived branches is not because the feature is so big just because the developer needs a little bit longer" - Adam Dymitruk
3. "A blacksmith that's producing horseshoes is going to have an apprentice that's very slow but at the end the Horseshoe is a horseshoe" - Adam Dymitruk
4. "Trunk based development is sold as the ultimate way to do Source control and if it was we'd have the Linux kernel doing it and we don't" - Adam Dymitruk
5. "I spent days merging and if you made one mistake you had to start over again this was horrible" - Martin Dilger

## Key Learnings

1. Given-when-then tests for automations are the same as for read models (given-then only, no when)
2. Feature branches per slice eliminate merge conflicts when combined with event modeling patterns
3. Code that's not finished should never sit in production, even with feature toggles
4. Event modeling enables slice-based development where each feature is isolated and independently testable
5. Git merge conflicts become rare exceptions rather than regular occurrences with slice-based approaches

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
