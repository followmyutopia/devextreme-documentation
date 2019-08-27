---
id: dxMap.markerAdded
type: eventType
---
---
##### shortDescription
Raised when a marker is created on the map.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.options): Object
The added marker's data.

##### field(e.originalMarker): Object
The original marker that the current map provider uses (only for "google" and "bing" providers).

---
Main article: [onMarkerAdded](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerAdded)

#####See Also#####
#include common-link-handleevents