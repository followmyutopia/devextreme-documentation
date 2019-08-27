---
id: dxBarGauge.tooltipHidden
type: eventType
---
---
##### shortDescription
Raised when a tooltip becomes hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): Object
Information on the bar being pressed or hovered over with the mouse pointer. Contains the **index** field.

##### notUsedInTheme

---
Main article: [onTooltipHidden](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#onTooltipHidden)

#####See Also#####
#include common-link-handleevents