---
layout: default
title: Code Generation Best Practices
---

<div class="blog-post">
  <a href="{{ '/docs/blog' | relative_url }}" class="blog-back-link">&larr; Back to Blog</a>

  <div class="blog-post-header">
    <h1>Code Generation Best Practices</h1>
    <p class="blog-post-subtitle">Transform your event models into production-ready code efficiently</p>
    <div class="blog-post-meta">
      <span>November 5, 2025</span>
      <span>8 min read</span>
      <span>Development</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/code-generation.jpg' | relative_url }}" alt="Code Generation Best Practices">
  </div>

  <div class="blog-post-content">
    <h2>Introduction</h2>
    <p>Code generation is one of the most powerful features of the Miro Event Modeling Toolkit. By transforming your visual models directly into code, you can dramatically reduce development time while ensuring consistency between design and implementation. This guide covers best practices for maximizing the value of code generation.</p>

    <h2>Setting Up for Success</h2>
    <p>Before generating code, ensure your event models are properly structured:</p>

    <h3>Complete Your Model</h3>
    <p>Generate code only when your model is sufficiently detailed. At minimum, ensure you have:
    <ul>
      <li>All events properly named and connected</li>
      <li>Commands with clear triggers and outcomes</li>
      <li>Read models with defined data requirements</li>
      <li>Aggregate boundaries clearly marked</li>
    </ul>
    </p>

    <h3>Use Consistent Naming</h3>
    <p>Follow these naming conventions for optimal code generation:
    <ul>
      <li>Events: Past tense, PascalCase (e.g., OrderPlaced, PaymentProcessed)</li>
      <li>Commands: Imperative, PascalCase (e.g., PlaceOrder, ProcessPayment)</li>
      <li>Aggregates: Noun, PascalCase (e.g., Order, Payment)</li>
      <li>Properties: camelCase or snake_case depending on target language</li>
    </ul>
    </p>

    <h2>Choosing Your Target</h2>
    <p>The toolkit supports multiple languages and frameworks. Choose based on your needs:</p>

    <h3>Language Considerations</h3>
    <p>Different languages excel in different scenarios:
    <ul>
      <li><strong>C#/.NET:</strong> Excellent for enterprise applications with robust event sourcing support</li>
      <li><strong>Java/Spring:</strong> Strong ecosystem for microservices and event-driven architectures</li>
      <li><strong>TypeScript/Node.js:</strong> Great for rapid development and full-stack JavaScript applications</li>
      <li><strong>Go:</strong> Ideal for high-performance services and cloud-native applications</li>
    </ul>
    </p>

    <h3>Framework Selection</h3>
    <p>Select frameworks that align with your event modeling approach:
    <ul>
      <li>Event sourcing: Axon Framework, EventStore, Marten</li>
      <li>CQRS: MediatR, NServiceBus, Wolverine</li>
      <li>Message brokers: RabbitMQ, Kafka, Azure Service Bus</li>
    </ul>
    </p>

    <h2>Customizing Generated Code</h2>
    <p>Customize code generation to match your team's standards:</p>

    <h3>Templates</h3>
    <p>Modify generation templates to include:
    <ul>
      <li>Your organization's code headers and licensing</li>
      <li>Specific logging frameworks and patterns</li>
      <li>Custom base classes or interfaces</li>
      <li>Dependency injection configuration</li>
    </ul>
    </p>

    <h3>Annotations and Metadata</h3>
    <p>Enrich your model with metadata that influences code generation:
    <ul>
      <li>Validation rules for commands</li>
      <li>Authorization requirements</li>
      <li>Performance hints (caching, indexing)</li>
      <li>Documentation comments</li>
    </ul>
    </p>

    <h2>Integration Strategies</h2>
    <p>Integrate generated code effectively into your workflow:</p>

    <h3>Continuous Generation</h3>
    <p>Set up automated code generation in your CI/CD pipeline:
    <ol>
      <li>Export your Miro model as JSON</li>
      <li>Run the code generator as part of your build process</li>
      <li>Validate generated code against your model</li>
      <li>Merge changes following your team's review process</li>
    </ol>
    </p>

    <h3>Incremental Updates</h3>
    <p>Handle model changes gracefully:
    <ul>
      <li>Use partial classes or interfaces to separate generated code from custom logic</li>
      <li>Mark generated files clearly to avoid manual edits</li>
      <li>Version your models alongside your code</li>
      <li>Use code generation tools that support merge-friendly output</li>
    </ul>
    </p>

    <h2>Generated Code Structure</h2>
    <p>Understand what gets generated and where to add custom logic:</p>

    <h3>Events and Commands</h3>
    <p>Generated as immutable DTOs with:
    <ul>
      <li>Type-safe properties</li>
      <li>Serialization attributes</li>
      <li>Validation rules</li>
      <li>Correlation IDs and metadata</li>
    </ul>
    </p>

    <h3>Aggregates</h3>
    <p>Generated with skeleton implementations:
    <ul>
      <li>Command handlers (to be implemented)</li>
      <li>Event application methods (partially implemented)</li>
      <li>Business logic placeholders</li>
      <li>State management boilerplate</li>
    </ul>
    </p>

    <h3>Read Models</h3>
    <p>Generated as projections with:
    <ul>
      <li>Event handlers for building state</li>
      <li>Query interfaces</li>
      <li>Caching configurations</li>
      <li>Database mapping attributes</li>
    </ul>
    </p>

    <h2>Testing Generated Code</h2>
    <p>Ensure your generated code works as expected:</p>

    <h3>Automated Tests</h3>
    <p>Generate test scaffolding alongside production code:
    <ul>
      <li>Unit tests for command handlers</li>
      <li>Integration tests for event flows</li>
      <li>Property-based tests for invariants</li>
      <li>Contract tests for APIs</li>
    </ul>
    </p>

    <h3>Validation</h3>
    <p>Verify that generated code matches your model:
    <ul>
      <li>Compare event schemas</li>
      <li>Validate command-event relationships</li>
      <li>Check read model completeness</li>
      <li>Verify aggregate boundaries</li>
    </ul>
    </p>

    <h2>Common Pitfalls</h2>
    <p>Avoid these common mistakes when using code generation:</p>

    <div class="warning-box">
      <p><strong>Don't:</strong>
      <ul>
        <li>Manually edit generated files without proper extension points</li>
        <li>Generate code from incomplete or inconsistent models</li>
        <li>Ignore compiler warnings in generated code</li>
        <li>Skip testing generated components</li>
        <li>Forget to version control your model source</li>
      </ul>
      </p>
    </div>

    <h2>Advanced Techniques</h2>
    <p>Take your code generation to the next level:</p>

    <h3>Multi-Service Generation</h3>
    <p>Generate code for distributed systems:
    <ul>
      <li>API gateways from command interfaces</li>
      <li>Message handlers for inter-service communication</li>
      <li>Client SDKs for consuming services</li>
      <li>Infrastructure as code for deployment</li>
    </ul>
    </p>

    <h3>Documentation Generation</h3>
    <p>Automatically generate:
    <ul>
      <li>API documentation (OpenAPI/Swagger)</li>
      <li>Architecture decision records</li>
      <li>Sequence diagrams</li>
      <li>Developer onboarding guides</li>
    </ul>
    </p>

    <div class="success-box">
      <p><strong>Success Metrics:</strong> Teams using code generation effectively report 60-70% reduction in boilerplate coding time and significantly fewer bugs related to event handling and state management.</p>
    </div>
  </div>
</div>
