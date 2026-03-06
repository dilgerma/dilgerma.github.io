---
layout: docs
title: Episode 38 - AI Budget Wars, DCB Goes Mainstream, and Why Security Theater Won't Save You
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ "/docs/podcast" | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 38 - AI Budget Wars, DCB Goes Mainstream, and Why Security Theater Won't Save You</h1>
    <p class="blog-post-subtitle">Why AI hype is eating consulting budgets, the worst time to standardize on any AI vendor, how event modeling survived the cloud migration disaster, and why coupling is still the root of all evil.</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 38</span>
      <span>AI Budgets, DCB, Industry Disruption & BizTalk Horror Stories</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rpubc9KmBnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">

## Episode Summary

Martin and Adam dissect the AI budget crisis hitting consulting companies, why standardizing on Anthropic or OpenAI right now is the highest-risk move you can make, and how event modeling provides the stable foundation when everything else is thrashing. They reveal DCB implementation patterns from the recent Axonic livestream, explain why aggregates force you into expensive read models, and share war stories from extracting business logic from BizTalk's XSLT nightmare.

## Main Discussion Points

- **AI Budget Crisis** - Companies spending consulting budgets on AI tool evaluation instead of real work
- **The Worst Time to Standardize** - Why locking into Anthropic, OpenAI, or any single vendor is dangerous
- **Event Modeling as Firm Ground** - The stable foundation that survives AI chaos, cloud migrations, and vendor lock-in
- **DCB Deep Dive** - Dynamic consistency boundaries explained for business and technical audiences
- **Aggregates Cost 2x** - How aggregate boundaries force expensive read models and slow development
- **BizTalk Horror Stories** - Extracting business logic from middleware XSLT transformations
- **Everyone's an Island** - Why AI experimentation is fragmenting development teams
- **Security Theater** - PCI-DSS compliance checks and certification theater won't stop fraud
- **The Cobalt Moat is Gone** - AI will port legacy systems faster than anyone expected
- **Sagas Have Disappeared** - Simple to-do list processors replaced an entire middleware category

## The AI Budget Crisis

### Consulting Budgets Disappearing

> "It became really harder to find contracts. More and more I get the answers that there's simply no budget because currently all budget is running into AI." - Martin

> "Most of the budget goes really into evaluating tools, evaluating new things. It's not like they are doing something really productive." - Martin

### The Worst Time to Standardize

> "These companies that are trying new things, they say, 'Oh, we'll standardize on Anthropic.' This is the worst time to standardize on anything." - Adam

> "This is the time to make sure that your process is going to survive the inevitable changes in AI over the next month and year." - Adam

### Event Modeling as the Foundation

> "Where event modeling and event sourcing come in is that they give you the firm ground to stand on and no matter what happens in the AI race, you're going to be able to fit in whatever the best tool is." - Adam

## DCB Goes Mainstream

### The Axonic Livestream

Martin and Adam joined Allard Buijze for a DCB deep dive on Axonic's YouTube channel. The session went technical fast - three experts discussing dynamic consistency boundaries without easing the audience in.

> "I think we were a little bit too technical for most people. We went far too fast into DCB." - Martin

> "We had a laundry list of things we didn't get to last time and the biggest one was DCB and so we kind of felt like okay let's just talk about it." - Adam

### DCB vs Aggregates: The 2x Cost Problem

> "If you really want to look at it from the analytical perspective of how much does it cost to make a solution a certain way, you can say that with DCB you save about 50% of your budget if this happens everywhere." - Adam

> "You're going to have to make extra projections to work with aggregates because of the aggregate wall. You have to do that work. Having an extra read model in front of your command to rein in information from events that are outside of your aggregate is going to cost you up to twice as much." - Adam

### When You Know DCB is Working

> "You're doing DCB right if you don't have to mention DCB once. If you don't have to mention 'oh, this is DCB,' then it just feels natural and then you're doing it right." - Martin

### DCB Enables Direct Translation

> "With DCB we're getting closer from directly translating the event model to code. With the aggregate it was always difficult - you don't see the aggregate in the event model by intention. With DCB basically the event model is exactly the same in code." - Martin

## The BizTalk Horror Story

### Middleware as a Tumor

> "BizTalk is a middleware type of solution where you get to connect different services with the data but then adjust the data in flight. Guess what happened? That ended up growing like cancer because it was a tumor of all your business logic." - Adam

> "Data flows from one side in and you get data on the other side out and you have absolutely no idea what happens in between." - Martin

### XSLT Transformations Everywhere

> "There was so much business logic in those transformations. People who worked with it for years. There were these connectors you can reference from everywhere. From XSLT you can make external calls to systems and read databases. Crazy crazy." - Martin

> "You could really see how did that turn into this gigantic mess? It all started with one tiny XML transformation and then someone copied it over, then someone copied over the whole folder and it grew and grew." - Martin

### The Simple Truth Underneath

> "If you take it apart, there was no logic in there. It was super simple. It was a very straight pipeline. But they paid crazy amount of money for this BizTalk license because they think 'oh, we have all this crazy thing that is going on.' No, you don't." - Martin

## Everyone's an Island Now

### The Fragmentation Problem

> "Everyone's an island. Everyone is speaking or concentrating on different aspects of what they thought was correct and there's no centralization." - Adam

> "You have a collection of independent things that are really hard to connect because everyone's doing their own thing. Everyone's thinking that they have a better way to communicate." - Adam

### The Microsoft Notepad Example

> "Microsoft said we must eat our own dog food. Everyone use co-pilot. And you have Notepad with a security problem. Everything's online connected errors left, right, and center. How can you screw up Notepad? This is how - make everyone an island." - Adam

### The Spotify Claim

> "Spotify claims that no developer has written a single line of code since December. I don't believe that. There's no planning, there's no design, which is required for it to work." - Martin

## Security Theater and Compliance

### PCI-DSS is Theater

> "Your OWASP top 10, PCI-DSS is theater. It's a once a year subjective check by someone that just is nudging and winking at you to say the right thing so that you can get the green boxes to say that you're now safe for credit cards." - Adam

> "If that was true there would be no credit card insurance needed and your credit card interest rates would be much lower. This doesn't really stop the problem. We pay for fraud through these things." - Adam

### AI Certifications Coming

> "I'm laughing because it's bound to happen. We're going to have certifications on Claude and all of this. The people that know will roll their eyes like 'okay these guys are buying the illusion of security.'" - Martin

## Key Takeaways

1. **AI Budgets Are a Distraction** - Companies spending millions evaluating tools instead of doing productive work
2. **Don't Standardize on Any Vendor** - The AI landscape changes monthly; vendor lock-in is the highest risk move
3. **Event Modeling Survives Everything** - Cloud migrations, AI chaos, vendor changes - event modeling is the stable foundation
4. **DCB Saves 50% Development Cost** - Eliminates expensive read models and aggregate boundaries
5. **Coupling is the Root of All Evil** - AI makes it worse with vibe coding; event modeling prevents it
6. **BizTalk Was a Nightmare** - Middleware "convenience" became business logic cancer
7. **Everyone's an Island is Dangerous** - Teams fragmenting on different AI experiments lose ability to collaborate
8. **Security Theater Won't Save You** - Compliance checkboxes don't prevent fraud or breaches
9. **The Cobalt Moat is Gone** - AI will port legacy systems faster than maintaining them
10. **Sagas Disappeared** - Simple to-do list processors replaced an entire category of middleware

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

Read the full blog post: [The Future Doesnt Need Your Perfect Code]({{ "/docs/blog/future-doesnt-need-perfect-code" | relative_url }})

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ "/docs/event-modeling-tutorial" | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices Workshop](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning &rarr;](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
