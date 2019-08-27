---
id: BaseWidget.exported
type: eventType
---
---
##### shortDescription
Raised after the widget is exported.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
Main article: [onExported]({basewidgetpath}/Configuration/#onExported)

#####See Also#####
#include common-link-handleevents