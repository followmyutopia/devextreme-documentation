---
id: dxTabPanel.titleRendered
type: eventType
---
---
##### shortDescription
Raised after a tab is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemData): Object
The data of the item whose title is rendered.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onTitleRendered](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onTitleRendered)

#####See Also#####
#include common-link-handleevents