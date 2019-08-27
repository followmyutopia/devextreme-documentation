---
id: dxMap.routeRemoved
type: eventType
---
---
##### shortDescription
Raised when a route is removed from the map.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.options): Object
The removed route's data.

---
Main article: [onRouteRemoved](/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onRouteRemoved)

#####See Also#####
#include common-link-handleevents