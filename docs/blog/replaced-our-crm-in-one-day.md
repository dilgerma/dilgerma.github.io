---
layout: docs
title: "I Replaced Our CRM With a Custom Solution in One Day"
description: We paid for a SaaS CRM, used 20% of it, and still had to bend that 20% to fit. On one meeting-free day I cancelled the license, modeled a replacement in the morning, let four agents build it in the afternoon, and had it running with all our data by evening.
author: Martin Dilger
date: 2026-11-08
category: AI & Event Modeling
keywords: custom crm, build vs buy, agentic engineering, ai agents, event modeling, em-studio, spec-driven development, mcp
featured_image: /assets/images/blog/replaced-our-crm-in-one-day.png
tags: [ai, agentic-engineering, event-modeling, em-studio]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>I Replaced Our CRM With a Custom Solution in One Day</h1>
    <p class="blog-post-subtitle">Modeled in the morning, built by four agents in the afternoon, running with all our data by evening - and why "build it yourself" suddenly makes sense.</p>
    <div class="blog-post-meta">
      <span>November 8, 2026</span>
      <span>6 min read</span>
      <span>AI &amp; Event Modeling</span>
      <span>By Martin Dilger</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/replaced-our-crm-in-one-day.png' | relative_url }}" alt="Custom CRM built in one day - modeled in EM-Studio and built by four agents">
  </div>

  <div class="blog-post-content" markdown="1">

We paid for a SaaS CRM, used 20% of it, and still had to bend that 20% to fit. On one meeting-free day, I cancelled the license, modeled a replacement in the morning, let four agents build it in the afternoon, and had it running with all our data by evening. Here's how the day went, and why "build it yourself" suddenly makes sense.
{: .lead}

## The Result First

I replaced my company's CRM with a custom solution in one day.

It's running. All our data is in it. It's fully AI enabled. And I couldn't be happier.

I want to tell you how that day went. But first I want to tell you why I did it, because the reason is probably sitting in your company too.

## 79 € a Month for the Wrong 80%

We were using a commercial SaaS CRM. 79 € a month. Not the world.

That's not a lot of money. No founder rips out a working system to save 79 € a month. That was never the point.

We paid for 100% of the features. We used maybe 20%. And that 20% was heavily customized and still didn't do exactly what we needed.

If you've worked with any standard tool for long enough, you know this feeling. You buy the whole buffet and eat from one plate. And then you still have to cook half of that plate yourself, with custom fields, workarounds, and little rules you have to remember because the tool doesn't know about them.

## What We Actually Needed

When I wrote it down, the list was short.

- Taking quick notes, also during a call
- Full AI integration
- Uploading transcripts and having them handled properly
- Something like a whiteboard for everything in the tool
- Being sure our customer data is handled correctly

None of this is exotic, except the whiteboard thing maybe. But together, it's a combination no tool gave me in exactly the way I wanted.

## The Quiet Trust Question

That last point on the list deserves a moment.

Nothing ever went wrong with the old tool. There was no incident. No lost data. No reason not to believe it was safe.

But we were putting in our customers' data. Call notes. Transcripts. The things people tell you in confidence when they're deciding whether to work with you.

And with that kind of data, "probably fine" isn't good enough for me.

## A Day Without Meetings

Once a month, I have a day off. This one was last Friday.

Not off from work. Off from meetings. Nothing scheduled. No calls, no workshops.

I use this day to learn, to build, and to improve the company. It's the day I work on Nebulit instead of in it.

A few weeks ago, the license renewal for the CRM came up. And it happened to land right before one of those days.

## Cancelling Before Building

So I cancelled it.

Before I had built anything. Before I had a single slice modeled. On purpose.

No way back. If the day didn't work out, I'd have a problem.

A year ago, I couldn't have built a CRM in a day. And if it would have taken longer than a day, I'm not sure I would have invested the time at all. There's always something more important.

## Morning: Modeling the Whole System

The day started with modeling in EM-Studio.

I modeled the whole system with two Modeling Agents connected to the Board. Everything I needed from a CRM, step by step along the timeline: what happens when a prospect comes in, what I do with them, what I need to see, what the AI should take care of.

It took about three hours. And it's close to 100 slices we needed. I finished just before lunch.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/replaced-our-crm-in-one-day-1.png' | relative_url }}" alt="The CRM Event Model in EM-Studio - close to 100 slices modeled along the timeline">
</div>

Three hours sounds like a lot of "not building." But this is where the actual decisions were made. Screens were designed. Every question about how the system should behave was answered right there, on the board, before anyone wrote a line of code.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/replaced-our-crm-in-one-day-2.png' | relative_url }}" alt="Screens of the CRM designed directly on the Event Model board">
</div>

## Afternoon: Four Agents, One Model

After lunch, I gave the model to four agents.

Two on the backend. Two on the frontend. Working in tandem.

All four built from the same model. One slice after the other. The model was the shared understanding. Nobody had to guess what the other was doing, because the answer was already on the board.

Like an assembly line.

## Testing for UX, Not for Functionality

And what was I doing while they built?

I kept modeling. Refining. And testing what was already built.

Not for functionality. That was safe. I was testing for UX.

Was everything perfect? Of course not. Whenever I found something, I adjusted the model and put the slices back in the assembly line. The next free agent picked them up and adjusted the code.

It's a smooth way of working, with work constantly flowing and improving for about four hours.

## Why I Could Do It in a Day

I had all the guardrails in place. And I had reviewed the model with AI and our tailor-made skills for it.

The checking happened before a single line of code was written. Every slice was clear about what goes in, what comes out, and what should happen. The agents didn't have to interpret anything. They had to implement what was already decided.

So I was sure it was going to work. And it did.

But not only that: I did not have to make a single technical decision. I picked one of the pre-crafted build kits that already define the blueprint architecture. All technical decisions had already been made, so the full day was 100% focus on planning and building.

## What It Is Now

By the end of the day, it was running. With all our data already imported. Fully AI enabled.

Including authentication, authorization and S3-compatible blob storage - all running locally on our own hardware.

Backup is one script using rsync. Yes, it's that simple.

And it has every feature I ever wanted.

**Full MCP integration**, so any agent I work with can access it.

**Tasks feed my daily routine.** All tasks from the CRM flow into it automatically. Once a day, Claude Code checks my inbox and syncs everything to the right accounts.

**A local LLM in the browser.** A hosted LLM running directly in the browser via WebLLM, also connected to the MCP for quick chatting from anywhere. Running Qwen3.8:9b. Works perfectly.

**A board for everything.** Every single thing in the system has its own Miro-like board attached. If it has an ID, it has a board. Every task. Every prospect. Every comment. Like Miro, just that it's not Miro. It's all custom. And it's multi-user enabled.

And we can have images, PDFs and voice notes - all on the board, connected. It's perfect.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/replaced-our-crm-in-one-day-3.png' | relative_url }}" alt="A Miro-like board attached to a CRM prospect with images, PDFs and voice notes">
</div>

No SaaS tool would have built that for me. It's too specific to how I work. That's exactly why it fits.

## Build or Buy, Again

This was the result after one day, asking the AI to quickly generate a progress report.

<div class="blog-post-image">
  <img src="{{ '/assets/images/blog/replaced-our-crm-in-one-day-4.png' | relative_url }}" alt="AI-generated progress report after one day of building the CRM">
</div>

For years, the answer to "should we build this ourselves?" was almost always no. And for good reasons. Building took months. Maintaining took forever. Buying was the responsible choice.

I think that answer is changing. Not for everything. But for the tools you've been bending out of shape for years, the question is no longer "can we afford to build this ourselves?"

To be honest, I don't care about the money. But the new features are so rich and solve exactly our problems that, more and more, it's "can we afford not to?"

If you have a tool like that in your company, and most companies do, it might be worth one day of your time. Start with the model. The rest follows faster than you'd think.

## What Happens Next

This experience was quite satisfying. And the results speak for themselves.

I actually think building exactly this tool is such a great example that we'll rebuild it together in the next cohort of the Agentic Engineer. Yes, exactly this tool.

If you want to know how to build it step by step, join the [Agentic Engineer Program]({{ '/agentic-engineer-course' | relative_url }}) starting January 11, 2027. There are only 15 seats. Use **2027** as discount code for the next 2 days.

You will not only build your own fully AI-enabled CRM. You'll get mine as well. It has zero running costs attached. You can run it locally, or deploy it on any cloud server.

### Links

- [EM-Studio](https://app.eventmodelers.ai)
- [EM Build Kits](https://app.eventmodelers.ai/documentation#agentic-building)
- [EM Cheatsheet]({{ '/cheatsheet' | relative_url }})
- [Event Modeling Use-Cases]({{ '/use-cases' | relative_url }})
- [Explore Real World Event Models](https://app.eventmodelers.ai/catalog)

<div class="course-cta" markdown="1">
### Hands-On Event Modeling Workshop

[Learn More →](https://nebulit.de/en/hands-on-event-modeling){:.cta-button}
</div>

<div class="course-cta" markdown="1">
### Book a Call Today

Want to talk through how Event Modeling could work for your team or project? Let's have a quick, no-pressure conversation.

[Book a Call Today →](https://tidycal.com/1gj56y6/15-minute-meeting){:.cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/inverse-event-modeling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Inverse Event Modeling: Building the Model From the Code</h3>
        <p>For teams with existing systems, the model gets built from the code - and AI keeps it true.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • October 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/agentic-ui-building-ui-from-event-models' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Agentic UI - Building the UI from an Event Model</h3>
        <p>The first UI build kit turns your Event Model directly into a real, well-structured frontend.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • September 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>Why AI and Event Modeling are a perfect match - and why vibe coding will always fail.</p>
        <span class="related-post-meta">AI &amp; Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
