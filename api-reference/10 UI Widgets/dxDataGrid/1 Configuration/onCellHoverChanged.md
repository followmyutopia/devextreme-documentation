---
id: dxDataGrid.Options.onCellHoverChanged
type: function(e)
default: null
EventForAction: dxDataGrid.cellHoverChanged
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a cell.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxDataGridColumn
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).

##### field(e.columnIndex): Number
The index of the column to which the cell belongs. For details on indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row to which the cell belongs.

##### field(e.displayValue): any
The cell's displayed value. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.eventType): String
Indicates whether the pointer entered or left the cell. Can be either *"mouseover"* or *"mouseout"*.

##### field(e.key): any
The row's key. If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.row): dxDataGridRowObject
The row [properties](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/).

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).

##### field(e.text): String
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format) value converted to a string.

##### field(e.value): any
The cell's raw value.

---
To identify whether the pointer has entered or left the cell, check the **eventType** field's value.