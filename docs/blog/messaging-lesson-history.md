---
layout: docs
title: An important lesson in history
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>An important lesson in history</h1>
    <p class="blog-post-subtitle">Messaging, not Objects: Alan Kay's wisdom and why Event Modeling follows this recipe to the letter</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>10 min read</span>
      <span>Event Modeling & System Design</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/messaging-lesson-history.png' | relative_url }}" alt="An important lesson in history">
  </div>

  <div class="blog-post-content" markdown="1">

There are countless wisdoms burried in history, and most of us never know. We constantly try to reinvent wheel, because most of the time, it´s fun. It´s much more fun to invent something creative than reading up on some papers dated back to the 1970s, which might already contain the answers we are looking for.

And nobody pays us to read papers anyways, right?

Did you know who coined the term "Object Orientation"? It was Alan Kay back at Xerox PARC. A lot of goodness came out of that time.

But there is one thing that Alan Kay regrets.. to have named it "Object".

And I agree, it was a big mistake ( similar to the billion dollar nullpointer error by Tony Hoare ), but who could have known?

The argumentation has astounding relevance for us today.

Smalltalk is not only NOT its syntax or the class library, it is not even about classes. I'm sorry that I long ago coined the term "objects" for this topic because it gets many people to focus on the lesser idea. The big idea is "messaging"

Messaging?

How can messaging be more important than the Objects we define and their properties?

Just think for a second how you typically design Systems. The first thing most developers do is to define the base objects we could need.

Customer with attributes "name", "email" and the corresponding Tables.

Order with attributes "order-id", "price" and the corresponding Tables.

We naturally focus on structure and Objects, because we learned it that way. How is that all wrong now?

The key in making great and growable systems is much more to design how its modules communicate rather than what their internal properties and behaviors should be.

Somehow it makes sense, but sounds a bit impractical, doesn´t it?

Let´s dig a little further, what Alan Kay has to say.

If you focus on just messaging - and realize that a good metasystem can late bind the various 2nd level architectures used in objects - then much of the language-, UI-, and OS based discussions on this thread are really quite moot.

That´s a bit harder to understand, what does he mean by that? He is talking about Flexibility.

If your system is based on messaging and late binding, then:

It doesn't matter if part of it is in Java, another in Python, another on iOS or Linux.
It doesn't matter what UI toolkit is used internally.
It doesn't matter what OS is running underneath.

Late binding is nothing but a defined protocol that the parts in a system can use to communicate - via messaging. Using a defined protocol, the implementation suddenly becomes irrelevant and can be changed at any time. By focusing on messaging, we suddenly talk about behavior, not the implementation.

I think I recall also pointing out that it is vitally important [...] to have fences that help guard the crossing of metaboundaries. One of the simplest of these was [...] the realization that assignments are a metalevel change from functions, and therefore should not be dealt with at the same level - this was one of the motivations to encapsulate these kinds of state changes, and not let them be done willy nilly.

Here is pointing out how clearly defined Module boundaries are vitally important, especially when talking about state changes in the system.

I would say that a system that allowed other metathings to be done in the ordinary course of programming (like changing what inheritance means, or what is an instance) is a bad design.

The architecture of a system should be a guideline of what is possible. A blue-print of "how we do things here".

How is this all important to us today?
It´s not just some stuff an old Dude said 27 years ago ( the letter is from 1998 ). It´s recipe for good system design, and we follow this recipe with Event Modeling to the Letter. Let me elaborate.

Event Modeling is all about information Flow. How does a piece of information travel through the system, and what are we doing with it? In Event Modeling we describe all this using Messages - Commands and Events.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/messaging-lesson-history-1.png' | relative_url }}" alt="Event Modeling focuses on messaging">
</div>

We never talk about Implementation, we only focus on the Modules in the system ( Slices ) and how they interact with each other using Commands and Events.

And Event is nothing but a message between Slices, it´s the protocol that allows us to design systems in a flexible way - Slice by Slice.

The only place in the whole process where an "Object" comes into play is when we start to think about "Aggregates" typically. But we defer this as long as humanly possible, because it simply isn´t that important. It´s much more important to get the message- and information-flow right.

I love that Alan Kay is talking about "Growable Systems", that´s exactly what architectures struggle with today. Slices are a way out. We can simply add and remove Slices at will without impacting the rest of the system. Because we focus on the messages in between instead of the objects themselves.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/messaging-lesson-history-2.png' | relative_url }}" alt="Growable systems through slices">
</div>

If you nail the information flow, messing up the system becomes incredibly hard. ( for many systems today, it´s incredibly hard NOT to mess it up )

Sometimes it´s hard to see the forest for the trees. We know how to design flexible systems, and we know it for about 60+ years. We simply seem to constantly forget what we´ve learned.

It has never been more important to design flexible and growable systems - the rate of change has never been higher than today, so we can no longer build these rigid systems, that are hard to change. Embracing change, on a daily basis with short cycles is non-negotiable. And for me, starting this using Event Modeling seems to be the best way we currently have.

What´s your thoughts on this?

The letter by Alan Kay can be found here: https://wiki.c2.com/?AlanKayOnMessaging

By the way, there is a full 2 hours recording of a webinar I gave just recently. It shows the whole process. If you are interested in the recording, just comment "RECORDING".

If your Team wants to explore, if Event Modeling is the right way - I have 3 Slots left in June in for my "Planning Software with Event Modeling" Workshop.

Get a clear picture of the information flow in your system and how it actually works under the hood - you´ll find a 15 Minute Video ( in german ) explaining the details here:

https://forecasts.nebulit.de/

I offer 45-Minute Workshops with Teams at no charge, if you want to learn a bit more about it. Just get in touch by E-Mail to info@nebulit.de or send me a message on LinkedIn ( make sure to follow me, so I can answer! )

<div class="info-box" markdown="1">

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

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