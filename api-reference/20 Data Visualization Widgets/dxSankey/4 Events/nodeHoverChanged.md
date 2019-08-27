---
id: dxSankey.nodeHoverChanged
type: eventType
---
---
##### shortDescription
Raised after the pointer enters or leaves a sankey node.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): dxSankeyNode
The [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/) object.

##### notUsedInTheme

---
Main article: [onNodeHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeHoverChanged)

#####See Also#####
#include common-link-handleevents
- [node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/)