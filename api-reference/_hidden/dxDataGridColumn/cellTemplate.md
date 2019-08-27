---
id: dxDataGridColumn.cellTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for data cells.

##### param(cellElement): dxElement
#include common-ref-elementparam with { element: "current cell" }

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxDataGridColumn
The column's properties.

##### field(cellInfo.columnIndex): Number
The index of the cell's column.         
For more information on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) topic.

##### field(cellInfo.component): dxDataGrid
The widget's instance.

##### field(cellInfo.data): Object
The data of the row to which the cell belongs.

##### field(cellInfo.displayValue): any
The cell's display value. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).

##### field(cellInfo.oldValue): any
The cell's previous raw value.

##### field(cellInfo.row): dxDataGridRowObject

##### field(cellInfo.rowIndex): Number
The index of the cell's row. Begins with 0 on each page. Group rows are included.       
For details on row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) topic.

##### field(cellInfo.rowType): String
The row's [type]({basewidgetpath}/Row/#rowType).

##### field(cellInfo.text): String
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).

##### field(cellInfo.value): any
The cell's raw value.

##### field(cellInfo.watch): function()
Allows tracking a variable and performing actions when it changes. Applies when [repaintChangesOnly]({basewidgetpath}/Configuration/#repaintChangesOnly) is **true**.       
This function has the following parameters:     

- **getter(data)**: <font size="-1">Function</font>        
A function that returns the variable that should be tracked.

- **handler(newValue)**: <font size="-1">Function</font>        
A function called when this variable changes.

---
[note] If you implement two-way data binding in your template, set [twoWayBindingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#twoWayBindingEnabled) to **false** to switch off the built-in implementation of this feature.

[note] In [fixed columns]({basewidgetpath}/Configuration/columnFixing/), a **cellTemplate** is initialized and rendered twice for each cell.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CellCustomization/jQuery/Light/"
}

#####See Also#####
- [Customize Cells Appearance](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Cells/#Customize_the_Appearance)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [onCellPrepared]({basewidgetpath}/Configuration/#onCellPrepared)