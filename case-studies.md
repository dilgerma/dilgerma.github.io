---
layout: docs
title: Event Modeling & Event Sourcing Case Studies - Real-World Success Stories
description: Short summaries of real-world case studies from teams that designed with Event Modeling and implemented with Event Sourcing.
keywords: event modeling case study, event sourcing case study, success stories, vertical slices, read models, projections
author: Martin Dilger
---

<div class="hero">
  <h1>Case Studies</h1>
  <p>Real-world success stories from teams using Event Modeling and Event Sourcing. Each entry is a short summary - follow the link for the full story.</p>
</div>

<section class="features">
  <div class="case-studies">

    <article class="case-study" id="boehme-first-event-sourced-app">
      <h2>First Event Modeled &amp; Event Sourced Application Goes Live</h2>
      <p class="case-study-meta">Alexander Böhme</p>
      <p>After the Event Modeling &amp; Event Sourcing Conference in Munich, the question kept coming up: why do so few companies use Event Modeling and Event Sourcing? Event Sourcing is often seen as too complex, with higher implementation effort than CRUD. Maybe we simply don't talk enough about our success stories.</p>
      <p>A few weeks ago, the team went live with their first application designed with Event Modeling and implemented with Event Sourcing. They split the system into slices and followed a strict rule: every UI screen owns its own read model and therefore its own projection. The read models are denormalized MySQL tables, so every view has its own dedicated tables.</p>
      <p>One developer was responsible for designing and implementing all user interfaces. She designed the tables exactly as each screen needed them, without waiting for the rest of the application or coordinating with the backend developers. The other developers later populated those tables by projecting the domain events. In the meantime, she generated realistic dummy data with AI and built and refined the UI without being blocked.</p>
      <p>What impressed most was how little coordination this required. On the event model, the slices turned green (done) over time. There was no central, normalized database schema to negotiate and adapt. The events became the stable contract between the parts of the system, and the event model became the central artifact for all planning.</p>
      <p><a href="https://lnkd.in/p/diQJKfRi" target="_blank" rel="noopener noreferrer">Read the full case study →</a></p>
    </article>

    <article class="case-study" id="lischnig-agent-swarm-boring-development">
      <h2>Boring Development: A Swarm of Agents Building Slices from the Event Model</h2>
      <p class="case-study-meta">Christian Lischnig, DCCS</p>
      <p>"Development in our project has become boring. That's the biggest compliment I can give it." The product owner no longer fills issues, because everything needed to build the software is on the Event Modeling board, and the agents read from it. They are connected to the board via MCP.</p>
      <p>One agent takes input - a file, a prompt, or someone talking - and creates the slice on the board: command, event, screen, acceptance criteria. Then a human decides: the PO or the customer reviews the slice and sets its status to ready. That status is the trigger. A swarm of agents then picks the slice up on its own. Each agent implements the complete vertical slice - tests first, backend, frontend - and the result is a pull request.</p>
      <p>The next step is in sight: an autonomous agent reviews those PRs and only pulls a human in when a guardrail is breached - from human in the loop to human on the loop.</p>
      <p>The swarm doesn't collide because the architecture allows it. Vertical slices from day one are independent of each other, so parallel work is not a coordination problem. Lischnig would not want to try this on a layered codebase that was never cut that way. The agents are not what makes this work - the architecture is. When it fits, development gets boring: slice by slice, no surprises.</p>
      <p><a href="https://lnkd.in/p/e2GyWt6G" target="_blank" rel="noopener noreferrer">Read the full case study →</a></p>
    </article>

    <article class="case-study" id="boehme-event-model-as-central-artifact">
      <h2>The Event Model Becomes the Team's Central Place for Planning and Discussion</h2>
      <p class="case-study-meta">Alexander Böhme</p>
      <p>The Event Modeling &amp; Event Sourcing community needs to talk more about success stories. A few weeks ago, the team shipped their first system built with event sourcing and designed using event modeling.</p>
      <p>The event model fundamentally changed how the team discusses the software and plans its evolution. Hardly a day goes by without the team gathering around the model. When planning a new feature, they use the model to understand how it fits into the existing behavior of the system. When an issue arises, they walk through the model together to understand where things went wrong. Conversations rarely begin with source code or tickets anymore. They begin with the shared understanding captured in the event model. Code and tickets still matter, but they are no longer the primary communication tools.</p>
      <p>This happened organically. Nobody was forced to look at the model daily, and the team naturally wanted to keep it up to date. Böhme had never before seen a document of this size stay so alive and current over such a long period without anyone managing or enforcing it, which shows how effective the event model is for communication and planning, and that it helps everybody on the team.</p>
      <p>He compares it to the blueprint of a building: architects, structural engineers, electricians, plumbers and construction workers all collaborate using the same blueprint. It describes what is being built, not every tool or action. Likewise, the event model does not describe the implementation, but how the system is expected to behave on the business level. Today it is the team's primary artifact for understanding, discussing and evolving the software.</p>
      <p><a href="https://lnkd.in/p/dvRR8xFc" target="_blank" rel="noopener noreferrer">Read the full case study →</a></p>
    </article>

    <article class="case-study" id="kim-customersai-no-product-managers">
      <h2>Eliminating the Product Management Function with Event Modeling and AI</h2>
      <p class="case-study-meta">Larry Kim, CEO Customers.ai</p>
      <p>CustomersAI eliminated its product management function and no longer has any PMs. Kim argues the top 1% of PMs would have seen this coming and led the transition themselves. In his view, PMs at most companies are context carriers who sit between customer success, sales, engineering and design, translating, repackaging and bridging ambiguity. He calls this a structural description, not a criticism, and says AI made that structure obsolete.</p>
      <p>The engineering team, frustrated by years of poorly defined requirements documents, led an internal effort to improve requirements gathering with "event modeling", a standardized way of expressing inputs and outputs. Kim acknowledges that great PMs do more than requirements gathering: they generate original customer insight, make hard prioritization calls and shape product strategy. But most PM time is spent in the middle, coordinating, translating and repackaging context that already exists.</p>
      <p>The event model became a single source of truth from which AI can generate the UI, the prototype, code stubs, documentation, training artifacts and even marketing materials. There are no handoffs, no telephone game and no coordination tax. Engineers now move 2-3x faster than expected, and communication issues went to zero. Asked whether engineers are now just doing PM work, Kim says partly yes - but without an additional layer, so the work is closer to the stack and the customer problem, with AI handling the translation in between. The distance between insight and output has collapsed.</p>
      <p>The same philosophy shapes the company's product: AI agents powered by visitor identity data that help Shopify/Klaviyo brands and agencies get more out of their email marketing, with no bloated middle-workflow layer between data and outcomes. Kim quotes Peter Drucker: "Marketing and innovation produce results. All the rest are costs." The question, he says, is whether you lead this change at your company or it happens to you.</p>
      <p><a href="https://lnkd.in/p/d3AbgrnE" target="_blank" rel="noopener noreferrer">Read the full case study →</a></p>
    </article>

    <article class="case-study" id="boehme-onboarding-new-developers">
      <h2>Onboarding New Developers Fast with Event Modeling and Event Sourcing</h2>
      <p class="case-study-meta">Alexander Böhme</p>
      <p>On the Event Modeling and Event Sourcing Podcast by Adam Dymitruk and Martin Dilger, Adam has said a few times that it's easy to onboard new developers onto a project planned with event modeling and implemented with event sourcing. For this team, that turned out to be true twice in a row.</p>
      <p>Last year they hired a junior developer fresh from a master's degree in computer science. There was already a detailed event model, though many slices were not yet implemented. A few existing slices served as a blueprint. He implemented his first slices a week after joining, with no prior experience in event modeling or event sourcing. A few months later they hired a senior developer, also without prior experience, and the same thing happened.</p>
      <p>Böhme credits the two exceptional people and their curiosity and drive, but also event modeling and event sourcing. The event model helped the new team members understand the domain quickly. Event modeling naturally yields truly decoupled slices with clear boundaries, and each is small, easy to reason about and easy to implement - like a little program that can be described very well.</p>
      <p>There are only four slice types in their case: state change, state view, screen, and processor. Each type is implemented the same way again and again, so there is always a blueprint to base the implementation on. The team now focuses on getting the slice specifications right and lets AI implement them.</p>
      <p><a href="https://lnkd.in/p/dVH-iwij" target="_blank" rel="noopener noreferrer">Read the full case study →</a></p>
    </article>

    <article class="case-study" id="lischnig-no-more-issues">
      <h2>We Stopped Writing Issues: Everything Lives on the Event Modeling Board</h2>
      <p class="case-study-meta">Christian Lischnig, DCCS</p>
      <p>A few months ago Lischnig had a vision: no more issues in the project, because everything needed to build the software is already on the Event Modeling board. Today the product owner "only" creates the title of a slice as an issue, and the rest lives entirely on the board. Lischnig had his doubts that this would ever work.</p>
      <p>She proved that everything that used to sit in the issue fits on the board just as well: acceptance criteria, UI details, translations and UX notes. There is no more copy-paste between board and tracker - the acceptance criteria exist exactly once. She then generated the customer sign-off document, which is contractually required, straight out of the board instead of assembling it by hand.</p>
      <p>The stub issues remain only because the current customer reporting is built on them - a formality, not an obstacle. It can be switched over, and the next project can start without issues from day one. After nine months of work, the result is an end-to-end process based on Event Modeling and, technically, on Event Sourcing.</p>
      <p><a href="https://lnkd.in/p/eKa2chdT" target="_blank" rel="noopener noreferrer">Read the full case study →</a></p>
    </article>

    <article class="case-study" id="boehme-event-model-management-trust">
      <h2>An Event Model That Impressed Management and Built Trust</h2>
      <p class="case-study-meta">Alexander Böhme</p>
      <p>A little over two months ago, the team shipped their first system planned with Event Modeling and built with Event Sourcing. During planning, they showed the event model to the company's management team and received a lot of praise. The management team was genuinely impressed by the visual "plan", and the feedback was that no software project in the company had ever felt so thoroughly thought through. That gave the team an enormous boost.</p>
      <p>The event model left a lasting impression and kept coming up long afterwards. Months later, the team was asked to present it to other departments as a source of inspiration.</p>
      <p>Böhme believes it makes such an impression because it is a tangible, easily accessible visual representation of how the software is meant to work on a business level, without technical details, and you can even see what the screens will look like. It is a visual artifact, not a written document of dozens of pages that nobody wants to read. At a single glance it shows that there is a detailed plan behind the project, which created a lot of trust.</p>
      <p>He thanks Adam Dymitruk and his team for the methodology and Martin Dilger for pushing the topic forward. The event model shown in the original post was generated by AI and is just a toy model.</p>
      <p><a href="https://lnkd.in/p/dPGQ7axG" target="_blank" rel="noopener noreferrer">Read the full case study →</a></p>
    </article>

  </div>
</section>

<style>
  .case-studies { display: flex; flex-direction: column; gap: 24px; }
  .case-study { border: 1px solid #e2e5ee; border-radius: 12px; padding: 24px; background: #fff; }
  .case-study h2 { margin-top: 0; }
  .case-study-meta { color: #6b7280; font-size: 0.9rem; }
</style>
