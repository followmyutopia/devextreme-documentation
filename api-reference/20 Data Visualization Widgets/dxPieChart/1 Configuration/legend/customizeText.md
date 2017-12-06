===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->function(pointInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed by a legend item.
<!--/shortDescription-->

<!--fullDescription-->
By default, legend items identify chart points (sectors) by color and argument name. You can also provide other information instead of the point argument name. To do this, implement a callback function for this property, and return the required text. Use the fields of the object passed as the function's parameter in the returned text. For instance, you can use the point argument name or index if it is more appropriate in your case.

Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.
<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the series point.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->pointName<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->any<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The point's name.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->pointIndex<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The point's index.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->pointColor<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->string<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The point's color.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the legend item to display.
<!--/typeFunctionReturnDescription-->