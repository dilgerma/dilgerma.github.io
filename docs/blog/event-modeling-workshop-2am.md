---
layout: docs
title: Why People Get Up at 2 AM to Learn Event Modeling (And What Happened When They Did)
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Why People Get Up at 2 AM to Learn Event Modeling (And What Happened When They Did)</h1>
    <p class="blog-post-subtitle">Inside an Event Modeling workshop that changed how teams think about software</p>
    <div class="blog-post-meta">
      <span>November 27, 2025</span>
      <span>12 min read</span>
      <span>Event Modeling & Workshops</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/workshop-2am-1.png' | relative_url }}" alt="Event Modeling Workshop">
  </div>

  <div class="blog-post-content" markdown="1">

Some from Italy, Spain, Germany, Belgium, Argentina and also some from the US, who got up at 2 AM - even though there's a North American timezone session scheduled in a few weeks. They couldn't wait.
{: .lead}

One was a truck driver who's been following Adam Dymitruk since 2017, trying to understand Event Modeling for seven years. He read my book and finally decided: "I need to learn this NOW." This really impressed me.

## The Real Problem

Most people fight with the same frustrations in software projects:

- Vague requirements that seem clear until you start building
- Projects that go off the rails because nobody thought about the edge cases
- The moment when you realize the "simple" feature has 47 rabbit holes you never mapped out
- Teams that can't agree on what they're actually building

Event Modeling offers a way out. That's why people get so excited - finally, some light at the end of the tunnel.

## Day 1: The Library System That Wasn't so Simple

We started with what looks simple: modeling a library system. But not the textbook version - the real one with email notifications, payments, inventory across multiple locations.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/workshop-2am-2.png' | relative_url }}" alt="Library System Model">
</div>

That's when the rabbit holes appeared.

"What if the reservation succeeds but the email fails?" "What if we need to cancel - what does that entail?" "How do we handle the rollback?"

**This is where projects go off the rails in the real world - because nobody thought about these details upfront.**

The key learning: You only model one timeline, one use case at a time. If there's an error path, that gets its own dedicated timeline. Don't try to branch within a single flow.

This took me months to figure out on my own. Small twists and twinkles - tiny decisions that seem insignificant but compound. One wrong turn leads to another.

## What Changed for Me

I used to be guilty of always trying to figure it out myself. It's nonsense, but it needs some learning, especially if your personality is wired that way. Someone had to tell me: "the opportunity cost is too high, Martin.. you are burning time and money". Most people CAN figure stuff out by themselves given enough time - but there's never enough time.

Nowadays, I reach out for help very early. I seek advice from people who've done what I want to do. It speeds up everything so much.

**That's what I'm trying to give people in these workshops - the shortcuts I wish I'd had.**

## Between Day 1 and Day 2, usually something really nice happens

Also this time. When I prepared for Day 2, I saw something that always makes me smile: participants had copied the workshop board and kept working on their own in a small group, without telling me. They were collaborating with each other, modeling scenarios without me.

They could have just sat in the workshop and listened. But they started early, doing the work, collaborating with others without me being involved - that tells me they truly care.

## Day 2: The Hard Parts

**Modeling Automations** - this is what people struggle with most. It's technical. Where's the logic? Where are API calls happening? How does information flow - is everything just hidden behind a gear symbol?

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/workshop-2am-3.png' | relative_url }}" alt="Modeling Automations">
</div>

**The key insight:** Think of the automation as a human operator. What would happen if a human were doing it? The automation is like an automated human being. Looking at it that way, it's easier to grasp.

But you can't just hear the principle - you need to apply it. Model a handful of automations to really understand what it means.

We worked through three examples:

1. Notifications after a book was rented
2. Updating inventories
3. Rolling back a rental in case of failure

**Anti-Patterns** - I showed them four common mistakes: the left chair, the right chair, the bed, and the shelf. These are patterns you see in most event models that signal potential problems.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/workshop-2am-4.png' | relative_url }}" alt="Anti-Patterns">
</div>

Someone immediately said: "I think we are having many left chairs."

These aren't patterns you have to fix immediately (except the bed). They're hints that you might want to pay attention to this area.

**Legacy Systems** - We talked about how to approach them, including with AI.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/workshop-2am-5.png' | relative_url }}" alt="Legacy System Analysis">
</div>

The high level system analysis of a 2 Million Line Code-Base.

How can you map Legacy Systems with Event Modeling - where do you even start?

I showed the participants my way of doing it - step by step mapping out the hidden flows in Legacy Systems, and also how to map them to an existing database schema.

**This is a really powerful way to uncover dependencies and coupling in the system during Event Modeling.**

## The Core Insight

It looks so simple on first sight. But when you really get into the trenches, there are so many rabbit holes. These are the ones where projects go off the rails in the real world - because nobody thought about them in detail.

Event Modeling forces you to think about them upfront. Before you write a single line of code. Before you commit to an architecture. Before the project goes over budget.

## The Meta-Learning

Doing things on your own simply takes ages. You do the wrong thing without knowing it. One wrong decision implies the next one, and you can't figure out why it's not working for you. Most of the time, it's just some small twists and twinkles.

Some people spend seven years circling around Event Modeling, trying to understand it, without ever applying it. The Workshop is a good way to break that ceiling.

Not because they aren't smart enough. But because learning alone, you don't know what you don't know.

## Closing Thought

When people see how Event Modeling handles all those rabbit holes they've been ignoring - the edge cases, the failures, the complexity they usually discover six months into development - something shifts.

They stop seeing it as just another methodology. They see it as the way out of the chaos they've been living in.

That's why someone wakes up at 2 AM. That's why they copy the board and keep working between sessions. That's why a truck driver follows something for seven years until he finally cracks it.

**Because finally, there's some light at the end of the tunnel.**

And of course, we'll address some of the questions in the QA scheduled 14 days after the workshop (with no additional cost).

Want to be part of the next Workshop? Just comment "Me" and I'll put you on the Wait List, so you'll be notified. The next Workshop is scheduled for North American Timezone, so your chance to get up at 2 a.m. if you are in Europe.

  </div>

</div>
