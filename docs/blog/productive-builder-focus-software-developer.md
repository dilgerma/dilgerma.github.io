---
layout: docs
title: The productive Builder - how to find focus as a Software Developer
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The productive Builder - how to find focus as a Software Developer</h1>
    <p class="blog-post-subtitle">Most developers think productivity is about focus, tools, or time management. They might be chasing the wrong thing.</p>
    <div class="blog-post-meta">
      <span>December 4, 2025</span>
      <span>15 min read</span>
      <span>Productivity & Development</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/productive-builder-1.png' | relative_url }}" alt="The productive Builder">
  </div>

  <div class="blog-post-content" markdown="1">

The real secret? 80% of productive work happens before you write a single line of code. Productivity is all about preparatation.

Let me explain.

## The Tunnel
There's this state we typically call "the tunnel"

It happens most mornings. Headphones on, brain.fm playing, coffee nearby. The world shrinks down to just me and the work. I'm completely locked in on one thing for an extended period of time.

When I'm in the tunnel, I work like a factory worker. One slice after another. Clear plan, clear focus, just getting things done. I move at light speed. I´m becoming the Builder.

It's not just productive. It's joyful.

There's something meditative about it. My hands are moving, code is flowing, but my mind isn't scattered across a dozen decisions. I'm not context-switching. I'm not wondering what to build next or second-guessing my approach. I'm just executing.

This is the state every developer dreams about. The mythical "flow state" that productivity gurus talk about. But here's what they don't tell you - it's fragile. Incredibly fragile.

## The 30-Minute Cost
A colleague taps you on the shoulder. "Hey, quick question."

Someone walks over with something "urgent." Just needs a minute of your time.

The tunnel collapses like a house of cards.

And it's not a 2-minute interruption. For me, it takes 30 minutes to rebuild it. Every single time.

That's the hidden cost nobody talks about. When someone breaks your flow, they're not stealing 2 minutes. They're stealing 32 minutes.

Do that three times in a morning and you've lost your entire productive window.

That's why I've trained my environment. When the headphones are on, people know not to disturb me. It's my signal. My "do not disturb" sign.

I've had to gently explain this to new people I work with. I tell them: "Being able to work focused is the most important productivity thing. And I´m protecting this. When you see the headphones, it means I'm in the tunnel. Unless something is actually on fire, it can wait."

Most people get it once you explain it. They respect the boundary.

But even with boundaries in place, the tunnel doesn't just happen. You can't force your way into it. You have to prepare for it. Like buying a vignette to be able to enter the tunnel.

And that preparation - that's where most people get it wrong.

## The Execution System: The 20%
Here's what my mornings look like when everything is set up right.

I take a Coffee. Headphones. Brain.fm. I sit down at my desk and I know exactly what I'm going to build today.

I open Miro. The Event Model is already there - fully mapped out from an earlier session. All the slices are sitting there, ready to go. Little sticky notes representing discrete units of work, organized from left to right across the board.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/productive-builder-1-1.png' | relative_url }}" alt="Event Model with Slices">
</div>

I pick one. Usually I just start on the left and grab the first unassigned slice. It doesn't really matter which one - that's the beauty of Event Modeling. The slices are designed to be independent. You can do any slice in any order, and it won't break anything.

I assign the slice to myself. This tells the rest of the team it's being worked on. No duplicate effort. No stepping on toes.

Then I quickly review it. Just 30 seconds to make sure I understand what this slice does. What's the user action? What's the command? What event gets raised? What data needs to be displayed? That´s just convenience.. I know there won´t be any questions.. we adressed them already.

It's all there in the model. Crystal clear.

Then I start by generating the code.

This is where it gets interesting.

## Code Generation: Turning Models Into Reality
I built the Event Modeling Toolkit - originally just for myself, because I wanted to get quicker. It plugs into Miro and reads the Event Model directly.

I click a button, and it generates about 80% of the implementation work automatically.

Command handlers. REST endpoints. Events. Commands. Aggregates. Domain models. The entire structure, scaffolded and ready to go.

But here's the key - it's not just boilerplate. The generated code includes inline comments with the Given-When-Then scenarios pulled directly from the Event Model.

So the code doesn't just have structure. It has specification embedded right in it.

I take that generated code and hand it to Claude Code. I don't even need a fancy prompt. I just say: "Implement the TODOs."

The AI reads the GWT comments, understands the business logic, and fills in the gaps. In minutes, I've got a fully functional backend slice.

The generated Tests serve as guardrails.. if they are green, we are good.

No ambiguity. No decisions. No "wait, what was this supposed to do again?"

The Event Model already answered every question. The generator turned it into code. The AI filled in the business rules. I'm just quality control at this point.

## The UI Layer
Depending on the slice, I might need to build a UI as well.

This part is more variable. Sometimes I generate it with a tool like Lovable - especially for standard CRUD interfaces or admin panels. Sometimes I build it manually if it's something custom or complex. Sometimes I work with a UX designer if it's customer-facing and needs polish.

It depends on what the slice needs.

But even here, the Event Model guides everything. The read models are already defined. The user actions are clear. The data flow is mapped out.

I'm not inventing the interface from scratch. I'm implementing what was already designed in the planning session.

## Merge, Ship, Repeat
When the slice is done, I can be merged back. Done is done. Every slice ships behind a feature toggle - you can activate and deactivate at the slice level.

That's crucial. It means I'm never blocked. I don't have to wait for a full feature to be "done" before I can ship. Each slice is independently deployable.

Sometimes we merge slices individually. More often we batch them into chapters - logical groupings that form a complete business process. Like, we might group all the slices for "address check" into one chapter and ship them together.

Slices can be build by anyone. A chapter is typically owned by a developer. The system supports both approaches.

Then I move to the next slice.

Pick. Assign. Review. Generate. Implement. Merge. Ship.

Over and over, like a factory assembly line.

That's the system. That's the execution phase. That's the 20%.

And when it's working, it's pure joy.

## Why The System Works
Let me be clear about something - this execution system only works because of what came before it.

The slices are independent because we designed them that way in the Event Model.

The code generator works because Event Modeling creates a consistent, structured representation of the system.

The AI can fill in business logic because the GWT scenarios are already defined.

I can move at light speed because there are no questions left to answer.

When I sit down to implement a slice, I'm not making decisions. I´m building. I´m becoming the builder. I'm not figuring things out. I'm not debating with myself about the right approach.

I already know exactly what to do.

And that's only possible because I invested the 80% before.

## The Real Work: The 80%
Here's what most people miss.

The planning part is the real work.

Not the coding. Not the implementation. Not the "typing on a keyboard" part that people think of as software development. Not the "Building".. the real work is "Planning"

Planning happens in the Event Modeling sessions.

This is where we sit down with stakeholders - business people, product owners, domain experts, other developers - and map out the entire system.

We start with a blank Miro board and a simple question: "What does the user want to accomplish?"

Then we work backwards. What's the first thing they do? What command does that trigger? What event happens as a result? Who needs to know about that event? What data do they need to see?

We map it out visually. Blue stickies for commands. Orange for events. Green for read models. Red for open questions..

We move left to right across the board, building up the entire flow of the system. Every user action. Every decision point. Every piece of data.

Now we are Planners, not Builders.. we never do Planning & Building at the same time.

As we're planning, we're discovering things.

## What Gets Discovered in the 80%
We catch edge cases that would have broken production. We uncover assumptions that would have stopped our progress much later..

Someone says, "Wait, what happens if the user tries to submit the form twice?" We play throught each scenario using Given / When / Thens.. every edge case captured is one edge case that will not surprise us later..

Like building a small prototype for each edge case, just to see what it means for the system..

We painfully expose requirements gaps.

"What data does the warehouse team need to see to fulfill this order?" Silence. Nobody thought about it. Now we're talking to the warehouse team, understanding their workflow, adding read models we didn't know we needed.

We identify missing business rules.

"Can a user cancel an order after it's been shipped?" Long debate. Turns out there's a 2-hour window where cancellation is possible, but only if the warehouse hasn't started picking. That's a whole chapter we would have missed.

We create a shared understanding.

The business people see exactly how the system will work. The developers see exactly what they need to build. The product owner sees exactly what value is being delivered. Everyone is looking at the same model.

By the time we finish the Event Modeling session - the "Planning" - which might take a day or two or three - we have a complete map of the system.

Not a vague roadmap. Not a list of user stories. A precise, visual, executable specification.

Every slice is defined. Every dependency is clear. Every edge case is handled. And we can change anything in the model at any point in time.. it´s not only possible, it´s expected.

And that's when the 20% start.

## The Productivity Trap
Most developers skip the 80%. They want to be Builders..

They think they're saving time. They want to "start coding" right away. They think the planning session is overhead. Bureaucracy. Something that slows them down.

So they jump straight into implementation.

And then they get stuck.

"Wait, what's supposed to happen when the user clicks this button?"

"I'm not sure if we need to store this data or not."

"Should this be synchronous or asynchronous?"

"What format does the API response need to be in?"

Every question breaks the tunnel. Every uncertainty kills momentum. Every decision point drains cognitive energy.

They spend hours debating architecture. Days refactoring because requirements changed. Weeks rewriting code because they misunderstood what the business wanted.

They think they have a productivity problem. What they have is a Planning Problem.

They're looking for better focus techniques. More powerful tools. Time management hacks. Fewer meetings. Fewer interruptions. None will help.

What they actually need is to invest the 80%.

They need to know exactly what to build before they start. They need to eliminate questions during execution. They need to prepare the work so thoroughly that implementation becomes obvious.

When you get the 80% right, everything changes.

## What Changes When You Get the 80% Right
You enter the tunnel effortlessly. You don't have to force it. The work is so well-prepared that your brain just slides into execution mode.

You execute at light speed. There's no friction. No stopping to figure things out. No context switching. Just slice after slice after slice.

You ship continuously. Every slice is mergeable. Every day you're making progress. And you see it on the Board.. done slices become green.. more and more green on the Board. The feature toggles mean you can deploy without risk.

You experience the actual joy of being productive.

And here's the thing - it's not just you. The whole team moves faster.

When everyone is working from the same Event Model, there's no miscommunication. No duplicate work. No integration nightmares at the end.

The junior developer can pick up a slice and implement it confidently because the model tells them exactly what to do. Yes.. they might take a bit longer.. it doesn´t matter. They´ll become faster over time. They don´t block the Tunnel.

The senior developer can move faster because they're not answering a hundred questions from the rest of the team.

The product owner can see progress in real-time because slices are shipping continuously.

The business stakeholders trust the process because they were part of creating the model. They know what's being built because they helped design it.

Everyone wins.

## The Lesson
The joy of being productive isn't about working harder or faster.

It´s not about getting a better productivity system in place.

It's about working on something so well-prepared that you can finally stop thinking and just build.

Being the Planner first, then becoming the Builder. Never mix them.

That's the tunnel. That's the flow.

And it only exists because you did the real work first.

So if you're struggling with productivity - if you can't seem to get into flow, if you're constantly interrupted by questions, if you're rewriting code over and over - ask yourself this:

Did you do the 80%?

Did you sit down with your team and map out the entire system before you wrote a single line of code?

Did you identify the edge cases, expose the requirements gaps, define the business rules?

Did you create slices so clear that implementation becomes obvious?

Or did you skip straight to coding and hope you'd figure it out along the way?

Because here's the truth: you can't hack your way to productivity if you don't know what you're building.

No tool will save you. No focus technique will help. No amount of discipline will fix unclear requirements.

But when you invest the 80% - when you do the hard work of planning upfront - the 20% becomes joyful.

You put on your headphones. You pick a slice. You execute. You become the Builder.

Want to learn more about this? Start here.

If you want to experience this way of working for real - join my "Understanding Event Sourcing" Workshop on January 20 / 21 2026 - Planning and Building a real system and learning how to get into the Tunnel.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

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

  </div>
</div>
