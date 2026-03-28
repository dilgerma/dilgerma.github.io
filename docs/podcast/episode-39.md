---
layout: docs
title: Episode 39 - Live AI Agent Coding From Event Model Changes in Real Time
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 39 - Live AI Agent Coding From Event Model Changes in Real Time</h1>
    <p class="blog-post-subtitle">Martin and Adam discuss how AI agents can now pick up event model changes live and generate code in real time, and deep-dive into building a fully HTML-based event modeling tool with smart arrow routing algorithms.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 39</span>
      <span>Episode 39 • Live AI Coding, Event Model Tool & Slice Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IQa-kLVk8QQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin accidentally discovers that an AI agent running in the background picks up live event model changes during a webinar and immediately implements them in code. Adam reveals his progress building a fully HTML/div-based event modeling tool with a "leftness index" algorithm for smart arrow routing — no canvas needed.

## Main Discussion Points

- **Live AI Coding from Event Models** — Martin discovers an AI agent picked up a live event model change during a webinar and implemented it in code within a minute
- **Arrow Rendering Without Canvas** — Adam builds event model arrows using only HTML div borders, Z-ordering, and absolute coordinates — no canvas element needed
- **The "Leftness Index" Algorithm** — A custom algorithm to minimize arrow crossings in diagrams by summing the positional index of connected elements
- **MCP Servers for Agent Interaction** — Exposing event models via APIs and MCP servers so agents (not humans) interact with the tool directly
- **Slice-Based Architecture Misunderstood** — Martin posts about slice architecture on LinkedIn and gets confused responses; explains why traditional onion/hexagonal critiques don't apply
- **Automating Rituals vs. Solving Problems** — Criticism of teams building agents that replicate standups, sprint retrospectives, and Jira updates — "automating rituals" rather than real work
- **Event Model as the Spec** — Discussion of a client trying to translate event models into GitHub's SpecKit; the JSON export from the event model is already the specification
- **Traditional Abstractions Break Slices** — An architect suggests adding abstraction layers on top of slices; the hosts explain this re-introduces coupling and destroys the architecture
- **Event Modeling Tool Nearing Miro Replacement** — Adam's HTML-based tool is nearly feature-complete and will soon integrate with code generation agents

## Live AI Coding from Event Models

> "You model something, I just adjusted the event model, and then I went back into the code and I saw what I modeled just one minute ago was already in code — already implemented." - Martin

> "Your old best practices are going to actually hurt you when you try to exist in this world." - Adam

## Traditional Abstractions Break Slices

> "The moment you put on these abstractions, this is nothing but coupling — you will destroy the whole architecture, it will stop working, you will destroy everything if you do that." - Martin

## Automating Rituals vs. Solving Problems

> "They're automating their rituals. Their agents are going to go to a stand-up meeting, transcribe and update the Jira tickets. It's just laughable." - Adam

## Key Takeaways

1. **Live AI coding from event models is already possible** — Agents pick up live event model changes and implement them in code within minutes
2. **Event models are the spec** — No translation layer needed; the JSON export is the complete AI-ready specification
3. **Slice isolation is non-negotiable** — Traditional abstraction layers re-introduce coupling and destroy the architecture
4. **Traditional abstractions break slice architecture** — Adding layers on top of slices is the fastest way to destroy the system
5. **Arrow routing in HTML is possible without canvas** — Only HTML div borders, Z-ordering, and absolute coordinates needed
6. **MCP servers enable agent-to-tool interaction** — Agents, not humans, interact with the event modeling tool directly
7. **Automating rituals adds no value** — Agents replicating standups and Jira updates solve nothing
8. **Event modeling conventions survive AI upheaval** — Unlike JavaScript frameworks, event modeling remains applicable through every shift in tooling

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

Read the full blog post: [The Future Doesnt Need Your Perfect Code]({{ "/docs/blog/future-doesnt-need-perfect-code" | relative_url }})

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ "/docs/event-modeling-tutorial" | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning &rarr;](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>