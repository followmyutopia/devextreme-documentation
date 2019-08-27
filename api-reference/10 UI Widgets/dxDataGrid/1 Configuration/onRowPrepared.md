---
id: dxDataGrid.Options.onRowPrepared
type: function(e)
default: null
EventForAction: dxDataGrid.rowPrepared
---
---
##### shortDescription
A function that is executed after a row is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxDataGridColumn>
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's raw data. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.groupIndex): Number
The row's [group index](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex). Available if **rowType** is *"group"*.

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Unavailable if **rowType** is *"header"*, *"filter"* or *"totalFooter"*.

##### field(e.isSelected): Boolean
Indicates whether the prepared row is [selected](/Documentation/Guide/Widgets/DataGrid/Selection/). Available only if **rowType** is *"data"*.

##### field(e.key): any
The row's key.     
If a field providing keys is not specified in the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource), the whole data object is considered the key.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType).

##### field(e.values): Array<any>
Values displayed in the row cells.

---
