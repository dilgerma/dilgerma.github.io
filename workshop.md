---
layout: default
title: The Event Modeling Workshop - Two Days, Your Real System
description: A hands-on, two-day Event Modeling workshop that turns your team's real system into a shared model everyone can build from - not a slide deck nobody opens.
keywords: event modeling workshop, event modeling training, domain modeling workshop, event sourcing training, team alignment workshop, event modeling consulting
author: Martin Dilger
featured_image: /assets/images/cheatsheet/workshop-01-brainstorming.png
permalink: /workshop/
---

<section class="lp-hero">
  <div class="lp-hero-inner">
    <span class="lp-badge">In-Person or Remote</span>
    <h1>The Event Modeling Workshop</h1>
    <p>Two days. Your real system. A model your team can actually build from - not a slide deck nobody opens again, and not just a model on the wall that nobody touches again.</p>
    <div class="lp-hero-ctas">
      <a href="https://tidycal.com/1gj56y6/15-minute-meeting" class="lp-btn-primary">Book a Workshop</a>
      <a href="{{ '/cheatsheet' | relative_url }}" class="lp-btn-secondary">Grab the Cheat Sheet</a>
    </div>
    <p class="cs-hero-pdf-hint">A paid, facilitator-led engagement delivered by <a href="https://www.nebulit.de" target="_blank" rel="noopener noreferrer">Nebulit</a> - book a call to talk scope and pricing.</p>
  </div>
</section>

<div class="cs-page">

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">How It Works</span>
      <h2>All Event Modeling Workshops Follow the Same Structure</h2>
      <p class="cs-why"><strong>Why:</strong> the structure isn't arbitrary - each step exists to catch a specific kind of gap before it becomes a production incident. Skipping one just moves the problem downstream.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Six steps, run in order, over two days. Expand a step to see its goal and how a facilitator actually runs it in the room.</p>
    </div>

    <details class="cs-workshop-item" open>
      <summary>
        <span class="cs-workshop-num">1</span>
        <span class="cs-workshop-title">Brainstorming</span>
        <span class="cs-workshop-goal">Goal: collect all events</span>
      </summary>
      <div class="cs-workshop-body">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/workshop-01-brainstorming.png' | relative_url }}" alt="Sticky notes scattered on a board during the brainstorming step" style="max-width:340px;float:right;margin:0 0 12px 20px;" />
        Hand everyone orange stickies and ask a simple question: <em>"What happened?"</em> No structure yet, no order - just get every event anyone can think of onto the wall. Quantity over precision here; you'll sequence and merge duplicates in the next step.
      </div>
    </details>

    <details class="cs-workshop-item">
      <summary>
        <span class="cs-workshop-num">2</span>
        <span class="cs-workshop-title">The Plot</span>
        <span class="cs-workshop-goal">Goal: find the story</span>
      </summary>
      <div class="cs-workshop-body">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/workshop-02-plot.png' | relative_url }}" alt="Events arranged left to right into a rough timeline" style="max-width:100%;margin-bottom:12px;" />
        Take the pile of events from step 1 and arrange them in a rough left-to-right timeline. Ask the two anchor questions every time: <strong>"What's the first event?"</strong> and <strong>"What's the last event?"</strong> Once you have a beginning and an end, the middle fills in naturally.
      </div>
    </details>

    <details class="cs-workshop-item">
      <summary>
        <span class="cs-workshop-num">3</span>
        <span class="cs-workshop-title">Storyboarding</span>
        <span class="cs-workshop-goal">Goal: common understanding</span>
      </summary>
      <div class="cs-workshop-body">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/workshop-03-storyboarding.png' | relative_url }}" alt="Simple wireframe screens sketched above the event timeline" style="max-width:100%;margin-bottom:12px;" />
        Sketch a simple wireframe screen above the events a user would actually see at that point in the flow. This is where business and engineering stop talking past each other - a screen makes the abstract event timeline concrete for everyone in the room.
      </div>
    </details>

    <details class="cs-workshop-item">
      <summary>
        <span class="cs-workshop-num">4</span>
        <span class="cs-workshop-title">Input / Output</span>
        <span class="cs-workshop-goal">Goal: understand information flow</span>
      </summary>
      <div class="cs-workshop-body">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/workshop-04-io.png' | relative_url }}" alt="Screens, commands, events and read models wired together to show information flow" style="max-width:100%;margin-bottom:12px;" />
        Add Commands below the screens and Read Models above them, and draw the arrows: Screen reads Read Model, Screen sends Command, Command produces Event, Event feeds Read Model. This step exposes every place a screen needs data that no event currently produces - the most valuable gaps to find before anyone writes code.
      </div>
    </details>

    <details class="cs-workshop-item">
      <summary>
        <span class="cs-workshop-num">5</span>
        <span class="cs-workshop-title">Swimlanes</span>
        <span class="cs-workshop-goal">Goal: understand ownership</span>
      </summary>
      <div class="cs-workshop-body">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/workshop-05-swimlanes.png' | relative_url }}" alt="Events sorted into swimlanes labelled Product, Cart, Checkout, and Order" style="max-width:100%;margin-bottom:12px;" />
        Draw horizontal lanes for each team or system, and slot every event into the lane of whoever owns that data. Ownership questions that were implicit before - "wait, who's actually responsible for this?" - become impossible to avoid once the lanes are drawn.
      </div>
    </details>

    <details class="cs-workshop-item">
      <summary>
        <span class="cs-workshop-num">6</span>
        <span class="cs-workshop-title">Scenarios</span>
        <span class="cs-workshop-goal">Goal: understand business rules</span>
      </summary>
      <div class="cs-workshop-body">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/workshop-06-scenarios.png' | relative_url }}" alt="Given-When-Then scenarios written out for a slice, including an error case" style="max-width:340px;float:right;margin:0 0 12px 20px;" />
        For each slice, write Given-When-Then scenarios - the happy path first, then the error cases. Ask three times: <strong>"Is there any rule we didn't cover?"</strong> Business rules that used to be tribal knowledge get written down as literal test cases, ready to hand to a developer or an AI agent.
      </div>
    </details>

    <p class="cs-workshop-ask">Want the full reference? The <a href="{{ '/cheatsheet' | relative_url }}">cheat sheet</a> covers the 4 patterns, the 4 anti-patterns to watch for, and all 30 rules in one page.</p>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Who It's For</span>
      <h2>Built for Every Role in the Room</h2>
      <p class="cs-why"><strong>Why:</strong> a model only aligns a team if the whole team helped build it. Leave any of these roles out and the workshop produces a diagram, not shared understanding.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Bring the people who actually know the domain - not just the people who usually attend meetings about it.</p>
    </div>
    <div class="lp-usecases-grid">
      <div class="lp-usecase-card">
        <span class="lp-usecase-icon">👩‍💻</span>
        <h3>Engineering Teams</h3>
        <p>Stop guessing what to build. Leave with a model that tells you exactly what commands to handle, what events to emit, and what read models to maintain.</p>
        <ul>
          <li>Clear command &amp; event contracts</li>
          <li>Test cases derived directly from the model</li>
          <li>A backlog of slices ready for sprint planning</li>
        </ul>
      </div>
      <div class="lp-usecase-card">
        <span class="lp-usecase-icon">🏗️</span>
        <h3>Architects</h3>
        <p>Design resilient, event-driven systems from the ground up. Use the model to draw architectural boundaries the whole team agreed on, not ones handed down after the fact.</p>
        <ul>
          <li>Bounded context visualization</li>
          <li>Integration point discovery</li>
          <li>Architecture decisions captured on the board</li>
        </ul>
      </div>
      <div class="lp-usecase-card">
        <span class="lp-usecase-icon">📋</span>
        <h3>Product Managers</h3>
        <p>Translate business requirements into a specification engineering can ship from - without handoff friction, ambiguous user stories, or last-minute scope surprises.</p>
        <ul>
          <li>A model business stakeholders can actually read</li>
          <li>Slices extracted straight into the backlog</li>
          <li>Edge cases surfaced before the sprint, not during QA</li>
        </ul>
      </div>
      <div class="lp-usecase-card">
        <span class="lp-usecase-icon">🧠</span>
        <h3>Domain Experts</h3>
        <p>You know the rules nobody wrote down. A workshop is where they finally get captured - as scenarios an engineer or an AI agent can build against.</p>
        <ul>
          <li>Tribal knowledge turned into explicit rules</li>
          <li>A seat at the table before the code exists, not after</li>
          <li>Disagreements surfaced and resolved on the spot</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">What You Walk Away With</span>
      <h2>Not a Workshop Photo - a Working Artifact</h2>
      <p class="cs-why"><strong>Why:</strong> a workshop that ends with a whiteboard photo and good intentions changes nothing. One that ends with a board your team keeps using changes how the next ten sprints get planned.</p>
    </div>
    <div class="lp-benefits-grid">
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">🔍</span>
        <h3>Requirements Gaps Cleared</h3>
        <p>Ambiguities and missing edge cases get found and resolved in the room - not three sprints later in a bug report.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">🤝</span>
        <h3>Common Understanding</h3>
        <p>Business and engineering leave with the exact same picture of what the system does - not two versions that quietly diverge.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">🗺️</span>
        <h3>Blueprint for Implementation</h3>
        <p>A model detailed enough for your team - or an AI agent - to build directly from, slice by slice.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">📏</span>
        <h3>A Clear Picture of System Size</h3>
        <p>See the true scope of the domain laid out on the wall, instead of guessing at it in a planning meeting.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">📋</span>
        <h3>A Prioritized Backlog</h3>
        <p>Slices sized and sequenced directly from the model, ready to plan into sprints without a separate estimation session.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">⚠️</span>
        <h3>Risk Surfaced Early</h3>
        <p>Hotspots and open questions get documented on the board - not discovered for the first time in production.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">📄</span>
        <h3>A Living Artifact, Not a Deck</h3>
        <p>Documentation that stays accurate because your team keeps building from it - not a one-off slide deck nobody opens again.</p>
      </div>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">The Agenda</span>
      <h2>A Typical Two-Day Agenda</h2>
      <p class="cs-why"><strong>Why:</strong> knowing the shape of the two days up front makes it easier to block the right calendars and get the right people in the room.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Every engagement is tailored to the domain, but the structure of the two days is consistent.</p>
    </div>
    <div class="cs-notation-grid">
      <div class="cs-notation-card">
        <h4>Day 1 - Event Modeling Workshop</h4>
        <div class="cs-static-list" style="grid-template-columns:1fr;margin-top:14px;">
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span><strong>09:00 - 10:00</strong> - Introduction to Event Modeling</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span><strong>10:00 - 15:30</strong> - Workshop: modeling your use case, learning by doing</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span><strong>15:30 - 16:00</strong> - Q&amp;A</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span><strong>16:00 - 17:00</strong> - Refine the model, prepare for Day 2</span></div>
        </div>
      </div>
      <div class="cs-notation-card">
        <h4>Day 2 - Modeling, Sourcing &amp; Architecture</h4>
        <div class="cs-static-list" style="grid-template-columns:1fr;margin-top:14px;">
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span>QA / model review</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span>Model to code</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span>Architecture blueprint</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span>Event Modeling &amp; AI</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span>How to operationalize the process</span></div>
          <div class="cs-check-item-static"><span class="cs-check-num">•</span><span>Q&amp;A and next steps</span></div>
        </div>
      </div>
    </div>
    <p class="cs-workshop-ask" style="font-weight:400;font-size:0.95rem;color:#6b6b76;">Runs 09:00-17:00 on-site, with a 30-60 minute lunch and a break at least every 90 minutes. Best run with 6-8 people: your engineering team plus the business domain expert(s) who know the system.</p>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Format</span>
      <h2>What to Expect</h2>
    </div>
    <div class="lp-benefits-grid">
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">🗓️</span>
        <h3>Two Days</h3>
        <p>Enough time to go from a blank wall to a validated, sprint-ready model of a real slice of your system - without dragging the exhaustion out over a week of half-days.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">📍</span>
        <h3>On-Site or Remote</h3>
        <p>Run it in your office with a physical wall of stickies, or fully remote on a shared digital board. Same six steps, same outcome either way.</p>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">🧑‍🏫</span>
        <h3>Facilitator-Led</h3>
        <p>An experienced facilitator keeps the room on track - parking side discussions, catching anti-patterns early, and asking the questions that surface hidden rules.</p>
      </div>
    </div>
  </div>
</section>

</div>

<section class="lp-bottom-cta">
  <div class="lp-bottom-cta-inner">
    <h2>Ready to model your real system?</h2>
    <p>Book a short call to talk through your goals, or read the cheat sheet first to see exactly what a session looks like.</p>
    <div class="lp-bottom-cta-btns">
      <a href="https://tidycal.com/1gj56y6/15-minute-meeting" class="lp-btn-primary">Book a Workshop</a>
      <a href="{{ '/cheatsheet' | relative_url }}" class="lp-btn-secondary">Read the Cheat Sheet</a>
    </div>
  </div>
</section>
