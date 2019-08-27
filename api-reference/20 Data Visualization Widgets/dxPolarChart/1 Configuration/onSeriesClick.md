---
id: dxPolarChart.Options.onSeriesClick
type: function(e) | String
default: null
EventForAction: dxPolarChart.seriesClick
---
---
##### shortDescription
A function that is executed when a [series](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series) is clicked or tapped.

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
[note] This function is also executed when a [series point](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points) or [legend item](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Legend) is clicked or tapped. You can cancel the execution in the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onPointClick) and [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onLegendClick) functions.