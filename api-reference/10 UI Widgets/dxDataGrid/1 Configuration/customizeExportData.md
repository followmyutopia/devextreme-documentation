<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Customize a columns and a data before exporting<!--/d-->
===========================================================================
<!--type-->function(columns, rows)<!--/type-->
<!--fp1d-->An array of grid columns.<!--/fp1d-->
<!--fp2d-->A rows of data grid.<!--/fp2d-->
===========================================================================

<!--shortDescription-->
Customizes grid columns and data before exporting.
<!--/shortDescription-->

<!--fullDescription-->
The function assigned to this option will be called between the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) and [onExported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported) functions. Use the arguments of this function to access and change different column and row options.

#####See Also#####
- [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/) - configures client-side exporting.
- [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) - allows you to request exporting details and prevent exporting.
- [onExported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported) - allows you to notify an end user when exporting is completed.
- [onFileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving) - allows you to access exported data and/or prevent it from being saved into a file on the user's local storage.
<!--/fullDescription-->
<!--typeFunctionParamName1-->columns<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->array<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
<a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">Grid columns</a>.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->rows<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->array<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
<a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Row/">Grid rows</a>. If only selected rows are to be exported, this array contains only them.
<!--/typeFunctionParamDescription2-->
