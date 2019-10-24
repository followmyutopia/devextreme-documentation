---
id: dxPolarChart.zoomStart
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when zooming or panning begins.

##### param(e): Object
Information about the event.

##### field(e.actionType): 'zoom' | 'pan'
Indicates whether the user is zooming or panning the chart.

##### field(e.axis): chartAxisObject
The zoomed/panned axis.

##### field(e.cancel): Boolean
Allows you to cancel zooming or panning.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.range): VizRange
The [visual range](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/visualRange/) when zooming or panning starts.

---
Main article: [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onZoomStart)

#####See Also#####
#include common-link-handleevents