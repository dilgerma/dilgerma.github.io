---
layout: docs
title: The Triplet Architecture - Building Flexible, Agent-Enabled Systems
description: Event Modeling, Vertical Slices, and Event Sourcing only pay off when used together. Why the Triplet Architecture keeps systems maintainable for years instead of months.
author: Martin Dilger
date: 2026-07-26
category: Event Modeling & Architecture
keywords: triplet architecture, event modeling, event sourcing, vertical slices, coupling, hexagonal architecture, AI agents, software architecture
featured_image: /assets/images/blog/triplet-architecture.png
tags: [event-modeling, event-sourcing, architecture, ai, coupling]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Triplet Architecture: Building Flexible, Agent-Enabled Systems</h1>
    <p class="blog-post-subtitle">Event Modeling, Vertical Slices, and Event Sourcing only pay off when you use all three together - not picked up separately at different stages.</p>
    <div class="blog-post-meta">
      <span>July 26, 2026</span>
      <span>12 min read</span>
      <span>Event Modeling &amp; Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/triplet-architecture.png' | relative_url }}" alt="Triplet Architecture - building flexible, agent-enabled architectures">
  </div>

  <div class="blog-post-content" markdown="1">

I was part of many projects using some kind of hexagonal architecture. Clean ports, clean adapters, a domain core nobody was supposed to touch carelessly. On paper it was exactly what good architecture is supposed to look like.
{: .lead}

Many of those projects still didn't work the way they should have.

The code base grew, engineers left, new ones came, and the architecture inevitably started to become unstable.

The problem was never the technical structure. It was everything underneath it. The stuff you can't spot easily.

Someone had to take a requirement - usually a vague one - and translate it into that nicely structured architecture. Which module(s) are affected?

And that translation step was where things quietly went wrong. Not because anyone was careless, but because the requirement itself was never precise enough to translate cleanly in the first place.

And even the best domain model becomes wrong at some point in time if you don't actively invest to keep it up to date. At some point, there will be the one requirement that requires a bigger structural change. Some teams will do it, most teams will use duct tape when under pressure. And who would blame them?

That experience is what eventually led me to the three pieces I now typically refer to as the **Triplet** - a flexible, agent-enabled architecture that keeps systems maintainable for years instead of months.

My goal is not to coin a new term - it's just the term I use to describe this approach of working. Flexible, because it starts with requirements instead of guessing at them (and yes, I explicitly consider those part of the architecture). Agent-enabled, because it turns out the same low coupling that makes it easy for humans to change also makes it cheap for AI agents to work inside of. I'll get to both, but the story starts with the problem, not the solution.

## Vague Requirements Turn Into Vague Architectures

There's a perfect example for this. The dreaded module discussion. Ask three developers on a team where a module boundary should sit based on the requirements they got - what belongs inside it, what its API should look like - and you'll get three different answers. Ask again with the architect in the room, and the answers change again. Not because anyone is lying. Because "module" is a blurry word. Everyone assumes they mean the same thing by it, and almost nobody does.

For some engineers it's the microservice. For some it's a part of functionality within a service. For some it's a deployment unit. For some it's just boxes on a diagram.

I've watched an architect come back from vacation and quietly veto a boundary decision an engineer had made while they were away. Not out of malice. Just two different mental models of where a line should be drawn, neither one wrong on its own terms.

But every time it happens, it's crazy expensive.

That kind of thing eats weeks. It's rework that never shows up as "rework" on a burndown chart - it just shows up as a project that's somehow always a bit behind.

## The Root Problem Is Coupling

After enough of these projects, I stopped thinking of it as a communication problem or a discipline problem. It's a coupling problem.

Coupling is what makes a single change expensive, and it's what makes every change after that one even more expensive than the last. It doesn't stay flat - it compounds, resulting in the exponential cost curve we typically deal with.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/triplet-architecture-1.png' | relative_url }}" alt="Cost per feature rises exponentially over time for most systems, starting from a flat green-field baseline">
</div>

A system that was easy to change in month one becomes a system where every change requires a meeting, a careful review, and someone who remembers why a decision was made two years later.

Every failure mode I've described so far is coupling wearing a different costume. Business intent coupled to whoever happened to interpret it that week, which is what turns a "crappy requirement" into a crappy system, no matter how clean the code underneath it is. Unrelated parts of a system coupled through a shared layer nobody fully owns, which is what turns a small change into five pull requests in different "modules" nobody wants to review. With AI, that got even worse.

Today's understanding of a system is typically a lesson in history. Every onboarding turns into an oral history lesson instead of reading the code.

I've had people giving excuses about bad quality every time we opened another class in a review - even though I assured them I don't typically care about code quality.

If coupling is the disease, most teams spend all their efforts treating the symptoms, not the cause.

## Why Agile and Hexagonal Architecture Don't Close the Gap

This isn't a knock on either. I've used both for years. But each one only covers half the problem.

Agile tries to cover the process side. How a team works together, how it plans in short cycles, how it communicates, how it adapts as it learns. What it has almost nothing to say about is the technology underneath. A team can run flawless two-week sprints and still end up with a crappy system that's expensive to touch. Being agile never told them how to structure what they were building.

On the technical side, people talk about hexagonal architecture, onion architectures and layers. Ports, adapters, a protected domain core. What this typically assumes, quietly, is that you already know your boundaries. It doesn't help you find them. It just gives you a well-organized place to put them once somebody has decided what they are - and as I saw firsthand, "somebody has decided" often just means whoever was in the room, or whoever came back from vacation with an opinion.

Nobody was standing in the gap between those two. Nobody was saying: here is the process that produces the boundaries the technical architecture assumes you already have.

## Architecture Is the Whole Thing, Not Just the Code

There's a common assumption I've come to disagree with: that architecture only means the technical part - the code structure, the patterns, the diagrams - and that requirements gathering is a separate, softer discipline that happens before the "real" architectural work begins.

That doesn't hold up. If the shared understanding underneath a technical structure is wrong, or only half-agreed-on, you cannot build good architecture. You've built a well-organized version of a mistake. The decisions that actually matter - what counts as a boundary, what depends on what, where one flow ends and another begins - get made whether or not anyone in the room calls that moment "architecture." Skipping the modeling step doesn't mean no architectural decision got made. It means it got made implicitly, by whoever was loudest or most senior that day, and nobody wrote it down anywhere the rest of the team could see it.

That's why the Triplet always starts with requirements. Not requirements in the classical sense of a document nobody reads after the kickoff meeting, but requirements as something you build visually and collaboratively, in the room, with the people who actually know what the business needs.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/triplet-architecture-2.png' | relative_url }}" alt="Event Modeling timeline showing actors, screens, commands, and events flowing left to right">
</div>

And even more important - something that serves as the blueprint for the technology later. Not vaguely, but detailed enough to even generate most of the code from it.

## The Three Pieces, Used Together

That's the gap I started closing on my own projects with three things, used together rather than picked up separately at different stages (heavily inspired by the work of Adam Dymitruk).

**Event modeling comes first.** It's how you build the shared understanding with business stakeholders actually in the room, so a boundary isn't decided by whoever happened to be in the meeting that day. It turns "the requirement" from a document into a visual, collaborative timeline everyone reads the same way.

**Vertical slices come next.** They are a natural result of the first step with Event Modeling. Instead of organizing code into shared layers - controllers, services, repositories - that force every change to reach across the whole system, you structure it around the real flows the modeling session surfaced. A change to one flow stays inside that flow. Even stronger - a change typically affects only one step in a flow. This naturally limits the blast radius of change. It doesn't quietly ripple throughout the system.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/triplet-architecture-3.png' | relative_url }}" alt="Four vertical slices, each containing its own command, event, and read model, arranged along a timeline">
</div>

**Event sourcing runs underneath both.** Instead of overwriting state and losing the story of how you got there, you keep the full history of what happened. The ledger of facts allows us to decouple the slices. Nobody has to reconstruct the "why" behind today's state from memory, Slack scrollback, or guesswork six months later.

None of these three is new on its own. What I started calling triplet architecture, at least as the name I use for my own work, is the insistence that you use all three together, in union, rather than picking one or two and hoping the gap doesn't matter. It usually does. I've watched teams do hexagonal architecture beautifully with no modeling underneath it. I've watched teams model beautifully and then structure the code in a way that undid all of it. The benefit only shows up when the three are actually connected - the same boundaries discovered in modeling are the same boundaries built into the slices, and the same events modeled are the same events sourced.

That connection is also where the flexibility comes from. A system built this way can absorb a new requirement without a rewrite, because the boundary that requirement lands on was already deliberately drawn, not guessed at. It's flexible because it starts with requirements, not despite it.

## What It Actually Removes

Used together, the three pieces remove a specific list of costs I'd stopped noticing because they'd become normal.

They remove the handover. The same model that aligns business and engineering carries straight through to the technical structure, instead of getting translated - and losing something - between a requirements document and a codebase.

They remove the "how do we do this here" argument. Because the approach is repeatable, a team stops relitigating its own conventions on every new project. The module debate, the vacation veto, the three-different-answers-from-three-developers problem - these largely disappear, because the boundary was already settled with everyone in the room, not decided later by whoever was loudest.

The Triplet approach is opinionated for a reason. It defines "this is how we do things here, no need to think about this again and again."

They remove unnecessary abstraction. Slices keep code organized around what the model actually says is needed, not around speculative layers built for a future that may never arrive. Which also means we only build what is absolutely necessary.

And they remove the guesswork from getting started. Instead of "it depends on the architect," you get a sequence anyone can follow: model, structure, source. That's most of what "guaranteed success" means to me in practice - not magic, just removing the places where projects usually go wrong before they even start.

## Answering "When Is It Done?"

One thing I hated the most during my whole career was the whole topic of estimations. Things have to be estimated, so we can plan properly.

Companies have deadlines, project plans and budgets. Agile didn't change that for most companies. So we invented those crazy ideas like T-shirt sizes and story points. Just so that most project managers cannot make any real sense of it. They just use their Excel spreadsheet that translates story points into person-days.

Slices give us an alternative view on this. Instead of using those abstract measurements, we can talk very concretely about the slices we've already built and the slices that are planned.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/triplet-architecture-4.png' | relative_url }}" alt="25 of 100 slices done - 25 percent complete">
</div>

On the other hand, talking about what is still left to do is also meaningful and allows us to make a surprisingly accurate "guess" on when we will be done.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/triplet-architecture-5.png' | relative_url }}" alt="75 slices left, with a slice cycle time of around two days and roughly 150 days of effort remaining">
</div>

Most of those slices are roughly equal in size, so we typically measure the "slice cycle time" - the average time it takes to build a slice. Call it the velocity, the performance, or whatever you want.

The more slices a team builds, the more accurate this number will be.

## Agent-Enabled

There's one more reason this matters that I didn't expect when I started: low coupling doesn't just make a system easier for humans to change, it makes it easier for AI agents to work inside of too, since an agent working on one slice only needs that slice's context, the event log, and a precise model instead of half the codebase - which is exactly what keeps the overhead and token cost down that you'd otherwise get from a highly coupled system.

An agent typically works on one slice and doesn't need to understand what's left or right to it. This minimizes context size, but more importantly, the amount of code being produced and reviewed.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/triplet-architecture-6.png' | relative_url }}" alt="Agent workflow diagram: an agent creates a slice, moves it through planned and in-progress states, implements it, and moves it to done">
</div>

Changing one slice does not have a ripple effect on the other slices. They are isolated and can be worked on in isolation.

Adding more agents, adding more engineers, results in the system being done faster - not delaying things.

## The Platform

The platform at [app.eventmodelers.ai](https://app.eventmodelers.ai) is specifically built around the Triplet Architecture:

- Planning with Event Modeling
- Building with Event Sourcing
- Structure with Slices

Enabling teams to seamlessly work with agents (using the provided skills and the MCP server for planning) in all phases of the project - solving the nasty problems like version control (natively backed by Git), backup & restore (import/export structured JSON), and code generation (using the provided build kits).

## Conclusion

One more thing worth saying plainly. The value isn't married to these exact three techniques. It's married to having all three building blocks filled - a planning block, a structural block, a storage block - and filled in a way that actually connects to each other.

Each of those building blocks must support decoupling slices.

You can swap any of the three building blocks. But then you are on your own to (re)define how to solve the specific problems we already solved.

I'm happy that I finally gave it a name. Instead of explaining again and again that we plan with Event Modeling, persist information using Event Sourcing, and structure systems using slices, I typically just explain the Triplet. Giving it a name helped a lot.

"Triplet" is just a name I've landed on for how I explain this approach after years of applying it alongside many other teams and companies. If the language is useful to you too, take it. I mostly wanted to finally write down why I say it the way I do.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="course-cta" markdown="1">
### Join the Agentic Engineer Program

Apply Spec-Driven Development Hands-On - Event Modeling, Event Sourcing, and AI Engineering with autonomous agents.

[Learn More →]({{ '/agentic-engineer-course' | relative_url }}){:.cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/missing-game-plan-for-ai' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Missing Game Plan for AI</h3>
        <p>Nobody has a real plan for AI - just fear of being left behind. If your architecture is broken, it doesn't matter how much money you throw at it.</p>
        <span class="related-post-meta">AI &amp; Architecture • May 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/hold-my-beer-engineering' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Hold My Beer Engineering</h3>
        <p>It's your engineer's understanding that goes to production, not your business knowledge.</p>
        <span class="related-post-meta">Event Modeling &amp; Process • May 2026</span>
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
