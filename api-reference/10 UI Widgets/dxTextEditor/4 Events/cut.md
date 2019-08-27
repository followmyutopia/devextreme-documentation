---
id: dxTextEditor.cut
type: eventType
---
---
##### shortDescription
Raised when the widget's input has been cut.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onCut]({basewidgetpath}/Configuration/#onCut)

#####See Also#####
#include common-link-handleevents