---
id: dxVectorMap.Options.tooltip.customizeTooltip
type: function(info)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
Specifies text and appearance of a set of tooltips.

##### param(info): MapLayerElement
Information on the area or marker being pressed or hovered over with the mouse pointer.

##### return: Object
The tooltip's text or markup and color.

---
This option should be assigned a function that returns a specific object. The following fields can be specified in this object.

- **text**        
Specifies the text displayed by a tooltip. This is an obligatory option. If this option is not specified, the tooltip will not be shown.

- **html**        
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **color**        
Specifies the [color](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/#color') of a tooltip.

- **fontColor**        
Specifies the color of the text displayed by a tooltip.

- **borderColor**        
Specifies the color of the tooltip border.

#include dataviz-ref-functioncontext

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Vector_Map/ColorsCustomization/",
    name: "Colors Customization"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/TooltipHTMLSupport/",
    name: "Tooltip HTML Support"
}