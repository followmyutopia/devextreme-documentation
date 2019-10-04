---
id: dxSankey.Options.tooltip.nodeTooltipTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a [node](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/)'s tooltip.

##### param(info): Object
Information about a sankey node being pressed or hovered over.

##### field(info.title): String
The node's [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/).

##### field(info.weightIn): Number
The total weight of the node's incoming [links](Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/).

##### field(info.weightOut): Number
The total weight of the node's outgoing links.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Node | jQuery
#include common-template-return-value

---