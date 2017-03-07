<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not deferred row selection is enabled.
<!--/shortDescription-->

<!--fullDescription-->
Deferred selection is especially useful in case the amount of data is large and the [selectAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll) functionality is required. 

When deferred selection is disabled and rows are selected by a user or in code, data is loaded instantly. In this mode, to specify the initially selected records, use the [selectedRowKeys](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys) option. The option value is also dynamically updated after an end user selects rows in the UI.

When selection is deferred, the **DataGrid** does not make requests for data until this is demanded from the API. In this mode, the [selectionFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectionFilter) should be used instead of [selectedRowKeys](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys) option. It holds [filters](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) for the selected rows.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-selection-deferred_selection" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a> 

#####See Also#####
- [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/)

<!--/fullDescription-->