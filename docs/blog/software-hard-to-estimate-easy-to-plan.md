---
layout: docs
title: Software is Hard to Estimate But Easy to Plan
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Software is Hard to Estimate But Easy to Plan</h1>
    <p class="blog-post-subtitle">Accurate and reliable estimation of software has always been a major problem. We can learn from other industries and apply their methods to our tools. This article provides a concrete example.</p>
    <div class="blog-post-meta">
      <span>December 2023</span>
      <span>15 min read</span>
      <span>Software Planning & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/planning-stream2.jpg' | relative_url }}" alt="Software is Hard to Estimate But Easy to Plan">
  </div>

  <div class="blog-post-content" markdown="1">

## The Problem

> _I don't use the word estimation because we don't make estimates._

Houston - we have a problem. _Nobody knows when our software will be ready._

Software projects are expensive and complicated. That's the general consensus.
And most of the time, it's true.

Software is not static, but evolves just like your business model.

Every change hurts. Requirements need to be captured and documented.

Meetings take place, discussions with the business department.

"What should we even implement?" comes from development.

"The same thing that's already there but better" comes from the business side. For most problems in company processes, workarounds have long been established.

Changes to the existing system are always expensive and time-consuming.

Too many side effects, every move requires technical and business know-how.
Changes must go through the complete QA process and even then every release is accompanied by crossed fingers.

Everything feels slow and cumbersome.
And no matter how many refactorings, code cleanups, technical debt sprints are done. The software always becomes more expensive to maintain.

Something doesn't seem to be working with this process.

## The Cause

Software is based on business requirements and creates a model as precise as possible to represent these requirements.

> It's developer's understanding, not your knowledge that becomes software
> (Alberto Brandolini)

The problem is - the model is never complete and never correctly represents all business rules. On top of that, the business is constantly evolving.

New rules, new products, new processes, new ideas.

A business model can change in so many ways.

Now we have a model that's already incomplete and need to extend it with new business rules that were never intended. The result?

Workarounds and thus by definition _Technical Debt_

The term _Technical Debt_ is often used to explain a shifted Business/Tech curve.
In fact, every software project goes through this cycle.
The curve shows the productivity of a software team. The longer the software exists, the more unmaintainable and expensive the maintenance becomes.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-productivity-curve.png' | relative_url }}" alt="Productivity Curve">
</div>

Why does this happen again and again?

The fewer features in the software, the fewer features need to be adjusted for the implementation of new features. Features run through development like an assembly line.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-feature1.png' | relative_url }}" alt="Feature Development - Early Stage">
</div>

The more features are implemented, the more adjustments need to be made to existing code to implement new features.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-feature2.png' | relative_url }}" alt="Feature Development - Growing Complexity">
</div>

The success of a software project is the reason for its ultimate demise.

Only successful software is regularly extended. But with every change to existing features, we deviate further from the model that represents the original business requirements. By definition, we're building Technical Debt (or better _Product Debt_).
The software becomes increasingly unmaintainable.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-feature3.png' | relative_url }}" alt="Feature Development - Peak Complexity">
</div>

How do we get out of this dilemma?

This is the fundamental problem in software development.
And we work against it with all our might.

Is there even a way out?
Let's take a step back. What makes other industries so successful?

## The Price

Let's take a carpenter (the example works for any industry.)
What makes a carpenter successful?

A carpenter can say relatively accurately what a certain piece of furniture will cost. The carpenter has made this type of furniture hundreds of times in their 20 years as a carpenter.
Every move is practiced, as the moves repeat again and again.

The moves are now perfected.

The price of the piece of furniture is determined by this simple formula:

> Price = (Time*Rate + Material)*Factor

The price results from the time invested and the hourly rate + the material. At the end, the carpenter multiplies this by a factor to get their price.

So if the carpenter needs 10h and works for ¬75 per hour, the time cost is ¬750.
Material costs of ¬300 and a factor of 1.3 gives a total price of ¬1365 for the piece of furniture.

Why doesn't this work for software projects?

The individual work steps are very individual (at first glance). From the business requirements on the system, rough requirements for the software can usually be derived, but never precisely enough to determine a price from them.
For this reason, many projects work with T-shirt sizes and abstract story points. It just doesn't get more precise... or does it?

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-shirts.png' | relative_url }}" alt="T-Shirt Sizing">
</div>

Deriving a price or even just the effort from a rough estimate makes little sense.
Of course, you can roughly calculate from a team's velocity how fast an "XL" can be implemented. However, due to the productivity curve, this estimate becomes increasingly difficult to make.

The carpenter always needs roughly the same time for a piece of furniture. The more pieces of furniture are made, the more accurate this estimate becomes until it eventually fits almost perfectly.

This accuracy cannot be achieved with the current approach to software development projects. The dynamics are simply too great.

In an ideal world, instead of the previously presented productivity curve, we would see a linear productivity line.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-feature4.png' | relative_url }}" alt="Ideal Linear Productivity">
</div>

## Agile Development Doesn't Solve This

Our industry has tried in many ways to solve exactly this problem.

Agile development with Scrum and Kanban was the last big revolution (AI is probably the next one.)

But even here, this problem wasn't solved.

We still develop with Scrum the same models that fail at the same fundamental problem.
With agile work, we just know faster that it doesn't work and we can possibly make adjustments.
We postpone the inevitable (I'm deliberately exaggerating slightly.)

Maybe it's just not solvable?

In most projects I've been allowed to accompany so far, agile work is more decorative than a driving force.
Agile work is all well and good, as long as we deliver everything in the end. By definition, this is most likely not the case. With agile work, we only guarantee that we deliver the most important things in the end, not necessarily all of it.

The agile fixed-price project is still the great exception rather than the rule.
It's simply difficult to implement and associated with enormous (financial) risk.

## Domain Driven Design Doesn't Solve This (Completely)

The efforts around Domain Driven Design and the definition of **Bounded Contexts**, **Aggregates** and the **Ubiquitous Language** essentially try to limit the size of these _wrong_ models and thus keep the impact on the overall system as minimal as possible.

And this approach is fundamentally correct.

And the models get better as a result. Domain Driven Design applied correctly makes a system better, that's certain. But by consistently applying Domain Driven Design alone, we don't solve the fundamental problem of software development.

Even in a _smaller_ context, models become outdated over time due to new business requirements. Even in a _smaller_ context, we must _adapt_ existing features by implementing new features and thereby continually build up technical debt.

The problem is still there, it's just more manageable.

## What Can We Do Better?

The future of software development looks like this in my opinion:

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-future.png' | relative_url }}" alt="The Future of Software Development">
</div>

We spend most of our time on clear modeling of the software.
And that with a defined language for all stakeholders.

The tool for this is [Event Modeling](https://eventmodeling.org).

The Event Model is simultaneously complete documentation, requirements document, and implementation instructions.
Here we find chronologically all actions that our business performs to generate profits.

And not in text form. If the last few years have proven one thing, it's that pure text is unsuitable.

### Who Creates the Diagram?

Initially, everyone together in an initial workshop. And this includes CTO and/or CEO (at least in parts.)

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-group.png' | relative_url }}" alt="Workshop Team">
  <p class="image-caption">The diagram is created by everyone in 1-2 days.</p>
</div>

Development, business, technical side, marketing, editorial. We need everyone.

The requirements for a software project can be determined in 1-2 days in an _Event Modeling_ workshop.
Depending on the size, an afternoon can be enough to determine the first requirements in such a level of detail that implementation can begin directly.

> This method is also excellent for documenting and validating the requirements of an existing system. Errors in the modeling become quickly visible.

## What's Behind It?

**Every** software is based on this model.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-wave.png' | relative_url }}" alt="The Universal Software Pattern">
</div>

This is how the world works and this is how every business works.

Every software goes from an **old state** to a **new state** through an **action**. Again and again.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-eventmodelling.png' | relative_url }}" alt="Event Modeling Basics">
</div>

_Event Modeling_ formalizes this format and defines a simple language to map this model to a software system.

The building blocks are _Commands_ (blue), _Events_ (orange) and _Data (Read Models)_ (green).

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-baustein.png' | relative_url }}" alt="Event Modeling Building Blocks" style="width:350px">
  <p class="image-caption">Event Modeling Building Blocks</p>
</div>

### Commands

Commands are actions that cause a change in the system. Every method of an API can in principle be considered a _Command_.

### Events

Events (business events) are _always_ the result of a _Command_ and are facts that happened in the system. We formulate _Events_ in the past tense, because they "happened". History. Immutable and in the past.

### Read Model

Read Models are dynamic models that can be generated from Events. Unlike the model described above, however, a Read Model is lightweight. Refactorings on Read Models are rarely necessary. Usually, rewriting in a few hours makes more sense.

## These 3 Techniques Form the Foundation of Our Development

Besides _Event Modeling_, the two established industry practices _CQRS_ and _Event Sourcing_ are the main tools in our toolbox.

There is no persistent model. The only _visualization_ happens through the Event Model.

## What Does Such a Diagram Look Like?

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-modell.png' | relative_url }}" alt="Event Model for an Online Shop">
  <p class="image-caption">An Event Model for an online shop</p>
</div>

The Event Model is the story of our system. And it can be read from left to right like a book. The model serves as _documentation_, _requirements document_ and _onboarding accelerator_.
Imagine coming into a new project and getting the diagram with which you can simply read through the system.

So much better than a Confluence page.

Once the model is defined, implementation is just mapping the model into code.

### What Does This Have to Do with the Carpenter

Here we come back to the original metaphor of the carpenter. The carpenter can determine their price relatively accurately because they have performed the individual work steps hundreds of times.
The Event Model naturally breaks down our software into the smallest possible meaningful work packages of the previously defined model. **The software is broken down into slices**.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/planning-slices.png' | relative_url }}" alt="Software Slices">
  <p class="image-caption">Software Slices</p>
</div>

Each slice defines a work step. And each of these slices is on average roughly the same size.
If we have now implemented enough slices, this gives us a pretty accurate picture of how long we need for each work step. _We become the carpenter_. At least as far as planning accuracy is concerned. _I don't use the word estimation because we don't make estimates._

And we don't need abstract estimation sizes for this.

We work on a clear basis, but unlike agile estimation with actually comparable sizes - the slices.
We don't need abstract reference stories either. Slices are the perfect tool for planning software with amazing precision.

The software is 30% complete when about 30/100 slices are done. No gut feeling. Clear numbers and facts.

Do you think this would work in your project too?
I'm convinced it would, I haven't found a project yet where this doesn't work.

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**Still 2 Team-Spots left for the [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"} this month.**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning ’](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
