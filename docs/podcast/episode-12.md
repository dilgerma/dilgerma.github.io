---
layout: docs
title: Episode 12 - Event Modeling Requires Organizational Support
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 12 - Event Modeling Requires Organizational Support</h1>
    <p class="blog-post-subtitle">Why event modeling needs more than just book learning - workshops, courses, and expert guidance are essential</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 12</span>
      <span>Event Sourcing & Architecture</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cwQgRqmEvqs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin and Adam discuss the organizational challenges of adopting event modeling and event sourcing. While books and documentation provide foundation, successful adoption requires workshops, mentoring, and organizational commitment. They emphasize that learning event modeling is more than reading - it requires hands-on practice with expert guidance to avoid common pitfalls.

## Main Discussion Points

- **Beyond Book Learning**: Why reading about event modeling isn't sufficient - hands-on practice with guidance is essential for mastering the approach
- **Organizational Buy-In**: The importance of leadership support and team-wide adoption rather than isolated developer experimentation
- **Workshop Value**: How interactive workshops reveal nuances and pitfalls that self-study misses
- **Mentoring and Coaching**: The role of experienced practitioners in guiding teams through their first implementations
- **Common Adoption Failures**: Why grassroots attempts without organizational support often fail or get abandoned
- **Investment Justification**: Building the business case for event modeling training and expert assistance

## Key Takeaways

Successfully adopting event modeling requires organizational commitment beyond individual developer enthusiasm. Books and online resources provide essential foundation, but workshops and mentoring accelerate learning by revealing practical nuances that documentation cannot fully convey. Teams attempting event modeling without expert guidance often struggle with implementation details, leading to frustration and abandonment. Organizations should view event modeling adoption as a strategic investment requiring proper training and support, not just a technical practice that developers can self-teach from books.

## Memorable Quotes

1. "A slice is always a command and an event is a state change slice that is one thing and it's always event basically and the read model where the read model is the slce just using the events that are already present in the system" - Martin
2. "I throw away the fact that there's an automation I I really focus on the command handling functions and the uh and the state view or read model functions as being the units of work" - Adam
3. "Number one thing that I have to fight when people are doing event sourcing for the first time is the propensity for people to want to reuse the green boxes" - Adam
4. "When something goes wrong you want like 1% of your system to fail not 10 or 50 or 100 as we do a lot of times in traditional systems because it's high coupling" - Adam
5. "If you have a good system you should be able to use the most Junior people to be effective that's the sign of a good system" - Adam

## Key Learnings

1. A slice consists of three main types: command+event (state change), event+read model (state view), and automation (processor connecting read models)
2. Reusing read models (green boxes) across slices creates tight coupling - each slice should have its own isolated projections even if they look similar
3. Good slice architecture prevents coupling by making code changes local - you can have working code that runs for years without modification
4. An effective system allows junior developers to be productive because the system structure protects against mistakes, rather than relying on senior gatekeeping
5. Fixed costs for slices work because the heterogeneity is removed - junior developers take longer but the predictability remains across all skill levels

<div class="info-box" markdown="1">
### Ready to Learn More?

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**Join our [Event Modeling Workshop](https://training.nebulit.de/eventmodeling-workshop/){:target="_blank"}** to get hands-on experience.
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
