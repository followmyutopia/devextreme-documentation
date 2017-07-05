<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(itemInfo)<!--/type-->
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
Summary item value with applied [format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#valueFormat).
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
Text to be displayed in the summary item. 
<!--/typeFunctionReturnDescription-->