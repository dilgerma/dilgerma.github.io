---
layout: docs
title: Event Sourcing FAQ - Frequently Asked Questions
description: Find answers to the most common questions about Event Sourcing, CQRS, versioning, performance, and best practices.
keywords: event sourcing faq, event sourcing questions, CQRS, event versioning, event sourcing performance, event sourcing patterns
author: Martin Dilger
---

<div class="hero">
  <h1>Event Sourcing FAQ</h1>
  <p class="subtitle">"We achieved everything from DDD without doing DDD" - Adam Dymitruk</p>
</div>

<div class="notification is-info is-light has-text-centered" style="margin: 2rem 0;">
  Have a question you'd like to see answered here? <a href="https://tally.so/r/wkZ0r1" target="_blank">Submit your question</a> and we'll add it to this FAQ (anonymously if you prefer).
</div>

<section class="faq-section" markdown="1">

On this page, we answer the most important questions about Event Sourcing. Best of all, you can submit your own questions and they will be published here (anonymously if you wish).

<div class="notification is-success is-light" style="margin: 2rem 0;">
  <i class="fa-regular fa-lightbulb"></i><span style="margin-left: 0.5rem;"> Questions will be answered progressively on this page.</span>
</div>

## Common Questions

### What is CQRS and does it necessarily belong with Event Sourcing?

CQRS (Command Query Responsibility Segregation) is a pattern that separates read and write operations in a system. While CQRS and Event Sourcing work exceptionally well together, they are independent patterns. You can use Event Sourcing without CQRS, and you can use CQRS without Event Sourcing.

However, Event Sourcing naturally leads to CQRS because:
- Events form the single source of truth (write side)
- Read models are built from events (read side)
- This separation enables optimized queries without compromising write integrity

### How does Event versioning work?

Event versioning is about handling schema evolution in your event store. There are several approaches:

1. **Upcasting**: Transform old event versions to new versions when reading
2. **Multiple Handlers**: Support multiple event versions in your code
3. **Copy & Transform**: Create migration processes to transform old events
4. **Weak Schema**: Use flexible event structures that can evolve

The key is to never modify historical events - they represent immutable facts that occurred in the past.

### How large should events be?

Events should contain all information needed to represent a meaningful business fact. The size isn't as important as the semantic meaning:

- **Too small**: "FieldChanged" events make it hard to understand business intent
- **Too large**: Bundling unrelated changes makes events hard to consume
- **Just right**: "OrderPlaced" with all relevant order details

Think in terms of business meaning, not technical size constraints. An event represents something that happened - make sure it tells that story completely.

### How performant is Event Sourcing?

Event Sourcing is highly performant when implemented correctly:

**Writes**: Append-only writes are extremely fast (no updates or deletes)
**Reads**: Read models can be optimized for specific queries
**Scalability**: Event stores scale horizontally very well

Common performance optimizations:
- Use snapshots to avoid replaying thousands of events
- Cache read models
- Use eventual consistency where real-time isn't needed

### How do you generate sequences in Event Sourcing?

Sequences (like order numbers) can be handled in several ways:

1. **Natural IDs**: Use business-meaningful identifiers (email, account number)
2. **UUIDs**: Generate globally unique identifiers
3. **Reservation Pattern**: Reserve a sequence number as part of your command
4. **Dedicated Aggregate**: Create a sequence generator aggregate

The reservation pattern works well for user-visible sequences: reserve the number first, then use it in your command.

### How do you delete in Event Sourcing?

You don't delete events - you model deletion as a business event:

- **Soft Delete**: Emit an "AccountClosed" or "OrderCancelled" event
- **GDPR Compliance**: Use encryption and delete the key, or use specific tombstone events
- **Projections**: Update read models to reflect deletion

Remember: deletion is a business action that happened at a point in time. Capture that fact as an event.

### What are Passive-Aggressive Events?

Passive-Aggressive Events are events named as commands rather than facts:

- **Passive-Aggressive**: "CreateUser", "UpdateOrder", "DeleteAccount"
- **Proper Events**: "UserCreated", "OrderUpdated", "AccountDeleted"

Events should be in past tense and describe what happened, not what should happen. This distinction is crucial for understanding event-driven systems.

### How do you implement unique constraints with Event Sourcing? Reservation Pattern?

Unique constraints require coordination. Common approaches:

1. **Reservation Pattern**:
   - Reserve the unique value before using it
   - If reservation succeeds, proceed with the operation
   - If it fails, reject the command

2. **Aggregate Design**:
   - Make the unique value the aggregate ID
   - Natural uniqueness through ID constraints

3. **Eventually Consistent Check**:
   - Allow duplicates temporarily
   - Detect and resolve them asynchronously

The reservation pattern is most common: treat the unique constraint as a resource that must be reserved.

### Is there recommended literature?

Yes, here are some essential resources:

- **[Versioning in an Event Sourced System](https://leanpub.com/esversioning)** by Greg Young
- **[The Event Sourcing Book](https://www.eventsourcingbook.com)** - Comprehensive guide to Event Sourcing and Event Modeling
- **[Event Sourcing Patterns](https://eventmodeling.org)** - Community resources and patterns

Check out our [blog]({{ '/docs/blog' | relative_url }}) for practical articles on Event Sourcing implementation.

</section>

<div class="cta-section" style="margin: 3rem 0; padding: 2rem; background: #f5f5f5; border-radius: 8px; text-align: center;">
  <h3>Want to learn more?</h3>
  <p>Explore our <a href="{{ '/docs/event-modeling' | relative_url }}">Event Modeling Toolkit</a> or check out <a href="https://www.eventsourcingbook.com" target="_blank">The Event Sourcing Book</a>.</p>
</div>
