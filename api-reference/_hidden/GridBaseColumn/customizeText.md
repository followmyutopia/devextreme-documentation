---
id: GridBaseColumn.customizeText
type: function(cellInfo)
---
---
##### shortDescription
Customizes the text displayed in column cells.

##### param(cellInfo): Object
Information on the current cell.

##### field(cellInfo.groupInterval): String | Number
Indicates how header filter values were combined into groups. Available if **target** is *"headerFilter"*.  
See the **headerFilter**.[groupInterval]({basewidgetpath}/Configuration/columns/headerFilter/#groupInterval) option's description for possible values.

##### field(cellInfo.target): String
The UI element where the **customizeText** function was called: *"row"*, *"filterRow"*, *"headerFilter"*, *"search"*, *"filterPanel"*, or *"filterBuilder"*.

##### field(cellInfo.value): String | Number | Date
The cell's raw value.

##### field(cellInfo.valueText): String
The [fomatted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format) value converted to a string.

##### return: String
The text the cell should display.

---
[note] The specified text is not used to sort, filter, and group data or calculate summaries. If it should be, specify the [calculateCellValue](/Documentation/ApiReference/UI_Widgets/dx{WidgetName}/Configuration/columns/#calculateCellValue) function instead.

The **customizeText** function can be called to highlight the matching text correctly when the data displayed in the column matches the search condition.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

#####See Also#####
- [Customize the Value and Text](/Documentation/Guide/Widgets/{WidgetName}/Columns/Customize_Cells/#Customize_the_Value_and_Text)
- **columns[]**.[calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue)