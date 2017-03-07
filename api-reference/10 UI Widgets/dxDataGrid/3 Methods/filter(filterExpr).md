<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Applies a filter to the grid's data source.
<!--/shortDescription-->

<!--paramName1-->filterExpr<!--/paramName1-->
<!--paramType1-->any<!--/paramType1-->
<!--paramDescription1-->
A <a href="/Documentation/16_2/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering">filter expression</a>.
<!--/paramDescription1-->

<!--fullDescription-->
This method filters grid records in code. Pass an array with the following members to this method.

1. The data source field by which data items are filtered.
2. The comparison operator. The following operators are available: "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains".
3. The value with which data source field values should be compared.

The filters specified by end users using a [filter row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/), a column's [header filter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/) or the [search panel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/) are applied to the data source that is already filtered using the **filter(filterExpr)** method. To clear all the filters applied to the grid both in code and by end users, call the [clearFilter('dataSource')](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilter) method.

#####See Also#####
- [DataGrid - Filtering in Code](/Documentation/Guide/Widgets/DataGrid/Filtering/#Filtering_in_Code) topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridfilteringandsortingfilteringapi/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->