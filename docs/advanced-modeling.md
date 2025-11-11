---
layout: docs
title: Advanced Modeling
---

Master advanced event modeling techniques for complex systems. Learn patterns, anti-patterns, and best practices for scalable event-driven architectures.

## Advanced Patterns

### 1. Saga Pattern

Sagas coordinate long-running transactions across multiple aggregates or services.

#### When to Use Sagas

- Multi-step business processes
- Distributed transactions
- Compensation required for failures

#### Modeling a Saga

```
[Start Order Process] → [Order Created]
                         ↓
                       [Reserve Inventory]
                         ↓
                       [Inventory Reserved] or [Inventory Unavailable]
                         ↓
                       [Process Payment]
                         ↓
                       [Payment Processed] or [Payment Failed]
                         ↓
                       [Complete Order] or [Compensate: Release Inventory]
```

#### Saga Properties

- **Orchestration**: Central coordinator manages the flow
- **Choreography**: Events trigger subsequent steps
- **Compensation**: Undo actions when failures occur

### 2. Process Manager Pattern

Process Managers maintain state across multiple events and coordinate complex workflows.

#### Components

1. **State Machine**: Tracks current process state
2. **Event Handlers**: React to events
3. **Command Dispatchers**: Issue new commands
4. **Timeouts**: Handle delayed actions

#### Example: Order Fulfillment Process

```
[Order Placed] → [Process Manager Created]
                 ↓
               [Check Inventory] → [Inventory Checked]
                 ↓
               [Authorize Payment] → [Payment Authorized]
                 ↓
               [Ship Order] → [Order Shipped]
                 ↓
               [Process Complete]
```

### 3. Event Sourcing

Store all changes as a sequence of events.

#### Benefits

- Complete audit trail
- Temporal queries (state at any point in time)
- Event replay for debugging
- Multiple read models from same events

#### Modeling Event-Sourced Aggregates

```
Aggregate: BankAccount

Commands:
- Open Account
- Deposit Money
- Withdraw Money

Events:
- Account Opened (initial balance)
- Money Deposited (amount, new balance)
- Money Withdrawn (amount, new balance)
- Withdrawal Rejected (reason)

Current State = Replay all events
```

### 4. CQRS (Command Query Responsibility Segregation)

Separate read and write models for optimal performance.

#### Write Model (Command Side)

- Handles commands
- Enforces business rules
- Emits events
- Optimized for writes

#### Read Model (Query Side)

- Subscribes to events
- Builds denormalized views
- Optimized for queries
- Eventually consistent

#### Modeling CQRS

```
Write Side:
[Place Order] → [Validate] → [Order Placed]

Read Side (multiple views from same events):
[Order Placed] → [Order Summary View]
              → [Customer Order History View]
              → [Inventory Analytics View]
              → [Revenue Reporting View]
```

## Bounded Contexts

### Defining Boundaries

Separate your model into bounded contexts:

1. **Identify subdomains**: Core, supporting, generic
2. **Define context boundaries**: Clear ownership
3. **Model integration points**: How contexts communicate

### Context Mapping

Show relationships between contexts:

- **Upstream/Downstream**: Direction of influence
- **Published Language**: Shared event contracts
- **Anti-Corruption Layer**: Translate between contexts

#### Example: E-Commerce System

```
Contexts:
1. Order Management
2. Inventory
3. Payments
4. Shipping
5. Customer Management

Integration:
[Order Placed] → Published to all interested contexts
[Payment Processed] ← Consumed by Order Management
[Inventory Reserved] ← Consumed by Order Management
```

## Handling Complexity

### 1. Aggregate Design

Define clear aggregate boundaries:

- **Consistency boundary**: What must be consistent together
- **Transaction boundary**: What changes in one transaction
- **Invariants**: Rules that must always be true

#### Example: Shopping Cart Aggregate

```
Aggregate Root: ShoppingCart

Commands:
- Add Item
- Remove Item
- Update Quantity
- Apply Coupon
- Checkout

Invariants:
- Quantity must be positive
- Cart total must be calculated correctly
- Only one active cart per customer
```

### 2. Event Versioning

Handle event schema evolution:

#### Strategies

**1. Upcasting**: Convert old events to new format

```
V1: UserRegistered { email, name }
V2: UserRegistered { email, name, phoneNumber }

Upcaster: Add default phoneNumber to V1 events
```

**2. Multiple Versions**: Support multiple versions

```
UserRegisteredV1
UserRegisteredV2

Handlers support both versions
```

**3. Event Transformation**: Transform at read time

### 3. Temporal Patterns

Model time-based behaviors:

#### Scheduled Commands

```
[Schedule Appointment] → [Appointment Scheduled]
                         ↓
                       [Wait until appointment time]
                         ↓
                       [Send Reminder] → [Reminder Sent]
```

#### Timeouts

```
[Payment Initiated] → Start 5-minute timer
                      ↓
                    [Payment Completed] or [Payment Timeout]
```

### 4. Event Hierarchies

Organize related events:

```
OrderEvent (abstract)
├── OrderPlaced
├── OrderConfirmed
├── OrderShipped
├── OrderDelivered
└── OrderCancelled
```

## Advanced Integration Patterns

### 1. Event Notification

Simple event broadcasting:

```
[Event Occurs] → Publish to Message Bus → Multiple Subscribers
```

### 2. Event-Carried State Transfer

Include full state in events:

```
[Product Updated Event]
- productId
- name
- price
- description
- inventory
- category
- ALL product data

Subscribers don't need to query source system
```

### 3. Event Sourcing + CQRS

Combine patterns for maximum benefit:

```
Write: [Command] → [Validate] → [Event] → Event Store
                                            ↓
Read:  [Event] → [Update Read Model 1]
              → [Update Read Model 2]
              → [Update Read Model N]
```

## Error Handling

### 1. Command Validation Errors

```
[Invalid Command] → [Command Rejected Event]
                    ↓
                  [Error View]
```

### 2. Business Rule Violations

```
[Withdraw Money: $1000]
                    ↓
                  [Check Balance: $500]
                    ↓
                  [Withdrawal Rejected: Insufficient Funds]
```

### 3. Technical Failures

```
[Command] → [Temporary Failure]
            ↓
          [Retry with backoff]
            ↓
          [Success] or [Dead Letter Queue]
```

### 4. Compensation

```
[Book Flight] → [Flight Booked]
                ↓
              [Book Hotel] → [Hotel Booking Failed]
                ↓
              [Cancel Flight] → [Flight Cancelled]
```

## Performance Optimization

### 1. Event Batching

Process multiple events together:

```
Instead of:
[Event 1] → Process
[Event 2] → Process
[Event 3] → Process

Use:
[Events 1,2,3] → Process Batch
```

### 2. Snapshotting

Store periodic snapshots to avoid replaying all events:

```
Event Stream:
E1, E2, E3, E4, E5, [SNAPSHOT], E6, E7, E8

Rebuild state:
Load SNAPSHOT + Replay E6, E7, E8
```

### 3. Read Model Optimization

- Denormalize aggressively
- Use appropriate data stores
- Cache frequently accessed data
- Index for common queries

## Testing Strategies

### 1. Given-When-Then

Test event-driven logic:

```
Given:
  - Account exists with balance $100

When:
  - Withdraw $50 command

Then:
  - Money Withdrawn event with amount $50
  - New balance is $50
```

### 2. Event Replay Testing

```
Given events:
  1. Account Opened ($100)
  2. Money Deposited ($50)
  3. Money Withdrawn ($30)

When: Replay events

Then: Balance = $120
```

### 3. Integration Testing

Test event flow across boundaries:

```
When: Order Placed
Then:
  - Inventory Reserved event
  - Payment Initiated event
  - Notification Sent event
```

## Anti-Patterns to Avoid

### 1. Event Coupling

❌ **Wrong**: Events that require specific handling order

✅ **Right**: Events that can be processed independently

### 2. Anemic Events

❌ **Wrong**: Events with only IDs
```
{ "eventType": "OrderPlaced", "orderId": 123 }
```

✅ **Right**: Events with full context
```
{
  "eventType": "OrderPlaced",
  "orderId": 123,
  "customerId": 456,
  "items": [...],
  "totalAmount": 99.99
}
```

### 3. Event as CRUD

❌ **Wrong**: Direct CRUD mapping
```
UserCreated, UserUpdated, UserDeleted
```

✅ **Right**: Business-meaningful events
```
UserRegistered, UserProfileCompleted, UserAccountSuspended
```

### 4. Large Aggregates

❌ **Wrong**: Huge aggregates that include everything

✅ **Right**: Focused aggregates with clear boundaries

## Advanced Exercise

Model a complete e-commerce order system:

**Requirements**:
- Support multiple payment methods
- Handle inventory across warehouses
- Manage partial shipments
- Support order modifications
- Handle cancellations and refunds
- Track order history

**Include**:
- Multiple bounded contexts
- Saga for order processing
- Event sourcing for order aggregate
- CQRS with multiple read models
- Error handling and compensation

## Next Steps

Apply your advanced modeling skills:

- [Code Generation](code-generation) - Generate production code
- [AI Integration](ai-integration) - Use AI to optimize models
