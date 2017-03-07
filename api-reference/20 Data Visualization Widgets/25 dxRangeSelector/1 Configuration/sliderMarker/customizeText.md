<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Text custom format function for slider markers<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(scaleValue)<!--/type-->
<!--fp1d-->Defines a scale value.<!--/fp1d-->
<!--fp1_field1d-->Specifies the scale value that is currently selected.<!--/fp1_field1d-->
<!--fp1_field2d-->Specifies the currently selected scale value using an applied format, if the format and precision (optional) properties are specified.<!--/fp1_field2d-->
<!--frd-->The text to be displayed by a slider marker.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed by slider markers.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this property, use the value displayed in a slider marker. This value can be accessed using the fields of the object that is passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.
<!--/fullDescription-->
<!--typeFunctionParamName1-->scaleValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Defines a scale value.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Date|Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the scale value that is currently selected.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Specifies the currently selected scale value with applied <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/sliderMarker#format">formatting</a>.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed by a slider marker.
<!--/typeFunctionReturnDescription-->