---
layout: docs
title: Event Modeling FAQ - Frequently Asked Questions
description: Find answers to the most common questions about Event Modeling, system design, collaboration, and implementation best practices.
keywords: event modeling faq, event modeling questions, software modeling, event storming, collaborative modeling, system design
author: Martin Dilger
---

<div class="hero">
  <h1>Event Modeling FAQ</h1>
  <p class="subtitle">"We achieved everything from DDD without doing DDD" - Adam Dymitruk</p>
</div>

<div class="notification is-info is-light has-text-centered" style="margin: 2rem 0;">
  Have a question you'd like to see answered here? <a href="https://tally.so/r/wkZ0r1" target="_blank">Submit your question</a> and we'll add it to this FAQ (anonymously if you prefer).
</div>

<section class="faq-section" markdown="1">

On this page, we answer the most important questions about Event Modeling. Best of all, you can submit your own questions and they will be published here (anonymously if you wish).

## Common Questions

### Why should I learn Event Modeling?

Event Modeling provides several key benefits:

1. **Clear Communication**: Creates a shared understanding between business and technical teams
2. **Complete Blueprint**: Serves as both documentation and specification
3. **Predictable Planning**: Makes estimation and planning much more reliable
4. **Natural Testing**: The model directly translates to test cases
5. **Faster Development**: Reduces ambiguity and rework

Event Modeling helps you build the right thing, not just build things right.

### Do you need Event Sourcing for Event Modeling?

No, Event Sourcing is not required for Event Modeling. Event Modeling is a specification and design technique that works with any architecture:

- **With Event Sourcing**: The model maps naturally to implementation
- **Without Event Sourcing**: The model still provides clarity and direction
- **Hybrid Approach**: Use Event Sourcing for parts that benefit most

Event Modeling is about understanding and designing systems. Event Sourcing is one way (the most natural way) to implement what you've modeled.

### What does the term "Projection" mean in Event Modeling?

A projection is the process of building a read model from events. Think of it as:

- **Input**: Stream of events (things that happened)
- **Process**: Projection logic (how to interpret events)
- **Output**: Read model (current state for queries)

For example, a "ShoppingCartView" projection listens to "ItemAdded" and "ItemRemoved" events to show the current cart contents. The projection is the automated process that keeps the view synchronized with events.

### Must Command content equal Event content?

No, they serve different purposes:

- **Commands**: Represent intent ("I want to do this")
- **Events**: Represent facts ("This happened")

A command might be rejected, modified, or trigger multiple events. For example:
- Command: "PlaceOrder" with customer ID, items, and payment method
- Events: "OrderPlaced", "PaymentProcessed", "InventoryReserved"

Commands are validated and can fail. Events are immutable facts that succeeded.

### What is the Information Completeness Check?

The Information Completeness Check ensures that all data needed for a decision is available in your model. For each command handler (decision point), verify:

1. **Input Data**: Is all required information captured in the UI or previous events?
2. **Business Rules**: Can all validation logic be executed with available data?
3. **Output Events**: Do the resulting events contain complete information?

If data is missing, you've found a gap in your model. This check prevents incomplete specifications.

### Can a command generate multiple events?

Yes, a single command can result in multiple events. This is common when one action has multiple consequences:

- "PlaceOrder" → "OrderPlaced" + "InventoryReserved" + "PaymentAuthorized"
- "CloseAccount" → "AccountClosed" + "NotificationSent" + "DataArchived"

Each event represents a distinct fact that occurred. Multiple events capture the complete story of what happened.

### How are features defined in the Event Model?

Features are defined as vertical slices through the model:

1. **Start with User Intent**: What does the user want to do?
2. **Identify the Flow**: Which screens → commands → events → views?
3. **Mark the Slice**: Highlight all elements needed for this feature
4. **Estimate**: Count the patterns (UI→Command→Event→View)

A feature is everything needed to deliver a complete user capability. This makes features predictable and independently deployable.

### For what kind of applications is Event Modeling NOT suitable?

Event Modeling works best for systems with:
- Business logic and workflows
- Multiple users and interactions
- Need for audit trails
- Evolving requirements

It's less suitable for:
- Pure computational tasks (image processing, machine learning)
- Simple CRUD with no business rules
- Read-only systems
- Real-time streaming without discrete actions

If your system is primarily about transforming data rather than capturing business events, other modeling approaches might be more appropriate.

### What are your experiences with Event Modeling in German or English?

Event Modeling works in any language. The key is using business terminology that stakeholders understand:

- Use the **ubiquitous language** of your domain
- Prefer business terms over technical jargon
- Keep event names simple and clear
- Focus on what happened, not implementation

The visual nature of Event Modeling transcends language - the patterns and structures communicate even across language barriers.

### Does Event Modeling replace Jira?

No, they serve different purposes:

**Event Modeling**:
- Specification and design
- What to build and how it works
- Shared understanding

**Jira**:
- Task tracking and project management
- Who does what and when
- Progress monitoring

Event Modeling creates clarity about requirements. Jira helps you track the work of building those requirements. They complement each other.

### What do you do when you take over existing software?

Use Event Modeling to document and understand existing systems:

1. **Identify User Flows**: What can users do?
2. **Trace Data Flow**: Where does data come from and go?
3. **Map Events**: What significant things happen?
4. **Find Gaps**: Where is logic unclear or undocumented?

This reverse-engineering approach helps you understand legacy systems and identify modernization opportunities. See our [blog post on documenting legacy systems]({{ '/docs/blog/documenting-legacy-systems-event-modeling' | relative_url }}).

### Is there recommended literature?

Essential resources for Event Modeling:

- **[Event Modeling Official Site](https://eventmodeling.org)** - Foundational concepts and patterns
- **[The Event Sourcing Book](https://www.eventsourcingbook.com)** - Comprehensive coverage of Event Modeling and Event Sourcing
- **Our [Blog]({{ '/docs/blog' | relative_url }})** - Weekly articles on practical Event Modeling

Also check out our [Event Modeling Tutorial]({{ '/docs/event-modeling-tutorial' | relative_url }}) for hands-on learning.

### What are the worst hurdles with Event Modeling?

Common challenges when adopting Event Modeling:

1. **Organizational Resistance**: Teams comfortable with existing approaches
2. **Learning Curve**: Understanding the visual language takes time
3. **Tool Setup**: Finding the right collaborative tools
4. **Maintaining Models**: Keeping models synchronized with code
5. **Stakeholder Engagement**: Getting business people involved

Most hurdles are cultural, not technical. Start small, show value early, and build momentum. Read our article on [bringing Event Modeling to your company]({{ '/docs/blog/bring-event-modeling-company' | relative_url }}).

### How do you model the reaction to an event in Event Modeling?

There are two types of reactions:

1. **Automations (Green Slips)**:
   - Event → Automation → Command
   - System reacts automatically to events
   - Example: "OrderPlaced" → "Process Payment" → "SendConfirmation"

2. **Projections (Read Models)**:
   - Events → Projection → Updated View
   - No new commands, just view updates
   - Example: "ItemAdded" → Update Shopping Cart View

The key insight: reactions to events can trigger new commands (automations) or update views (projections). Both are valid and serve different purposes.

</section>

<div class="cta-section" style="margin: 3rem 0; padding: 2rem; background: #f5f5f5; border-radius: 8px; text-align: center;">
  <h3>Ready to start Event Modeling?</h3>
  <p>Try our <a href="{{ '/docs/event-modeling-tutorial' | relative_url }}">Step-by-Step Tutorial</a> or explore the <a href="{{ '/docs/basic-modeling' | relative_url }}">Event Modeling Toolkit</a>.</p>
</div>
