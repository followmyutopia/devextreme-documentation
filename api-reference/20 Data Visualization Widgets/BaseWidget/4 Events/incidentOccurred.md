---
id: BaseWidget.incidentOccurred
type: eventType
---
---
##### shortDescription
Raised when an error or warning occurs.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): any
Information on the occurred incident.

---
Main article: [onIncidentOccurred]({basewidgetpath}/Configuration/#onIncidentOccurred)

#####See Also#####
#include common-link-handleevents