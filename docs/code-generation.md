---
layout: docs
title: Code Generation
---

Transform your event models into production-ready code. Learn how to configure and use the code generation features of the Miro Event Modeling Toolkit.

## Overview

The toolkit can generate boilerplate code from your event models, including:

- Event definitions and schemas
- Command handlers
- Event handlers
- Read model projections
- API endpoints
- Database schemas
- Test scaffolding

## Supported Languages and Frameworks

### Backend Frameworks

- **Java**: Spring Boot, Axon Framework, Eventuate
- **C#/.NET**: ASP.NET Core, MassTransit, NServiceBus
- **Node.js**: Express, NestJS, EventStore
- **Python**: FastAPI, Django, Flask
- **Go**: Echo, Gin, NATS
- **Kotlin**: Spring Boot, Ktor

### Frontend Frameworks

- **React**: TypeScript, Redux
- **Vue.js**: TypeScript, Pinia
- **Angular**: TypeScript, NgRx

## Configuration

### Setting Up Code Generation

1. Open the toolkit panel
2. Navigate to **Settings** → **Code Generation**
3. Configure your preferences

### Basic Configuration

```yaml
language: java
framework: spring-boot
package: com.example.eventmodeling
version: 17
buildTool: gradle

features:
  - event-sourcing
  - cqrs
  - api-generation
  - test-generation
```

### Advanced Configuration

```yaml
codeGeneration:
  outputDirectory: ./src/generated
  overwriteExisting: false
  formatting:
    indentation: 2
    lineWidth: 120

  naming:
    eventSuffix: Event
    commandSuffix: Command
    handlerSuffix: Handler

  templates:
    custom: ./templates
    override: true
```

## Generating Code

### From the UI

1. Select the components to generate code for
2. Click **Generate Code** in the toolkit panel
3. Choose generation options:
   - Target language/framework
   - Output location
   - Features to include
4. Click **Generate**
5. Review and download generated files

### Batch Generation

Generate code for entire model:

1. Click **Generate All**
2. Select scope:
   - Current board
   - Selected area
   - Specific swim lanes
3. Configure options
4. Generate and download as ZIP

## Generated Code Structure

### Event Definitions

**Input Model**:
```
Event: User Registered
- userId: String
- email: String
- name: String
- registeredAt: DateTime
```

**Generated Java**:
```java
package com.example.eventmodeling.events;

import java.time.Instant;
import lombok.Value;

@Value
public class UserRegisteredEvent {
    String userId;
    String email;
    String name;
    Instant registeredAt;
}
```

**Generated TypeScript**:
```typescript
export interface UserRegisteredEvent {
  userId: string;
  email: string;
  name: string;
  registeredAt: Date;
}
```

### Command Handlers

**Input Model**:
```
Command: Register User
Input:
- email: String
- password: String
- name: String

Business Logic:
- Validate email format
- Check password strength
- Verify email not in use

Output Event: User Registered
```

**Generated Java (Spring Boot + Axon)**:
```java
package com.example.eventmodeling.commands;

import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.spring.stereotype.Aggregate;

import static org.axonframework.modelling.command.AggregateLifecycle.apply;

@Aggregate
public class UserAggregate {

    @AggregateIdentifier
    private String userId;

    protected UserAggregate() {
        // Required by Axon
    }

    @CommandHandler
    public UserAggregate(RegisterUserCommand command) {
        // Validation
        validateEmail(command.getEmail());
        validatePassword(command.getPassword());
        checkEmailNotInUse(command.getEmail());

        // Apply event
        apply(new UserRegisteredEvent(
            UUID.randomUUID().toString(),
            command.getEmail(),
            command.getName(),
            Instant.now()
        ));
    }

    @EventSourcingHandler
    public void on(UserRegisteredEvent event) {
        this.userId = event.getUserId();
    }

    private void validateEmail(String email) {
        if (!email.matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            throw new IllegalArgumentException("Invalid email format");
        }
    }

    private void validatePassword(String password) {
        if (password.length() < 8) {
            throw new IllegalArgumentException("Password too short");
        }
    }

    private void checkEmailNotInUse(String email) {
        // TODO: Implement check
    }
}
```

### Event Handlers (Projections)

**Input Model**:
```
Event: User Registered
View: User Profile
Display:
- User ID
- Email
- Name
- Registration Date
```

**Generated Java**:
```java
package com.example.eventmodeling.projections;

import org.axonframework.eventhandling.EventHandler;
import org.springframework.stereotype.Component;

@Component
public class UserProfileProjection {

    private final UserProfileRepository repository;

    public UserProfileProjection(UserProfileRepository repository) {
        this.repository = repository;
    }

    @EventHandler
    public void on(UserRegisteredEvent event) {
        UserProfile profile = new UserProfile(
            event.getUserId(),
            event.getEmail(),
            event.getName(),
            event.getRegisteredAt()
        );
        repository.save(profile);
    }
}
```

### API Endpoints

**Generated Spring Boot REST Controller**:
```java
package com.example.eventmodeling.api;

import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final CommandGateway commandGateway;
    private final UserProfileRepository profileRepository;

    public UserController(
        CommandGateway commandGateway,
        UserProfileRepository profileRepository
    ) {
        this.commandGateway = commandGateway;
        this.profileRepository = profileRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(
        @RequestBody RegisterUserRequest request
    ) {
        String userId = commandGateway.sendAndWait(
            new RegisterUserCommand(
                request.getEmail(),
                request.getPassword(),
                request.getName()
            )
        );
        return ResponseEntity.ok(userId);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserProfile> getUserProfile(
        @PathVariable String userId
    ) {
        return profileRepository.findById(userId)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
```

## Customizing Generation

### Custom Templates

Create custom code templates:

1. Create template directory
2. Add template files (using Nunjucks syntax)
3. Configure template path in settings

**Example Template** (`event.java.njk`):
```java
package {{ package }}.events;

import java.time.Instant;
{% for import in imports %}
import {{ import }};
{% endfor %}

/**
 * {{ event.description }}
 */
@Value
public class {{ event.name }}Event {
    {% for field in event.fields %}
    {{ field.type }} {{ field.name }};
    {% endfor %}
    Instant occurredAt;
}
```

### Code Hooks

Add custom code sections:

```yaml
hooks:
  beforeValidation: |
    logger.info("Validating command: {}", command);

  afterEventApplication: |
    metrics.incrementCounter("events.applied");

  errorHandling: |
    logger.error("Command failed", exception);
    throw new BusinessException(exception.getMessage());
```

## Database Schema Generation

Generate database schemas for read models.

### SQL Generation

**Input**: User Profile View

**Generated SQL (PostgreSQL)**:
```sql
CREATE TABLE user_profiles (
    user_id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    registered_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_profiles_email ON user_profiles(email);
CREATE INDEX idx_user_profiles_registered_at ON user_profiles(registered_at);
```

### Migration Scripts

Generate database migration scripts:

```sql
-- V1__create_user_profiles.sql
CREATE TABLE user_profiles (
    user_id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    registered_at TIMESTAMP NOT NULL
);

-- V2__add_user_profile_indexes.sql
CREATE INDEX idx_user_profiles_email ON user_profiles(email);
```

## Test Generation

Generate test scaffolding:

### Unit Tests

**Generated JUnit Test**:
```java
package com.example.eventmodeling.commands;

import org.axonframework.test.aggregate.AggregateTestFixture;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserAggregateTest {

    private AggregateTestFixture<UserAggregate> fixture;

    @BeforeEach
    void setUp() {
        fixture = new AggregateTestFixture<>(UserAggregate.class);
    }

    @Test
    void shouldRegisterUser() {
        fixture.givenNoPriorActivity()
               .when(new RegisterUserCommand(
                   "user@example.com",
                   "password123",
                   "John Doe"
               ))
               .expectEvents(new UserRegisteredEvent(
                   // userId generated
                   "user@example.com",
                   "John Doe",
                   // timestamp generated
               ));
    }

    @Test
    void shouldRejectInvalidEmail() {
        fixture.givenNoPriorActivity()
               .when(new RegisterUserCommand(
                   "invalid-email",
                   "password123",
                   "John Doe"
               ))
               .expectException(IllegalArgumentException.class);
    }
}
```

## Integration with Build Tools

### Gradle Plugin

```gradle
plugins {
    id 'com.example.eventmodeling' version '1.0.0'
}

eventModeling {
    modelFile = file('event-model.json')
    outputDir = file('src/main/generated')
    language = 'java'
    framework = 'spring-boot'
}

// Generate code before compilation
compileJava.dependsOn generateCode
```

### Maven Plugin

```xml
<plugin>
    <groupId>com.example</groupId>
    <artifactId>eventmodeling-maven-plugin</artifactId>
    <version>1.0.0</version>
    <executions>
        <execution>
            <goals>
                <goal>generate</goal>
            </goals>
        </execution>
    </executions>
    <configuration>
        <modelFile>event-model.json</modelFile>
        <outputDirectory>src/main/generated</outputDirectory>
        <language>java</language>
        <framework>spring-boot</framework>
    </configuration>
</plugin>
```

## Export Formats

### Export Options

- **Source Code**: Generated code files
- **OpenAPI/Swagger**: API documentation
- **JSON Schema**: Event schemas
- **AsyncAPI**: Event streaming documentation
- **GraphQL Schema**: GraphQL API definition

### Exporting Models

1. Click **Export** in toolkit panel
2. Select format
3. Configure export options
4. Download or copy to clipboard

## Best Practices

### 1. Review Generated Code

Always review and customize generated code:
- Add business logic
- Implement TODOs
- Add error handling
- Optimize performance

### 2. Version Control

- Commit generated code to version control
- Use consistent generation settings
- Document customizations

### 3. Separation of Concerns

- Keep generated code separate
- Don't mix generated and hand-written code
- Use partial classes or inheritance

### 4. Continuous Generation

- Regenerate when model changes
- Automate in CI/CD pipeline
- Test after regeneration

## Troubleshooting

### Common Issues

**Problem**: Generated code doesn't compile
- **Solution**: Check language/framework version compatibility

**Problem**: Missing dependencies
- **Solution**: Review generated pom.xml or build.gradle

**Problem**: Naming conflicts
- **Solution**: Configure custom naming conventions

## Next Steps

Enhance your generated code with AI:

- [AI Integration](ai-integration) - Use AI to improve code quality and add intelligent features
