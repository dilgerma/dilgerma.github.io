---
layout: docs
title: Episode 37 - The Ralph Loop Deep Dive, Node.js Event Sourcing, and Why Haiku Beats Opus
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 37 - The Ralph Loop Deep Dive, Node.js Event Sourcing, and Why Haiku Beats Opus</h1>
    <p class="blog-post-subtitle">Martin reveals his exact Ralph Loop implementation - index.json, progress.txt, learnings compression. Why Claude Haiku outperforms Opus for slices, Node.js event sourcing PoC, and why static code generators still matter in an AI world.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 37</span>
      <span>Ralph Loop, Node.js, AI Workflow &amp; Skill Files</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7ysjeO1gLrQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin reveals the exact architecture of his Ralph Loop implementation - the index.json slice list, static code generators, progress.txt logging, and the learnings compression that makes each iteration smarter. He runs it with Claude Haiku (the cheapest model) and it works perfectly. The conversation expands to Node.js event sourcing proof-of-concept, OpenClaw skill files, event modeling.ai tooling progress, and whether we will all stop committing code in two years.

## Main Discussion Points

- **Ralph Loop Architecture Revealed** - The exact index.json, slice.json, progress.txt, agents.md structure
- **Claude Haiku for Slices** - Why the cheapest model is perfect and 1M context windows are irrelevant
- **Node.js Event Sourcing PoC** - Client proof-of-concept showing it works with any stack
- **Static Code Generators Still Matter** - Manual to static generator to AI: the three-phase workflow
- **Skill MD Files** - How Martin maintains and improves them without reading them
- **event modeling.ai Progress** - Looks like Miro now, full-year workshop schedule set
- **Context Decay Problem** - Why you do not want a 1M context window for event sourcing
- **The 2-Year Prediction** - Martin predicts no code commits in 2 years

## The Exact Ralph Loop Implementation

### The Index File

> "I have this index.json file and there is only the title of the slice and the status. That is all. So it just picks the next slice." - Martin

> "It just picks the next slice that makes the most sense. AI picks itself and then it just implements the slice until the specifications are green." - Martin

### Per-Slice JSON

> "I have one JSON file per slice. In this JSON file there is only the slice definition. There is which events go into the slice, what goes out of the slice, and the given-whens. That is all there is." - Martin

### The Learnings Loop

> "After each iteration it puts the learnings into a progress.txt file. It first logs what have I done? Then it logs the learnings - what have I learned? And then if the iteration is done it compresses these learnings and puts them into the agents MD." - Martin

### The Acceleration Effect

> "If you do the first slice, it takes quite long. But the longer this thing works, the faster it gets. The last slices are just quick quick quick immediately because it has all the learnings. It just fills the templates." - Martin

## Claude Haiku: The Right Tool for Slices

> "You know which model I use in Ralph Loop typically? Haiku. It is the cheapest one. And it is perfectly fine." - Martin

> "People get crazy because we have the new Opus with 1 million context window. I do not care. Why would I need a 1 million context window?" - Martin

> "We are not here to solve mathematical puzzles. The context that we provide as we move through an event model is iterative. It is step by step of small context that makes sense." - Adam

## Node.js Event Sourcing: Stack Does Not Matter

Martin is running a Node.js event sourcing PoC for a client to prove it works with any stack.

### The Three-Phase Approach

> "First I manually implemented two slices in this architecture. Then I built a static code generator. And only then I went to AI and said: these are the steps you need to take." - Martin

### Static Code Generators + AI

> "I have a toolkit for static code generators. This typically generates about 80% of the code of a slice. AI only works on top of these existing structures - it just needs to fill in a few little places." - Martin

> "It is color by number. Even the dumbest AI model can paint by the numbers." - Adam

## Skill MD Files: Managed by AI

> "I do not read them. If I need to extend them, I use AI to do so. If one of the skills does not work, I ask AI: why does the skill not work? What do we need to adjust?" - Martin

## The 2-Year No Code Prediction

> "What I want to do: I want to go to the event model, adjust the model, and then it should be deployed in production. I do not want to do anything else with it." - Martin

> "Event modeling is the next programming language. Actually, it is the assembler of today - the core that is really going to keep you the same no matter what kind of thrashings you get." - Adam

## Key Takeaways

1. **Haiku is Enough** - The cheapest model is perfectly capable for slice implementation
2. **Three-Phase AI Workflow** - Manual, then static code generator, then AI loop
3. **Index.json is the To-Do List** - Slice status management drives the entire loop
4. **Learnings Compound** - Each iteration makes the agent smarter; late slices are instant
5. **Context Windows Are a Trap** - Small, precise context beats large, fuzzy context every time
6. **Static Generators Are Worth It** - 80% of code generated deterministically, 20% by AI
7. **Skill Files Manage Themselves** - Let AI improve them; only intervene when output is wrong
8. **Event Model is the Future Language** - Adjust the model, deploy the system; no code in between

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
