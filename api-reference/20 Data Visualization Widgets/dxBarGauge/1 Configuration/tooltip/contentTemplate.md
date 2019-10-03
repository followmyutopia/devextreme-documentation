---
id: dxBarGauge.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(scaleValue): Object
Information on the bar value.

##### field(scaleValue.index): Number
The index of the bar being pressed or hovered over. 0 for the bar closest to the gauge's center, 1 for the bar over it, etc.

##### field(scaleValue.value): Number
The raw value.

##### field(scaleValue.valueText): String
The [formatted]({basewidgetpath}/Configuration/tooltip/#format) value converted to a string.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Node | jQuery
#include common-template-return-value

---
