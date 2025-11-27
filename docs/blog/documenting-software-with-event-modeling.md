---
layout: docs
title: "Documenting Software with Event Modeling"
---

# Documenting Software with Event Modeling

**One of the most important tools for documenting and developing complex software systems**

*October 2023 • 12 min read • Event Modeling*

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }})

---

![Event Modeling Documentation]({{ '/assets/images/blog/eventmodelling/banner.png' | relative_url }})

I personally believe that with _Event Modeling_, we have one of the most important tools in our hands for documenting and developing complex software systems in recent years.

Why? Because it's so _simple_ and yet it works.

The model was defined by Adam Dymitruk and first described in [this blog](https://eventmodeling.org/posts/what-is-event-modeling/).

In this article, I'll explain what Event Modeling is and why I believe this approach is the right one for documenting and developing maintainable software systems of any size.

## Event Modeling - Building Blocks

Event Modeling is initially a very simple way to describe the functionality of a software system in detail and explicitly includes the factor "time" in the model.

The foundation for this is the simplest model that describes any software.

**Action => Business Logic => Reaction**

Or displayed differently:

Instead of trying to define a model that describes our business model as accurately as possible (and yet inevitably wrong like every model), we initially completely forego defining a "model" and focus on actions, business logic, and reactions.

The building blocks are _Commands_ (blue), _Events_ (orange), and _Read Models_ (green).

## Commands

Commands are actions that cause a change in the system. Every method of an API can in principle be considered a _Command_.

Changes in the system can only occur through Commands.

## Events

Events (business events) are _always_ the result of a _Command_ and are facts that have happened in the past in the system. We therefore formulate _Events_ in the past tense.

Examples are:

**"Order Processed"**

**"Customer LoggedIn"**

**"Process Cancelled"**

## Read Models / Projections

Read Models are simple and dynamic models that are generated from Events.

With Read Models, we provide data for, for example, a UI or automations in the system.
Each UI typically has its own lightweight Read Model.

## An Example

With this technique alone, systems can be described incredibly precisely in a way that both a developer and the business side understand exactly "what", "when", "where" happens in the system.

Let's make an example?

In an ecommerce application, the customer selects a product and adds it to the cart.
So the Command is **Add Product to Cart**

This Command is processed by the system (business logic checks if the product even exists, if we sell it, if it's available).

**The actual implementation doesn't matter. Whether these are microservices, monoliths, serverless workloads... the flow is always the same**

If the Command was processed successfully (and only then), we model the "fact" that a product was added to the cart as an Event (we store nothing more than this fact in the system).

The "reaction" could now in turn be the display of the cart with the newly added product (and the prices). For this we need a simple *Read Model* or a *Projection* for the shopping cart.

The Read Model "calculates" itself from the "facts" (Events) in the system.

Based on this simple example, we see that two products were added, but also one product was removed.
The **Read Model** would therefore only have one product for display.

Correctly displayed, we would have this sequence in the Event Model.

**Important** - the Event Model models time. We can **always** read it from left to right. Arrows never go back.

In addition to Commands, Events, and Read Models, we use UI mockups (hand-drawn or from Figma).

We arrange the Events in swim lanes and thus get a natural grouping (first indications of contexts in the system - the Bounded Context concept from Domain Driven Design).

Through this type of arrangement, a natural division into _Slices_ or _Functional Blocks_ of our business emerges.

Slices usually consist of Command / Command Handler / Event and one or more Read Models.
Slices are work packages that can be processed.

We model business rules using simple **Given-When-Then** Policies in the same model.

For example, here we see the rule that a maximum of 3 products can be added to the shopping cart.

The Event Model is the only place where the complete application including all business rules is visualized. In principle, we have a complete flow diagram including all side effects. So we can simply read the diagram from left to right.

With this we create:

**Always up-to-date documentation**

**Perfect documentation for quick onboarding**

**Common understanding of how the software (and the business) works**

**Natural tasks through Slices (Slices could become User Stories)**

**Documentation of all Business Rules**

## What's Missing?

This article is not about the implementation of the system, but only about documenting the functionality.

For implementing a first use case, the Event Model is already sufficient.

Some patterns are missing that are already described in relatively detail in [Adam Dymitruk's article](https://eventmodeling.org/posts/what-is-event-modeling/).

The implementation of such a system works most easily with **Event Sourcing**, the flow is based most easily on **CQRS** (Command Query Responsibility Segregation).

These concepts mesh seamlessly.

---

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>
