---
layout: docs
title: Aggregate View
---

# Aggregate View

The Aggregate View gives you a quick overview of the currently defined Aggregates (or Streams) and which Events belong to them.

![Aggregate View]({{ '/assets/images/tutorial/model_view/105.png' | relative_url }})

## Using the Aggregate View

The Aggregate View displays:

**Aggregate Names**
- All defined aggregates in your model
- Organized by bounded context
- Shows aggregate hierarchy

**Associated Events**
- Which events belong to each aggregate
- Event sequence within the aggregate
- Event relationships

**Quick Navigation**
- Click to jump to aggregate on the board
- Filter by context or aggregate type
- Search for specific aggregates

## Troubleshooting

### Aggregate Not Showing
- Ensure events are properly linked to aggregate
- Check aggregate naming consistency
- Refresh Aggregate View

### Too Many Events in One Aggregate
- Consider if aggregate is too large
- Look for events that belong to different lifecycles
- Split into multiple aggregates if needed

### Events Across Multiple Aggregates
- Review aggregate boundaries
- Ensure events belong to one aggregate
- Use integration events for cross-aggregate communication

## Next Steps

- [Data Trail View](/docs/basic-modeling-topics/data-trail-view/) - Trace data origins
- [Context View](/docs/basic-modeling-topics/context-view/) - View context hierarchies
- [Advanced Modeling](/docs/advanced-modeling/) - Advanced modeling techniques
- [Event Modeling Fundamentals](/docs/event-modeling/) - Core concepts
