---
id: dxChart.Options.onArgumentAxisClick
type: function(e) | String
default: null
EventForAction: dxChart.argumentAxisClick
---
---
##### shortDescription
A function that is executed when a [label](/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/) on the [argument axis](/Documentation/Guide/Widgets/Chart/Axes/Overview/) is clicked or tapped.

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
