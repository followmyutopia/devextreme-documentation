<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Returns a filter expression applied to the grid using all possible scenarios.
<!--/shortDescription-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
A <a href="/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.
<!--/returnDescription-->

<!--fullDescription-->
The **DataGrid** can be filtered both in code, using the [filter(fitlerExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method, and in the UI, using a [filter row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/), a column's [header filter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/) or the [search panel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/). To get a total filter summarized from all the filters applied, use the **getCombinedFilter()** method. 

Note that this method returns filter expressions with the [getters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters). If you want to obtain filter expressions with data fields, use the [getCombinedFilter(returnDataField)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilterreturnDataField) method.
<!--/fullDescription-->