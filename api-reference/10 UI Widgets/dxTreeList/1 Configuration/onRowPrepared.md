---
id: dxTreeList.Options.onRowPrepared
type: function(e)
default: null
EventForAction: dxTreeList.rowPrepared
---
---
##### shortDescription
A function that is executed after a row is created.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<dxTreeListColumn>
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's data. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.key): any
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.      
For plain data, the value of the key depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource).

##### field(e.level): Number
The node's [hierarchical level](/Documentation/ApiReference/UI_Widgets/dxTreeList/Node/#level).

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeListNode
The row's node.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "row" }

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.rowType): String
The row's [type](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType).

##### field(e.values): Array<any>
Values displayed in the row cells.

---
