---
id: dxTreeList.focusedRowChanging
type: eventType
---
---
##### shortDescription
Raised before the focused row changes. Applies only when [focusedRowEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled) is **true**.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel focusing a new row.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.newRowIndex): Number
The index of the row to be focused.

##### field(e.prevRowIndex): Number
The index of the previously focused row.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "to-be-focused row" }

##### field(e.rows): Array<dxTreeListRowObject>
The visible rows' properties.

---
Main article: [onFocusedRowChanging](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanging)

#####See Also#####
#include common-link-handleevents