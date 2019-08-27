---
id: dxTextEditor.Options.onKeyDown
type: function(e)
default: null
EventForAction: dxTextEditor.keyDown
---
---
##### shortDescription
A function that is executed when a user is pressing a key on the keyboard.

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
