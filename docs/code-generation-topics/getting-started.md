---
layout: docs
title: Getting Started with Code Generation
---

# Getting Started with Code Generation

Learn how to configure and use the code generation features of the Miro Event Modeling Toolkit to transform your event models into production-ready code.

## Prerequisites

Before you begin, ensure you have:

- The Miro Event Modeling Toolkit installed
- An event model with attributes defined
- Basic understanding of your target language/framework
- A development environment set up

## Initial Setup

### Step 1: Access Code Generation Settings

1. Open your Miro board with an event model
2. Launch the Event Modeling Toolkit panel
3. Click on **Settings** (gear icon)
4. Navigate to **Code Generation** tab

### Step 2: Choose Your Stack

Select your target technology stack:

1. **Language**: Java, C#, Node.js, Python, Go, or Kotlin
2. **Framework**: Spring Boot, ASP.NET Core, Express, FastAPI, etc.
3. **Build Tool**: Maven, Gradle, npm, pip, etc.

<div class="info-box">
<strong>Tip:</strong> You can configure multiple generation profiles for different parts of your system (backend, frontend, microservices).
</div>

### Step 3: Basic Configuration

Configure basic generation settings:

```yaml
# Example: Spring Boot with Java
language: java
framework: spring-boot
javaVersion: 17
buildTool: gradle
packageName: com.example.eventmodeling

# Features to enable
features:
  - event-sourcing
  - cqrs
  - rest-api
  - test-generation
```

### Step 4: Set Output Directory

Specify where generated code should be placed:

- **Local generation**: Downloads as ZIP file
- **Direct integration**: Exports to your IDE/repository
- **CI/CD integration**: Exports via webhook or API

## Your First Code Generation

Let's generate code from a simple event model slice.

### Example Model

Consider this user registration slice:

**Command: Register User**
```
Attributes:
- email: string
- password: string
- firstName: string
- lastName: string
```

**Event: User Registered**
```
Attributes:
- userId: uuid
- email: string
- firstName: string
- lastName: string
- registeredAt: timestamp
```

**View: User Profile**
```
Attributes:
- userId: uuid
- email: string
- fullName: string
- memberSince: date
```

### Generate the Code

1. **Select Components**
   - Click on the Command sticky
   - Hold Shift and click on the Event and View stickies
   - All three should be selected

2. **Open Code Generator**
   - Click **Generate Code** button in the toolkit panel
   - The generation dialog opens

3. **Choose Options**
   - Language: Java
   - Framework: Spring Boot
   - Include: Events, Commands, Handlers, API, Tests
   - Format: ZIP file

4. **Generate**
   - Click **Generate** button
   - Wait for generation to complete (usually 5-10 seconds)
   - Download the generated ZIP file

### Review Generated Code

Extract the ZIP file. You'll see a structure like:

```
generated-code/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/eventmodeling/
│   │   │       ├── commands/
│   │   │       │   ├── RegisterUserCommand.java
│   │   │       │   └── UserAggregate.java
│   │   │       ├── events/
│   │   │       │   └── UserRegisteredEvent.java
│   │   │       ├── projections/
│   │   │       │   ├── UserProfile.java
│   │   │       │   └── UserProfileProjection.java
│   │   │       └── api/
│   │   │           └── UserController.java
│   │   └── resources/
│   │       └── application.yml
│   └── test/
│       └── java/
│           └── com/example/eventmodeling/
│               └── UserAggregateTest.java
├── build.gradle
└── README.md
```

## Understanding Generated Code

### Event Definition

The `UserRegisteredEvent.java` file contains:

```java
package com.example.eventmodeling.events;

import java.time.Instant;
import java.util.UUID;
import lombok.Value;

@Value
public class UserRegisteredEvent {
    UUID userId;
    String email;
    String firstName;
    String lastName;
    Instant registeredAt;
}
```

Key points:
- Immutable value object using Lombok's `@Value`
- Type-safe with proper Java types (UUID, Instant)
- Matches your model attributes exactly

### Command Handler

The `UserAggregate.java` file contains:

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
    private UUID userId;
    private String email;

    protected UserAggregate() {
        // Required by Axon
    }

    @CommandHandler
    public UserAggregate(RegisterUserCommand command) {
        // TODO: Add validation logic
        apply(new UserRegisteredEvent(
            UUID.randomUUID(),
            command.getEmail(),
            command.getFirstName(),
            command.getLastName(),
            Instant.now()
        ));
    }

    @EventSourcingHandler
    public void on(UserRegisteredEvent event) {
        this.userId = event.getUserId();
        this.email = event.getEmail();
    }
}
```

Notice the TODO comments where you'll add business logic.

### REST API Controller

The `UserController.java` file provides endpoints:

```java
package com.example.eventmodeling.api;

import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final CommandGateway commandGateway;

    public UserController(CommandGateway commandGateway) {
        this.commandGateway = commandGateway;
    }

    @PostMapping("/register")
    public ResponseEntity<UUID> registerUser(
        @RequestBody RegisterUserRequest request
    ) {
        UUID userId = commandGateway.sendAndWait(
            new RegisterUserCommand(
                request.getEmail(),
                request.getPassword(),
                request.getFirstName(),
                request.getLastName()
            )
        );
        return ResponseEntity.ok(userId);
    }
}
```

Ready-to-use REST endpoints with proper Spring annotations.

## Integrating Generated Code

### Option 1: Copy to Existing Project

1. Extract generated code
2. Copy relevant files to your project
3. Adjust package names if needed
4. Add dependencies from generated `build.gradle` or `pom.xml`
5. Build and test

### Option 2: New Project Scaffold

1. Use generated code as project foundation
2. Add additional configuration files
3. Set up database connections
4. Configure logging and monitoring
5. Deploy

### Option 3: Continuous Regeneration

1. Commit generated code to version control
2. Set up CI/CD pipeline to regenerate on model changes
3. Use Git to track differences
4. Merge manual changes carefully

## Common Generation Patterns

### Pattern 1: Command → Event → View

Most common slice pattern:
- Generates command handler
- Generates event definition
- Generates projection for view
- Generates API endpoints

### Pattern 2: Event → Multiple Views

When one event updates multiple views:
- Generates single event definition
- Generates multiple projection handlers
- Each projection updates its own view

### Pattern 3: Command → Multiple Events

When one command produces multiple events:
- Generates single command handler
- Generates multiple event definitions
- Command handler applies all events

## Configuration Options

### Naming Conventions

Customize generated names:

```yaml
naming:
  commandSuffix: Command      # RegisterUserCommand
  eventSuffix: Event          # UserRegisteredEvent
  aggregateSuffix: Aggregate  # UserAggregate
  handlerSuffix: Handler      # UserRegisteredHandler
  camelCase: true             # or snake_case, PascalCase
```

### Code Style

Configure formatting:

```yaml
formatting:
  indentation: 4              # spaces or tabs
  lineWidth: 120              # max line length
  braceStyle: java            # java, allman, gnu
  importOrder: alphabetical   # or grouped
```

### Feature Toggles

Enable/disable features:

```yaml
features:
  eventSourcing: true         # Event sourcing support
  cqrs: true                  # CQRS pattern
  restApi: true               # REST API generation
  graphqlApi: false           # GraphQL API
  testGeneration: true        # Unit tests
  integrationTests: false     # Integration tests
  documentation: true         # Code comments
  swagger: true               # OpenAPI/Swagger docs
```

## Troubleshooting

### Issue: Generation Fails

**Symptoms**: Error message during generation

**Solutions**:
1. Ensure all components have attributes defined
2. Check that model doesn't have circular dependencies
3. Verify language/framework is supported
4. Check toolkit version is up to date

### Issue: Generated Code Won't Compile

**Symptoms**: Compilation errors after generation

**Solutions**:
1. Check Java/C#/Node version matches configuration
2. Add missing dependencies to `build.gradle` or `pom.xml`
3. Ensure package names don't conflict
4. Run `./gradlew clean build` to refresh

### Issue: Missing Generated Files

**Symptoms**: Expected files not in output

**Solutions**:
1. Check feature toggles in configuration
2. Ensure components were selected before generation
3. Verify output directory permissions
4. Try regenerating with verbose logging enabled

## Best Practices

### 1. Start Small

Begin with a single slice:
- One command
- One event
- One view

Verify generated code works before scaling up.

### 2. Review Before Using

Always review generated code:
- Check for TODO comments
- Add validation logic
- Implement error handling
- Add logging

### 3. Customize Templates Later

Use default templates initially. Customize after understanding patterns.

### 4. Version Control Everything

- Commit generated code
- Track configuration files
- Document customizations

### 5. Automate Regeneration

Set up CI/CD to regenerate when model changes:
- Webhook from Miro board updates
- Scheduled regeneration
- Manual trigger in pipeline

## Next Steps

Now that you understand the basics:

- [Generate Backend Code](/docs/code-generation-topics/backend-code/) - Dive deeper into server-side generation
- [Generate Frontend Code](/docs/code-generation-topics/frontend-code/) - Create UI components
- [Customize Templates](/docs/code-generation-topics/customizing-templates/) - Tailor code to your standards

## Additional Resources

- [Code Generation Settings Reference](#) - Complete configuration options
- [Supported Frameworks](#) - Full list of supported stacks
- [Code Generation Hub](/docs/code-generation/) - Overview of code generation features
