---
layout: docs
title: Event Modeling
---

Event Modeling is a visual methodology for designing event-driven systems. This guide introduces the core concepts and principles.

## What is Event Modeling?

Event Modeling is a method of describing systems using an example of how information has changed within them over time. It focuses on:

- **Events**: Things that have happened in the system
- **Commands**: Actions that trigger events
- **Views**: Read models that display information
- **State**: The current condition of the system

## Core Principles

### 1. Events are Facts

Events represent immutable facts about what has happened in the system:

- Written in past tense (e.g., "Order Placed", "Payment Processed")
- Cannot be changed or deleted
- Include a timestamp
- Contain all relevant data about what occurred

### 2. Commands are Intentions

Commands represent the intention to do something:

- Written in imperative form (e.g., "Place Order", "Process Payment")
- Can be rejected if business rules aren't satisfied
- Trigger one or more events when successful

### 3. Views Display State

Views (Read Models) show the current state of the system:

- Derived from events
- Can be rebuilt at any time
- Optimized for specific queries

## The Event Modeling Pattern

Event models follow a specific visual pattern:

```
[Command] → [Business Logic] → [Event(s)] → [View/Read Model]
```

### Example: E-commerce Order Flow

1. **Command**: "Place Order"
2. **Business Logic**: Check inventory, validate payment method
3. **Event**: "Order Placed"
4. **View**: Order confirmation screen showing order details

## Key Components

### Events (Orange)

Events are the core building blocks:

- Represent state changes
- Store business data
- Enable audit trail
- Support temporal queries

**Example Event**:
```json
{
  "eventType": "OrderPlaced",
  "orderId": "12345",
  "customerId": "C789",
  "items": [...],
  "totalAmount": 99.99,
  "timestamp": "2025-01-15T10:30:00Z"
}
```

### Commands (Blue)

Commands initiate actions:

- Validate business rules
- Authorize operations
- Trigger event creation

**Example Command**:
```json
{
  "commandType": "PlaceOrder",
  "customerId": "C789",
  "items": [...],
  "shippingAddress": {...}
}
```

### Views (Green)

Views present data to users:

- Query-optimized
- Eventually consistent
- Can aggregate multiple events

## Timeline Organization

Event models are organized along a timeline:

1. **Left to Right**: Time flows from past to future
2. **Vertical Slices**: Group related commands, events, and views
3. **Swim Lanes**: Separate different user roles or systems

## Benefits of Event Modeling

### For Business Stakeholders

- Visual and easy to understand
- Captures business processes accurately
- Facilitates discussion and validation

### For Developers

- Clear implementation blueprint
- Natural fit for event sourcing
- Supports parallel development

### For the Organization

- Single source of truth
- Living documentation
- Supports iterative refinement

## Event Storming vs Event Modeling

While related, these are distinct approaches:

| Aspect | Event Storming | Event Modeling |
|--------|---------------|----------------|
| Purpose | Discovery | Design |
| Output | Rough model | Detailed specification |
| Participants | Large groups | Core team |
| Artifacts | Sticky notes | Structured diagrams |

## Best Practices

1. **Start with the happy path**: Model the main flow first
2. **Use consistent naming**: Follow naming conventions
3. **Include timestamps**: Track when events occur
4. **Keep events atomic**: One event = one state change
5. **Document business rules**: Capture validation logic

## Common Patterns

### Saga Pattern

Coordinate multiple events across boundaries:
- Start event triggers process
- Compensation events handle failures
- Final event marks completion

### Process Manager

Manage long-running business processes:
- Track process state
- Coordinate multiple aggregates
- Handle timeouts and retries

## Next Steps

Ready to create your first event model? Continue to:

- [Basic Modeling](basic-modeling) - Create your first event model
- [Advanced Modeling](advanced-modeling) - Learn advanced techniques
