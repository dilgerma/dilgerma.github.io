---
layout: docs
title: "Versioning in Event Sourcing: The Elephant in the Room (And Why It's Not as Scary as You Think)"
---

# Versioning in Event Sourcing: The Elephant in the Room (And Why It's Not as Scary as You Think)

One of the most common concerns I hear about Event Sourcing is: "What happens when you need to change your events?" It's often cited as a dealbreaker, a complexity too dangerous to embrace. But here's the truth: versioning isn't an Event Sourcing problem. It's a system design problem that exists everywhere. Event Sourcing just forces you to be explicit about it.

## The Problem: When Events Evolve

Let's start with a simple example. You have an event called "Item Added" with basic information like item name and price. Everything works perfectly. Then business requirements change - you need to capture the customer's email address too.

So you add an `email` field to the "Item Added" event. Simple enough, right?

That's fine, until the next replay. If you design it right, email is mandatory... it shouldn't be optional. So your system relies on the email to be available. In case of a replay though, we start with the older events... all without email. If you didn't account for that, you'll have a bug in code (even though all your tests are green, I suppose).

Suddenly every projection has to parse both the old version (no email) and the new version (with email). Otherwise you get exceptions: "email not available."

The "quick & dirty" fix? Add null checks: `if email != null`.

But here's the real problem - **this knowledge gets lost over time**. Six months later, someone looks at the code, sees email is mandatory, thinks "why the null check?" and removes it. We are back at the start.

Everything works fine. Until the next replay destroys everything (again).

## The Four Options for Handling Event Versioning

Let's explore the four primary approaches to solving this problem. Each has its trade-offs, and the right choice depends on your specific context.

### Option 1: Don't Change Anything - Just Add Another Event

Instead of changing the existing event "Item Added", which should be an immutable fact anyway, we could just add another event fired by the same command like "Email Attached to Item".

This immediately solves all versioning problems, as there is no versioning. Every consumer can now decide if the new event should be considered or not. This is by far the simplest solution - but brings the danger of polluting the event stream with "Property-Sourced" events. If we add the phone number, we'll have "Attached PhoneNumber to Item" and so on.

The pattern you see here is called the "left-chair" and one of my 4 anti-patterns.

**When to use it:** If the new event is meaningful, also to a business person, I'll always choose this option.

### Option 2: Upcasters

Upcasters are infrastructure components that sit between the event store and your handlers, globally transforming older event versions to newer ones. When you read events from the store, the upcaster automatically converts old events to the new schema.

**The advantage:** Your domain code only deals with the latest version.

**The downside:** They force global decisions. All system components must accept the same default values or constraints. Every part of your system has to agree on what an "old event without email" means when converted to the new version.

### Option 3: New Event Types

Introduce versioned events like `ItemAddedV2` with independent projection handling. This preserves historical processing logic - you can still replay old events with the old logic, and new events with new logic.

**The challenge:** This introduces temporal coupling. Projections must migrate simultaneously. You can't have half your projections understanding V2 and half still expecting V1.

### Option 4: Dual Emission

Temporarily emit both old and new event types, allowing gradual projection migration before discontinuing the legacy version.

**The benefit:** This gives you a migration window. You can update projections one by one.

**The complexity:** You're maintaining two parallel event streams for a period, which increases operational complexity during the transition.

## The Central Insight: This Problem Exists Everywhere

Here's what most people miss: **versioning complexity exists everywhere, not just in event sourcing.**

Traditional CRUD systems face identical schema evolution challenges. When you add a column to a database table, what happens to existing rows? What happens to code that was written before the column existed? What happens during deployment when some servers have the new code and some have the old?

The difference is that Event Sourcing doesn't hide this complexity from you. It forces you to make explicit decisions about how to handle it.

Traditional systems offer fewer options - you're often locked into one approach (typically equivalent to Option 2, where the database gives you a default value). Event Sourcing provides flexibility in deciding "where to put the pain" rather than eliminating it.

## Practical Recommendations

1. **Start with Option 1** (additional events) when the new information represents a meaningful business event. This is the simplest and most aligned with event-sourced thinking.

2. **Use Option 2** (upcasters) when you have simple, universal transformations that all parts of the system can agree on.

3. **Consider Option 3** (versioned events) when you need to preserve different processing logic for historical vs. new events.

4. **Reserve Option 4** (dual emission) for complex migrations where you need time to update multiple consumers.

## Conclusion

Yes, event versioning requires thought and planning. But so does any schema evolution in any system architecture. Event Sourcing doesn't create this problem - it just makes you face it directly and gives you more tools to solve it.

The elephant in the room isn't as scary as you think. Once you understand your options and their trade-offs, versioning becomes just another engineering decision, not a showstopper.

What's your experience with event versioning? Which approach has worked best for your use cases?