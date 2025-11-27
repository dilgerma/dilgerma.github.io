---
layout: docs
title: "Eventsourcing: Dynamic Consistency Boundary"
---

<div class="blog-post">
  <a href="{{ '/docs/blog' | relative_url }}" class="blog-back-link">&larr; Back to Blog</a>

  <div class="blog-post-header">
    <h1>Eventsourcing: Dynamic Consistency Boundary</h1>
    <p class="blog-post-subtitle">Understanding eventsourcing without aggregates</p>
    <div class="blog-post-meta">
      <span>October 2023</span>
      <span>10 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-content">

# Eventsourcing – Dynamic Consistency Boundary

Last week in Episode #1 of the **"Eventmodeling & Eventsourcing" Podcast**, we briefly touched on the **"dynamic consistency boundary"** – which is Eventsourcing **without aggregates**.

This sparked a bigger discussion in the community Discord.

When I first learned about this new concept, my first thought was:

> *"This can't work."*

Well... I changed my mind. Will you?

Let's dive deeper into this topic and find out what it's about.

---

## What is a Dynamic Consistency Boundary?

The basic idea is simple:

> **"To build eventsourced systems, you don't need Aggregates."**
> What would happen if we just skipped them?

Before you cry _"That's nonsense!"_ (that's exactly what I did when I first heard about it) – hear me out.

Let's quickly define what an **aggregate** is:

> A group of objects forming a transactional and consistency boundary.

### Example: Order Aggregate

A simple example – you have an order, which contains:

- payment information
- order line items
- maybe discounts

Using the aggregate, you don't access the line items directly, but only through the **aggregate-root** object (which is the Order).

This design encourages encapsulation and consistency. But in eventsourcing, the aggregate became **the** tool to enforce consistency.

> A stream of events is typically accompanied by an aggregate to protect the consistency within this stream.

---

## Car Rental Example

Let's take a simple and relatable domain: a car rental system.

A car gets rented, picked up, and later returned.

Whenever someone tries to rent a car, we need the system to be **consistent**.
Otherwise, the same car might get accidentally reserved by two people at the same time – definitely ruining someone's vacation.

The aggregate ensures consistency by applying **optimistic locking** on the event stream, checking if someone else made changes we haven't seen yet.

This is the same idea behind **git version control**:
If git didn't check for team changes, every push would be a "force push." Good luck with that.

---

## The Problem with Multiple Streams

Now it gets trickier when working across **multiple event streams**.

Let's say we don't just want a car, but also a **bike** for our vacation.

Our initial design might use **two separate aggregates**:

- Car Rental
- Bike Rental

To reserve both atomically, both aggregates must be consistent. But what if:

- Someone else reserves another car?
- Someone else blocks all bikes?

We now need to apply **two transactions** for one operation – and either could fail.

---

## A Dynamic Approach

The idea behind **Dynamic Consistency Boundary (DCB)** is to get rid of the static "Car" and "Bike" aggregates and rely on **facts** in the system.

- Has the car been rented? No → it's available.
- Are the bikes available? No → too bad, don't rent the car either.

### Enter the Command Handler

What if we just gave all the **events** to a **command handler**?

The handler could make a decision *based solely on events*.
The problem? How do we enforce consistency *without* aggregates?

> It's a **technical problem**, not a conceptual one.

---

## Conditional Append

Sara Pellegrini's blog introduces the concept of **conditional append**.

It adds an index-like mechanism to the event store.
Each **command handler defines its consistency boundaries dynamically**.

I forked an example implementation and simplified it. You'll find the link below.

---

## Step-by-Step

The handler for `rent-car` now works in two steps:

1. Define **criteria** – a set of indices on different event streams.
2. Load events that match these criteria and build the dynamic state.

For example:

- All `CarRented` events for the given car ID
- All `BikeRented` events for the given bike ID

Now we execute the logic:

- Ensure **neither** the car **nor** the bike is already rented.
- Store the event using the DCB-enabled eventstore.
- Apply indices (tags) as metadata to the event.

---

## Conflict Detection

The **eventstore** plays a critical role now.

It defines a `consistencyCondition`, checking:

- Were there **new events** added **after** our read?
- Do they **match** any of the indices we used?

If yes → **conflict**, reject write.
If no → all good, apply the event.

---

## Benefits

- Define constraints for consistency **per command handler**.
- Rent a car and bike **atomically**, without modeling complex aggregates.
- Less rigid design – more flexibility.

Yes, you can mimic this with aggregates, but it takes extra steps.

> This is just my understanding. I haven't used it in a real project yet.
> But I find it very compelling – and I'm glad I gave it a chance.

Will the final implementations look like this? I don't know.
But I **can't wait** to try.

---

## What Do You Think?

Let me know! Just reply to this email. One sentence is enough.

---

### 🔗 Links

- 🎙️ Eventmodeling & Eventsourcing Podcast
- 📘 [Understanding Eventsourcing Book](https://leanpub.com/eventmodeling-and-eventsourcing)
- 📘 [Event Sourcing Online Course - finally understand it](https://www.eventsourcingcourse.com)

---

👉 [Subscribe to the newsletter](#)
👉 [Listen to the podcast](#)

  </div>
</div>
