---
id: GridBase.rowCollapsing
type: eventType
---
---
##### shortDescription
Raised before a row is collapsed.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel row collapsing.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The key of the row.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
Main article: [onRowCollapsing]({basewidgetpath}/Configuration/#onRowCollapsing)

#####See Also#####
#include common-link-handleevents