---
id: GridBase.rowUpdated
type: eventType
---
---
##### shortDescription
Raised after a row has been updated in the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The updated data of the row.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object defining an error that may occur during updating.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
Main article: [onRowUpdated]({basewidgetpath}/Configuration/#onRowUpdated)

#####See Also#####
#include common-link-handleevents