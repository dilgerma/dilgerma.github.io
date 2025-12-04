---
layout: docs
title: "Eventmodeling: Describing Business Rules with Given/When/Then"
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
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**Still 2 Team-Spots left for the [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"} this month.**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>
