---
id: dxContextMenu.hiding
type: eventType
---
---
##### shortDescription
Raised before the **ContextMenu** is hidden.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel widget hiding.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
Main article: [onHiding](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onHiding)

#####See Also#####
#include common-link-handleevents