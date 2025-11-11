---
layout: docs
title: Modeling Your First Slice
---

# Modeling Your First Slice

A "slice" in Event Modeling represents a complete vertical flow through your system, from user action to data view. This guide will walk you through creating your first slice.

## What is a Slice?

A slice consists of three main components flowing left to right:

1. **Command** (Blue) - What the user wants to do
2. **Event** (Orange) - What happened as a result
3. **View** (Green) - What data the user sees

Think of it as a complete user story represented visually on a timeline.

## Example: User Registration

Let's model a simple user registration flow.

### Step 1: Create the Command

1. Open the Event Modeling Toolkit panel
2. Click on **Command** sticky
3. Place it on your board
4. Name it: `Register User`

**Commands represent:**
- User intentions
- API calls
- System triggers

<div class="info-box">
<strong>Naming Tip:</strong> Use imperative verb phrases for commands (Register, Create, Update, Delete)
</div>

### Step 2: Create the Event

1. Click on **Event** sticky in the toolkit
2. Place it to the right of your command
3. Name it: `User Registered`

**Events represent:**
- Facts that occurred
- Past-tense happenings
- State changes

<div class="info-box">
<strong>Naming Tip:</strong> Use past-tense verb phrases for events (Registered, Created, Updated, Deleted)
</div>

### Step 3: Create the View

1. Click on **View** sticky in the toolkit
2. Place it to the right of your event
3. Name it: `User Profile View`

**Views represent:**
- What users see
- Data projections
- Read models

### Step 4: Connect the Flow

1. Use the toolkit's connector tool or Miro's line tool
2. Draw an arrow from Command → Event
3. Draw an arrow from Event → View

Your first slice is complete!

```
[Register User] → [User Registered] → [User Profile View]
   (Command)          (Event)              (View)
```

## Understanding the Flow

### Left to Right: Time Flows Forward

- The timeline moves from left to right
- Commands trigger events
- Events update views
- Each slice represents a moment in time

### The Three Patterns

Your slice demonstrates the three core Event Modeling patterns:

1. **Command Pattern**: User action triggers state change
2. **Event Pattern**: State change is recorded as immutable fact
3. **View Pattern**: Events are projected into queryable views

## Adding More Context

### Swimlanes for Actors

Add swimlanes to show who or what initiates actions:

1. Create a horizontal line above your slice
2. Label it with the actor (e.g., "Customer", "Admin", "System")
3. Place commands in the appropriate swimlane

Example:
```
Customer Lane: [Register User] → [User Registered] → [User Profile View]
System Lane:   [Send Welcome Email] → [Email Sent] → [Email History]
```

### Multiple Events per Command

Some commands produce multiple events:

```
[Place Order] → [Order Placed]
             ↘ [Inventory Reserved]
             ↘ [Payment Processed]
```

### Multiple Views per Event

Some events update multiple views:

```
[Order Placed] → [Order Summary View]
              ↘ [Customer Orders View]
              ↘ [Admin Dashboard View]
```

## Complete Example: E-commerce Checkout

Here's a more complete slice:

```
Customer Lane:
[Submit Payment] → [Payment Submitted] → [Payment Form View]
                ↘ [Order Confirmed]    → [Order Confirmation View]
                ↘ [Inventory Updated]  → [Product Availability View]

System Lane:
                  [Email Sent] → [Email History View]
```

## Best Practices

### Keep It Simple

- Start with the happy path
- Add error cases later
- One slice at a time

### Be Specific

- Avoid generic names like "Data Created"
- Use domain language: "User Registered" not "Record Inserted"
- Make it readable to non-technical stakeholders

### Maintain Consistency

- Commands always blue
- Events always orange
- Views always green
- Flow always left to right

## Common Mistakes to Avoid

<div class="warning-box">
<strong>Mistake 1:</strong> Commands with past-tense names<br>
❌ "User Created" as a command<br>
✅ "Create User" as a command, "User Created" as an event
</div>

<div class="warning-box">
<strong>Mistake 2:</strong> Events that haven't happened yet<br>
❌ "Will Create User" as an event<br>
✅ "User Created" as an event
</div>

<div class="warning-box">
<strong>Mistake 3:</strong> Mixing reads and writes<br>
❌ [Get User] → [User Retrieved] → [User Data View]<br>
✅ Views don't need commands; they're queries, not slices
</div>

## Practice Exercise

Try modeling these slices on your own:

1. **Blog Post Creation**
   - Command: Create Post
   - Event: Post Created
   - View: Post Editor View

2. **Shopping Cart**
   - Command: Add Item to Cart
   - Event: Item Added to Cart
   - View: Shopping Cart View

3. **Login Flow**
   - Command: Login
   - Events: Login Attempted, Session Started
   - View: User Dashboard View

## Next Steps

Now that you've created your first slice, learn how to:

- [Add Attributes](/docs/visual-modeling/adding-attributes/) - Define data structures for your events
- [Advanced Modeling](/docs/advanced-modeling/) - Handle complex scenarios
- [Generate Code](/docs/code-generation/) - Turn your models into working code

## Additional Resources

- [Event Modeling Cheat Sheet](https://eventmodeling.org/posts/what-is-event-modeling/)
- [Common Event Modeling Patterns](/docs/event-modeling/)
- [Visual Modeling Hub](/docs/visual-modeling/)
