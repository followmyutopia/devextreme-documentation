---
id: dxTreeList.Options.onFocusedCellChanged
type: function(e)
default: null
EventForAction: dxTreeList.focusedCellChanged
---
---
##### shortDescription
A function that is executed after the focused cell changes.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "focused cell" }

##### field(e.column): dxTreeListColumn
The column's properties.

##### field(e.columnIndex): Number
The index of the cell's column.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row's properties.

##### field(e.rowIndex): Number
The index of the cell's row.

---
#####See Also#####
- [focusedRowIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowIndex) | [focusedRowKey](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowKey)
- [focusedColumnIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedColumnIndex)