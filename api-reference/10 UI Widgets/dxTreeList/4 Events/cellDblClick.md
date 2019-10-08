---
id: dxTreeList.cellDblClick
type: eventType
---
---
##### shortDescription
Raised when a cell is double-clicked or double-tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.cellElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### field(e.column): dxTreeListColumn
The column's configuration.

##### field(e.columnIndex): Number
The index of the column the cell belongs to.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the row the cell belongs to. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.displayValue): any
The value displayed in the cell. Available if the **rowType** is *"data"*.      
Differs from the **value** field only when the cell belongs to a [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/) column.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.key): any
The row's [key](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#key). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row's properties. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.rowIndex): Number
The index of the row the cell belongs to. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).

##### field(e.text): String
The cell's [formatted](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#format) value converted to a string. Available if the **rowType** is *"data"*.

##### field(e.value): any
The cell's raw value. Available if the **rowType** is *"data"*.

---
Main article: [onCellDblClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellDblClick)

#####See Also#####
#include common-link-handleevents