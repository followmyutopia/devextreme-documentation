---
id: dxContextMenu.positioning
type: eventType
---
---
##### shortDescription
Raised before the **ContextMenu** is positioned.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.position): positionConfig
The [positioning options](/Documentation/ApiReference/Common/Object_Structures/positionConfig/).

---
Main article: [onPositioning](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onPositioning)

#####See Also#####
#include common-link-handleevents