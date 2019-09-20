---
id: dxDataGrid.rowDblClick
type: eventType
---
---
##### shortDescription
Raised when a row is double-clicked or double-tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxDataGridColumn>
The configurations of visible columns.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.groupIndex): Number
The row's [group index](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex). Available if **rowType** is *"group"*.

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"*, *"detail"*, or *"group"*.

##### field(e.isNewRow): Boolean
<!-- Description goes here -->

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's [key](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key) or a group row's [key](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Group_Index_and_Key). Available if the **rowType** is *"data"*, *"detail"*, *"detailAdaptive"*, or *"group"*.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).

##### field(e.values): Array<any>
Raw values displayed in the row's cells.

---
Main article: [onRowDblClick](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowDblClick)

#####See Also#####
#include common-link-handleevents