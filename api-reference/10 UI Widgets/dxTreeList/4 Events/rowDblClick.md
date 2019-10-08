---
id: dxTreeList.rowDblClick
type: eventType
---
---
##### shortDescription
Raised when a row is double-clicked or double-tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxTreeListColumn>
The configurations of visible columns.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.isNewRow): Boolean
Indicates that the row is added, but not yet saved. Available if **rowType** is *"data"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's [key](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#key). Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).

##### field(e.values): Array<any>
Raw values displayed in the row's cells.

---
Main article: [onRowDblClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onRowDblClick)

#####See Also#####
#include common-link-handleevents