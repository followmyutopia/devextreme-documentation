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
<!--typeFunctionParamType1-->Array<dxDataGrid_Options_columns><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->rows<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Array<dxDataGridRowObject><!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The [Row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/) objects. If only selected rows are to be exported, this array contains only them.
<!--/typeFunctionParamDescription2-->
