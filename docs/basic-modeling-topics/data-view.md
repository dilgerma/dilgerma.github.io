---
layout: docs
title: Data View
---

# Data View

This View allows you to adjust the schema for each element.
Provide fields, change namings, types and more.
This screen adjusts for each element type.

![Data View]({{ '/assets/images/tutorial/data_view/300.png' | relative_url }})

**Key Features:**

1. **Expert Mode** - allows you to directly edit the JSON of the Element
2. **[Documentation](#documentation)** - allows you to provide additional information and also see all dependencies directly
3. **[Settings](#configuration)** - allows you to adjust the settings for displaying information on the sticky notes
4. **Re-Validate data** - whenever an arrow shows red, revalidate makes sure, all data is up to date (happens automatically most of the time, but sometimes, manual revalidation is necessary)
5. **Save element**
6. **Adds an "aggregateId" field** to the element
7. **Syncs all copies on the board** - If you have duplicated elements, this makes sure, all copies have the same data
8. **Opens the configuration in a pop up window** for easier editing

## Field Definitions

This section allows you to define new fields and types on each element

![Field Definitions]({{ '/assets/images/tutorial/data_view/301.png' | relative_url }})

1. **First select the field**
2. **Edit fieldname**
3. **Edit field type**
4. **Cardinality** - allows to set a type as a single element of a list of elements
5. **Marks field as "id"**
6. **Marks field as "generated"** - the information completeness check won't complain
7. **Marks field as optional**
8. **Marks field as technical** - can be hidden from stakeholders
9. **Defines the mapping** for the information completeness check
10. **Allows to provide examples** - Examples should be strings or valid JSON for custom types

### Supported Data Types

- String
- UUID
- Boolean
- Double
- Decimal
- Date
- DateTime
- Long
- Int
- Custom

## Expert Mode

Expert Mode allows to edit the JSON of an element directly.

![Expert Mode]({{ '/assets/images/tutorial/data_view/302.png' | relative_url }})

## Configuration

Configuration allows to adjust how information is displayed on sticky notes.

![Configuration]({{ '/assets/images/tutorial/data_view/303.png' | relative_url }})

1. **Always use wide sticky notes** - not square ones
2. **Compact display** - hides type information
3. **Hides technical attributes** - like "ids" from stakeholders
4. **Left-align sticky notes** - default is centered

## Documentation

Documentation allows to provide additional information for an element.

![Documentation]({{ '/assets/images/tutorial/data_view/304.png' | relative_url }})

1. **Provide Documentation**
2. **See element details** and also all dependencies

## Command View

The Command View allows to define command specific information like API Endpoints.

![Command View]({{ '/assets/images/tutorial/data_view/305.png' | relative_url }})

1. **Define an alternative API Endpoint** - by default it's the slice name
2. **Opens the RTP** (Real Time Prototype Configuration)
3. **See the Element Details** and also where information is coming from (in this image, there is no mapping defined for the fields)
4. **Shows the events** this command result in (after successful processing)

## Read Model View

The Read Model View allows to define Read Model specific information like API Endpoints.

![Read Model View]({{ '/assets/images/tutorial/data_view/306.png' | relative_url }})

1. **Opens the RTP** (Real Time Prototype Configuration)
2. **See the Element Details** and also where information is coming from (in this image, we see that both attributes in the Read Model are mapped from the "Customer registered" Event)
3. **Attribute mapping information**
4. **Shows the events** this Read Models depends on

## Next Steps

- [Elements Tab](/docs/basic-modeling-topics/elements-view/) - Working with elements
- [Aggregate View](/docs/basic-modeling-topics/aggregate-view/) - View aggregates
- [Context View](/docs/basic-modeling-topics/context-view/) - View context hierarchies
