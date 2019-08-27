---
id: dxPolarChart.seriesHoverChanged
type: eventType
---
---
##### shortDescription
Raised after the pointer enters or leaves a series.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): polarChartSeriesObject
The series whose hover state has been changed; described in the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/) section.

##### notUsedInTheme

---
Main article: [onSeriesHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onSeriesHoverChanged)

#####See Also#####
#include common-link-handleevents