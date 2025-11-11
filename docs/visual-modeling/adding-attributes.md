---
layout: docs
title: Adding Attributes
---

# Adding Attributes

Attributes add detailed data structure definitions to your event model components. Learn how to enrich your commands, events, and views with meaningful data fields.

## Why Add Attributes?

Attributes transform your high-level event model into a detailed specification that can:

- Generate code automatically
- Serve as API documentation
- Define database schemas
- Clarify business rules
- Enable AI-powered features

## When to Add Attributes

Add attributes when:

- You're ready to implement the slice
- You need to generate code from your model
- Stakeholders need to understand data structures
- You're documenting an API contract

<div class="info-box">
<strong>Tip:</strong> Start with high-level modeling first, add attributes later. Don't let data details slow down your initial design sessions.
</div>

## Attribute Panel Overview

The Event Modeling Toolkit provides an attribute panel for each component:

1. Click on any command, event, or view sticky
2. Click the **Attributes** button in the toolkit panel
3. The attribute editor will open

## Adding Attributes to Commands

Commands represent user input, so their attributes define the data users provide.

### Example: Register User Command

```
Command: Register User

Attributes:
- email: string (required)
- password: string (required)
- firstName: string (required)
- lastName: string (required)
- phoneNumber: string (optional)
- marketingConsent: boolean (default: false)
```

### Best Practices for Command Attributes

- **Include validation rules**: required, optional, format constraints
- **Use clear names**: camelCase or snake_case consistently
- **Specify data types**: string, number, boolean, date, etc.
- **Document constraints**: min/max length, regex patterns
- **Include default values** where applicable

## Adding Attributes to Events

Events are immutable facts, so their attributes capture exactly what happened.

### Example: User Registered Event

```
Event: User Registered

Attributes:
- userId: uuid (generated)
- email: string
- firstName: string
- lastName: string
- phoneNumber: string | null
- registeredAt: timestamp
- ipAddress: string
- marketingConsent: boolean
- emailVerified: boolean (default: false)
```

### Event Attribute Patterns

#### Include Metadata

Always capture:
- **Timestamp**: When did it happen?
- **Actor ID**: Who did it?
- **Correlation ID**: Which request triggered it?

```
Common Event Metadata:
- eventId: uuid
- occurredAt: timestamp
- userId: uuid
- correlationId: uuid
- causationId: uuid
```

#### Capture Business Context

Include relevant domain data:
```
Order Placed Event:
- orderId: uuid
- customerId: uuid
- items: array of objects
  - productId: uuid
  - quantity: number
  - priceAtTime: decimal
- totalAmount: decimal
- currency: string
- shippingAddress: object
- billingAddress: object
```

#### Keep It Immutable

Events should never change, so include:
- All relevant data at the time it happened
- Snapshot values (like "priceAtTime" not "currentPrice")
- Complete information (no need to look up other data later)

## Adding Attributes to Views

Views represent what users see, so their attributes define the UI data structure.

### Example: User Profile View

```
View: User Profile View

Attributes:
- userId: uuid
- email: string
- fullName: string (computed: firstName + lastName)
- phoneNumber: string | null
- memberSince: date
- lastLoginAt: timestamp | null
- profilePhotoUrl: string | null
- isEmailVerified: boolean
- preferences: object
  - marketingConsent: boolean
  - theme: string (light | dark)
  - language: string
```

### View Attribute Patterns

#### Denormalized Data

Views can combine data from multiple events:
```
Order History View:
- orders: array
  - orderId: uuid
  - orderDate: date
  - status: string
  - totalAmount: decimal
  - itemCount: number
  - items: array
    - productName: string
    - productImage: string
    - quantity: number
    - price: decimal
```

#### Computed Fields

Mark calculated attributes:
```
- fullName: string (computed)
- totalPrice: decimal (computed: sum of items)
- isEligibleForDiscount: boolean (computed)
```

#### UI-Specific Fields

Include presentation details:
```
- avatarUrl: string
- displayColor: string
- badgeText: string
- sortOrder: number
```

## Data Types Reference

### Primitive Types
- `string` - Text data
- `number` - Numeric values
- `boolean` - true/false
- `date` - Date only (YYYY-MM-DD)
- `timestamp` - Date and time
- `uuid` - Unique identifier

### Complex Types
- `array` - List of items
- `object` - Nested structure
- `enum` - Fixed set of values
- `union` - One of several types

### Nullable Types
```
- phoneNumber: string | null
- middleName: string | undefined
- optionalField?: string
```

## Using the Toolkit's Attribute Editor

### Step 1: Open the Editor

1. Select a command, event, or view sticky
2. Click **Edit Attributes** in the toolkit panel
3. The attribute form opens

### Step 2: Add Fields

For each attribute:
1. Click **Add Field**
2. Enter the field name
3. Select the data type
4. Set required/optional
5. Add description (optional)

### Step 3: Define Complex Structures

For nested objects:
1. Select **object** as the data type
2. Click **Add Child Fields**
3. Define nested attributes
4. You can nest multiple levels deep

For arrays:
1. Select **array** as the data type
2. Define the item type
3. Optionally set min/max length

### Step 4: Save and Generate

1. Click **Save** to store attributes
2. Attributes appear as a small table on your sticky
3. Use **Generate Code** to create code from your attributes

## Practical Example: Complete Slice with Attributes

Let's add attributes to our user registration slice:

### Command: Register User
```json
{
  "email": "string (required, email format)",
  "password": "string (required, min: 8 chars)",
  "firstName": "string (required)",
  "lastName": "string (required)",
  "dateOfBirth": "date (required)",
  "phoneNumber": "string (optional, phone format)",
  "marketingConsent": "boolean (default: false)"
}
```

### Event: User Registered
```json
{
  "eventId": "uuid",
  "userId": "uuid (generated)",
  "email": "string",
  "passwordHash": "string (hashed)",
  "firstName": "string",
  "lastName": "string",
  "dateOfBirth": "date",
  "phoneNumber": "string | null",
  "registeredAt": "timestamp",
  "registrationIp": "string",
  "marketingConsent": "boolean",
  "emailVerificationToken": "string",
  "accountStatus": "string (default: 'pending_verification')"
}
```

### View: User Profile View
```json
{
  "userId": "uuid",
  "email": "string",
  "fullName": "string (computed)",
  "initials": "string (computed)",
  "age": "number (computed)",
  "phoneNumber": "string | null",
  "memberSince": "date",
  "accountStatus": "string",
  "isEmailVerified": "boolean",
  "profileCompletion": "number (computed, percentage)"
}
```

## Advanced Attribute Techniques

### Versioning Events

As your system evolves, event structures may change:

```
User Registered v1:
- userId
- email
- name

User Registered v2:
- userId
- email
- firstName
- lastName
- phoneNumber

Add schema version:
- schemaVersion: number (e.g., 2)
```

### Polymorphic Events

Different event types with shared structure:

```
Base Payment Event:
- paymentId
- amount
- currency
- timestamp

Specific Types:
- Payment Completed (extends base + { transactionId })
- Payment Failed (extends base + { errorCode, errorMessage })
- Payment Refunded (extends base + { refundReason, originalPaymentId })
```

### Reference Data

Link to external entities:

```
Order Placed:
- orderId: uuid
- customerId: uuid (ref: Customer)
- productIds: uuid[] (ref: Product[])
- shippingAddressId: uuid (ref: Address)
```

## Validation and Constraints

Document validation rules as attributes:

```
email: string
  - required: true
  - format: email
  - maxLength: 255

password: string
  - required: true
  - minLength: 8
  - pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/
  - description: Must contain letter, number, and special char

age: number
  - required: true
  - minimum: 18
  - maximum: 120
```

## Tips for Team Collaboration

### Consistency is Key

- Use a shared data type glossary
- Establish naming conventions
- Document common patterns
- Review attributes as a team

### Document Business Rules

Use attribute descriptions to capture rules:
```
discountPercentage: number
  Description: "Discount applied to order.
               Range: 0-100.
               Business rule: Max 50% for regular customers,
               70% for VIP customers"
```

### Make It Discoverable

- Add examples in descriptions
- Link to external documentation
- Include units of measurement (e.g., "weightInKg")

## Next Steps

With attributes defined, you can:

- [Generate Code](/docs/code-generation/) - Turn models into working code
- [Use AI Integration](/docs/ai-integration/) - Let AI help define attributes
- [Advanced Modeling](/docs/advanced-modeling/) - Handle complex scenarios

## Additional Resources

- [JSON Schema Documentation](https://json-schema.org/)
- [API Design Best Practices](https://restfulapi.net/)
- [Visual Modeling Hub](/docs/visual-modeling/)
