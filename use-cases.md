---
layout: default
title: Use Cases - AI-Enabled Event Modeling
description: Real use cases showing how Event Modeling and AI agents solve concrete engineering problems — from UX discovery to domain modeling workshops.
keywords: event modeling use cases, AI agents, UX documentation, domain discovery, Claude Code
author: Martin Dilger
---

<section class="lp-stories">
  <div class="lp-stories-inner">
    <span class="lp-badge" style="background:rgba(99,102,241,0.12);color:#6366f1;border-color:rgba(99,102,241,0.3);">Real Use Cases</span>
    <h2>What can you actually do with this?</h2>
    <p class="lp-section-sub">Not a list of features. Real scenarios showing how the platform works — from a problem you recognise to a result you can open on your board.</p>

    <div class="lp-uc-nav">
      <div class="lp-uc-nav-label">Learn about <span>real-world use cases</span></div>
      <div class="lp-uc-nav-links">
        <a href="#uc-1" class="lp-uc-nav-item">
          <span class="lp-uc-nav-tag">📸 Use Case 1</span>
          <span class="lp-uc-nav-title">Document Existing UX Flows with AI</span>
          <span class="lp-uc-nav-meta">⚡ ~15 min · Zero screenshots · On autopilot</span>
          <span class="lp-uc-nav-arrow">→</span>
        </a>
        <a href="#uc-2" class="lp-uc-nav-item">
          <span class="lp-uc-nav-tag">🧠 Use Case 2</span>
          <span class="lp-uc-nav-title">Model Before You Code</span>
          <span class="lp-uc-nav-meta">🗣️ One conversation · 9 steps · Catch gaps before sprint 1</span>
          <span class="lp-uc-nav-arrow">→</span>
        </a>
        <a href="#uc-3" class="lp-uc-nav-item">
          <span class="lp-uc-nav-tag">🤝 Use Case 3</span>
          <span class="lp-uc-nav-title">Run Meetings That Actually Produce Something</span>
          <span class="lp-uc-nav-meta">📋 Visual agenda · Every change recorded · Clear outcomes every time</span>
          <span class="lp-uc-nav-arrow">→</span>
        </a>
        <a href="#uc-4" class="lp-uc-nav-item">
          <span class="lp-uc-nav-tag">⚙️ Use Case 4</span>
          <span class="lp-uc-nav-title">Build Directly from the Model</span>
          <span class="lp-uc-nav-meta">🤖 One status change · Agent implements · Tests pass · Marked done</span>
          <span class="lp-uc-nav-arrow">→</span>
        </a>
        <a href="#uc-5" class="lp-uc-nav-item">
          <span class="lp-uc-nav-tag">🔄 Use Case 5</span>
          <span class="lp-uc-nav-title">Change the Model, the Code Catches Up</span>
          <span class="lp-uc-nav-meta">✏️ Update the model · Reset to Planned · Agent rewrites the slice · Done</span>
          <span class="lp-uc-nav-arrow">→</span>
        </a>
      </div>
    </div>

    <div id="uc-1" class="lp-story-card">
      <div class="lp-story-card-header">
        <div class="lp-story-tag">📸 Use Case 1</div>
        <h3>Document Existing UX Flows with AI</h3>
        <p>Automatic Domain Discovery using Claude Code — on autopilot, in ~15 minutes</p>
        <div class="lp-story-time-pills">
          <span class="lp-story-pill">⚡ ~15 min total</span>
          <span class="lp-story-pill">🤖 Zero manual screenshots</span>
          <span class="lp-story-pill">📋 Zero documentation effort</span>
          <span class="lp-story-pill">🔍 Finds things you didn't know were there</span>
        </div>
      </div>

      <div class="lp-story-card-body">

        <div class="lp-story-persona">
          <div class="lp-story-persona-icon">👩‍💼</div>
          <p class="lp-story-persona-text">
            <strong>Sara</strong> is a software architect. In two days she has a domain modeling workshop with the business team. The agenda: map out how their Customer Onboarding flow actually works so they can redesign it. Normally she'd spend a morning taking screenshots, writing descriptions, and organizing them into something usable. She tries something different instead.
          </p>
        </div>

        <div class="lp-story-compare">
          <div class="lp-story-compare-col before">
            <div class="lp-story-compare-label">⏱ The old way — 3–4 hours</div>
            <ul class="lp-story-compare-list">
              <li>Taking screenshots of every screen, one by one</li>
              <li>Writing descriptions for each step by hand</li>
              <li>Organizing flows into a logical structure</li>
              <li>Missing edge cases nobody thought to check</li>
              <li>Result is subjective — you document what you think matters</li>
              <li>Boring. Easy to skip. Often done badly.</li>
            </ul>
          </div>
          <div class="lp-story-compare-col after">
            <div class="lp-story-compare-label">⚡ With AI Discovery — 15 minutes</div>
            <ul class="lp-story-compare-list">
              <li>Agent navigates every visible flow automatically</li>
              <li>Screenshots taken at every meaningful screen transition</li>
              <li>Placed directly on the board as a visual storyboard</li>
              <li>Finds paths nobody thought to look for</li>
              <li>Objective — it sees the product like a first-time user</li>
              <li>Fully on autopilot. You go make coffee.</li>
            </ul>
          </div>
        </div>

        <div class="lp-story-steps-label">How Sara did it — step by step</div>
        <div class="lp-story-steps">
          <div class="lp-story-step">
            <div class="lp-story-step-num">1</div>
            <div>
              <div class="lp-story-step-title">Install the agent kit</div>
              <div class="lp-story-step-body">One command sets up everything — agent loop, board connection, skills installed in Claude Code: <code>npx @eventmodelers/agent-modeling-kit@latest install</code></div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">2</div>
            <div>
              <div class="lp-story-step-title">Add the Chrome DevTools MCP</div>
              <div class="lp-story-step-body">Gives Claude Code a real browser to navigate with: <code>claude mcp add chrome-devtools --scope user -- npx chrome-devtools-mcp@latest</code></div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">3</div>
            <div>
              <div class="lp-story-step-title">Run /discover-storyboard — answer two questions</div>
              <div class="lp-story-step-body">Claude asks: <em>"What URL?"</em> and <em>"Any guidance?"</em>. Sara types <code>https://app.hercompany.com</code> and <em>"Focus on the customer onboarding flow."</em> Then she goes to make coffee.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">4</div>
            <div>
              <div class="lp-story-step-title">The agent navigates, screenshots, and documents — like a real user</div>
              <div class="lp-story-step-body">Claude opens the browser, clicks through every flow, fills forms with plausible test data, and at every meaningful screen transition takes a screenshot and writes: what it shows, how the user got there, what they can do next.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">5</div>
            <div>
              <div class="lp-story-step-title">The board is ready — 9 screens, 3 timelines, zero effort</div>
              <div class="lp-story-step-body">Sara opens Eventmodelers. Three chapters are there — each with real screenshots and descriptions. The workshop can start immediately. No blank canvas, no "so where do we begin?"</div>
            </div>
          </div>
        </div>

        <div class="lp-story-result">
          <div class="lp-story-result-label">What appeared on the board — screens the agent discovered automatically</div>
          <div class="lp-story-result-grid">
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">Login Page</div>
              <div class="lp-story-screen-flow">Login &amp; Registration</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">Signup Form</div>
              <div class="lp-story-screen-flow">Login &amp; Registration</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">Email Verification</div>
              <div class="lp-story-screen-flow">Login &amp; Registration</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">Onboarding Wizard — Step 1</div>
              <div class="lp-story-screen-flow">Onboarding Wizard</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">Onboarding Wizard — Step 2</div>
              <div class="lp-story-screen-flow">Onboarding Wizard</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">Onboarding Wizard — Step 3</div>
              <div class="lp-story-screen-flow">Onboarding Wizard</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">Dashboard — First Visit</div>
              <div class="lp-story-screen-flow">First Dashboard Experience</div>
            </div>
          </div>
        </div>

        <div class="lp-story-steps-label">What Sara discovered — things nobody had noticed</div>
        <div class="lp-story-insights">
          <div class="lp-story-insight warning">
            <div class="lp-story-insight-icon">🔎</div>
            <div>
              <div class="lp-story-insight-title">The "Resend email" button is almost invisible</div>
              <div class="lp-story-insight-body">The agent documented it: <em>"user can resend verification email (small text link at the bottom)."</em> Sara's team had never discussed this. It went on the workshop agenda.</div>
            </div>
          </div>
          <div class="lp-story-insight info">
            <div class="lp-story-insight-icon">🔀</div>
            <div>
              <div class="lp-story-insight-title">The wizard asks company size before company name</div>
              <div class="lp-story-insight-body">Seeing the sequence documented objectively made it obvious. Someone immediately said: <em>"Wait, that's backwards."</em> No one had noticed because they all knew what the wizard was supposed to do.</div>
            </div>
          </div>
          <div class="lp-story-insight danger">
            <div class="lp-story-insight-icon">👆</div>
            <div>
              <div class="lp-story-insight-title">The dashboard has 6 competing calls-to-action</div>
              <div class="lp-story-insight-body">The agent listed all six possible actions on the first-time dashboard. Seeing them all written together made the problem impossible to argue with.</div>
            </div>
          </div>
        </div>

        <p style="font-size:0.95rem;color:#6b6b76;line-height:1.75;font-style:italic;margin-bottom:32px;">
          The agent didn't read the docs or the code. It looked at the actual product, the way a real user would. And it built a starting point for the workshop in 15 minutes, on autopilot. Domain discovery doesn't have to mean writing boring documentation. Sometimes it just means letting an agent show you what's really there — including the things you didn't know were broken.
        </p>

        <div class="lp-story-cta-row">
          <a href="https://app.eventmodelers.ai" class="lp-btn-primary" style="padding:13px 30px;font-size:0.95rem;">Try the Platform Free →</a>
          <a href="https://app.eventmodelers.ai/documentation" class="lp-btn-outline" style="padding:12px 26px;font-size:0.9rem;">Read the Agent Docs</a>
          <span class="lp-story-cta-note">Requires Claude Code + Chrome DevTools MCP</span>
        </div>

      </div>
    </div>

    <div id="uc-2" class="lp-story-card">
      <div class="lp-story-card-header">
        <div class="lp-story-tag">🧠 Use Case 2</div>
        <h3>Model Before You Code — Understand Your Business Case with an Agent</h3>
        <p>Run the full Event Modeling workflow in one conversation — and discover what the business actually needs before anyone writes a line of code</p>
        <div class="lp-story-time-pills">
          <span class="lp-story-pill">🗣️ One conversation, 9 structured steps</span>
          <span class="lp-story-pill">🔍 Surfaces gaps before they become bugs</span>
          <span class="lp-story-pill">📐 Complete model, ready for code generation</span>
          <span class="lp-story-pill">🤝 Works with domain experts in the room</span>
        </div>
      </div>

      <div class="lp-story-card-body">

        <div class="lp-story-persona">
          <div class="lp-story-persona-icon">👨‍💻</div>
          <p class="lp-story-persona-text">
            <strong>David</strong> is a senior developer about to start a new feature: a subscription management flow for a SaaS product. The business gave him a one-pager, a Figma mockup, and a Confluence doc with bullet points. He has sprint planning in two days. He types <code>/orchestrate-event-modeling</code> and answers five questions.
          </p>
        </div>

        <div class="lp-story-compare">
          <div class="lp-story-compare-col before">
            <div class="lp-story-compare-label">⏱ The old way — build first, regret later</div>
            <ul class="lp-story-compare-list">
              <li>Read the requirements doc, nod, assume you understand it</li>
              <li>Open the IDE, start with the database schema</li>
              <li>Discover mid-sprint that "subscription" means three different things to three people</li>
              <li>Find missing edge cases in QA — or in production</li>
              <li>Refactor the model after the business changes their mind about what "cancelled" means</li>
              <li>Half the spec is implicit knowledge nobody wrote down</li>
            </ul>
          </div>
          <div class="lp-story-compare-col after">
            <div class="lp-story-compare-label">⚡ With /orchestrate-event-modeling</div>
            <ul class="lp-story-compare-list">
              <li>Agent interviews you about the domain — fills gaps immediately</li>
              <li>Brainstorms every event the system could produce</li>
              <li>Sequences events into a coherent narrative before you touch any code</li>
              <li>Builds UI storyboards showing exactly what data flows where</li>
              <li>Generates Given-When-Then specs for every command — including failures</li>
              <li>Validates the model and catches structural problems before sprint 1</li>
            </ul>
          </div>
        </div>

        <div class="lp-story-steps-label">How David did it — step by step</div>
        <div class="lp-story-steps">
          <div class="lp-story-step">
            <div class="lp-story-step-num">1</div>
            <div>
              <div class="lp-story-step-title">Install the agent kit</div>
              <div class="lp-story-step-body">One command sets up everything — skills installed in Claude Code, board connection configured: <code>npx @eventmodelers/agent-modeling-kit@latest install</code></div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">2</div>
            <div>
              <div class="lp-story-step-title">Run /orchestrate-event-modeling — answer five questions</div>
              <div class="lp-story-step-body">The agent opens with a short interview: <em>"What are you modeling?"</em>, <em>"What's your goal — learning, production code, or design validation?"</em>, <em>"Any constraints?"</em>. David pastes in the requirements doc and answers in plain English. The agent confirms its understanding before touching the board.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">3</div>
            <div>
              <div class="lp-story-step-title">The agent runs 9 structured steps — one at a time</div>
              <div class="lp-story-step-body">Step 1 brainstorms every domain event. Step 2 sequences them. Step 3 sketches the UI storyboard. Steps 4 and 5 identify commands and read models. Step 7 writes Given-When-Then specs for every command — not just happy paths. At each step, the agent asks targeted questions and writes phase summaries before moving forward.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">4</div>
            <div>
              <div class="lp-story-step-title">The agent builds the board in real time</div>
              <div class="lp-story-step-body">Every event, command, read model, and scenario spec is placed directly on the Eventmodelers board as the conversation progresses. David can open the board at any point and see the model taking shape — timelines filling in, screens appearing, spec cells populating.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">5</div>
            <div>
              <div class="lp-story-step-title">Validation pass — PASS verdict, model ready</div>
              <div class="lp-story-step-body">Step 9 runs a completeness and consistency check. Every field has an origin and a destination. Every command has scenarios. The agent returns a PASS verdict and writes a summary. David goes into sprint planning with a board he can share — not a requirements doc that three people will interpret differently.</div>
            </div>
          </div>
        </div>

        <div class="lp-story-steps-label">What David discovered — before writing a single line of code</div>
        <div class="lp-story-insights">
          <div class="lp-story-insight danger">
            <div class="lp-story-insight-icon">💥</div>
            <div>
              <div class="lp-story-insight-title">There was no event for a failed payment retry</div>
              <div class="lp-story-insight-body">The agent's scenario step asked: <em>"What happens when the payment processor returns a transient error?"</em> Nobody had written this down. It would have been discovered in production — or not at all, silently swallowing failures.</div>
            </div>
          </div>
          <div class="lp-story-insight warning">
            <div class="lp-story-insight-icon">🔀</div>
            <div>
              <div class="lp-story-insight-title">"Cancelled" meant three different things to three different people</div>
              <div class="lp-story-insight-body">The event brainstorm surfaced <em>SubscriptionCancelled</em>, <em>SubscriptionPendingCancellation</em>, and <em>SubscriptionImmediatelyCancelled</em> as distinct events. Seeing them side by side forced the first real conversation about what the product actually does at end-of-billing-period. That conversation had never happened before.</div>
            </div>
          </div>
          <div class="lp-story-insight info">
            <div class="lp-story-insight-icon">📐</div>
            <div>
              <div class="lp-story-insight-title">The storyboard revealed a missing read model</div>
              <div class="lp-story-insight-body">The UI storyboard step drew the subscription management screen and listed every field it needed to display. One field — the next billing date — had no event that produced it. The agent flagged this in the completeness check. Without the model, this would have become a last-minute backend scramble.</div>
            </div>
          </div>
        </div>

        <p style="font-size:0.95rem;color:#6b6b76;line-height:1.75;font-style:italic;margin-bottom:32px;">
          The agent didn't write the code. It asked the right questions — the ones that expose assumptions, reveal missing events, and force the team to agree on what "cancelled" actually means. That conversation, structured into 9 steps, is worth more than a sprint of code written against a misunderstood spec. Model first. Code second.
        </p>

        <div class="lp-story-cta-row">
          <a href="https://app.eventmodelers.ai" class="lp-btn-primary" style="padding:13px 30px;font-size:0.95rem;">Try the Platform Free →</a>
          <a href="https://app.eventmodelers.ai/documentation" class="lp-btn-outline" style="padding:12px 26px;font-size:0.9rem;">Read the Agent Docs</a>
          <span class="lp-story-cta-note">Requires Claude Code + the modeling kit installed</span>
        </div>

      </div>
    </div>

    <div id="uc-3" class="lp-story-card">
      <div class="lp-story-card-header">
        <div class="lp-story-tag">🤝 Use Case 3</div>
        <h3>Run Meetings That Actually Produce Something</h3>
        <p>A shared board as the agenda, the whiteboard, and the minutes — all at once</p>
        <div class="lp-story-time-pills">
          <span class="lp-story-pill">📋 Visual agenda, not a bullet list</span>
          <span class="lp-story-pill">🔁 Every change is recorded and replayable</span>
          <span class="lp-story-pill">✅ Clear outcomes after every session</span>
          <span class="lp-story-pill">🚫 No more meaningless agendas</span>
        </div>
      </div>

      <div class="lp-story-card-body">

        <div class="lp-story-persona">
          <div class="lp-story-persona-icon">👥</div>
          <p class="lp-story-persona-text">
            <strong>The team</strong> used to start every refinement with the same question: <em>"So — where were we?"</em> Twenty minutes gone before a single decision. Now the first thing anyone does when a meeting starts is open the board. The model is the agenda. What's on it drives the conversation. What changes during the session is captured automatically. The meeting ends with something tangible — every time.
          </p>
        </div>

        <div class="lp-story-compare">
          <div class="lp-story-compare-col before">
            <div class="lp-story-compare-label">⏱ The old way — talking in circles</div>
            <ul class="lp-story-compare-list">
              <li>Agenda is a list of topics — nobody knows what "discuss payments" means</li>
              <li>Half the meeting is reconstructing context from last time</li>
              <li>Decisions happen but nobody wrote them down the same way</li>
              <li>Whiteboard gets erased, sticky notes get lost</li>
              <li>Follow-up email tries to summarise — different people remember it differently</li>
              <li>Next meeting starts from scratch again</li>
            </ul>
          </div>
          <div class="lp-story-compare-col after">
            <div class="lp-story-compare-label">⚡ With a shared model board</div>
            <ul class="lp-story-compare-list">
              <li>Open the board — the model is the agenda, visually</li>
              <li>Context is immediate: everyone sees what was there before</li>
              <li>Changes made during the session are recorded as they happen</li>
              <li>Board history lets you replay every move after the fact</li>
              <li>Export a screenshot at the end — your meeting minutes, done</li>
              <li>Next meeting picks up exactly where this one left off</li>
            </ul>
          </div>
        </div>

        <div class="lp-story-steps-label">How a session unfolds — from opening to outcome</div>
        <div class="lp-story-steps">
          <div class="lp-story-step">
            <div class="lp-story-step-num">1</div>
            <div>
              <div class="lp-story-step-title">Open the board — the model is already there</div>
              <div class="lp-story-step-body">No deck, no document, no "let me share my screen." The board is open, the timeline is visible, the context from last session is still there. The conversation can start immediately.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">2</div>
            <div>
              <div class="lp-story-step-title">The model guides every discussion</div>
              <div class="lp-story-step-body">Instead of abstract topics, the team points at specific events, commands, and flows. <em>"This command — what happens if it fails?"</em> is a better question than <em>"So, about the payment flow…"</em>. The visual structure keeps the conversation grounded.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">3</div>
            <div>
              <div class="lp-story-step-title">Every change lands directly on the board</div>
              <div class="lp-story-step-body">A new event gets added. A command gets renamed. A missing read model gets flagged. All of it goes onto the board in real time — not into someone's notebook to be typed up later.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">4</div>
            <div>
              <div class="lp-story-step-title">Board history records every move automatically</div>
              <div class="lp-story-step-body">Every change to the board is captured — who moved what, when. After the session you can scrub through the full history and replay exactly how the model evolved. Nothing gets lost. Even the reasoning behind a decision is visible in the sequence of changes.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">5</div>
            <div>
              <div class="lp-story-step-title">Export a screenshot — your meeting minutes in one click</div>
              <div class="lp-story-step-body">At the end of the session, one person exports a screenshot of the board. That's the summary. Not a write-up. Not an email. The model speaks for itself — and everyone who was in the room already agreed on what's on it.</div>
            </div>
          </div>
        </div>

        <div class="lp-story-result">
          <div class="lp-story-result-label">Board history — every change recorded and replayable</div>
          <img src="/assets/images/board_history.png" alt="Board history showing all recorded changes with a timeline scrubber" style="width:100%;border-radius:10px;border:1px solid #e5e5e5;margin-top:12px;" />
        </div>

        <div class="lp-story-steps-label" style="margin-top:40px;">What the team discovered — once meetings had structure</div>
        <div class="lp-story-insights">
          <div class="lp-story-insight info">
            <div class="lp-story-insight-icon">🗣️</div>
            <div>
              <div class="lp-story-insight-title">Conversations became specific instead of circular</div>
              <div class="lp-story-insight-body">When the agenda is a visual model, vague topics disappear. You can't have a 20-minute debate about <em>"the subscription flow"</em> when the flow is right there on screen. Either the model is right or it isn't — and the team can see which.</div>
            </div>
          </div>
          <div class="lp-story-insight warning">
            <div class="lp-story-insight-icon">⏪</div>
            <div>
              <div class="lp-story-insight-title">Board history settled a dispute no one remembered</div>
              <div class="lp-story-insight-body">Two weeks after a session, the team disagreed on whether a particular event had been intentionally removed or accidentally deleted. They opened the history, scrubbed to that moment, and saw exactly what happened — and why. Case closed in 90 seconds.</div>
            </div>
          </div>
          <div class="lp-story-insight danger">
            <div class="lp-story-insight-icon">📋</div>
            <div>
              <div class="lp-story-insight-title">Nobody writes meeting minutes anymore</div>
              <div class="lp-story-insight-body">The screenshot at the end of each session replaced the follow-up email that nobody read anyway. The board is the record. If a decision isn't on the board, it didn't happen.</div>
            </div>
          </div>
        </div>

        <p style="font-size:0.95rem;color:#6b6b76;line-height:1.75;font-style:italic;margin-bottom:32px;">
          The board doesn't just capture what the team decided — it changes how they talk. When everyone is looking at the same visual model, the conversation becomes about the model. Not about opinions, not about who remembers it differently. The structure is the discipline. And every meeting ends with something real: a board that reflects what was agreed, recorded change by change.
        </p>

        <div class="lp-story-cta-row">
          <a href="https://app.eventmodelers.ai" class="lp-btn-primary" style="padding:13px 30px;font-size:0.95rem;">Try the Platform Free →</a>
          <a href="https://app.eventmodelers.ai/documentation" class="lp-btn-outline" style="padding:12px 26px;font-size:0.9rem;">See the Board in Action</a>
          <span class="lp-story-cta-note">Real-time collaboration · History included in all plans</span>
        </div>

      </div>
    </div>

    <div id="uc-4" class="lp-story-card">
      <div class="lp-story-card-header">
        <div class="lp-story-tag">⚙️ Use Case 4</div>
        <h3>Build Directly from the Model</h3>
        <p>Mark a slice as Planned on the board — the agent implements it, runs the tests, commits, and marks it Done. Automatically.</p>
        <div class="lp-story-time-pills">
          <span class="lp-story-pill">🤖 Fully autonomous implementation</span>
          <span class="lp-story-pill">✅ Tests run before every commit</span>
          <span class="lp-story-pill">📋 Board stays in sync with the code</span>
          <span class="lp-story-pill">🔁 Slice by slice, no manual handoff</span>
        </div>
      </div>

      <div class="lp-story-card-body">

        <div class="lp-story-persona">
          <div class="lp-story-persona-icon">👨‍💻</div>
          <p class="lp-story-persona-text">
            <strong>Alex</strong> has a complete Event Model on the board — events, commands, read models, and Given-When-Then specs from the session last week. The team has agreed on the model. Now it's time to build. Alex installs the build kit, starts the agent loop in a terminal, and goes back to the board. He marks the first slice <em>Planned</em>. Three minutes later he gets a notification: the slice is <em>Done</em>.
          </p>
        </div>

        <div class="lp-story-compare">
          <div class="lp-story-compare-col before">
            <div class="lp-story-compare-label">⏱ The old way — model on the board, code written by hand</div>
            <ul class="lp-story-compare-list">
              <li>Developer reads the model, translates it into code manually</li>
              <li>Context switches between the board and the IDE constantly</li>
              <li>Edge cases from the model get missed in the implementation</li>
              <li>Tests are written separately — or skipped entirely</li>
              <li>Status tracking is a separate manual step nobody enjoys</li>
              <li>The model drifts from the code the moment the sprint starts</li>
            </ul>
          </div>
          <div class="lp-story-compare-col after">
            <div class="lp-story-compare-label">⚡ With a Build Kit</div>
            <ul class="lp-story-compare-list">
              <li>Agent reads the slice definition directly from the board</li>
              <li>Implements command handlers, projections, or automations — correctly typed</li>
              <li>Runs <code>build</code> and <code>test</code> before every commit</li>
              <li>Commits with a meaningful message, merges to main</li>
              <li>Sets slice status to Done on the board automatically</li>
              <li>The board always reflects the true state of the codebase</li>
            </ul>
          </div>
        </div>

        <div class="lp-story-steps-label">How Alex did it — step by step</div>
        <div class="lp-story-steps">
          <div class="lp-story-step">
            <div class="lp-story-step-num">1</div>
            <div>
              <div class="lp-story-step-title">Install the build kit for your stack</div>
              <div class="lp-story-step-body">One command installs the agent loop, skills, and board connection inside your project. Choose the kit that matches your backend: <code>npx @eventmodelers/build-kit-node install</code> for Node.js, <code>npx @eventmodelers/build-kit-axon install</code> for Axon/Java, or <code>npx @eventmodelers/build-kit-supabase install</code> for Supabase. The installer asks for your API token and Organization ID — everything else is automatic.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">2</div>
            <div>
              <div class="lp-story-step-title">Start the agent loop</div>
              <div class="lp-story-step-body">Open a terminal and start the ralph loop: <code>cd .build-kit-node && ./ralph.sh</code>. The loop polls for work every few seconds. Optionally start the realtime agent in a second terminal — it subscribes to board events over Supabase Realtime so the loop reacts instantly the moment a slice status changes, without any polling delay.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">3</div>
            <div>
              <div class="lp-story-step-title">Mark a slice Planned on the board</div>
              <div class="lp-story-step-body">Open your Eventmodelers board, find any slice — a command handler, a projection, an automation — and set its status to <em>Planned</em>. That single action is the only trigger. Within seconds, the realtime agent picks up the change, writes a task, and the loop fires.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">4</div>
            <div>
              <div class="lp-story-step-title">The agent fetches the slice definition and implements it</div>
              <div class="lp-story-step-body">Phase 1 loads the full slice definition from the board — events, commands, fields, Given-When-Then specs — and writes it to <code>.slices/</code>. Phase 2 reads it, determines the slice type, and runs the matching skill: <code>/build-state-change</code> for command handlers, <code>/build-state-view</code> for projections, <code>/build-automation</code> for reactors. The slice status flips to <em>InProgress</em> on the board the moment the agent starts.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">5</div>
            <div>
              <div class="lp-story-step-title">Tests pass, commit lands, board turns green</div>
              <div class="lp-story-step-body">The agent runs <code>npm run build</code> and the slice test suite. If everything passes, it commits with <code>feat: &lt;slice name&gt;</code>, merges to main, updates the slice status to <em>Done</em> on the board, and immediately starts watching for the next Planned slice. Alex's board turns green, one slice at a time — no manual handoff at any step.</div>
            </div>
          </div>
        </div>

        <div class="lp-story-steps-label">Available build kits</div>
        <div class="lp-story-result">
          <div class="lp-story-result-label">Choose the kit that matches your stack</div>
          <div class="lp-story-result-grid">
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">build-kit-node</div>
              <div class="lp-story-screen-flow">Node.js / TypeScript backends</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">build-kit-axon</div>
              <div class="lp-story-screen-flow">Java / Axon Framework (event sourcing)</div>
            </div>
            <div class="lp-story-screen-item">
              <div class="lp-story-screen-title">build-kit-supabase</div>
              <div class="lp-story-screen-flow">Supabase / PostgreSQL backends</div>
            </div>
          </div>
        </div>

        <div class="lp-story-steps-label" style="margin-top:40px;">What Alex discovered — once the loop was running</div>
        <div class="lp-story-insights">
          <div class="lp-story-insight info">
            <div class="lp-story-insight-icon">📋</div>
            <div>
              <div class="lp-story-insight-title">The model became the spec, not just the diagram</div>
              <div class="lp-story-insight-body">Because the agent reads Given-When-Then scenarios directly from the slice definition, the scenarios the team wrote during modeling became the actual test cases. The gap between "what we modeled" and "what the tests verify" disappeared completely.</div>
            </div>
          </div>
          <div class="lp-story-insight warning">
            <div class="lp-story-insight-icon">🔀</div>
            <div>
              <div class="lp-story-insight-title">A missing field surfaced immediately — not in QA</div>
              <div class="lp-story-insight-body">The build step failed when implementing a projection because a field referenced in the read model had no producing event. The agent flagged it, Alex updated the model, re-exported, and the loop retried. The gap was found in seconds — not three sprints later in a regression.</div>
            </div>
          </div>
          <div class="lp-story-insight danger">
            <div class="lp-story-insight-icon">🤖</div>
            <div>
              <div class="lp-story-insight-title">The board became the source of truth for both the model and the code</div>
              <div class="lp-story-insight-body">Every Done slice on the board meant exactly one thing: code merged to main, tests passing. There was no more "the model says X but the code does Y." The loop kept them in sync automatically — and the history on the board made it clear exactly when each piece had been built.</div>
            </div>
          </div>
        </div>

        <p style="font-size:0.95rem;color:#6b6b76;line-height:1.75;font-style:italic;margin-bottom:32px;">
          The model isn't documentation anymore. It's a build specification. Every event, command, and read model you place on the board is something the agent can implement — correctly, with tests, without you touching the IDE. The distance between <em>we agreed on the design</em> and <em>the feature is in main</em> collapsed from days to minutes.
        </p>

        <div class="lp-story-cta-row">
          <a href="https://app.eventmodelers.ai" class="lp-btn-primary" style="padding:13px 30px;font-size:0.95rem;">Try the Platform Free →</a>
          <a href="https://app.eventmodelers.ai/documentation" class="lp-btn-outline" style="padding:12px 26px;font-size:0.9rem;">Read the Build Kit Docs</a>
          <span class="lp-story-cta-note">Requires Claude Code · Node.js, Axon, or Supabase project</span>
        </div>

      </div>
    </div>

    <div id="uc-5" class="lp-story-card">
      <div class="lp-story-card-header">
        <div class="lp-story-tag">🔄 Use Case 5</div>
        <h3>Change the Model, the Code Catches Up</h3>
        <p>Update a slice definition on the board, reset its status to Planned — the agent rewrites the existing implementation to match. The model is always the source of truth.</p>
        <div class="lp-story-time-pills">
          <span class="lp-story-pill">✏️ Model change is the only input</span>
          <span class="lp-story-pill">🔄 Existing code rewritten to match</span>
          <span class="lp-story-pill">✅ Tests verify the new behaviour</span>
          <span class="lp-story-pill">📋 Board and code stay in sync</span>
        </div>
      </div>

      <div class="lp-story-card-body">

        <div class="lp-story-persona">
          <div class="lp-story-persona-icon">👩‍💻</div>
          <p class="lp-story-persona-text">
            <strong>Lena</strong> is three weeks into the build. Several slices are already Done — command handlers implemented, tests passing, board green. Then the business comes back: the <em>OrderPlaced</em> event needs two new fields, the projection that reads orders needs to expose them, and the command that places an order needs an extra validation rule. In the old world this means reading the code, finding every place the event is used, updating each one, hoping nothing is missed. Lena opens the board instead.
          </p>
        </div>

        <div class="lp-story-compare">
          <div class="lp-story-compare-col before">
            <div class="lp-story-compare-label">⏱ The old way — chase the change through the code</div>
            <ul class="lp-story-compare-list">
              <li>Find every file that touches the changed event or command</li>
              <li>Update each one manually — hoping you didn't miss a consumer</li>
              <li>Update the tests by hand — or skip them and regret it later</li>
              <li>Update the documentation separately — it drifts immediately</li>
              <li>The model on the board is now wrong — nobody updates it</li>
              <li>Code and model diverge from the moment the change lands</li>
            </ul>
          </div>
          <div class="lp-story-compare-col after">
            <div class="lp-story-compare-label">⚡ With the model as source of truth</div>
            <ul class="lp-story-compare-list">
              <li>Update the slice definition on the board — add fields, change rules</li>
              <li>Reset the slice status to <em>Planned</em></li>
              <li>Agent reads the new definition and rewrites the implementation</li>
              <li>Runs build and tests against the updated spec — verifies correctness</li>
              <li>Commits, sets status back to <em>Done</em></li>
              <li>Board and codebase reflect the same reality — automatically</li>
            </ul>
          </div>
        </div>

        <div class="lp-story-steps-label">How Lena did it — step by step</div>
        <div class="lp-story-steps">
          <div class="lp-story-step">
            <div class="lp-story-step-num">1</div>
            <div>
              <div class="lp-story-step-title">Update the slice definition on the board</div>
              <div class="lp-story-step-body">Lena opens the <em>PlaceOrder</em> slice on the board and makes the changes the business asked for: adds <code>discountCode</code> and <code>shippingTier</code> to the <em>OrderPlaced</em> event, adds a validation rule to the command (<em>"discount code must be active"</em>), and updates the Given-When-Then scenario to cover the new failure case. The change takes four minutes. The board is now accurate.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">2</div>
            <div>
              <div class="lp-story-step-title">Reset the slice status to Planned</div>
              <div class="lp-story-step-body">One click on the status chip — <em>Done</em> → <em>Planned</em>. That single action is the trigger. The realtime agent picks up the change within seconds and writes a task for the build loop. No command to run, no script to invoke. The board event is the instruction.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">3</div>
            <div>
              <div class="lp-story-step-title">The agent reads the new model and rewrites the slice</div>
              <div class="lp-story-step-body">The loop fires, sets the slice to <em>InProgress</em>, and fetches the updated definition from the board. It reads the existing implementation in <code>.slices/</code>, compares it with the new spec, and runs <code>/build-state-change</code> against the updated definition. The agent does not patch around the old code — it implements the slice correctly according to the current model. What the model says is what the code does.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">4</div>
            <div>
              <div class="lp-story-step-title">Tests run against the new spec — including the new failure scenario</div>
              <div class="lp-story-step-body">The agent runs <code>npm run build</code> and the slice test suite. The new Given-When-Then scenario — <em>"Given an inactive discount code, When PlaceOrder is submitted, Then the command is rejected"</em> — is tested as part of the standard test run. The test was written on the board; the agent made sure it passes in the code.</div>
            </div>
          </div>
          <div class="lp-story-step">
            <div class="lp-story-step-num">5</div>
            <div>
              <div class="lp-story-step-title">Commit lands, board turns green again</div>
              <div class="lp-story-step-body">Tests pass. The agent commits with <code>feat: update PlaceOrder — add discountCode, shippingTier, validation rule</code>, merges to main, and sets the slice back to <em>Done</em> on the board. Lena opens the board. Green. She opens the code. It matches what the board says. She didn't touch the IDE once.</div>
            </div>
          </div>
        </div>

        <div class="lp-story-steps-label">What Lena discovered — once the model owns the change</div>
        <div class="lp-story-insights">
          <div class="lp-story-insight info">
            <div class="lp-story-insight-icon">🔄</div>
            <div>
              <div class="lp-story-insight-title">Changing the model felt safer than changing the code</div>
              <div class="lp-story-insight-body">When the model is the source of truth, the right place to make a change is obvious. You don't open the IDE and hope you found every callsite. You update the definition on the board — one place, fully visible — and let the agent propagate it into the code. The change is auditable before a single line is written.</div>
            </div>
          </div>
          <div class="lp-story-insight warning">
            <div class="lp-story-insight-icon">🧩</div>
            <div>
              <div class="lp-story-insight-title">The projection needed updating too — the board made that obvious</div>
              <div class="lp-story-insight-body">When Lena added the new fields to <em>OrderPlaced</em>, she could immediately see on the board that the <em>OrderSummary</em> read model didn't expose them yet. She updated that slice definition as well, reset it to Planned, and the agent updated the projection in the same loop run. The board made the dependency visible before the code had to break to reveal it.</div>
            </div>
          </div>
          <div class="lp-story-insight danger">
            <div class="lp-story-insight-icon">🚫</div>
            <div>
              <div class="lp-story-insight-title">Nobody patched the code directly — and that mattered</div>
              <div class="lp-story-insight-body">On a previous project, a developer had added a quick field directly in the code without updating the model. Three months later the board said one thing and the code did another. Nobody knew which was right. This time, the rule was explicit: if it's not on the board, it doesn't belong in the code. The model is the spec. Always.</div>
            </div>
          </div>
        </div>

        <p style="font-size:0.95rem;color:#6b6b76;line-height:1.75;font-style:italic;margin-bottom:32px;">
          The model isn't a diagram you draw once and forget. It's a living spec — and when it changes, the code changes with it. Not the other way around. Resetting a slice to Planned isn't undoing work: it's telling the agent that the definition has changed and the implementation needs to catch up. That discipline — model first, code follows — is what keeps the board and the codebase telling the same story, sprint after sprint.
        </p>

        <div class="lp-story-cta-row">
          <a href="https://app.eventmodelers.ai" class="lp-btn-primary" style="padding:13px 30px;font-size:0.95rem;">Try the Platform Free →</a>
          <a href="https://app.eventmodelers.ai/documentation" class="lp-btn-outline" style="padding:12px 26px;font-size:0.9rem;">Read the Build Kit Docs</a>
          <span class="lp-story-cta-note">Requires Claude Code · Build kit installed · Agent loop running</span>
        </div>

      </div>
    </div>

    <p class="lp-stories-more">More use cases in progress — <a href="https://newsletter.nebulit.de">join the newsletter</a> to be notified when the next one lands.</p>
  </div>
</section>
