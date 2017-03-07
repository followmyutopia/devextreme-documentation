<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Label custom format function<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(seriesInfo)<!--/type-->
<!--fp1d-->Information about the series to be presented in the legend<!--/fp1d-->
<!--fp1_field1d-->Specifies the name of the series for which the current legend item is created.<!--/fp1_field1d-->
<!--fp1_field2d-->Specifies the index of the series for which the current legend item is created.<!--/fp1_field2d-->
<!--fp1_field3d-->Specifies the color of the series for which the current legend item is created.<!--/fp1_field3d-->
<!--frd-->The text to be displayed by a legend item.<!--/frd-->
===========================================================================

<!--shortDescription-->
<p>Specifies a callback function that returns the text to be displayed by legend items.</p>
<!--/shortDescription-->

<!--fullDescription-->
By default, legend items identify series by color and name. You can also provide other information instead of the series name. To do this, implement a callback function for this property, and return the required text. Use the fields of the object passed as the function's parameter in the returned text. For instance, you can use the series name or index if it is more appropriate in your case.

Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.
<!--/fullDescription-->
<!--typeFunctionParamName1-->seriesInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the series to be presented in the legend
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->seriesName<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the name of the series for which the current legend item is created.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->seriesIndex<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Specifies the index of the series for which the current legend item is created.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->seriesColor<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->string<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Specifies the color of the series for which the current legend item is created.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed by a legend item.
<!--/typeFunctionReturnDescription-->