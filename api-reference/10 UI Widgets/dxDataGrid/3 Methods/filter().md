<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Returns a filter expression applied to the grid's data source using the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method.
<!--/shortDescription-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
A <a href="/Documentation/17_1/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.
<!--/returnDescription-->

<!--fullDescription-->
You can get a total filter summarized from all possible filters:

- the filter applied using the [filter(fitlerExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method;
- the filter applied using a [filter row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/);
- the filter applied using a column's [header filter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/);
- the filter applied using the [search panel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/).

For this purpose, use the [getCombinedFilter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter) method.
<!--/fullDescription-->