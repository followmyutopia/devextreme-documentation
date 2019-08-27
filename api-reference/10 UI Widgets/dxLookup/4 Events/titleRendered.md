---
id: dxLookup.titleRendered
type: eventType
---
---
##### shortDescription
Raised when the drop-down list's title is rendered.

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
Main article: [onTitleRendered](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onTitleRendered)

#####See Also#####
#include common-link-handleevents