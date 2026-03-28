---
layout: docs
title: Auditability is Not Just for Regulated Industries
description: You don't need Mark from compliance to care about auditability. Your system makes decisions every day — the only question is whether you're storing them.
author: Martin Dilger
date: 2026-03-28
category: Event Sourcing
keywords: auditability, event sourcing, decision records, software architecture, compliance, logging
featured_image: /assets/images/blog/auditability-not-just-regulated.png
tags: [event-sourcing, architecture, auditability]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Auditability is Not Just for Regulated Industries</h1>
    <p class="blog-post-subtitle">You don't need Mark from compliance to care about auditability. Your system makes decisions every day — the only question is whether you're storing them.</p>
    <div class="blog-post-meta">
      <span>March 28, 2026</span>
      <span>6 min read</span>
      <span>Event Sourcing</span>
    </div>
  </div>

  <div class="blog-post-content" markdown="1">

Picture this. A calm guy in a suit and tie sits down in your office. Let's call him "Mark". He opens his briefcase, pulls out a stack of documents, and starts reading. One by one. Slowly. And with every page he turns, you hold your breath.
{: .lead}

That's what most people think of when they hear the word "auditability." A compliance thing. A regulated industry thing. Something for banks and hospitals and pharmaceutical companies.

It's not.

## Your IT System Is That Stack of Documents

Mark isn't reading paper. He's looking into your IT systems. And in most companies, what he finds isn't an ordered archive - it's chaos.

And then come the questions.

"Where is this information used?" "Why was this customer registered?" "How come this transaction wasn't billed?"

Simple questions. Completely reasonable questions. Questions that should take minutes to answer.

Instead, you start digging. Logs. Backups. You pull in two developers and a database admin. And after hours - sometimes days - someone finally says the thing nobody wants to say out loud:

**"Our logs only go back 30 days."**

Red Flag.

## This Is Not a Logging Problem

Here's where most teams get it wrong. They treat this as a logging problem. Add more logs. Keep them longer. Buy a better monitoring tool.

But that's not the issue.

Logs are just decisions written to a temporary medium. Someone made a call - contact this customer, apply this discount, skip this validation - and that decision got recorded somewhere it was never meant to live permanently. And then it evaporated.

**The decisions aren't persisted. That's the real problem.**
{: .highlight-box}

Here's a contradiction I run into constantly. Ask any software architect if they use Architecture Decision Records - documents that capture why a technical decision was made - and the answer is almost always the same: "Of course. Otherwise we end up having the same discussion every few months."

They get it immediately. Decisions need to be stored, or they're lost forever.

But then bring up event sourcing in the same conversation - a way to do exactly that for your running system - and the shutters come down. "We don't need that." "That's too complex." "That's for big systems." "We tried, didn't work for us."

Part of the problem is the name.

## Stop Calling It Event Sourcing - Call It Decision Record

Same thing. Different framing. Would it make sense to store your decisions? Use past decisions to drive future ones?

When people hear "event sourcing," they think technically. Storing events. Replaying streams. Infrastructure complexity. No time for that.

But that framing misses the point entirely.

What you're actually storing is decisions. Every decision made in your system - by a user, by a process, by an integration, by AI - over the last 30, 90, 180 days and beyond.

"Did someone make a decision to contact this customer?"

That's an answerable question - if you stored the decision. If you didn't, you're guessing. You're digging through backups. You're hoping someone remembers.

## This Is a Monday Morning Problem

Auditability isn't something that matters only when Mark with the tie shows up. It's a daily business problem.

Think about every bug hunt you've ever been part of that lasted days - only to end with "we can't reproduce it because we don't know how the customer got into that state." The path that led to the bug is just gone. No trace. No trail. No decisions stored. Nothing to follow.

That costs teams not just time - it costs trust. Trust in the system, trust between developers, and trust with the customer who's still sitting there with a broken experience.

Sales teams can't answer why a deal went cold. Support teams can't explain why an account looks the way it does. Billing teams can't trace why a transaction never went through.

This happens every Monday. In every company. Regulated or not.

## A Side Note Worth Mentioning

If your AI has access to all the decisions ever made in your system - every state change, every human action, every process outcome - it can actually reason about what's happening. It can help you find patterns, answer questions, support debugging.

Without that history, the AI is just as blind as the developer on day three of that bug hunt. Looking for the logs that don't exist (and burning your token budget for breakfast while searching).

## The Bottom Line

Auditability is a fundamental architectural concern. Not a checkbox for regulated industries. Not something you bolt on later. Not a logging configuration.

The companies that treat it as a core part of how their system is designed can answer Mark's questions without breaking a sweat. More importantly - they can answer themselves. On any normal Monday morning, without digging, without guessing, without hoping the answer is still somewhere in a 30-day log window.

**Your system makes decisions every day. The only question is whether you're storing them for Mark.**

I help Software Teams design and build Systems that record decisions - starting by exploring what this could look like for your team - and then building maintainable Systems that require no rework.

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

My book [**"Understanding Eventsourcing"**](https://leanpub.com/eventmodeling-and-eventsourcing){:target="_blank"} walks you through designing systems that store decisions properly — from the ground up.

Want to explore what this could look like for your team? Let's talk about building systems that can answer Monday morning questions without the panic.

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
    <a href="{{ '/docs/blog/vibe-coding-event-sourcing' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Every Solution the AI Suggested Was Technically Correct — But Would Have Killed the Architecture</h3>
        <p>The AI reproduced every wrong instinct developers have had for decades. Event sourcing is what saved the architecture.</p>
        <span class="related-post-meta">AI & Architecture • March 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/event-sourced-saas-zero-joins' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>An Event-Sourced SaaS Story - 150+ Tables, Zero Joins, Almost Zero Operation Cost</h3>
        <p>What a production event-sourced system actually looks like at scale.</p>
        <span class="related-post-meta">Event Sourcing • February 2026</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/ai-event-modeling-enabler' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>How Event Modeling Became the Perfect AI Enabler</h3>
        <p>AI is the accelerant. Event Modeling is the structure that makes it work.</p>
        <span class="related-post-meta">AI & Event Modeling • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>