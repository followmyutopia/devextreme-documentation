---
id: dxTextEditor.keyUp
type: eventType
---
---
##### shortDescription
Raised when a user releases a key on the keyboard.

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
Model data. Available only if Knockout is used.

---
Main article: [onKeyUp](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/onKeyUp.md '{basewidgetpath}/Configuration/#onKeyUp')

#####See Also#####
#include common-link-handleevents