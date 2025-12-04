---
layout: docs
title: 7 Insights I Learned Building Event Models Since 2021
---

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>7 Insights I Learned Building Event Models Since 2021</h1>
    <p class="blog-post-subtitle">Practical "tricks" to help you build better Event Models - from hands-on experience modeling real systems</p>
    <div class="blog-post-meta">
      <span>November 2024</span>
      <span>12 min read</span>
      <span>Event Modeling & Best Practices</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/seven-event-modeling-insights.png' | relative_url }}" alt="Seven Event Modeling Insights">
  </div>

  <div class="blog-post-content" markdown="1">

*( this was Issue #6 of the Eventmodeling & Eventsourcing Weekly Mail )*

Before you dive into this topic - there is a new Online Course "Implementing Eventsourcing", that will guide you step by step through this process. Find more details at the end of this article.

Today, we're not recapping the last podcast episode. You can catch Episode 6 here. In that episode, we covered some fascinating topics from our recent workshop.

(More Workshops planned in January )

Instead, I want to share 7 insights I've learned since I started using Event Modeling back in 2021. These are practical "tricks" to help you build better models. While you can learn Event Modeling in about an hour, true mastery requires hands-on experience—modeling several systems and seeing how it works in practice. You can't just read about it, much like writing good code. Building the "muscle memory" takes time and effort.

## Here are the 7 insights:

### 1. Use words from the business

If your Event Model doesn't reflect terms used by business experts—especially in the recorded Events—that's a red flag. It might mean you're missing key concepts or obscuring them behind Read Models.

Be cautious about relying on Read Models to "handle things." That's risky. Rule of thumb: Keep Read Models "dumb" if possible. They should rely only on data from previous Events and avoid API calls or external data lookups.

To check if you're missing important information, focus exclusively on the Events. Ask someone to tell the story using just the Events. If the narrative breaks, you're likely hiding too much logic in the Read Models.

### 2. Don't hide processes behind commands

Teams often bury too much logic in Commands and Command Handlers, especially early on.

How to spot this: If a Command triggers multiple Events (e.g., three or more), it might indicate a hidden process in the Command Handler. While not definitive, it's a clear warning sign.

### 3. Intentionally create "bad" screens

Don't waste time designing polished UI mockups during Event Modeling sessions, even if UX experts are involved. Remember: good UX isn't about beautiful UI ( at least not only )

Focus on capturing the information flow—what data gets captured and how. The specific UI controls (radio buttons vs. dropdowns) don't matter at this stage.

I deliberately design "ugly" screens in every Event Model I work on. It reinforces that appearance isn't the priority.

### 4. Shut down your system

When debating if something is an Event, ask yourself:

**"If we shut down the system now and rebooted it, would this information be necessary or useful to continue?"**

This simple exercise often clarifies whether an action is truly an Event. For example, a "User Logged In" Event might not matter after a reboot, as users will need to log in again anyway.

### 5. Be explicit

Don't rely on assumptions—make everything explicit. A well-crafted Event Model should be clear enough for someone from another team to understand how the system works.

Dig into the details, even when it's uncomfortable. Avoid skipping steps like "Given / When / Then" just because you think you understand how it works. Build every Read Model step-by-step, mechanically.

### 6. Keep the story simple

Every information system follows the same basic "wave structure":
1. An action occurs.
2. It results in an Event.
3. That Event triggers the next action, and so on.

Your system should flow like a continuous wave. Focus on one use case at a time—avoid loops or conditions. The best Event Models are straightforward and can be read left-to-right by both business users and developers.

### 7. Don't split boards too early

It's tempting to optimize your boards by splitting them too soon. Resist this urge. It's okay to have multiple models on a single board—just ensure they're clearly separated.

I use "Model Contexts" to organize multiple models and navigate between them easily. Keep your Event Models accessible, fast, and well-structured so you can quickly move between slices, chapters, and models.

---

That's it—7 practical tips to help you build better Event Models starting today.

Thank you for subscribing to this newsletter. I truly appreciate your support!

Hope you found these tips helpful! Let me know which one resonates most with you.

## What else happened this week?

A new chapter of the Understanding Event Sourcing book was published! It covers "Eventsourcing & User Interfaces".

<div class="info-box" markdown="1">
### Ready to Learn More?

Want to dive deeper into Event Modeling? Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your organization.

**Still 2 Team-Spots left for the [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"} this month.**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
