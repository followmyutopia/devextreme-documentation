---
id: dxTreeMap.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(info): Object
Information on the node being pressed or hovered over.

##### field(info.node): dxTreeMapNode
The [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

##### field(info.value): Number
The raw node value.

##### field(info.valueText): String
The [formatted](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/#format) value converted to a string.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Node | jQuery
#include common-template-return-value

---
