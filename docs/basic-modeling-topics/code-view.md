---
layout: docs
title: Code View
---

# Code View

Use this View to export an existing Model to JSON, Toon or Markdown.

![Code View]({{ '/assets/images/tutorial/code_view/600.png' | relative_url }})

**Key Features:**

1. **Export all elements on the Board.** Be careful with this, as this can use quite a lot of API Calls in Miro. For bigger Model, this might hit Rate Limits. I rarely use this.
2. **If you drew screens using the Screen Drawer**, checking this will export the layouts within the JSON as well for usage by AI for example.
3. **Export the config file as "config.json"**, if you uncheck, the file will be named after the Context. This is only relevant if you use the docker container to store the file locally.
4. **Select a Context.** This will list all Contexts available on the Board.
5. **Here you can just provide an additional comment or prompt**, that can be used by AI. This prompt will be part of the JSON and also sent via the API Calls to Lovable and other systems.
6. **Creates the configuration**
7. **Indicates if the local docker container is running.** You can start it and refresh until the notification turns blue.
8. **Here you'll find instructions** on how to start the local docker container.
9. **[Model Import]({{ '/assets/images/tutorial/code_view/602.png' | relative_url }})**

## Details Section

After exporting the configuration, you can access the details in the "details" section.

![Details Section]({{ '/assets/images/tutorial/code_view/601.png' | relative_url }})

**Details Section Features:**

1. **Details Section after export**
2. **Copy or Download the JSON**
3. **Validation Hints** - typically you'd want to resolve them before starting any Code Generation
4. **Markdown View** (default if all unchecked is JSON)
5. **Toon View** (default if all unchecked is JSON)
6. **Removes all Specs**
7. **Here you see the data to be used by AI or Code generation**

## Model Import

![Model Import]({{ '/assets/images/tutorial/code_view/602.png' | relative_url }})

Model Import allows you to import an existing Model from JSON back onto the Board.

**Import Features:**

1. **Upload an existing JSON Config**
2. **Reference a JSON Config by URL**
3. **JSON Specification** (editable)
4. **Skip Specifications from the Config File** - only import Elements

## Chrome Security Issues

For Some users, especially on Chrome there might be problems with the connection to the locally running Docker Container.
This will be solved - until then you can easily check if you are affected by this.

Open this configuration in Chrome:

```
chrome://flags/#local-network-access-check
```

![Code View]({{ '/assets/images/security.png' | relative_url }})

You can temporarily disable _Local Network Access Checks_ to communicate with the Container.

Be careful, this should only be a temporary Workaround. Make sure to reactivate it, when you are done with your work.

## Next Steps

- [Spec View](/docs/basic-modeling-topics/spec-view/) - Define Given/When/Then specifications
- [Data View](/docs/basic-modeling-topics/data-view/) - Edit element schemas and configurations
- [Elements View](/docs/basic-modeling-topics/elements-view/) - Working with elements
