---
layout: docs
title: Stacked-PRs are a band-aid on a broken leg
description: Stacked PRs don't fix the review problem - they mask deeper issues with coupling and feature slicing that teams need to address.
author: Martin Dilger
date: 2025-03-06
category: Software Development
keywords: stacked PRs, pull requests, code review, software architecture, coupling, feature slicing, git workflow, branching strategy
featured_image: /assets/images/blog/stacked-prs-band-aid.png
tags: [git, code-review, architecture, coupling, workflow]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Stacked-PRs are a band-aid on a broken leg</h1>
    <p class="blog-post-subtitle">Why stacked PRs mask the real problems: coupling and poor feature slicing</p>
    <div class="blog-post-meta">
      <span>March 6, 2025</span>
      <span>8 min read</span>
      <span>Software Development</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/stacked-prs-band-aid.png' | relative_url }}" alt="Stacked PRs - Band-aid on a broken leg">
  </div>

  <div class="blog-post-content" markdown="1">

I'll be honest - I don't get stacked PRs. I clearly don't understand it.
{: .lead}

A team recently presented their workflow to me with genuine pride. They had a real problem and a real solution. Everything figured out. Tooling in place to create branches off other branches using CLI. The more they explained, the more confused I got. Because five years ago, one of our clearest rules was: never branch off other branches. It's bad. It was considered bad practice. And now it became a best practice?

So what am I missing?

Let me think through this out loud.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## The problem is real

AI-assisted coding has changed the game. Teams are producing more code than ever. Faster than ever. That sounds great - until you realize the bottleneck didn't disappear. It just moved. It moved straight into code review. You haven't increased overall productivity. You've actually decreased it, because now your reviewers are drowning while your developers feel busy and productive.

"We have a lot of waiting time before we can start new Features. Stacked-PRs finally solve this" - we'll address this in a second.

Stacked PRs show up as the answer to this. And I get why. It feels logical. And it feels productive. Get rid of waiting times. Break the work into smaller pieces, stack them, keep moving. Problem solved.

Except it isn't.

## What stacked PRs actually are

Stacked PRs means creating branches off other branches. Branch A off main. Branch B off Branch A. Branch C off Branch B. Each one waiting on the one before it.

This pattern apparently originates from Google and Meta. And I believe it. It makes a certain kind of sense when you're running a supertanker - a massive engineering organization with thousands of engineers, specialized tooling, and very specific constraints.

But most teams are not supertankers. They're speedboats. And what keeps a supertanker afloat will sink a speedboat faster than you can say "PR rejected"

## The sticker on the broken leg

The moment the first PR in that stack gets rejected - or needs major rework - every single branch downstream is compromised. You haven't solved the review problem. You've deferred a much larger coordination problem and dressed it up as a workflow.

The stacked PR is a sticker on a broken leg. It covers the wound. It even looks like treatment. But to actually fix a broken leg, someone needs to tell you it's broken first - and then you need a cast. The real thing. Not a sticker.

the teams investing in this are buying new tooling, learning new workflows, and feeling productive doing it. They're solving the visible pain while welcoming a far bigger problem with open arms. They just can't see it yet.

## What the stacked PR is actually masking

The reason you have to wait for one PR to be approved before another feature can start is coupling. Those two features depend on each other. They can't move independently.

And that's not a branching problem. That's an architecture problem.

Stacked PRs don't fix coupling. They masquerade it. They make it comfortable to live with something that should be deeply uncomfortable. Because the real fix - untangling the coupling, understanding why those features can't move independently - is hard. It requires real architectural thinking. It requires looking at how the system is actually designed.

## And then the next question

"But Stacked-PRs also prevent those big PRs.. I can review 20 Lines much faster than I can review 100"

Once you see the coupling, the next question becomes obvious: why are your features so big in the first place?

Big PRs don't appear out of nowhere. They come from features that were never properly sliced. And most teams don't slice well - not because they're lazy or don't care, but because they genuinely don't have the tools or the mental model to make clean cuts.

This is where it gets interesting. Because when teams finally learn how to slice properly - really slice, down to thin, independent, deployable pieces - something shifts. It's not just a technique. It's a completely different way of seeing the system. Teams call it a revelation. And that's not an exaggeration.

## So what's the actual fix?

Smaller, focused PRs. Shorter feedback loops. And treating the review bottleneck for what it really is - a signal that your features are too big and your system is too coupled - not a branching strategy problem.

Stacked PRs can have a narrow, legitimate use case: parallel AI agents working on different parts of the same feature. Let one agent build the backend, branch off that for the API endpoint definitions, run them in parallel. Fine. But even then - if they're that tightly related, why not just put them on the same branch in the first place?

Five years ago we had three simple rules:

1. Use git rebase only to update from remotes
2. Keep your feature branches short
3. Never branch off other branches

I'm genuinely open to being wrong here. Maybe I'm missing something fundamentally. But the more I think about it, the more I keep coming back to the same place.

**The stacked PR doesn't fix the problem. It just makes the problem harder to see.**
{: .highlight-box}

And a problem you can't see is the most dangerous kind.

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**[Event Sourcing with Slices on January 20/21, 2026](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/ai-agents-brooks-law-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>If You Can't Add Developers and Go Faster, Adding AI Agents Won't Work Either</h3>
        <p>The future of software isn't about coding speed - it's about solving the coupling problem we've ignored for decades.</p>
        <span class="related-post-meta">AI & Architecture • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/planning-software-slices' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Planning Software in Slices</h3>
        <p>Learn how to slice features properly for independent deployment</p>
        <span class="related-post-meta">Software Design • 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/show-me-the-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Show Me The Coupling</h3>
        <p>Understanding and addressing coupling in software systems</p>
        <span class="related-post-meta">Software Architecture • 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
