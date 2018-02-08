===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when zooming or scrolling begins.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart) - a handler for this event.
- [zoomingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) - enables zooming in the chart.
- [scrollingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) - enables scrolling in the chart.
- [zoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd) - an event that fires when zooming or scrolling ends.
#include common-link-handleevents
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
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
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
