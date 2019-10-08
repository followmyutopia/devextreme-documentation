---
id: dxMenu.submenuHidden
type: eventType
---
---
##### shortDescription
Raised after a submenu is hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.rootItem): dxElement
#include common-ref-elementparam with { element: "root menu element" }

---
Main article: [onSubmenuHidden](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuHidden)

#####See Also#####
#include common-link-handleevents