<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Defines an expression returning value for grouping.<!--/d-->
===========================================================================
<!--type-->string | function(rowData)<!--/type-->
<!--fp1d-->The data object represented by the current grid row.<!--/fp1d-->
<!--frd-->A value to be displayed within a group row.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies a field name or a function that returns a field name or a value to be used for grouping column cells.
<!--/shortDescription-->

<!--fullDescription-->
By default, [grouping](/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/) is conducted using the exact values that the grouping column contains. However, in some cases, this approach may be giving poor results, e.g., when a user tries to group records by a column that contains dates. In such cases, it may be preferable to use calculated values in grouping. For this purpose, assign a function to the **calculateGroupValue** option. This function must return the calculated value for grouping.
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data object presented by the current grid row.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The calculated value to be used for grouping.
<!--/typeFunctionReturnDescription-->