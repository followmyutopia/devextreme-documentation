---
id: dxList.pullRefresh
type: eventType
---
---
##### shortDescription
Raised when the "pull to refresh" gesture is performed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onPullRefresh](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onPullRefresh)

#####See Also#####
- [List - Touch-Screen Gestures](/Documentation/Guide/Widgets/List/End-User_Interaction/Touch-Screen_Gestures/)
#include common-link-handleevents