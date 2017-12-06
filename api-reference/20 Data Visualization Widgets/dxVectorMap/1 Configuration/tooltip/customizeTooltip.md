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

When implementing a callback function for this option, you can access the hovered area or marker. For this purpose, use the object passed as the function's parameter or the **this** object. To discover the members of the obtained object that can be used, see the [Area](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Area/) or [Marker](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Marker/) class description of the **Map Elements** reference section.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Vector_Map/ColorsCustomization/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->info<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->areaObjects|markerObjects<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the area/marker being pressed or hovered over with the mouse pointer.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->object<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The tooltip's text or markup and color.
<!--/typeFunctionReturnDescription-->