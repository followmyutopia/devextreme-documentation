<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Text of summary items in column custom format function<!--/d-->
===========================================================================
<!--type-->function(itemInfo)<!--/type-->
<!--fp1d-->The value of a summary item.<!--/fp1d-->
<!--fp1_field1d-->This value as it is specified in the data source.<!--/fp1_field1d-->
<!--fp1_field2d-->This value with applied format and precision.<!--/fp1_field2d-->
<!--frd-->The text to be displayed in a summary item.<!--/frd-->
===========================================================================

<!--shortDescription-->
Customizes the text to be displayed in the summary item.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a function that must return the text to be displayed in the summary item. When you implement this function, you can access the summary item value using the fields of object passed to the function as its argument.
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data of the summary item.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string|number|date<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Summary item value as it was calculated.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Summary item value with applied <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#valueFormat">format</a>.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Text to be displayed in the summary item. 
<!--/typeFunctionReturnDescription-->