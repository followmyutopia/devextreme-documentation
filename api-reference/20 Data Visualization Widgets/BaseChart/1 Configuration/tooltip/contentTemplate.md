---
id: BaseChart.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(pointInfo): Object
Information on the series point being pressed or hovered over.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Node | jQuery
#include common-template-return-value

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/TooltipHTMLSupport/"
}