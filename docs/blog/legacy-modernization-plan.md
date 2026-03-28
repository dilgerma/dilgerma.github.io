---
layout: docs
title: Why Your Legacy Modernization Plan Might Fail - Before You Write a Single Line of Code
description: The roadmap isn't the problem. The invisible complexity underneath it is. Here's what actually happens when you start digging into legacy systems — and how AI changes the modernization game.
author: Martin Dilger
date: 2026-03-28
category: Legacy Systems & Modernization
keywords: legacy modernization, event modeling, AI, legacy systems, process discovery, blueprint, technical debt
featured_image: /assets/images/blog/legacy-modernization-plan.png
tags: [legacy, modernization, event-modeling, ai]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Why Your Legacy Modernization Plan Might Fail - Before You Write a Single Line of Code</h1>
    <p class="blog-post-subtitle">The roadmap isn't the problem. The invisible complexity underneath it is. Here's what actually happens when you start digging into legacy systems — and how AI changes the modernization game.</p>
    <div class="blog-post-meta">
      <span>March 28, 2026</span>
      <span>8 min read</span>
      <span>Legacy Systems & Modernization</span>
    </div>
  </div>

  <div class="blog-post-content" markdown="1">

I've sat in a lot of rooms with a lot of teams.
{: .lead}

And almost every single time, before we start, someone says the same thing.

"We'll probably be done in 2-3 hours. Our processes aren't that complicated."

I know what's coming, so I typically mumble something like "We'll see..."

## You Think You Know Your System. You Don't.

Right now, somewhere in your company, there is a process nobody has written down.

It lives in someone's head. In a workaround that became a habit. In a spreadsheet that technically "shouldn't exist" but somehow the entire billing department depends on it. They don't know it... Teddy from Marketing does, because he is maintaining it silently and thanklessly.

You've been running your business on top of invisible complexity for years.

And now you want to modernize it.

So your team builds the roadmap. The Gantt chart. The PI Planning sessions. You even introduce Large-Scale-Scrum Frameworks to coordinate this gigantic endeavour. The budget projections. The big, beautiful vision of what your system will look like in 18 months.

And it feels good. It feels like progress.

But there's no progress. It's waste. You are wasting precious time and resources.

## The Roadmap Is a Lie You Tell Yourself

I don't say that to be harsh. I say it because I've watched it happen too many times - with smart teams, experienced engineers, well-funded projects.

The roadmap collapses. Always. Not because the team was incompetent. Not because the budget was too small. But because the map is built on wrong assumptions, it was drawn before anyone truly understood the territory.

You can't build a new house on unsafe ground. Well, you can... and most companies do. But don't expect this to end well.

And here's the thing nobody wants to admit right now - AI makes this worse.

Everyone is rushing to modernize their legacy systems so they can "plug in AI." But you cannot hand an AI a system you don't understand yourself. You will just automate your confusion at scale.

**The problem was never the technology. The problem was always the invisible complexity underneath it.**
{: .highlight-box}

## What Actually Happens When You Start Digging

Let me tell you what a workshop looks like in practice.

A team walks in skeptical. Sometimes a little annoyed. Management made them come. They've got real work to do. Sometimes I get "the look" - the polite version of "this is a waste of our time. You are not welcome."

We start with one process. Something they do every day. Something they know inside out.

And I start asking questions.

Not letting go.

"What happens if this field is empty?" "Who approves that step?" "What does the system actually do here - not what it's supposed to do, what does it actually do?"

And something starts to shift in the room.

Slowly at first. A hesitation. A glance between colleagues. Someone saying "well... actually, in that case we..."

An hour in, they're not bored anymore.

Two hours in, someone is drawing on the whiteboard trying to explain a process they've done a thousand times but never had to articulate before.

Three hours in - the first revelation hits.

"Gosh, this is way bigger than we thought. And we haven't covered half of it."

The room gets quiet. You can feel it - that mixture of overwhelm and recognition. Like finally seeing the real size of something you've been carrying without knowing it.

## One Chapter at a Time

Here's what we do instead of panicking.

We don't try to see the whole system at once. We take one chapter - one subprocess, one slice of the overall story - and we look at it completely. We make the invisible visible. We name the steps nobody named. We surface the rules nobody wrote down.

And then something remarkable happens.

The second revelation.

"Okay... looking at these chunks... this actually seems doable."

The energy in the room changes completely. The same people who walked in skeptical, who were overwhelmed just an hour ago, are now leaning forward. Pointing at the board. Saying "oh, and there's also this step here that connects to..."

They're not just participating anymore. They're owning it.

Because here's the truth about legacy systems that nobody tells you - the processes are huge. But they are mostly not complicated. They just need to be seen.

## A Concrete Framework - And Where AI Actually Helps

This is where it gets practical. And honestly - exciting.

Over the last months I've been experimenting with a multi-step approach to building what I call the modernization blueprint. And the reaction when I show it to someone is always the same excitement.

Here's how it works. Step one I just discovered recently for me, so this is highly experimental.

### Step 1 - Let AI Read Your UI

We use AI to walk through every user flow in your existing application. Every screen. Every button. Every path a user can take. From this, AI builds a first draft of your Event Model - a structured picture of what your system actually does, told through the lens of what users experience.

No interviews yet. No workshops. Just AI, your existing UI, and a surprisingly complete first draft.

### Step 2 - Let AI Read Your Code

In parallel, we point AI at your existing codebase. It analyzes the logic, the given-when-thens, the conditions and rules buried in thousands of lines of code that nobody has fully read in years. It builds a second Event Model - this time from the inside out.

Two models. Both generated automatically. Both telling the story of your system from different angles.

I just had Claude Code analyze a 1.2 Million LOC Code-Base for 40 hours straight. Building hierarchical event models one at a time.

### Step 3 - Bring in the Humans

Now we can overlay both models. Time to bring in your experts - usually there are one or two people in the company who carry the real institutional knowledge. The stuff that was never written down. The edge cases that only exist in someone's memory.

And here's what makes this moment so powerful - the AI has already done most of the heavy lifting. We just need to fill in the blanks. Your experts aren't starting from a blank page. They're looking at a vivid, detailed picture of their own system - and they're adding the last layer of invisible complexity that only they know.

The result is a blueprint more complete and more accurate than anything a team could build manually in weeks.

## The Vision - Where This Is Going

I want to be honest with you. This is still experimental. I'm building and refining this framework in real time, with real systems and clients willing to try.

But this is what I saw back in 2021, when I started to work with Event Modeling already.

Technically - it is already possible to fully derive an Event Model from an existing system. And once you have a complete Event Model, you can generate the new system from it. Most of it on autopilot.

Think about what that means.

You point the process at your legacy system. It reads your UI. It reads your code. It surfaces the invisible with the help of your experts. It builds the complete picture of what you have. And then - it builds what you want to have.

We are not fully there yet. But we are getting close. And this three-step framework is the real, practical path to get there - step by step, chapter by chapter, without a single big bang.

## The Real Thing You Walk Away With

It's not the blueprint.

It's not the architecture diagram.

It's the confidence.

A team that walked in thinking they didn't need help, walking out with a clear picture of what they actually have, what they actually need, and exactly how to tackle it.

That's what makes the difference between a modernization that collapses at month six - and one that actually ships.

The first step to modernizing your legacy system isn't writing code. It isn't building a roadmap.

**It's understanding what you actually have - one chapter at a time.**

Let's be honest, this stuff is exciting. And I can't wait to see this unfold.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** on March 16/17 — learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/ralph-loop-ai-agents' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>What Happens if You Run Claude-Code in a Loop? The RALPH Loop Explained</h3>
        <p>The RALPH loop works in both directions — including reverse-engineering legacy systems into clean event models.</p>
        <span class="related-post-meta">AI & Architecture • January 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>AI is the accelerant. Event Modeling is the structure that makes it work.</p>
        <span class="related-post-meta">AI & Event Modeling • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/spec-driven-development' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>A Simple Guide to Spec-Driven Development</h3>
        <p>The thinking still happens before the agent touches a single line. Here's exactly how spec-driven development works.</p>
        <span class="related-post-meta">AI & Architecture • March 2026</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>