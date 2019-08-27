---
id: GridBase.getCellElement(rowIndex, dataField)
---
---
##### shortDescription
Gets a cell with a specific row index and a data field, column caption or name.

##### return: dxElement | undefined
#include common-ref-elementparam with { element: "cell" }
If the specified row or data field does not exist, the method returns **undefined**.

##### param(rowIndex): Number
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) for more information.

##### param(dataField): String
The [data field]({basewidgetpath}/Configuration/columns/#dataField), [caption]({basewidgetpath}/Configuration/columns/#caption), or [unique name]({basewidgetpath}/Configuration/columns/#name) of the column to which the cell belongs.

---
#####See Also#####
#include common-link-callmethods