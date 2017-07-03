<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(cellInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes the text displayed in column cells.
<!--/shortDescription-->

<!--fullDescription-->
[note]The **customizeText** function may be called when data displayed in the column matches the search condition to properly highlight the matching text.

#####See Also#####
- **columns[]** | [calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The settings of a cell.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string|number|date<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The value of the cell as it is specified in the data source.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->string<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The value of the cell with applied format.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->target<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->string<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Indicates the type of the UI element where the <b>customizeText</b> function was called.<br/>Possible values: <i>"filterRow"</i>, <i>"headerFilter"</i> and <i>"search"</i>.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->groupInterval<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string|number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Indicates how header filter values were combined into groups. Available if <b>target</b> is <i>"headerFilter"</i>.<br />For possible values, see the description of the <b>headerFilter</b> | <b>groupInterval</b> option.
<!--/typeFunctionParamDescription1_field4-->

<!--typeFunctionReturnType-->string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the cell.
<!--/typeFunctionReturnDescription-->