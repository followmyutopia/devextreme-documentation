---
id: dxTreeMap.nodesRendering
type: eventType
---
---
##### shortDescription
Raised before the nodes are displayed and each time the collection of [active nodes](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isActive) is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
In most cases, the root node. When drilling down, the node of the highest displayed level.       
Described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.

##### notUsedInTheme

---
Main article: [onNodesRendering](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesRendering)

#####See Also#####
#include common-link-handleevents