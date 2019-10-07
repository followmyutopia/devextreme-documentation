---
id: dxVectorMap.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(info): MapLayerElement
Information on the area or marker being pressed or hovered over. To distinguish between areas and markers, use the **info**.**layer**.[type](/Documentation//ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer/Fields/#type) field.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Node | jQuery
#include common-template-return-value

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/TooltipHTMLSupport/jQuery/Light/"
}