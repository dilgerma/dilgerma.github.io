---
layout: docs
title: We Forgot How to Think Before We Code - AI Just Made That Impossible to Ignore
description: Spec-Driven Development isn't a buzzword. It just means think before you code. Why AI didn't create the planning problem in software - it just made it impossible to hide.
author: Martin Dilger
date: 2026-04-28
category: AI & Architecture
keywords: spec-driven development, requirements engineering, event modeling, AI agents, software planning, agile, waterfall
featured_image: /assets/images/blog/we-forgot-how-to-think-before-we-code.png
tags: [ai, spec-driven-development, event-modeling, planning]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>We Forgot How to Think Before We Code - AI Just Made That Impossible to Ignore</h1>
    <p class="blog-post-subtitle">Spec-Driven Development isn't a buzzword. It just means think before you code. AI didn't create this problem - it just made it impossible to hide anymore.</p>
    <div class="blog-post-meta">
      <span>April 28, 2026</span>
      <span>8 min read</span>
      <span>AI &amp; Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/we-forgot-how-to-think-before-we-code.png' | relative_url }}" alt="We Forgot How to Think Before We Code">
  </div>

  <div class="blog-post-content" markdown="1">

It feels like we swung from rigid waterfall to "no plan at all" in the last 20 years - and somehow we called it progress.
{: .lead}

Now we see increased output with AI-generated code, but we just moved the bottleneck - someone needs to review that stuff. AI didn't create this problem. It just made it impossible to hide anymore.

Now we've re-discovered Spec-Driven Development.

Spec-Driven Development sounds like a buzzword. It isn't.

It just means: think before you code. Plan before you act.

We used to call it requirements engineering. Engineers just entering the industry might not even know what that means. And I'm not kidding. It existed for a reason - not as bureaucracy, not as corporate overhead, but as discipline. The kind of discipline that separates teams who deliver from teams who firefight.

The problem was never the planning itself. The problem was the feedback loop.

You'd pay people to write detailed documents for months. Careful, thorough, expensive documents. With the best intentions. And by the time those documents finally reached an engineer for the first time - they were already outdated. Reality had moved on. The business had changed. And all that investment landed in a drawer somewhere.

So everyone agreed: never again. And I was one of them.

## How We Lost the Plot

Agile came as a relief. Finally - flexibility. Finally - working software over documentation. Finally - a way to move without being buried in plans that didn't survive contact with reality.

But somewhere on the way, we confused "being agile" with "not planning at all."

We were so burned by the rigid plans, the endless sign-offs, the documents nobody read, that we swung hard in the other direction. "Tackle each sprint from scratch" became the default. And nobody questioned it, because questioning it felt like suggesting we go back to waterfall. And nobody wanted to be that person. We knew it didn't work, but neither did agile for most companies.

So we stopped planning. And we called it agility. At least it felt different.

## The House Without a Blueprint

I've walked into those teams. Smart people. Genuinely talented engineers. Proud of how fast they move.

But underneath - chaos. Not visible at first sight, sometimes buried beneath nice architecture diagrams and workflows, but it was there.

Tickets planned in sprints. Each developer making their own decisions, no guardrails, trusting that everyone on the team would make the right call. The result is what you'd expect if you built a house that way. Each contractor doing their best work - but nobody working from the same plan. After a few years, the house stands. But nothing quite fits together the way it should.

We managed it with ceremony. We added refinements, plannings, PI plannings. Larger and larger meetings, but did it really help? We held meetings to manage the meetings, the dependencies that grew because nothing was specified properly upfront. We made it feel like it was working.

Until the output increased. And then it didn't feel like anything was working at all.

## AI Ripped the Band-Aid Off

A human developer, handed a vague ticket, fills in the gaps. They use judgment, experience, intuition. They ask a question in Slack. They make a reasonable assumption. It's imperfect, but it mostly works.

An AI agent handed that same vague ticket does something different. It executes. Precisely. Completely. On exactly what you asked for.

Which is often exactly the wrong thing.

The output is now 10x. Every crack in the foundation is showing at 10x speed. The ceremony can't keep up. The meetings can't keep up. The broken system that was held together by human judgment and goodwill is now being stress-tested by machines that don't negotiate ambiguity.

And every CTO and engineering manager I talk to feels it. Most of them already know something is broken. They just don't have an answer yet.

## Full Circle

Planning is important again. And honestly - I'm glad.

But let's be clear about what this is and what it isn't.

This is not waterfall. You don't plan the whole system upfront. You plan one feature. One behavior. One unit of work - before anything is written in code.

Spec-Driven Development means specifying behavior before code exists. Not writing some markdown notes and calling it a spec. Not a ticket with three bullet points. Actually specifying what the system should do, how it should respond, what the edge cases are - before you hand it to anyone. Human or machine.

Specifying means being specific.

You need a plan. You need an architecture. You need solid foundations.

One feature. Fully specified. Then you hand it to the agent.

## The Best Tool I Know for This

The best tool I know for Spec-Driven Development is Event Modeling. Because it works. Event Modeling is spec-driven development that includes everyone - not just developers. It bridges the gap between business stakeholders and engineers before a single line of code is written. You're not specifying in isolation, in a document nobody will read. You're specifying together, visually, in a shared language that a developer and a product owner can both look at and understand.

The feedback loop is immediate. The moment something doesn't make sense, someone in the room says so. Before anything is built. Before anything is handed to an AI agent.

That's what makes it different from the requirements engineering of the past. It's collaborative. It's fast. And it stays alive because the team owns it.

## But I Never Had a Good Answer to the Enterprise Question

Every workshop, without fail, the same question comes up.

"This is great - but how do we version this? Where's the audit trail? Where's the accountability? How does this integrate into our existing systems?"

Architects continually mention "we can't plan our enterprise with some sticky notes on a Miro board." Well, you can, but it's far from ideal.

For years, my honest answer was: exported JSON that is versioned, Miro board history if you really messed it up.

Technically an answer. But not really.

I knew it. The person asking knew it. And I'd move the conversation forward, because there wasn't a better answer to give.

That's an uncomfortable place to be. You're the expert in the room. People paid to hear your answer. And the real answer is - "we don't have a great solution for that yet."

I sat with that discomfort for a long time.

## So I Built It

Not because it was the plan. Because nobody else was going to.

The Eventmodelers platform started as a better modeling experience. But the real goal was always to tackle every enterprise objection that ever silenced a workshop room.

I wanted to have those answers when the questions came.

**Versioning first** - every change is versioned in git. No more "what changed and when" conversations.

**API first** - anything you can do in the UI, you can do via API. Your tooling, your pipelines, your workflow.

**Ownership first** - bring your own datastore. Want to store all your event models in markdown files, in your own format on your own infrastructure? Be my guest.

**AI first** - connect your AI agent in 30 seconds. The model becomes the spec the agent works from.

**Voice first** - model as you speak. Voice is a first class citizen, and it works with your local LLM.

**Local LLMs welcome** - everything can be done with local models, running on your own hardware. No data leaving your environment.

**Run the whole system on prem?** Perfectly fine.

And you can share your models with one click - hand your versioned Event Models to a vendor.

Everything is pluggable, too. The default mode is solo modeling - you model on your own, everything is stored in the browser. Want to try something? Switch to experimental mode - everything is in-memory, gone after a refresh.

The platform provides an extension model, which makes it super flexible. Git versioning - just another extension. Jira integration - just another extension. Integrate your custom exotic build pipeline - well, that's of course another extension too.

That's also the reason why there won't be any project management integrations, task management, estimations, or planning features built into the platform. It focuses on one thing and one thing alone - planning software systems with Event Modeling. I want you to keep your existing tools, because Event Modeling is very compatible with them. And now we can integrate.

## Now It's Here (Almost)

This is the best answer I can give to how to integrate AI into your engineering on an organizational level.

After years of pointing at sticky notes and exported JSON - there's finally a real answer.

The next time someone asks me "but how do we version this?" in a workshop, I don't have to look for an angle. I'll open GitHub.

That's a relief I didn't fully appreciate until I felt it.

We always knew you should think before you code. The discipline was always there, waiting to be picked back up. AI just made it urgent in a way that nothing else could.

The teams that build on solid specifications today will be the ones still standing when everyone else is drowning in AI-generated chaos that nobody planned for.

One feature. Fully specified. Then you hand it to the agent.

That's it. That's the whole thing.

I help software teams define those clear specifications for AI - and build maintainable systems that stand the test of time.

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
    <a href="{{ '/docs/blog/the-protocol-get-knowledge-on-the-board' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Protocol, Step 1 &amp; 2</h3>
        <p>Get the knowledge on the board, then build the timeline.</p>
        <span class="related-post-meta">Event Modeling &amp; Process • April 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/event-modeling-isnt-waterfall' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Isn't That Just Waterfall?</h3>
        <p>Why breaking requirements into slices makes planning flexible instead of rigid.</p>
        <span class="related-post-meta">Event Modeling &amp; Planning • May 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/spec-driven-development' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>A Simple Guide to Spec-Driven Development</h3>
        <p>What I've built is closer to a very disciplined, very tireless junior developer.</p>
        <span class="related-post-meta">AI &amp; Architecture • March 2026</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
