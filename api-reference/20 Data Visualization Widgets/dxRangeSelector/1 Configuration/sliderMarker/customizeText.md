===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(scaleValue)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed by slider markers.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this property, use the value displayed in a slider marker. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Range_Selector/CustomFormatting/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->scaleValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the scale value.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date|Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The raw value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The [formatted](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker#format) value converted to a string.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the slider marker to display.
<!--/typeFunctionReturnDescription-->