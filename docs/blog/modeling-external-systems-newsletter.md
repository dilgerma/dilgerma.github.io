---
layout: docs
title: How to Model External Systems - Information Flow vs Implementation
---

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>How to Model External Systems - Information Flow vs Implementation</h1>
    <p class="blog-post-subtitle">Understanding information flow vs implementation when modeling external APIs and services in Event Modeling</p>
    <div class="blog-post-meta">
      <span>November 30, 2025</span>
      <span>8 min read</span>
      <span>Event Modeling & Integration</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/external-systems-newsletter.png' | relative_url }}" alt="Modeling External Systems">
  </div>

  <div class="blog-post-content" markdown="1">

I consider Learning Event Sourcing and Event Modeling some of the most crucial skills you can aquire as a Software Developer in 2025.

It's no longer about Frameworks and Technology. AI will take over more and more of that. The crucial skill will be to be able to discuss and analyze Systems in a way both Business Experts and AI can understand.

I write weekly about exactly that in my Newsletter.

(This was Issue #13 of the weekly "Event Modeling & Event Sourcing" Newsletter)

## Should you model external Systems?

The topic came up recently in the community discord.

The answer to this question depends on the context. Typically, when dealing with external systems, the Dev Team treats them as black boxes. You make an API call, and you expect a response. The implementation details of the external system don't matter.

So should we model them at all?

Consider a system that translates book titles via an API call to an AI service like DeepLink. Here's how this is typically modeled. (Hint: people are confused by this)

You have a list of titles to translate (indicated by the green sticky) and an automation that takes care of it. In the end the title is saved in the system, indicated by the "Title saved" Event.

Before moving on - look at the picture. Are you confused by anything?

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/external-systems-newsletter-1.png' | relative_url }}" alt="Initial External System Model">
</div>

Why is the command called "Save Title" and not "Request Title"? Isn't the command the API call?

If you paid close attention, that's what you've most probably been asking yourself a few seconds ago.

No, the command is not the API call. The API call is handled by the processor, and the command in our system simply stores the result of that call.

The confusion arises because we left out a part of the process.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/external-systems-newsletter-2.png' | relative_url }}" alt="Adding Missing Parts">
</div>

## Where does the API call happen?

We're not concerned with the specific implementation details. What matters is that we know we'll request the translation, and the DeepLink will return the result.

It's about the information flow, not the implementation.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/external-systems-newsletter-3.png' | relative_url }}" alt="Complete Information Flow">
</div>

But then this is the question that comes up in your mind.

"I'm trying to map this to the implementation, and I'm confused"

What's the distinction here?

From the perspective of our system, there is no "Translate Title", "Title Translated", or even a "Translated Titles" read model. The goal is simply to visualize the flow of information. Avoid the temptation to directly map this to the code that needs to be written.

## Make it visible

But at some point you need to make the mapping to the implementation, don't you?

How do you know which slices belong to our system and need to be implemented and which slices are just showcasing information flow?

Make it visible.

In my models Slices are typically surrounded by a black border. Slices that just mimic information flow aren't. Very easy to see.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/external-systems-newsletter-4.png' | relative_url }}" alt="Visual Distinction Between System Slices">
</div>

Hope that made sense. This chapter was also added to the "Little" Event Modeling book.

By the way, on Wednesday this week we had a pretty good Webinar showcasing the whole process from requirements to generated production code in about 120 minutes.

There is a recording available soon. If you want to get early access to it, just answer "Recording" to this E-Mail. I might publish it for newsletter subscribers later today.

## Want to work with me?

I'm looking for Teams that want to try Event Modeling in a safe environment. I want to work with them for one day on a concrete domain problem in a workshop.

The goal is to find out, how your Team will benefit from the structured communication Event Modeling provides.

If you are a developer and you want to improve your skills in Event Modeling & Event Sourcing - start with my Book "Understanding Event Sourcing"

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/external-systems-newsletter-5.png' | relative_url }}" alt="Understanding Eventsourcing Book">
</div>

Want to practice your skills in a safe environment?

The Online Course "Implementing Eventsourcing" gives you exactly that. It's a perfect companion to the Book!

Everything I know about Evenet Modeling & Event Sourcing in one course.

**Martin Dilger**

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
