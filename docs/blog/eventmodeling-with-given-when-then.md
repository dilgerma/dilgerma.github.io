---
layout: docs
title: "Eventmodeling: Describing Business Rules with Given/When/Then"
---

<div class="blog-post">
  <a href="{{ '/docs/blog' | relative_url }}" class="blog-back-link">&larr; Back to Blog</a>

  <div class="blog-post-header">
    <h1>Eventmodeling: Describing Business Rules with Given/When/Then</h1>
    <p class="blog-post-subtitle">How to make business rules visual, understandable, and testable</p>
    <div class="blog-post-meta">
      <span>October 2023</span>
      <span>8 min read</span>
      <span>Event Modeling</span>
    </div>
  </div>

  <div class="blog-post-content">

# Eventmodeling – Describing Business Rules with "Given / When / Then"

![Describing Business Rules with "Given / When / Then"](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/ijv472UeDQC4cxwTpz9STq)

In the last episode of the **"Eventmodeling & Eventsourcing"** Podcast, we mainly discussed **"Given / When / Then"** scenarios to describe business policies and touched on **slice-based architectures**, especially how they simplify concurrent development and version control.

---

## Why Different Types of "Given / When / Then"?

We use business rules in three places:

1. When we **change** the system
2. When we **query** the system
3. When we perform **automated background tasks**

---

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

---

### Example

> When the `Submit Order` command is executed
> → Expect `Order Submitted` event stored with same ID

![Example scenario](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/stnPiZf8bK5irWL6QeAMHq/email)

Preventing duplicates:

> Given: `Order Submitted` already exists
> When: trying to submit again
> → Then: error state is expected

![Example scenario with Error State](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/oAQy3ersgMQ1JMAo2GMYZ1/email)

---

## 2. Rules for Read Models and Automations

In the podcast, Adam and I explained our different takes:

### My approach:

- Provide **Given / Then** for automations
- Optional **When** for context
- Emphasis: describe state & expected outcome

> Given: `Order Submitted`
> Then: `Customer Notified` is triggered automatically

![Given Then for Automations](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/tDd1uJGKEtNT9tehBzDkzz/email)

### Adam's approach:

- Treat automations like state change slices
- Use full **Given / When / Then**

> e.g. Treat automated SNS notification like a human-triggered command

![Automations as State Changes](https://embed.filekitcdn.com/e/h7RHcHkpLUya1CpCdVZJez/idMfQz6uNKMMxQPYM9Btqq/email)

---

## Why "Given / When / Then" Matters

They are:

- Often **ignored at the start**
- Crucial for explaining **how your system works**
- A natural way to **bridge business and technical understanding**

---

## What Else You Should Know

- 🎓 Want hands-on learning? Join workshops on Event Modeling
- 📘 *"Understanding Eventsourcing"* provides deep insights into these concepts
- 🧩 Great workflow between **Figma & Miro** for Eventmodeling

---

🎧 Follow the **Eventmodeling & Eventsourcing Podcast**
👋 See you next week!

  </div>
</div>
