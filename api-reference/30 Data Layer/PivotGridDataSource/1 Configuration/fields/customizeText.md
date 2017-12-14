===========================================================================
<!--type-->function(cellInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that returns the text to be displayed in the cells of a field.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a callback function for this option, you can access the value of a cell using the object passed as the function's parameter. Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as the parameter.
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The value of a cell.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String|Number|Date<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
A cell value as it is specified in the data source.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
A cell value with applied formatting.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text to be displayed in a cell.
<!--/typeFunctionReturnDescription-->