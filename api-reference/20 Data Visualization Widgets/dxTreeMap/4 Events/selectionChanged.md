---
id: dxTreeMap.selectionChanged
type: eventType
---
---
##### shortDescription
Raised when a node is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The node whose selection state has been changed; described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.

##### notUsedInTheme

---
Main article: [onSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onSelectionChanged)

#####See Also#####
#include common-link-handleevents