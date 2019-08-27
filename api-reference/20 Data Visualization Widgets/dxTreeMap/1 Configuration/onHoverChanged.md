---
id: dxTreeMap.Options.onHoverChanged
type: function(e)
default: null
EventForAction: dxTreeMap.hoverChanged
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a node.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The node whose hover state has been changed; described in the [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) section.

##### notUsedInTheme

---
To identify whether the pointer has entered or left the node, call the node's [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isHovered) method. To identify whether the node is a single tile or a group of tiles, use the node's [isLeaf()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#isLeaf) method.