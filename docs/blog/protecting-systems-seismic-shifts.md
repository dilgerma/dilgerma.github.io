---
layout: docs
title: How to protect your system against seismic shifts
---

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>How to protect your system against seismic shifts</h1>
    <p class="blog-post-subtitle">Building adaptable systems with Event Sourcing and isolated slices</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>20 min read</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/software-engineering-planning.png' | relative_url }}" alt="How to protect your system against seismic shifts">
  </div>

  <div class="blog-post-content" markdown="1">

I'm sorry, it's a longer read— yesterday evening I just sat down and started writing.

Before we start, in our last podcast episode ( soon to be released ), we talked about two fascinating topics: AI (of course...) and how experts help save time and money in your organization. No matter if you agree or not, I think it should give some food for thought and allow us to see our current objectives on the topic.

We'll record a new episode of our Event Modeling & Event Sourcing Podcast every Sunday. Make sure to subscribe—also on Spotify!

## Why do we need Event Sourcing?

Why are we even considering something like Event Sourcing? It needs to solve a fundamental problem; otherwise, we wouldn't even bother discussing it.

Everything we do should provide a benefit. That's how humans operate.

So why am I such a big proponent of Event Sourcing?

Let's turn it around. I'm not talking about auditability (although that is one of the biggest reasons Event Sourcing gets promoted). You can achieve auditability with advanced logging and suitable tooling, so I wouldn't consider this the main selling point for Event Sourcing.

## Why we need adaptable systems

The real selling point is flexibility and adaptability.

I like this definition of Adaptability: "Adaptability is the ability of a system to adjust to new conditions, environments, or challenges effectively."

In short—if our systems are adaptable, they accept change and embrace it effectively.

What about Flexibility? "Flexibility is the ability to adjust, modify, or accommodate changes without breaking or losing effectiveness."

Is it the same? No, but they are related.

Asking ChatGPT gives a great definition: "Flexibility is about adjusting in the moment, while adaptability is about evolving over time to succeed in new conditions."

We want both, don't we?

## How does Event Sourcing make our systems adaptable and flexible?

Let's look at it from a different perspective—what prevents a system from being flexible and adaptable?

Change is easy as long as it's expected. Engineering toward expected changes allows us to plan. Humans love plans. It gets much more challenging with unexpected changes.

"That doesn't fit the architecture."
"This functionality was never mentioned in the requirements."
"If you had mentioned that earlier, we would have architected the system differently!"

Mike Tyson famously said, "Everybody has a plan until they get punched in the mouth."

Your system reveals its true adaptability when it gets punched in the mouth.

It always starts with simple workarounds—a new remote procedure call here, some database workaround there. Not a big deal. But every workaround you implement is a tiny crack in the system's foundation.

One crack might not look too bad from the outside, but cracks can have serious effects on the stability of the entire structure.

In the last 15 years in this industry, I've learned one thing: Workarounds beget new workarounds, much like light attracts moths.

Rigid systems resist change. This could be because of:

- A "perfectly" crafted domain model that simply can't bend enough to accommodate the latest requirements.
- Vendor lock-in for a tool that seemed perfect two years ago but now no longer works (Microsoft BizTalk, anyone?).
- Unmanaged coupling in the system—every added dependency increases the resistance to change until no change is possible anymore.
- The "we've always done it this way" mindset, which prevents teams from breaking free of their self-imposed constraints.

Some people like to call this technical debt. I don't. It's not debt—because at some point, it becomes impossible to pay it back, with the interest payments steadily rising.

This is when people first silently, then openly, talk about rewriting the system—because it has turned from an asset into a burden.

I don't use the term technical debt at all. I think it's misleading and, most of the time, just wrong. It´s a tax. And of course we know that only two things are certain in life ( and projects ) - taxes and death ( of a project ).

Think for a second. How many cracks do you count in your system's foundation today?

## The first crack

A new change request comes in, which doesn't fit into the architecture at all. For example, you invested years in a perfectly crafted domain model for your e-commerce system—only to find out that in three months, you need to support multiple tenants. That was never mentioned before. Ouch...

This feature has already been sold to customers with the announced release date. Ouch...

What to do?

Quickly hack in some "tenant-id" columns into your database schema?
Deploy a new stack per tenant? But how do you deal with change? Because all these tenants will behave slightly differently. Ouch again.

This is clearly not what the system was architected for. No matter how hard you try, such a fundamental change will leave more than just a few cracks.

## How do you make systems adaptable?

You do this by limiting the potential disastrous effects of change. A change should not shake the whole system like an earthquake, leaving everything in chaos for weeks or months.

I actually like the analogy of an earthquake here. Major cities worldwide face the challenge of mitigating earthquake risks—especially for critical infrastructure.

We do the same in IT systems—though, thankfully, we typically risk money, not lives. The fundamental problem, however, is quite similar.

"Urban planning plays a pivotal role in enhancing earthquake resilience," states a guide from the Electric Infrastructure Council (EIC).

Careful planning plays the same role in IT projects, but we plan for change. For change we know, but also for change we don´t know (yet).

## Small Building Blocks

How do you limit the effects of change on your system?

You cut clear boundaries, define small building blocks, and stabilize each building block in isolation.

Back to earthquake protection—the smallest building block in a city is a building.

If we look at most software systems today, they resemble one giant building where everything is interconnected. You can't effectively protect a single building if everything is tied together.

Architects and scientists have developed astonishing tools to make buildings earthquake-proof—such as flexible pads beneath structures to absorb seismic waves. Some buildings might still be affected by an earthquake, but the overall effects are limited.

In Event-Sourced systems, the smallest building block can be a slice of functionality.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/software-engineering-planning-1.png' | relative_url }}" alt="Slicing systems into independent building blocks">
</div>

By "slicing" the system, we define meaningful, isolated building blocks that are independent of each other, much like different buildings in an area are isolated from one another.

Earthquakes never affect all houses in the same way—some are more affected, some less, and some not at all. The same principle applies to change: it does not affect all slices equally. Since slices are isolated, some may not be affected at all.

Using Event Sourcing allows us to keep these slices truly independent from one another. When change happens, we can define for each slice whether and how it is affected.

## How does Event Sourcing help?

Using Event Sourcing we have one major benefit—we have a well-defined contract between all slices: the events in our system. Each slice has a defined set of inbound events (the data the slice needs to operate) and a defined set of outbound events (the data that results from the slice's functionality).

By leveraging this, we can clearly identify which slices are affected by a change by analyzing the events that need to be modified. For example, we might need to add a tenant ID to some events or introduce new events like "Tenant Assigned."

Instead of a single, monolithic building that must absorb the full impact of change, we have a collection of smaller, independent buildings—each capable of deciding how to react to a seismic shift.

## Isn´t that also possible with traditional Systems using databases?

Absolutely, it´s just much harder because you have to keep these slices isolated but in sync. One thing you cannot do is to reuse tables across slices. Every reused table increases coupling. The more different parts of the system are coupled to each other, the more they are affected by strong seismic shift. Just imagine two houses that share one wall. If one house breaks down, it´s highly likely that the other house is also affected and damaged.

Event Sourcing eases this as we can have different ( independent ) projections of the same data in different slices.

For example here we have a list of requested insurances in "SLICE 2". But in another one we could use the exact same information from the "house insurance requested" Event to build reporting on how many insurances have been requested and declined in the last month. Independent blocks of functionality. Isolated from seismic shifts.

## Want to work with me?

I´m looking for Teams that want to apply Event Modeling and truly understand their business problems.

Just recently we worked on a system module relying mostly on one table with hundreds of columns. Nobody in the whole company understood what was going on. We went through the system step by step and built common understanding of the processes "behind" the technology.

Didn´t take too long until everybody realized how much easier we could do the same thing with a slightly different approach to it.

The goal is to find out, how your Team will benefit from the structured communication Event Modeling provides.

If your Team could be a fit - just write me here on LinkedIn.

Literature:

How do scientists make earthquake proof buildings?

Predicting Earthquake Vulnerability

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
