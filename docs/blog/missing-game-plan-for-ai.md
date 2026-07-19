---
layout: docs
title: The Missing Game Plan for AI
description: Nobody has a real plan for AI - just fear of being left behind. If your architecture is broken, it doesn't matter how much money you throw at AI. Coupling is the arch enemy of AI agents.
author: Martin Dilger
date: 2026-05-15
category: AI & Architecture
keywords: AI strategy, software architecture, coupling, distributed monolith, event modeling, AI agents, technical debt
featured_image: /assets/images/blog/missing-game-plan-for-ai.png
tags: [ai, architecture, coupling, event-modeling]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Missing Game Plan for AI</h1>
    <p class="blog-post-subtitle">Nobody has a real plan for AI - just fear of being left behind. If your architecture is broken, it doesn't matter how much money you throw at it.</p>
    <div class="blog-post-meta">
      <span>May 15, 2026</span>
      <span>6 min read</span>
      <span>AI &amp; Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/missing-game-plan-for-ai.png' | relative_url }}" alt="The Missing Game Plan for AI">
  </div>

  <div class="blog-post-content" markdown="1">

Last week at CraftConf, I looked around a room full of experienced engineers and technical leaders and noticed something that stopped me cold. Basically nobody has a real plan for AI. Not a bad plan - no plan at all.
{: .lead}

What I saw when reading between the lines was fear. Fear of being left behind. Fear that the competition was already three steps ahead. And that fear was driving companies' decisions - big ones, expensive ones, fast ones.

Not long ago, I was doing the exact same thing.

## I Made the Same Mistake

When the AI explosion started, I found myself trying to understand everything. Every new model, every new tool, every new release. It was genuinely stressful. A hundred things were happening simultaneously and you simply could not keep up. Nobody could.

Then one day I stopped and looked at what I was actually doing. I was chasing tools.

I've known my entire career that tools don't matter nearly as much as fundamentals. That's not a controversial take - it's something most experienced engineers would agree with immediately. And yet there I was, doing exactly the thing I knew was wrong.

"I knew better. I just forgot for a second."

That realization changed how I think about the whole AI conversation. Because most of what I see today - in conference hallways, in client conversations, in LinkedIn posts - is people forgetting what they know.

What we learned in the past three decades hasn't become worthless all at once.

## The Silent Killer Nobody Is Talking About

Here is the thing nobody wants to hear at an AI strategy meeting: if your architecture is broken, it doesn't matter how much money you throw at your AI. It won't work.

Not "it won't work as well as you hoped." It won't work at all.

In 2017 I was working on what we now call a distributed monolith. On the surface it looked modern - nicely structured microservices, clean diagrams, the whole thing. But underneath it was still a monolith at heart. You could tell because almost every new feature touched many services at the same time. The boundaries were an illusion.

Now imagine dropping AI agents into that system.

An agent needs clear boundaries. Clear inputs. Clear outputs. Clear feedback. It needs to know what it's responsible for and what it isn't. In a system full of hidden coupling, the agent is essentially navigating a minefield blindfolded. The chances of it doing the wrong thing are high - not because the AI is bad, but because the system gives it no reliable ground to stand on.

Coupling is the arch enemy of AI.

## You Can See the Problem Within the First Hour

The good news is that you don't need months of analysis to know whether a system is ready for AI. You can read a codebase quickly if you know what to look for.

Hot spots are the first signal - areas of the code that are touched constantly, by many different changes. Then you look at coupling, and specifically temporal coupling - what always changes together. That pattern alone tells you an enormous amount about where the hidden dependencies live.

When you visualize this and put it in front of a team, something interesting happens in the room. People who built the system see it mapped out in front of them, often for the first time. The conversation that follows is usually honest and uncomfortable. There is work to do here - real work - before AI even enters the picture.

That's not a failure. That's clarity. And clarity is exactly what most teams are missing right now.

## Throwing Money at the Wrong Problem

The companies investing heavily in AI right now aren't stupid. All of them have smart people asking reasonable questions. But when fear is the primary driver, the instinct is to move fast and spend big - and that combination, applied to a broken foundation, is how you burn a budget without changing anything.

When investors demand outcomes, "first fixing the architecture" is not a viable option. Big mistake.

Fundamentals matter always. And right now, in this particular moment, they matter more than ever - because the cost of ignoring them has never been higher.

The path forward isn't to slow down on AI. It's to start in the right place.

## Focus on the Problem, Not the Technology

The shift that actually changed things for me wasn't a new tool or a better framework. It was a return to something simple: understand the business problem first.

A deeply understood problem often makes its own solution obvious. You look at it clearly, with the right people in the room, and the answer starts to emerge almost on its own. But without that understanding, you're walking in the shadows, looking for the path.

The best method I know for getting to that understanding is Event Modeling - done collaboratively with business experts, and with AI as a modeling partner alongside you. Not AI as the solution. AI as a thinking partner while you do the hard work of understanding what the system actually needs to do.

That's where a real AI game plan starts. Not with the tools. With the problem.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** - learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Full Agentic Event Modeling Plattform

AI-Enabled Event Modeling and Code-Generation

[Start Modeling here →](https://app.eventmodelers.ai){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/hold-my-beer-engineering' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Hold My Beer Engineering</h3>
        <p>It's your engineer's understanding that goes to production, not your business knowledge.</p>
        <span class="related-post-meta">Event Modeling &amp; Process • May 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-agents-brooks-law-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>If You Can't Add Developers and Go Faster, Adding AI Agents Won't Work Either</h3>
        <p>The future of software isn't about coding speed - it's about solving the coupling problem.</p>
        <span class="related-post-meta">AI &amp; Architecture • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/show-me-the-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Show Me the Coupling</h3>
        <p>The architecture diagram doesn't tell you anything - the coupling does.</p>
        <span class="related-post-meta">Architecture &amp; Coupling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
