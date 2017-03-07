<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->string | function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a field name or a function that returns a field name or a value to be used for sorting column cells.
<!--/shortDescription-->

<!--fullDescription-->
By default, sorting is conducted using the exact values that the column contains. However, in some cases, this approach may produce poor results. In such cases, it may be preferable to use calculated values for column cells to be used in sorting. For this purpose, assign a function to the **calculateSortValue** option. This function must return the calculated value for sorting. Alternatively, assign the name of the field whose values will be used to sort current column values.

For more information, refer to the [Sorting in Code](/Documentation/Guide/Widgets/DataGrid/Sorting/#Sorting_in_Code) topic.
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data object presented by the current grid row.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The calculated value to be used for sorting.
<!--/typeFunctionReturnDescription-->