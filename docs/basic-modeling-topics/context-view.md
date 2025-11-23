---
layout: docs
title: Context View
---

# Context View

The Context View shows you a hierarchical view of all Contexts on the Board. Linked Contexts become sub-contexts, allowing you to build hierarchical context models on your board.

![Context View]({{ '/assets/images/tutorial/model_view/104.png' | relative_url }})

## What are Contexts?

In Event Modeling and Domain-Driven Design, a **Context** (or Bounded Context) represents:
- A boundary around a specific business capability
- A consistent model within that boundary
- A separate sphere of language and logic
- An autonomous unit that can evolve independently

## Hierarchical Context Models

### Parent-Child Relationships

Linked contexts form a hierarchy:
- **Parent Context** - A high-level bounded context
- **Child Context** - A more specific sub-context within the parent

**Example:**
```
E-Commerce System (Root)
├── Customer Management
│   ├── Registration
│   ├── Authentication
│   └── Profile Management
├── Order Processing
│   ├── Cart Management
│   ├── Checkout
│   └── Order Fulfillment
└── Inventory Management
    ├── Stock Control
    └── Warehouse Operations
```

### Benefits of Hierarchical Contexts

**Organizational Clarity**
- Visually organize complex systems
- Group related bounded contexts
- Show relationships between domains

**Scalability**
- Break down large models into manageable pieces
- Allow teams to own specific contexts
- Enable independent development and deployment

**Communication**
- Align model structure with organizational structure
- Make system boundaries explicit
- Facilitate stakeholder discussions

## Using the Context View

### Navigating the Hierarchy

**Expand/Collapse Contexts**
- Click on a context to expand or collapse its children
- See the full tree structure at a glance
- Focus on specific areas of interest

**Jump to Context**
- Click on any context to navigate to it on the board
- Quickly switch between different parts of your model
- Maintain spatial awareness of your location

### Creating Context Hierarchies

**Link Contexts**
1. Create multiple contexts on your board
2. Draw connections between parent and child contexts
3. The hierarchy automatically appears in Context View

**Best Practices**
- Keep hierarchy depth reasonable (2-4 levels)
- Group related business capabilities
- Align with organizational boundaries
- Make relationships meaningful

## Context Patterns

### Strategic Design Patterns

**1. Core Domain**
```
Core Domain (Root)
└── Unique Business Logic
    - Events that differentiate your business
    - Key competitive advantage
    - Most valuable context
```

**2. Supporting Subdomains**
```
System (Root)
├── Core Domain
└── Supporting Contexts
    ├── User Management (generic)
    ├── Notifications (generic)
    └── Reporting (generic)
```

**3. Integration Contexts**
```
System (Root)
├── Internal Contexts
│   └── Core Business Logic
└── Integration Layer
    ├── External API Gateway
    ├── Legacy System Adapter
    └── Third-party Services
```

## Example: E-Commerce System

### Context Structure

**Root: E-Commerce Platform**

**Customer Context**
- Handles everything related to customers
- Sub-contexts:
  - Registration & Authentication
  - Profile & Preferences
  - Customer Support

**Sales Context**
- Manages the sales process
- Sub-contexts:
  - Product Catalog
  - Shopping Cart
  - Checkout & Payment
  - Order Management

**Fulfillment Context**
- Handles order fulfillment
- Sub-contexts:
  - Inventory Management
  - Warehouse Operations
  - Shipping & Logistics

**Analytics Context**
- Business intelligence and reporting
- Sub-contexts:
  - Sales Analytics
  - Customer Insights
  - Inventory Forecasting

### Context Interactions

Contexts communicate through events:

```
Customer places order:
1. Sales Context publishes OrderPlaced event
2. Fulfillment Context listens and reserves inventory
3. Customer Context listens and updates order history
4. Analytics Context listens and updates metrics
```

This loose coupling allows:
- Independent scaling
- Separate deployment
- Different technology choices
- Team autonomy

## Common Context Hierarchies

### Microservices Architecture

```
Platform
├── User Service
│   ├── Auth
│   └── Profile
├── Order Service
│   ├── Cart
│   ├── Checkout
│   └── Order Tracking
└── Inventory Service
    ├── Stock
    └── Warehouse
```

### Domain-Driven Design

```
Bounded Context Map
├── Core Domain
│   └── Unique Business Logic
├── Supporting Domain
│   ├── User Management
│   └── Notifications
└── Generic Subdomain
    ├── Payments (3rd party)
    └── Shipping (3rd party)
```

### Event-Driven Systems

```
Event Backbone
├── Command Contexts
│   ├── Order Commands
│   └── User Commands
├── Event Contexts
│   ├── Order Events
│   └── User Events
└── Query Contexts
    ├── Order Views
    └── User Views
```

## Best Practices

### Organizing Contexts

**1. Business Alignment**
- Mirror organizational structure
- Match team ownership
- Reflect business capabilities

**2. Autonomy**
- Each context should be independently deployable
- Minimize cross-context dependencies
- Use events for communication

**3. Language Consistency**
- Use ubiquitous language within each context
- Terms may have different meanings across contexts
- Make boundaries explicit

### Managing Complexity

**Start Simple**
- Begin with fewer, larger contexts
- Split as complexity grows
- Refactor based on team boundaries

**Avoid Over-Segmentation**
- Don't create contexts too small
- Balance granularity with maintainability
- Combine if contexts are tightly coupled

**Document Relationships**
- Use Context View to visualize
- Maintain a context map
- Keep stakeholders informed

## Troubleshooting

### Contexts Not Showing in Hierarchy
- Ensure contexts are properly linked on the board
- Check that connections are directional (parent → child)
- Refresh the Context View

### Circular Dependencies
- Avoid circular context references
- Restructure to create clear hierarchy
- Use events for bidirectional communication

### Too Many Levels
- Keep hierarchy depth reasonable (2-4 levels)
- Flatten if structure is too deep
- Combine contexts if appropriate

## Next Steps

- [Overview Tab](/docs/basic-modeling-topics/overview/) - Navigate the main interface
- [Aggregate View](/docs/basic-modeling-topics/aggregate-view/) - View aggregates and events
- [Data Trail View](/docs/basic-modeling-topics/data-trail-view/) - Trace data flow
- [Advanced Modeling](/docs/advanced-modeling/) - Advanced modeling techniques
