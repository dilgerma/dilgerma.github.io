---
layout: docs
title: "Eventmodeling: Describing Business Rules with Given/When/Then"
description: How to make business rules visual, understandable, and testable using Given/When/Then in Event Modeling - a practical guide to business logic.
author: Martin Dilger
date: October 2023
category: Event Modeling
keywords: given when then, business rules, event modeling, testable rules, visual business logic, BDD, behavior driven development, business policies, rule modeling, test scenarios
featured_image: /assets/images/blog/eventmodeling-given-when-then.png
tags: [event-modeling, given-when-then, business-rules, bdd, testing, visual-modeling, business-logic]
---

# Eventmodeling: Describing Business Rules with Given/When/Then

**How to make business rules visual, understandable, and testable**

*October 2023 • 8 min read • Event Modeling*

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }})

---

![Describing Business Rules with "Given / When / Then"](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/ijv472UeDQC4cxwTpz9STq)

In the last episode of the **"Eventmodeling & Eventsourcing"** Podcast, we mainly discussed **"Given / When / Then"** scenarios to describe business policies and touched on **slice-based architectures**, especially how they simplify concurrent development and version control.

## Why Different Types of "Given / When / Then"?

We use business rules in three places:

1. When we **change** the system
2. When we **query** the system
3. When we perform **automated background tasks**

## 1. Rules to Change the System

To change the system, we use **state change slices** – typically consisting of:

- a screen
- a command (blue)
- and resulting event(s) (orange)

📌 *Example*: A customer clicks **Submit Order** on the orders page → this stores an event in the system.

![Example for Given / When / Then ](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/aPqrGF4u22iiyh5hVpYByB/email)

These rules are described using **Given / When / Then**:

- **Given** – sets system into a defined state
- **When** – describes the action
- **Then** – describes the expected outcome

This approach makes rules:

- Visual
- Understandable
- Testable (e.g., Gherkin syntax)

### Example

> When the `Submit Order` command is executed
> → Expect `Order Submitted` event stored with same ID

![Example scenario](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/stnPiZf8bK5irWL6QeAMHq/email)

Preventing duplicates:

> Given: `Order Submitted` already exists
> When: trying to submit again
> → Then: error state is expected

![Example scenario with Error State](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/oAQy3ersgMQ1JMAo2GMYZ1/email)

## 2. Rules for Read Models and Automations

In the podcast, Adam and I explained our different takes:

### My approach:

- Provide **Given / Then** for automations
- Optional **When** for context
- Emphasis: describe state & expected outcome

> Given: `Order Submitted`
> Then: `Customer Notified` is triggered automatically

![Given Then for Automations](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/tDd1uJGKEtNT9tehBzDkzz/email)


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

### Adam's approach:

- Treat automations like state change slices
- Use full **Given / When / Then**

> e.g. Treat automated SNS notification like a human-triggered command

![Automations as State Changes](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/idMfQz6uNKMMxQPYM9Btqq/email)

## Why "Given / When / Then" Matters

They are:

- Often **ignored at the start**
- Crucial for explaining **how your system works**
- A natural way to **bridge business and technical understanding**

## What Else You Should Know

- 🎓 Want hands-on learning? Join workshops on Event Modeling
- 📘 *"Understanding Eventsourcing"* provides deep insights into these concepts
- 🧩 Great workflow between **Figma & Miro** for Eventmodeling

🎧 Follow the **Eventmodeling & Eventsourcing Podcast**
👋 See you next week!

---

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** on March 16/17 — learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Full Agentic Event Modeling Plattform

AI-Enabled Event Modeling and Code-Generation

[Start Modeling here →](https://app.eventmodelers.de){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/modeling-branches-newsletter' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Modeling Branches Newsletter</h3>
        <p>Techniques for modeling conditional flows</p>
        <span class="related-post-meta">Event Modeling • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/documenting-software-with-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Documenting Software with Event Modeling</h3>
        <p>Creating living documentation with Event Modeling</p>
        <span class="related-post-meta">Event Modeling • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/modeling-branches' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Modeling Branches in Event Modeling</h3>
        <p>How to handle branching logic in your models</p>
        <span class="related-post-meta">Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>
