---
id: dxTreeMap.drill
type: eventType
---
---
##### shortDescription
Raised when a user drills up or down.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

##### notUsedInTheme

---
Main article: [onDrill](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onDrill)

#####See Also#####
#include common-link-handleevents