<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(columns, rows)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes grid columns and data before exporting.
<!--/shortDescription-->

<!--fullDescription-->
The function assigned to this option will be called between the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) and [onExported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported) functions. Use the arguments of this function to access and change different column and row options.

#####See Also#####
- [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/).**enabled**
- **columns[]**.[allowExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting)
<!--/fullDescription-->
<!--typeFunctionParamName1-->columns<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<dxDataGridOptions_columns><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
[Grid columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->rows<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Array<dxDataGridRowObject><!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
[Grid rows](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/). If only selected rows are to be exported, this array contains only them.
<!--/typeFunctionParamDescription2-->
