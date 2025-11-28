---
layout: docs
title: The Furniture Store of Anti-Patterns - Spotting Overcomplicated Event Models
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Furniture Store of Anti-Patterns: Spotting Overcomplicated Event Models</h1>
    <p class="blog-post-subtitle">You can spot them from the Shapes alone.</p>
    <div class="blog-post-meta">
      <span>November 28, 2025</span>
      <span>12 min read</span>
      <span>Event Modeling & Patterns</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/event-modeling-anti-patterns.png' | relative_url }}" alt="Event Modeling Anti-Patterns">
  </div>

  <div class="blog-post-content" markdown="1">

I was at the AxonIQ Conference last week when something strange started happening.

People kept pulling me aside. "Martin, can you take a look at our event model?" They'd open their laptops, pull up Miro boards ( and some Figma.. ) between sessions.

I love this part of conferences - the hallway conversations where real work gets reviewed. So I'd lean in, ask a few questions, trace my finger along their event streams.

By the second model, I noticed something familiar. By the third, I stopped mid-sentence.

"Funny," I thought. "They're making the exact same mistakes as the previous ones. Just in a different domain."

## The Pattern Becomes Undeniable

I kept reviewing some more models throughout the day. Different companies, different industries, different team sizes. But the same problems kept appearing.

That evening, I had a decision to make. I had a talk scheduled for the next morning - "Slice by Slice" talking about Slice-based architectures, AI and Code Generation - the usual content I'd been teaching for months.

But this felt too important, to not mention.

I scrapped most of it and rewrote the talk around what I'd discovered. Not because I had to, but because I wanted to share something genuinely useful I'd just uncovered.

## The Furniture Store of Anti-Patterns

Here's what I found: there are four visual patterns that appear in event models when people are overcomplicating things. I gave them names so we could talk about them clearly.

You can spot them from the Shapes alone.

## The Left Chair

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-1.png' | relative_url }}" alt="The Left Chair Pattern">
</div>

Picture this shape: one UI action, one command, but then multiple events cascading out—three, four, sometimes seven events all triggered by that single command.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-2.png' | relative_url }}" alt="Left Chair Example">
</div>

A chair on the left side of a table.

One example I saw: "Register Customer" firing off Customer Created, Customer Activated, Customer Address Created, Customer Email Verified, Customer Welcome Email Sent… all from one action.

What's actually happening? Someone's cramming too much business logic into one command. They're thinking procedurally - "when someone registers, all these things happen" - instead of thinking in terms of separate business decisions and state changes.

It's unfamiliar to work any other way at first, so people default to what feels natural: stuffing everything into one place.

## The Right Chair

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-3.png' | relative_url }}" alt="The Right Chair Pattern">
</div>

The mirror image: many events all feeding into a single read model.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-4.png' | relative_url }}" alt="Right Chair Example">
</div>

Same problem, different direction. Instead of one command doing too much, you have one view trying to consume and make sense of everything.

Not wrong - just a signal.. are you building up too much coupling to maybe have this "Summary View", that knows everything?

Want to learn this in a practical way?
End of October, we have the Event Modeling Mastery Workshop coming up - 2 days, 4 hours each - 12 Spots to learn about Event Modeling and apply it.

https://nebulit.de/en/eventmodeling-workshop

## The Bed

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-5.png' | relative_url }}" alt="The Bed Pattern">
</div>

One UI component firing multiple commands in sequence.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-6.png' | relative_url }}" alt="Bed Example">
</div>

Visually, it stretches out horizontally—flat and wide, like a bed.

This reveals a different kind of overcomplicated thinking: trying to orchestrate too much from the front end instead of letting the system's natural event flow handle the sequence.

## The Book Shelve

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-7.png' | relative_url }}" alt="The Book Shelve Pattern">
</div>

This one's my favorite to spot because it's so obvious once you see it.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/event-modeling-anti-patterns-8.png' | relative_url }}" alt="Book Shelve Example">
</div>

One slice in your event model has dozens of GWTs (Given-When-Thens) - all your business rules, all your logic, everything important. Meanwhile, every other slice in your model is almost anemic.

It's a god-object in visual form. One slice knows and does everything. The rest just shuffle data around, anemic and purposeless.

People create "the shelve" because they retreat to what feels comfortable. Instead of distributing logic the way event modeling asks them to, they dump everything into the one slice they understand best.

## The Response

The next morning, I presented these four patterns in my talk. The audience got it. Afterwards, people starting approaching me and they were using the pattern names already.

I could see people nodding, pulling out phones to photograph slides, leaning over to their colleagues, most probably whispering "we got all four.."

After the session, someone came up to me and said, "Look - here we have a left chair in our model. How do we resolve that?"

They could see it. The name made it visible.

That's when I realized the real power wasn't just in identifying these patterns - it´s the shared vocabulary that helps to discuss. Now when I'm in a workshop and I spot one, I can simply say, "You've got a left chair here. Let's dig into that."

No lengthy explanation needed. Everyone knows what I mean. The Power of Patterns.

## The Real Insight

It's All About Complexity Here's what these four patterns actually reveal: event modeling is simple, but people make it more complex than it needs to be.

The "left chair" isn't really about too much logic in one command. It's about someone trying to do too much at once because they don't trust the process of breaking it down step by step.

"The shelve" isn't just a modeling mistake. It's someone retreating to what feels safe instead of distributing logic the way the methodology asks.

These patterns are symptoms. Symptoms of discomfort with how straightforward event modeling should be.

When people see event modeling for the first time, the simplicity feels wrong. It feels like something's missing. So they add complexity back in - cramming logic into single commands, orchestrating from the UI, building god-slices that hold all the intelligence.

The core principle that resolves all four patterns: go one step at a time.

One decision. One event. One state change.

Trust the simplicity.

Here's what I need to be clear about: sometimes a "left chair" is perfectly fine.

These aren't hard rules. They're diagnostic signals.

When I spot one of these patterns in a workshop now, I don't say, "You're wrong." I say, "I notice this shape here - let's pause and make sure this is intentional."

Sometimes, the group will conclude: "Actually, that's correct for our domain." And that's fine.

The goal isn't to eliminate these patterns. It's to make them conscious decisions instead of accidental complexity.

I will discuss this at the Event Modeling Conference this week. Different audience - these are the core practitioners, the people who live and breathe this methodology.

I honestly don't know how it'll land. Maybe they've all noticed these patterns already. Maybe this will be new even to that crowd.

As always, I'm looking for feedback.

Because I suspect there are more patterns hiding. These four are just what I happened to notice at one conference because they were the most common. But if you look closely, I bet there are others - more subtle, less frequent, but still worth naming.

I'm envisioning a pattern catalog eventually. like a field guide. Something practitioners can reference when they're modeling, a checklist to spot the warning signs.

Next time you're looking at an event model - yours or someone else's - look for the shapes.

Is there a left chair somewhere? A slice that slowly becomes "the shelve"?

Ask yourself: am I making this more complex than it needs to be?

Event modeling works when you trust the simplicity. One step at a time. One decision, one event, one state change.

The patterns reveal where we're fighting that simplicity instead of embracing it.

What patterns have you noticed?

Want to dive into Event Modeling - but not spend weeks figuring it out yourself?

The Event Modeling Mastery Workshop is happening on October 28th / October 29th - Remote via MS Teams.

2 Days - 4 hours each - 12 Spots

https://nebulit.de/en/eventmodeling-workshop

**Martin Dilger** is the founder of Nebulit and a recognized expert in event modeling and event-driven architecture. He helps technical teams adopt event modeling through workshops, consulting, and tools that make collaborative system design faster and more reliable.

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
