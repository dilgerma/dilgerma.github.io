---
layout: docs
title: Episode 35 - Workshop Success, No Slides Needed, and Polymorphic .NET Developers on Java
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 35 - Workshop Success, No Slides Needed, and Polymorphic .NET Developers on Java</h1>
    <p class="blog-post-subtitle">Martin runs a groundbreaking 3-day implementation workshop with no slides - .NET developers implement Java slices. Plus: Axon embraces DCB, Raspberry Pi plant kiosk, the Ralph Loop on a Raspberry Pi, and why language choice is increasingly irrelevant.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 35</span>
      <span>Workshop, Implementation, Polyglot Architecture & Ralph Loop</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sBp_7buVhoE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin just completed a breakthrough 3-day workshop - no slides, just doing. .NET developers learned Java, Kotlin, Axon, and Spring on the fly and were implementing slices by day three. The most boring thing was the breaks. Adam shares his finished Raspberry Pi plant monitoring kiosk with C-based sampling and discusses running the Ralph Loop on a Raspberry Pi. The hosts dig into language-agnostic architecture, the event modeling.ai tooling progress, and why PHP is larger in production than Java.

## Main Discussion Points

- **3-Day Implementation Workshop** - No slides, pure doing: day 1 modeling, days 2-3 implementation
- **Zero Language Barriers** - .NET developers implemented Java/Kotlin/Axon/Spring slices successfully
- **No Preparation Needed** - Martin's philosophy: prepare 1-2 days before, when ideas are freshest
- **Event Modeling Tooling Progress** - Eric joins, event modeling.ai now looks like Miro
- **Template Repository** - Planning GitHub-hosted event model templates (login, checkout, etc.)
- **Axon and DCB** - Exonic embraces dynamic consistency boundaries
- **Raspberry Pi Kiosk** - Adam's plant moisture monitoring with C-based frequency sampling
- **Language Doesn't Matter** - A slice in Python looks like a slice in Java
- **The PHP Surprise** - PHP is larger in production than Java (and it's fine)
- **Ralph Loop on Raspberry Pi** - Running Claude Code in a loop to implement slices overnight

## The Workshop Breakthrough

### No Slides Required

> "There were no slides, nothing. We just started and they learned everything they needed to know while we were modeling. If there were questions, we went into it and it worked beautifully. You don't need any slides. Just do it." - Martin

### Language Polyglotism in Action

> "Most of the people there were no Java people there. Most of the people were from the .NET space and they learned Java, they learned Kotlin, they learned Axon, they learned Spring on the go and they in the end they were implementing slices." - Martin

> "That's the beautiful thing. That's the whole polyglot approach that I love." - Adam

### The Core Insight

> "In the end, it really doesn't matter what framework you're using because the patterns are all the same. A slice in .NET looks quite similar to a slice in Java, looks quite similar to a slice in Python. Whatever you want to do, it's always the same thing." - Martin

### The Ultimate Feedback

> "One of the participants reached out and said the most boring thing in these three days were the breaks." - Martin

## Event Modeling Tooling: New Visual Standard

Adam shares that with Eric joining the team, event modeling.ai now visually resembles Miro - removing the barrier for people coming from the Miro world.

### Template Repository Vision

> "Why not just have something that also has the slices - especially if you know they conform to a very simple way of doing event sourcing. You can not have it and if you have your own framework, remove that and just implement it to your own." - Adam

## Language Agnosticism in the AI Age

> "Technology wise, I don't really care. If someone comes to me and asks for consulting for Haskell, I would be a little bit suspicious - but choosing the simplest thing that could possibly work is most of the time the best choice." - Martin

> "PHP is far larger than Java in production." - Martin
> "Almost nobody knows that PHP is huge." - Adam

## Raspberry Pi Plant Monitoring Kiosk

Adam completes his plant moisture monitoring system:
- C program sampling GPIO pin frequencies (capacitance-based moisture detection)
- Node.js kiosk running headless Chrome/Chromium in kiosk mode
- Real-time frequency display grid (10-20 updates per second)
- Plans for remote sensors and proximity-based screen wake

> "I can set the C command to sample the pins for X amount of milliseconds and then it'll come back. The frequency tells you how much water is in the soil - a pretty neat little project." - Adam

## The Ralph Loop on a Raspberry Pi

Martin reveals he's running Claude Code in a loop on a Raspberry Pi:

> "I put it on my Raspberry Pi. I'm running Claude Code on my Raspberry Pi and I let it just build slices. I just feed the event model directly from Miro and I let it build." - Martin

### How the Loop Works

> "I'm feeding it slice by slice. I have an index.json that I export - just a list of slices, nothing more. And then it gets one JSON file - slice.json. There is only one slice. If this slice is done, it just marks it off in the index.json and then it goes to the next one." - Martin

### The Learning File

> "You let the coding agent run over a loop. The prompt says: implement the slice. And whenever you learn something, put it into a learning file - progress.json. It gets better with each slice it implements." - Martin

> "In the beginning it's not good. It makes mistakes. But you can see in the learning file how it learns. Every slice, every iteration, it has some realizations. Oh, I need to do that. At some point in time there are no more learnings - it's just slice done in two minutes." - Martin

### The Reverse Engineering Loop

> "I also used this to analyze a legacy codebase. The agent runs over the loop: look at where data gets persisted, look at where data gets read, look at the API endpoints, look at the unit tests. From that, try to understand what the system is doing. The results are pretty good." - Martin

### The Ralph Wigum Reference

> "It's like a learning employee that gets better over time. Ralph Wigum from the Simpsons - he's super persistent in what he's doing. No matter what happens, he just keeps going. You iterate in a stupid way, again and again, and at some point your AI will get it right." - Martin

## Key Takeaways

1. **No Slides Needed** - Pure doing is the best way to learn event modeling and event sourcing
2. **Language is Irrelevant** - Slices look the same regardless of stack
3. **3 Days is Enough** - Day 1 modeling + 2 days implementation = real skills
4. **Templates Remove Friction** - Pre-built event models for login, checkout, and more coming
5. **DCB is the Future Default** - Exonic and the community have aligned
6. **The Breaks Were the Most Boring Part** - The best possible feedback from a workshop attendee
7. **Ralph Loop = Autonomous Slice Implementation** - Feed the model, let it run, wake up to working slices
8. **Learning Files Compound** - Each iteration makes the agent smarter; late slices are instant

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

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
