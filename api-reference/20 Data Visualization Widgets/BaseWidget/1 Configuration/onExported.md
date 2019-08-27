---
id: BaseWidget.Options.onExported
type: function(e)
default: null
EventForAction: BaseWidget.exported
---
---
##### shortDescription
A function that is executed after the widget is exported.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
#####See Also#####
- [onExporting]({basewidgetpath}/Configuration#onExporting)
- [onFileSaving]({basewidgetpath}/Configuration#onFileSaving)