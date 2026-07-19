---
layout: default
title: Event Modeling Cheat Sheet - The 5 Elements, 4 Patterns, and 20 Rules
description: The Event Modeling cheat sheet, interactive - 5 elements, 4 patterns, anti-patterns to avoid, the 6-step workshop, and all 20 rules on one page.
keywords: event modeling cheat sheet, event modeling patterns, event modeling workshop, event modeling rules, given when then, event sourcing, event modeling anti-patterns
author: Martin Dilger
featured_image: /assets/images/cheatsheet/cheatsheet-page1.png
permalink: /cheatsheet/
---

<section class="lp-hero">
  <div class="lp-hero-inner">
    <span class="lp-badge">Free Resource</span>
    <h1>The Event Modeling Cheat Sheet</h1>
    <p>One page, five elements, four patterns, twenty rules. Everything you need on the wall during a workshop - now interactive, so you can click through it instead of squinting at a PDF.</p>
    <div class="lp-hero-ctas">
      <a href="{{ '/assets/pdf/event-modeling-cheat-sheet.pdf' | relative_url }}" class="lp-btn-primary" target="_blank" rel="noopener noreferrer">Download the PDF ↓</a>
      <a href="https://app.eventmodelers.ai" class="lp-btn-secondary">Start Modeling for Free</a>
    </div>
    <p class="cs-hero-pdf-hint">Need the PDF? <a href="{{ '/assets/pdf/event-modeling-cheat-sheet.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Get it here for free →</a></p>
  </div>
</section>

<div class="cs-page">

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Building Blocks</span>
      <h2>The 5 Elements of Event Modeling</h2>
      <p class="cs-why"><strong>Why:</strong> a model only creates shared understanding if "command" and "event" mean the same thing to everyone in the room. These five definitions are the common ground that collaborative language is built on.</p>
      <p class="lp-section-sub">Every board is built from just five shapes. Tap a card to see the full definition and an example.</p>
      <div class="cs-fig-wrap">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/legend-elements-patterns.png' | relative_url }}" alt="Original cheat sheet legend showing the 5 elements and the 4 patterns of Event Modeling" />
        <div class="cs-fig-caption">Straight from the cheat sheet</div>
      </div>
    </div>
    <div class="cs-elements-grid">
      <button type="button" class="cs-element-card" data-el="event">
        <div class="cs-element-swatch">🟧</div>
        <h3>Event</h3>
        <p class="cs-element-short">"Something that happened in the system."</p>
        <span class="cs-element-toggle">+ Full definition</span>
        <div class="cs-element-more">Events are facts, not requests - they already happened and can't be undone or rejected. They're always named in the past tense: <em>OrderPlaced</em>, <em>PaymentReceived</em>, <em>UserRegistered</em>. Everything else in the model exists to either produce an event or make sense of one.</div>
      </button>
      <button type="button" class="cs-element-card" data-el="command">
        <div class="cs-element-swatch">🟦</div>
        <h3>Command</h3>
        <p class="cs-element-short">"Something that we want to happen in the system."</p>
        <span class="cs-element-toggle">+ Full definition</span>
        <div class="cs-element-more">A Command is an intent, not a fact - it can be accepted or rejected. e.g. <em>PlaceOrder</em>, <em>CancelSubscription</em>. A Command is the <strong>WHEN</strong> in every Given-When-Then scenario: it either produces an Event or fails with an explicit error.</div>
      </button>
      <button type="button" class="cs-element-card" data-el="readmodel">
        <div class="cs-element-swatch">🟩</div>
        <h3>Read Model</h3>
        <p class="cs-element-short">"Making sense of what happened in the system."</p>
        <span class="cs-element-toggle">+ Full definition</span>
        <div class="cs-element-more">Read Models fold a stream of Events into something queryable - a view, a projection, a report. e.g. <em>OrderSummary</em>, <em>CustomerDashboard</em>. Every Read Model exists to answer one specific question. No question, no Read Model (Rule #11).</div>
      </button>
      <button type="button" class="cs-element-card" data-el="screen">
        <div class="cs-element-swatch">⬜</div>
        <h3>Screen (Wireframe)</h3>
        <p class="cs-element-short">"How users make things happen in the system."</p>
        <span class="cs-element-toggle">+ Full definition</span>
        <div class="cs-element-more">A Screen is where an Actor reads a Read Model and triggers a Command. It's drawn as a rough wireframe on purpose - no color, no polish - so the conversation stays on data and behavior instead of visual design. Drawing one shouldn't take longer than two minutes.</div>
      </button>
      <button type="button" class="cs-element-card" data-el="automation">
        <div class="cs-element-swatch">⚙️</div>
        <h3>Automation</h3>
        <p class="cs-element-short">"Side effect of what happened in the system."</p>
        <span class="cs-element-toggle">+ Full definition</span>
        <div class="cs-element-more">A gear icon marks the moment a computer, not a human, reacts and issues the next Command automatically - a scheduled reminder, a retry, an integration step. No screen needed: the system is talking to itself.</div>
      </button>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">The Grammar</span>
      <h2>The 4 Patterns</h2>
      <p class="cs-why"><strong>Why:</strong> once you recognize which of the four shapes you're looking at, you instantly know what question to ask next - and which anti-pattern to watch for.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Every slice on an Event Modeling board is built from exactly one of these four shapes. Pick a pattern to see how it fits together.</p>
    </div>

    <div class="cs-tabs-nav">
      <button type="button" class="cs-tab-btn active" data-tab="tab-state-change">State Change</button>
      <button type="button" class="cs-tab-btn" data-tab="tab-state-view">State View</button>
      <button type="button" class="cs-tab-btn" data-tab="tab-automation">Automation</button>
      <button type="button" class="cs-tab-btn" data-tab="tab-translation">Translation</button>
    </div>

    <div id="tab-state-change" class="cs-tab-panel active">
      <div>
        <span class="cs-tab-goal">Goal: change what's true</span>
        <h3>State Change</h3>
        <p>A user - or another system - submits a Command. If the business rules allow it, the system produces one or more Events that record what just changed. This is the <strong>write side</strong> of Event Modeling: the moment intent becomes fact. Watch for the "left chair" anti-pattern if a single command starts producing a long, unrelated list of events.</p>
      </div>
      <div class="cs-diagram-v">
        <div class="cs-diagram-box screen-box">Screen</div>
        <span class="cs-diagram-arrow-v">↓</span>
        <div class="cs-diagram-box command">Command</div>
        <span class="cs-diagram-arrow-v">↓</span>
        <div class="cs-diagram-box event">Event</div>
      </div>
    </div>

    <div id="tab-state-view" class="cs-tab-panel">
      <div>
        <span class="cs-tab-goal">Goal: turn facts into something queryable</span>
        <h3>State View</h3>
        <p>Events accumulate over time. A State View pattern folds them into a Read Model that answers one specific question for one specific screen or API consumer. This is the <strong>read side</strong> - no command involved, just events being interpreted into something usable.</p>
      </div>
      <div class="cs-diagram-v">
        <div class="cs-diagram-box screen-box">Screen</div>
        <span class="cs-diagram-arrow-v">↓</span>
        <div class="cs-diagram-box readmodel">Read Model</div>
        <span class="cs-diagram-arrow-v">↑</span>
        <div class="cs-diagram-box event">Event</div>
      </div>
    </div>

    <div id="tab-automation" class="cs-tab-panel">
      <div>
        <span class="cs-tab-goal">Goal: let the system react to itself</span>
        <h3>Automation</h3>
        <p>An Event builds a Read Model, same as State View. But instead of a screen reading it, the gear icon - a computer, not a human - watches that Read Model and decides to issue a Command automatically: a reminder email three days before a trial ends, a retry after a failed payment. That Command produces a new Event, same as State Change. No human in the loop at any point.</p>
      </div>
      <div class="cs-diagram-v">
        <div class="cs-diagram-gear">⚙️</div>
        <div class="cs-diagram-split">
          <div class="cs-diagram-col">
            <div class="cs-diagram-box readmodel">Read Model</div>
            <span class="cs-diagram-arrow-v">↑</span>
            <div class="cs-diagram-box event">Event</div>
          </div>
          <div class="cs-diagram-col">
            <div class="cs-diagram-box command">Command</div>
            <span class="cs-diagram-arrow-v">↓</span>
            <div class="cs-diagram-box event">Event</div>
          </div>
        </div>
      </div>
    </div>

    <div id="tab-translation" class="cs-tab-panel">
      <div>
        <span class="cs-tab-goal">Goal: move meaning across a boundary</span>
        <h3>Translation</h3>
        <p>The same shape as Automation, but the incoming Event comes from <strong>outside</strong> - another bounded context or an external system. It builds a Read Model, the gear reacts to it and issues a Command, and that Command produces a new Event phrased in the receiving context's own language. It's an anti-corruption layer drawn directly on the model - it keeps teams decoupled, because nobody has to understand another team's internal model.</p>
      </div>
      <div class="cs-diagram-v">
        <div class="cs-diagram-gear">⚙️</div>
        <div class="cs-diagram-split">
          <div class="cs-diagram-col">
            <div class="cs-diagram-box readmodel">Read Model</div>
            <span class="cs-diagram-arrow-v">↑</span>
            <div class="cs-diagram-box event-translation">Event</div>
          </div>
          <div class="cs-diagram-col">
            <div class="cs-diagram-box command">Command</div>
            <span class="cs-diagram-arrow-v">↓</span>
            <div class="cs-diagram-box event">Event</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Specification</span>
      <h2>Turning Slices into Testable Scenarios</h2>
      <p class="cs-why"><strong>Why:</strong> a diagram everyone nods along to isn't a spec - it's still open to interpretation. Given-When-Then is unambiguous, testable, and something an AI agent can build directly from.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Every pattern can be written as Given-When-Then - the exact format a developer, or a coding agent, can turn straight into a test.</p>
    </div>
    <div class="cs-scenario-grid">
      <div class="cs-scenario-card state-change">
        <div class="cs-scenario-head">Scenario (State Change)</div>
        <div class="cs-scenario-body">
          <div class="cs-scenario-row"><span class="cs-scenario-kw">GIVEN</span><span class="cs-scenario-chip" style="background:var(--cs-event-bg);border-color:var(--cs-event-border);color:var(--cs-event-text);">Event, Event</span></div>
          <div class="cs-scenario-row"><span class="cs-scenario-kw">WHEN</span><span class="cs-scenario-chip" style="background:var(--cs-command-bg);border-color:var(--cs-command-border);color:var(--cs-command-text);">Command</span></div>
          <div class="cs-scenario-row"><span class="cs-scenario-kw">THEN</span><span class="cs-scenario-chip" style="background:var(--cs-event-bg);border-color:var(--cs-event-border);color:var(--cs-event-text);">Event</span></div>
          <div class="cs-scenario-example">"Given CartCreated, ItemAdded - When Checkout is submitted - Then OrderPlaced is recorded."</div>
        </div>
      </div>
      <div class="cs-scenario-card state-view">
        <div class="cs-scenario-head">Scenario (State View)</div>
        <div class="cs-scenario-body">
          <div class="cs-scenario-row"><span class="cs-scenario-kw">GIVEN</span><span class="cs-scenario-chip" style="background:var(--cs-event-bg);border-color:var(--cs-event-border);color:var(--cs-event-text);">Event, Event</span></div>
          <div class="cs-scenario-row"><span class="cs-scenario-kw">WHEN</span><span class="cs-scenario-chip" style="background:#e0e7ff;border-color:#a5b4fc;color:#3730a3;">Query</span></div>
          <div class="cs-scenario-row"><span class="cs-scenario-kw">THEN</span><span class="cs-scenario-chip" style="background:var(--cs-readmodel-bg);border-color:var(--cs-readmodel-border);color:var(--cs-readmodel-text);">Read Model</span></div>
          <div class="cs-scenario-example">"Given OrderPlaced, PaymentReceived - When the OrderStatus view is requested - Then it shows 'Paid'."</div>
        </div>
      </div>
      <div class="cs-scenario-card error">
        <div class="cs-scenario-head">Scenario (Error)</div>
        <div class="cs-scenario-body">
          <div class="cs-scenario-row"><span class="cs-scenario-kw">GIVEN</span><span class="cs-scenario-chip" style="background:var(--cs-event-bg);border-color:var(--cs-event-border);color:var(--cs-event-text);">Event, Event</span></div>
          <div class="cs-scenario-row"><span class="cs-scenario-kw">WHEN</span><span class="cs-scenario-chip" style="background:var(--cs-command-bg);border-color:var(--cs-command-border);color:var(--cs-command-text);">Command</span></div>
          <div class="cs-scenario-row"><span class="cs-scenario-kw">THEN</span><span class="cs-scenario-chip" style="background:#fee2e2;border-color:#fca5a5;color:#b91c1c;">error</span></div>
          <div class="cs-scenario-example">"Given OrderCancelled - When Checkout is submitted again - Then the command is rejected: 'cart no longer exists'."</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Watch For These</span>
      <h2>4 Anti-Patterns to Spot in Any Model</h2>
      <p class="cs-why"><strong>Why:</strong> catching one of these during the workshop costs you a five-minute conversation. Catching it after the sprint starts costs you a redesign.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Named after the furniture they resemble on the board. Expand each one to see what it usually means.</p>
    </div>
    <div class="cs-accordion">
      <details class="cs-accordion-item">
        <summary>
          <span class="cs-accordion-title">"Left Chair" <span class="cs-accordion-nick">1 Command · * Events</span></span>
        </summary>
        <div class="cs-accordion-body">
          <img class="cs-fig" src="{{ '/assets/images/cheatsheet/anti-left-chair.png' | relative_url }}" alt="Diagram of the left chair anti-pattern: one command producing five unrelated events" style="max-width:320px;float:right;margin:0 0 12px 20px;" />
          A single Command fans out into a pile of unrelated Events - four skinny legs holding up one seat. It's not automatically wrong; some commands genuinely produce several events. But it's worth asking whether the command is doing too much, or whether some of those events actually belong to a different slice entirely.
        </div>
      </details>
      <details class="cs-accordion-item">
        <summary>
          <span class="cs-accordion-title">"Right Chair" <span class="cs-accordion-nick">1 Read Model · * Events</span></span>
        </summary>
        <div class="cs-accordion-body">
          <img class="cs-fig" src="{{ '/assets/images/cheatsheet/anti-right-chair.png' | relative_url }}" alt="Diagram of the right chair anti-pattern: five unrelated events feeding one read model" style="max-width:320px;float:right;margin:0 0 12px 20px;" />
          The same shape, upside down: a single Read Model built from a long tail of Events. Ask whether the Read Model is trying to answer too many questions at once - a good Read Model usually answers exactly one, cleanly.
        </div>
      </details>
      <details class="cs-accordion-item">
        <summary>
          <span class="cs-accordion-title">"Bed" <span class="cs-accordion-nick">1 Screen · * Commands</span></span>
        </summary>
        <div class="cs-accordion-body">
          <img class="cs-fig" src="{{ '/assets/images/cheatsheet/anti-bed.png' | relative_url }}" alt="Diagram of the bed anti-pattern: one screen firing four commands" style="max-width:320px;float:right;margin:0 0 12px 20px;" />
          One screen firing off a wide spread of Commands - a bed frame with too many legs. Often a sign the screen is doing the job of several screens, or that some of those commands could be collapsed into one clearer user intent.
        </div>
      </details>
      <details class="cs-accordion-item">
        <summary>
          <span class="cs-accordion-title">"Shelf" <span class="cs-accordion-nick">1 Slice · * Scenarios</span></span>
        </summary>
        <div class="cs-accordion-body">
          <img class="cs-fig" src="{{ '/assets/images/cheatsheet/anti-shelf.png' | relative_url }}" alt="Diagram of the shelf anti-pattern: one slice carrying all the scenarios while the rest of the model has none" style="max-width:220px;float:right;margin:0 0 12px 20px;" />
          One slice on the board is loaded with Given-When-Then scenarios while every other slice has none - a single shelf holding everything because nobody built the rest of the shelving unit. Usually means scenario coverage was written for the easiest slice first and never caught up with the rest of the model.
        </div>
      </details>
    </div>
    <div class="cs-quote-callout">"Those patterns are not red flags, but something to keep an eye on. I first look for them on every model."</div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">The Read/Write Loop</span>
      <h2>How Information Flows Through a Slice</h2>
      <p class="cs-why"><strong>Why:</strong> most "it works on my machine" bugs trace back to someone skipping a link in this loop - usually a screen built before the Read Model that's supposed to feed it exists.</p>
      <p class="lp-section-sub">Straight from the cheat sheet - then try the interactive version below: click each stage to see its role in the loop.</p>
      <div class="cs-fig-wrap">
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/info-flow.png' | relative_url }}" alt="Diagram showing information flowing from a screen through a command, an event, a read model, and back to a screen" />
      </div>
    </div>
    <div class="cs-flow" style="margin-top:36px;">
      <div class="cs-flow-node screen active" style="background:var(--cs-screen-bg);border-color:var(--cs-screen-border);color:var(--cs-screen-text);" data-desc="An Actor looks at a <strong>Screen</strong> and decides to act. This is where a request begins.">Screen</div>
      <span class="cs-diagram-arrow">→</span>
      <div class="cs-flow-node" style="background:var(--cs-command-bg);border-color:var(--cs-command-border);color:var(--cs-command-text);" data-desc="The screen submits a <strong>Command</strong> - an explicit request for the system to do something, e.g. PlaceOrder.">Command</div>
      <span class="cs-diagram-arrow">→</span>
      <div class="cs-flow-node" style="background:var(--cs-event-bg);border-color:var(--cs-event-border);color:var(--cs-event-text);" data-desc="If the command is valid, the system emits one or more <strong>Events</strong> - permanent facts about what happened.">Event</div>
      <span class="cs-diagram-arrow">→</span>
      <div class="cs-flow-node" style="background:var(--cs-readmodel-bg);border-color:var(--cs-readmodel-border);color:var(--cs-readmodel-text);" data-desc="Events are folded into a <strong>Read Model</strong> - a queryable view built specifically to answer what the next screen needs to know.">Read Model</div>
      <span class="cs-diagram-arrow">→</span>
      <div class="cs-flow-node screen" style="background:var(--cs-screen-bg);border-color:var(--cs-screen-border);color:var(--cs-screen-text);" data-desc="The next <strong>Screen</strong> reads the Read Model and shows the result to the Actor, who can act again - closing the loop.">Screen</div>
    </div>
    <div class="cs-flow-desc" id="csFlowDesc">An Actor looks at a <strong>Screen</strong> and decides to act. This is where a request begins.</div>
    <div class="lp-story-persona" style="margin-top:28px;">
      <div class="lp-story-persona-icon">🛣️</div>
      <p class="lp-story-persona-text" style="font-style:normal;color:#78350f;">
        <strong>Swimlanes</strong> can be Teams or Systems - draw a horizontal lane per owner and slot every Event into the lane of whoever owns that data. Swimlanes indicate ownership of Events. If another team needs that data, they read it via a Translation slice, not by reaching into someone else's database.
      </p>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Facilitation</span>
      <h2>Running the Workshop: 6 Steps</h2>
      <p class="cs-why"><strong>Why:</strong> skipping a step doesn't save time - it just moves the confusion to week three of the sprint, where it's far more expensive to untangle.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Each step builds on the last. Expand a step to see its goal and how to actually run it in the room.</p>
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

    <p class="cs-workshop-ask">Two questions carry the whole workshop: <em>"What's the first event? What's the last event?"</em> to find the plot - and <em>"Is there any rule we didn't cover?"</em>, asked three times, to close the gaps.</p>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Reference</span>
      <h2>30 Rules Worth Knowing</h2>
      <p class="cs-why"><strong>Why:</strong> none of these are enforced by a compiler. They're enforced by whoever's facilitating - which is exactly why they're worth knowing cold, not just skimming once.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">These aren't laws, they're habits worth building - keep them in view during a session.</p>
    </div>

    <h3 style="text-align:center;font-size:1.15rem;color:#1e2235;margin-bottom:16px;">10 Facilitation Rules</h3>
    <div class="cs-static-list" style="margin-bottom:56px;">
      <div class="cs-check-item-static"><span class="cs-check-num">1</span><span>Every Event Modeling session needs a facilitator</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">2</span><span>Set a clear context before inviting people</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">3</span><span>Invite the right people - the ones who know the domain</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">4</span><span>Don't focus on technology / implementation</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">5</span><span>Don't get stuck in discussions - park them</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">6</span><span>Don't waste time beautifying the model in workshops</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">7</span><span>Never leave questions unanswered - make them hotspots</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">8</span><span>Start small - Event Modeling is exhausting</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">9</span><span>Event Modeling is primarily a communication tool</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">10</span><span>Keep it simple</span></div>
    </div>

    <h3 style="text-align:center;font-size:1.15rem;color:#1e2235;margin-bottom:16px;">The 20 Rules of Event Modeling</h3>
    <div class="cs-static-list">
      <div class="cs-check-item-static"><span class="cs-check-num">1</span><span>Start with events.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">2</span><span>Model facts, not ideas.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">3</span><span>Time flows left → right.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">4</span><span>If the order is unclear, create a hotspot.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">5</span><span>Name by intent.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">6</span><span>Use only four patterns.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">7</span><span>State Change • State View • Automation • Translation.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">8</span><span>Every command has a reason.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">9</span><span>Never add commands "just because."</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">10</span><span>Every Read Model answers a question.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">11</span><span>No question, no Read Model.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">12</span><span>Don't guess.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">13</span><span>Unknowns become hotspots.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">14</span><span>Keep slices small.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">15</span><span>One business capability per slice.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">16</span><span>Keep it simple.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">17</span><span>Complexity usually hides a problem.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">18</span><span>Optimize for conversation.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">19</span><span>Shared understanding beats pretty diagrams.</span></div>
      <div class="cs-check-item-static"><span class="cs-check-num">20</span><span>Model behavior, not structure.</span></div>
    </div>

    <div class="cs-quote-callout">The most important question to ask: "What happens next?"</div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Before You Send the Invite</span>
      <h2>Event Modeling Workshop Preparation</h2>
      <p class="cs-why"><strong>Why:</strong> a workshop with no facilitator, no clear goal, and the wrong people in the room still produces a nice-looking board - just not shared understanding. Five minutes here saves the whole session.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">Walk through this with your co-facilitator before scheduling the session. Your progress is saved right in this browser.</p>
    </div>
    <div class="cs-progress-bar-wrap" data-progress-for="prep">
      <div class="cs-progress-label"><span>Your progress</span><span class="cs-progress-count">0 / 5</span></div>
      <div class="cs-progress-track"><div class="cs-progress-fill"></div></div>
    </div>
    <div class="cs-checklist" data-key="prep">
      <label class="cs-check-item"><input type="checkbox" data-id="p1"><span>Do we have a facilitator?</span></label>
      <label class="cs-check-item"><input type="checkbox" data-id="p2"><span>Do we have a clear context?</span></label>
      <label class="cs-check-item"><input type="checkbox" data-id="p3"><span>Do we have a goal defined?</span></label>
      <label class="cs-check-item"><input type="checkbox" data-id="p4"><span>Are the right people invited?</span></label>
      <label class="cs-check-item"><input type="checkbox" data-id="p5"><span>Is the scheduled session too long?</span></label>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Notation Extras</span>
      <h2>Beyond the Basics</h2>
      <p class="cs-why"><strong>Why:</strong> a model only the person who drew it can read isn't shared understanding. These conventions are what make a big board legible to everyone who opens it after you.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">A handful of extra conventions that make bigger models easier to read - hover a status pill for its meaning.</p>
    </div>
    <div class="cs-notation-grid">
      <div class="cs-notation-card">
        <h4>🔴 Hotspots</h4>
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/notation-hotspot.png' | relative_url }}" alt="Red sticky note reading: Where is this information coming from?" style="max-width:140px;float:right;margin:0 0 10px 16px;" />
        <p>Anything unresolved - an open question, a blocker, a disputed rule, e.g. <em>"Where is this information coming from?"</em> - goes on a red sticky note directly on the model. It stays visible until someone answers it. A hotspot isn't a failure of the workshop; leaving it blank and moving on would be.</p>
      </div>
      <div class="cs-notation-card">
        <h4>🖥️ UI-Only Interaction</h4>
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/notation-ui-only.png' | relative_url }}" alt="Three wireframe screens shown one after the other with no commands or events" style="max-width:100%;margin-bottom:10px;" />
        <p>When a flow is purely navigational - no state change, no business rule - show one screen leading straight to the next, with no commands or events in between. Save the full notation for the moments that actually matter.</p>
      </div>
      <div class="cs-notation-card">
        <h4>🧑‍🤝‍🧑 Actor Lanes</h4>
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/actor-lanes.png' | relative_url }}" alt="Screens grouped into admin and user actor lanes" style="max-width:100%;margin-bottom:10px;" />
        <p>Stack actor lanes above the timeline - one per role, e.g. <em>admin</em>, <em>user</em> - so it's obvious at a glance which screens belong to which actor, and where their flows intersect.</p>
      </div>
      <div class="cs-notation-card">
        <h4>➡️ Chapters</h4>
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/notation-chapter-arrow.png' | relative_url }}" alt="Wide blue arrow used to group slices into a chapter" style="max-width:140px;margin-bottom:10px;" />
        <p>A wide blue arrow spanning several slices groups them into a named chapter - useful once a model grows past a single screen's width and needs a table of contents.</p>
      </div>
      <div class="cs-notation-card" style="grid-column:1/-1;">
        <h4>🏷️ Slice Status</h4>
        <img class="cs-fig" src="{{ '/assets/images/cheatsheet/slice-status.png' | relative_url }}" alt="Slice status dropdown showing Created, Done, Assigned, InProgress, Review, Blocked, Planned, and Informational" style="max-width:220px;float:right;margin:0 0 10px 20px;" />
        <p>Every slice carries a status chip. Hover each one below for what it means - the same statuses your build agent watches for.</p>
        <div class="cs-status-pills">
          <span class="cs-status-pill" data-status="created" title="Default status when a slice is first added to the board.">Created</span>
          <span class="cs-status-pill" data-status="planned" title="Ready to be implemented by an agent - this is the trigger that starts the build loop.">Planned</span>
          <span class="cs-status-pill" data-status="assigned" title="A person or agent has picked this slice up.">Assigned</span>
          <span class="cs-status-pill" data-status="inprogress" title="Actively being implemented right now.">InProgress</span>
          <span class="cs-status-pill" data-status="review" title="Implementation finished, awaiting review.">Review</span>
          <span class="cs-status-pill" data-status="done" title="Implemented, tested, and merged.">Done</span>
          <span class="cs-status-pill" data-status="blocked" title="Can't proceed - usually tied to an open hotspot.">Blocked</span>
          <span class="cs-status-pill" data-status="informational" title="This slice will not be implemented - it exists to document a fact for the reader.">Informational</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">From Model to Code</span>
      <h2>Modeling and Building with AI</h2>
      <p class="cs-why"><strong>Why:</strong> the moment an agent can read the model, it stops being documentation and becomes the thing that actually gets built - which is exactly why keeping it accurate is no longer optional.</p>
      <p class="lp-section-sub" style="margin-bottom:0;">The same board that ran your workshop can hand slices straight to a coding agent. Copy a command to get started.</p>
    </div>

    <div class="lp-benefits-grid" style="text-align:left;">
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">🧠</span>
        <h3>Modeling with AI</h3>
        <p style="margin-bottom:16px;">Installs the agent skills and board connection needed to run Event Modeling conversationally - brainstorm events, sequence them, sketch storyboards, and write Given-When-Then scenarios straight onto the board from a chat with Claude Code.</p>
        <div class="cs-code-block">
          <code>npx @eventmodelers/agent-modeling-kit@latest install</code>
          <button type="button" class="cs-copy-btn" data-copy="npx @eventmodelers/agent-modeling-kit@latest install">Copy</button>
        </div>
      </div>
      <div class="lp-benefit-card">
        <span class="lp-benefit-icon">⚙️</span>
        <h3>Building from an Event Model</h3>
        <p style="margin-bottom:16px;">Mark a slice <em>Planned</em> on the board and a build kit picks it up: it reads the slice definition, implements it, runs the tests, commits, and flips the status to <em>Done</em> - automatically. Pick the kit that matches your stack.</p>
        <div class="cs-code-block">
          <code>npx @eventmodelers/build-kit-supabase@latest install</code>
          <button type="button" class="cs-copy-btn" data-copy="npx @eventmodelers/build-kit-supabase@latest install">Copy</button>
        </div>
        <div class="cs-code-block">
          <code>npx @eventmodelers/build-kit-node@latest install</code>
          <button type="button" class="cs-copy-btn" data-copy="npx @eventmodelers/build-kit-node@latest install">Copy</button>
        </div>
        <div class="cs-code-block">
          <code>npx @eventmodelers/build-kit-axon@latest install</code>
          <button type="button" class="cs-copy-btn" data-copy="npx @eventmodelers/build-kit-axon@latest install">Copy</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cs-section">
  <div class="cs-section-inner">
    <div class="cs-section-head">
      <span class="cs-eyebrow">Go Deeper</span>
      <h2>Upskill Your Team with Event Modeling, Event Sourcing &amp; AI</h2>
      <p class="lp-section-sub" style="margin-bottom:0;">Everything referenced on the cheat sheet, one click away.</p>
    </div>
    <div class="cs-resource-grid">
      <a href="https://app.eventmodelers.ai" class="cs-resource-card" target="_blank" rel="noopener noreferrer">
        <span class="cs-resource-icon">🧩</span>
        <h4>Platform</h4>
        <span>app.eventmodelers.ai</span>
      </a>
      <a href="https://www.eventsourcingbook.com" class="cs-resource-card" target="_blank" rel="noopener noreferrer">
        <span class="cs-resource-icon">📘</span>
        <h4>Book</h4>
        <span>eventsourcingbook.com</span>
      </a>
      <a href="https://www.eventsourcingcourse.com" class="cs-resource-card" target="_blank" rel="noopener noreferrer">
        <span class="cs-resource-icon">🎓</span>
        <h4>Online Course</h4>
        <span>eventsourcingcourse.com</span>
      </a>
      <a href="https://www.youtube.com/@eventdrivenpodcast" class="cs-resource-card" target="_blank" rel="noopener noreferrer">
        <span class="cs-resource-icon">🎙️</span>
        <h4>Podcast</h4>
        <span>@eventdrivenpodcast</span>
      </a>
      <a href="https://newsletter.nebulit.de" class="cs-resource-card" target="_blank" rel="noopener noreferrer">
        <span class="cs-resource-icon">✉️</span>
        <h4>Newsletter</h4>
        <span>newsletter.nebulit.de</span>
      </a>
      <a href="https://www.nebulit.de" class="cs-resource-card" target="_blank" rel="noopener noreferrer">
        <span class="cs-resource-icon">🧭</span>
        <h4>Consulting</h4>
        <span>nebulit.de</span>
      </a>
      <a href="{{ '/workshop' | relative_url }}" class="cs-resource-card">
        <span class="cs-resource-icon">🧑‍🏫</span>
        <h4>Workshops</h4>
        <span>Run this with your team</span>
      </a>
    </div>
  </div>
</section>

</div>

<section class="lp-bottom-cta">
  <div class="lp-bottom-cta-inner">
    <h2>Ready to run your own workshop?</h2>
    <p>Keep this page open on a second screen during your next session, or grab the printable PDF for the wall.</p>
    <div class="lp-bottom-cta-btns">
      <a href="https://app.eventmodelers.ai" class="lp-btn-primary">Start Modeling for Free</a>
      <a href="{{ '/workshop' | relative_url }}" class="lp-btn-secondary">Join a Workshop</a>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/cheatsheet.js' | relative_url }}" defer></script>
