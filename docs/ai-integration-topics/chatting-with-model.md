---
layout: docs
title: Chatting with Your Model
---

# Chatting with Your Model

Use natural language to ask questions about your event model, get insights, understand complex flows, and receive recommendations through AI-powered conversations.

## Overview

The AI Chat feature provides an intelligent assistant that understands your event model and can:

- Answer questions about flows and interactions
- Explain business logic and patterns
- Identify potential issues or improvements
- Suggest missing events or commands
- Provide implementation guidance

## Getting Started

### Opening the Chat Panel

1. Open your Miro board with an event model
2. Launch the Event Modeling Toolkit
3. Click the **AI Chat** icon (💬) in the toolbar
4. The chat panel opens on the right side

### First Conversation

Try these starter questions:

```
"What does this model do?"
"Explain the order processing flow"
"Are there any missing events?"
"What happens when a user registers?"
```

## Types of Questions

### Understanding Flows

**Ask about specific processes:**

```
User: "Walk me through the checkout process"

AI: Looking at your model, the checkout process follows these steps:

1. Customer clicks "Checkout" → PlaceOrder command
2. PlaceOrder triggers these events:
   - OrderPlaced (order details recorded)
   - InventoryReserved (items locked)
   - PaymentRequested (payment initiated)
3. After PaymentProcessed event:
   - OrderConfirmed event updates Order Status view
   - Email Sent event triggers confirmation email
4. Finally, ShipOrder command begins fulfillment

The flow ensures payment completes before confirming the order,
preventing overselling.
```

**Ask about interactions between components:**

```
User: "How do the User and Order aggregates interact?"

AI: The User and Order aggregates interact through events:

1. When a User places an order:
   - User aggregate: No direct change
   - Order aggregate: Created with userId reference

2. When an Order is completed:
   - OrderCompleted event is published
   - User Profile projection updates orderCount
   - User Loyalty view recalculates points

They're loosely coupled through event-driven communication,
which allows independent scaling and deployment.
```

### Identifying Issues

**Check for completeness:**

```
User: "Is my user registration flow complete?"

AI: Analyzing your registration flow, I found these gaps:

✅ Present:
- RegisterUser command
- UserRegistered event
- User Profile view

⚠️ Missing considerations:
- Email verification flow
  - Suggested: SendVerificationEmail command
  - Suggested: EmailVerified event
- Password reset capability
- Account activation/deactivation
- Duplicate email handling

Would you like me to suggest a complete flow including these?
```

**Find anti-patterns:**

```
User: "Are there any anti-patterns in my model?"

AI: I've identified a few areas for improvement:

1. ⚠️ Bidirectional dependency:
   - Order aggregate depends on Inventory
   - Inventory aggregate depends on Order
   - Suggestion: Use saga pattern or event choreography

2. ⚠️ Missing idempotency:
   - PlaceOrder command doesn't check for duplicate orders
   - Suggestion: Add orderId in command, check before processing

3. ⚠️ Large aggregate:
   - Order aggregate handles payment, shipping, and inventory
   - Suggestion: Split into separate bounded contexts

Shall I explain how to refactor any of these?
```

### Getting Suggestions

**Add missing attributes:**

```
User: "What attributes should the OrderPlaced event have?"

AI: For an OrderPlaced event, I recommend these attributes:

Core Identifiers:
- orderId: UUID (unique order identifier)
- customerId: UUID (who placed the order)

Order Details:
- items: array of OrderItem
  - productId: UUID
  - productName: string
  - quantity: number
  - priceAtTime: decimal
- subtotal: decimal
- tax: decimal
- shipping: decimal
- total: decimal

Fulfillment:
- shippingAddress: Address object
- billingAddress: Address object
- shippingMethod: string

Metadata:
- placedAt: timestamp
- ipAddress: string (for fraud detection)
- userAgent: string
- promoCode?: string (optional)
- giftMessage?: string (optional)

Would you like me to generate the code for this structure?
```

**Improve naming:**

```
User: "Are my event names following best practices?"

AI: Let me review your event names:

✅ Good:
- "UserRegistered" - Past tense, clear
- "OrderShipped" - Past tense, specific
- "PaymentProcessed" - Past tense, domain language

⚠️ Could be improved:
- "CreateOrder" → Should be "OrderCreated" (past tense)
- "Data Updated" → Too generic, try "CustomerDetailsUpdated"
- "Process Complete" → Unclear, try specific event like "OrderFulfilled"

🔴 Anti-patterns:
- "DoPayment" → This is a command name, not an event
- "UserInfo" → Not an event, perhaps "UserProfileUpdated"?

Would you like me to suggest better names for the problematic ones?
```

## Advanced Queries

### Complex Analysis

**Saga and orchestration patterns:**

```
User: "Should I use orchestration or choreography for my order process?"

AI: Based on your model, I recommend a hybrid approach:

Use Orchestration (Saga) for:
- Order placement (critical path)
  - Reserve inventory
  - Process payment
  - Confirm order
- Reason: Needs transactional consistency, clear error handling

Use Choreography (Events) for:
- Post-order activities
  - Send confirmation email
  - Update loyalty points
  - Trigger warehouse notification
- Reason: Independent, can fail/retry without blocking order

Example saga structure:
1. PlaceOrderSaga receives PlaceOrder command
2. Orchestrates: ReserveInventory → ProcessPayment → ConfirmOrder
3. If any step fails, compensates previous steps
4. On success, publishes OrderCompleted event
5. Other services react to OrderCompleted independently

Would you like me to generate the saga code?
```

### Performance Optimization

```
User: "Will my model scale?"

AI: Analyzing your model for scalability:

✅ Good for scale:
- Event sourcing enables horizontal scaling
- CQRS separates read/write paths
- Async event processing via message broker

⚠️ Potential bottlenecks:
1. User Profile view updates on every event
   - Current: Synchronous projection updates
   - Suggestion: Use eventual consistency, async projections

2. Product Search view joins 5+ event streams
   - Current: Real-time aggregation
   - Suggestion: Pre-computed view with scheduled updates

3. Order aggregate loads full event history
   - Current: No snapshotting
   - Suggestion: Add snapshots every 100 events

🎯 Scaling recommendations:
- Partition event store by aggregate ID
- Cache read models with Redis
- Use CDN for static product views
- Implement CQRS with separate databases

Estimated capacity: 10K orders/hour → 100K orders/hour with these changes
```

## Conversation Context

The AI maintains context throughout your conversation:

```
User: "What events are triggered by PlaceOrder command?"

AI: The PlaceOrder command triggers:
1. OrderPlaced
2. InventoryReserved
3. PaymentRequested

User: "What attributes does the first one have?"

AI: The OrderPlaced event has these attributes:
- orderId: UUID
- customerId: UUID
- items: OrderItem[]
- total: decimal
- placedAt: timestamp
[... full attribute list ...]

User: "Generate code for it in Java"

AI: Here's the Java code for OrderPlaced event:
[... generated code ...]
```

## Model Comparison

**Compare different approaches:**

```
User: "Should I model refunds as a command on Order or separate aggregate?"

AI: Let me compare both approaches:

Option 1: Refund command on Order aggregate
Pros:
- ✅ Simple model, single source of truth
- ✅ Order knows its refund status
- ✅ Easy to validate (can't refund cancelled order)

Cons:
- ❌ Order aggregate becomes complex
- ❌ Harder to scale refund processing separately
- ❌ Tight coupling of order and refund business logic

Option 2: Separate Refund aggregate
Pros:
- ✅ Separate scaling of refund processing
- ✅ Independent refund policies
- ✅ Clearer bounded context separation

Cons:
- ❌ Need to query Order to validate
- ❌ More complex distributed transaction
- ❌ Potential for inconsistency

Recommendation: Option 2 (Separate Refund Aggregate)
Reason: Refunds are a distinct business process with their
own lifecycle, regulations, and scaling needs.

Implementation:
- CreateRefund command → RefundRequested event
- Order listens to RefundApproved → updates OrderRefunded
- Refund aggregate owns refund state machine

Would you like me to model this for you?
```

## Best Practices

### Clear Questions

**Instead of:**
```
"Is this good?"
"What about events?"
"Check my model"
```

**Ask:**
```
"Does my user registration flow handle all edge cases?"
"What events should I add for the order cancellation process?"
"Review my e-commerce model for scalability issues"
```

### Provide Context

**Better questions include context:**

```
"I'm modeling a healthcare appointment system.
What events should I include for appointment rescheduling?"

"In my food delivery app, how should I handle
restaurant accepting/rejecting orders?"

"For a SaaS billing system, should subscription
upgrades be commands or events?"
```

### Iterative Refinement

Build on previous answers:

```
User: "Suggest attributes for UserRegistered event"
AI: [provides attribute list]

User: "Add attributes for GDPR compliance"
AI: [adds consent fields, data retention fields]

User: "Generate TypeScript interface"
AI: [generates code]

User: "Add JSDoc comments"
AI: [adds documentation]
```

## Privacy and Security

### What AI Sees

The AI has access to:
- Event names and descriptions
- Command names and attributes
- View definitions
- Relationships between components
- Board structure and organization

### What AI Doesn't See

- Other boards in your workspace (unless specified)
- Miro account details
- Personal information
- API keys or credentials

### Data Handling

- **Temporary**: Conversations are not permanently stored
- **Encrypted**: All communication uses TLS
- **Opt-out**: You can disable AI features anytime
- **Enterprise**: Self-hosted options available

## Tips and Tricks

### Use Follow-up Questions

```
1. "Explain the payment flow"
2. "What could go wrong?"
3. "How do I handle those errors?"
4. "Generate the error handling code"
```

### Ask for Examples

```
"Show me an example of the OrderPlaced event in JSON"
"Give me sample test data for this flow"
"What would the API request look like?"
```

### Request Comparisons

```
"Compare event sourcing vs CRUD for this use case"
"What's better: synchronous or async payment processing?"
"Should I use REST or GraphQL for these queries?"
```

## Next Steps

- [Generate Specifications](/docs/ai-integration-topics/generating-specs/) - Create docs from your model
- [Model Slices with AI](/docs/ai-integration-topics/modeling-slices/) - Build slices from user stories
- [Generate Timelines](/docs/ai-integration-topics/generating-timelines/) - Estimate implementation effort
- [AI Integration Hub](/docs/ai-integration/) - Overview of AI features
