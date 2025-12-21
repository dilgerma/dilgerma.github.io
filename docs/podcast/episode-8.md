---
layout: docs
title: Episode 8 - Given-When-Thens and AI-Powered Test Specifications
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 8 - Given-When-Thens and AI-Powered Test Specifications</h1>
    <p class="blog-post-subtitle">How given-when-then test patterns in event modeling enable AI tools to automatically generate implementations</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 8</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/e_IzVh15unc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

Martin and Adam explore the powerful synergy between event modeling's structured given-when-then patterns and AI code generation tools. They demonstrate how the clarity of event modeling specifications eliminates AI hallucinations, enabling tools like Cursor and Claude to generate accurate test implementations and even production code. The discussion covers event sourcing frameworks and when to use them versus building simpler custom solutions.

## Main Discussion Points

- **AI Code Generation Success**: Screenshots of given-when-then timelines pasted into AI tools produce remarkably accurate test implementations without hallucination
- **Specification Clarity**: Event modeling's structured format provides the unambiguous input that AI tools need to generate reliable code
- **Event Sourcing Frameworks**: Discussion of when frameworks add value versus when they introduce unnecessary complexity and coupling
- **Framework Trade-offs**: How frameworks can accelerate initial development but sometimes constrain implementation choices and create vendor lock-in
- **Custom vs Framework**: Why some teams prefer building minimal custom event sourcing infrastructure over adopting heavyweight frameworks
- **Test-First Development**: Using generated tests from given-when-then specs to drive implementation in true TDD fashion

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Event modeling's precise specification format proves ideal for AI-assisted development - the clarity eliminates ambiguity that causes hallucinations in other contexts. AI tools can reliably generate both test suites and implementations from well-structured given-when-then timelines, dramatically accelerating development. Event sourcing frameworks offer convenience but teams should carefully evaluate whether the abstraction cost justifies the benefits, as simple custom implementations often suffice for straightforward use cases.

## Memorable Quotes

1. "Don't jump into the technical discussions too soon. Welcome to event modeling, right?" - Martin Dilger
2. "If you are in an event modeling session the only thing you're doing is basically taking visual notes that everybody understands." - Martin Dilger
3. "Drawing is always good... even long before I worked with event modeling, drawing was my number one tool. I always started to draw on a whiteboard, on a piece of paper, whatever. Without drawing I could never explain ideas or understand them." - Martin Dilger
4. "Event modeling is really a consolidation of common sense solutions to problems that we've had, but the nice thing about the event model is that it centralizes them in one practice and one artifact." - Adam Dymitruk
5. "People are visual they want something. If we keep talking like this sure we have our own imagination as to what that means for us, but putting something down on paper and drawing really solidifies an idea more." - Adam Dymitruk

## Key Learnings

1. Event modeling sessions should separate knowledge mining from technical design - initial sessions focus on information flow and business problems, not implementation details
2. Visual notes and drawings unify different mental models across team members, ensuring everyone is aligned on what's being discussed
3. Working backwards from desired end results (screens, outcomes) helps formulate event models more effectively than starting from the beginning
4. Event models serve as living documentation that replaces the need for separate wikis, Confluence pages, or other documentation tools that rarely get updated
5. All stakeholders should actively contribute to event modeling sessions - the process naturally includes both technical and business perspectives without requiring separate meetings

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
