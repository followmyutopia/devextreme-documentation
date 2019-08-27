---
id: dxChart.Options.onSeriesClick
type: function(e) | String
default: null
EventForAction: dxChart.seriesClick
---
---
##### shortDescription
A function that is executed when a [series](/Documentation/Guide/Widgets/Chart/Series/Overview/) is clicked or tapped.

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

##### field(e.target): chartSeriesObject
The clicked series.

##### notUsedInTheme

---
[note] This function is also executed when a [series point](/Documentation/Guide/Widgets/Chart/Series_Points/Overview/) or [legend item](/Documentation/Guide/Widgets/Chart/Legend/Overview/) is clicked or tapped. You can cancel the execution in the [onPointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick) and [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onLegendClick) functions.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsadvancedfeaturesmultipleseriesselection/"
}