---
layout: docs
title: How to Model UI-Only Interactions in Event Modeling - A Filtering Example
description: Not every screen interaction needs a Command and an Event. Here's how to model filtering as a UI-only interaction using Multi-Screen Views, HTML mockups, and Given/When/Then.
author: Martin Dilger
date: 2026-07-31
category: Event Modeling & Process
keywords: event modeling, ui-only interactions, filtering, multi-screen views, html view, given when then, eventmodelers
featured_image: /assets/images/blog/event-modeling-ui-only-interactions-filtering.png
tags: [event-modeling, ui, filtering, given-when-then]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>How to Model UI-Only Interactions - A Filtering Example</h1>
    <p class="blog-post-subtitle">Not every screen interaction needs a Command and an Event. Here's how to model filtering as a pure UI-only interaction using Multi-Screen Views.</p>
    <div class="blog-post-meta">
      <span>July 31, 2026</span>
      <span>6 min read</span>
      <span>Event Modeling &amp; Process</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/event-modeling-ui-only-interactions-filtering.png' | relative_url }}" alt="Event Modeling UI Only Interactions Example: Filtering">
  </div>

  <div class="blog-post-content" markdown="1">

This question came up today, and of course I've answered it dozens of times already. But I realized I never really wrote it down formally. Let's fix that.
{: .lead}

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-ui-only-interactions-filtering-1.png' | relative_url }}" alt="Slack question: How would you model filtering? As in, you have a table of data of books and you want to filter it by genre.">
</div>

"How would you model filtering? As in, you have a table of data of books and you want to filter it by genre. From a technical point of view, this could be just on the client side, but it could also be an API call to refetch the data."

That's the question. And it's a good one, because the honest answer is: it depends - and most of the time, filtering doesn't need a Command or an Event at all.

## Start With a Chapter

You find all my articles and videos on [eventmodelers.ai](https://www.eventmodelers.ai). If you want to follow along, go to [app.eventmodelers.ai](https://app.eventmodelers.ai) - that's the easiest way to start modeling.

You can also do this all using AI by connecting your agent with the new CLI to the platform. It takes only 15 seconds:

```
npx @eventmodelers/cli init-modeling
```

Everything starts with a Chapter. Think of a Chapter as a timeline of things that happen - a small, self-contained slice of the world you're modeling.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-ui-only-interactions-filtering-2.png' | relative_url }}" alt="Book Filtering chapter with three columns across Actor, Interaction, Swimlane and Spec Lane rows">
</div>

The next thing you'd typically want to do is create the relevant Event(s), Command(s), and Read Model(s). For our books example, that's exactly what happens on the left: a user submits a Command, and a `Book registered` Event lands on the swimlane.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-ui-only-interactions-filtering-3.png' | relative_url }}" alt="A Command flowing into a Book registered event on the swimlane">
</div>

## Now Define the View for Filtering

Now define the View for filtering. Give the new HTML View a try - you can write your Views with plain HTML, or even better, just generate them very cheaply with your connected agent.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-ui-only-interactions-filtering-4.png' | relative_url }}" alt="Edit HTML dialog showing Page 1 with a plain book list and Page 2 with a filter input field">
</div>

This is where the actual answer to "how do you model filtering" lives. Page 1 shows the unfiltered list of books. Page 2 shows the same Read Model, but with a filter field on top of it - typed in, applied, done. No round trip to a Command, no new Event.

The Multi-Screen support is what makes this possible: it lets you easily navigate between the unfiltered- and the filtered View, both backed by the exact same `Books[]` Read Model.

Now we already know how it should look. But we still want to describe how it behaves, using Scenarios and Given/When/Then syntax. Here the built-in Query-Support comes in very handy.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-ui-only-interactions-filtering-5.png' | relative_url }}" alt="Scenario 1: Given two Book registered events, When Query by title, Then Books read model returns the matching title">
</div>

Given two `Book registered` events - one for Harry Potter, one for Lord of the Rings - When you query by title with the key "Harry Potter", Then the `Books` Read Model returns just that one match. Nothing about this Scenario depends on the UI plumbing. It's stated purely in terms of the data.

## Enough to Implement It

This is enough to implement it. Using the UI mockup - which is also accessible for a connected agent building from the model - it's quite clear what needs to be done.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-ui-only-interactions-filtering-6.png' | relative_url }}" alt="Full slice showing the Actor, Command, Book registered event, and the Books read model rendered as an HTML mockup on the right"></div>

## Conclusion

What is important to understand: UI-only interaction typically does not involve Commands or Events. Using the Multi-View support, you can show in one slice how the system should behave without inventing state changes that don't exist in the domain.

Filtering, sorting, expanding a row, switching a tab - these are all views on data you already have. Model them as Views, not as Commands looking for an Event to justify them.

My new program "Agentic Engineer" starts on Sep. 7 - teaching you in 3 weeks how to become the Agentic Engineer, working with the Triplet Architecture of Event Modeling, Event Sourcing, and Vertical Slices. There are only 7 seats left.

<div class="course-cta" markdown="1">
### Join the Agentic Engineer Program

Apply Spec-Driven Development Hands-On - Event Modeling, Event Sourcing, and AI Engineering with autonomous agents.

[Learn More →]({{ '/agentic-engineer-course' | relative_url }}){:.cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/triplet-architecture' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Triplet Architecture</h3>
        <p>Event Modeling, Vertical Slices, and Event Sourcing only pay off when you use all three together.</p>
        <span class="related-post-meta">Event Modeling &amp; Architecture • July 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/modeling-branches' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How to model branches in Event Modeling</h3>
        <p>Linearize your conditional flows using Given/When/Then and maintain clear, readable models.</p>
        <span class="related-post-meta">Event Modeling &amp; Patterns • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/seven-event-modeling-insights' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>7 Insights I Learned Building Event Models Since 2021</h3>
        <p>Practical tricks to help you build better Event Models - from hands-on experience modeling real systems.</p>
        <span class="related-post-meta">Event Modeling &amp; Best Practices • November 2024</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>