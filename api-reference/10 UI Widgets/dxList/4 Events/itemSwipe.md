---
id: dxList.itemSwipe
type: eventType
---
---
##### shortDescription
Raised when a list item is swiped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.direction): String
The direction in which the item is swiped.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The swiped item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The item's index. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onItemSwipe](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemSwipe)

#####See Also#####
- [List - Touch-Screen Gestures](/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/)
#include common-link-handleevents