---
id: dxTreeList.Options.onRowClick
type: function(e) | String
default: null
EventForAction: dxTreeList.rowClick
---
---
##### shortDescription
A function that is executed when a grid row is clicked or tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.columns): Array<Object>
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The row's data.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.handled): Boolean
Indicates whether internal widget functions have already handled the event.

##### field(e.isExpanded): Boolean
Indicates whether the row is expanded or collapsed. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.isSelected): Boolean
Indicates whether the row is selected. Available if **rowType** is *"data"* or *"detail"*.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.

##### field(e.key): any
The row's key. Available if the **rowType** is *"data"*, *"detail"* or *"detailAdaptive"*.       
For plain data, the key value depends on the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. For hierarchical data, the key is generated automatically or set in the underlying **Store** of the [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource).

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
Prior to this function, the widget executes the [onCellClick](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick) function and sometimes internal functions. You can use the **handled** field to check whether internal functions were executed.

[note] When the clicked row is in the editing state or switches to this state, the **onRowClick** function is not executed. Instead, specify the **onCellClick** function.