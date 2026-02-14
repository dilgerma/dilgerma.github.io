---
layout: docs
title: Episode 34 - On-Device AI, DCB Takes Over, and Three Bold Predictions for Distributed Systems
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 34 - On-Device AI, DCB Takes Over, and Three Bold Predictions for Distributed Systems</h1>
    <p class="blog-post-subtitle">Martin ships a legal platform with 100% private on-device AI, Adam wrestles Raspberry Pi headless setup and builds an acrylic plant planter, and the hosts discuss Mark Cleft's bold predictions about DCB, Saga extinction, and AI-driven schema evolution in 2026</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 34</span>
      <span>On-Device AI, DCB, Distributed Systems 2026</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/JGQBP0WJx2A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin successfully launches a legal platform with on-device AI using WebLLM - 100% browser-based AI that solves data privacy completely. Adam shares his weekend adventures with a Raspberry Pi headless setup that refused to cooperate, an impressive acrylic plant planter built with Weldon solvent, and a legendary 10-kilogram lasagna. The hosts then dive into Mark Cleft's three bold predictions for distributed systems in 2026, discussing DCB's rise, why Sagas were always a workaround, and AI-driven schema evolution.

## Main Discussion Points

- **On-Device AI Launch** - Martin ships 100% private browser-based AI using WebLLM for a legal platform
- **235-Slice System** - How a production platform grew with a major new feature while staying on time, budget, and quality
- **Raspberry Pi Headless Woes** - Adam's midnight battle with Wi-Fi configuration and headless installs
- **Acrylic Plant Planter** - Weekend project with Weldon solvent bonding and clear acrylic for bog plants
- **The 10kg Lasagna** - Three-layer "data layer, business logic, UX" lasagna for the family
- **Skiing in Bavaria** - Martin's first proper winter in 4 years - first snow shovel, mountain runs
- **Coupling and Deletability** - Why slice architecture makes feature deletion trivial
- **Mark Cleft's 3 Bold Predictions** - Static boundaries, Saga extinction, AI schema evolution
- **DCB as the Default** - Why Dynamic Consistency Boundaries are attracting new practitioners

## On-Device AI: Privacy as a Selling Proposition

Martin shipped a breakthrough feature: fully on-device AI using WebLLM and browser-based RAG - zero data leaves the client.

### The Problem

> "We are dealing with very sensitive data there of course. So we cannot just plug in something like OpenAI or stuff like that. So what we did to come around this limitation is we just use on-device AI in the browser." - Martin

### The Solution

> "It works like a charm. We prepare all this information and basically for different use cases we have different data sets that get loaded into these RAGs. So whatever the user is doing, always the right data is there at hand and everything happens in the browser." - Martin

### Privacy Becomes the Feature

> "The really great thing is we thought about okay how can we integrate AI and there was really no real way to do that according to law and stuff like that. And now the way we did it, it's really a selling proposition. This is really a capability: we have AI and it's 100% safe. You don't have to worry about data privacy. It's a solved problem now." - Martin

## The Power of Slice Deletability

> "There were quite a few features that we implemented in different projects and some of them really just didn't make any sense and we just deleted them and I didn't care about anything. You delete this feature and it's gone." - Martin

> "You don't feel a sense of loss because it's yet another slice. They come and go like you don't get attached to some implementation." - Adam

## Mark Cleft's Three Bold Predictions for 2026

### Prediction 1: Static Data Boundaries Lead to Technical Debt

Static aggregate boundaries will be recognized as premature optimization that creates brittle, change-resistant systems.

Martin's experience:

> "I just recently had the case where [aggregates] didn't work and it really starts to hurt when you get the boundaries wrong. If you have to change that, it really sucks. And then you think, okay, if I had just used dynamic consistency boundaries here, everything would be much much easier." - Martin

### Prediction 2: The Saga Pattern Will Face Extinction

> "Sagas were always a workaround. That is true." - Martin

> "I work a lot with the Axon framework. Most of my projects are with the Axon framework and Axon has natural support for sagas. And I can proudly say I never used them in a real project. Never ever." - Martin

### Prediction 3: AI Agents Make Just-In-Time Schema Evolution Mandatory

> "By 2026, just-in-time schema evolution will transition from theoretical possibility to competitive necessity. Organizations unable to let AI agents flexibly recontextualize historical data will find themselves at a decisive disadvantage." - Mark Cleft

Adam's response:

> "If you're using your event model as the scaffolding, you should be able to say 'consider the events from this swim lane' - and that is incredibly easy when you have an event model. I can just copy them, select them from that swim lane, and say: for this user and this is what they're looking at - tell me what you can do about this." - Adam

## DCB is Opening New Doors

> "I really think DCB is opening some doors. I see a lot of people thinking about DCB, talking about DCB, who never were interested in event sourcing in the first place." - Martin

> "It's kind of sad to have such a complicated term for something that should be the default. That's my only regret about DCB." - Adam

## Key Takeaways

1. **On-Device AI Solves Privacy** - WebLLM enables AI in privacy-sensitive domains without any data exposure
2. **200 Slices is the Sweet Spot** - Meaningful systems that remain manageable
3. **Deletability is Joy** - Properly isolated slices can be removed without cascading impact
4. **Static Boundaries Are Technical Debt** - DCB prevents aggregate boundary pain before it occurs
5. **Sagas Were Always a Workaround** - You've never needed them with proper event sourcing
6. **AI Needs Flexible Data** - Agents that can't recontextualize historical events are at a competitive disadvantage
7. **DCB Attracts New Practitioners** - Its simplicity is drawing people to event sourcing who never considered it

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
