---
id: dxFunnel.legendClick
type: eventType
---
---
##### shortDescription
Raised when a [legend item](/Documentation/Guide/Widgets/Funnel/Legend/Overview/) is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.item): dxFunnelItem
The [Item](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/) object.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### notUsedInTheme

---
Main article: [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#onLegendClick)

#####See Also#####
#include common-link-handleevents
- [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/legend/)