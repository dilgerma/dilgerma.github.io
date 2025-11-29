---
layout: docs
title: "Modeling and Implementing Asynchronous Background Processes with Event Modeling"
---

# Modeling and Implementing Asynchronous Background Processes with Event Modeling

**From theory to practice: modeling and implementing automated background processes**

*October 2023 • 15 min read • Event Modeling & Implementation*

[&larr; Back to Blog]({{ '/docs/blog' | relative_url }})

---

## Background

Every complex system can be modeled as a sequence of simple steps. This also applies to modeling and implementing automatically running background processes in the Event Model.

### Why am I writing this article?

The request comes from the Event Modeling community. There is a lot of theory about Event Modeling, Event Sourcing, and how it all works, but very few examples of it. That's why I regularly host webinars where we dive into the code and look under the hood. That's exactly why I'm also writing the book "Understanding Event Sourcing". I heard the cry for help and present here a possible modeling of the described system and, of course, the implementation.

At the end of the article, you'll find the link to the Miro board and the source code on Github.

## What We'll Do in This Article

- We model the software in Miro.
- We translate the model into code.
- We use state-of-the-art technologies (Kotlin 2.x, Spring Boot, Spring Modulith, and Axon).

## What You'll Learn in This Article

- How do you model asynchronous processes with Event Modeling?
- How are the modeled processes translated into code?
- What do business test cases for asynchronous processes look like?

## The Use Case

We have a system that generates various reports in the background on request, for example as PDFs, and ultimately summarizes these reports and delivers them to the user. The generation takes far too long (in the worst case, several minutes), and the user's UI is blocked in the meantime. We will solve this a bit more elegantly.

## The Model

We model in Miro, my tool of choice, since both technicians and the business side quickly find their way in Miro and our Event Modeling tooling is completely based on Miro. Additionally, we are not dependent on third-party tools and their installation, but can in principle start immediately.

Assume reports about the best breweries in different countries are to be created as PDFs. We use the Open Brewery API for this. For this, the user passes the desired countries to our system via an HTTP API call. We generate a Swagger UI directly from the Event Model. You can start the application (linked at the end of the article) directly and play with it.

The application starts with generation and creates one PDF per country, listing all breweries. In the end, all PDFs are summarized and offered as a zip archive for download.

In the first step ("Storming Phase"), we collect the events.

## The First Storyline

The event "Archive Requested" indicates that a new report has been requested. Once the asynchronous background processes have run, the generated reports are stored ("Report Stored"). Once all processes have run through, the archive is created ("Report Archive Stored"). Another step consists of publishing the archive for download ("Archive Published"). We deliberately refrain from error handling to keep the model as simple as possible in the first step.

In the next step, we define Screens, Commands, Processors, and Read Models, as described in the workshop format.

## The Modeled Workflow

Modeling the complete flow takes only a few minutes with the Miro tooling, as the fields can simply be copied between elements. At the same time, the tooling checks that the data is used correctly, with the Information-Completeness-Check.

## Translation into Code

We use the code generator from the tooling and generate slice by slice. Each implemented slice is marked green in the model. We work with a classic Vertical-Slice-Architecture, i.e., each feature is its own package. We additionally use Spring Modulith to monitor the dependencies between packages.

## Tests

Below each slice, we additionally define business test cases as "Given / When / Then" to formulate the business rules understandably for everyone.

**Given:**

- The user has already requested an archive, so "Archive Requested" and "Report Requested" events are stored in the system.

**When:**

- Assume the "Store Report" command is now executed.

**Then:**

- Then we expect that the "Report Stored" event was stored in the system, with the data from the command.

## Implementation in Axon

80% of the code (including tests) can be generated directly from the model. We therefore focus in most cases completely on the business logic. We also generate all events directly from the Event Model. The implementation of the individual command handlers is relatively straightforward.

For example, the "ReportAggregate" processes the `RequestReportCommand` here and stores both the `ArchiveRequestedEvent`, which later also serves as the starting point for automation, as well as the individual `ReportRequestedEvents`.

```kotlin
@CreationPolicy(AggregateCreationPolicy.ALWAYS)
@CommandHandler
fun handle(command: RequestReportCommand): CommandResult {
    AggregateLifecycle.apply(ArchiveRequestedEvent(command.aggregateId, command.reportname))
    command.country.split(",").forEach {
        AggregateLifecycle.apply(ReportRequestedEvent(command.aggregateId, it))
    }
    return CommandResult(command.aggregateId, AggregateLifecycle.getVersion())
}
```

## How Are Automations Implemented?

I basically distinguish between Stateful and Stateless automations:

- **Stateful:** The automation maintains its own state and decides itself how to process incoming data.
- **Stateless:** The automation always loads state live from a projection or the event stream.

For creating the archive, a Stateful-Automation is suitable. The automation collects all "Report Stored" events and matches them with the "Report Requested Events". Once all requested reports have been created, the archive can also be created. The logic is trivial and implemented here.

```kotlin
private fun processArchive() {
    if (requestedCountries.size == processedCountries.size) {
        // All countries processed
        val fileName = zipper.zipFiles(filenames, File.createTempFile(reportname, ".zip").absolutePath)
        commandGateway.send<StoreArchiveCommand>(
            StoreArchiveCommand(aggregateId = this.aggregateId, reportname = fileName)
        )
    }
}
```

The automation checks for each created report whether the number of originally requested reports corresponds to the already created reports. Each time a report is completed, our automation updates its state independently.

```kotlin
@SagaEventHandler(associationProperty = "aggregateId")
fun on(event: ReportStoredEvent) {
    aggregateId = event.aggregateId
    processedCountries.add(event.country)
    filenames.add(event.filename)
    processArchive()
}
```

Once all requested reports have been created, the archive can be created. Technically, this is an implementation of the "TODO Pattern". The TODO is "create archive" and can only be checked off when the `ReportArchiveStored` event is stored in the system.

```kotlin
@EndSaga
@SagaEventHandler(associationProperty = "aggregateId")
fun on(event: ReportArchiveStoredEvent) {
}
```

Technically, we use the Saga integration in Axon, which automatically takes over the persistence of the state.

## Starting the Application

The application can be started directly and operated via the generated Swagger UI.

## Summary

In the next article, we'll look at integration with the UI and how the asynchronous processes can communicate with the UI via Server Sent Events and Axon Subscription Queries.

## Links

- [Github](https://github.com/dilgerma/eventmodeling-automations)
- [Event Model in Miro](https://miro.com/app/board/uXjVKyw_cAI=/?moveToWidget=3458764595145171310&cot=14)
- [Learn Event Modeling](https://eventmodelers.de/)
- [Event Modeling Tooling](https://eventmodelers.de/eventmodeling-tooling)
- [Event Modeling Community](https://eventmodeling.org/)

---

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
