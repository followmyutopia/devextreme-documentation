---
id: dxTreeView.itemClick
type: eventType
---
---
##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data object.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "clicked item" }

##### field(e.itemIndex): Number | Object
The clicked item's index.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The clicked item's node.

---
