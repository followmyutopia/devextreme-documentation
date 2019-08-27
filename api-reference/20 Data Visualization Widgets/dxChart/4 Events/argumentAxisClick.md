---
id: dxChart.argumentAxisClick
type: eventType
---
---
##### shortDescription
Raised when a [label](/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/) on the [argument axis](/Documentation/Guide/Widgets/Chart/Axes/Overview/) is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.argument): Date | Number | String
The clicked label's value.

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

##### notUsedInTheme

---
Main article: [onArgumentAxisClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onArgumentAxisClick)

#####See Also#####
#include common-link-handleevents