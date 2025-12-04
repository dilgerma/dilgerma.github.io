---
layout: docs
title: "Versioning in Event Sourcing: The Elephant in the Room (And Why It's Not as Scary as You Think)"
---

# Versioning in Event Sourcing: The Elephant in the Room (And Why It's Not as Scary as You Think)

A few days ago, there was a discussion here on LinkedIn about Versioning in Event Sourced Systems.. Also in workshops, this questions comes up again and again. It´s scary to people - and for good reason. It looks so complex, right? Let me show you why it seems complicated, and why it's actually just giving you options to handle complexity that exists everywhere.

## The Deceptively Simple Change

Let's say we're building a todo app. We start simple - an "ItemAdded" event with just two fields: name and description.

![Event Sourcing Versioning - Simple Event](/assets/images/blog/versioning-event-sourcing-01.png)

Then comes the feature request: "We need to notify users when new items are added.

![Event Sourcing Versioning - Feature Request](/assets/images/blog/versioning-event-sourcing-02.png)

The red error shows the problem.. we don´t have the email yet.. Your first instinct? Just add an email field. No big deal, right?

![Event Sourcing Versioning - Adding Email Field](/assets/images/blog/versioning-event-sourcing-03.png)

## When Simple Changes Explode

Here's what actually happens:

Adding the email field is technically possible - you just update the JSON payload. But now every projection that consumes ItemAdded needs to know this field exists.

That´s fine, until the next replay. If you design it right, email is mandatory... it shouldn´t be optional. So you System relies on the email to be available. In case of a replay though, we start with the older Events.. all without email. If you didn´t account for that, you´ll have a Bug in Code ( even though all your tests are green, I suppose )

Suddenly every projection has to parse both the old version (no email) and the new version (with email). Otherwise you get exceptions: "email not available."

The "quick & dirty" fix? Add null checks: if email != null.

But here's the real problem - this knowledge gets lost over time. Six months later, someone looks at the code, sees email is mandatory, thinks "why the null check?" and removes it. We are back at the start.

Everything works fine. Until the next replay destroys everything ( again )

## Option 1: Don´t change anything - just add another Event

Instead of changing the existing Event "Item added", which should be an immutable Fact anyway, we could just add another Event fired by the same command like "Email attached to Item".

This immediately solves all versioning problems, as there is no versioning. Every consumer can now decide if the new Event should be considered or not. This is by far the simplest solution - but brings the danger of polluting the Event Stream with "Property-Sourced" Events.. if we add the Phone Number, we´ll have "Attached PhoneNumber to Item" and so on.

The Pattern you see here is called the "left-chair" and one of my 4 Anti-Patterns.

If the new Event is meaningful, also to a business person, I´ll always choose this option.

## Option 2: Upcasters - The Global Decision Trap

So you think: let's version the events properly. Use an upcaster to transform all V1 events into V2 before they hit your code.

Upcasters are a little piece of Infrastructure between the Event Store and your Event Handlers and Projections. It applies globally across your entire system.

I don´t like upcasters too much.. they force global decisions.

If you make email mandatory and provide a default value, every part of your system has to deal with that default - even the parts that would rather handle nulls their own way. Instead of checking if email != null, you're now checking if isEmailDefault().

It's like a global domain model. It works... until it doesn't.

## Option 3: New Event Versions - Embracing Historical Truth

The next step: introduce "ItemAddedV2" or "ItemAddedWithEmail" (I´m not a big fan of this one.. ) as a completely new event type (with the email field included).

Now projections subscribe to both ItemAdded and ItemAddedV2. Each projection decides how to handle each version independently.

The key insight here: how the old events were handled is part of your history. It's immutable. You never touch that code again. But it´s there if you need to know.

Just by looking at the code, you know exactly how those old events were processed back then. No one will "clean up" that handlers and break your replay.

## The Temporal Coupling Problem

But new event versions come with their own downside: temporal coupling.

When you switch to ItemAddedV2, you can't just flip a switch. All your projections need to be updated at the same time - otherwise they stop working. They're sitting there waiting for the old event that never comes again.

This is usually manageable because you control everything internally. But it's still something to plan for.


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The Mitigation: Dual Emission

To mitigate that to a certain extend, you can temporarily emit both events - ItemAdded and ItemAddedV2.

 It gives your projections time to catch up. But you need to take care that your projections can now receive the same "Fact" twice - and they need to handle that properly.

Once all projections have migrated to V2, you stop emitting V1. You control this internally - remove dual emission when everything's ready.

## Another Option: Stream Migration

There's one more option most people don't think about: migrate the entire event stream.

Transform all V1 events to V2 permanently in storage - not at runtime like upcasters, but as a one-time migration.

Some teams do this all the time.. some teams only to clean up after months of changes..

There is still another option which starts to become my GoTo Solution.. but it´s just a mixture of everything discussed.

## The Real Truth: This Complexity Exists Everywhere

Here's what people misunderstand: "Why is this so complicated?"

It´s not that "Event Sourcing is so complicated", it´s that everything is complicated. And honestly, versioning isn't that complicated if you follow some simple rules.

It gets complicated when you work without planning.

In a CRUD system, you face the exact same problems. Literally.. exact the same problem. Adding a field means adjusting all repositories, all SQL scripts, all views. It´s not simpler.. The real difference? No options. You only have global decisions you can make.

Event sourcing at least gives you choices about where to put the complexity.

## Where to Put the Pain

The complexity doesn't disappear, no matter how hard you try - it's part of any system. You just move it where it hurts the least.

When you want to decide between upcasters and new event versions, ask yourself:

How many projections are affected?
How often will this type of change happen?
Can the team handle temporal coupling during deployments?
Is the global constraint from an upcaster acceptable for this specific change?

There's no one-size-fits-all answer. Event sourcing gives you options to handle complexity that CRUD forces you to deal with one way.

## The Takeaway

Versioning in event sourcing isn't rocket science. It's just acknowledging that schema evolution is hard everywhere - and giving you tools to manage it instead of forcing you down one path.

The question isn't "how do I avoid versioning complexity?"

The question is "where do I want to put it?"

Need help adopting Event Sourcing and tackling some of these typical problems in your architecture? I support and work with your team to solve exactly those problems to build flexible and plannable architectures.

Want to dive deeper? Check my Book "Understanding Eventsourcing"

Want to apply the principles of Event Sourcing in practice? Read the Book and do the companion Online Course.

---

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
