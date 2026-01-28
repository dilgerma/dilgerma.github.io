---
layout: docs
title: Episode 34 - The RALPH Loop and AI Agents on Autopilot
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 34 - The RALPH Loop and AI Agents on Autopilot</h1>
    <p class="blog-post-subtitle">How to put Claude Code in a loop and why it only works when you define tasks properly with Event Modeling</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 34</span>
      <span>AI Agents, RALPH Loop & Event Modeling</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dvLbqQmjt8k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

In this episode, we dive deep into the RALPH Loop technique popularized by Geoffrey Huntley. Named after Ralph Wiggum from The Simpsons - a simple but persistent character - the RALPH Loop puts AI coding agents on infinite loops to build entire products. But here's the catch: it only works if you invest in defining tasks properly first. We explore why this isn't really new (it's Agile for AI), how to use Event Modeling to feed the loop with clean slices, and why the 75% of work that isn't coding still matters.

## Main Discussion Points

- **What is the RALPH Loop** - Running AI agents like Claude Code in infinite loops to build complete systems
- **Why it's not magic** - The RALPH Loop is essentially Agile for AI - break problems into iterations, refine, repeat
- **The 75% problem** - Most people automate the easy part (writing code) and ignore the hard part (defining tasks)
- **Two-way power** - RALPH Loops work forward (generating from models) and reverse (extracting from legacy)
- **Event Modeling integration** - How to export Event Models to JSON and feed them to autonomous agents
- **SDLC on Autopilot** - Real example of modernizing a legacy system using this approach

## The RALPH Loop Process

### Step 1: Event Model the System
Start with high-level capabilities and flows, then pick the most important flow and break it down further. Like peeling an onion - work in iterations, getting more detailed each time.

### Step 2: Export to JSON
Your event model gets exported into:
- An `index.json` file (your PRD with slice statuses)
- One `slice.json` file per feature with detailed specifications

### Step 3: Set the Agent Loose
Simple prompt: "Pick the most important task and implement it. Update learnings in Agents.md. Update progress in progress.txt."

### Step 4: Let It Run
The agent autonomously picks slices, implements them, documents learnings, and moves to the next slice. Each iteration makes it smarter.

## Key Insight: Garbage In, Garbage Out

> "If your event model is sloppy, your slices will be sloppy. If your slices are sloppy, your code will be sloppy."

The RALPH Loop doesn't solve the hard problem of defining tasks properly. It automates the easy 25% of coding. The 75% of understanding requirements, breaking them down, and defining clear boundaries - that still requires human discipline.

## Key Takeaways

1. **The RALPH Loop is Agile for AI** - Same principles we've known for 20 years, applied to agents
2. **Crap in, crap out** - Agents aren't magic, they're really good automation
3. **Two directions** - Use loops forward to generate code, reverse to extract knowledge from legacy
4. **Event Models are the key** - They provide the structure that makes autonomous coding possible
5. **The 75% still matters** - Breaking work into clean slices is still the hardest part
6. **Learnings compound** - Each iteration makes the agent smarter through documented knowledge

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

Read the full blog post: [What Happens if You Run Claude-Code in a Loop?]({{ '/docs/blog/ralph-loop-ai-agents' | relative_url }})

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
