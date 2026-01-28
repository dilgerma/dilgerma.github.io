---
layout: docs
title: What Happens if You Run Claude-Code in a Loop? The RALPH Loop Explained
description: The RALPH Loop isn't magic - it's Agile for AI. Learn why this technique works, how to use Event Modeling to define proper tasks, and why 75% of the work is still planning.
author: Martin Dilger
date: 2026-01-20
category: AI & Architecture
keywords: RALPH Loop, AI agents, Claude Code, Event Modeling, vibe coding, AI development, software automation, code generation, agentic coding
featured_image: /assets/images/blog/ralph-loop-ai-agents.png
tags: [ai, automation, event-modeling, claude-code, agentic-coding]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>What Happens if You Run Claude-Code in a Loop? The RALPH Loop Explained</h1>
    <p class="blog-post-subtitle">The RALPH Loop isn't magic - it's Agile for AI. And it only works if you invest in defining tasks properly first.</p>
    <div class="blog-post-meta">
      <span>January 20, 2026</span>
      <span>15 min read</span>
      <span>AI & Architecture</span>
    </div>
  </div>

  <div class="blog-post-content" markdown="1">

Everyone seems to be excited about the RALPH loop. Geoffrey Huntley popularized this technique - named after Ralph Wiggum from The Simpsons - and suddenly everyone's talking about putting AI agents on infinite loops to build entire products.
{: .lead}

Ralph Wiggum is a simple character... but very persistent in what he does. Exactly the same happens when you put your Coding Agent on an infinite loop.

Overall, I'm a bit surprised by the hype. We've known for 20 years that breaking work into smaller chunks is the only way to ship.

Most people are trying to automate the easy part (writing code) and completely ignoring the hard one (clearly define what needs to be done).

## The RALPH Loop Isn't Really New - It's Just (Real) Agile for AI

Let me take you back. When agile practices emerged, our industry had a wake-up call. We realized we simply couldn't take huge chunks of work in one go. They'd never finish. And if they did finish, they weren't what we wanted or needed.

Go smaller, get feedback, iterate... loop?

So what happened? We started breaking bigger things into smaller things. We filled backlogs with smaller stories. We introduced meetings specifically to break work down into manageable pieces.

**The RALPH loop applies the exact same principle to AI agents: break problems into loops, iterate, refine, repeat.**
{: .highlight-box}

The loop only works if you feed it the right tasks.

And that's where most people are failing spectacularly.

## Why "Just Build It" Never Worked - And Still Doesn't

When AI agents first became accessible, people approached them with a magic wand mentality. They'd write prompts like "Build me an e-commerce app" or "Just build it" and then wonder why the results were garbage.

**Crap in, crap out.**

Agents aren't magic. They're automation. Really good automation, but automation nonetheless.

The bottleneck was never writing code. That's maybe 25% of the work at most. The real work - the hard 75% - has always been getting the tasks right.

- Understanding requirements
- Breaking them down properly
- Defining clear boundaries
- Knowing what to build and in what order

The RALPH loop doesn't solve this problem. It automates the easy 25%.

**If you don't invest time upfront defining the work properly, you're just automating chaos faster.**

## The Real Power - RALPH Loops Work in Both Directions

But here's where it gets interesting. When you do define the work properly, the RALPH loop becomes incredibly powerful. And not just in the obvious forward direction.

**Forward direction:** Generate code from event models, slice by slice. Take your well-defined requirements and let the agent implement them autonomously.

**Reverse direction:** This is where most people haven't caught on yet. You can analyze legacy codebases, extract implicit knowledge, and rebuild systems.

Think about that for a second.

You can point an agent at a tangled, legacy codebase - the kind where half the business logic lives in stored procedures and the other half is tribal knowledge - and systematically extract it into a clean event model - on a loop.

Then you add the human domain knowledge that was never documented anywhere. The stuff that only exists in people's heads.

And then you regenerate the entire system from that combined understanding.

**The human's job in this process isn't to write code. It's to review and correct at the model level - which is exactly where humans add the most value anyway.**

## How I Used This to Modernize a Legacy System (SDLC on Autopilot)

Let me show you how this actually works in production. I recently used this approach to modernize a real legacy system, and it worked beautifully.

Here's the process:

### Step 1: Event Model the System

You can do this two ways. Either model it from scratch by talking to stakeholders (human or AI-assisted), or reverse-engineer it from the existing codebase. I like to start with high-level capabilities and flows, then pick the most important flow and break it down further. Like peeling an onion - you work in iterations, getting more detailed each time.

### Step 2: Export to JSON

Your event model gets exported into two types of artifacts:

An `index.json` file - this becomes your PRD (Product Requirements Document). It looks like this:

```json
{
  "slices": [
    {
      "id": "3458764595831815141",
      "slice": "slice: add item",
      "index": 1,
      "context": "Cart",
      "folder": "additem",
      "status": "In Progress"
    },
    {
      "id": "3458764595831815463",
      "slice": "slice: remove item",
      "index": 2,
      "context": "Cart",
      "folder": "removeitem",
      "status": "Planned"
    }
  ]
}
```

And one `slice.json` file per feature, containing the detailed specifications. That's just the serialized Event Model.

### Step 3: Set the Agent Loose

The prompt is beautifully simple:

> "Pick the most important task (not just the first one) and implement it. Update all your learnings in the provided Agents.md file so you learn with each iteration. Update your progress in progress.txt."

That's it.

The loop looks like this:

```bash
while true; do
  if cat "$SCRIPT_DIR/prompt.md" \
     | claude --dangerously-skip-permissions 2>&1 \
     | tee "$TMP_OUTPUT" | tee -a "$PROGRESS_FILE"; then
    # Success, break out of the retry loop
    break
  else
    # Non-zero exit code: probably spending limit reached
    echo
    echo "Warning: Claude exited with an error. Possibly spending limit reached."
    echo "Waiting 5 minutes before retry..."
    sleep 300  # 5 minutes
  fi
done
```

### Step 4: Let It Run

The agent autonomously:

1. Picks the highest priority slice
2. Implements it completely
3. Documents what it learned in Agents.md
4. Updates progress.txt with what was done
5. Moves to the next slice
6. Repeats

Each iteration makes it smarter. The learnings compound. The patterns get recognized. The implementation gets better.

What surprised me most wasn't the quality of the code or how few corrections I needed to make.

**It was the speed of knowledge extraction.**

How fast you could pull implicit logic out of a tangled codebase, layer in human domain knowledge, and rebuild the entire system from scratch.

This is SDLC on autopilot.

## What You're Going to Get Wrong

People think the agent is the hard part. The Code Generation... It's not.

They'll focus on prompt engineering, model selection, temperature settings - all the technical knobs.

And they'll completely skip the discipline of defining tasks properly.

They'll feed vague slices into the loop. Overlapping requirements. Poorly scoped features. Ambiguous acceptance criteria.

And then they'll wonder why the output is garbage.

**The loop is only as good as the tasks you define.**

If your event model is sloppy, your slices will be sloppy. If your slices are sloppy, your code will be sloppy. If your code is sloppy... we haven't gained anything.

The agent will execute exactly what you told it to do. Garbage in, garbage out - at lightning speed.

## The 75% Problem Still Exists - And Always Will

Breaking down work into the right chunks is still the hardest part of software development.

It always has been. It always will be.

Event modeling solves this. It gives you a structured, visual way to break systems down into slices that are clear, testable, and implementable.

The RALPH loop executes it. It takes those well-defined slices and ships them autonomously.

**But if you don't invest the time upfront to scope tasks correctly, you're just automating chaos.**

You'll ship faster, sure. But you'll ship the wrong thing faster.

## The Bottom Line

The RALPH loop works. It works incredibly well.

But only if you stop treating agents like magic and start treating them like what they actually are: really fast junior developers who need clear instructions.

Define your tasks properly. Model your system with discipline. Break work into clean slices.

Then - and only then - let the loop run.

Because when you do it right, you can modernize legacy systems at a speed that would have been unthinkable two years ago.

You can extract decades of tribal knowledge from codebases in days instead of months.

You can rebuild entire systems with a fraction of the team size and timeline.

But none of that happens if you skip the hard part.

**The 75% still matters. It always will.**

The difference is that now, if you do that 75% right, the other 25% happens on autopilot.

## The Learning

In January 2024 in a webinar I said the Software Industry will change dramatically within 2 years. January 2026 I can say... that was even more dramatic than I thought. The software industry changes rapidly. Manually writing Code is no longer a profession... it's like writing on a typewriter. You can do it if you enjoy it, but hardly anyone will pay for it.

We have all the techniques at hand to build complete systems on auto-pilot and I can show you how.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint for defining tasks that AI agents can actually execute.

Want a repository to try this out immediately? I have a repository prepared with an exported Event Model and all the Prompts you need. Git clone and run, and you'll see the magic.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>AI is the accelerant. Event Modeling is the structure that makes it work.</p>
        <span class="related-post-meta">AI & Event Modeling • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-agents-brooks-law-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>If You Can't Add Developers and Go Faster, Adding AI Agents Won't Work Either</h3>
        <p>The future of software isn't about coding speed - it's about solving the coupling problem.</p>
        <span class="related-post-meta">AI & Architecture • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/collaborative-modeling-ai' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Collaborative Modeling in the Age of AI</h3>
        <p>The clearer you make the What, the less likely you'll face nasty surprises.</p>
        <span class="related-post-meta">AI & Collaboration • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
