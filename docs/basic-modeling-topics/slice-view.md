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

1. **Slice title**
2. **Clickable Indicator** - that this slice is assigned to a Context
3. **Slice Border** - everything within the border belongs to the slice

## One Click Modeling

If you select just an Event ( and nothing else ), the one click modeling View becomes active. 
From here you can model the 4 known Patterns with just one click.

![Example Slice]({{ '/assets/images/tutorial/slice_view/slice-01.png' | relative_url }})


1) Create a State Change Slice 
![Example Slice]({{ '/assets/images/tutorial/slice_view/slice-02.png' | relative_url }})

2) Create a State View Slice
![Example Slice]({{ '/assets/images/tutorial/slice_view/slice-011.png' | relative_url }})

3) Create an Automation
![Example Slice]({{ '/assets/images/tutorial/slice_view/slice-03.png' | relative_url }})

4) Create a Translation
![Example Slice]({{ '/assets/images/tutorial/slice_view/slice-04.png' | relative_url }})

### Group in Swimlane

![Group In Swimlane]({{ '/assets/images/tutorial/slice_view/swimlane/swimlane01.png' | relative_url }})

If at least one sticky note is selected, the button for "Group in Swimlane" activates. 
This button allows you to group all selected Sticky Notes in one Swimlane.

<div class="video-container">
  <iframe src="https://www.loom.com/embed/e2008badc3a44d69870399cb2bf5f26c?sid=2a6823b3-597d-4bec-9ad1-7a4f39a90964" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe>
</div>

It also creates an Aggregate in the swimlane. Feel free to delete it if you don´t need it. 

## Next Steps

- [Extend your existing Model with AI](/docs/basic-modeling-topics/extending-an-existing-model-with-ai) - AI Integration
