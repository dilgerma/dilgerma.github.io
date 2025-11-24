---
layout: docs
title: If You Can't Add Developers and Go Faster, Adding AI Agents Won't Work Either
---

<div class="blog-post">
  <a href="{{ '/docs/blog' | relative_url }}" class="blog-back-link">&larr; Back to Blog</a>

  <div class="blog-post-header">
    <h1>If You Can't Add Developers and Go Faster, Adding AI Agents Won't Work Either</h1>
    <p class="blog-post-subtitle">The future of software isn't about coding speed - it's about solving the coupling problem we've ignored for decades</p>
    <div class="blog-post-meta">
      <span>November 12, 2025</span>
      <span>12 min read</span>
      <span>AI & Architecture</span>
    </div>
  </div>

  <div class="blog-post-featured-image">
    <img src="{{ '/assets/images/blog/ai-agents-brooks-law.png' | relative_url }}" alt="AI Agents and Brooks' Law">
  </div>

  <div class="blog-post-content">
    <p class="lead">I stayed up late reading <strong>Adam Dymitruk</strong>'s original article on Event Modeling. The first time through, it didn't fully click. But the next day, something shifted. I couldn't stop thinking about it. By evening, it hit me:</p>

    <blockquote>
      <p>If slicing the system is done using these diagrams, if we cut it down correctly, and if the slices are truly independent, this solves most of the problems we face on a fundamental level. Can this actually work?</p>
    </blockquote>

    <p>That was the moment everything changed for me.</p>

    <p>For years, I'd seen the same architectural sins repeated everywhere - modules far too big, coupling running wild, system design far too shallow. I <em>knew</em> what good looked like, but I had no blueprint to share. Just gut feeling. Just experience that couldn't scale beyond me.</p>

    <p>Event Modeling gave me the instruction manual I'd been searching for.</p>

    <p>And now, as AI agents flood into software engineering, I'm watching everyone make the same mistake: they think faster coding means faster shipping. It doesn't. And if you don't understand why, you're about to waste a lot of time and money.</p>

    <h2>Brooks' Law Doesn't Care About Your AI</h2>

    <p>Frederick Brooks told us in 1975: <strong>"Adding developers to a late project makes it later."</strong></p>

    <p>We've known this for nearly 50 years. It's a fundamental rule. Yet somehow, when AI agents entered the picture, everyone forgot. How come?</p>

    <p>The promise is seductive - agents code faster than humans, so if we just add more agents, we'll ship faster. Right?</p>

    <p><strong>Wrong.</strong></p>

    <p>The problem was never coding speed. It was <strong>coupling</strong>.</p>

    <p>When your system is tangled - when modules share state, when changes ripple unpredictably, when one team's work blocks another's - every new person you add creates more coordination overhead. More meetings. More merge conflicts. More "wait, who's working on that?" conversations.</p>

    <p>Brooks' Law kicks in not because humans are slow, but because badly designed systems create coordination tax that scales faster than productivity.</p>

    <p>And here's the kicker: <strong>AI agents don't magically fix coupling. They make it worse.</strong></p>

    <p>At least humans have Slack channels, hallway conversations, and the ability to say "hey, I'm touching that file too - let me know when you're done." Agents don't have that informal communication layer. They just execute. And when two agents step on each other's toes in a coupled codebase, you get chaos. And if you've not been living under a rock, you ran into this in one of your PoCs most probably.</p>

    <p class="highlight-box"><strong>If you can't add developers and go faster, you won't get velocity from agents either.</strong></p>

    <h2>We're Still Writing Code Like It's 1960</h2>

    <p>Let me be blunt: we're still putting human thought into text files, line by line, the same way programmers did in the 1960s.</p>

    <p>This made sense when humans were the bottleneck. When typing speed and syntax knowledge mattered. When "10x engineers" were the ones who could hold the most complexity in their heads.</p>

    <p>But that era is over.</p>

    <p><strong>You can't outpace an agent.</strong></p>

    <p>No way. Not going to happen. They will code faster and better than you. I don't write much code anymore manually, and in five years, I don't think most engineers will either. It's not a crucial skill anymore.</p>

    <p>The hard part of engineering was never writing the code. It was <strong>solving the right problem</strong>.</p>

    <p>And solving the right problem is a <em>human</em> problem. Because humans are terrible at articulating what they actually need. Requirements are vague. Language is imprecise. Business stakeholders say one thing and mean another.</p>

    <p>AI can't solve unclear problems. It can only execute clear instructions.</p>

    <p>So the real question isn't "how do we code faster?" It's <strong>"how do we get clear on <em>what</em> to build, so the AI can actually build it?"</strong></p>

    <p>That's the shift. From writing code to directing the new workforce - human and AI alike.</p>

    <h2>The Missing Instruction Manual for Modularity</h2>

    <p>Everyone's suddenly talking about modularity now that AI is here, as if it's a new concept.</p>

    <p>I've been talking about this every single day for two years.</p>

    <p>Modularity has always mattered. The problem is, no one ever told you <em>how</em> to do it. What is a "module"? How do you cut boundaries? Where do you draw the lines? How big or small can/should it be?</p>

    <p>For most teams, it's gut feeling. Experience. Trial and error. And it doesn't scale.</p>

    <p><strong>Event Modeling - specifically, the concept of <em>slices</em> - gives you the blueprint.</strong></p>

    <p>A slice is a small, independent unit of functionality. It has clear inputs, clear outputs, and no hidden dependencies. You can hand a slice to a developer (or an agent) and they can build it without needing to understand the entire system.</p>

    <p>This is what kept me up a whole night when I understood it. I couldn't sleep. It was groundbreaking.</p>

    <h3>Here's why slices work:</h3>

    <ul>
      <li><strong>Clear boundaries:</strong> True independence. No shared state. No coordination tax.</li>
      <li><strong>Simple rules:</strong> Anyone can follow them. You don't need a PhD in system design.</li>
      <li><strong>Perfect for AI:</strong> Agents have the same cognitive limits as humans. You can't throw an entire codebase at an agent and expect it to land. It's overwhelming. But a slice? That fits in context. That's executable.</li>
    </ul>

    <p>Slices are the answer to modularity that the industry has been handwaving about for decades.</p>

    <h2>"Need it done faster? Just add more people."</h2>

    <p>Every project manager has said this at some point. And every engineer has rolled their eyes, because we know it doesn't work.</p>

    <p>But with slices, it actually does.</p>

    <p>When slices are truly independent - no shared state, no tangled dependencies - you <em>can</em> parallelize. You can add more developers. You can add more agents. And you actually get velocity.</p>

    <p>Because there's no coordination tax. One person (or agent) working on Slice A doesn't block or interfere with someone working on Slice B.</p>

    <p>This is the factory floor model applied to software.</p>

    <p>In manufacturing, machines took over the heavy lifting. Humans shifted to controlling the machines - setting them up, designing the workflows, making sure the output was right.</p>

    <p>We're seeing the same thing now in software engineering.</p>

    <p>But just like in a factory, you can't hit a button and expect a finished, sellable product to come out the other side. The machines need clear instructions. Careful preparation. Design.</p>

    <p>That's what Event Modeling provides. The design. The instructions. The blueprint that makes parallelization possible.</p>

    <h2>The Three-Way Communication Protocol</h2>

    <p>Event Modeling isn't just a diagram format. It's a communication tool that works across three dimensions:</p>

    <h3>1. Human-to-Human</h3>

    <p>Event Models bring business stakeholders and engineers into alignment. You stop arguing about <em>how</em> to build something and start clarifying <em>what</em> needs to happen.</p>

    <p>The model reads like a story. If the story doesn't make sense, the system won't work. And anyone - technical or not - can spot gaps in the story.</p>

    <h3>2. Human-to-AI</h3>

    <p>This is where it gets powerful.</p>

    <p>My workflow today looks like this:</p>

    <ol>
      <li>Model the slice using Event Modeling</li>
      <li>Generate the code skeleton using static code generation</li>
      <li>Use Given-When-Then scenarios as inline comments - these become the guardrails for AI</li>
      <li>Let the AI (like Claude Code) implement the business logic within those guardrails</li>
    </ol>

    <p>The Given-When-Thens aren't just tests. They're instructions. They tell the AI exactly what the system should do in each scenario. And because the slice is small and focused, the AI doesn't get lost.</p>

    <h3>3. AI-to-AI</h3>

    <p>Here's where it gets really interesting.</p>

    <p>I'm using AI to <strong>do the Event Modeling itself</strong> now. I feed it a transcript from a requirements meeting, or I give it a legacy codebase, and I ask it to generate the Event Model.</p>

    <p>The AI does a first pass - usually 60-70% accurate. Then humans come in to verify, correct, and fill in the missing details.</p>

    <p>Once the model is validated, another AI agent takes over and generates the new code.</p>

    <p>This is a perfect blueprint for legacy system modernization. And it's faster than anything I've seen before.</p>

    <p>But it only works because the Event Model provides structure. Without that structure, you're just asking AI to guess.</p>

    <h2>The Real Problem Was Never the Code</h2>

    <p>Let me say it again: <strong>humans are terrible at articulating what they need.</strong></p>

    <p>Requirements are "wishy-washy." Language is imprecise. Business stakeholders think they know what they want until you start building it, and then everything changes.</p>

    <p>This is why so many projects fail. Not because the code was bad, but because we built the wrong thing.</p>

    <p>AI doesn't solve this problem. AI can't read minds. It can only execute clear instructions.</p>

    <p class="highlight-box"><strong>Focus on the WHAT, not the HOW.</strong></p>

    <p>If the <em>what</em> is clear, the <em>how</em> doesn't matter. And sooner or later, AI will handle the <em>how</em> without human intervention.</p>

    <p>But the <em>what</em>? That's still on us.</p>

    <p>Event Models force that clarity. They make you articulate the problem in a way that's precise enough for an AI to execute.</p>

    <p>And when you read an Event Model, it should make sense as a story. If something feels off - if there's a gap, if the sequence is weird, if an event doesn't belong - you catch it.</p>

    <p>You don't need to be technical to validate a model. You just need to ask: <strong>Does this story make sense?</strong></p>

    <p>That's a skill that needs to be trained. It's not automatic. But it's learnable. And it's the skill that will matter most in the next five years.</p>

    <h2>Where We're Headed (5 Years Out)</h2>

    <p>I don't think we'll be writing much code in five years. I'm barely writing any today.</p>

    <p>The role that survives - the role that <em>thrives</em> - isn't the one writing code line by line. It's the one solving the right problem and directing the AI workforce.</p>

    <p>Architects, team leads, and engineers are shifting from coders to:</p>

    <ul>
      <li><strong>Modelers and validators:</strong> Creating and verifying Event Models that become the blueprint for agents</li>
      <li><strong>Editors of AI-generated models:</strong> Reviewing what the AI produces and filling in the gaps</li>
      <li><strong>Guardrail designers:</strong> Writing the Given-When-Thens that keep agents on track</li>
    </ul>

    <p>Juniors are struggling to break in because the grunt work - the "just write this function" work - is disappearing. The new baseline skill is knowing how to chunk problems into slices, verify models, and orchestrate agents.</p>

    <p>And honestly? That's a better use of human intelligence anyway.</p>

    <h2>The Opportunity (and the Warning)</h2>

    <p>Everyone's suddenly talking about modularity because of AI. But most people are getting it wrong.</p>

    <p>They think modularity is just about "breaking things into smaller pieces." It's not. It's about cutting boundaries in a way that eliminates coupling. And if you don't understand how to do that, adding agents just creates more chaos.</p>

    <h3>The companies that win in the next five years will be the ones who:</h3>

    <ul>
      <li>Learn to slice systems correctly</li>
      <li>Communicate clearly across business and engineering</li>
      <li>Direct their AI workforce with precision</li>
    </ul>

    <h3>The companies that lose will be the ones who:</h3>

    <ul>
      <li>Think faster coding equals faster shipping</li>
      <li>Throw agents at coupled codebases and wonder why nothing gets better</li>
    </ul>

    <p>Brooks' Law is still true. Coupling still kills velocity. The only difference now is that the consequences come faster.</p>

    <h2>The New Industrial Revolution Is Here</h2>

    <p>In manufacturing, machines took over the heavy work. Humans didn't disappear - they shifted to controlling the machines.</p>

    <p>The same thing is happening in software now.</p>

    <p>Event Modeling is the control interface for your AI workforce. It's how you tell the machines what to build. It's how you verify they built it right. It's how you coordinate multiple agents without them stepping on each other.</p>

    <p>The future isn't about <em>writing</em> code faster.</p>

    <p>It's about <em>solving problems</em> better.</p>

    <p>And for that, you need a blueprint.</p>

    <div class="info-box">
      <h3>Ready to Learn More?</h3>
      <p>My book <a href="https://leanpub.com/eventmodeling-and-eventsourcing" target="_blank"><strong>"Understanding Eventsourcing"</strong></a> gives you the blueprint. But reading alone will take your team too long.</p>
      <p>I can teach your team how to build these blueprints faster and skip the whole trial-and-error phase. Let's have a <a href="https://outlook.office365.com/book/NebulitGmbH@nebulit.de/" target="_blank">chat</a> about how this applies to your project.</p>
      <p><strong>Still 2 Team-Spots left for the <a href="https://training.nebulit.de/eventmodeling-workshop/" target="_blank">Event Modeling Workshop</a> this month.</strong></p>
    </div>

  </div>
</div>