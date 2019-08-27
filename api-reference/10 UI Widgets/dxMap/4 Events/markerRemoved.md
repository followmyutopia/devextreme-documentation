---
id: dxMap.markerRemoved
type: eventType
---
---
##### shortDescription
Raised when a marker is removed from the map.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.options): Object
The removed marker's data.

---
Main article: [onMarkerRemoved](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerRemoved)

#####See Also#####
#include common-link-handleevents