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
- [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/) | **enabled**
- **columns[]** | [allowExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting)
<!--/fullDescription-->
<!--typeFunctionParamName1-->columns<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->array<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
<a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/">Grid columns</a>.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->rows<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->array<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
<a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Row/">Grid rows</a>. If only selected rows are to be exported, this array contains only them.
<!--/typeFunctionParamDescription2-->
