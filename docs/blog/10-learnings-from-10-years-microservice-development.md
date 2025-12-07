---
layout: docs
title: 10 Learnings from 10 Years of Microservice Development
description: How it all began and what I learned building microservices from 2014 to today. Essential learnings about microservice architecture, deployment, and team organization.
author: Martin Dilger
date: 2023-10-15
category: Software Architecture & Microservices
keywords: microservices, microservice architecture, distributed systems, software architecture, microservices best practices, service-oriented architecture, SOA, team organization, deployment strategies
featured_image: /assets/images/blog/10-learnings-microservices.png
tags: [microservices, architecture, distributed-systems, best-practices, lessons-learned]
---

<div class="blog-post" markdown="1">

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>10 Learnings from 10 Years of Microservice Development</h1>
    <p class="blog-post-subtitle">How it all began and what I learned building microservices from 2014 to today. None of these fundamental learnings are about frameworks or specific technologies. The longer you work in IT, the faster you realize how unimportant all of that is.</p>
    <div class="blog-post-meta">
      <span>October 2023</span>
      <span>12 min read</span>
      <span>Software Architecture & Microservices</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/10-learnings-banner.png' | relative_url }}" alt="10 Learnings from 10 Years of Microservice Development">
  </div>

  <div class="blog-post-content" markdown="1">


<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

## How It All Began

I was part of a large e-commerce project in 2014. Like all teams back then, we jumped on the microservices train. We tried to develop "microservices" with less-than-optimal frameworks and tools. What seemed like a curse at the time was actually a blessing: operations. There was simply a hard "No!" and no possibility to deploy dozens of microservices into a production environment.

Constraints breed creativity, and I learned a tremendous amount back then.

We'll see how that helped me.

**10 fundamental things I've learned over the last 10 years developing (micro)services that have proven themselves time and time again.**

None of these fundamental learnings are about frameworks or specific technologies. The longer you work in IT, the faster you realize how unimportant all of that is.

But let's get to the promised learnings...

## 1) Microservice, Nanoservice, Vertical, Monolith, Modulith...

The distinction of what exactly you're building doesn't interest anyone. "How big should your microservice be?" - completely irrelevant. The only important thing? How well is what you're building structured. My recommendation, if I start on a greenfield project today: 100% a cleanly modularized monolith (Modulith). Physical separation is almost always complete overhead. Back in 2012, we were forced to do exactly that, and the result is still in production today, used daily by thousands of people. The structure from back then still holds up today.

## 2) Data Flow...

Probably the most important point on this list. You must be able to explain in simple words how data flows through your service.

"Input via Kafka → Record is processed → Aggregate persisted → Projections via HTTP, Kafka Connect and Kafka Streams provided to the outside"

If you can't explain it that simply, **something is wrong.**

## 3) Independence...

Regardless of which constellation you develop services in, your service itself must be independent of the environment. If you first have to start Kafka, 2 databases and 4 external systems just to "quickly" reproduce a problem, **something is wrong.**

Also, if you **don't** have the ability to debug your business logic within 2 minutes, **something is wrong**. We'll come to that later.

**This learning fits perfectly with streaming-based services with Kafka. If you want to learn more about this, I'd be happy to hear from you.**

## 4) Interfaces...

Your service is based on interfaces. The implementation is an unimportant detail. When I design new services or modules, I ALWAYS start with the interfaces and put the interfaces together like Lego blocks. Afterward, I know exactly which building blocks I need. If you only have interfaces, it's impossible to mix concepts that don't belong together. And you can already write initial tests against the interfaces only. This way, you know the structure is valid. You don't need a single implementation for this. If the interfaces are structured correctly, the implementation is simple in the end. You can even outsource it. If you don't know which interfaces you need, **something is wrong.**

## 5) DRY...

"LIBRARIES IN THE MICROSERVICE WORLD ARE BAD!"

"WE WANT TO AVOID DEPENDENCIES!"

Nonsense.

What unnecessary effort, costs, and bugs! Instead of a cleanly structured library, changes are preferably made 3, 4, or 5 times in nearly identical classes. As an architect and also as a developer, I can only wonder how anyone in their right mind can accept this situation. Shared, non-domain functionality belongs in libraries. The "dependencies" can be easily handled through clean processes. If you have to make changes more than once, **something is definitely wrong.**

<div class="headline-divider"></div>

Your team works with Kafka and streaming technologies and you have the feeling it's not running smoothly? You feel there's a lack of know-how and experience? Maybe we can help. <a href="https://calendly.com/nebulit/erstgespraech" target="_blank">Learn more now</a>. You can also place some technical questions here.

<div class="headline-divider"></div>

## 6) Abstraction...

This point goes hand in hand with the previously described use of interfaces. Everything external is kept away from the application (abstracted). Infrastructure has no place in your code. A connector class from the Salesforce library? You must wrap it. **Build an interface for it.** AWS SDK for DynamoDB? Must definitely be hidden behind an interface. The "concept" is not DynamoDB, the "concept" is something else. Name your interface after the concept. Why? Your safety net against breaking changes and the assurance that you're working with the "concept" and not the "implementation". If you're working directly with the AWS SDK in your business classes, **something is wrong.**

## 7) Dependencies

Your dependencies must be cleanly managed. And by that, I don't mean the ticket the architect opened because of the Arc42 violation. Each module defines an API. Here the interfaces from Learning 4 are defined. You write the API first (can be a separate Maven module, for example). This makes it impossible for other modules to rely on a concrete implementation, since only interfaces are available at compile time. The implementation only comes at the very end. If your dependencies don't follow a clear structure, **something is wrong.**

## 8) Automation...

Everything, really everything in your service must be automated. Automation is the key. Tests... run completely automatically, of course. Quality assurance... you do completely automatically. Documentation... is fully automated. Library upgrades... you do completely automatically. Deployments... you do completely automatically. If you have manual steps that "every sprint" have to be done again and again, **something is wrong.**

## 9) Quality...

Your tests are the be-all and end-all. Especially together with Learning 8)

Unit tests secure the basic functionality.

Integration tests secure the interaction of all modules.

To debug the application, ideally it's enough to start the integration test (that's the 2 minutes from Learning 3).

## 10) Fail Fast, Fail Early, Fail Hard.. Repeat

The biggest mistake you can make is "to wait". Waiting with the library upgrade, waiting with the module upgrade, waiting with the deployment, waiting with... whatever. If something goes wrong, then please quickly and in a way that we see it immediately. Automate everything. If the library changes, automatically increment the version in every service and let it crash. The earlier, the easier. If you're 6 versions behind the library in your service, **something is wrong.**

<div class="headline-divider"></div>

Curious? With our expertise in **Kafka**, **Kotlin** and **Spring**, we offer the opportunity to accelerate your development and make it more productive.

An independent architecture review creates clarity about the status quo.

In our free introductory call, you also have the opportunity to ask initial questions at no cost.

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

<section class="related-posts">
  <h2>Related Articles</h2>
  <div class="related-posts-grid">
    <a href="{{ '/docs/blog/choreography-orchestration-newsletter' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>Choreography vs Orchestration</h3>
        <p>Choosing the right pattern for distributed systems</p>
        <span class="related-post-meta">Architecture • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/code-reuse-newsletter' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Code Reuse Problem Newsletter</h3>
        <p>Why code reuse often creates more problems than it solves</p>
        <span class="related-post-meta">Software Design • November 2025</span>
      </div>
    </a>
    <a href="{{ '/docs/blog/code-reuse-problem' | relative_url }}" class="related-post-card">
      <div class="related-post-content">
        <h3>The Code Reuse Problem</h3>
        <p>Understanding the hidden costs of code reuse</p>
        <span class="related-post-meta">Software Design • November 2025</span>
      </div>
    </a>
  </div>
</section>

  </div>
</div>
