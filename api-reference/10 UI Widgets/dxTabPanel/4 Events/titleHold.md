---
id: dxTabPanel.titleHold
type: eventType
---
---
##### shortDescription
Raised when a tab has been held for a [specified period](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#itemHoldTimeout).

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The data of the item whose title is held.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onTitleHold](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onTitleHold)

#####See Also#####
#include common-link-handleevents