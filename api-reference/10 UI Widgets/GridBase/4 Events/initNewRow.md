---
id: GridBase.initNewRow
type: eventType
---
---
##### shortDescription
Raised before a new row is added to the widget.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Object
The data of the inserted row; initially empty.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.promise): Promise<void>
<!-- Description goes here -->

---
Main article: [onInitNewRow]({basewidgetpath}/Configuration/#onInitNewRow)

#####See Also#####
#include common-link-handleevents