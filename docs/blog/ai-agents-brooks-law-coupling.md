---
layout: docs
title: If You Can't Add Developers and Go Faster, Adding AI Agents Won't Work Either
description: The future of software isn't about coding speed - it's about solving the coupling problem we've ignored for decades. Brooks' Law applies to AI agents too.
author: Martin Dilger
date: 2025-11-12
category: AI & Architecture
keywords: AI agents, Brooks Law, software coupling, AI development, software architecture, team scaling, AI coding, coupling problem
featured_image: /assets/images/blog/ai-agents-brooks-law.png
tags: [ai, architecture, brooks-law, coupling, software-development]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>If You Can't Add Developers and Go Faster, Adding AI Agents Won't Work Either</h1>
    <p class="blog-post-subtitle">The future of software isn't about coding speed - it's about solving the coupling problem we've ignored for decades</p>
    <div class="blog-post-meta">
      <span>November 12, 2025</span>
      <span>12 min read</span>
      <span>AI & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/ai-agents-brooks-law.png' | relative_url }}" alt="AI Agents and Brooks' Law">
  </div>

  <div class="blog-post-content" markdown="1">

I stayed up late reading **Adam Dymitruk**'s original article on Event Modeling. The first time through, it didn't fully click. But the next day, something shifted. I couldn't stop thinking about it. By evening, it hit me:
{: .lead}

> If slicing the system is done using these diagrams, if we cut it down correctly, and if the slices are truly independent, this solves most of the problems we face on a fundamental level. Can this actually work?

That was the moment everything changed for me.

For years, I'd seen the same architectural sins repeated everywhere - modules far too big, coupling running wild, system design far too shallow. I *knew* what good looked like, but I had no blueprint to share. Just gut feeling. Just experience that couldn't scale beyond me.

Event Modeling gave me the instruction manual I'd been searching for.

And now, as AI agents flood into software engineering, I'm watching everyone make the same mistake: they think faster coding means faster shipping. It doesn't. And if you don't understand why, you're about to waste a lot of time and money.


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Brooks' Law Doesn't Care About Your AI

Frederick Brooks told us in 1975: **"Adding developers to a late project makes it later."**

We've known this for nearly 50 years. It's a fundamental rule. Yet somehow, when AI agents entered the picture, everyone forgot. How come?

The promise is seductive - agents code faster than humans, so if we just add more agents, we'll ship faster. Right?

**Wrong.**

The problem was never coding speed. It was **coupling**.

When your system is tangled - when modules share state, when changes ripple unpredictably, when one team's work blocks another's - every new person you add creates more coordination overhead. More meetings. More merge conflicts. More "wait, who's working on that?" conversations.

Brooks' Law kicks in not because humans are slow, but because badly designed systems create coordination tax that scales faster than productivity.

And here's the kicker: **AI agents don't magically fix coupling. They make it worse.**

At least humans have Slack channels, hallway conversations, and the ability to say "hey, I'm touching that file too - let me know when you're done." Agents don't have that informal communication layer. They just execute. And when two agents step on each other's toes in a coupled codebase, you get chaos. And if you've not been living under a rock, you ran into this in one of your PoCs most probably.

**If you can't add developers and go faster, you won't get velocity from agents either.**
{: .highlight-box}

## We're Still Writing Code Like It's 1960

Let me be blunt: we're still putting human thought into text files, line by line, the same way programmers did in the 1960s.

This made sense when humans were the bottleneck. When typing speed and syntax knowledge mattered. When "10x engineers" were the ones who could hold the most complexity in their heads.

But that era is over.

**You can't outpace an agent.**

No way. Not going to happen. They will code faster and better than you. I don't write much code anymore manually, and in five years, I don't think most engineers will either. It's not a crucial skill anymore.

The hard part of engineering was never writing the code. It was **solving the right problem**.

And solving the right problem is a *human* problem. Because humans are terrible at articulating what they actually need. Requirements are vague. Language is imprecise. Business stakeholders say one thing and mean another.

AI can't solve unclear problems. It can only execute clear instructions.

So the real question isn't "how do we code faster?" It's **"how do we get clear on *what* to build, so the AI can actually build it?"**

That's the shift. From writing code to directing the new workforce - human and AI alike.

## The Missing Instruction Manual for Modularity

Everyone's suddenly talking about modularity now that AI is here, as if it's a new concept.

I've been talking about this every single day for two years.

Modularity has always mattered. The problem is, no one ever told you *how* to do it. What is a "module"? How do you cut boundaries? Where do you draw the lines? How big or small can/should it be?

For most teams, it's gut feeling. Experience. Trial and error. And it doesn't scale.

**Event Modeling - specifically, the concept of *slices* - gives you the blueprint.**

A slice is a small, independent unit of functionality. It has clear inputs, clear outputs, and no hidden dependencies. You can hand a slice to a developer (or an agent) and they can build it without needing to understand the entire system.

This is what kept me up a whole night when I understood it. I couldn't sleep. It was groundbreaking.

### Here's why slices work:

- **Clear boundaries:** True independence. No shared state. No coordination tax.
- **Simple rules:** Anyone can follow them. You don't need a PhD in system design.
- **Perfect for AI:** Agents have the same cognitive limits as humans. You can't throw an entire codebase at an agent and expect it to land. It's overwhelming. But a slice? That fits in context. That's executable.

Slices are the answer to modularity that the industry has been handwaving about for decades.

## "Need it done faster? Just add more people."

Every project manager has said this at some point. And every engineer has rolled their eyes, because we know it doesn't work.

But with slices, it actually does.

When slices are truly independent - no shared state, no tangled dependencies - you *can* parallelize. You can add more developers. You can add more agents. And you actually get velocity.

Because there's no coordination tax. One person (or agent) working on Slice A doesn't block or interfere with someone working on Slice B.

This is the factory floor model applied to software.

In manufacturing, machines took over the heavy lifting. Humans shifted to controlling the machines - setting them up, designing the workflows, making sure the output was right.

We're seeing the same thing now in software engineering.

But just like in a factory, you can't hit a button and expect a finished, sellable product to come out the other side. The machines need clear instructions. Careful preparation. Design.

That's what Event Modeling provides. The design. The instructions. The blueprint that makes parallelization possible.

## The Three-Way Communication Protocol

Event Modeling isn't just a diagram format. It's a communication tool that works across three dimensions:

### 1. Human-to-Human

Event Models bring business stakeholders and engineers into alignment. You stop arguing about *how* to build something and start clarifying *what* needs to happen.

The model reads like a story. If the story doesn't make sense, the system won't work. And anyone - technical or not - can spot gaps in the story.

### 2. Human-to-AI

This is where it gets powerful.

My workflow today looks like this:

1. Model the slice using Event Modeling
2. Generate the code skeleton using static code generation
3. Use Given-When-Then scenarios as inline comments - these become the guardrails for AI
4. Let the AI (like Claude Code) implement the business logic within those guardrails

The Given-When-Thens aren't just tests. They're instructions. They tell the AI exactly what the system should do in each scenario. And because the slice is small and focused, the AI doesn't get lost.

### 3. AI-to-AI

Here's where it gets really interesting.

I'm using AI to **do the Event Modeling itself** now. I feed it a transcript from a requirements meeting, or I give it a legacy codebase, and I ask it to generate the Event Model.

The AI does a first pass - usually 60-70% accurate. Then humans come in to verify, correct, and fill in the missing details.

Once the model is validated, another AI agent takes over and generates the new code.

This is a perfect blueprint for legacy system modernization. And it's faster than anything I've seen before.

But it only works because the Event Model provides structure. Without that structure, you're just asking AI to guess.

## The Real Problem Was Never the Code

Let me say it again: **humans are terrible at articulating what they need.**

Requirements are "wishy-washy." Language is imprecise. Business stakeholders think they know what they want until you start building it, and then everything changes.

This is why so many projects fail. Not because the code was bad, but because we built the wrong thing.

AI doesn't solve this problem. AI can't read minds. It can only execute clear instructions.

**Focus on the WHAT, not the HOW.**
{: .highlight-box}

If the *what* is clear, the *how* doesn't matter. And sooner or later, AI will handle the *how* without human intervention.

But the *what*? That's still on us.

Event Models force that clarity. They make you articulate the problem in a way that's precise enough for an AI to execute.

And when you read an Event Model, it should make sense as a story. If something feels off - if there's a gap, if the sequence is weird, if an event doesn't belong - you catch it.

You don't need to be technical to validate a model. You just need to ask: **Does this story make sense?**

That's a skill that needs to be trained. It's not automatic. But it's learnable. And it's the skill that will matter most in the next five years.

## Where We're Headed (5 Years Out)

I don't think we'll be writing much code in five years. I'm barely writing any today.

The role that survives - the role that *thrives* - isn't the one writing code line by line. It's the one solving the right problem and directing the AI workforce.

Architects, team leads, and engineers are shifting from coders to:

- **Modelers and validators:** Creating and verifying Event Models that become the blueprint for agents
- **Editors of AI-generated models:** Reviewing what the AI produces and filling in the gaps
- **Guardrail designers:** Writing the Given-When-Thens that keep agents on track

Juniors are struggling to break in because the grunt work - the "just write this function" work - is disappearing. The new baseline skill is knowing how to chunk problems into slices, verify models, and orchestrate agents.

And honestly? That's a better use of human intelligence anyway.

## The Opportunity (and the Warning)

Everyone's suddenly talking about modularity because of AI. But most people are getting it wrong.

They think modularity is just about "breaking things into smaller pieces." It's not. It's about cutting boundaries in a way that eliminates coupling. And if you don't understand how to do that, adding agents just creates more chaos.

### The companies that win in the next five years will be the ones who:

- Learn to slice systems correctly
- Communicate clearly across business and engineering
- Direct their AI workforce with precision

### The companies that lose will be the ones who:

- Think faster coding equals faster shipping
- Throw agents at coupled codebases and wonder why nothing gets better

Brooks' Law is still true. Coupling still kills velocity. The only difference now is that the consequences come faster.

## The New Industrial Revolution Is Here

In manufacturing, machines took over the heavy work. Humans didn't disappear - they shifted to controlling the machines.

The same thing is happening in software now.

Event Modeling is the control interface for your AI workforce. It's how you tell the machines what to build. It's how you verify they built it right. It's how you coordinate multiple agents without them stepping on each other.

The future isn't about *writing* code faster.

It's about *solving problems* better.

And for that, you need a blueprint.

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**Still 2 Team-Spots left for the [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"} this month.**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

{% include related-posts.html %}

  </div>
</div>