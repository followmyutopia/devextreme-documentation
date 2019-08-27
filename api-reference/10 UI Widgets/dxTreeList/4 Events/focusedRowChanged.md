---
id: dxTreeList.focusedRowChanged
type: eventType
---
---
##### shortDescription
Raised after the focused row changes. Applies only when [focusedRowEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled) is **true**.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row's properties.

##### field(e.rowElement): dxElement
#include common-ref-elementparam with { element: "focused row" }

##### field(e.rowIndex): Number
The row's index.

---
Main article: [onFocusedRowChanged](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanged)

#####See Also#####
#include common-link-handleevents