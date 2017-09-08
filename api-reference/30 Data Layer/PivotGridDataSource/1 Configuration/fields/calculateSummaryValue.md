<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a callback function that allows you to modify summary values after they are calculated.
<!--/shortDescription-->

<!--fullDescription-->
With this function, you can perform additional calculations on each summary value and take into account the values of the neighboring cells. The function takes the [Summary Cell](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Summary_Cell/) object as an argument and returns the new summary value. The summary value calculated by aggregation of facts (according to the [summaryType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryType)) is replaced with the value returned by this function.

There are several predefined post-processing functions. You can enable one of them by using the [summaryDisplayMode](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode) option.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxPivotGridSummaryCell<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The object for accessing the data of the current cell and the neighboring cells.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->number<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The new cell value.
<!--/typeFunctionReturnDescription-->