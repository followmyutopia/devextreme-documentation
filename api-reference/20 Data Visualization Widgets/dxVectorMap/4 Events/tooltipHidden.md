---
id: dxVectorMap.tooltipHidden
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

##### field(e.target): MapLayerElement
The layer element whose tooltip is hidden; described in the [Layer Element](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Map_Elements/Layer_Element/) section.

##### notUsedInTheme

---
Main article: [onTooltipHidden](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onTooltipHidden)

#####See Also#####
#include common-link-handleevents