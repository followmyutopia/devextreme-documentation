===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when zooming or panning ends.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onZoomEnd](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd)

#####See Also#####
#include common-link-handleevents
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
The argument axis' start value after zooming or panning. Deprecated in favor of the **range** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'range' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->rangeEnd<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Date|Number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The argument axis' end value after zooming or panning. Deprecated in favor of the **range** field.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamDeprecated1_field5-->Use 'range' instead.<!--/typeFunctionParamDeprecated1_field5-->
<!--typeFunctionParamName1_field6-->axis<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->chartAxisObject<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The zoomed/panned axis.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->range<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->VizRange<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The [visual range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/) when zooming or panning ends.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->previousRange<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->VizRange<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The visual range when zooming or panning starts.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->cancel<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Allows you to cancel zooming or panning.
<!--/typeFunctionParamDescription1_field9-->
