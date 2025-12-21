---
layout: docs
title: Episode 28 - AI Proves Event Modeling Works - The MAKER Framework Paper
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 28 - AI Proves Event Modeling Works - The MAKER Framework Paper</h1>
    <p class="blog-post-subtitle">Martin and Adam discuss groundbreaking research from Cognizant AI Labs proving that breaking tasks into slices enables AI to complete million-step tasks with zero errors</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 28</span>
      <span>Event Sourcing & AI</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TwL6IvM237U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

In this episode, Martin and Adam discuss a scientific paper from Cognizant AI Labs that validates what they've been teaching for years: breaking systems into small, independent slices is the key to reliable AI-driven development. The paper "Solving a Million-Step LLM Task with Zero Errors" demonstrates that even simple AI models can complete complex tasks without errors when work is properly decomposed. The discussion covers Martin's upcoming in-person workshop, the intersection of AI and event modeling, and why powerful concepts like event sourcing require mastering rather than avoiding.

## Main Discussion Points

- **The MAKER Framework Paper**: Research from Cognizant AI Labs proving that slice-based architecture enables AI to solve million-step tasks with zero errors
- **Workshop Announcement**: Martin's January in-person workshop on building slice-based architectures, showing how event sourcing works in practice
- **AI and Scope Management**: Why LLMs break down after ~100 steps and how event modeling naturally solves this problem
- **Testing Philosophy**: Discussion of why TDD (Test-Driven Development) becomes unnecessary with slice-based architecture
- **Resource Consolidation**: Martin consolidating 700+ LinkedIn posts and 50+ blog articles into one accessible location
- **Powerful Concepts**: Why mastering event sourcing is difficult not because it's complex, but because letting go of familiar patterns is hard
- **Contrarian Thinking**: How being different from mainstream development practices leads to better outcomes

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Key Takeaways

The scientific validation that slice-based architecture enables AI to complete million-step tasks with zero errors is a watershed moment for event modeling. The research confirms that complexity grows exponentially with scope, making context window size irrelevant - proper scope management through slices is fundamental. This means simple, "stupid" LLMs can outperform advanced models when working with properly scoped slices. The paper's conclusion that small models are sufficient mirrors the event modeling philosophy: powerful concepts aren't about having the biggest tools, they're about using the right approach. Event sourcing isn't "just another tool in your toolbelt" - it's a Swiss Army knife that replaces the entire heavy toolbelt of frameworks, migrations, and complex testing strategies.

## Memorable Quotes

1. "Wait a second, I cannot - whenever I hear AI I really cannot hear it anymore. Latest AI it's so boring really. It's so boring. Also on LinkedIn everybody's writing about AI tools and stuff nothing about the real world." - Martin

2. "Their conclusion was if if you do this, if you take this, there's absolutely no need to take one of these big models. A small crappy model is more than enough. So you can have a million task done by a crappy model with zero errors." - Martin

3. "No matter how good these large language models get, the scope will always be a problem. And so this shows like you need to fundamentally solve the core problem which is get the scope down to something reasonable." - Adam

4. "I'll be impressed if your system works with a stupid LLM. The stupider the better. That means your system's that good." - Adam

5. "Using slices is the only way I know where more people on the project means more productivity. If you need to have it done faster just put on more developers on that. It doesn't really matter and they don't even need onboarding." - Martin

6. "Event sourcing isn't 'just another tool in your toolbelt' - it's a Swiss Army knife in your pocket. You can drop that stupid heavy tool belt with schema migrations, TDD frameworks, BDD frameworks and just go run." - Adam

7. "Master powerful concepts, don't be afraid of them. The hard part isn't event sourcing itself. The hard part is realizing that you've been practicing something else entirely and now there's a discipline you need to move to." - Adam

## Key Learnings

1. **Scientific Validation of Slices**: Research proves that AI models fail after ~100 steps with traditional approaches, but can complete million-step tasks with zero errors when work is decomposed into slices

2. **Simple Models Win with Good Architecture**: Properly scoped slices enable basic AI models to outperform advanced models working on poorly structured problems - your architecture matters more than your tools

3. **Slice-Based Testing Eliminates TDD Complexity**: The red-green-refactor cycle of TDD becomes unnecessary because slices have natural boundaries that prevent project-wide breakage - simplicity replaces safety nets

4. **Event Sourcing Transcends Technology Stacks**: Unlike framework-dependent approaches (Hibernate, NHibernate, ActiveRecord), event sourcing works identically across all languages and platforms using pure data

5. **Adding Developers Actually Works**: Slice-based architecture is the only approach where adding more developers genuinely increases productivity without onboarding overhead or coordination complexity

6. **Open-Close Principle in Practice**: Slices embody the open-close principle - new features are added without touching existing code, enabling teams to return to projects years later without feeling overwhelmed

7. **Financial Trading Principles Apply**: The same contrarian thinking that makes successful traders (going against the crowd, mastering complex tools, recognizing patterns others miss) applies to adopting event sourcing

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
