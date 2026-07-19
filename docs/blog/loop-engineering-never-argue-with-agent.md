---
layout: docs
title: Loop Engineering - Or Why You Should Never Argue With an Agent
description: Loop Engineering explained - why clearing context between iterations beats long, polluted conversations with AI agents, and how Event Modeling slices are the task list the loop needs.
author: Martin Dilger
date: 2026-06-10
category: AI & Architecture
keywords: loop engineering, RALPH loop, AI agents, context window, event modeling, slices, spec-driven development, agentic engineering
featured_image: /assets/images/blog/loop-engineering-never-argue-with-agent.png
tags: [ai, loop-engineering, event-modeling, agents]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Loop Engineering - Or Why You Should Never Argue With an Agent</h1>
    <p class="blog-post-subtitle">Clean iterations with recorded learnings outperform long, polluted conversations with AI agents - every single time.</p>
    <div class="blog-post-meta">
      <span>June 10, 2026</span>
      <span>10 min read</span>
      <span>AI &amp; Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent.png' | relative_url }}" alt="Loop Engineering - Or Why You Should Never Argue With an Agent">
  </div>

  <div class="blog-post-content" markdown="1">

Most engineers right now are trying to put their head around "Loop Engineering." What does that even mean, and why does everybody keep claiming it's the "new thing" after "Spec-Driven Development"?
{: .lead}

Let me explain.

Most developers are slowly poisoning their AI agents. And they have no idea it's happening.

When "loop engineering" started trending, my first reaction was: finally. Not because it was new to me - but because it was getting a name. A real one. Something people could point to and say: this is the method.

It started for me back in 2025, when I read Geoffrey Huntley's papers. He called it the RALPH loop. My first reaction was honest: running an agent in a loop? Nonsense. But then I kept thinking about it. And I realized - wait. I'm already doing this. I just didn't have a word for it.

## What Loop Engineering Actually Is

First, people heavily overcomplicate things. It's very simple, that's why it works so well.

You define a list of tasks your agent needs to accomplish. You run them one by one in a loop. After each task, you record what you learned along the way - an architectural insight, a way to prevent a failure, a small hint that makes the next task a little easier. Then you clear the context completely. The next iteration starts from scratch. No bias. No bad decisions lingering. No wrong information. Just the learnings - and the next task.

That last part - clearing the context - is the part people instinctively fight. It feels wrong. It feels like losing progress. It's the opposite.

## Why Context Is the Enemy

Here's what actually happens when you have a long conversation with an agent.

You try something. It doesn't work. You correct it. You go back and forth. You finally get it working. And along the way, the context fills up with every bad decision, every reversal, every disagreement, every dead end. The agent is carrying all of that.

The longer this goes on, the more confused the model becomes. And confusion is what produces hallucination. It's not a random event. It's the predictable result of a polluted context window.

Most people respond by prompting harder. They try to argue their way out of the spiral. Define more rules. Define more guardrails. Just add another instruction in capitals. They are making things worse.

## I Never Argue With an Agent

Every agent will immediately tell you how right you are. That's not learning. That's hand-waving agreement.

Think about what a conversation looks like after you've been going back and forth for an hour. Arguing. Correcting. Reverting. Finally getting something to work. If the agent were to look back at that conversation and try to draw conclusions - what would it actually conclude? Nobody knows. The signal is completely buried in the noise.

"The agent isn't learning from your corrections. It's just agreeing with you - and carrying the confusion forward."
{: .highlight-box}

So my rule is simple. Each iteration has clearly defined goals. Each iteration has clearly defined rules. If a rule is broken, there's no discussion. I throw everything away - except the learnings - and retry in the next loop. Clean slate. Every time.

## Do Not Fine-Tune the Loop

Just yesterday someone reached out to me wanting to engineer the loop. Add complexity. Add layers. Make it smarter.

Essentially the idea was - if an agent is working on a task, and someone is changing the task, the agent should stop, revert everything and restart. My question was "why?" - let that sit. You are engineering around the loop - the loop already takes care of this.

In detail, we were discussing how the build-agents on the Eventmodelers platform orchestrate their tasks.

I understood the instinct. But it completely misses the point. I'll show you why.

## Event Modeling Is "Loop Engineering" Applied

The hard part in Loop Engineering is not implementing the loop, it's defining the list of tasks. In Event Modeling this happens naturally and is part of the process.

Every "slice" of functionality becomes a task.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-1.png' | relative_url }}" alt="Every slice on the timeline becomes a task an agent can pick up">
</div>

Tasks have a status. You can assign a task, mark it blocked, or mark it "planned" - planned means this slice can now be picked up by an agent.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-2.png' | relative_url }}" alt="Each Slice has a status - Planned means ready to be picked up by an agent">
</div>

An agent can subscribe to changes on a board. Whenever a slice changes, subscribed agents get notified.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-3.png' | relative_url }}" alt="Agents like Claude Code, Codex, and Hermes subscribe to slice:changed events">
</div>

Each of those agents run in a loop. Essentially waiting for something to do, sleeping while not. One agent will pick up the slice.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-4.png' | relative_url }}" alt="An agent claims a slice: I'll take that one!">
</div>

The agent then puts the slice in progress. Much like assigning a ticket to an engineer. If it's assigned, no other developer or agent can take it.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-5.png' | relative_url }}" alt="A slice moved into in-progress status while an agent works on it">
</div>

Now essentially one of three things can happen.

- Task finishes (agent puts the slice in "Done")
- Task is blocked (something is missing, agent puts the slice in "Blocked")
- Agent dies (task stays in progress and times out after a while, another agent can pick up on it)

This picture shows it best.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-6.jpeg' | relative_url }}" alt="Event Modeling Agent Harness diagram - the full 24/7 loop from Draft to Ready to Working to Done">
</div>

## No Prompting, Looping

The beauty of it - there's no manual prompting involved. Just change a slice and wait until the agent did the work.

Changing an existing slice? Just move it from "Done" to "In Progress," make your adjustments and then move it to "Planned." An agent will pick it up, find the difference between the specified slice and the code, and adjust the code to match the spec again - adding scenarios, adding fields, whatever.

If something fails, the problem is in the spec, not the prompt. Just throw away the failed attempt, let it record the learning, adjust the model, and put the slice back into "Planned." The next one will pick it up again and retry from scratch.

I use comments on the slice or each element to give implementation hints if necessary. When done, the agent will check off the comment.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-7.png' | relative_url }}" alt="A comment on a slice giving the agent an implementation hint">
</div>

## No (Over)Engineering Necessary

There is no need to stop an implementation of a slice if changes have been made. Just finish the loop and let the agent pick up the same slice again and adjust the changes. This often happens to me when I realize I forgot a few scenarios. Just add them in the model and put the slice back into "planned."

The beauty of loop engineering is its simplicity. The moment you start overengineering it - adding more state, more memory, more decision-making between iterations - you start reintroducing exactly the problems the loop was designed to eliminate. You're building back the noise.

Simplicity isn't a limitation of loop engineering. It is loop engineering.

## The Counterintuitive Truth

Clean iterations with recorded learnings will outperform long, polluted conversations every single time. Not sometimes. Every time.

Throwing away context feels like losing progress. Starting from scratch feels like going backwards. But what you're actually doing is protecting the signal. You're making sure the next iteration runs on clear information - not on the accumulated wreckage of everything that went wrong before.

That's the loop. That's why it works. And that's why "finally" was my first reaction when it got a name.

## The Spec-Driven Book

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/loop-engineering-never-argue-with-agent-8.png' | relative_url }}" alt="Cover of the book Spec Driven - a hands-on guide to becoming an agentic engineer">
</div>

This whole approach is essentially what I describe in detail in my book "Spec Driven." Follow me here on LinkedIn if you want to stay up to date.

The Eventmodelers platform is the one place where agents and humans come together. "Loop engineering" built in by design.

The build-kits provide ready-made loop setups. You can get started in 30 seconds.

And of course - don't forget. I can teach your team how to do this, as I did for hundreds of engineers already. Book a free 15-minute call (German or English) to discuss the potential.

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
    <a href="{{ '/docs/blog/ralph-loop-ai-agents' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>What Happens if You Run Claude Code in a Loop? The RALPH Loop Explained</h3>
        <p>The RALPH Loop isn't magic - it's Agile for AI.</p>
        <span class="related-post-meta">AI &amp; Architecture • January 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/agentic-engineering-beyond-code-generation' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Rethinking Agentic Engineering</h3>
        <p>Code is not the starting point. It's the finish line.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • April 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/dcb-dynamic-consistency-boundary-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Does DCB Affect Event Modeling?</h3>
        <p>Focus on the business domain - and generate code where possible.</p>
        <span class="related-post-meta">Event Sourcing • July 2026</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
