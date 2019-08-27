---
id: dxTreeList.contextMenuPreparing
type: eventType
---
---
##### shortDescription
Raised before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.column): dxTreeListColumn
This column's [configuration](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).

##### field(e.columnIndex): Number
The index of the column on which the context menu is invoked.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/) section.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row [properties](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/).

##### field(e.rowIndex): Number
The index of the row on which the context menu is invoked. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/) for more information.

##### field(e.target): String
The name of the element on which the context menu is invoked: *"header"*, *"content"*, or *"footer"*. This field is read-only.

##### field(e.targetElement): dxElement
#include common-ref-elementparam with { element: "element" }

---
Main article: [onContextMenuPreparing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick)

#####See Also#####
#include common-link-handleevents