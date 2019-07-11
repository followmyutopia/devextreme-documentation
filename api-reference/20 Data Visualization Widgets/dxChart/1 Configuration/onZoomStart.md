<!--id-->dxChart.Options.onZoomStart<!--/id-->
<!--EventForAction-->dxChart.zoomStart<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when zooming or panning begins.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [zoomAndPan](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/)
- [onZoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
#include common-ref-elementparam with { element: "widget" }
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->event<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
#include common-ref-eventparam
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->axis<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->chartAxisObject<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The zoomed/panned axis.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->range<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->VizRange<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The [visual range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/) when zooming or panning starts.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->cancel<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Boolean<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Allows you to cancel zooming or panning.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->actionType<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->'zoom' | 'pan'<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Indicates whether the user is zooming or panning the chart.
<!--/typeFunctionParamDescription1_field8-->
