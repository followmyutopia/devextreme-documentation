---
id: dxSankey.Options.onNodeClick
type: function(e) | String
default: null
EventForAction: dxSankey.nodeClick
---
---
##### shortDescription
A function that is executed when a sankey node is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): dxSankeyNode
The [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/) object.

##### notUsedInTheme

---
#####See Also#####
- [node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/)