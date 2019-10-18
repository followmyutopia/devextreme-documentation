---
id: dxScheduler.Options.appointmentDragging.onRemove
type: function(e)
---
---
##### shortDescription
A function that is called when a draggable appointment is removed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fromComponent): dxSortable | dxDraggable
The instance of the appointment's source widget.

##### field(e.fromData): any
Custom [data](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/appointmentDragging/#data') associated with the source widget.

##### field(e.fromIndex): Number
The appointment's original position. If the appointment is dragged from another widget, the value is **-1**.

##### field(e.itemData): any
The data object of the appointment being dragged.

##### field(e.itemElement): dxElement
#include draganddrop-ref-itemelementparam

##### field(e.toComponent): dxSortable | dxDraggable
The instance of the appointment's target widget.

##### field(e.toData): any
Custom [data](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/appointmentDragging/data.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/appointmentDragging/#data') associated with the target widget.

##### field(e.toIndex): Number
The position in which a appointment is placed. If the appointment is dragged away from the widget, the value is **-1**.

---
<!-- Description goes here -->