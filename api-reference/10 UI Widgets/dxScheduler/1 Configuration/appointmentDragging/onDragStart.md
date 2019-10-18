---
id: dxScheduler.Options.appointmentDragging.onDragStart
type: function(e)
---
---
##### shortDescription
A function that is called when the drag gesture is initialized.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cancel): Boolean
Allows you to cancel the gesture.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/appointmentDragging/#data') associated with the source widget.

##### field(e.fromIndex): Number
The appointment's original position. If the appointment is dragged from another widget, the value is **-1**.

##### field(e.itemData): any
The data object of the appointment being dragged.

##### field(e.itemElement): dxElement
#include draganddrop-ref-itemelementparam

---
<!-- Description goes here -->