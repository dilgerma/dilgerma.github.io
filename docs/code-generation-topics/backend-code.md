---
layout: docs
title: Generating Backend Code
---

# Generating Backend Code

Generate server-side code for commands, events, aggregates, handlers, APIs, and database schemas from your event models.

## Overview

Backend code generation creates the foundation of your event-sourced system:

- **Command handlers** - Process user actions
- **Event definitions** - Immutable facts
- **Aggregates** - Business logic containers
- **Event handlers** - Projections and read models
- **API endpoints** - REST, GraphQL, gRPC
- **Database schemas** - Tables and migrations
- **Test scaffolding** - Unit and integration tests

## Supported Backend Frameworks

### Java Ecosystem

**Spring Boot + Axon Framework**
```yaml
language: java
framework: spring-boot-axon
javaVersion: 17
buildTool: gradle
dependencies:
  - axon-spring-boot-starter
  - spring-boot-starter-data-jpa
  - spring-boot-starter-web
```

**Spring Boot + Eventuate**
```yaml
language: java
framework: spring-boot-eventuate
eventuate:
  eventStore: postgres
  cdc: enabled
```

### .NET Ecosystem

**ASP.NET Core + MassTransit**
```yaml
language: csharp
framework: aspnetcore-masstransit
dotnetVersion: 8.0
messagebroker: rabbitmq
```

**ASP.NET Core + NServiceBus**
```yaml
language: csharp
framework: aspnetcore-nservicebus
transport: azure-service-bus
```

### Node.js Ecosystem

**Express + EventStore**
```yaml
language: typescript
framework: express-eventstore
nodeVersion: 20
eventStore: eventstoredb
```

**NestJS + CQRS**
```yaml
language: typescript
framework: nestjs-cqrs
nestVersion: 10
```

### Python Ecosystem

**FastAPI + Eventsourcing**
```yaml
language: python
framework: fastapi
pythonVersion: 3.11
eventSourcing: eventsourcing-py
```

**Django + Django-EventStore**
```yaml
language: python
framework: django
djangoVersion: 4.2
```

### Go Ecosystem

**Echo + GoEventStore**
```yaml
language: go
framework: echo
goVersion: 1.21
eventStore: goeventstore
```

## Generating Aggregates and Command Handlers

Aggregates enforce business rules and generate events.

### Model Input

```
Command: Create Order
Attributes:
- customerId: uuid
- items: array
  - productId: uuid
  - quantity: number
- shippingAddress: object

Business Rules:
- Customer must exist
- All products must be in stock
- Order total > $0

Output Events:
- Order Created
- Inventory Reserved
```

### Generated Java (Axon)

```java
package com.example.orders.command;

import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;

import java.util.UUID;

@Aggregate
public class OrderAggregate {

    @AggregateIdentifier
    private UUID orderId;

    private UUID customerId;
    private OrderStatus status;

    protected OrderAggregate() {
        // Required by Axon
    }

    @CommandHandler
    public OrderAggregate(CreateOrderCommand command) {
        // Validate command
        validateCustomerExists(command.getCustomerId());
        validateProductsInStock(command.getItems());
        validateOrderTotal(command.getItems());

        // Calculate order details
        BigDecimal total = calculateTotal(command.getItems());

        // Apply events
        AggregateLifecycle.apply(new OrderCreatedEvent(
            UUID.randomUUID(),
            command.getCustomerId(),
            command.getItems(),
            total,
            command.getShippingAddress(),
            Instant.now()
        ));

        AggregateLifecycle.apply(new InventoryReservedEvent(
            orderId,
            command.getItems(),
            Instant.now()
        ));
    }

    @EventSourcingHandler
    public void on(OrderCreatedEvent event) {
        this.orderId = event.getOrderId();
        this.customerId = event.getCustomerId();
        this.status = OrderStatus.CREATED;
    }

    @EventSourcingHandler
    public void on(InventoryReservedEvent event) {
        this.status = OrderStatus.INVENTORY_RESERVED;
    }

    // Validation methods
    private void validateCustomerExists(UUID customerId) {
        // TODO: Implement customer validation
    }

    private void validateProductsInStock(List<OrderItem> items) {
        // TODO: Check inventory
    }

    private void validateOrderTotal(List<OrderItem> items) {
        BigDecimal total = calculateTotal(items);
        if (total.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Order total must be > 0");
        }
    }

    private BigDecimal calculateTotal(List<OrderItem> items) {
        // TODO: Calculate from price lookup
        return BigDecimal.ZERO;
    }
}
```

### Generated C# (ASP.NET Core)

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace EventModeling.Orders.Domain
{
    public class OrderAggregate
    {
        public Guid OrderId { get; private set; }
        public Guid CustomerId { get; private set; }
        public OrderStatus Status { get; private set; }
        private readonly List<DomainEvent> _changes = new();

        public OrderAggregate(CreateOrderCommand command)
        {
            // Validate
            ValidateCustomerExists(command.CustomerId);
            ValidateProductsInStock(command.Items);
            ValidateOrderTotal(command.Items);

            // Apply events
            Apply(new OrderCreatedEvent
            {
                OrderId = Guid.NewGuid(),
                CustomerId = command.CustomerId,
                Items = command.Items,
                Total = CalculateTotal(command.Items),
                ShippingAddress = command.ShippingAddress,
                CreatedAt = DateTime.UtcNow
            });

            Apply(new InventoryReservedEvent
            {
                OrderId = OrderId,
                Items = command.Items,
                ReservedAt = DateTime.UtcNow
            });
        }

        private void Apply(DomainEvent @event)
        {
            When(@event);
            _changes.Add(@event);
        }

        private void When(DomainEvent @event)
        {
            switch (@event)
            {
                case OrderCreatedEvent e:
                    OrderId = e.OrderId;
                    CustomerId = e.CustomerId;
                    Status = OrderStatus.Created;
                    break;

                case InventoryReservedEvent e:
                    Status = OrderStatus.InventoryReserved;
                    break;
            }
        }

        // Validation methods...
    }
}
```

## Generating Event Handlers and Projections

Event handlers build read models from events.

### Model Input

```
Event: Order Created
View: Order Summary
Attributes:
- orderId: uuid
- customerName: string
- itemCount: number
- total: decimal
- status: string
- createdAt: timestamp
```

### Generated Java (Projection)

```java
package com.example.orders.query;

import org.axonframework.eventhandling.EventHandler;
import org.springframework.stereotype.Component;

@Component
public class OrderSummaryProjection {

    private final OrderSummaryRepository repository;
    private final CustomerService customerService;

    public OrderSummaryProjection(
        OrderSummaryRepository repository,
        CustomerService customerService
    ) {
        this.repository = repository;
        this.customerService = customerService;
    }

    @EventHandler
    public void on(OrderCreatedEvent event) {
        // Fetch additional data
        String customerName = customerService
            .getCustomerName(event.getCustomerId());

        // Create projection
        OrderSummary summary = OrderSummary.builder()
            .orderId(event.getOrderId())
            .customerName(customerName)
            .itemCount(event.getItems().size())
            .total(event.getTotal())
            .status("CREATED")
            .createdAt(event.getCreatedAt())
            .build();

        repository.save(summary);
    }

    @EventHandler
    public void on(OrderShippedEvent event) {
        repository.findById(event.getOrderId())
            .ifPresent(summary -> {
                summary.setStatus("SHIPPED");
                summary.setShippedAt(event.getShippedAt());
                repository.save(summary);
            });
    }
}
```

### Generated TypeScript (NestJS)

```typescript
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@EventsHandler(OrderCreatedEvent)
export class OrderSummaryProjection implements IEventHandler<OrderCreatedEvent> {
  constructor(
    @InjectRepository(OrderSummary)
    private readonly repository: Repository<OrderSummary>,
    private readonly customerService: CustomerService,
  ) {}

  async handle(event: OrderCreatedEvent): Promise<void> {
    // Fetch additional data
    const customerName = await this.customerService
      .getCustomerName(event.customerId);

    // Create projection
    const summary = this.repository.create({
      orderId: event.orderId,
      customerName,
      itemCount: event.items.length,
      total: event.total,
      status: 'CREATED',
      createdAt: event.createdAt,
    });

    await this.repository.save(summary);
  }
}
```

## Generating REST APIs

Generate REST controllers/routes from your model.

### Generated Spring Boot Controller

```java
package com.example.orders.api;

import org.axonframework.commandhandling.gateway.CommandGateway;
import org.axonframework.messaging.responsetypes.ResponseTypes;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final CommandGateway commandGateway;
    private final QueryGateway queryGateway;

    public OrderController(
        CommandGateway commandGateway,
        QueryGateway queryGateway
    ) {
        this.commandGateway = commandGateway;
        this.queryGateway = queryGateway;
    }

    @PostMapping
    public CompletableFuture<ResponseEntity<UUID>> createOrder(
        @RequestBody CreateOrderRequest request
    ) {
        return commandGateway
            .send(new CreateOrderCommand(
                request.getCustomerId(),
                request.getItems(),
                request.getShippingAddress()
            ))
            .thenApply(orderId -> ResponseEntity.ok((UUID) orderId));
    }

    @GetMapping("/{orderId}")
    public CompletableFuture<ResponseEntity<OrderSummary>> getOrder(
        @PathVariable UUID orderId
    ) {
        return queryGateway
            .query(
                new GetOrderQuery(orderId),
                ResponseTypes.instanceOf(OrderSummary.class)
            )
            .thenApply(ResponseEntity::ok);
    }

    @GetMapping
    public CompletableFuture<ResponseEntity<List<OrderSummary>>> listOrders(
        @RequestParam(required = false) UUID customerId,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size
    ) {
        return queryGateway
            .query(
                new ListOrdersQuery(customerId, page, size),
                ResponseTypes.multipleInstancesOf(OrderSummary.class)
            )
            .thenApply(ResponseEntity::ok);
    }
}
```

## Generating Database Schemas

Create SQL schemas for read models.

### PostgreSQL Schema Generation

```sql
-- Generated from Order Summary View

CREATE TABLE order_summaries (
    order_id UUID PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    item_count INTEGER NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    shipped_at TIMESTAMP,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_summaries_customer_name
    ON order_summaries(customer_name);

CREATE INDEX idx_order_summaries_status
    ON order_summaries(status);

CREATE INDEX idx_order_summaries_created_at
    ON order_summaries(created_at);

-- Trigger for updated_date
CREATE OR REPLACE FUNCTION update_updated_date_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_date = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_order_summaries_updated_date
    BEFORE UPDATE ON order_summaries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_date_column();
```

### MongoDB Schema Generation

```javascript
// Generated MongoDB schema

const orderSummarySchema = new Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  customerName: {
    type: String,
    required: true,
    index: true
  },
  itemCount: {
    type: Number,
    required: true
  },
  total: {
    type: Decimal128,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['CREATED', 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELLED'],
    index: true
  },
  createdAt: {
    type: Date,
    required: true,
    index: true
  },
  shippedAt: Date
}, {
  timestamps: true,
  collection: 'order_summaries'
});

module.exports = mongoose.model('OrderSummary', orderSummarySchema);
```

## Integration with Build Tools

### Gradle Plugin

```gradle
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.0'
    id 'com.example.eventmodeling' version '1.0.0'
}

eventModeling {
    modelSource = file('miro-model.json')
    outputDir = file('src/main/generated')
    language = 'java'
    framework = 'spring-boot-axon'

    generation {
        commands = true
        events = true
        aggregates = true
        projections = true
        api = true
        tests = true
    }
}

// Ensure code is generated before compilation
compileJava.dependsOn generateEventModelingCode

sourceSets {
    main {
        java {
            srcDirs += 'src/main/generated'
        }
    }
}
```

## Next Steps

- [Generate Frontend Code](/docs/code-generation-topics/frontend-code/) - Create UI components
- [Customize Templates](/docs/code-generation-topics/customizing-templates/) - Tailor generated code
- [Code Generation Hub](/docs/code-generation/) - Overview and getting started
