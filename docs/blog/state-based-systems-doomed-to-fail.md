---
layout: default
title: State-Based Systems Are Doomed to Fail
---

<div class="blog-post">
  <a href="{{ '/docs/blog' | relative_url }}" class="blog-back-link">&larr; Back to Blog</a>

  <div class="blog-post-header">
    <h1>State-Based Systems Are Doomed to Fail</h1>
    <p class="blog-post-subtitle">Why adding features accelerates system decay and how understanding events changes everything</p>
    <div class="blog-post-meta">
      <span>November 9, 2025</span>
      <span>12 min read</span>
      <span>Architecture</span>
      <span><a href="https://www.linkedin.com/pulse/state-based-systems-doomed-fail-martin-dilger-yzaff/?trackingId=jcwtcvwHRQKqCIAotG1Xig%3D%3D" target="_blank">Also on LinkedIn</a></span>
    </div>
    <p class="blog-post-author">By Martin Dilger</p>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/state-based-systems.jpg' | relative_url }}" alt="State-Based Systems Are Doomed to Fail">
  </div>

  <div class="blog-post-content">
    <p class="lead">Here's something counterintuitive: the more features you add to your system, the faster it rots. At least that applies if your system is state-based.</p>

    <p>Not because of bad code. Not because of bad developers. It happens because of something fundamental about how we design systems.</p>

    <h2>The Pattern I've Seen Everywhere</h2>
    <p>I've worked on countless projects over the years. Different domains, different teams, different tech stacks. But the same story plays out every time: active development accelerates decay.</p>

    <p>The more you build, the worse it gets.</p>

    <p>Most teams think they're doing something wrong. They blame their architecture choices, their testing practices, their documentation. They think if they just worked harder, planned better, refactored more often - the problem would go away.</p>

    <p>They're wrong.</p>

    <p>The rot isn't a bug. It's a fundamental property of state-based design.</p>

    <h2>The Core Problem: State as Frozen Understanding</h2>
    <p>State represents your understanding of the system at ONE point in time.</p>

    <p>Your database tables. Your domain model. The contexts you've carved out. They're all snapshots - frozen representations of what you understood about the business when you built and designed them.</p>

    <p>But here's the thing: business requirements evolve. Your understanding changes. You learn new things about the domain.</p>

    <p>And state-based systems can't adapt easily.</p>

    <p>Sure, you can make small adjustments. Add a nullable column here. Change a field type there. Tweak a relationship. But you can't fundamentally change how the system operates. Not without investing massive amounts of time and budget to restructure everything. Both of which you never have in a project.</p>

    <h2>The Unplanned Requirement: Where Rot Accelerates</h2>
    <p>The worst is when a requirement comes that you didn't plan for. And it always does.</p>

    <p>The first time I saw this and clearly noticed the pattern was on an e-commerce project. We had a clean product model - nice normalized tables, clear domain boundaries. Everything made sense.</p>

    <p>Then they wanted to sell new product types. Physical products, sent out with every order. Each type had completely different attributes.</p>

    <p>The solution seemed obvious: add some new columns, some properties there. Some products have technical details, some don't. Some have shipping dimensions, some don't. Some have download links, some don't.</p>

    <p>It looked innocent at first.</p>

    <h2>The Real Rot: The Gap Between Models</h2>
    <p>But here's what happens with those nullable columns: suddenly your domain model in code looks different from your persistence model.</p>

    <p>Now you need to understand TWO models. And you need to keep them in sync manually.</p>

    <p>And even though your Object-Relational Mappers seem to help at first, they make matters worse.</p>

    <p>Even more worse than that - you can't enforce your business rules at the data level anymore. Some products NEED technical details. Some can't have them at all. But the database doesn't know that. It just sees nullable columns.</p>

    <p>So you push those constraints into your code. Validation logic scattered across services. Tests trying to catch invalid combinations. Implicit rules that developers need to remember.</p>

    <p>More cracks in the architecture with every new feature you add.</p>

    <h2>The DDD Illusion: Failing Slower, Not Succeeding</h2>
    <p>At some point, I incorporated Domain-Driven Design. I loved it. Bounded contexts. Aggregate roots. Ubiquitous language. The whole nine yards.</p>

    <p>And it helped. It absolutely made things better.</p>

    <p>But here's what I realized: DDD makes your system "less likely to fail." That's not the same as making it "likely to succeed."</p>

    <p>DDD is about communication, making things smaller. Smaller contexts. Smaller models. Smaller blast zones when things go wrong.</p>

    <p>All great things. But if you stay in a state-based world, it won't solve your problems for long.</p>

    <p>It doesn't change the fundamental (false) assumption that you can find THE correct model. THE right boundaries. THE proper contexts.</p>

    <p>It just assumes you can do it at a smaller scale.</p>

    <p>The problem is - there is no ONE model for your system. There are many. Even within a single bounded context.</p>

    <p>And without the flexibility to change those boundaries rapidly, you'll still fail. Just slower.</p>

    <p>The "problem" of course is not DDD, the problem is State.</p>

    <h2>The Inescapable Trap: A Concrete Example</h2>
    <p>Let me show you the trap with a real example.</p>

    <p>I recently worked on a system for a law firm. They needed to manage cases. Each case involved different types of people:</p>

    <ul>
      <li>Private persons (clients, witnesses)</li>
      <li>Lawyers (from their firm or external)</li>
      <li>Authorities (courts, police, government agencies)</li>
    </ul>

    <p>Each person type looked completely different. Private persons have addresses and contact info. Lawyers have bar numbers and specializations. Authorities have jurisdictions and official designations.</p>

    <p>So what do you do?</p>

    <h3>Option 1: One Table with Nullable Columns</h3>
    <p>You create a single "Person" table. Most fields are nullable because they only apply to certain person types.</p>

    <p>Now you have the same problem as the e-commerce example. Your business rules can't be enforced at the database level. A lawyer MUST have a bar number. An authority MUST have a jurisdiction. But the database doesn't know that.</p>

    <p>So you scatter validation logic across your codebase. You write tests to catch invalid combinations. You hope developers remember the rules.</p>

    <h3>Option 2: Separate Tables Per Type</h3>
    <p>Maybe you're smarter than that. You create three tables: PrivatePersons, Lawyers, Authorities. Each table has exactly the fields it needs. No nullables. Clean structure.</p>

    <p>But now you've optimized for ONE use case - creating and updating individual person types.</p>

    <p>You've made every other use case harder.</p>

    <p>That was THE fundamental problem in all state-based systems I've worked on. It's all trade-offs. As an architect, I was constantly looking for the least problematic one.</p>

    <p>Want to list all people involved in a case? Now you need to join three (and many more) tables. Want to search across all people? Three queries, then merge the results. Want to count how many people are on a case? Sum across three tables.</p>

    <p>Expensive queries. Complex logic. More room for bugs.</p>

    <h2>The Attempted Escape: Multiple State Representations</h2>
    <p>Maybe you think you can have your cake and eat it too. Keep the normalized structure for writes, but create denormalized views for reads.</p>

    <p>Materialized views. Read models. CQRS patterns.</p>

    <p>But you've just created a NEW trap. You just distributed your State.</p>

    <p>Now those representations have to stay in sync. Constantly. If they drift, your system gives different answers depending on which representation you query.</p>

    <p>And you're still coupled. Change the underlying tables, and you might break all the views that depend on them. So instead of giving you freedom to adapt, it gives you just a slightly longer chain. Add a new person type, and you need to update the normalized structure AND all the denormalized views.</p>

    <p>You're still trapped.</p>

    <h2>The Fundamental Truth</h2>
    <p>Here's what I've learned after seeing this pattern repeat across dozens of projects:</p>

    <p><strong>No amount of clever design solves this. Never.</strong></p>

    <p>It's not a skill problem. It's not an experience problem. It's inherent to state-based design.</p>

    <p>In a state-based system, you're forced to choose ONE physical structure for your data. That structure optimizes for certain operations while penalizing others.</p>

    <p>There is no perfect solution. There's only trade-offs.</p>

    <p>You can make the trade-offs smaller with DDD. You can make them more manageable with good design patterns. But you can't eliminate them.</p>

    <p>The fundamental assumption is wrong. There is no single representation that works. Not even within the perfect designed bounded context.</p>

    <h2>What I Realized</h2>
    <p>DDD makes things smaller. It reduces the likelihood of catastrophic failure (by a lot if done right). It gives you smaller, more manageable problems.</p>

    <p>Instead of every new requirement affecting the whole system, you now have some requirements affecting some parts of the system.</p>

    <p>But without the flexibility to rapidly change your fundamental models as your understanding evolves - without the ability to serve some use cases without compromising all others - you're still on a path to eventual failure.</p>

    <p>Just a slower one.</p>

    <div class="info-box">
      <p><strong>Important:</strong> I don't say you can't build state-based systems and maintain them over time. Beautiful and massive systems have been built that way. I say that the longer you work on these systems, the more time and money you need to allocate to keep these systems maintainable. Flexibility is not baked into the architecture.</p>
    </div>

    <p>I don't want to design systems that are less likely to fail. I want to design systems that are likely to succeed. How about you?</p>

    <h2>Watch the Video</h2>
    <p>There is also a <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank">video on YouTube</a> available covering these concepts.</p>

    <h2>Next Steps</h2>
    <p>Ready to explore an alternative approach? Learn how <a href="{{ '/docs/event-modeling' | relative_url }}">Event Modeling</a> provides the flexibility to serve multiple use cases without the trade-offs inherent in state-based design.</p>
  </div>
</div>
