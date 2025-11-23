---
layout: docs
title: Data Trail View
---

# Data Trail View

Data Trail allows you to quickly find out where information originates. Trace data as it flows through screens, commands, and events.

![Data Trail View]({{ '/assets/images/tutorial/model_view/106.png' | relative_url }})

## What is a Data Trail?

A **Data Trail** shows the complete journey of a piece of data through your system:
- Where it first entered (user input, API, external system)
- How it was transformed (commands, business logic)
- Where it was stored (events, aggregates)
- How it's displayed (views, screens, reports)

## Using the Data Trail View

### Steps to Trace Data

**2+3) Select an attribute in an Event**
- Click on any event in your model
- Select a specific attribute you want to trace
- Example: Select "description" in "ItemAdded" event

**4) View the Data Trail**
- See the complete trail of that attribute
- In this case: "description" in "Item added" originates from a screen
- Passed through the "Add Item" Command
- Finally stored in the "Item added" Event

### Example Flow

```
User Input (Screen)
    ↓
"description" field
    ↓
Add Item Command
    ↓
description attribute
    ↓
ItemAdded Event
    ↓
description stored
```

## Common Data Trail Patterns

### User Input to Event

The most common pattern - user enters data:

```
Registration Screen
├── email field
├── password field
└── name field
    ↓
RegisterUser Command
├── email
├── password (hashed)
└── name
    ↓
UserRegistered Event
├── userId (generated)
├── email
└── name
```

**Key Insights:**
- Password is hashed during command processing
- userId is generated, not from user input
- Email and name flow through unchanged

### Event to View

Data flows from events to read models:

```
OrderPlaced Event
├── orderId
├── customerId
├── items
└── total
    ↓
Order Summary View
├── orderId
├── customerName (enriched from User context)
├── itemCount (calculated)
└── total
```

**Key Insights:**
- customerName is enriched from another context
- itemCount is calculated from items array
- Not all event data appears in view

### Cross-Context Data Flow

Data flowing between bounded contexts:

```
Sales Context
└── OrderPlaced Event
    └── customerId
        ↓
Fulfillment Context
└── ShipOrder Command
    └── customerId
        ↓
Fulfillment Context
└── OrderShipped Event
    └── customerId
```

**Key Insights:**
- customerId crosses context boundaries
- Data is copied, not shared
- Each context maintains its own copy

### External System Integration

Data originating from external systems:

```
Payment Gateway (External)
└── PaymentConfirmed webhook
    └── transactionId
        ↓
ProcessPayment Command
├── transactionId
└── orderId (mapped)
    ↓
PaymentProcessed Event
├── transactionId
├── orderId
└── amount
```

**Key Insights:**
- External system provides transactionId
- Application maps to orderId
- Both IDs stored for correlation

## Data Transformation Types

### 1. Direct Pass-Through

Data flows unchanged:

```
Screen: email input
→ Command: email
→ Event: email
→ View: email
```

### 2. Calculation/Derivation

New data calculated from input:

```
Screen: items (quantity, price)
→ Command: items
→ Event: items + total (calculated)
→ View: total
```

### 3. Enrichment

Additional data added from other sources:

```
Screen: productId
→ Command: productId
→ Event: productId + productName + price (looked up)
→ View: productName, price
```

### 4. Transformation

Data format or structure changed:

```
Screen: "John Doe" (full name)
→ Command: firstName="John", lastName="Doe" (split)
→ Event: firstName, lastName
→ View: "John Doe" (combined)
```

### 5. Filtering

Some data excluded:

```
Screen: password
→ Command: password (validated)
→ Event: passwordHash (only hash stored)
→ View: *** (hidden)
```

## Practical Use Cases

### 1. Compliance and Auditing

**GDPR Data Mapping:**
```
Question: "Where is user email stored?"

Data Trail shows:
✅ Registration Screen → email input
✅ RegisterUser Command → email parameter
✅ UserRegistered Event → email attribute
✅ User Profile View → email display
✅ Order History View → customer email
✅ Email Notification → recipient
```

**Result:** Complete inventory for GDPR compliance

### 2. Impact Analysis

**Question: "What breaks if I change the 'description' field?"**

```
Data Trail shows:
⚠️ Add Item Screen uses description
⚠️ AddItem Command validates description
⚠️ ItemAdded Event stores description
⚠️ Item List View displays description
⚠️ Search Index includes description
⚠️ Report Export contains description
```

**Result:** Know exactly what will be affected

### 3. Bug Investigation

**Bug: "Order total is sometimes wrong"**

```
Data Trail reveals:
Screen: items with quantity & price
→ AddToCart Command: items array
→ ItemAdded Event: items (no total)
→ View: total (calculated from items)

Problem: View calculates total differently than expected
```

**Result:** Found the source of the discrepancy

### 4. Security Analysis

**Question: "Where can sensitive PII data leak?"**

```
Social Security Number Data Trail:
Screen: SSN input (masked)
→ UpdateProfile Command: SSN (encrypted)
→ ProfileUpdated Event: SSN (encrypted)
→ Profile View: SSN (last 4 digits only)
→ Admin View: SSN (full, requires permission)
→ Export Report: SSN (excluded by default)
```

**Result:** Verify security controls at each stage

### 5. Performance Optimization

**Question: "Why is Order View slow?"**

```
Data Trail shows:
OrderPlaced Event → orderId
→ Order View needs:
  - Customer name (from User context)
  - Product names (from Product context)
  - Inventory status (from Inventory context)
  - Shipping status (from Fulfillment context)

Problem: View requires 4 context queries
```

**Result:** Create denormalized view with all data

## Best Practices

### 1. Minimize Transformations

**Keep It Simple:**
```
✅ Good:
Screen: email → Command: email → Event: email

❌ Complex:
Screen: email → Command: email.toLowerCase().trim()
→ Event: normalizedEmail → View: email.toUpperCase()
```

**Why:** Easier to trace, fewer bugs

### 2. Make Transformations Explicit

**Document Changes:**
```
RegisterUser Command:
- Input: password (plain text)
- Transform: bcrypt.hash(password)
- Output: passwordHash
```

**Why:** Clear what happens to data

### 3. Preserve Original Data

**When Calculating:**
```
✅ Good:
Event: items[], calculatedTotal

❌ Risky:
Event: total (only)
(Lost original items data)
```

**Why:** Can recalculate if logic changes

### 4. Trace PII and Sensitive Data

**Mark Sensitive Fields:**
```
UserRegistered Event:
- email (PII - encrypted)
- passwordHash (sensitive)
- name (PII)
- userId (not PII)
```

**Why:** Essential for compliance

### 5. Use Consistent Naming

**Same Concept = Same Name:**
```
✅ Good:
Screen: orderId → Command: orderId → Event: orderId

❌ Confusing:
Screen: orderNumber → Command: ordId → Event: id
```

**Why:** Makes trail obvious

## Troubleshooting Data Trails

### Missing Data Source

**Problem:** Can't find where data originates

**Solutions:**
- Check if data comes from external system
- Look for calculated/derived fields
- Verify event sourcing is complete
- Check for legacy data migration

### Broken Trail

**Problem:** Data appears in event but not in command

**Causes:**
- Data enriched during command processing
- Looked up from database or external system
- Generated by the system (IDs, timestamps)
- Calculated from other attributes

### Circular Dependencies

**Problem:** Data trail shows circular references

**Example:**
```
❌ Order → Customer → Order (circular)
```

**Solution:**
- Use IDs for references, not full objects
- Separate read models from write models
- Review aggregate boundaries

### Performance Issues

**Problem:** Tracing data is slow

**Solutions:**
- Index events by attribute names
- Cache common trail queries
- Pre-compute trails for critical data
- Optimize event store queries

## Advanced Data Trail Analysis

### Multi-Source Data

Data combined from multiple sources:

```
Order Summary View combines:
1. OrderPlaced Event → orderId, customerId, items
2. User Context → customerName, email
3. Product Context → productNames, images
4. Inventory Context → availability
5. Shipping Context → estimatedDelivery
```

### Temporal Data Trails

Track how data changes over time:

```
Product Price Trail:
T1: ProductCreated → price: $100
T2: PriceUpdated → price: $80
T3: SaleApplied → price: $64
T4: SaleEnded → price: $80
```

### Cross-System Data Trails

Data flowing through multiple systems:

```
E-Commerce → Payment Gateway → Bank → Accounting System
orderId → transactionId → settlementId → invoiceId
```

## Next Steps

- [Aggregate View](/docs/basic-modeling-topics/aggregate-view/) - View aggregates and events
- [Context View](/docs/basic-modeling-topics/context-view/) - Navigate context hierarchies
- [Advanced Modeling](/docs/advanced-modeling/) - Advanced techniques
- [Event Modeling](/docs/event-modeling/) - Core event modeling concepts
