===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when zooming or scrolling ends.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [onZoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd) - a handler for this event.
- [zoomingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) - enables zooming in the chart.
- [scrollingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) - enables scrolling in the chart.
- [zoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart) - an event that fires when zooming or scrolling begins.
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->rangeStart<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Date|Number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The argument axis' start value after zooming or scrolling.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->rangeEnd<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Date|Number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The argument axis' end value after zooming or scrolling.
<!--/typeFunctionParamDescription1_field5-->
