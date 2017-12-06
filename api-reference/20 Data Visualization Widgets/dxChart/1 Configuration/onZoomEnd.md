<!--EventForAction-->..\4 Events\zoomEnd.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [zoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd) event.
<!--/shortDescription-->

<!--fullDescription-->
This handler is called when zooming or scrolling ends.

#####See Also#####
- [zoomingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode) - enables zooming in the chart.
- [scrollingMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode) - enables scrolling in the chart.
- [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart) - a handler for the [zoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart) event.
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
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
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
