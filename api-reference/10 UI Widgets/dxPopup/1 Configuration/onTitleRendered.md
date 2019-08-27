---
id: dxPopup.Options.onTitleRendered
type: function(e)
default: null
EventForAction: dxPopup.titleRendered
---
---
##### shortDescription
A function that is executed when the widget's [title]({basewidgetpath}/Configuration/#title) is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.titleElement): dxElement
#include common-ref-elementparam with { element: "title" }

---
