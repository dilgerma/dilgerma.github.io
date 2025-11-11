---
layout: default
title: Getting Started with Event Modeling
---

<div class="blog-post">
  <a href="{{ '/docs/blog' | relative_url }}" class="blog-back-link">&larr; Back to Blog</a>

  <div class="blog-post-header">
    <h1>Getting Started with Event Modeling</h1>
    <p class="blog-post-subtitle">A comprehensive guide to understanding Event Modeling fundamentals</p>
    <div class="blog-post-meta">
      <span>November 11, 2025</span>
      <span>5 min read</span>
      <span>Tutorial</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/event-modeling-intro.jpg' | relative_url }}" alt="Getting Started with Event Modeling">
  </div>

  <div class="blog-post-content">
    <h2>What is Event Modeling?</h2>
    <p>Event Modeling is a method for designing and documenting information systems that emphasizes the temporal aspects of how data changes over time. It combines the best practices from various modeling techniques including Event Storming, Domain-Driven Design, and Command Query Responsibility Segregation (CQRS).</p>

    <p>The technique was developed by Adam Dymitruk and has gained significant traction in the software development community for its ability to create a shared understanding between technical and non-technical stakeholders.</p>

    <h2>Core Concepts</h2>
    <p>Event Modeling is built around several key concepts that work together to create a complete picture of your system:</p>

    <h3>Events</h3>
    <p>Events are facts that have happened in the past. They are immutable and represent state changes in your system. Events are always named in past tense, such as "OrderPlaced" or "PaymentProcessed".</p>

    <h3>Commands</h3>
    <p>Commands represent intentions or requests to change the state of the system. They are named in imperative form, like "PlaceOrder" or "ProcessPayment". Commands can succeed or fail, and successful commands produce events.</p>

    <h3>Read Models</h3>
    <p>Read models are projections of events that provide the information needed by users or systems. They represent the current state derived from the event history and are optimized for querying.</p>

    <h2>Getting Started with Miro</h2>
    <p>The Miro Event Modeling Toolkit makes it easy to create event models collaboratively:</p>

    <ol>
      <li><strong>Set up your board:</strong> Start with a blank Miro board and install the Event Modeling toolkit from the Miro marketplace.</li>
      <li><strong>Define your timeline:</strong> Create a horizontal timeline that represents the flow of your system from left to right.</li>
      <li><strong>Add events:</strong> Place event cards along the timeline, representing what has happened in your system.</li>
      <li><strong>Connect commands:</strong> Add command cards that trigger these events, showing user actions or system triggers.</li>
      <li><strong>Create read models:</strong> Define what information needs to be displayed to users at each stage.</li>
    </ol>

    <h2>Best Practices</h2>
    <p>When starting with Event Modeling, keep these best practices in mind:</p>

    <ul>
      <li>Start with the happy path - focus on the main user journey first</li>
      <li>Use consistent naming conventions for events and commands</li>
      <li>Keep your models at the right level of abstraction</li>
      <li>Involve stakeholders from different departments</li>
      <li>Iterate and refine based on feedback</li>
    </ul>

    <h2>Next Steps</h2>
    <p>Now that you understand the basics of Event Modeling, you're ready to start creating your own models. Check out our <a href="{{ '/docs/setup' | relative_url }}">setup guide</a> to install the Miro Event Modeling Toolkit and begin modeling your first system.</p>

    <div class="info-box">
      <p><strong>Pro Tip:</strong> Join our community workshops to learn from experienced event modelers and share your own experiences. Visit our <a href="https://www.nebulit.de/en/eventmodeling-workshop" target="_blank">training page</a> for upcoming sessions.</p>
    </div>
  </div>
</div>
