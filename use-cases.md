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

    <div class="lp-story-card">
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

    <div class="lp-story-card">
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

    <p class="lp-stories-more">More use cases in progress — <a href="https://newsletter.nebulit.de">join the newsletter</a> to be notified when the next one lands.</p>
  </div>
</section>
