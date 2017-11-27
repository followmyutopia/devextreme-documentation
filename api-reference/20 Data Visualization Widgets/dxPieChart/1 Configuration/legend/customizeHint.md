<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(pointInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the point that corresponds to the legend item.
<!--/fullDescription-->
<!--typeFunctionParamName1-->pointInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the point that corresponds to the legend item.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->pointName<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->any<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the name of the point argument for which the current legend item is created.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->pointIndex<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Number<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Specifies the index of the point for which the current legend item is created.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->pointColor<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->string<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Specifies the color of the point for which the current legend item is created.
<!--/typeFunctionParamDescription1_field3-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed in a hint for a legend item.
<!--/typeFunctionReturnDescription-->