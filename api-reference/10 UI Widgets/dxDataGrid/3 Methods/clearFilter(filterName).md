<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Clears all filters of a specific type applied to grid rows.
<!--/shortDescription-->

<!--paramName1-->filterName<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Type of filter to be cleared.
<!--/paramDescription1-->

<!--fullDescription-->
In the **DataGrid**, rows can be filtered in several different ways. The method's parameter specifies what type of filter should be cleared. The parameter values can be the following:

* 'dataSource' - to clear the [dataSource filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) (defined in the configuration or applied by the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method);
* 'search' - to clear the [search panel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/);
* 'header' - to clear the [column header filter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/);
* 'row' - to clear the [filter row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/).
<!--/fullDescription-->