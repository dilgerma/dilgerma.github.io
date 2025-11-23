---
layout: docs
title: Aggregate View
---

# Aggregate View

The Aggregate View gives you a quick overview of the currently defined Aggregates (or Streams) and which Events belong to them.

![Aggregate View]({{ '/assets/images/tutorial/model_view/105.png' | relative_url }})

## What are Aggregates?

In Event Modeling and Domain-Driven Design, an **Aggregate** is:
- A cluster of domain objects (entities and value objects)
- A consistency boundary for business rules
- The unit that receives commands and produces events
- A transactional boundary in event-sourced systems

Aggregates are also sometimes called **Event Streams** in event-sourced systems.

## Understanding the Aggregate View

The Aggregate View displays:

**Aggregate Names**
- All defined aggregates in your model
- Organized by bounded context
- Shows aggregate hierarchy

**Associated Events**
- Which events belong to each aggregate
- Event sequence within the aggregate
- Event relationships

**Quick Navigation**
- Click to jump to aggregate on the board
- Filter by context or aggregate type
- Search for specific aggregates

## Aggregate Patterns

### Single Aggregate

The simplest pattern - one aggregate handling related events:

```
Aggregate: User
Events:
├── UserRegistered
├── UserEmailVerified
├── UserProfileUpdated
├── UserPasswordChanged
└── UserDeactivated
```

**Characteristics:**
- All events relate to a single user entity
- Consistency maintained within aggregate boundary
- Commands operate on one user at a time

### Aggregate with Child Entities

Aggregates can contain child entities:

```
Aggregate: Order
Events:
├── OrderPlaced
├── OrderItemAdded
├── OrderItemRemoved
├── OrderItemQuantityChanged
├── OrderShipped
└── OrderCompleted
```

**Characteristics:**
- Root entity (Order) + child entities (OrderItems)
- All changes go through the root
- Children don't exist outside the aggregate

### Multiple Aggregates in a Context

Related aggregates in the same bounded context:

```
Context: E-Commerce

Aggregate: Product
├── ProductCreated
├── ProductPriceChanged
└── ProductDiscontinued

Aggregate: Inventory
├── InventoryRestocked
├── InventoryReserved
└── InventoryReleased

Aggregate: Order
├── OrderPlaced
├── OrderConfirmed
└── OrderCancelled
```

**Characteristics:**
- Each aggregate has clear boundaries
- Aggregates communicate via events
- No direct references between aggregates

## Common Aggregate Structures

### User Aggregate

```
Aggregate: User
├── UserRegistered
├── UserEmailVerified
├── UserProfileUpdated
├── UserPasswordChanged
├── UserRoleAssigned
├── UserRoleRevoked
└── UserDeactivated
```

**Purpose:** Manage user lifecycle and authentication

### Order Aggregate

```
Aggregate: Order
├── OrderPlaced
├── OrderItemAdded
├── OrderItemRemoved
├── OrderPaymentReceived
├── OrderShipped
├── OrderDelivered
├── OrderCancelled
└── OrderRefunded
```

**Purpose:** Handle order processing and fulfillment

### Account Aggregate

```
Aggregate: Account
├── AccountOpened
├── MoneyDeposited
├── MoneyWithdrawn
├── AccountOverdrawn
├── AccountSuspended
└── AccountClosed
```

**Purpose:** Manage financial account transactions

## Aggregate Design Principles

### 1. Consistency Boundaries

**Within Aggregate (Strong Consistency)**
```
Order Aggregate:
- OrderPlaced → immediately sets order total
- OrderItemAdded → immediately updates total
- Guaranteed consistent within transaction
```

**Between Aggregates (Eventual Consistency)**
```
Order Aggregate publishes OrderPlaced event
→ Inventory Aggregate listens (separate transaction)
→ Eventually processes InventoryReserved event
```

### 2. Size and Scope

**Too Small (Anti-pattern)**
```
❌ OrderHeader Aggregate
❌ OrderItem Aggregate
❌ OrderTotal Aggregate
(Should be one Order Aggregate)
```

**Too Large (Anti-pattern)**
```
❌ Customer Aggregate containing:
   - User profile
   - All orders
   - Payment methods
   - Shipping addresses
   - Loyalty points
(Should be split into separate aggregates)
```

**Just Right**
```
✅ Order Aggregate
   - Order header
   - Order items (children)
   - Order total
   - Order status
```

### 3. Transaction Boundaries

**One Transaction per Aggregate**
- A command affects only one aggregate instance
- Events from one aggregate published atomically
- No distributed transactions within aggregates

**Example:**
```
PlaceOrder Command
→ Affects Order Aggregate (one transaction)
→ Publishes OrderPlaced event
→ Other aggregates react independently
```

## Using Aggregates Effectively

### Identifying Aggregate Roots

Ask these questions:
1. **What needs to be consistent together?**
   - These elements belong in the same aggregate

2. **What is the transaction boundary?**
   - One command = one aggregate transaction

3. **What has its own lifecycle?**
   - Independent lifecycles = separate aggregates

4. **What is the unit of versioning?**
   - Aggregates are versioned as a whole

### Refactoring Aggregates

**Split Large Aggregates**
```
Before:
Customer Aggregate (too large)
├── CustomerRegistered
├── OrderPlaced
├── PaymentMethodAdded
└── AddressUpdated

After:
Customer Aggregate
├── CustomerRegistered
└── CustomerProfileUpdated

Order Aggregate
├── OrderPlaced
└── OrderCompleted

PaymentMethod Aggregate
├── PaymentMethodAdded
└── PaymentMethodRemoved
```

**Merge Small Aggregates**
```
Before (too fragmented):
OrderHeader Aggregate
OrderLineItem Aggregate
OrderShipping Aggregate

After (cohesive):
Order Aggregate
├── OrderPlaced (header)
├── OrderItemAdded (line items)
└── OrderShippingScheduled (shipping)
```

## Event Streams vs Aggregates

In event-sourced systems, aggregates are persisted as **Event Streams**:

**Event Stream:**
- Append-only log of events
- One stream per aggregate instance
- Stream ID = Aggregate ID

**Example:**
```
Stream: order-12345
├── OrderPlaced (version 1)
├── OrderItemAdded (version 2)
├── OrderItemAdded (version 3)
├── OrderPaymentReceived (version 4)
└── OrderShipped (version 5)
```

**Rebuilding State:**
```
1. Load all events from stream
2. Replay events in order
3. Rebuild current aggregate state
4. Use for command validation
```

## Common Patterns

### Event Sourcing Pattern

```
Command → Aggregate → Events → Event Store
                    → State changes
```

### CQRS Pattern

```
Write Side (Commands):
Order Aggregate → OrderPlaced event

Read Side (Queries):
OrderPlaced event → Order Summary View
                  → Order History View
                  → Analytics View
```

### Saga Pattern

```
Order Aggregate publishes OrderPlaced
→ OrderSaga coordinates:
   1. Reserve Inventory (Inventory Aggregate)
   2. Process Payment (Payment Aggregate)
   3. Confirm Order (Order Aggregate)
```

## Best Practices

### Naming Conventions

**Aggregate Names:**
- Singular nouns (Order, not Orders)
- Business domain terms
- Clear and specific

**Event Names:**
- Past tense verbs (OrderPlaced, not PlaceOrder)
- Describe what happened
- Domain language

### Invariants and Rules

**Enforce at Aggregate Boundary:**
```
Order Aggregate enforces:
✅ Order total matches sum of line items
✅ Cannot ship cancelled order
✅ Cannot add items after shipment
✅ Payment required before shipping
```

**Don't Enforce Across Aggregates:**
```
❌ Order checks if Product exists (separate aggregate)
✅ Order assumes Product exists, handles ProductNotFound event
```

### Command Handling

**Single Aggregate:**
```
PlaceOrder Command
→ Order Aggregate validates
→ Publishes OrderPlaced event
→ One transaction
```

**Don't Modify Multiple Aggregates:**
```
❌ PlaceOrder modifies Order AND Inventory
✅ PlaceOrder modifies Order, publishes event
   Inventory reacts to event separately
```

## Troubleshooting

### Aggregate Not Showing
- Ensure events are properly linked to aggregate
- Check aggregate naming consistency
- Refresh Aggregate View

### Too Many Events in One Aggregate
- Consider if aggregate is too large
- Look for events that belong to different lifecycles
- Split into multiple aggregates if needed

### Events Across Multiple Aggregates
- Review aggregate boundaries
- Ensure events belong to one aggregate
- Use integration events for cross-aggregate communication

## Next Steps

- [Data Trail View](/docs/basic-modeling-topics/data-trail-view/) - Trace data origins
- [Context View](/docs/basic-modeling-topics/context-view/) - View context hierarchies
- [Advanced Modeling](/docs/advanced-modeling/) - Advanced modeling techniques
- [Event Modeling Fundamentals](/docs/event-modeling/) - Core concepts
