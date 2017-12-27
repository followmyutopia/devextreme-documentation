===========================================================================
<!--type-->function(cellInfo)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes the text displayed in column cells.
<!--/shortDescription-->

<!--fullDescription-->
[note]The **customizeText** function may be called when data displayed in the column matches the search condition to properly highlight the matching text.

#####See Also#####
- [Customize the Value and Text](/Documentation/Guide/Widgets/{WidgetName}/Columns/Customize_Cells/#Customize_the_Value_and_Text)
- **columns[]**.[calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellInfo<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the current cell.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->value<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->String|Number|Date<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The cell's raw value.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->valueText<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->String<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The [fomatted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format) value converted to a string.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->target<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->String<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The UI element where the **customizeText** function was called: *"filterRow"*, *"headerFilter"* and *"search"*.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->groupInterval<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->String|Number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*.  
For possible values, see the description of the **headerFilter**.[groupInterval]({basewidgetpath}/Configuration/columns/headerFilter/#groupInterval) option.
<!--/typeFunctionParamDescription1_field4-->

<!--typeFunctionReturnType-->String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The text for the cell to display.
<!--/typeFunctionReturnDescription-->