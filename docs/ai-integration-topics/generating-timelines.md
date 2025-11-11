---
layout: docs
title: Generating Timelines
---

# Generating Timelines

Create project timelines, estimate effort, and plan implementation phases based on your event model complexity using AI analysis.

## Overview

The AI Timeline Generator analyzes your event model and produces:

- **Implementation estimates** - Story points and time estimates
- **Project timelines** - Phased delivery schedule
- **Dependency graphs** - What must be built first
- **Resource planning** - Team size and skill requirements
- **Risk assessment** - Complexity and potential blockers

## Accessing Timeline Generation

1. Open your event model in Miro
2. Select the components to estimate
3. Click **AI Tools** → **Generate Timeline**
4. Configure estimation parameters
5. Review and refine the generated timeline

## Timeline Types

### Sprint Planning Timeline

Break your model into sprint-sized deliverables.

#### Example Output

```markdown
# Implementation Timeline - E-Commerce Platform

## Phase 1: Foundation (Sprint 1-2) - 4 weeks

### Sprint 1: Core Infrastructure (2 weeks)
**Goal:** Set up event sourcing infrastructure and user management

**Deliverables:**
- Event store setup (PostgreSQL + event sourcing framework)
- Command/Event infrastructure
- User registration and authentication
- Basic API framework

**Events to Implement:**
- UserRegistered
- UserLoggedIn
- UserLoggedOut

**Effort Estimate:** 80 story points
- Infrastructure: 34 points (complexity: high)
- User Registration: 21 points (complexity: medium)
- Authentication: 25 points (complexity: medium)

**Team:** 4 developers
- 1 Infrastructure specialist
- 2 Backend developers
- 1 Frontend developer

**Risks:**
- ⚠️ Event store learning curve (mitigation: training session)
- ⚠️ Authentication complexity (mitigation: use proven library)

---

### Sprint 2: Product Catalog (2 weeks)
**Goal:** Enable product browsing and search

**Deliverables:**
- Product catalog management
- Product search and filtering
- Image upload and storage
- Product views and projections

**Events to Implement:**
- ProductCreated
- ProductUpdated
- ProductImageUploaded
- ProductPublished

**Effort Estimate:** 55 story points
- Product CRUD: 21 points (complexity: low)
- Search Implementation: 21 points (complexity: medium)
- Image Handling: 13 points (complexity: low)

**Team:** 3 developers
- 2 Backend developers
- 1 Frontend developer

**Dependencies:**
- Requires: Sprint 1 completion
- Blocks: Shopping cart (Sprint 3)

---

## Phase 2: Core Features (Sprint 3-5) - 6 weeks

### Sprint 3: Shopping Cart (2 weeks)
**Goal:** Users can add products to cart and manage quantities

**Deliverables:**
- Shopping cart aggregate
- Cart persistence
- Cart UI components
- Cart synchronization

**Events to Implement:**
- ItemAddedToCart
- ItemRemovedFromCart
- ItemQuantityChanged
- CartCleared

**Effort Estimate:** 34 story points
- Cart Logic: 13 points (complexity: low)
- Cart UI: 13 points (complexity: medium)
- Cart Sync: 8 points (complexity: low)

**Team:** 2 developers
- 1 Backend developer
- 1 Frontend developer

---

### Sprint 4-5: Order Processing (4 weeks)
**Goal:** Complete order placement and payment flow

**Deliverables:**
- Order aggregate and saga
- Payment integration
- Inventory reservation
- Order confirmation

**Events to Implement:**
- OrderPlaced
- PaymentRequested
- PaymentProcessed
- InventoryReserved
- OrderConfirmed

**Effort Estimate:** 89 story points
- Order Aggregate: 21 points (complexity: medium)
- Payment Integration: 34 points (complexity: high)
- Inventory System: 21 points (complexity: medium)
- Order Saga: 13 points (complexity: high)

**Team:** 5 developers
- 3 Backend developers
- 1 Frontend developer
- 1 Payment specialist

**Risks:**
- 🔴 Payment provider integration (mitigation: use sandbox early)
- ⚠️ Distributed transaction complexity (mitigation: saga pattern)
- ⚠️ Inventory race conditions (mitigation: optimistic locking)

---

## Phase 3: Advanced Features (Sprint 6-8) - 6 weeks

### Sprint 6: Order Fulfillment (2 weeks)
### Sprint 7: User Reviews (2 weeks)
### Sprint 8: Admin Dashboard (2 weeks)

[... continues ...]

---

## Summary

**Total Duration:** 16 weeks (8 sprints)
**Total Effort:** 445 story points
**Team Size:** 4-5 developers
**Target Velocity:** 55 points per sprint

**Milestones:**
- ✓ Week 4: User registration and auth complete
- ✓ Week 6: Product catalog live
- ✓ Week 10: Orders and payments working
- ✓ Week 16: MVP launch ready

**Budget Estimate (Rough):**
- Development: $200,000 - $280,000
- Infrastructure: $5,000
- Third-party services: $3,000
- **Total:** $208,000 - $288,000
```

### Roadmap Timeline

High-level phases for stakeholders.

```markdown
# Product Roadmap - Q1-Q4 2024

## Q1: Foundation & Core (Jan-Mar)
**Theme:** Build the MVP foundation

### January
- ✓ Event sourcing infrastructure
- ✓ User management
- ✓ Product catalog

### February
- ⏳ Shopping cart
- ⏳ Basic checkout
- ⏳ Payment integration

### March
- ⏳ Order processing
- ⏳ Inventory management
- ⏳ Email notifications

**Deliverable:** MVP with basic e-commerce flow

---

## Q2: Growth Features (Apr-Jun)
**Theme:** Enhance user experience

### April
- Order history
- User reviews
- Wishlist

### May
- Promotions and discounts
- Loyalty program
- Gift cards

### June
- Advanced search
- Recommendations
- Product comparisons

**Deliverable:** Feature-complete platform

---

## Q3: Scale & Optimize (Jul-Sep)
**Theme:** Performance and reliability

### July-August
- Performance optimization
- Caching layer
- CDN integration
- Load testing

### September
- Monitoring and alerts
- Error tracking
- Analytics dashboard

**Deliverable:** Production-ready platform

---

## Q4: Mobile & International (Oct-Dec)
**Theme:** Expand reach

### October
- Mobile app (iOS/Android)
- Push notifications

### November
- Multi-language support
- Multi-currency support
- Regional payment methods

### December
- International shipping
- Tax calculation
- Holiday promotions

**Deliverable:** Global platform
```

## Estimation Methodology

### Complexity Analysis

AI analyzes each component:

**Simple (1-3 points):**
- Basic CRUD operations
- Simple view projections
- Standard validations

**Medium (5-8 points):**
- Business logic validation
- Multiple event handlers
- API integrations

**Complex (13-21 points):**
- Sagas and orchestration
- Complex aggregates
- Payment integrations
- Real-time features

### Factors Considered

The AI considers:

1. **Number of components**
   - Commands, events, views
   - Attributes and validations

2. **Complexity indicators**
   - Saga patterns
   - External integrations
   - Eventual consistency requirements

3. **Dependencies**
   - Technical dependencies
   - Business process dependencies

4. **Team experience**
   - Familiarity with technology
   - Domain knowledge

5. **Technical debt**
   - Refactoring needs
   - Migration complexity

## Customizing Timelines

### Set Team Parameters

```yaml
team:
  size: 5
  velocity: 40  # story points per sprint
  sprintLength: 2  # weeks
  experience:
    eventSourcing: medium
    domainKnowledge: high
    techStack: high
```

### Configure Estimates

```yaml
estimation:
  unit: storyPoints  # or hours, days
  confidenceLevel: 80  # percentage
  bufferPercentage: 20  # risk buffer
  includeTestingTime: true
  includeReviewTime: true
```

### Add Constraints

```yaml
constraints:
  fixedDeadlines:
    - milestone: "MVP Launch"
      date: "2024-06-30"
  holidays:
    - "2024-12-25"
    - "2024-01-01"
  teamAvailability:
    - person: "John"
      unavailable: ["2024-03-15", "2024-03-22"]
```

## Dependency Management

### Visual Dependency Graph

AI generates a dependency diagram:

```
User Registration
       ↓
Product Catalog ────→ Shopping Cart
       ↓                    ↓
       └──────→ Order Processing ←──┘
                      ↓
            ┌─────────┼─────────┐
            ↓         ↓         ↓
     Payment      Inventory  Shipping
        Processing  Management Coordination
            └─────────┼─────────┘
                      ↓
              Order Fulfillment
                      ↓
              Post-Order Activities
           (Reviews, Loyalty, etc.)
```

### Critical Path

Identifies the critical path:

```markdown
## Critical Path Analysis

**Critical Path Duration:** 14 weeks

**Critical Components:**
1. Event Infrastructure (2 weeks)
2. User Registration (1 week)
3. Product Catalog (2 weeks)
4. Shopping Cart (2 weeks)
5. Order Processing (3 weeks)
6. Payment Integration (3 weeks)
7. Order Fulfillment (1 week)

**Parallel Tracks:**
- Frontend development can proceed in parallel
- Admin features not on critical path
- Review system can be developed later

**Acceleration Opportunities:**
- Add developers to payment integration (high risk)
- Parallelize cart and catalog work (low risk)
- Use payment gateway sandbox early (recommended)
```

## Resource Planning

### Team Composition

```markdown
## Recommended Team Structure

### Core Team (Permanent)
- **Tech Lead** (1) - Architecture, code review
- **Backend Developers** (3) - Event sourcing, APIs
- **Frontend Developer** (2) - React, UI components
- **QA Engineer** (1) - Testing, automation

### Specialized Roles (As Needed)
- **Payment Specialist** (Sprint 4-5)
- **DevOps Engineer** (Sprint 3 onwards)
- **UX Designer** (Sprint 1-3)
- **Security Consultant** (Sprint 8)

### Skill Requirements
- Event sourcing/CQRS experience
- Java/Spring Boot proficiency
- React/TypeScript skills
- PostgreSQL knowledge
- Message broker experience (RabbitMQ/Kafka)
```

## Risk Assessment

### Identified Risks

```markdown
## Risk Register

### High Priority Risks

**R1: Payment Integration Complexity**
- Probability: High (70%)
- Impact: High
- Mitigation:
  - Start sandbox integration in Sprint 2
  - Allocate specialist developer
  - Plan for 2-week buffer
- Contingency: Use alternative payment provider

**R2: Event Store Performance**
- Probability: Medium (40%)
- Impact: High
- Mitigation:
  - Performance testing in Sprint 5
  - Event snapshots implementation
  - Database optimization
- Contingency: Add caching layer

**R3: Team Learning Curve**
- Probability: High (80%)
- Impact: Medium
- Mitigation:
  - Event sourcing training (Week 1)
  - Pair programming
  - Architectural reviews
- Contingency: Reduce Sprint 1 scope

### Medium Priority Risks
[... continues ...]
```

## Updating Timelines

### Track Progress

As implementation proceeds:

```markdown
## Sprint 1 Progress (Week 2)

**Planned:** 80 points
**Completed:** 65 points (81%)
**In Progress:** 10 points
**Blocked:** 5 points

**Completion Status:**
- ✅ Event store setup (34 points) - Done
- ✅ User registration (16 points) - Done
- ⏳ Authentication (15 points) - In progress
- ❌ API docs (5 points) - Blocked (tooling issues)
- ⏸️ Logging setup (10 points) - Deferred

**Velocity:** 65 points (target: 80)
**Adjustment:** Add 15 points to Sprint 2
```

### Regenerate Timeline

Update the model and regenerate:

1. Model changes (new features added)
2. Click "Update Timeline"
3. AI analyzes changes
4. Shows impact on schedule
5. Adjusts estimates

```markdown
## Timeline Impact Analysis

**Changes:**
- Added: Real-time notifications feature
- Modified: Shopping cart (added persistence)
- Removed: Gift card feature (deferred)

**Impact:**
- +1 week to Sprint 6 (notifications)
- +3 days to Sprint 3 (cart persistence)
- -1 week from Sprint 7 (gift cards removed)

**Net Impact:** +1 week to overall schedule
**New Completion Date:** Week 17 (was Week 16)

**Recommendation:** Approve changes, adjust Sprint 6-7 scope
```

## Best Practices

### 1. Start with High-Level

Begin with roadmap, drill down to sprints.

### 2. Include Buffers

Add 20-30% buffer for unknowns.

### 3. Regular Updates

Regenerate timeline every 2-3 sprints.

### 4. Validate with Team

Review AI estimates with developers.

### 5. Track Actual vs. Estimate

Use actuals to improve future estimates.

## Next Steps

- [Model Slices with AI](/docs/ai-integration-topics/modeling-slices/) - Build models from stories
- [Generate Specifications](/docs/ai-integration-topics/generating-specs/) - Create detailed docs
- [Chat with Your Model](/docs/ai-integration-topics/chatting-with-model/) - Ask questions
- [AI Integration Hub](/docs/ai-integration/) - Overview of AI features
