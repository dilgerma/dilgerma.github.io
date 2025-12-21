---
layout: docs
title: Episode 30 - Workshop Insights, Fixed Pricing, and the Event Modeling Book
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 30 - Workshop Insights, Fixed Pricing, and the Event Modeling Book</h1>
    <p class="blog-post-subtitle">Martin and Adam discuss recent workshop learnings, vibe coding experiments with AI, why your rates shouldn't increase with inflation, and Adam's progress on the official Event Modeling book</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 30</span>
      <span>Workshops, Pricing & Book Progress</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/tjEQ9tCVb6s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

In this episode, Martin and Adam dive into several fascinating topics ranging from workshop insights to the economics of fixed-cost pricing. They discuss Martin's recent workshop with scientists in Hanover, Adam's vibe coding experiments building a Yatsi game, why technology companies shouldn't raise rates with inflation, and exciting progress on the official Event Modeling book. The conversation reveals practical insights about processor positioning, lookup model naming, and the pattern recognition that comes with event modeling fluency.

## Main Discussion Points

- **Workshop Learnings** - New insights about processor positioning, lookup model naming, and visual patterns
- **Vibe Coding Limits** - Adam's experiment building a Yatsi game reveals fundamental scope limitations
- **Fixed Pricing Economics** - Why your rates shouldn't increase with inflation when doing slice-based work
- **Event Modeling Book** - Progress on the official book with a ghost writer, targeting quick reference guide first
- **Pattern Recognition** - How event models work like musical notation for experienced practitioners
- **Scientist Reactions** - How scientists immediately understand and analyze event modeling principles

## Workshop Insights: What's New

Martin and Adam held their latest workshop in December with a small, focused group combining complete beginners with experienced practitioners.

### Processor Positioning: A New Visual Pattern

Adam demonstrated a technique Martin hadn't seen before - placing processors between slices rather than within them:

> "I never saw you doing that. One thing you did in the workshop was you put the processes in between slices. I have never seen you doing that before." - Martin

Adam's reasoning:

> "An automation has two sides to it. There's the sender side which is packaging up something to send and there's a receiving side. Naturally this fits how we move information around." - Adam

Martin typically puts automation on the writing side (where the command is), while Adam prefers the middle position. The key insight: **choose one approach and be consistent**.

### Naming Lookup Models for Slices

A crucial pattern that Martin immediately applied in his next workshop:

> "You name them especially for the slice. You say lookup product name for shopping cart. Don't have a generic lookup product name for everything because that's coupling." - Martin

This prevents the dangerous temptation to reuse read models across slices, which would couple them together. When Martin taught this at his workshop with scientists in Hanover:

> "Immediately someone stood up and said, 'No, no, no, no, no. We cannot do that because how will I reuse it?' Exactly. That's the point." - Martin

### Event Models as Musical Notation

Adam shared a powerful metaphor that helps experienced practitioners:

> "Looking at the swim lanes like musical notes... every note is a different service or capability that you're hitting. When you become proficient, you don't look at every single note. You look at whole sections." - Adam

The more event models you read and create, the more fluent you become - recognizing patterns at a glance without reading every detail.

## Vibe Coding: The Fundamental Scope Problem

Adam spent an evening testing the limits of vibe coding by building a Yatsi (dice game) using only AI prompting.

### The Experiment

- Used Gemini with canvas feature
- Built complete HTML/CSS/JavaScript game in one file
- Got working game in 30-60 minutes
- Added features like dynamic scoring, dice customization

### The Breakdown

> "Because the scope is not reduced, everything's in scope all the time. If you keep reprompting, it changed things I didn't want to change." - Adam

Problems encountered:
- AI would randomly change fonts, colors, UI elements
- Explicitly saying "don't change anything else" didn't help reliably
- Like playing slot machines - pull the lever and hope for the right combination
- Time spent crafting detailed prompts equals time to make proper event model

### The Key Insight

> "You end up reverse engineering event modeling anyway because what do you do when you get this large problem is you on pen and paper say okay this has how many steps and you vibe code each step. Well, eventually what you'll end up with is slices." - Adam

Martin's experience confirms this:

> "If you if you try to build a whole thing with vibe coding, it simply doesn't work. At some point in time you will reach this level where it simply starts to make errors and if you have the first errors it gets really hard." - Martin

Martin's solution: Use Lovable for UI generation, but **always start with an event model**:

> "Every minute you spend event modeling saves you time later. 80% of the UI is vibe coded but it's vibe coded UI with structure using modeling." - Martin

## Fixed Pricing: Why Your Rates Shouldn't Rise

Adam makes a controversial but logical argument about consulting rates and inflation.

### The Core Argument

> "You should as a consulting company never raise your prices to inflation. Even without event modeling or anything like this, you should be getting enough productivity increases by better technology every year so the prices should keep the same or even lower." - Adam

Traditional consulting model:
- Sell by the hour
- Must raise rates with inflation
- Only scale by: more hours, more people, or cheaper people
- All done at customer's expense

### The Event Modeling Advantage

With fixed-cost per slice pricing:
- Same slice price year after year
- Productivity increases = more slices per month
- Team gets richer through efficiency
- Clients pay same price for features

> "At Adapt we've never had to change our rates. We've never had to go make our rates higher per slice because the efficiency that we built into our own company has made us richer and people don't have to pay a higher price for the same results." - Adam

### Why This Works

- Live templates and scripts accumulate
- Team gets faster with practice
- AI improvements add productivity
- All benefits flow to team without raising prices

Martin agrees completely:

> "The whole point of when you talk about fixed pricing is the faster you get, the more you earn. If you build twice the amount of slices, you effectively double your rates without charging your customer more." - Martin

### The German Challenge

Martin faces resistance in Germany to this model:

> "Many companies are really afraid of this model. I don't know why. It's so transparent." - Martin

Even when explaining it clearly face-to-face, companies struggle with the concept. Traditional billing systems don't have entries for "slices" - they only understand hours.

Adam's workaround: Use 10-hour buckets to satisfy accounting systems, but charge same amount per slice regardless of who does the work.

## The Event Modeling Book: Progress Update

Adam announces exciting progress on the official Event Modeling book.

### The Approach

- Working with ghost writer (3 meetings per week)
- Two-phase release: Quick reference guide first, then comprehensive book
- Ghost writer has technical book and autobiography experience
- Process forces Adam to explain concepts clearly

### Influences and Style

Key influences mentioned:
- **Michael Feathers' "Working Effectively with Legacy Code"** - Reference structure with deep thoughts up front
- **Head First Design Patterns** - Friendly, engaging, not dry
- **Eric Evans' DDD Reference** - Concise distillation of key concepts
- **Martin's Event Sourcing book** - Visual, easy to read despite 700 pages

### Timeline

- Quick reference guide: End of year / January
- Full book: Approximately one year
- Early chapter releases available to community on Discord

> "I want the booklet out like ASAP just like the core ideas. No in-depth why or whatever. The Eric Evans 100-page book. This is how you do it." - Adam

Martin's reaction:

> "I'm waiting. I'm ready to proofread whatever you have." - Martin

## Additional Topics

### Workshop Success with Scientists

Martin's workshop with scientists in Hanover revealed immediate comprehension:

> "Scientists immediately understand what event modeling is all about and they immediately started to look at it from a scientific perspective and said okay that event modeling works because of this and because of that." - Martin

### Pattern Recognition and Practice

Both hosts emphasize that fluency comes from practice:

> "Practice makes you really good at event modeling. The more event models you do and the more event models you read, the easier it gets." - Martin

> "I really think event modeling is visual. A lighter read with diagrams - that works well." - Adam

### Tool Development Progress

Adam continues working on proper event modeling tooling with zoom capabilities:
- Top level: Project management overview
- Zoom in: See UI outlines and rough structure
- Zoom deeper: Property names appear
- Deepest level: Full example data visible

No more canvas-based tools where you manually align and move things.

## Key Takeaways

1. **Be Consistent with Patterns** - Whether you put processors between slices or within them, choose one approach and stick with it

2. **Name Lookup Models for Slices** - Avoid generic names that tempt you to reuse across slices and create coupling

3. **Vibe Coding Has Fundamental Limits** - Without structure, AI will eventually break things; event modeling provides that structure

4. **Don't Raise Rates with Inflation** - Technology productivity gains should benefit both you and your clients

5. **Fixed Pricing Requires Fair Slicing** - Count given-when-thens to ensure slices are similarly sized

6. **Practice Builds Fluency** - Like reading music, event models become instantly recognizable with experience

7. **Scientists Get It Immediately** - The logical structure resonates with scientific thinking

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices on January 20/21, 2026](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
