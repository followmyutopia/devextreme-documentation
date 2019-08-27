---
id: dxChart.Options.onSeriesHoverChanged
type: function(e)
default: null
EventForAction: dxChart.seriesHoverChanged
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a series.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The series whose hover state has been changed.

##### notUsedInTheme

---
To identify whether the pointer has entered or left the series, call the series' [isHovered()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isHovered) method.