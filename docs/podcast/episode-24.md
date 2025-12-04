---
layout: docs
title: Episode 24 - Event Modeling 2.0 Refines Core Concepts
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 24 - Event Modeling 2.0 Refines Core Concepts</h1>
    <p class="blog-post-subtitle">Significant revisions to event modeling foundations, distinguishing between what (information flow) and how (implementation details)</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 24</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/XlhH_Ld9xbg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

Martin and Adam unveil Event Modeling 2.0, a refined approach that more clearly separates information flow (what the system does) from implementation details (how it's built). This evolution addresses confusion about what belongs in event models versus implementation documentation. The discussion emphasizes how cheap AI capabilities make precise specifications more valuable than ever.

## Main Discussion Points

- **Event Modeling 2.0**: Refined conventions that better distinguish design concerns from implementation concerns
- **What vs How**: Clearer separation between business information flow and technical implementation choices
- **Cheap AI Revolution**: How affordable AI capabilities change the economics of software development
- **Specification Value**: Why precise specifications become more important as AI handles implementation
- **Convention Evolution**: How real-world usage informed improvements to event modeling notation
- **Backwards Compatibility**: How existing event models can be updated to 2.0 conventions

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

Event Modeling 2.0 refines the practice by more clearly distinguishing what systems do (information flow, business rules, workflows) from how they're implemented (technology choices, frameworks, deployment). This separation prevents event models from becoming overly technical while ensuring they capture all necessary business logic. As AI becomes increasingly capable and affordable, precise specifications gain value while implementation details become commodity. Event modeling's evolution demonstrates how community feedback and real-world usage drive continuous improvement of the practice.

## Memorable Quotes

1. "Event modeling should be your default because often times when you read um in almost all books there's event sourcing has this tiny niche and you only apply it if it uh fits... I think that's it's quite the opposite." - Martin
2. "The simplest thing I can do is write down what just entered in the system as a thing on a timeline and let other things take care of that information" - Adam
3. "I'm using this more and more. So I I started to use this first for myself but then also with customers and then also with AI and uh I realized everybody is understanding these vertical timelines super super well" - Martin
4. "If you want to make this big jump um you just need to focus on 20% of what you're currently doing and the the the important 20% basically the Pareto principle and uh to make to be able to make this big jump you have to get rid of 80% of what you're currently doing" - Adam (referencing book on 10x vs 2x)
5. "I refuse to work like an idiot and and and do this stupid unnecessary work because you can't accept a better way of working" - Adam

## Key Learnings

1. Event sourcing should be the default for storing state, not a niche solution - it solves problems and is simpler than alternatives when properly understood
2. Timeline-based specifications work better than traditional given-when-then formats because everyone understands timelines, including AI
3. Event modeling 2.0 emphasizes consistency in slice patterns - all slices (automation, input, output) should use the same format
4. The workflow pattern is always: event → read model → UI/processor → command → event, with no shortcuts or permutations allowed
5. Making a paradigm shift requires a complete leap (10x), not incremental changes (2x) - half measures leave you stuck in the valley between approaches

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
