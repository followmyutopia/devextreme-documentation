---
id: dxSankey.Options.onNodeHoverChanged
type: function(e)
default: null
EventForAction: dxSankey.nodeHoverChanged
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a sankey node.

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
#####See Also#####
- **node**.[hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/hoverStyle/)