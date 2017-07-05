<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures runtime selection.
<!--/shortDescription-->

<!--fullDescription-->
A user can select rows in a single or multiple [mode]({basewidgetpath}/Configuration/selection/#mode). In multiple mode, a user can select all rows at once. To disable this feature, assign **false** to the [allowSelectAll]({basewidgetpath}/Configuration/selection/#allowSelectAll).

By default, once a user selects a row, the data source is instantly notified about it. This may lower the widget performance if the data source is remote and the user is allowed to select all rows at once. In this case, we recommend making the selection [deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred).

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/RowSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Selection](/Documentation/Guide/Widgets/DataGrid/Selection/)
- [Deferred Selection](/Documentation/Guide/Widgets/DataGrid/Features_for_Remote_Data/Deferred_Selection/)
- [onSelectionChanged]({basewidgetpath}/Configuration/#onSelectionChanged)
<!--/fullDescription-->