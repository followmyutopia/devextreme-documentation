---
id: dxTreeMap.nodesInitialized
type: eventType
---
---
##### shortDescription
Raised only once, after the nodes are initialized.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.root): dxTreeMapNode
The root node; described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.

##### notUsedInTheme

---
Main article: [onNodesInitialized](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onNodesInitialized)

#####See Also#####
#include common-link-handleevents