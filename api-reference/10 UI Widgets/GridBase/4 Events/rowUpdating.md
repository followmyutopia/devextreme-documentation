---
id: GridBase.rowUpdating
type: eventType
---
---
##### shortDescription
Raised before a row is updated in the data source.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
**true**, a Promise resolved with **true**, or a rejected Promise stops row updating.       
**false** or a Promise resolved with **false** or **undefined** continues row updating.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.key): any
The row's key.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.newData): Object
The row's updated data.

##### field(e.oldData): Object
The row's old data.

---
Main article: [onRowUpdating]({basewidgetpath}/Configuration/#onRowUpdated)

#####See Also#####
#include common-link-handleevents