<!--id-->dxChart.Options.onZoomEnd<!--/id-->
<!--EventForAction-->dxChart.zoomEnd<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when zooming or panning ends.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [zoomAndPan](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/)
- [onZoomStart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart)
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
<!--typeFunctionParamName1_field5-->rangeStart<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Date | Number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The argument axis' start value after zooming or panning. Deprecated in favor of the **range** field.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamDeprecated1_field5-->Use 'range' instead.<!--/typeFunctionParamDeprecated1_field5-->
<!--typeFunctionParamName1_field6-->rangeEnd<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Date | Number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The argument axis' end value after zooming or panning. Deprecated in favor of the **range** field.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamDeprecated1_field6-->Use 'range' instead.<!--/typeFunctionParamDeprecated1_field6-->
<!--typeFunctionParamName1_field7-->axis<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->chartAxisObject<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The zoomed/panned axis.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->range<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->VizRange<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The [visual range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/) when zooming or panning ends.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->previousRange<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->VizRange<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The visual range when zooming or panning starts.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->cancel<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Allows you to cancel zooming or panning.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->actionType<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->'zoom' | 'pan'<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Indicates whether the user has zoomed or panned the chart.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->zoomFactor<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Number<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The zoom factor.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->shift<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->Number<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The visual range's shift from the previous position, measured in numeric values or milliseconds (for date-time axes).       
Positive values indicate a shift towards greater axis values; negative values indicate a shift in the opposite direction.
<!--/typeFunctionParamDescription1_field13-->
