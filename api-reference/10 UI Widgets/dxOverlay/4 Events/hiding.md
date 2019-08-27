---
id: dxOverlay.hiding
type: eventType
---
---
##### shortDescription
Raised before the widget is hidden.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel overlay hiding.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onHiding]({basewidgetpath}/Configuration/#onHiding)

#####See Also#####
#include common-link-handleevents