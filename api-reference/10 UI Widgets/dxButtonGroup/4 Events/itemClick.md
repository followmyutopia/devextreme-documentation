---
id: dxButtonGroup.itemClick
type: eventType
---
---
##### shortDescription
Raised when a button is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked button's [data](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#items).

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "button" }

##### field(e.itemIndex): Number
The clicked button's index.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
