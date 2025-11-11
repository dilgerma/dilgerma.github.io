---
layout: docs
title: Modeling Slices with AI
---

# Modeling Slices with AI

Let AI help you build event model slices from user stories, natural language descriptions, or wireframes. Get intelligent suggestions for commands, events, views, and attributes.

## Overview

AI-assisted modeling accelerates the modeling process by:

- **Converting stories to slices** - Transform user stories into complete event model slices
- **Suggesting attributes** - AI recommends appropriate data fields
- **Validating structure** - Check for completeness and best practices
- **Refining models** - Iteratively improve with AI guidance
- **Learning patterns** - AI learns from your modeling style

## Starting a New Slice

### From User Story

Convert Agile user stories into event model slices.

#### Example Input

```
As a customer
I want to place an order for products in my cart
So that I can purchase the items I've selected

Acceptance Criteria:
- Customer must be logged in
- Cart must have at least one item
- Payment information must be valid
- Inventory must be available
- Order confirmation email is sent
```

#### AI-Generated Slice

**Step 1: AI analyzes the story**

```
AI: I've analyzed your user story. This appears to be an
order placement flow. I'll create a slice with:

1. Command: Place Order
2. Events: Order Placed, Payment Processed, Inventory Reserved
3. View: Order Confirmation

Would you like me to proceed?
```

**Step 2: AI generates the slice**

```markdown
## Generated Slice: Order Placement

### Command: Place Order
**Actor:** Customer
**Trigger:** User clicks "Checkout" button

**Input Attributes:**
- customerId: UUID
- cartId: UUID
- shippingAddress: Address
  - street: string
  - city: string
  - state: string
  - zipCode: string
  - country: string
- billingAddress: Address
- paymentMethod: PaymentMethod
  - type: enum (CreditCard, PayPal, etc.)
  - token: string (encrypted)

**Business Rules:**
- Customer must be authenticated
- Cart must contain items
- Shipping address must be valid
- Payment method must be validated
- All items must be in stock

---

### Events

#### Event 1: Order Placed
**Description:** Customer's order has been successfully placed

**Attributes:**
- orderId: UUID (generated)
- customerId: UUID
- orderNumber: string (e.g., "ORD-2024-00123")
- items: OrderItem[]
  - productId: UUID
  - productName: string
  - quantity: number
  - priceAtTime: decimal
- subtotal: decimal
- tax: decimal
- shipping: decimal
- total: decimal
- shippingAddress: Address
- placedAt: timestamp

#### Event 2: Payment Processed
**Description:** Payment has been successfully charged

**Attributes:**
- orderId: UUID
- paymentId: UUID
- amount: decimal
- currency: string
- paymentMethod: string
- transactionId: string
- processedAt: timestamp

#### Event 3: Inventory Reserved
**Description:** Inventory has been reserved for the order

**Attributes:**
- orderId: UUID
- reservationId: UUID
- items: ReservedItem[]
  - productId: UUID
  - quantity: number
  - warehouseId: UUID
- reservedAt: timestamp
- expiresAt: timestamp

---

### View: Order Confirmation
**Purpose:** Show customer their order details

**Attributes:**
- orderNumber: string
- customerName: string
- orderDate: date
- status: string
- items: OrderItem[]
  - productName: string
  - imageUrl: string
  - quantity: number
  - price: decimal
  - subtotal: decimal
- subtotal: decimal
- tax: decimal
- shipping: decimal
- total: decimal
- shippingAddress: Address
- estimatedDelivery: date

---

### Additional Considerations

**Related Events (Suggested):**
- OrderConfirmed (after all validations pass)
- OrderShipped (when order leaves warehouse)
- OrderDelivered (when customer receives order)

**Error Events (Suggested):**
- PaymentFailed
- InventoryUnavailable
- OrderCancelled

**Would you like me to:**
1. Add error handling events
2. Create the complete order lifecycle
3. Generate code for this slice
4. Add these components to your board
```

### From Natural Language

Describe what you want in plain English.

#### Example Input

```
"I need to model a feature where users can leave reviews
on products they've purchased. They should be able to rate
from 1-5 stars and write a text review. Other users can
mark reviews as helpful."
```

#### AI Response

```
AI: I'll create a product review slice for you.

Slice: Product Reviews

Command: Submit Product Review
├─ reviewerId: UUID (must have purchased product)
├─ productId: UUID
├─ rating: number (1-5)
├─ title: string
├─ reviewText: string
└─ purchaseId: UUID (proof of purchase)

Event: Review Submitted
├─ reviewId: UUID
├─ reviewerId: UUID
├─ productId: UUID
├─ rating: number
├─ title: string
├─ reviewText: string
├─ submittedAt: timestamp
└─ verified: boolean

View: Product Reviews
├─ productId: UUID
├─ averageRating: decimal
├─ totalReviews: number
├─ reviews: Review[]
│   ├─ reviewId: UUID
│   ├─ reviewerName: string
│   ├─ rating: number
│   ├─ title: string
│   ├─ reviewText: string
│   ├─ helpfulCount: number
│   ├─ verified: boolean
│   └─ reviewDate: date

---

Additional slice for marking reviews helpful:

Command: Mark Review Helpful
├─ reviewId: UUID
└─ userId: UUID

Event: Review Marked Helpful
├─ reviewId: UUID
├─ userId: UUID
└─ markedAt: timestamp

Shall I add these to your board?
```

### From Wireframe/Screenshot

Upload a UI mockup and AI generates the slice.

#### Example Process

1. **Upload wireframe** of order form
2. **AI analyzes** the UI elements
3. **AI identifies:**
   - Input fields → Command attributes
   - Display elements → View attributes
   - Buttons → Commands
   - Confirmation screens → Views

```
AI: Based on your wireframe, I see:

Input Form (Command: Place Order):
- Customer Name field → customerName: string
- Email field → email: string
- Shipping Address form → shippingAddress: Address
- Payment details section → paymentMethod: PaymentMethod
- "Place Order" button → Triggers PlaceOrder command

Confirmation Screen (View: Order Confirmation):
- Order number display → orderNumber: string
- Order summary table → items: OrderItem[]
- Total price → total: decimal
- Estimated delivery → estimatedDelivery: date

Shall I create the complete slice?
```

## Iterative Refinement

Work with AI to improve your model.

### Adding Missing Elements

```
User: "What am I missing for the user registration slice?"

AI: Analyzing your registration slice, I notice these gaps:

✅ You have:
- RegisterUser command
- UserRegistered event
- User Profile view

⚠️ Missing:
1. Email verification flow
   - SendVerificationEmail command
   - EmailSent event
   - EmailVerified event

2. Error handling
   - UserRegistrationFailed event
   - EmailAlreadyExists validation

3. Security considerations
   - Password hashing
   - Rate limiting
   - CAPTCHA integration

4. Follow-up processes
   - Welcome email
   - Onboarding tour
   - Analytics tracking

Would you like me to add these?
```

### Improving Attributes

```
User: "Improve the attributes for OrderPlaced event"

AI: I'll enhance the OrderPlaced event attributes:

Current:
- orderId
- customerId
- items
- total

Recommended additions:

Business Context:
- orderNumber: string (human-readable)
- orderStatus: enum (for tracking)
- orderType: enum (standard/express/gift)

Financial Details:
- subtotal: decimal
- tax: decimal
- shipping: decimal
- discount: decimal (if applicable)
- finalTotal: decimal
- currency: string

Fulfillment:
- shippingAddress: Address
- billingAddress: Address
- shippingMethod: string
- estimatedDelivery: date

Compliance & Audit:
- ipAddress: string
- userAgent: string
- sessionId: string
- promoCodeUsed?: string

Metadata:
- placedAt: timestamp
- timeZone: string
- locale: string

Would you like me to add all of these?
```

## AI Suggestions

### Automatic Validation

AI checks your model as you build:

```
AI: ⚠️ I noticed some issues with your model:

1. Command without Event
   - Command: "UpdateProfile" has no corresponding events
   - Suggestion: Add "ProfileUpdated" event

2. Orphaned View
   - View: "UserStats" isn't updated by any events
   - Suggestion: Link to UserLoggedIn, ProfileUpdated events

3. Naming Inconsistency
   - You use "userId" in some places, "user_id" in others
   - Suggestion: Standardize to "userId" (camelCase)

4. Missing Business Rule
   - PlaceOrder command doesn't check inventory
   - Suggestion: Add inventory validation

Would you like me to fix these automatically?
```

### Pattern Recognition

AI recognizes common patterns:

```
AI: I see you're building an order processing flow.
This looks like a Saga pattern.

Recommended structure:

Order Saga:
1. PlaceOrder command
   ↓
2. OrderPlaced event
   ↓
3. Parallel processes:
   - Reserve Inventory → InventoryReserved
   - Process Payment → PaymentProcessed
   - Validate Shipping → ShippingValidated
   ↓
4. If all succeed: Order Confirmed
   If any fail: Order Cancelled (with compensation)

Compensation events:
- Release Inventory
- Refund Payment

Shall I create this saga structure?
```

## Attribute Suggestions

### Smart Data Types

```
User: "Suggest attributes for Product Created event"

AI: Here are recommended attributes for ProductCreated:

Core Identity:
- productId: UUID (primary key)
- sku: string (stock keeping unit)
- barcode?: string (optional, EAN/UPC)

Basic Information:
- name: string (required, max 255 chars)
- description: string (rich text, max 5000 chars)
- shortDescription: string (for listings, max 160 chars)

Categorization:
- categoryId: UUID (reference to Category)
- tags: string[] (searchable keywords)
- brand?: string

Pricing:
- price: decimal (base price)
- compareAtPrice?: decimal (original price for discounts)
- costPrice: decimal (for margin calculation)
- currency: string (ISO 4217, e.g., "USD")

Inventory:
- stockQuantity: number
- lowStockThreshold: number
- trackInventory: boolean
- allowBackorder: boolean

Physical Properties:
- weight?: decimal (kg)
- dimensions?: Dimensions
  - length: decimal (cm)
  - width: decimal (cm)
  - height: decimal (cm)

Media:
- images: ImageUrl[]
  - url: string
  - alt: string
  - isPrimary: boolean
- videoUrl?: string

Status & Visibility:
- status: enum (draft, active, archived)
- isVisible: boolean (show on storefront)
- publishedAt?: timestamp

SEO:
- metaTitle?: string
- metaDescription?: string
- urlSlug: string (unique, URL-friendly)

Metadata:
- createdBy: UUID (admin user)
- createdAt: timestamp
- source?: string (import, manual, API)

Which of these would you like to include?
```

### Validation Rules

AI suggests validations:

```
AI: For the RegisterUser command, I recommend these validations:

Email Field:
- Required: true
- Format: RFC 5322 email format
- MaxLength: 255
- Unique: Check against existing users
- Domain: Block disposable email providers (optional)

Password Field:
- Required: true
- MinLength: 8
- MaxLength: 128
- Complexity:
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 number
  - At least 1 special character
- NotCommon: Check against common password list
- NotPersonalInfo: Don't allow name/email in password

FirstName/LastName:
- Required: true
- MinLength: 1
- MaxLength: 100
- Pattern: Letters, spaces, hyphens, apostrophes only
- Trim: Remove leading/trailing whitespace

Age/DateOfBirth:
- Required: false (if collecting)
- MinAge: 13 (COPPA compliance)
- MaxAge: 120 (reasonable limit)
- Format: ISO 8601 date

Would you like me to add these to your command?
```

## Learning Your Style

AI adapts to your preferences:

```
AI: I've noticed you prefer these patterns:

Naming:
- Events: Past tense with "Event" suffix
  (e.g., "UserRegisteredEvent")
- Commands: Imperative without suffix
  (e.g., "RegisterUser" not "RegisterUserCommand")
- Views: Noun phrase with "View" suffix
  (e.g., "UserProfileView")

Attributes:
- IDs: Always UUID type
- Timestamps: Always include timezone (ISO 8601)
- Money: Separate amount (decimal) and currency (string)

Structure:
- Always include metadata (occurredAt, userId)
- Separate address into structured object
- Use enums for status fields

I'll use these conventions for new slices.
Want to modify any of these preferences?
```

## Bulk Generation

Create multiple slices at once:

```
User: "Generate all slices for an e-commerce checkout flow"

AI: I'll create the complete checkout flow with these slices:

1. Shopping Cart Management
   - Add Item to Cart
   - Update Cart Item Quantity
   - Remove Item from Cart
   - Clear Cart

2. Checkout Initiation
   - Begin Checkout
   - Update Shipping Address
   - Select Shipping Method

3. Payment Processing
   - Submit Payment
   - Process Payment
   - Handle Payment Failure

4. Order Completion
   - Place Order
   - Confirm Order
   - Send Confirmation Email

5. Post-Order
   - View Order Details
   - Track Shipment

Total: 14 commands, 22 events, 8 views

Estimated time to create manually: 4-6 hours
AI generation time: 2 minutes

Proceed with generation?
```

## Export and Integration

### Add to Board

```
AI: I've generated your slice. How would you like to add it?

Options:
1. Create stickies on current board
   - Places components in selected area
   - Links them with connectors
   - Adds swimlanes if needed

2. Create new board section
   - Creates dedicated area
   - Adds title and description
   - Organizes with swimlanes

3. Export to clipboard
   - Copy as JSON
   - Import later
   - Share with team

4. Generate code immediately
   - Skip manual placement
   - Go straight to implementation

Choose an option (1-4):
```

## Best Practices

### 1. Start with User Value

Begin with what the user wants to achieve, not technical implementation.

### 2. Review AI Suggestions

Always review and adjust AI-generated models. AI provides starting points, not final solutions.

### 3. Iterate

Build incrementally:
1. Get basic slice from AI
2. Add attributes
3. Refine with validations
4. Add error handling
5. Review as team

### 4. Teach the AI

Provide feedback:
- "This naming is inconsistent"
- "We don't use that pattern"
- "Add more detail to events"

AI learns from your corrections.

### 5. Validate with Stakeholders

Use AI to accelerate creation, but validate with domain experts and stakeholders.

## Next Steps

- [Chat with Your Model](/docs/ai-integration-topics/chatting-with-model/) - Ask questions about your model
- [Generate Specifications](/docs/ai-integration-topics/generating-specs/) - Create documentation
- [Generate Timelines](/docs/ai-integration-topics/generating-timelines/) - Plan implementation
- [AI Integration Hub](/docs/ai-integration/) - Overview of AI features
- [Visual Modeling](/docs/visual-modeling/) - Learn event modeling basics
