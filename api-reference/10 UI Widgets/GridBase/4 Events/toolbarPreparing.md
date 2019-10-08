---
id: GridBase.toolbarPreparing
type: eventType
---
---
##### shortDescription
Raised before the toolbar is created.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.toolbarOptions): dxToolbar_Options
The [options of the toolbar](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/).

---
Main article: [onToolbarPreparing]({basewidgetpath}/Configuration/#onToolbarPreparing)

#####See Also#####
#include common-link-handleevents