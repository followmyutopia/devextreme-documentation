===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->function(info)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies text and appearance of a set of tooltips.
<!--/shortDescription-->

<!--fullDescription-->
This option should be assigned a function that returns a specific object. The following fields can be specified in this object.

- **text**        
Specifies the text displayed by a tooltip. This is an obligatory option. If this option is not specified, the tooltip will not be shown.

- **html**        
Specifies the HTML markup displayed by a tooltip.
[note]If you are going to use external resources (for example, images) in the markup, specify the size of the area they will occupy beforehand.

- **color**        
Specifies the [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/tooltip/#color) of a tooltip.

- **fontColor**        
Specifies the color of the text displayed by a tooltip.

- **borderColor**        
Specifies the color of the tooltip border.

#include dataviz-ref-functioncontext

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Vector_Map/ColorsCustomization/jQuery/Light/",
    name: "Colors Customization"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/VectorMap/TooltipHTMLSupport/jQuery/Light/",
    name: "Tooltip HTML Support"
}
<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->MapLayerElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the [area](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/)/[marker](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/) being pressed or hovered over with the mouse pointer.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The tooltip's text or markup and color.
<!--/typeFunctionReturnDescription-->