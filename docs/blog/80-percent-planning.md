---
layout: docs
title: If you are in Software Engineering - 80% of your work should be planning
description: Real planning means all questions are cleared and you only need to execute. Learn why proper planning is the key to successful software engineering.
author: Martin Dilger
date: 2025-11-27
category: Planning & Execution
keywords: software planning, software engineering, project planning, event modeling, requirements analysis, software development process, execution strategy
featured_image: /assets/images/blog/80-percent-planning.png
tags: [planning, software-engineering, process, methodology, best-practices]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>If you are in Software Engineering - 80% of your work should be planning</h1>
    <p class="blog-post-subtitle">Real planning means all questions are cleared and you only need to execute</p>
    <div class="blog-post-meta">
      <span>November 27, 2025</span>
      <span>10 min read</span>
      <span>Planning & Execution</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/planning-80-percent.png' | relative_url }}" alt="80% Planning in Software Engineering">
  </div>

  <div class="blog-post-content" markdown="1">

We thought we were planning.
{: .lead}

We had user stories. We had architecture diagrams. We had acceptance criteria and sprint planning sessions that stretched for hours.

But here's what actually happened when we started building:

"Wait, what happens if the user does X before Y?"

"I assumed we were storing this data here, but you're saying it's over there?"

"Do we validate this on the frontend or backend?"

"Who owns this piece of data when the order is in this state?"

**We weren't planning. We were guessing with documentation.**

And the execution? It was constant firefighting. Mid-sprint pivots. "Quick clarification" meetings that derailed entire afternoons. Bugs that revealed we'd built the wrong thing because three people had three different mental models of how it should work.

I remember one project - a Case Management System. We'd "planned" it. Two weeks of user stories, diagram sessions, the works.

Three sprints in, we were still arguing about fundamental questions: What constitutes a "case"? When does state transition happen? Who can see what when?

We were executing without a real plan. And it was exhausting. And we'd constantly get distracted with all the stuff we didn't plan.


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## What Real Planning Looks Like

I love to build real, tangible things on the weekend. With my hands, using Wood, Stone, Concrete, Nails and Screws.

Just recently, I spent a weekend building a fence for my house. I did that myself and I never did that before.

I spent hours planning that fence. My wife was constantly asking why I wouldn't start? I was focused on Measuring. Sketching. Making lists of materials - stones, concrete, wood, tools. Figuring out each step in sequence.

Then I went to the hardware store and bought everything.

**And the execution? It never failed.**

I knew exactly what to do next. No surprises. No "oh shit, I needed that other tool." No backtracking. Just: step one, step two, step three, done.

I stood back and looked at that fence with pure satisfaction. Not because the execution was hard - it wasn't. Because the planning had been thorough.

Just a few years ago, it was unimaginable to have this feeling at work. Building software doesn't work like that, right? It's "soft", you can't grasp it fully. **Bullshit.**

The problem with most software planning isn't that we don't plan enough time.

**It's that our planning just sucks. We leave questions unanswered.**

"We'll figure that out during implementation."

"That's an implementation detail."

"Let's get started and see what comes up."

That's not planning. That's hoping.

**Real planning means all questions are cleared and you only need to execute.**

When I run Event Modeling workshops now, I watch teams have the same realization I did. We'll be modeling a system - let's say a checkout flow - and someone will put up a command: "Submit Order."

Simple, right?

Then the questions start:

- "What if payment fails?"
- "What if inventory isn't available anymore?"
- "Do we validate the cart one more time or trust the frontend?"
- "Who gets notified when this happens?"
- "Wait - can you submit an order with zero items?"

These aren't "implementation details." **These are the actual requirements.**

And you can't avoid these questions - you'll get stuck modeling until you figure that out.

And in traditional planning? They get hand-waved away. Put in a parking lot. Marked as "TBD.".

In Event Modeling? We don't move forward until we answer them. Right there. On the board. With the whole team contributing.

Because if we can't answer these questions during planning, we're going to hit them during execution - when it's 10x more expensive.

## I spend 80% of my time planning. Execution - writing Code - it's just a side effect of planning.

And my execution is fast, focused, and nearly bulletproof.

Here's what a typical project looks like now:

**Planning Phase (80% of time):**

- Event Model the entire system with stakeholders in the room
- Answer every single question that comes up
- Model until someone says "I think we're done" and someone else says "wait, what about..." and we realize we're not
- Keep going until there are no more "wait, what about..." moments
- Take a screenshot

This does not mean you model for months and then start. Quite the opposite - You can model one slice, a handful of slices - and then execute on them. Rinse repeat. Typically we'd model a "chapter" - which is a group of slices forming a workflow. In the agile World, what's closest might be the Epic.

**This is how I execute:**

- Put on brain.fm (just works for me)
- Go slice by slice with extreme focus
- I know exactly what I have to do all the time
- No guesswork. Nothing.
- When one slice is done, move to the next

Yesterday I rebuilt part of the earlier mentioned Case Management system. Yes, it's slice based now. The way we manage cases has changed. One slice needed a completely different table schema.

Because I had the Event Model - the real plan - I knew exactly what to do:

1. Delete the slice
2. Regenerate with new schema
3. Replay events
4. Switch over

**Done in less than an hour.**

No surprises. No "oh wait, this affects..." moments. No emergency Slack threads.

Because all the questions had been answered during planning.

## If your execution keeps hitting unexpected problems, it's not an execution problem.

**It's a planning problem.**

You left questions unanswered. You left room for interpretation. You documented assumptions instead of decisions.

Most teams think they're planning when they write user stories or draw architecture diagrams. But that's not real planning - you're leaving question marks everywhere.

Real planning looks like this:

**Before Event Modeling:**

"User submits order" (one line in a user story)

Sounds clear, right?

**After Event Modeling:**

- Order Submitted (event) - happens when?
- After: Payment Authorized (event)
- After: Inventory Reserved (event)
- After: Email Sent (event)
- But what if payment fails? → Order Rejected (event)
- What if inventory isn't available? → Order Pending (event) + Inventory Team Notified (event)
- Can you submit with zero items? No → Validation Error (event)
- Who can see the order in each state? → Read model defined with explicit permissions

See the difference? Every question answered. No TBDs. No "we'll figure it out later."

That's planning. And when you plan like this, execution becomes almost mechanical.

## Plan Like You're Building a Fence

**As a Team:**

- **Spend serious time planning** - Don't rush this. It feels slow, but it's not. It speeds up things like you've never seen it before.
- **Make sure you have everything you need** - Answer every question. Buy every tool. No "I'll improvise."
- **Execute step by step** - Now it's just following the plan. Focus on one thing at a time.
- **Execution never fails** - Because the hard work happened in planning.

Event Modeling is the software equivalent.

We spend hours - sometimes days - modeling with the team. It feels slow to people used to "move fast and break things."

People love "emergent design", "no design upfront" and "being agile", it feels like freedom - the result though is just constant distractions and interruptions. You need to figure out things as you go. Like going to the hardware store and buying random things I like.. doomed to fail.

Execution after proper planning? Lightning fast. Focused. No context-switching. No surprises.

I take a screenshot of the Event Model before I start. A few hours later, I look back. Slices completed. Features shipped. Nothing broken.

That craftsman feeling of looking at what you've built - not what you've scrambled to fix.

I love that! That's what proper planning gives you.

## The Bottom Line

Most software fails during execution because it was never really planned.

You can't execute your way out of an unclear plan.

But when you plan properly - when all questions are cleared, when every team member has the same mental model, when the Event Model shows exactly what happens and in what order - execution becomes the easy part.

**I spend 80% of my time planning.**

**And I always know exactly what to do next.**

My Book [Understanding Eventsourcing](https://www.nebulit.de) describes this process. And the companion course Implementing Eventsourcing gives you a head start. Want your Team to feel the focus? Let's talk - I'm specialized in training teams on exactly that.

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
