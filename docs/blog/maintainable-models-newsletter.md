---
layout: docs
title: How to Keep Your Models Maintainable Over Time
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>How to Keep Your Models Maintainable Over Time</h1>
    <p class="blog-post-subtitle">Practical strategies to keep Event Models stable and manageable as they grow and evolve</p>
    <div class="blog-post-meta">
      <span>November 30, 2025</span>
      <span>12 min read</span>
      <span>Event Modeling & Maintenance</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/maintainable-models-newsletter.png' | relative_url }}" alt="Maintaining Event Models">
  </div>

  <div class="blog-post-content" markdown="1">

Before you dive into this topic - there is a new Online Course "Implementing Eventsourcing", that will guide you step by step through this process. Find more details at the end of this article.

I'm sitting at the airport, waiting to board my flight to Amsterdam. The buzz of people rushing around always makes me reflect on movement and flow—how everything is interconnected, much like our models in Event Modeling.

Each week, I aim to dive deeper into a topic inspired by the podcast or the Event Modeling community. Today's focus? Keeping models maintainable.

We just wrapped up recording Episode #9 of the podcast, and once again, the discussion was lively and full of insights. If you haven't listened yet, I highly recommend it. We're working on keeping episodes shorter—around 25-30 minutes—so they're perfect for your commute or any time you want to dive into Event Modeling and Event Sourcing.

This week, we tackled a critical question: How do you keep models maintainable over time? If your team has started using Event Modeling, you've likely wrestled with this question too.

Here's the truth: I've been in countless rooms with teams starting their Event Modeling journey, and the process always follows a familiar pattern.

**1️⃣ The First Session: Enthusiasm Everywhere.** The team dives into the basics, and it all makes so much sense. You can see the lightbulbs going off. Everyone is eager to get their hands on the model.

**2️⃣ The Second Session: Questions and Doubts.** Then the reality of modeling hits. "How do we handle this scenario?" "Is there a better way to represent that?" Suddenly, what felt simple starts to feel overwhelming. Some team members may even start doubting the approach. "In code, this would just be a few save calls to a repository—why are we making it so complex?"

**3️⃣ The Third Session and Beyond: Clarity Emerges.** With persistence, things start clicking into place. The connections make sense. The power of modeling becomes apparent. And the team begins to embrace this new way of thinking.

It's a paradigm shift. The same thing happened when agile and Scrum emerged over a decade ago. At first, it feels like an uphill climb. If you're not used to event-driven thinking, it can be confusing.

But then there's a turning point—a moment of clarity where you see the possibilities.

Still, one of the biggest fears teams face early on is this: "What if we break something in the model?"

If that resonates with you, you're not alone. And I've got some tips to help you navigate this challenge and keep your models maintainable over time.

Let's dive in.

## Miro History View

Especially when you Model in Miro (but also other tools), you need some kind of history to track changes over time. If you were on vacation for two weeks, you want to be able to quickly tell, what areas have changed in the meantime.

In Miro you can use the "History" View for this.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/maintainable-models-newsletter-1.png' | relative_url }}" alt="Miro History View">
</div>

There you will find a checkbox "highlight changes", which will highlight the changes since your last visit (pink background)

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/maintainable-models-newsletter-2.png' | relative_url }}" alt="Highlight Changes">
</div>

And of course Miro has a full history and allows you to restore the board at any point in time.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/maintainable-models-newsletter-3.png' | relative_url }}" alt="Full History">
</div>

## Change is the exception

If you're just starting with a new model, you might feel like you're drowning in constant motion. Everything is in flux, and the idea of keeping up feels impossible.

Imagine saying, "Highlight changes," and seeing the entire model light up like a Christmas tree. Overwhelming, right? How can anyone work like that?

Here's the good news: you're not supposed to.

This kind of chaos is typical at the start of modeling. When you're first building slices in your model, there's naturally a lot of movement. But here's the secret: once a slice is fully modeled, it becomes surprisingly stable. I even consider them immutable.

In fact, most slices don't change much—some might never change at all. The only reason a slice should change is when requirements change.

That's where intentionality becomes your superpower.

In my experience, treating slices as immutable has been a game-changer. When a new requirement comes in, I don't just dive into the model and start editing recklessly. Instead, I follow a deliberate process that keeps things clear and manageable. Here's what I do:

**1️⃣ Capture the Existing State.** Take a screenshot or copy the current slice(s), including their "Given / When / Then" scenarios. This snapshot becomes your reference point.

**2️⃣ Reset to the "Created" State.** For each affected slice, reset it back to the initial "created" state. This helps you identify exactly how many slices will be impacted by the new requirement.

**3️⃣ Adjust the Model Intentionally.** Carefully make the necessary adjustments to the model, ensuring every change aligns with the updated requirement.

**4️⃣ Update the Code.** Once the model is updated, reflect those changes in the code, ensuring everything stays in sync.

Here's the mindset shift that made this process so effective for me: Treat changes in slices as entirely new slices. Instead of trying to patch up the old, I often regenerate the slice from scratch—including tests. This not only simplifies the process but ensures that every change is clean and intentional.

By treating slices as immutable, you reduce the chaos and keep your model maintainable, no matter how complex it becomes.

So the next time you feel overwhelmed by change, remember: it's not about keeping up with the chaos. It's about stepping back, being intentional, and finding stability in the process.

Does that make sense to you?

## Last but not least..

This is another small success story from the Eventmodeling Community last week..

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/maintainable-models-newsletter-4.png' | relative_url }}" alt="Success Story">
</div>

## Want to work with me?

I'm constantly looking for teams that want to upskill their productivity using Event Modeling & Event Sourcing.

Want to see it in action? There is a webinar recording showcasing how this typically works.

Just contact me if you are interested in that!

Have a nice rest of your week!

## Want to learn it faster in a practical way?

The Online Course "Implementing Eventsourcing" gives you exactly that. It's a perfect companion to the Book "Understanding Eventsourcing"!

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
