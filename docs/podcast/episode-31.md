---
layout: docs
title: Episode 31 - Roblox Event Modeling, AI-Powered Programming, and Git Issue Tracking
---

<div class="blog-post" markdown="1">

[&larr; Back to Podcast]({{ '/docs/podcast' | relative_url }}){: .blog-back-link}

  <div class="blog-post-header">
    <h1>Episode 31 - Roblox Event Modeling, AI-Powered Programming, and Git Issue Tracking</h1>
    <p class="blog-post-subtitle">Martin and Adam discuss teaching kids programming with AI, event modeling a Roblox game, Linus Torvalds' vision for unified issue tracking, and completing a massive 210-slice project</p>
    <div class="blog-post-meta">
      <span>Event Modeling Podcast</span>
      <span>Episode 31</span>
      <span>AI Programming, Git Issues & Project Scale</span>
    </div>
  </div>

  <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zCYW5r2WI6w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="blog-post-content" markdown="1">


## Episode Summary

In this episode, Martin and Adam explore how AI is making programming accessible to kids again, the importance of centralized issue tracking in Git repositories, and lessons learned from completing a 210-slice event sourced project. They discuss Martin's experience teaching his son Roblox development using Claude Code, Adam's 2018 conversation with Linus Torvalds about issue tracking, and how event modeling makes even last-minute feature requests trivial to implement.

## Main Discussion Points

- **Teaching Kids with AI** - How AI tools bring back the joy of simple, immediate feedback for young programmers
- **Event Modeling Roblox Games** - Starting game development with event modeling, even for kids
- **Linus Torvalds on Issue Tracking** - Seven years after Adam's conversation, Torvalds is publicly addressing unified Git issue tracking
- **210-Slice Project Completion** - Martin's massive legal tech project wraps up stress-free thanks to event modeling
- **Template Engine in 4 Hours** - Last-minute requirement solved elegantly with CQRS architecture
- **Context Centralization** - Why scattering information across tools kills AI effectiveness

## Teaching Kids Programming: The AI Revolution

Martin started his son's school vacation with a Roblox game development project, and guess what they did first?

> "Guess what was the first thing we did when we planned the game? We did event modeling. Yeah, we did. My son didn't like it. So, he wanted to get into coding, but he got the idea." - Martin

### Why AI Changes Everything for Kids

Adam shares his son's perspective on learning programming:

> "He's smart. He sort of saw AI around the corner. He goes, 'I don't know if I'm going to go, you know, you're not going to force me to memorize all this stuff.' So he's, you know, just I just showed him some like the Yatsi game I vibe coded and he was like, 'Oh yeah, I'm going to vibe code my own stuff.'" - Adam

The problem AI solves:

> "There was a small enough instruction set. There wasn't like a thousand different JavaScript frameworks. There wasn't like a hundred different languages to choose from. On the Commodore 64, well, you only had basic or assembly. And that's all and that's what everyone uses and the instruction set is small and you just go and build." - Adam

### Martin's Experience Teaching

> "We have big plans. We have big plans with the game. He's using AI. He's talking to Claude Code and everything and he's building the game and it works beautifully well. It brought back what I felt when I started programming as a kid." - Martin

The transformation:

> "You want to see something, you ask AI how to do that. It shows you and I personally I learn a lot by that. Just it gives you the code, you look at the code and you immediately realize, okay, this is how this platform works. If you would start from scratch with this, it would have taken us a week to just get this thing going. Now we have a running game after two hours or so." - Martin

### The Abstraction Layer Advantage

> "Instead of scouring Google for 4 hours which can turn someone off entirely from programming. It's like why do I need to research all of this? I want to see this happen and you can jump in at the abstraction layer you most comfortable with." - Adam

## Linus Torvalds and the Git Issue Tracking Problem

Adam reveals a fascinating connection between a 2018 conversation and current developments.

### The 2018 Conversation

> "I had a discussion with Linus Torvalds in 2018 that now he's publicly talking about finally. I met him at the Linux summit in Vancouver in 2018. I sat together with him to discuss this and waited for him to finish up his notes." - Adam

What they discussed:

> "I basically just talked about Git and version control systems with him. I told him that Git is the reason to finally organize projects properly. We're specifically talking about issue tracking. I said look wouldn't it be better if we just had a common format just like a readme file but an encoded standard way to have the issues travel with the repo." - Adam

### The Problem with Current Tools

Current issues with dispersed information:

- Issue tracking in Jira, GitHub Issues, Bugzilla, Redmine, etc.
- Information dies when services close
- Context disconnected from code changes
- No single source of truth

Adam's vision:

> "Getting everything you know doing a git pull and a fetch you're getting all of the stuff from upstream including any changes any new bugs etc. And usually, you know, issue trackers are additive only. It's an accounting system. So, it's built for event sourcing." - Adam

### Torvalds' Current Stance

From a recent video Adam discovered:

> "I'd love to see more bug tracking stuff. Everybody is doing that. I'd love to see that be more unified because right now it's very fragmented where every single hosting site does their own version of it. I do wish there was a more unified thing where bug tracking and issues in general would be something that would be more shared." - Linus Torvalds

Adam's reaction:

> "Once Linus Torvalds sees it as a problem, it's going to get fixed. And it's going to get fixed like he fixed source control, which is awesome. I'd like to think I had a little bit of something to do with that because someone talked to him for half an hour about the problem." - Adam

## Event Modeling for Issue Tracking

How event modeling solves the issue tracking problem differently.

### Bugs as Visual Artifacts

> "The way we track bugs is on the event model. I have a bug layer on an event model where if you turn that layer on you can see just how many bugs. They put spots on the different parts of the event model. So it looks like your system is sick and the bugs are the little red dots." - Adam

In Mural, bugs are comments:

> "It's in the form of comments. Anything unresolved is an open bug. These issues you can see physically on the board are part of the core workflow, which means they're higher priority. You have a lot more context than just guessing like oh it's a high severity bug." - Adam

### Automatic Context

All these questions are answered instantly:

- Which part of the system?
- Which component?
- What workflow?
- Steps to reproduce?

> "You have all that context the minute you look at your event model. A doctor's looking at a patient and you can see there's a measles outbreak here. There's a lot of problems here on in this area. This workflow is causing issues." - Adam

## The 210-Slice Project: Lessons Learned

Martin shares insights from completing his largest event modeling project.

### Project Scale

- **210 slices** total
- **4 developers**
- **2 stakeholders**
- Legal tech domain (document management)
- Built on PostgreSQL with Axon Framework

### The Experience

> "I really have to say, the longer I work with event modeling, the more relaxed these projects become. This was such a relaxing project. There was absolutely no stress at all. At any point in time, we knew exactly what to do. This was really beautiful." - Martin

### The Last-Minute Template Engine

One week before launch, a new requirement emerged:

> "The stakeholder came up with one last requirement before the launch. Guess what this requirement was? Oh, by the way, I didn't mention that before. We need templating. We need a template engine and the users need to be able to upload templates with placeholders and basically they need to have access to all information available in the platform." - Martin

This would normally break a project:

> "That is something that typically breaks your architecture because you couldn't plan for it. One developer said, okay, we have this beautiful CQRS architecture. We have all this information already available in tables. Let's just query all those tables. This would have broken the project immediately overnight." - Martin

### The Event Sourcing Solution

Time to implement: **4 hours**

> "For us it was a 4-hour thing building the whole templating engine. In a normal architecture this would have broken the project. No way you can realize these requirements where you need access to all information, reporting dashboards and stuff like that. It's really hard to implement them if you can't plan for them and they always come." - Martin

The approach:

> "Our solution was so simple. We had these templates and we had these template variables in those templates and each and every template variable became one read model. We had about 20 variables. Okay, let's build 20 read models. We have four developers. Let's distribute it, four hours and we were done." - Martin

### Why Traditional Systems Fail Here

> "If you introduce it wrongly and you access all this information, you suddenly you can't change anything because you change one table and your whole templating is broken and you don't even realize it." - Martin

With immutable events:

> "You have information in its purest form and therefore I can transform it to whatever I need. You don't have information in its purest form and it's subject to abstractions because you thought that this schema was good to represent it. You've poured cement around your feet." - Adam

## The Context Problem: Why AI Needs Centralization

Martin observes a troubling trend:

> "Just in the last few weeks I've been thinking about this because what I see more and more is people getting a little bit crazier about MD files in the repo. Put a lot of information into markdown files in the repo. This really gets a little bit crazy and the interesting thing is most of that information is redundant because it's already available in Confluence. It's available in your bug tracker." - Martin

The problem:

> "What people now doing is they take this information that is available anyways and put it back into the repo writing tons and tons of markdown files so AI can access it. This is far from ideal. If you look at certain repos this already becomes total chaotic. You have tons and tons of markdown files and this doesn't make any sense to me. It's like Confluence in your git repo." - Martin

Adam's take:

> "AI is kind of forcing the hand of people to say you need a single source of truth. Now what are you going to do? Make an MCP server for all the crap that you have? It won't work. I don't want an MCP server for this that or the other. I want it to not be an issue at all." - Adam

### Martin's Solution: Slice Files in Git

> "Whenever I work on a new slice or if I work on a bug on a slice, I make an export. My event modeling toolkit allows me to export the event model and what gets created in the repo is a slice file for each and every slice. So whenever there is a change in a slice a new .slice file is exported which is just JSON." - Martin

The benefits:

> "If I have a bug I know exactly which slices were affected by this bug. The bug fix is one commit and I have three new slice files. So in my history I see exactly okay this was this bug, these slices were affected. This was the state of the slice back then. So basically I have the whole history of the event model in my git history. If you now ask Claude something, the whole context is available." - Martin

Automatic bug resolution:

> "If you have a slice that has a bug because you referenced that slice, but then in your work you actually replace the slice with something else. Your automation could say, 'Hey, you've deleted a slice that used to exist because you're fundamentally changing it.' It can say did you in fact remove the problem in this bug? You can say yes. Okay. So now it can automatically just close the bug for you." - Adam

## Additional Topics

### The Event Modeling Book Update

Adam continues progress with his ghost writer:

> "I had another meeting with my ghost writer on Friday. One of the things is where what is the booklet supposed to be. I decided to have just something that answers the quick questions that we keep hearing on the discord. How do you do an automation? Where should the data be? That same style that handbook is written for domain driven design by Eric Evans." - Adam

Two-phase approach:
1. Quick reference booklet (like Eric Evans' DDD Reference)
2. Full book with stories behind decisions

### Event Modeling Clones

Martin's perspective on alternative approaches:

> "I saw a lot of these event modeling clones coming up all a little bit different with different names. Whenever I ask almost always it's like okay they didn't really understand event modeling or they did not even try. Changing it always comes with a cost. Almost always it gets much more complicated." - Martin

Why event modeling works:

> "Event modeling works because it's so simple. That's the only reason why it's so powerful. That's the reason why I'm using it. I like simple stuff. I like things that are simple. Whenever you introduce new concepts, it gets more complicated. There is a reason why event modeling is like event modeling. You work with it for what 10 years until you made it a thing. It didn't come from nowhere. It came out of practice." - Martin

Adam's evolved perspective:

> "I don't care at this point. I think you're newer to event modeling where it still irritates you. Believe me, it was a lot worse 8 years ago. It hasn't killed event modeling because it was a lot worse and all those things are there, but they're not encroaching on event modeling." - Adam

### Old Tech Books and AI

Adam on CSS learning:

> "Just before this AI stuff, I bought a really good book on how to walk you through all of the latest stuff on all the nice effects and animations and web pages. And it just became totally not necessary almost overnight. Not the book is bad, but these different libraries will be totally gone or replaced by something better in a matter of five years." - Adam

Martin agrees:

> "That's a good thing. The industry made that a necessity. Just too many people producing too many frameworks too often and it was stifling people." - Martin

## Key Takeaways

1. **AI Lowers the Programming Entry Barrier** - Kids can jump in at any abstraction layer and get immediate feedback without drowning in framework research

2. **Event Model Before Coding** - Even for simple Roblox games, starting with an event model provides structure that makes AI more effective

3. **Issue Tracking Belongs in Git** - Linus Torvalds agrees with Adam's 2018 vision - issues should travel with the repository

4. **Bugs on the Event Model** - Visual representation provides instant context about severity, workflow, and reproduction steps

5. **Event Sourcing Handles the Unexpected** - A 210-slice project absorbed a major template engine requirement in just 4 hours

6. **Pure Events Enable Flexibility** - When data is in its immutable form, any transformation becomes trivial

7. **Context Must Be Centralized** - Scattering information across tools kills AI effectiveness and creates redundant markdown chaos

8. **Slice Files in Git History** - Exporting slices as JSON files provides complete event model evolution context for AI

9. **Event Modeling Simplicity is the Power** - Resist the urge to complicate with new concepts; simplicity is what makes it work

10. **No Special Database Needed** - Even a 210-slice system runs fine on PostgreSQL with proper architecture

<script async data-uid="bef5bb7fb4" src="https://nebulit-gmbh.kit.com/bef5bb7fb4/index.js"></script>

<div class="info-box" markdown="1">
### Ready to Learn More?

Explore Event Modeling and Event Sourcing in depth with our [tutorials]({{ '/docs/event-modeling-tutorial' | relative_url }}){:target="_blank"} and [book](https://www.eventsourcingbook.com){:target="_blank"}.

**[Event Sourcing with Slices on January 20/21, 2026](https://nebulit.de/en/eventsourcing-workshop){:target="_blank"}**
</div>

<div class="course-cta" markdown="1">
### Want to learn how to apply Event Modeling and Event Sourcing in practice?

Follow the Online Course **"Implementing Eventsourcing"** - comes with a **Lifetime Event Modeling Toolkit License**.

[Start Learning →](https://www.eventsourcingcourse.com){:target="_blank" .cta-button}
</div>

  </div>
</div>
