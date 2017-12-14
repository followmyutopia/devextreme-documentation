===========================================================================
<!--type-->String | function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a field name or a function that returns a field name or a value to be used for grouping column cells.
<!--/shortDescription-->

<!--fullDescription-->
By default, [grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/) is conducted using the exact values that the grouping column contains. However, in some cases, this approach may be giving poor results, e.g., when a user tries to group records by a column that contains dates. In such cases, it may be preferable to use calculated values in grouping. For this purpose, assign a function to the **calculateGroupValue** option. This function must return the calculated value for grouping.
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current row's data.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The calculated value to be used for grouping.
<!--/typeFunctionReturnDescription-->