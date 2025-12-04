---
layout: docs
title: How Simple Should a Command Handler Be?
---

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>How Simple Should a Command Handler Be?</h1>
    <p class="blog-post-subtitle">Understanding Command Handler simplicity, purity, and practical rules for structuring your Event Sourcing code</p>
    <div class="blog-post-meta">
      <span>November 2024</span>
      <span>10 min read</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/command-handler-simplicity.png' | relative_url }}" alt="Command Handler Simplicity">
  </div>

  <div class="blog-post-content" markdown="1">

Before you dive into this topic - there is a new Online Course "Implementing Eventsourcing", that will guide you step by step through this process. Find more details at the end of this article.

One topic we discussed in Episode 6 of our Podcast is the simplicity of Command Handlers. This was also subject to discussion in the Workshop Adam Dymitruk and me did end of november. Let´s dive a little deeper into this topic in this newsletter.

But before that...

## Here is some of the feedback we received for the workshop:

> Thanks for the great workshop, it is really great to talk to people with such deep interest and expertise in Event Sourcing/Modeling.

> Thank you for the workshop. It was informative and well organized. Even though we went down rabbit holes that are beyond my current level of understanding, I still am glad to have been part of the discussions. Just hearing the ideas can help me get further along in my journey.

> A bit more than a week ago, I attended a webinar on event sourcing and event modeling by Adam Dymitruk and Martin Dilger. Although the webinar was intended for beginners, most of us had some prior experience and were eager to dive deep. I left the webinar with 53 individual notes.

We are already planning the next workshops ( beginner / advanced ) in january. Are you interested to attend?

## Command Handler Simplicity

What does it even mean that a Command Handler should be simple?

For me a Command Handler should be pure - given the same information passed in - you get the same result every time. In other words - no side effects.

This is not an iron rule as the discussions in the community discord show.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/command-handler-simplicity-1.png' | relative_url }}" alt="Statement from the community">
</div>

So here are some simple rules I follow. Read them, think about them and maybe you find one or two inspirations to structure your code.

### Command Handlers don´t make external calls

This also means, Command Handlers typically do not have external dependencies. This also means, to test them you don´t need Mocks. Simple Unit Tests should be enough.

### Command Handlers don´t have "much" logic

If you have complex Logic in your Command Handlers ( and for example nested if-statements), it might be an indication the Command Handlers does too much.

### Command Handlers don´t access the Event Store directly

Accessing the Eventstore directly is nothing but an External Dependency, so I also prevent this if possible.

### Command Handlers result in one Event 90% of the time

We also discussed this in the podcast. Most of the time, the result of a Command Handler is exactly one Event. One exception to this rule for me is if a Command can result in either / or Events - for example a "PaymentIssued" or a "PaymentFailed" Event.

A Command Handler example I use in my trainings.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/command-handler-simplicity-2.png' | relative_url }}" alt="Simple Command Handler">
</div>

This Command Handler is extremely simple, receives a list of Events ( the state ) and the command to execute. In this case there is no validation and the result event is directly applied.

Adam has a similar example in his github repo.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/command-handler-simplicity-3.png' | relative_url }}" alt="Command Handler Example">
</div>

And if you look close enough, you´ll see that I sometimes break my own rules for better or worse ( for example in one of the book examples). Here I pass in the DeviceFingerPrintCalculator. That was a bad decision and I might change it at some point.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/command-handler-simplicity-4.png' | relative_url }}" alt="Breaking the rules example">
</div>

So, what should you take away from this newsletter? There is no one rule and sometimes it´s ok to break your own rules. But overall Command Handlers should be simple and easy to test and understand. It´s easy to put too much into one command handler where it would be way simpler to extract some of the logic some subsequent automations.

## What else happened this week?

I had a very interesting talk with Bastian Waidelich about the Dynamic Consistency Boundary. We plan to write a special chapter for my Book "Understanding Eventsourcing" as one of the "Missing Chapters"

I contacted a few user groups ( for example the Java Usergroup Munich) and offered talks. Many were already accepted. If you host a user group in germany and want me to give a talk ( remote or on-site), let´s chat. I´m planning some road trips in 2025.

There will be a course as a companion to the book. The work already started. It will be open for purchase very soon for a "blind bird" price - a very small price until it is finished.

One thing I´m particularly excited about is that the Eventmodeling-Community supports me and because of that we´ll offer the exercises in many different stacks ( starting with Typescript and Axon), but also Ruby, .NET will be provided. As a "blind bird" you´ll be able to shape the course as it gets created. I´m really hoping to build something valuable with it.

If you want to "own" a technical stack for the exercises, let´s have a chat. Every contribution is welcome!

<div class="info-box" markdown="1">
### Ready to Learn More?

Want to dive deeper into Event Sourcing and Command Handler design? Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your organization.

**Still 2 Team-Spots left for the [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"} this month.**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
