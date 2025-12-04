---
layout: docs
title: What is an Aggregate - and why I hate this question
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>What is an Aggregate - and why I hate this question</h1>
    <p class="blog-post-subtitle">Understanding Aggregates through the lens of consistency and use cases, not objects</p>
    <div class="blog-post-meta">
      <span>November 29, 2025</span>
      <span>9 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/what-is-aggregate.png' | relative_url }}" alt="What is an Aggregate">
  </div>

  <div class="blog-post-content" markdown="1">

Just yesterday, I had this question again. And I've always hated this question - because I never had a good answer that fit into just a few sentences.

I'd start with something like: "Well… there's this Object, and it contains a cluster of other objects, some of which are Entities…" That's usually when people stop listening and start thinking: "What is this guy even talking about? Just get to the point!"

So why is this so hard to explain?

Because we're using the wrong term. Naming matters.

The term Aggregate comes from Domain-Driven Design, first introduced by Eric Evans in his classic Blue Book. But the definition often confuses people. If you don't read carefully, it leads you in the wrong direction.

The key idea behind Aggregates isn't about objects. It's about consistency. In fact, you don't need any objects at all to apply the concept.

Let me explain.


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## A simple use case

Let´s assume, we have a customer registration, we need to implement. The final missing piece of functionality before the big launch.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/what-is-aggregate-1.png' | relative_url }}" alt="Customer Registration Use Case">
</div>

Now, we see the "Customer" can have a list of addresses. But there are some rules to it - for example a customer must only ever have at most two addresses assigned. How do we enforce this?

First, let´s define the rule using a simple "Given / When / Then" Scenario.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/what-is-aggregate-2.png' | relative_url }}" alt="Given When Then Scenario">
</div>

Let's take a simple scenario: we're trying to register a new customer (me!) - with three addresses. But the system shouldn't allow that. So now comes the tempting step: define a Customer Aggregate.

And that's where things start to get weird.

Is it really the Customer we're talking about here?

Customer is a broad concept - and its meaning shifts depending on the use case. Is it an existing customer or a prospect? Someone registering, or just browsing the catalog? Are they blocked? Have they already ordered and are now complaining?

There are so many possible states and roles a customer can be in.

So does the rule "a customer may only have two addresses" really belong to the Customer - or to the Registration Use Case?

This is exactly where object thinking starts to lead us astray. And yet - that's what most people default to when they hear the word Aggregate.

But what if we defined Aggregates differently?

Personally, I rarely use the term Aggregate anymore. In fact, I once made someone buy me a drink just for saying Aggregate in one of my presentations - despite me warning everyone up front! ( true story! )

One term I do like using is Consistency Boundary. It's a much better label - even if it confuses people at first.

But I have a better one.

## "An Aggregate is just a set of rules for a certain use case"

That's better. And much easier to understand.

Doesn't it immediately feel strange to call this set of rules "Customer"?

We don't even know what use case we're dealing with. Is it Registration? Ordering? Customer Management? What rules are we actually talking about?

It's clearly about Registration - so a better name would be Customer Registration.

Better, right?

And now you can combine that with what I wrote in my book "Understanding Eventsourcing"

It even feels strange to use "a set of rules" as Data Holder, doesn´t it?

## Aggregateless Event-Sourcing

And now that we finally understand what an Aggregate really is - just a set of rules for a specific use case - suddenly everyone starts talking about Aggregateless Event Sourcing.

The good news is - with our new understanding, conceptually nothing changes!

Even with Aggregateless Event Sourcing, we still have tons and tons of rules for specific use cases. We just don't bundle them into one big Customer object anymore.

Cheers,

Martin

## Next steps

If your Team wants to explore, if Event Modeling is the right way - I want to take a look at one of your use-cases in a short 45 Minute Session with your Team - at no cost. I want to learn about your way of working and see, if I could help? ( Just comment SESSION, and I´ll send you some information )

There is a 120min-Recording of my last webinar "From idea, to Model, to Prototype, to Code" if you want to get a clear picture of how that works in practice.

Find it here: https://youtu.be/6DqaNKxjvko

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
