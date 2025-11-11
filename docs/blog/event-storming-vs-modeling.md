---
layout: default
title: Event Storming vs Event Modeling
---

<div class="blog-post">
  <a href="{{ '/docs/blog' | relative_url }}" class="blog-back-link">&larr; Back to Blog</a>

  <div class="blog-post-header">
    <h1>Event Storming vs Event Modeling</h1>
    <p class="blog-post-subtitle">Understanding the differences and when to use each approach</p>
    <div class="blog-post-meta">
      <span>November 1, 2025</span>
      <span>6 min read</span>
      <span>Methodology</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/comparison.jpg' | relative_url }}" alt="Event Storming vs Event Modeling">
  </div>

  <div class="blog-post-content">
    <h2>Introduction</h2>
    <p>Event Storming and Event Modeling are both powerful techniques for understanding and designing event-driven systems. While they share some similarities and can complement each other, they serve different purposes and are best applied in different contexts. This article explores both approaches to help you choose the right tool for your situation.</p>

    <h2>Event Storming: Discovery and Exploration</h2>
    <p>Event Storming, created by Alberto Brandolini, is a workshop-based technique focused on rapid discovery and knowledge sharing.</p>

    <h3>Key Characteristics</h3>
    <ul>
      <li><strong>Format:</strong> Intensive in-person workshops with physical sticky notes</li>
      <li><strong>Goal:</strong> Discover domain knowledge and identify business processes</li>
      <li><strong>Duration:</strong> Typically a few hours to a full day</li>
      <li><strong>Output:</strong> Shared understanding, not detailed design</li>
      <li><strong>Notation:</strong> Loose, color-coded sticky notes</li>
    </ul>

    <h3>When to Use Event Storming</h3>
    <p>Event Storming excels in:
    <ul>
      <li>Early project phases when exploring a new domain</li>
      <li>Complex or poorly understood business processes</li>
      <li>Situations requiring rapid knowledge transfer</li>
      <li>Identifying boundaries for microservices</li>
      <li>Building shared understanding across teams</li>
    </ul>
    </p>

    <h3>The Event Storming Process</h3>
    <ol>
      <li><strong>Big Picture:</strong> Map all domain events chronologically</li>
      <li><strong>Process Modeling:</strong> Add commands, actors, and systems</li>
      <li><strong>Software Design:</strong> Define aggregates and bounded contexts</li>
    </ol>

    <h2>Event Modeling: Design and Implementation</h2>
    <p>Event Modeling, developed by Adam Dymitruk, is a more structured approach focused on creating implementable system designs.</p>

    <h3>Key Characteristics</h3>
    <ul>
      <li><strong>Format:</strong> Structured visual model with specific notation</li>
      <li><strong>Goal:</strong> Create detailed, implementable system specifications</li>
      <li><strong>Duration:</strong> Iterative process over multiple sessions</li>
      <li><strong>Output:</strong> Blueprint for implementation</li>
      <li><strong>Notation:</strong> Formal pattern language with swim lanes</li>
    </ul>

    <h3>When to Use Event Modeling</h3>
    <p>Event Modeling is ideal for:
    <ul>
      <li>Creating detailed system specifications</li>
      <li>Communicating with developers about implementation</li>
      <li>Documenting existing systems</li>
      <li>Generating code from models</li>
      <li>Maintaining long-term architectural documentation</li>
    </ul>
    </p>

    <h3>The Event Modeling Process</h3>
    <ol>
      <li><strong>Plot the timeline:</strong> Define key events chronologically</li>
      <li><strong>Add given-when-then scenarios:</strong> Show state, commands, and events</li>
      <li><strong>Define read models:</strong> Specify what users see</li>
      <li><strong>Add automation:</strong> Include system-triggered events</li>
    </ol>

    <h2>Comparing the Approaches</h2>

    <h3>Similarities</h3>
    <p>Both techniques:
    <ul>
      <li>Focus on events as first-class citizens</li>
      <li>Encourage collaboration between business and technical stakeholders</li>
      <li>Help identify bounded contexts</li>
      <li>Support event-driven architecture design</li>
      <li>Use visual, non-technical notation</li>
    </ul>
    </p>

    <h3>Key Differences</h3>

    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Event Storming</th>
          <th>Event Modeling</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Primary Purpose</strong></td>
          <td>Discovery & exploration</td>
          <td>Design & specification</td>
        </tr>
        <tr>
          <td><strong>Structure</strong></td>
          <td>Flexible, emergent</td>
          <td>Formal, structured</td>
        </tr>
        <tr>
          <td><strong>Detail Level</strong></td>
          <td>High-level overview</td>
          <td>Implementation-ready detail</td>
        </tr>
        <tr>
          <td><strong>Time Frame</strong></td>
          <td>Single intensive session</td>
          <td>Multiple iterative sessions</td>
        </tr>
        <tr>
          <td><strong>Output</strong></td>
          <td>Shared understanding</td>
          <td>Implementation blueprint</td>
        </tr>
        <tr>
          <td><strong>Formality</strong></td>
          <td>Informal, workshop-style</td>
          <td>Formal notation system</td>
        </tr>
      </tbody>
    </table>

    <h2>Using Both Together</h2>
    <p>Event Storming and Event Modeling work excellently in sequence:</p>

    <h3>The Combined Workflow</h3>
    <ol>
      <li><strong>Start with Event Storming:</strong> Run a Big Picture Event Storming session to discover the domain and identify key areas</li>
      <li><strong>Identify Focus Areas:</strong> Choose specific processes or bounded contexts for deeper exploration</li>
      <li><strong>Create Event Models:</strong> For each focus area, create detailed event models with precise specifications</li>
      <li><strong>Iterate:</strong> Use implementation feedback to refine both the event storm and event models</li>
    </ol>

    <h3>Benefits of Combined Approach</h3>
    <ul>
      <li>Rapid initial discovery (Event Storming)</li>
      <li>Detailed implementation guidance (Event Modeling)</li>
      <li>Different levels of detail for different audiences</li>
      <li>Smooth progression from exploration to implementation</li>
    </ul>

    <h2>Choosing Your Approach</h2>

    <div class="info-box">
      <p><strong>Use Event Storming when you need to:</strong>
      <ul>
        <li>Quickly understand a new domain</li>
        <li>Identify what you don't know</li>
        <li>Build team alignment on business processes</li>
        <li>Find natural system boundaries</li>
      </ul>
      </p>
    </div>

    <div class="info-box">
      <p><strong>Use Event Modeling when you need to:</strong>
      <ul>
        <li>Create implementation specifications</li>
        <li>Generate code from your design</li>
        <li>Document existing systems precisely</li>
        <li>Communicate with developers about implementation details</li>
      </ul>
      </p>
    </div>

    <h2>Tools and Platforms</h2>

    <h3>Event Storming Tools</h3>
    <ul>
      <li>Physical sticky notes and a long wall (traditional)</li>
      <li>Miro or Mural for remote sessions</li>
      <li>FigJam or similar collaborative whiteboards</li>
    </ul>

    <h3>Event Modeling Tools</h3>
    <ul>
      <li>Miro Event Modeling Toolkit (recommended)</li>
      <li>EventModeling.org templates</li>
      <li>Custom notation in any diagramming tool</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Neither Event Storming nor Event Modeling is inherently better - they serve different purposes in the software development lifecycle. Event Storming excels at discovery and building shared understanding, while Event Modeling provides the structure and detail needed for implementation.</p>

    <p>For best results, consider using Event Storming early in your project to explore the domain, then transition to Event Modeling to create detailed specifications for implementation. This combined approach leverages the strengths of both techniques.</p>

    <div class="success-box">
      <p><strong>Pro Tip:</strong> Many successful teams start with a 4-hour Event Storming session, then follow up with focused 2-hour Event Modeling sessions for each major bounded context identified.</p>
    </div>
  </div>
</div>
