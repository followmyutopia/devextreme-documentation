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

<!--paramName1-->returnDataField<!--/paramName1-->
<!--paramType1-->boolean<!--/paramType1-->
<!--paramDescription1-->
Specifies whether or not the filter expressions should contain data fields instead of <a href="https://js.devexpress.com/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Getters_And_Setters">getters</a>.
<!--/paramDescription1-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
A <a href="/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.
<!--/returnDescription-->

<!--fullDescription-->
The **DataGrid** can be filtered both in code, using the [filter(fitlerExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method, and in the UI, using a [filter row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/), a column's [header filter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/) or the [search panel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/). To get a total filter summarized from all the filters applied, use the **getCombinedFilter(returnDataField)** method. 
<!--/fullDescription-->