---
layout: docs
title: Episode 45 - Mind Readers, Impartial Mirrors, and AI Eating SaaS Alive
description: "Martin and Adam on AI as an impartial mirror for bad specs, mind reading as software's hidden job requirement, and AI eating SaaS from within."
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 45 - Mind Readers, Impartial Mirrors, and AI Eating SaaS Alive</h1>
    <p class="blog-post-subtitle">Martin and Adam dig into why large language models are an impartial mirror for bad specs, riff on mind reading as software's unspoken job requirement, and unpack how AI is quietly eating SaaS from the inside — plus a first look at rendering live UI screenshots straight from event model states instead of separate design mockups.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 45</span>
      <span>Episode 45 • Spec-Driven AI, Mind Reading & AI Eating SaaS</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/t5CG0JpoVZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

A workshop exercise where attendees modeled separate slices of the same flow reveals just how much gets lost without communication — they'd missed about 90% of the requirements. That kicks off a wider argument: large language models are an impartial mirror that proves spec-driven development right, because bad specs produce bad output with nobody to blame but yourself. From there it's a tour through Anthropic's much-hyped FreeBSD bug find, AI quietly cannibalizing SaaS categories from the inside, and using event sourcing to render live UI screenshots instead of static design mockups.

## Main Discussion Points

- **Martin's Booklet Nears Completion** — The booklet version of Martin's book is almost out, with the full, more comprehensive book planned by the end of the year.
- **The Workshop Exercise That Exposed the 90% Gap** — Attendees each modeled a different slice of the same flow under a tight time limit and had to communicate to connect them, discovering they'd missed roughly 90% of the requirements they thought they'd already covered.
- **AI as an Impartial Mirror for Spec-Driven Development** — Unlike a manager's opinion, a large language model trained on the whole industry just reflects your input back at you — bad specifications burn tokens the same way they used to burn hours.
- **Mind Reading: Software's Unstated Job Requirement** — A running joke that every job description for the last 30 years has secretly required the ability to read the mind of product owners and management, and AI hasn't changed that expectation.
- **The Anthropic FreeBSD Bug and What It Really Proves** — Adam is skeptical of the marketing around a $20,000-in-tokens bug find in a decades-old codebase, arguing it mainly shows that 100% security is a myth, not that AI is uniquely dangerous.
- **AI Is Eating SaaS From the Inside** — Previously complementary services are growing so many overlapping features (Stripe absorbing website generation, CRM, and more) that entire adjacent categories start cannibalizing each other.
- **Google's Stitch and Rendering Live UI From Event Model States** — Instead of a separate design tool, browser automation can stage fake past events and screenshot a real running slice at any given-when-then moment, replacing the need for tools like Figma or Stitch.
- **Local LLM Experiments: Hermes vs Open Claw** — Adam is testing which local models work best as orchestrators versus code generators versus simple task doers, and finding Hermes more deliberate about memory than the looser, faster-configuring Open Claw.
- **Linux and Plasma Desktop Tinkering** — Adam built a small custom Plasma taskbar widget to auto-offset podcast chapter timestamps by 18 seconds, turning a multi-day chore into a five-minute hobby project.
- **The AI Bubble, Wasted Tax Money, and Open Source as the Right Side of History** — Dot-com comparisons (including a shoe company pivoting to AI compute) sit alongside a pointed take on government spending with Microsoft, closing with a case for open source and vendor-independent event modeling.

## Now Hiring: Mind Readers

> "Every job description in the last 30 years, I never saw that — they always had this hidden requirement of being a mind reader. It should have been the number one spot, mind reader." - Adam

## AI as an Impartial Mirror

> "It's finally impartial. It's not some manager's opinion. It's like, hey, the large language model was trained on everything the industry's been talking about, and even with that as your data, it's a mirror pointing back at you. You're not moving forward because your specifications are bad." - Adam

## We Missed 90% of the Requirements

> "Oh, we didn't understand — and then all the questions come up, oh, we missed about 90% of all those requirements." - Martin

## Why Buy Anything Else When Stripe Does Everything

> "If Stripe all of a sudden does everything from your website generation to payment to CRM to whatever else you need, why would you buy those other services? You just stick with Stripe." - Adam

## Key Takeaways

1. **The booklet version of Martin's book is nearly done** — with the full, more comprehensive book targeted for the end of the year.
2. **Hands-on slice exercises expose gaps that discussion alone hides** — modeling slices separately and forcing communication surfaced about 90% of missed requirements.
3. **AI validates spec-driven development as an impartial mirror** — it reflects bad specifications back as bad output, with no manager's opinion to hide behind.
4. **Mind reading is software's unspoken job requirement** — and large language models haven't removed that silent expectation from teams.
5. **The Anthropic FreeBSD bug shows the limits of security, not AI's danger** — $20,000 in tokens found one issue in a decades-old codebase, reinforcing that 100% security is a myth.
6. **AI-driven feature bloat is making SaaS categories cannibalize each other** — as tools like Stripe absorb adjacent capabilities, there's less reason to pay for separate services.
7. **Event sourcing can replace static design mockups** — staging fake past events and screenshotting a live slice can substitute for tools like Stitch or Figma.
8. **Local LLM orchestration is still trial-and-error** — but tools like Hermes and Open Claw show local-first setups are becoming genuinely usable.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Learn Event Modeling from the experts

Join the **Event Modeling Hands-On Workshop** on March 16/17 — learn how to design systems that are honest from the start.

**[Register now →](https://nebulit.de/en/eventmodeling-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning &rarr;](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
