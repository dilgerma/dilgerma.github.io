---
layout: docs
title: Generating Specs
---

# Generating Specifications

Automatically generate detailed specifications, API documentation, technical requirements, and user guides from your event models using AI.

## Overview

The Spec Generation feature transforms your visual event model into comprehensive documentation:

- **Technical Specifications** - Detailed system requirements
- **API Documentation** - OpenAPI/Swagger specs
- **User Stories** - Agile story cards with acceptance criteria
- **Architecture Docs** - System design documents
- **Test Scenarios** - Test cases and test data
- **User Guides** - End-user documentation

## Accessing Spec Generation

1. Open your event model in Miro
2. Launch the Event Modeling Toolkit
3. Click **AI Tools** → **Generate Specs**
4. Select the components to document
5. Choose specification type
6. Click **Generate**

## Types of Specifications

### Technical Specifications

Generate detailed technical docs for developers.

#### Example Input

Event model slice:
- Command: Register User
- Event: User Registered
- View: User Profile

#### Generated Output

```markdown
# User Registration - Technical Specification

## Overview
This specification describes the user registration feature, which allows
new users to create accounts in the system.

## Functional Requirements

### FR-1: User Registration
The system shall allow users to register with email and password.

**Acceptance Criteria:**
- AC-1.1: Email must be unique in the system
- AC-1.2: Password must meet security requirements (min 8 characters)
- AC-1.3: System sends verification email after registration
- AC-1.4: User account is created in pending state until verified

### FR-2: Email Verification
The system shall verify user email addresses before activation.

**Acceptance Criteria:**
- AC-2.1: Verification email sent within 1 minute of registration
- AC-2.2: Verification link expires after 24 hours
- AC-2.3: User can request new verification email
- AC-2.4: Account activates upon successful verification

## Non-Functional Requirements

### NFR-1: Performance
- Registration process completes within 2 seconds
- System handles 1000 registrations per minute

### NFR-2: Security
- Passwords hashed using bcrypt (cost factor 12)
- Email verification tokens are cryptographically secure
- Rate limiting: 5 registration attempts per IP per hour

### NFR-3: Reliability
- 99.9% uptime for registration service
- Failed registrations trigger alerts
- All registration events logged for audit

## API Specification

### Register User Endpoint

**POST** `/api/users/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response (Success - 201 Created):**
```json
{
  "userId": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "status": "pending_verification",
  "message": "Registration successful. Please check your email."
}
```

**Response (Error - 400 Bad Request):**
```json
{
  "error": "ValidationError",
  "message": "Email already registered",
  "fields": {
    "email": "This email is already in use"
  }
}
```

## Events

### UserRegistered Event

**Event Type:** `UserRegistered`

**Payload:**
```json
{
  "eventId": "uuid",
  "userId": "uuid",
  "email": "string",
  "firstName": "string",
  "lastName": "string",
  "registeredAt": "timestamp",
  "ipAddress": "string",
  "userAgent": "string"
}
```

**Subscribers:**
- Email Service (sends verification email)
- User Profile Projection (creates user profile view)
- Analytics Service (tracks registration metrics)

## Data Model

### User Profile View (Read Model)

**Table:** `user_profiles`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| user_id | UUID | PRIMARY KEY | User identifier |
| email | VARCHAR(255) | UNIQUE, NOT NULL | User email |
| first_name | VARCHAR(100) | NOT NULL | User first name |
| last_name | VARCHAR(100) | NOT NULL | User last name |
| status | VARCHAR(50) | NOT NULL | Account status |
| registered_at | TIMESTAMP | NOT NULL | Registration time |
| verified_at | TIMESTAMP | NULL | Verification time |

**Indexes:**
- `idx_email` on `email`
- `idx_status` on `status`
- `idx_registered_at` on `registered_at`

## Error Handling

| Error Code | HTTP Status | Description | Resolution |
|------------|-------------|-------------|------------|
| EMAIL_IN_USE | 400 | Email already registered | Use different email or login |
| INVALID_EMAIL | 400 | Email format invalid | Provide valid email format |
| WEAK_PASSWORD | 400 | Password doesn't meet requirements | Use stronger password |
| RATE_LIMIT_EXCEEDED | 429 | Too many registration attempts | Wait before retrying |

## Implementation Notes

### Command Handler
```java
@CommandHandler
public UserAggregate(RegisterUserCommand command) {
    // 1. Validate email format
    validateEmailFormat(command.getEmail());

    // 2. Check email not in use (query read model)
    if (emailExists(command.getEmail())) {
        throw new EmailAlreadyInUseException();
    }

    // 3. Validate password strength
    validatePassword(command.getPassword());

    // 4. Apply UserRegistered event
    apply(new UserRegisteredEvent(
        UUID.randomUUID(),
        command.getEmail(),
        hashPassword(command.getPassword()),
        command.getFirstName(),
        command.getLastName(),
        Instant.now()
    ));
}
```

### Event Handler (Projection)
```java
@EventHandler
public void on(UserRegistered event) {
    UserProfile profile = new UserProfile();
    profile.setUserId(event.getUserId());
    profile.setEmail(event.getEmail());
    profile.setFirstName(event.getFirstName());
    profile.setLastName(event.getLastName());
    profile.setStatus("pending_verification");
    profile.setRegisteredAt(event.getRegisteredAt());

    repository.save(profile);
}
```

## Testing Requirements

### Unit Tests
- Command validation logic
- Password hashing
- Event application

### Integration Tests
- Full registration flow
- Email service integration
- Database persistence

### Test Data
```json
{
  "validUser": {
    "email": "test@example.com",
    "password": "ValidPass123!",
    "firstName": "Test",
    "lastName": "User"
  },
  "invalidEmail": {
    "email": "not-an-email",
    "password": "ValidPass123!",
    "firstName": "Test",
    "lastName": "User"
  }
}
```

## Deployment Considerations

- Database migrations for user_profiles table
- Email service configuration (SMTP settings)
- Rate limiting configuration
- Monitoring and alerting setup

## References
- [Event Modeling Pattern](#)
- [CQRS Best Practices](#)
- [Password Security Guidelines](#)
```

### API Documentation (OpenAPI)

Generate OpenAPI/Swagger specifications.

```yaml
openapi: 3.0.0
info:
  title: Event Modeling System API
  version: 1.0.0
  description: API generated from Event Model

paths:
  /api/users/register:
    post:
      summary: Register new user
      operationId: registerUser
      tags:
        - Users
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RegisterUserCommand'
      responses:
        '201':
          description: User registered successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserRegistrationResponse'
        '400':
          description: Invalid input
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'

  /api/users/{userId}:
    get:
      summary: Get user profile
      operationId: getUserProfile
      tags:
        - Users
      parameters:
        - name: userId
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: User profile retrieved
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserProfile'
        '404':
          description: User not found

components:
  schemas:
    RegisterUserCommand:
      type: object
      required:
        - email
        - password
        - firstName
        - lastName
      properties:
        email:
          type: string
          format: email
          example: user@example.com
        password:
          type: string
          format: password
          minLength: 8
        firstName:
          type: string
          minLength: 1
          maxLength: 100
        lastName:
          type: string
          minLength: 1
          maxLength: 100

    UserProfile:
      type: object
      properties:
        userId:
          type: string
          format: uuid
        email:
          type: string
          format: email
        fullName:
          type: string
        status:
          type: string
          enum: [pending_verification, active, suspended]
        memberSince:
          type: string
          format: date-time

    ErrorResponse:
      type: object
      properties:
        error:
          type: string
        message:
          type: string
        fields:
          type: object
          additionalProperties:
            type: string
```

### User Stories

Generate Agile user stories with acceptance criteria.

```markdown
# User Stories - User Registration Feature

## Story 1: Basic Registration

**As a** new visitor
**I want to** create an account with my email and password
**So that** I can access the platform

**Acceptance Criteria:**
- Given I am on the registration page
- When I enter valid email, password, first name, and last name
- Then my account is created
- And I receive a verification email
- And I see a confirmation message

**Technical Notes:**
- Triggers `RegisterUser` command
- Emits `UserRegistered` event
- Creates record in `UserProfile` view

**Story Points:** 5
**Priority:** High
**Dependencies:** Email service integration

---

## Story 2: Email Verification

**As a** newly registered user
**I want to** verify my email address
**So that** I can activate my account

**Acceptance Criteria:**
- Given I registered and received verification email
- When I click the verification link
- Then my account status changes to "active"
- And I can log in to the system

**Technical Notes:**
- Triggers `VerifyEmail` command
- Emits `EmailVerified` event
- Updates `UserProfile` view

**Story Points:** 3
**Priority:** High
**Dependencies:** Story 1

---

## Story 3: Duplicate Email Prevention

**As the** system
**I want to** prevent duplicate email registrations
**So that** each email is associated with only one account

**Acceptance Criteria:**
- Given an email is already registered
- When someone tries to register with that email
- Then registration fails
- And user sees "Email already in use" error

**Technical Notes:**
- Query check in command handler
- Validation before event emission

**Story Points:** 2
**Priority:** High
**Dependencies:** Story 1
```

## Customizing Generated Specs

### Specify Format

```yaml
specGeneration:
  format: markdown  # or pdf, html, docx
  includeCodeSamples: true
  language: java  # or csharp, typescript, etc.
  style: detailed  # or summary, comprehensive
```

### Add Custom Sections

```yaml
customSections:
  - securityConsiderations
  - performanceMetrics
  - deploymentInstructions
  - troubleshootingGuide
```

### Brand Your Docs

```yaml
branding:
  companyName: "Acme Corp"
  logo: "./assets/logo.png"
  colorScheme: "#4262ff"
  template: "corporate"
```

## Export Options

### Formats
- **Markdown** - Easy to version control
- **PDF** - Shareable documents
- **HTML** - Web-based docs
- **DOCX** - Microsoft Word format
- **Confluence** - Direct export to wiki
- **Notion** - Export to Notion pages

### Destinations
- **Download** - Save locally
- **Git Repository** - Commit to docs folder
- **Documentation Platform** - Push to Confluence, Notion, GitBook
- **Clipboard** - Copy and paste

## Best Practices

### Keep Models Updated

Regenerate specs when model changes:
1. Model changes
2. Click "Regenerate Specs"
3. Review diff
4. Update and commit

### Review AI Output

Always review generated specifications:
- Check for accuracy
- Add missing context
- Verify examples
- Update edge cases

### Version Your Specs

Track specification versions alongside code:
```
docs/
├── specs/
│   ├── v1.0/
│   │   └── user-registration.md
│   └── v1.1/
│       └── user-registration.md
```

## Next Steps

- [Generate Timelines](/docs/ai-integration-topics/generating-timelines/) - Estimate implementation effort
- [Model Slices with AI](/docs/ai-integration-topics/modeling-slices/) - Build models from stories
- [Chat with Your Model](/docs/ai-integration-topics/chatting-with-model/) - Ask questions
- [AI Integration Hub](/docs/ai-integration/) - Overview of AI features
