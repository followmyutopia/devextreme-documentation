---
id: dxFunnel.hoverChanged
type: eventType
---
---
##### shortDescription
Raised after the pointer enters or leaves a [funnel item](/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/).

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.item): dxFunnelItem
The [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) object.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### notUsedInTheme

---
Main article: [onHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onHoverChanged)

#####See Also#####
#include common-link-handleevents