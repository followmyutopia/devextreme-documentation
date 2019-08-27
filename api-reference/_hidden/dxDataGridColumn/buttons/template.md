---
id: dxDataGridColumnButton.template
type: template
---
---
##### shortDescription
Specifies a custom button template.

##### param(cellElement): dxElement
The container of the cell that should display the button. It is an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">HTML Element</a> or a <a href="http://api.jquery.com/Types/#jQuery" target="_blank">jQuery Element</a> when you use jQuery.

##### param(cellInfo): Object
The cell's properties.

##### field(cellInfo.column): dxDataGridColumn
The column's properties.

##### field(cellInfo.columnIndex): Number
The index of the cell's column. <br/> Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.

##### field(cellInfo.component): dxDataGrid
The widget's instance.

##### field(cellInfo.data): Object
The data of the cell's row.

##### field(cellInfo.key): any
The row's key.

##### field(cellInfo.row): dxDataGridRowObject
The row's properties.

##### field(cellInfo.rowIndex): Number
The index of the cell's row. Begins with 0 on each page. Group rows are included. <br/> Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.

##### field(cellInfo.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).

##### return: String | Node | jQuery
A template name or container.

---
#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)