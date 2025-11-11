---
layout: docs
title: Basic Modeling
---

Learn how to create your first event model using the Miro Event Modeling Toolkit. This guide covers the essential building blocks and workflows.

## Getting Started

### Opening the Toolkit

1. Open your Miro board
2. Click the **Event Modeling Toolkit** icon in the apps panel
3. The toolkit panel will appear on the right side

### Creating Your First Model

We'll model a simple user registration process.

## Step 1: Add a Command

Commands represent user intentions or system triggers.

### Creating a Command

1. In the toolkit panel, click **Add Command**
2. Select the command shape type (blue rectangle)
3. Click on the board to place it
4. Enter the command name: "Register User"

### Command Properties

Configure the command properties:

- **Name**: Register User
- **Actor**: New User
- **Description**: User submits registration form
- **Input Data**:
  - email (string)
  - password (string)
  - name (string)

## Step 2: Add Business Logic

Business logic validates and processes commands.

### Creating Business Logic

1. Click **Add Logic** in the toolkit panel
2. Place it to the right of your command
3. Connect the command to the logic box

### Define Validation Rules

Add validation rules:

- Email format is valid
- Password meets strength requirements
- Email is not already registered

## Step 3: Add Events

Events represent what happened in the system.

### Creating an Event

1. Click **Add Event** in the toolkit panel
2. Select the event shape (orange rectangle)
3. Place it to the right of the business logic
4. Name the event: "User Registered"

### Event Properties

Configure the event:

- **Name**: User Registered
- **Timestamp**: Auto-generated
- **Event Data**:
  - userId (generated)
  - email
  - name
  - registeredAt (timestamp)

### Multiple Outcomes

Commands can result in different events:

**Success Path**:
- "User Registered" event

**Failure Path**:
- "Registration Failed" event
- Include reason (duplicate email, invalid data, etc.)

## Step 4: Add a Read Model (View)

Views display information to users.

### Creating a View

1. Click **Add View** in the toolkit panel
2. Select the view shape (green rectangle)
3. Place it to the right of the event
4. Name it: "Welcome Email"

### View Properties

Configure the view:

- **Name**: Welcome Email
- **Type**: Email notification
- **Data Source**: User Registered event
- **Display Fields**:
  - User name
  - Verification link

## Connecting Components

### Drawing Connections

Connect your components to show the flow:

1. Click the **Connect** tool
2. Click the source component (command)
3. Click the target component (logic)
4. Repeat to connect: Logic → Event → View

### Connection Types

- **Solid line**: Primary flow
- **Dashed line**: Alternative/error flow
- **Arrows**: Direction of information flow

## Working with the Timeline

### Organizing Events Horizontally

Arrange events from left to right to show sequence:

1. Earlier events on the left
2. Later events on the right
3. Use the grid to align properly

### Using Swim Lanes

Organize components by actor or system:

1. Click **Add Swim Lane**
2. Label it (e.g., "Customer", "System", "Admin")
3. Drag components into appropriate lanes

## Color Coding

The toolkit uses standard event modeling colors:

- **Blue**: Commands (user intentions)
- **Orange**: Events (things that happened)
- **Green**: Views/Read Models (information display)
- **Yellow**: Business Logic/Rules
- **Purple**: External Systems

## Templates and Patterns

### Using Templates

Start quickly with pre-built templates:

1. Click **Templates** in the toolkit panel
2. Choose a template:
   - CRUD Operations
   - User Management
   - Order Processing
   - Payment Flow
3. Click **Apply** to add to your board

### Saving Custom Templates

Save your own patterns:

1. Select the components you want to save
2. Click **Save as Template**
3. Name your template
4. It will appear in your custom templates list

## Best Practices for Basic Modeling

### 1. Start Simple

Begin with the happy path:
- One command
- One event
- One view

### 2. Use Clear Names

Follow naming conventions:
- Commands: Imperative ("Register User", "Place Order")
- Events: Past tense ("User Registered", "Order Placed")
- Views: Descriptive ("User Profile", "Order Summary")

### 3. Keep Events Focused

Each event should represent one state change:
- ✅ "Order Placed"
- ❌ "Order Placed And Inventory Updated"

### 4. Include Relevant Data

Events should contain all necessary information:
- Identifiers (IDs)
- Business data
- Timestamps
- Correlation information

### 5. Validate Business Rules

Document validation in business logic:
- What conditions must be true?
- What errors can occur?
- How are conflicts resolved?

## Example: Complete User Registration Flow

Here's a complete basic model:

```
[New User] → [Register User Command]
             ↓
           [Validate Registration]
           - Check email format
           - Check password strength
           - Check for duplicates
             ↓
           [User Registered Event]
           - userId: "U123"
           - email: "user@example.com"
           - name: "John Doe"
           - registeredAt: "2025-01-15T10:30:00Z"
             ↓
           [Welcome Email View]
           - Display: Welcome message
           - Action: Verify email link
```

## Common Mistakes to Avoid

### 1. Command-Event Confusion

❌ Wrong: Event named "Register User"
✅ Correct: Command "Register User" → Event "User Registered"

### 2. Missing Business Logic

Always include validation and processing logic between commands and events.

### 3. Overly Complex Events

Keep events simple and focused on single state changes.

### 4. Inconsistent Naming

Use consistent naming patterns throughout your model.

## Practice Exercise

Try modeling this scenario:

**User Story**: As a customer, I want to add items to my shopping cart so I can purchase them later.

Create:
1. A command for adding items
2. Validation logic (item exists, sufficient inventory)
3. An event for when item is added
4. A view showing the updated cart

## Next Steps

Once you're comfortable with basic modeling, move on to:

- [Advanced Modeling](advanced-modeling) - Learn complex patterns and techniques
- [Code Generation](code-generation) - Generate code from your models
