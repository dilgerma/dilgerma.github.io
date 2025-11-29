---
layout: docs
title: The Perfect Software Model for Startups
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Perfect Software Model for Startups</h1>
    <p class="blog-post-subtitle">Developing software systems is expensive and requires time and budget. That's okay, as long as the return on investment is right. But what about dynamic business models and constant change? Here's the perfect approach for startups.</p>
    <div class="blog-post-meta">
      <span>October 2023</span>
      <span>10 min read</span>
      <span>Software Architecture & Startups</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/startups-banner.png' | relative_url }}" alt="The Perfect Software Model for Startups">
  </div>

  <div class="blog-post-content" markdown="1">

Developing software systems is expensive and requires time and budget.
And that's okay, as long as the return on investment is right.

The software must bring in more than it costs, and then it doesn't matter whether it's developed internally or externally.

Where's the problem?

Business requirements change and especially in the startup environment with dynamic business models, dynamic customers and everything in flux, this is one of the great challenges for software projects.

> Software is a snapshot of your business model captured in code.

When the requirements for the software change because the market or your business model changes, the software's model no longer fits the business.

The result is change requests, workarounds and thus technical debt. In the worst case, a complete rewrite of the software with massive costs.

## The Problem

The software doesn't adapt dynamically to the business model.

A new feature that doesn't fit the original model causes changes in many existing features.

_Rework_ of the software, i.e., adjustments to already existing features, causes a large part of the costs (not the initial development).

This becomes immediately clear with a simple example.

Our software knows _Users_. _Users_ have **one** address.
That was our assumption when this feature was implemented.
We store users and addresses in two tables that are linked via a foreign key.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/startups-user.png' | relative_url }}" alt="User Modeling">
  <p class="image-caption">User modeling</p>
</div>

Most developers would model it this way, that's how software usually works.
This implicitly captures our assumption "a user has **one** address" (our model) in the software.

Every additional feature builds on this assumption, for example the UI in checkout (and many more).

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/startups-user2.png' | relative_url }}" alt="Checkout">
  <p class="image-caption">Checkout</p>
</div>

One day this "small" user story comes, estimated with _one_ story point.

"As a user, I want to be able to select which is my delivery address via a dropdown."

This changes our assumption that users only have one address. Our model is no longer correct and this change must be propagated through all layers of our software. In some places, this might not be easily possible, and we'll _temporarily_ always select the first address, for example. (**Technical Debt**)

- The table design changes and at least a mapping table must be added.
- The "Address" attribute on the User class changes, and it must become a list.
- All UI elements change, as the user suddenly has multiple addresses.

This "small" feature causes massive costs. And someone who doesn't know how software works will hardly understand this.

_I just want a dropdown?_

## Fact-Based Software

Fact-based software (or event-based software) forgoes the explicit mapping of **one** model in code.
Instead, the implementation is designed to model the things that happened (as "Event" or "Fact")

Instead of modeling the relationship between User and Address as tables, we would have the following facts in the system:

- User created
- Address Added

_At some point_ a user was created, and _at some point_ an address was assigned to the user.

From these facts, use case specific models (_Read Model_) can now be generated.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/startups-eventmodell.png' | relative_url }}" alt="Event Model">
  <p class="image-caption">Event Model</p>
</div>

So instead of now making changes throughout the entire stack for the new requirement, we only change _specifically_ the
_Read Models_ that are interested in this information.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/startups-eventmodell2.png' | relative_url }}" alt="Specific Rework">
  <p class="image-caption">Specific Rework</p>
</div>

The _Read Models_ are _by design_ lightweight and instead of refactoring them, it often makes sense to simply rewrite them.

From the **facts** in the system, any _Read Models_ can be generated. So instead of just displaying the UI for checkout, the same facts could be used to populate a reporting database or display the user's history in SAP.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/startups-readmodels.png' | relative_url }}" alt="Read Models">
  <p class="image-caption">Read Models</p>
</div>

None of these use cases will ever be affected by _rework_ through another feature. The _Read Models_ are based solely on the facts in the system which don't change.

## Why Is This So Interesting for Startups and Small Companies?

Especially in startups, things need to be tried out. We need _experiments_ to find the best product. The business model is in motion and for that we need flexible software.

**Fact-** or event-based software is ideally suited for this, because most of the time the facts don't change, only their representation or how they are used.

> A/B tests are also just two _Read Models_ for the same feature

Developing software this way is natural.

We're currently looking for small companies for three case studies who want to take the first step toward this architecture with us and create an [**Event Model**](/docs/blog/documenting-software-event-modeling) together with us **for free**.
If this interests you, [let's talk about it.](https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2)

---

This is how you create IT documentation that everyone wants to read. Usable results after just one day.
One thing I've learned in 15 years in the IT industry.
Documentation of IT systems has always been difficult and that hasn't changed in the last 15 years.

I can help document your IT system in a modern way.

- We use one document, not hundreds of pages in Confluence.
- The documentation accelerates every onboarding
- We document BEFORE development, not after.

Want to know how this works? Book a [free call](https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2).

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

  </div>
</div>
