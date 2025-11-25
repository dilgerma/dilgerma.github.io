---
layout: docs
title: Slice View
---

# Slice View

This View only shows something if you select a slice.

You can create slices by selecting the elements that should belong to a slice and clicking (5)
This will draw a border around these elements. Whatever is inside the border belongs to the slice.

![Slice View]({{ '/assets/images/tutorial/slice_view/400.png' | relative_url }})

**Key Features:**

1. **Move selected elements** - left, right, up, down
2. **Increase the slice size vertically**
3. **Select all slices to the right** - have to be assigned to a Context
4. **Select the slice and all elements within** - including Specifications
5. **Draw a Slice around selected elements** - or empty if none selected
6. **Create a new slice based on the selected one** - if a State View is selected, models a State Change and vice versa
7. **Name of the slice** - has to start with "slice:" (will be added automatically if missing)
8. **Slice Status**
9. **Assign a context to the slice** - You can select all slices and assign the context to all in one go
10. **Define Status as Border** - if unchecked, the whole slices is colored

## Slice Status

The slice status helps you track the progress of implementation and planning:

- **Done** - Slice is fully implemented
- **Assigned** - Slice is assigned to a developer
- **InProgress** - Slice is being worked on
- **Review** - Slice is currently reviewed (code review, model review)
- **Blocked** - Slice is blocked
- **Planned** - Slice is planned for a future iteration
- **Created** - Initial status when slice is created
- **Informational** - Slice is just for information, no implementation needed

## Example Slice

![Example Slice]({{ '/assets/images/tutorial/slice_view/401.png' | relative_url }})

## Next Steps

- [Data View](/docs/basic-modeling-topics/data-view/) - Edit element schemas and configurations
- [Elements View](/docs/basic-modeling-topics/elements-view/) - Working with elements
- [Context View](/docs/basic-modeling-topics/context-view/) - View context hierarchies
