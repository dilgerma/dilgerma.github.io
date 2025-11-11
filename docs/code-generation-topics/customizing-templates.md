---
layout: docs
title: Customizing Templates
---

# Customizing Templates

Create custom code templates, add hooks, and tailor code generation to match your team's coding standards and architectural patterns.

## Overview

Template customization allows you to:

- **Modify default templates** - Adjust generated code style
- **Create custom templates** - Build organization-specific patterns
- **Add code hooks** - Inject custom logic at specific points
- **Configure naming** - Match your team's conventions
- **Include boilerplate** - Add standard headers, imports, logging

## Template Engine

The toolkit uses **Nunjucks** (Jinja2-like) templating:

```jinja
package {{ packageName }}.{{ module }};

{% for import in imports %}
import {{ import }};
{% endfor %}

/**
 * {{ description }}
 * Generated from: {{ modelSource }}
 * @author Event Modeling Toolkit
 */
public class {{ className }} {
    {% for field in fields %}
    private {{ field.type }} {{ field.name }};
    {% endfor %}
}
```

## Template Structure

### Directory Layout

```
templates/
├── java/
│   ├── command.java.njk
│   ├── event.java.njk
│   ├── aggregate.java.njk
│   ├── projection.java.njk
│   └── controller.java.njk
├── typescript/
│   ├── interface.ts.njk
│   ├── component.tsx.njk
│   ├── hook.ts.njk
│   └── api-client.ts.njk
├── csharp/
│   ├── command.cs.njk
│   ├── event.cs.njk
│   └── aggregate.cs.njk
└── config/
    └── template-config.yaml
```

### Template Configuration

```yaml
# templates/config/template-config.yaml

templateVersion: 1.0
language: java
framework: spring-boot

# Template mappings
templates:
  command: java/command.java.njk
  event: java/event.java.njk
  aggregate: java/aggregate.java.njk
  projection: java/projection.java.njk
  controller: java/controller.java.njk

# Global variables available to all templates
globals:
  author: "Your Organization"
  license: "MIT"
  copyrightYear: 2024

# Naming conventions
naming:
  commandSuffix: Command
  eventSuffix: Event
  aggregateSuffix: Aggregate
  projectionSuffix: Projection
  controllerSuffix: Controller
  style: PascalCase  # or camelCase, snake_case

# Code formatting
formatting:
  indentation: 4
  useTabs: false
  lineWidth: 120
  braceStyle: java  # java, allman, gnu
```

## Customizing Event Templates

### Default Event Template

```jinja
{# templates/java/event.java.njk #}
package {{ packageName }}.events;

import java.time.Instant;
import java.util.UUID;
{% for import in customImports %}
import {{ import }};
{% endfor %}
import lombok.Value;

/**
 * Event: {{ event.name }}
 * {{ event.description }}
 *
 * @author {{ author }}
 */
@Value
public class {{ event.name }}Event {
    {% for field in event.fields %}
    {{ field.type }} {{ field.name }};
    {% endfor %}

    Instant occurredAt;
    UUID eventId;
}
```

### Custom Event Template with Validation

```jinja
{# templates/java/event-custom.java.njk #}
package {{ packageName }}.events;

import java.time.Instant;
import java.util.UUID;
import javax.validation.constraints.*;
{% for import in customImports %}
import {{ import }};
{% endfor %}
import lombok.Value;
import lombok.Builder;

/**
 * Event: {{ event.name }}
 * {{ event.description }}
 *
 * Business Context: {{ event.businessContext }}
 * Generated: {{ generatedDate }}
 *
 * @author {{ author }}
 * @version {{ version }}
 */
@Value
@Builder
public class {{ event.name }}Event implements DomainEvent {

    /**
     * Unique identifier for this event instance
     */
    @NotNull
    UUID eventId;

    /**
     * When this event occurred
     */
    @NotNull
    Instant occurredAt;

    /**
     * Aggregate identifier
     */
    @NotNull
    UUID aggregateId;

    /**
     * Event version for schema evolution
     */
    @NotNull
    @Min(1)
    Integer version;

    {% for field in event.fields %}
    /**
     * {{ field.description | default('Field: ' + field.name) }}
     */
    {% if field.required %}@NotNull{% endif %}
    {% if field.validation %}{{ field.validation }}{% endif %}
    {{ field.type }} {{ field.name }};

    {% endfor %}

    /**
     * Correlation ID for tracing related events
     */
    UUID correlationId;

    /**
     * User who triggered this event
     */
    String userId;

    @Override
    public UUID getEventId() {
        return eventId;
    }

    @Override
    public Instant getTimestamp() {
        return occurredAt;
    }

    @Override
    public String getEventType() {
        return "{{ event.name }}Event";
    }
}
```

## Customizing Command Templates

### Custom Command with Validation

```jinja
{# templates/java/command-custom.java.njk #}
package {{ packageName }}.commands;

import javax.validation.constraints.*;
import lombok.Value;
import lombok.Builder;
{% for import in customImports %}
import {{ import }};
{% endfor %}

/**
 * Command: {{ command.name }}
 * {{ command.description }}
 *
 * Expected Events:
 {% for event in command.expectedEvents %}
 * - {{ event }}
 {% endfor %}
 *
 * @author {{ author }}
 */
@Value
@Builder
public class {{ command.name }}Command {

    {% for field in command.fields %}
    /**
     * {{ field.description | default('Field: ' + field.name) }}
     */
    {% if field.required %}
    @NotNull(message = "{{ field.name }} is required")
    {% endif %}
    {% if field.type == 'String' and field.minLength %}
    @Size(min = {{ field.minLength }}{% if field.maxLength %}, max = {{ field.maxLength }}{% endif %},
          message = "{{ field.name }} must be between {{ field.minLength }} and {{ field.maxLength }} characters")
    {% endif %}
    {% if field.type == 'String' and field.email %}
    @Email(message = "{{ field.name }} must be a valid email address")
    {% endif %}
    {% if field.type == 'String' and field.pattern %}
    @Pattern(regexp = "{{ field.pattern }}", message = "{{ field.name }} format is invalid")
    {% endif %}
    {% if field.type in ['Integer', 'Long', 'BigDecimal'] and field.min is defined %}
    @Min(value = {{ field.min }}, message = "{{ field.name }} must be at least {{ field.min }}")
    {% endif %}
    {% if field.type in ['Integer', 'Long', 'BigDecimal'] and field.max is defined %}
    @Max(value = {{ field.max }}, message = "{{ field.name }} must not exceed {{ field.max }}")
    {% endif %}
    {{ field.type }} {{ field.name }};

    {% endfor %}
}
```

## Customizing Aggregate Templates

### Custom Aggregate with Logging and Metrics

```jinja
{# templates/java/aggregate-custom.java.njk #}
package {{ packageName }}.aggregates;

import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Counter;

import static org.axonframework.modelling.command.AggregateLifecycle.apply;

/**
 * Aggregate: {{ aggregate.name }}
 * {{ aggregate.description }}
 *
 * @author {{ author }}
 */
@Aggregate
public class {{ aggregate.name }}Aggregate {

    private static final Logger logger = LoggerFactory.getLogger({{ aggregate.name }}Aggregate.class);

    @AggregateIdentifier
    private UUID {{ aggregate.idField }};

    {% for field in aggregate.stateFields %}
    private {{ field.type }} {{ field.name }};
    {% endfor %}

    // Metrics
    private static Counter commandCounter;
    private static Counter eventCounter;

    protected {{ aggregate.name }}Aggregate() {
        // Required by Axon
    }

    {% for command in aggregate.commands %}
    /**
     * Command Handler: {{ command.name }}
     * {{ command.description }}
     */
    @CommandHandler
    public {{ 'void' if not loop.first else aggregate.name + 'Aggregate' }}{{ ' ' }}{{ command.methodName }}({{ command.name }}Command command{% if not loop.first %}, MeterRegistry meterRegistry{% endif %}) {
        logger.info("Handling command: {} for aggregate: {}",
                   command.getClass().getSimpleName(),
                   {% if loop.first %}command.get{{ aggregate.idField | capitalize }}(){% else %}this.{{ aggregate.idField }}{% endif %});

        {% if not loop.first %}
        if (commandCounter == null) {
            commandCounter = meterRegistry.counter("commands.processed",
                "aggregate", "{{ aggregate.name }}",
                "command", "{{ command.name }}");
        }
        commandCounter.increment();
        {% endif %}

        // Validation
        {% for validation in command.validations %}
        {{ validation.method }}(command);
        {% endfor %}

        // Business logic
        {% for rule in command.businessRules %}
        // TODO: Implement {{ rule }}
        {% endfor %}

        // Apply event(s)
        {% for event in command.events %}
        logger.debug("Applying event: {{ event.name }}");
        apply(new {{ event.name }}Event(
            {% for field in event.fields %}
            {{ field.value }}{{ ',' if not loop.last else '' }}
            {% endfor %}
        ));
        {% endfor %}

        logger.info("Successfully handled command: {}", command.getClass().getSimpleName());
    }

    {% endfor %}

    {% for event in aggregate.events %}
    /**
     * Event Sourcing Handler: {{ event.name }}
     */
    @EventSourcingHandler
    public void on({{ event.name }}Event event) {
        logger.debug("Applying event: {} to aggregate: {}",
                    event.getClass().getSimpleName(),
                    event.get{{ aggregate.idField | capitalize }}());

        {% for stateChange in event.stateChanges %}
        this.{{ stateChange.field }} = event.get{{ stateChange.eventField | capitalize }}();
        {% endfor %}

        if (eventCounter != null) {
            eventCounter.increment();
        }
    }

    {% endfor %}

    // Validation methods
    {% for command in aggregate.commands %}
    {% for validation in command.validations %}
    private void {{ validation.method }}({{ command.name }}Command command) {
        // TODO: Implement validation logic
        logger.trace("Validating: {}", "{{ validation.description }}");
    }

    {% endfor %}
    {% endfor %}
}
```

## Adding Code Hooks

Hooks allow you to inject custom code at specific points.

### Hook Configuration

```yaml
# templates/config/hooks.yaml

hooks:
  # Before command validation
  beforeCommandValidation:
    enabled: true
    code: |
      logger.info("Validating command: {}", command.getClass().getSimpleName());
      MDC.put("commandType", command.getClass().getSimpleName());

  # After command validation
  afterCommandValidation:
    enabled: true
    code: |
      logger.debug("Command validation successful");
      metrics.incrementCounter("commands.validated");

  # Before event application
  beforeEventApplication:
    enabled: true
    code: |
      logger.debug("Applying event: {}", event.getClass().getSimpleName());
      MDC.put("eventType", event.getClass().getSimpleName());

  # After event application
  afterEventApplication:
    enabled: true
    code: |
      logger.info("Event applied successfully: {}", event.getClass().getSimpleName());
      metrics.incrementCounter("events.applied");
      MDC.remove("eventType");

  # Error handling
  onCommandError:
    enabled: true
    code: |
      logger.error("Command execution failed", exception);
      metrics.incrementCounter("commands.failed");
      MDC.clear();
      throw new CommandExecutionException(exception.getMessage(), exception);

  # Projection update hook
  beforeProjectionUpdate:
    enabled: true
    code: |
      logger.debug("Updating projection: {}", projectionName);

  afterProjectionUpdate:
    enabled: true
    code: |
      logger.info("Projection updated: {}", projectionName);
      cacheInvalidator.invalidate(projectionName);
```

### Using Hooks in Templates

```jinja
@CommandHandler
public {{ aggregate.name }}Aggregate({{ command.name }}Command command) {
    {% if hooks.beforeCommandValidation.enabled %}
    {{ hooks.beforeCommandValidation.code | indent(4) }}
    {% endif %}

    try {
        // Validation
        validateCommand(command);

        {% if hooks.afterCommandValidation.enabled %}
        {{ hooks.afterCommandValidation.code | indent(8) }}
        {% endif %}

        {% if hooks.beforeEventApplication.enabled %}
        {{ hooks.beforeEventApplication.code | indent(8) }}
        {% endif %}

        // Apply events
        apply(new {{ event.name }}Event(/* ... */));

        {% if hooks.afterEventApplication.enabled %}
        {{ hooks.afterEventApplication.code | indent(8) }}
        {% endif %}

    } catch (Exception e) {
        {% if hooks.onCommandError.enabled %}
        {{ hooks.onCommandError.code | indent(8) }}
        {% else %}
        throw e;
        {% endif %}
    }
}
```

## Custom Filters and Functions

Add custom Nunjucks filters and functions.

### Custom Filters

```javascript
// templates/config/custom-filters.js

module.exports = {
  // Convert to snake_case
  snakeCase: (str) => {
    return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
  },

  // Convert to PascalCase
  pascalCase: (str) => {
    return str.replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
  },

  // Generate validation annotation
  validationAnnotation: (field) => {
    const annotations = [];
    if (field.required) annotations.push('@NotNull');
    if (field.email) annotations.push('@Email');
    if (field.minLength) {
      annotations.push(`@Size(min=${field.minLength}${field.maxLength ? `, max=${field.maxLength}` : ''})`);
    }
    return annotations.join('\n');
  },

  // Generate Javadoc
  javadoc: (text, indent = 0) => {
    const lines = text.split('\n');
    const indentation = ' '.repeat(indent);
    return lines.map(line => `${indentation} * ${line}`).join('\n');
  }
};
```

### Using Custom Filters

```jinja
{# Using custom filters in templates #}

{# Snake case conversion #}
const {{ command.name | snakeCase }}_schema = {
  // ...
};

{# Pascal case conversion #}
public class {{ event.name | pascalCase }}Event {
  // ...
}

{# Validation annotations #}
{% for field in command.fields %}
{{ field | validationAnnotation }}
{{ field.type }} {{ field.name }};
{% endfor %}

{# Javadoc generation #}
/**
{{ command.description | javadoc(1) }}
 */
```

## Configuration Management

### Profile-Based Configuration

```yaml
# templates/config/profiles.yaml

profiles:
  development:
    logging:
      level: DEBUG
      includeStackTrace: true
    validation:
      strict: false
    codeStyle:
      includeTODOs: true
      includeExamples: true

  production:
    logging:
      level: INFO
      includeStackTrace: false
    validation:
      strict: true
    codeStyle:
      includeTODOs: false
      includeExamples: false

  testing:
    logging:
      level: TRACE
      includeStackTrace: true
    validation:
      strict: true
    testGeneration:
      includeIntegrationTests: true
      includeMockData: true
```

## Best Practices

### 1. Version Your Templates

```
templates/
├── v1/
│   └── java/
├── v2/
│   └── java/
└── current -> v2
```

### 2. Document Template Variables

```jinja
{#
  Template: Event Definition

  Variables:
  - packageName: Base package for generated code
  - event.name: Name of the event (without suffix)
  - event.description: Business description
  - event.fields: Array of field objects
    - field.name: Field name
    - field.type: Java type
    - field.description: Field description
  - author: Author/organization name

  Example:
    packageName: com.example
    event.name: UserRegistered
    event.fields: [{name: 'userId', type: 'UUID'}, ...]
#}
```

### 3. Test Templates

Create test data and verify output:

```yaml
# templates/test/test-data.yaml
testCases:
  - name: Simple Event
    input:
      event:
        name: UserRegistered
        fields:
          - name: userId
            type: UUID
          - name: email
            type: String
    expectedOutput: |
      public class UserRegisteredEvent {
          UUID userId;
          String email;
      }
```

### 4. Share Templates with Team

- Store in version control
- Document customizations
- Create template library
- Review template changes

## Next Steps

- [Getting Started with Code Generation](/docs/code-generation-topics/getting-started/) - Basic setup
- [Backend Code Generation](/docs/code-generation-topics/backend-code/) - Server-side templates
- [Frontend Code Generation](/docs/code-generation-topics/frontend-code/) - UI component templates
- [Code Generation Hub](/docs/code-generation/) - Overview
