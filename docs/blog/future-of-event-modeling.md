---
layout: docs
title: "The Future of Event Modeling ( Event Modeling for the rest of us )"
description: Not every team is ready for collaborative modeling as we teach it. Here's where I think Event Modeling is heading - fewer dogmas, more ways to get to a shared model, and simpler adoption.
author: Martin Dilger
date: 2026-11-15
category: Event Modeling & Adoption
keywords: future of event modeling, event modeling adoption, collaborative modeling, inverse event modeling, event modeling light, spec-driven development, em-studio
featured_image: /assets/images/blog/future-of-event-modeling.png
tags: [event-modeling, adoption, collaboration, em-studio]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Future of Event Modeling ( Event Modeling for the Rest of Us )</h1>
    <p class="blog-post-subtitle">I've been a little too rigid about how teams get to a shared model. Here's where I think Event Modeling is heading - personal opinions, nothing more.</p>
    <div class="blog-post-meta">
      <span>November 15, 2026</span>
      <span>8 min read</span>
      <span>Event Modeling &amp; Adoption</span>
      <span>By Martin Dilger</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/future-of-event-modeling.png' | relative_url }}" alt="The Future of Event Modeling - Event Modeling for the rest of us">
  </div>

  <div class="blog-post-content" markdown="1">

I've been building systems for 25 years. I've been a practitioner of Event Modeling since 2021. I believe every team needs a model they can use for discussions, collaboration and understanding. A single source of truth. But I came to the conclusion that I've been a little too rigid about how teams get there. Here's where I think Event Modeling is heading - personal opinions, nothing more.
{: .lead}

## Why I'm Writing This

Yesterday I was part of a discussion that surprisingly turned into a debate about where Event Modeling is heading.

Some of my comments could easily be read the wrong way. So instead of adding more short replies, I want to take the time and write down what I actually think about where we are heading.

These are my personal opinions. Nothing more. But they come from 25 years of building software and a lot of time in rooms with teams who struggle with exactly the same things.

## The Problem I've Carried My Whole Career

I started as an engineer, worked mostly as an architect, and today I educate and work with teams to integrate agentic engineering and spec-driven development into their workflows. Those are just tools though. The real problem has always been a different one.

Before 2021, building software systems meant playing the telephone game. Most teams play it very well. It might very well be the most expensive game in the world right now.

Someone has an idea. That idea is pitched to a product owner. The product owner explains it to a requirements engineer. The requirements engineer writes it up for the team. The team translates it into tickets and finally markdown for an agent.

Every station loses a little. Every station adds a little. And what arrives at the end in production is rarely what someone had in mind at the beginning. That's not a coincidence. That's what we accidentally baked into the process.

## AI Made the Game Longer, Not Shorter

Notice the last station in that chain. It didn't exist a few years ago. For most teams, AI didn't remove a single player from the telephone game. It added one. And that means we can now do something we've always been good at, just faster:

Build the wrong thing faster, but with the best intentions.

## The Unknown Unknowns

The real problem was never speed. It's the assumptions and gaps that kill projects.

The problem of assuming everybody has the same understanding. Assuming what we just discussed will be implemented exactly like that. Gaps in our understanding. Gaps in our requirements. The unknown unknowns - the things we're not even aware we don't know.

They stay hidden for a long time. And when they finally show up, it's super expensive to course correct and change the plan. If only someone had brought that up earlier...

I've seen it in workshops many times. Someone asks "what comes next?", and nobody in the room has the answer. Oftentimes it's a hidden manual process nobody knew about.

Collaborative modeling, and especially Event Modeling, lets us find those gaps early, while they're still cheap. But only if we put collaboration at the center of our work.

But what does this even mean?

## The One Thing That Can't Be Automated

This is the point I tried to make yesterday, and the one I care about the most.

You can automate almost anything in the software development process. Anything. Building. Generating. Documenting.

But you can't automate the collaboration part. You can't automate the communication. That's the "un-automatable" part. No tool can do that (not even AI). That's what nobody believes in the beginning and what everybody bites their teeth out on. Most teams have to fail at it to find out. That's human, I guess.

And because everything around us is getting faster and faster, this part becomes even more important, not less.

## Not Every Team Is Ready - and That's Okay

Here I want to be honest, and this is where I think the debate yesterday came from.

Not every team is ready for collaborative modeling, as we teach it. And for too long, I think we ignored that. We told teams: you need to put sticky notes on a wall to get the benefits. I think that's not true.

I've seen what that leads to. A team books a workshop. It goes well. A few weeks later I reach out, and I hear: "It was really helpful." And then: "We discontinued the practice, we have deadlines."

Helpful and stopped, in the same sentence. They learned something for sure, closed some gaps for sure. But it didn't last, it didn't become second nature.

This is one of the reasons I rarely offer standalone workshops anymore. I want to help teams become really good at it. Making Event Modeling "second nature" typically takes about 4 weeks.

Real collaboration is a habit. You have to learn it and understand it, and that doesn't happen in two days. Sometimes it takes 1.5 years, as someone mentioned recently.

I started as the only one doing Event Modeling with Miro, for the features I was assigned to lead. I was the only one moving sticky notes, while people were having the conversations. Today, even our architect has built his own Event Modeling tool, and our head of product has decided to test a new way of working where we event model from the start for everything we do moving forward. It only took 1.5 years.

And for many teams, the starting point is even further away. Planning with sticky notes feels completely alien to them. They're so used to the old ways of working that standing at a board feels like a waste of time.

In reality, it's the biggest time saver you ever used, they just can't see it (yet).

Blaming them doesn't help anyone. I want to open Event Modeling for everyone. I want as many teams as possible to benefit from it. Event Modeling for the rest of us.

But what does that mean? Let me explain.

I fundamentally believe that you need a model to back your understanding of a system. An Event Model, or something else. Call it your single source of truth.

What is becoming more flexible is how we get there.

Moving sticky notes around in collaboration is still my preferred way. But it's not the only way. And we should stop selling it like that. Let me give you an example.

## The Workshop I Couldn't Give

A few weeks ago, a client wanted a workshop. I simply didn't have any free capacity.

So I suggested an experiment. I gave them a prepared prototype, with the ability to give feedback. Every piece of feedback fed directly back into the board, updated the Event Model based on their understanding and adjusted the prototype. Essentially exactly as we do in workshops, just without the workshop.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/future-of-event-modeling-1.png' | relative_url }}" alt="Feeding an Event Model from a prototype" style="width:50%">
</div>

The result was a pretty decent Event Model. Describing the information flow, step by step. We just had to refine it a little in the end. And it was built in collaboration, by them. Without any workshop.

Some people might say that's not Event Modeling. And here I disagree.

It doesn't matter how we come to the common understanding. Make some workshops, make some prototypes, make some interviews, have some conversations - it's all part of it. And it can all feed back into the Event Model.

At some point, teams will realize that it's much faster to just schedule the workshops together and have those conversations right away. But it doesn't have to start with this.

Oftentimes, Event Modeling initiatives are driven by engineering teams. They want to become more efficient, more productive. But they can't get their stakeholders to take part in the Event Modeling sessions. It's not yet in their DNA.

If that's you - just start somewhere. Hand them a prototype. Record the conversations, use AI to transcribe and model for you.

Then schedule short meetings with them in the beginning.

Any collaboration is better than no collaboration.

## Deadlines, Production and Daily Business

For some teams, even that goes too far.

Event Modeling means model first, then act. Have the conversations, remove the gaps, clear the open questions, then build when the problem is well understood.

But some teams are so used to solving problems in code that model first just isn't doable for them. Not yet.

And oftentimes, it's deadlines, production and daily business that come in between. Teams have built their models, start to practice it, and then a deadline hits. They need to stop modeling for several weeks, and suddenly the model has drifted from reality. Nobody has time to update it now.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/future-of-event-modeling-2.png' | relative_url }}" alt="Inverse Event Modeling - the model is updated constantly from the code" style="width:50%">
</div>

Nothing is worse than an outdated model, so people stop using it for discussions and refer back to code - at least that's "some truth".

For them, there's [inverse Event Modeling]({{ '/docs/blog/inverse-event-modeling' | relative_url }}). The model is updated constantly from the code. They stay in their comfort zone and slowly tiptoe forward.

Recently somebody mentioned he had talked to a friend who was a kind of project manager. "Event Modeling will turn your whole world around", he said, with the typical enthusiasm of people who freshly discovered Event Modeling - the answer was a blunt "I don't want my world to be turned around."

People feel comfortable and safe in the shells they live in. We should accept that.

It takes time. Slowly, slowly something quiet might happen. People start using the model in discussions. First high level, then more and more.

Nobody announces "we're doing Event Modeling now". The model just becomes the place where the conversation happens. Because it just makes sense.

## The Board Is One View, Not the Only One

There's another thing I'd like us as a community to be more open about.

Core Event Modeling practitioners often say sticky notes are the heart of the practice. And yes, that's true.

But there are many different ways to look at an Event Model.

Sometimes you need a UML diagram to discuss with a group of architects. Sometimes you need a domain story, to quickly highlight something in a meeting. Sometimes you need a comic strip that explains a flow in simple terms for marketing.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/future-of-event-modeling-3.png' | relative_url }}" alt="Using rendered comics to explain processes" style="width:50%">
</div>

Some people just don't want to read an Event Model - and we should not force them to.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/future-of-event-modeling-4.png' | relative_url }}" alt="There are many ways to view an Event Model" style="width:50%">
</div>

The Event Modeling board is one visualization. It's not the only one. If we want more teams to benefit from the model, we need to be more flexible and more open to other ways to represent it.

## A Conversation Can Be Small

Event Modeling is having a conversation. It's a communication and collaboration tool.

And that doesn't always mean ten people in a room for two days.

It's perfectly fine for two people to sit together and talk it through for 30 minutes... even 10 minutes is better than nothing. I've event modeled over lunch on a napkin more than once. Doing it alone is enough, too. Event Modeling can simply be a conversation with yourself, a way to streamline your thinking.

## The Future of Event Modeling

Finding out about the future starts in the past. Event Modeling hasn't changed much since I started using it in 2021. And not even since Adam Dymitruk described it back in 2018. The core practice is still the same. The same mechanics, the same patterns, the same ideas. And I think that really proves its value. Not even the whole AI wave could change it much.

Big picture Event Storming or Event Modeling, where we dump all the ideas onto the board, is where we typically start. But it's not the only way to do discovery. Discovery has many faces, and all of them are valid.

Doing any discovery is better than doing no discovery.

For me, the future of Event Modeling has nothing to do with the mechanics. I think we figured that out by now. They will improve but remain somewhat stable. I think the future is about simplifying adoption.

Let's be more flexible with teams who aren't used to this yet. With teams who don't see the value of modeling yet. It's absolutely fine to start small.

For some teams, it might be perfectly fine to do "Event Modeling light" without ever seeing the Event Model itself. Not what I'd recommend, nevertheless valid.

The goal has always been the same:

Get the ideas onto the board. Close the gaps while it's cheap. Avoid misunderstandings through collaboration.

We shouldn't be dogmatic about how those ideas come onto a board. I've always chosen pragmatism over dogmatism. And it has served me well.

Having a team doing Event Modeling "light" will still be 10x better than no Event Modeling at all.

And I really force myself to think outside the box, finding novel ways to collaborate - with AI and without.

How a team gets there can look very different. And I think that's exactly where the future of Event Modeling lies - we'll always have an Event Model, we'll always have a board of common understanding. There are just many ways to get there.

I built [EM-Studio](https://app.eventmodelers.ai) to allow "Event Modeling for the rest of us." Solving Event Modeling for the Enterprise and the hard parts of Spec-Driven Development with software teams in collaboration.

### Links

- [EM-Studio](https://app.eventmodelers.ai)
- [EM Build Kits](https://app.eventmodelers.ai/documentation#agentic-building)
- [EM Cheatsheet]({{ '/cheatsheet' | relative_url }})
- [Event Modeling Use-Cases]({{ '/use-cases' | relative_url }})
- [Explore Real World Event Models](https://app.eventmodelers.ai/catalog)

<div class="course-cta" markdown="1">
### Hands-On Event Modeling Workshop

[Learn More →](https://nebulit.de/en/hands-on-event-modeling){:.cta-button}
</div>

<div class="course-cta" markdown="1">
### Book a Call Today

Want to talk through how Event Modeling could work for your team or project? Let's have a quick, no-pressure conversation.

[Book a Call Today →](https://tidycal.com/1gj56y6/15-minute-meeting){:.cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/inverse-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Inverse Event Modeling: Building the Model From the Code</h3>
        <p>For teams with existing systems, the model gets built from the code - and AI keeps it true.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • October 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/event-modeling-adoption' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Why Your Event Modeling Workshop Didn't Stick</h3>
        <p>Event Modeling doesn't fail in isolation. It fails at the breaks in your value chain.</p>
        <span class="related-post-meta">Event Modeling &amp; Adoption • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>Why AI and Event Modeling are a perfect match - and why vibe coding will always fail.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
