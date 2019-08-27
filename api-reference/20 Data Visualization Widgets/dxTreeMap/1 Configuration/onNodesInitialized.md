---
id: dxTreeMap.Options.onNodesInitialized
type: function(e)
default: null
EventForAction: dxTreeMap.nodesInitialized
---
---
##### shortDescription
A function that is executed only once, after the nodes are initialized.

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
Use this function to change the node structure. The root node is available via the **root** field of the function's parameter. Using the root node's [getAllNodes()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllNodes), [getAllChildren()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getAllChildren) and [getChild(index)](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#getChildindex) methods, you can access any other node.