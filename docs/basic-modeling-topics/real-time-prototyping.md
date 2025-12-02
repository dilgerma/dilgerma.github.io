---
layout: docs
title: Slice View
---

# Real Time Prototyping

The Miro Event Modeling Toolkit allows you to export running Prototypes directly from your Model. 
This is first a pretty fun experience in a workshop, but also a great way to validate your assumptions by just playing with what was just modeled 2 minutes ago.

## Preparation

Real Time Prototyping requires some preparation. You need to tell the system how projections should work, 
how data should be displayed and stuff.

RTP ( Real Time Prototyping ) can be configured on Screens, Read Models and Commands.

Select any of those elements and open the Documentation

![Documentation]({{ '/assets/images/tutorial/rtp/rtp001.png' | relative_url }})

In Documentation you find the Prototype-Configuration

![Screen Drawer]({{ '/assets/images/tutorial/rtp/rtp002.png' | relative_url }})

This basically looks the same for each element:

![Screen Drawer]({{ '/assets/images/tutorial/rtp/rtp003.png' | relative_url }})


1) Label of the Element ( for a Read Model, this is the headline, for a command this is the button text )

2) Order of the element - controls placement of elements within the same screen. Lower numbers come first.

3) Placement - the prototype has a main area and a side area. This control where elements are placed

4) Defines if an initial value should be set, or if it should be undefined ( basically nothing ). For a command allows you to activate by default.

5) Allows you to build the projection ( also AI can generate this if enabled ). For a Read Model, this is how data is projected. For a command, this is how the Command Model is projected.

6) Only available if AI is enabled, let´s you prompt for the projection code

7) Let´s you define how data should be rendered

### Example Projection Code

```
events.forEach((eventData)=>{
    let event = eventData.data
    switch(eventData.type) {
   
       	case 'CustomerRegisteredEvent':
			this.result.name=event.name
			this.result.email=event.email
    	return;
        
    }
})
```

![Screen Drawer]({{ '/assets/images/tutorial/rtp/rtp003.png' | relative_url }})

Typical example of a List Model

![Screen Drawer]({{ '/assets/images/tutorial/rtp/rtp006.png' | relative_url }})

The Projection in this case would look like this:

```
events.forEach((eventData)=>{
    let event = eventData.data
    switch(eventData.type) {
   
        case 'CustomerRegisteredEvent':
            this.resultList.push({
                email:event.email,
                name:event.name
            })
            return;
        
        case 'CustomerActivatedEvent':
            this.resultList = this.resultList.filter(item => item.email !== event.email)
            return;
        
    }
})
```

A simple hint to AI typically provides the correct code.

![Screen Drawer]({{ '/assets/images/tutorial/rtp/rtp007.png' | relative_url }})

For Read Models you project into "this.result", which is an object you can fill. 
For a List, you just append / remove from the list.

Code like this is auto-generated for you and you can adjust it.

### Render Logic

"Key" controls what is displayed in the drop down. fields controls which fields are displayed. 
Note - you don´t control "how" data is displayed, that is what happens in the projection for the Read Model.

```
()=>{ return { key: "period", fields: ["period","name"]}}
```

### Command Activation

If you want a command to be active by default, active it in the configuration.

![Screen Drawer]({{ '/assets/images/tutorial/rtp/rtp005.png' | relative_url }})


## Next Steps

- [Data View](/docs/basic-modeling-topics/data-view/)


