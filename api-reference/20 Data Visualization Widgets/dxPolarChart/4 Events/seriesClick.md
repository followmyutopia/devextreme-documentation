---
id: dxPolarChart.seriesClick
type: eventType
---
---
##### shortDescription
Raised when a [series](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series) is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): polarChartSeriesObject
The clicked series; described in the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/) section.

##### notUsedInTheme

---
Main article: [onSeriesClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onSeriesClick)

#####See Also#####
#include common-link-handleevents