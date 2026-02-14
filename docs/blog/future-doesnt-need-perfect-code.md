---
layout: docs
title: The Future Doesn't Need Your Perfect Code
description: A bold prediction - within 2 years, specifications will be the only thing we version control. Code will be generated on-demand. Tests will be ephemeral. Here's why this isn't science fiction.
author: Martin Dilger
date: 2026-02-14
category: Software Architecture & Design
keywords: disposable code, future of software development, event modeling, specifications, AI code generation, software predictions, test automation, version control, software architecture
featured_image: /assets/images/blog/future-doesnt-need-perfect-code.png
tags: [future, ai, specifications, event-modeling, disposable-code, predictions]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>The Future Doesn't Need Your Perfect Code</h1>
    <p class="blog-post-subtitle">Every 2 years I allow myself to go a little crazy. Here's my latest prediction.</p>
    <div class="blog-post-meta">
      <span>February 14, 2026</span>
      <span>8 min read</span>
      <span>Software Architecture & Design</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/future-doesnt-need-perfect-code.png' | relative_url }}" alt="The Future Doesn't Need Your Perfect Code">
  </div>

  <div class="blog-post-content" markdown="1">

Every 2 years I allow myself to go a little crazy. Let me make a prediction.

The last prediction I made in January 2024 in a webinar, the recording is still online - "Software Development will fundamentally change within 2 years". Most people in the webinar thought I´m crazy.

Our whole industry basically follows the same playbooks, rules and best practices. Good systems need Tests. We need good coverage. Code needs to be readable. CI/CD pipelines. Feature branches or trunk-based development. Comprehensive documentation. You name it.

All the things teams need to master to build quality software.

All hard learned best practices. We treat these like universal truths. Like laws of physics for software development.

But lately, I've been running some experiments that make me think all of this - every single "best practice" we cling to - might be completely obsolete within the next 2 years.

I know how that sounds. Crazy, right? From time to time I like to go a little crazy.

Questioning those fundamental "truths" and go back to first principles.. what would change if those best practices aren't so fundamental as we all think?

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## Going Back to First Principles

From time to time, I start to question everything. Just to see where this leads me.

Most engineers will tell you: "We need tests to ensure quality."

What if that's not true?

What if tests are just an implementation of your specification - and once that specification is proven to work, re-running it is just... waste?

Interesting thought.. let´s dig deeper.

In most projects, tests are guardrails. They catch when you accidentally break something. Making invisible side-effects visible in red. Everyone celebrates when the CI/CD pipeline catches a bug before production.

But then I ask myself: what if that's also not an essential truth? What if it's just a side effect of misaligned architecture?

## The Architecture Problem

What if the need for constant testing is a SYMPTOM, not a fundamental requirement.

Think about it - what if you had one piece of functionality, completely isolated, proven to work, and it literally cannot break unless you touch it directly?

If Module A is truly isolated from Module B, why would changing Module A ever require re-testing Module B? Forget your current reality, forget side-effects.. just think for a second if that was true.

What if in a well-designed system with proper boundaries, accidental breakage would be basically impossible.

Then tests aren't protecting from bad architecture - they're compensating for it.

## The Necessary Cost We All Accept

Those Tests sitting in your repository eating up your LLM context windows. Force developers to wade through hundreds of lines of test code just to understand what something does. Make onboarding harder, not easier.

Why are we reading 500 lines of tests when we could just read the specification?

And that's when the really crazy thought hit me:

What if we just regenerated the test cases from the spec - but only when we actually touch that piece of functionality?

Until then, they're simply not necessary. Why do we even keep them in Code?

No maintenance burden. No stale tests. The spec becomes the source of truth. Code becomes a transient side effect.

## The Question That Changes Everything

What would happen if we didn´t have those test-cases? Most developers will now cringe in their seats. Non-sense! Most engineers will push back: "But what about regression?"

And that's the question that led me down another rabbit hole.

What if regressions don't exist in a well-architected system?

What if we know exactly which artifacts have been touched, we regenerate the test cases for those artifacts on the fly, run them, verify them, and throw them away? Why do we need them if we know the system works?

The spec is permanent, the tests become disposable.

## The Logical Conclusion

We are not done yet..

Developers (including me) said for years "the source code is the ultimate truth." But that economic model just changed - radically.

If we regenerate the Specs on the fly, why not just regenerate the whole system on the fly, in whatever language you want, in whatever stack you need?

What if we validate the model as we build it, and the entire system gets generated fresh every single time? Or just the parts of the system that have changed?

Think about it:

- Your Specification is the source of truth
- Code is "just" the implementation of the spec. generated on-demand
- Tests are generated, run as proof, then discarded

The specification is permanent. Everything else is transient.

## My Crazy Prediction

Let me go crazy. I guess this will be a reality in 2 years.

**Specifications will be the ONLY thing we version control.**

Event Models. Behavioral diagrams. Visual specifications. That's what goes into Version Control. ( and no, I don´t think it´ll be git ).

Code will be generated on-demand in whatever language, whatever stack the deployment target needs.

Tests will be ephemeral - generated at build time, run as immutable proof artifacts, discarded after validation.

CI/CD pipelines won't pull code - they'll pull specs and generate everything fresh, every time.

"Source code" as we know it becomes an intermediate artifact, not the source of truth.

The entire system - regenerated on the fly, validated against the spec, deployed.

## Why This Isn't Science Fiction

I know this sounds insane. But here's why I believe it's inevitable:

**The technology is already here.** LLMs can generate quality code from good specifications today. I'm already doing this with Event Modeling. I generate code from Event Models. I run LLMs in loops, implementing systems slice by slice.

**The economics have shifted.** Code generation used to be expensive and unreliable. Now it's cheap and getting better every week.

**The tooling is emerging.** Validation, generation, deployment from models - it's all becoming real.

The only thing holding us back is the mindset shift.

We're still attached to code as a precious artifact. We've spent decades treating implementation as the source of truth.

But once you forget what "best practices" told us was true and go back to first principles, this is the only logical conclusion I can come to.

## What This Means for You

If I'm right ( and I´m not saying I am.. just my crazy thought experiment ), here's what matters:

**The teams who learn to specify behavior clearly will dominate.**

Event Modeling isn't just a planning tool. It's training for the future of development.

Those still attached to "their code," still thinking implementation is what matters, will be left behind.

Best practices won't die because we convinced people they were wrong. They'll die because the economics changed.

When generation is cheap and deterministic, persistence becomes optional, even questionable.

## The Bridge We're Crossing

Look, I'm not saying we flip the switch tomorrow. This is a transition. Right now, I'm experimenting. I'm living partly in the old world, partly in the new.

I still commit code. I still maintain tests. But I'm testing the boundaries, pushing to see how far this can go.

And every experiment confirms: this is where we're headed.

The Event Model as executable specification. Code as output. Tests as proof artifacts.

## Disposable Code is the Future

For now, that's all this is - a crazy idea I'm playing with. A vision that feels more real every day, but still sounds nuts when I say it out loud.

But I believe this is where we're ultimately heading.

Not because I want it to be true. Because the logic is inescapable once you see it.

Are you building specifications that could survive without your code?

Or are you still treating implementation as the source of truth?

Because in 2 years, I think we'll look back at version-controlled test suites the same way we look at punch cards today.

Necessary once. Obsolete now.

It just needs your clarity about what the system should do.

What do you think? Am I crazy? Or are you seeing the same signals I am?

Drop a comment. Tell me I've lost my mind. Or tell me you're seeing it too.

If I´m right, that will be a fun ride. If I'm wrong? Well, at least it was a fun thought experiment.

Either way, I'm committed to finding out.

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} gives you the blueprint. But reading alone will take your team too long.

I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a [chat](https://outlook.office365.com/book/NebulitGmbH@nebulit.de/){:target="_blank"} about how this applies to your project.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/show-me-the-coupling' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Show Me the Coupling</h3>
        <p>Why coupling is the root of all evil in software architecture</p>
        <span class="related-post-meta">Software Architecture • 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/urge-to-reuse-code' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Urge to Reuse Code</h3>
        <p>Why DRY isn't always the answer and when to embrace duplication</p>
        <span class="related-post-meta">Software Architecture • 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/state-based-systems-doomed-to-fail' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>State-Based Systems Are Doomed to Fail</h3>
        <p>Why immutable event logs beat mutable state every time</p>
        <span class="related-post-meta">Event Sourcing • 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
