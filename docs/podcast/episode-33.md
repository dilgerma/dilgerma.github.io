---
layout: docs
title: Episode 33 - New Year, Vibe Coding Limits, and Why Coupling is the Root of All Evil
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 33 - New Year, Vibe Coding Limits, and Why Coupling is the Root of All Evil</h1>
    <p class="blog-post-subtitle">Martin and Adam kick off 2026 discussing community support, the limits of vibe coding, building financial trading systems with AI, and why event modeling eliminates fear from software projects</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 33</span>
      <span>Vibe Coding, Coupling, AI Trading & Fearless Development</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bZxy9dS_5eg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

In the first episode of 2026, Martin and Adam reflect on amazing community support (nearly 160,000 EUR raised for children in need), share updates on their home projects, and dive deep into why vibe coding hits a ceiling. Martin reveals how his Roblox project with his son ran into coupling problems despite having an event model, while Adam shares how he built an entire options chain analyzer in one day using AI. The episode explores why event modeling eliminates fear from software projects and why coupling remains the root of all evil in software development.

**Important:** The GoFundMe for children in need has raised nearly 160,000 EUR thanks to the community. Links remain available in the show notes if you'd like to contribute.

## Main Discussion Points

- **Community Support Success** - Nearly 160,000 EUR raised by over 3,000 donors for children in need
- **Vibe Coding Ceiling** - Martin's Roblox project hits the coupling wall despite having an event model
- **AI-Powered Financial Tools** - Adam builds a complete options chain analyzer in one day
- **Home Automation** - N8N automation clusters on Raspberry Pi vs. zero-library approaches
- **Event Modeling Tooling** - Progress on swim lanes in the new event modeling tool
- **Fearless Development** - Why event modeling eliminates the fear that haunts traditional projects
- **The Power of Slices** - How proper slice architecture prevents coupling and enables rapid change

## Vibe Coding Hits the Ceiling

Martin shares a powerful lesson from his Roblox project with his son - even with an event model, vibe coding eventually hits a wall.

### The Problem

> "We hit the ceiling. What we were basically doing is vibe coding the whole thing. And now as we added more and more logic, it doesn't work anymore. We just hit the ceiling. Every time we do something, something else breaks." - Martin

### The Familiar Pattern

> "It's the typical story of every vibe coding project. You make good progress in the beginning. It feels good. It feels great. But sooner or later, you hit the ceiling and then it gets really, really complicated. And if you don't have a plan for that, it's really hard." - Martin

### The Solution

Adam provides the blueprint for recovery:

> "You basically treat your vibe-coded solution as a legacy project. Once you've vibe-coded your way to this place where every prompt that you throw at it is causing an issue somewhere else, you need these discrete steps. You need to throw away the mess." - Adam

The approach:
1. Record the game being played to capture current state
2. Reverse engineer what data is being stored
3. Define all events and projections with their schemas
4. Then ask AI to complete the implementation slice by slice
5. Never let AI change other code without explicit permission

## AI-Powered Financial Trading System

Adam shares how he built an entire options chain analyzer in one day - the same system that formed the basis of his startup in 1999.

### The Speed of AI-Assisted Development

> "In one day, I can put in a ticker and it'll show me what the options were that day, a table down below if you picked any particular strike price, what your profit or loss would be if you sold at any part of the day. You can see this in a beautiful grid. Scroll wheel up and down on the time that you would have bought during the day. Changes the table, shrinks it up and down. All the percentages change perfectly." - Adam

### Why Event Modeling Enables AI

> "When I'm prompting, I'm taking a picture or selecting the JSON representation of the event model and putting it into cursor - no hallucinations. I get exactly what I want." - Adam

### The Key Constraint

> "One of the rules that I have in my cursor rules is: do not change other functionality unless you absolutely have to. Don't be this thing that keeps cleaning stuff up as it wanders through the codebase. Don't touch it." - Adam

## Home Automation: Two Approaches

Martin and Adam share different philosophies on home automation.

### Martin's N8N Approach

> "I have a few Raspberry Pis here. What I want to do with them is set up an N8N cluster, which is automation. It allows you to automate things. It's basically like a DSL. You can define what you want to do and there's tons of open-source connectors." - Martin

### Adam's Zero-Library Approach

> "I focus on the information. If I'm using my automated system and I want to say 'this plant needs water' and I get an email saying your plants are dying, I ask myself: do I need something to drag and drop in there? With AI, I can make that process simpler." - Adam

The key insight:

> "I specifically do things client-side only so that I have no deployment issues. I can always put in a backend if I need to expose it publicly." - Adam

## Why Event Modeling Eliminates Fear

Both hosts reflect on how event modeling has fundamentally changed their relationship with software projects.

### Martin's Transformation

> "I've never been so calm. There is no stress in my daily work. I'm not really fearful of anything in the projects. Whatever comes my way, I can handle it. A few years ago my biggest fear was always: what if this one requirement comes that simply doesn't fit the architecture?" - Martin

### The Fear is Gone

> "This simply cannot happen anymore. In a project built with event modeling, built with slices, this will never ever happen because we can deal with anything that comes our way." - Martin

### Adam's Perspective

> "When I know that person is working on event modeling and event sourcing, I'm like 'yeah, give me whatever problem you have. I'll help you because I know what to expect. I expect to see slices. I expect to see this propagation of information left to right.'" - Adam

### One-Hour Solutions

> "I had this so often this year. People come to me with problems. We sit down. We model this. And after an hour, the problem is gone. We solved it. There's no contract. Your problem is solved. Have fun." - Martin

## Event Modeling Simplicity vs. Clones

Martin shares observations about event modeling alternatives that have emerged.

### The Core Insight

> "I saw a lot of these event modeling clones coming up, all a little bit different with different names. Whenever I ask, almost always they didn't really understand event modeling or they did not even try. Changing it always comes with a cost. Almost always it gets much more complicated." - Martin

### Why Simplicity Matters

> "Event modeling works because it's so simple. That's the only reason why it's so powerful. That's the reason why I'm using it. I like simple stuff. Whenever you introduce new concepts, it gets more complicated." - Martin

### Proven Over Time

> "There is a reason why event modeling is like event modeling. You worked with it for 10 years until you made it a thing. It didn't come from nowhere. It came out of practice." - Martin

## Event Modeling Tooling Progress

Adam shares updates on the new event modeling tool development.

### Swim Lanes Feature

> "I got the swim lanes looking pretty good. That's one major aspect that's not going to be a pain out of aligning things with Miro." - Adam

### Rethinking Fundamentals

> "An interesting thing popped up: do we need arrows or is there a better way to display that? It's always good to tear things down and build them up again as you hit challenges and ask fundamental uncomfortable questions." - Adam

### The Core Principle

> "Keeping the core really simple so that you can add whatever overlays you need. If I need a special icon for domain storytelling, is that really a big deal that I have that icon in an event model? To me that makes no difference." - Adam

## Event Modeling as a Constant

Adam reflects on the stability of event modeling in a rapidly changing industry.

### No Disruption

> "I was afraid of another methodology coming out or something technically better for event sourcing. Maybe something could disrupt it. And every year the answer was no, there isn't anything. And it was more important the last two years as all of the advancements happen in AI that hasn't changed event modeling either." - Adam

### The Stability Advantage

> "The change and flux within the industry is something that strengthens event modeling because it becomes something you can actually depend on being there for you. I can't depend on the React framework because I know it's potentially going to be changed by Vue.js or something else." - Adam

## The Fixed-Cost Model

Adam explains why fixed-cost contracting works with event modeling.

### The Gun to Your Head

> "We said we will fix bugs for free and we'll do fixed costs. There's no way - if we're wrong, we're out of business. We put a gun to our heads and we know that the barrel chambers are empty. We're so confident that we'll just walk like that for years." - Adam

### Justified Compensation

> "One of our guys worked so much one month because he was so incentivized that he created a paycheck for himself that's the largest I've ever seen for someone programming. And I wrote that check to him for that work because he managed to add so much value in one month." - Adam

The analogy:

> "If you have expertise in building walls and you managed to figure out a system that allows you to build a wall in one hour, whereas it takes most everyone else a whole day, you can build 10 walls in a day and make 10 times as much. Is that unfair? No." - Adam

## Key Takeaways

1. **Vibe Coding Has Limits** - Eventually you hit a coupling ceiling where every change breaks something else

2. **Event Models Save Vibe-Coded Projects** - Treat them as legacy projects and restructure around events and slices

3. **AI + Event Models = No Hallucinations** - Give AI the event model and get exactly what you expect

4. **Constrain AI Strictly** - Never let AI change code outside the current slice without explicit permission

5. **Fear Disappears with Event Modeling** - The existential fear of "the one requirement that breaks everything" simply goes away

6. **One-Hour Problem Solving** - Complex problems often have simple solutions visible within an hour of modeling

7. **Simplicity is Power** - Event modeling works because it's simple; adding complexity defeats the purpose

8. **Fixed-Cost Confidence** - When you trust the process, you can put your money where your mouth is

9. **Stability in Chaos** - While frameworks change constantly, event modeling remains a constant you can depend on

10. **Coupling is the Root of All Evil** - Every other problem in software can be traced back to coupling

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
