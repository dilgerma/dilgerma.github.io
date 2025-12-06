---
layout: docs
title: Your wonderful microservice architecture? I don't care. Show me the coupling.
description: The architecture diagram doesn't tell you anything - the coupling does. Learn why understanding coupling is more important than architecture patterns.
author: Martin Dilger
date: November 27, 2025
category: Architecture & Coupling
keywords: coupling, microservices, architecture analysis, system coupling, dependency analysis, microservice architecture, architectural patterns, system dependencies, coupling analysis, architecture quality
featured_image: /assets/images/blog/show-me-the-coupling.png
tags: [coupling, microservices, architecture, dependencies, system-analysis, architecture-quality, design-patterns]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Your wonderful microservice architecture? I don't care. Show me the coupling.</h1>
    <p class="blog-post-subtitle">The architecture diagram doesn't tell you anything - the coupling does</p>
    <div class="blog-post-meta">
      <span>November 27, 2025</span>
      <span>8 min read</span>
      <span>Architecture & Coupling</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/show-me-coupling.png' | relative_url }}" alt="Show Me the Coupling">
  </div>

  <div class="blog-post-content" markdown="1">

I mentioned my famous address story yesterday. As always, someone asked: "Is this a made-up example?"
{: .lead}

Nope.

Twenty years ago, my first ever User Story. Me a junior, with 2 years of "experience". Basically no idea of anything to be honest. An ecommerce portal. A simple user story: adjust an address DTO, add some new fields. Should have been easy.

Instead? Two weeks of meaningless refactoring. Adding attributes. Releasing maven modules in the right order. Complete waste of time.

But here's the real shock - it wasn't that it took so long. It was that everybody accepted it. Including me.

That question - "is this made up?" - it tells you everything, doesn't it? We've normalized the insanity so completely that when someone hears about two weeks to add address fields, they assume it must be fiction. Can't be real.. Guess what, nothing really changed. We still operate and build Software in the same way.

Adding AI to the soup? doesn't solve any problem - we now can adjust AddressDTOs much faster. (clap, clap, clap)


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The real problem

I used to worship the domain architects and enterprise architects. Early in my career, I was completely mesmerized by them. They seemed to craft these perfectly fitting domain models that captured the essence of how a business worked. Beautiful diagrams. Clean boundaries. Everything in its place. I thought: this is mastery. Get the model right, and everything else flows.

I want to be able to do that.

So I did what you do - I learned. Years of learning. Books. Working with customers. Practicing DDD by the book. Applying all the technical patterns. Aggregates, bounded contexts, the whole playbook. I heard it so often: "We like DDD here, but we mainly focus on the technical parts."

I heard this exact term last week in a conversation - nothing has changed. As if technical perfection would somehow solve business problems.

**It took me years to realize I was on the wrong path.**

Because here's what I started seeing: these beautiful models were all wrong. They lacked something here, something there. They weren't really extensible. You'd hit walls pretty quickly. "No, can't do that, this was not planned."

And those Domain Architects would defend their models with bites and claws.

And no matter how good your model was, at some point in time, there would be this one requirement which brought in the first crack.

From then on, it's pretty quick. The rotten process started.

Let me tell you what I mean. There is no one address. There are many addresses in many use cases. Company address. Person address. Delivery address. They're not the same thing. But we keep trying to force one concept, one model, one truth. It's a fallacy - you can only lose when you play this game.

What we should have done with that address DTO twenty years ago? Use different representations for different use cases. But we couldn't see that then. We were too busy protecting the perfect model. Too busy releasing maven modules in the right order.

I wanted impact when I was in a project. I wanted to drive change. Adding fields to a DTO doesn't drive change - it drives crazy.

## Technology doesn't matter

It hit me eventually: the technical parts - aggregates and stuff - they don't really matter in a dynamic architecture. We were optimizing for elegance, not for change. We were solving the wrong problem.

So what actually matters?

**Alignment.** People working towards a shared goal and understanding. People are welcome to do whatever they want within their slice. The goal isn't a perfect model - it's a system where new requirements don't trigger two weeks of refactoring.

It really hit me when Adam Dymitruk mentioned this to me in a conversation. You shouldn't have to hire 10x developers to get going. You need a system to go fast with average developers. (hit like a fist in the stomach..)

## Event Modeling and Slices

If you design your system in slices, you practice decoupling by design. Event modeling makes this explicit. Combined with event sourcing - again, decoupling by design. It's all about decoupling.

**Your wonderful microservice architecture? I don't care. Show me the coupling.** The architecture diagram doesn't tell you anything - the coupling does.

Here's my favorite moment in workshops now. We model the slices, and then we talk about "what would happen if we add a new requirement here?"

First, silence.

Then... "Wait a second, isn't that just another slice."

**YES! EXACTLY!** I scream at the top of my lungs.. finally someone got it right!

This is when people understand for the first time what it means to work with slices. The concept is called "done is done" - you typically don't touch a slice until the requirements for this slice change, which might be never. N.E.V.E.R.

Slices are super stable. New requirements typically mean just adding new slices.

Completely different to what we were used to: change one thing, rework all others and pray.

Now, you can't just start using slices in a legacy codebase directly after a workshop. But you start to see the patterns where slices appear. You can discuss boundaries. The coupling is no longer hidden. It's screaming in your face. Undeniable.

And guess what - **Coupling is a big problem if it's hidden. It becomes manageable if you make it visible.** You can change what you can see.

## The Truth About Perfect Models

Your perfect domain model never existed. I know because I spent years chasing it. I spent two weeks adding fields to a DTO because I believed in it. I accepted it.

Stop chasing the perfect abstraction. Stop spending two weeks adding fields to DTOs. Stop accepting "that's just how software development is."

Start designing for change, not for perfection. Start with slices, alignment, and making coupling visible.

When people ask "is that address story made up?" - I wish it was. But it's not. And I bet you have your own version of this story. Maybe you're living it right now.

**The question isn't "how do I create the perfect model?" The question is "how do I build a system that doesn't rot when reality shows up?"**

Event modeling and slices give you that answer. Not through perfection, but through designed decoupling and visibility.

## If you want a system, that allows to fight coupling.

That allows to go fast with average developers (which isn't meant demeaning at all)

That allows to scale by adding people

That allows to survive when reality hits..

**Don't do what we've always done.. try something else. Make the problems visible and then tackle them.**

The whole process is described in my book ["Understanding Eventsourcing"](https://www.nebulit.de)

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
