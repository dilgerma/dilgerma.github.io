---
layout: docs
title: How to Model Branches in Event Modeling - Linearize Your Conditional Flows
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>How to Model Branches in Event Modeling - Linearize Your Conditional Flows</h1>
    <p class="blog-post-subtitle">Information doesn't just flow from left to right—it follows business rules. Here's how to model branches while maintaining one linear flow.</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>8 min read</span>
      <span>Event Modeling & Business Rules</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/modeling-branches.png' | relative_url }}" alt="Modeling Branches in Event Modeling">
  </div>

  <div class="blog-post-content" markdown="1">

Before you dive into this topic - there is a new Online Course "Implementing Eventsourcing", that will guide you step by step through this process. Find more details at the end of this article.

Important topic today - how do you model Branches in Event Modeling?

First of all, what we do with Event Modeling is simple - we visualize information flow.

Most of the time, information doesn't just flow from left to right, but follows some Business Rules.

This is where most people start to think about loops, conditions and branches in the flow.

If this rule applies, then this flow should happen, in all other cases this other flow should happen.

"How do I model this?"

In general, this isn't wrong but stands in contrast to one of the most important rules in Event Modeling:

**have one linear flow from left to right. No exceptions.**

How do we overcome this problem?

## Describe business rules using Given / When / Then

This is where "Given / When / Thens" start to play a crucial role. The "Given / When / Thens" describe all the different possible outcomes of a process step.

In Event Modeling we simply agree to follow one path at a time.

Let's have a quick look at a simple rule. You should be able to immediately tell the underlying business rule from just looking at the "Given / When / Then" presented here:

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/modeling-branches-1.png' | relative_url }}" alt="Given When Then Business Rule">
</div>

In this case, we model the rule as an error flow.

"GIVEN we already have a timesheet for an email-address and a period, WHEN someone tries to generate another timesheet for the same E-Mail and the same period, THEN the system should transition to an error state"

Quite readable and easily translated to a running specification.

At the same time, we could also model it differently.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/modeling-branches-2.png' | relative_url }}" alt="Alternative Modeling Approach">
</div>

When do we model it as an error and when do we store an Event? This depends on the use case - do we have a follow up process that needs the information that the timesheet creation failed at some point in time? Do we need this information for reporting or auditing purposes? That might be a good reason to store an Event. If it's just a validation error and the user simply retries as many times as necessary, it might be fine to go with a simple Exception.

We have one business action "Create Timesheet", but two different possible outcomes. For this flow we "choose" to follow the good case of "Timesheet Created". But how do we model the "bad case" of failure. Is it another model? Is it another flow?

Typically it's just another part of the flow that comes later. We call this a chapter (indicated by the blue arrow). For me, the starting point is crucial. The "Timesheet creation failure" chapter starts with a linked Event - the "Timesheet creation failed" Event. The arrow in the corner of the Event indicates that the Event is not created here, but somewhere else and we just start the flow here.

Clicking on the arrow brings you back to the original Event (in the last picture)

Basically that is the conditional flow - just modelled in a linear way so it's easily readable.

This is how you overcome the "conditional branching problem" in Event Modeling. Linearize it!

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/modeling-branches-3.png' | relative_url }}" alt="Linearized Conditional Flow">
</div>

Hope that helped!

Do you want to evaluate Event Modeling for your Team? Get an expert and save time.

I offer a Event Modeling Trainings for Teams - and we'll work on one of your business problems for one full day.

Want to practice your skills in a safe environment?

The Online Course "Implementing Eventsourcing" gives you exactly that. It's a perfect companion to the Book "Understanding Eventsourcing"!

Everything I know about Evenet Modeling & Event Sourcing in one pracital course course.

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
