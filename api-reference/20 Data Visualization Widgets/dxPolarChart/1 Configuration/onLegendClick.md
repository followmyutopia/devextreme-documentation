<!--EventForAction-->..\4 Events\legendClick.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e) | String<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Events/#legendClick) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series to which the clicked legend item belongs. To learn about series members you can use, refer to the description of the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/) object.

Alternatively, you can navigate to a specific URL when the **legendClick** event fires. For this purpose, assign this URL to the **onLegendClick** option.

To learn more about handling click operations, and to see an example, refer to the [Click Handling](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling) topic.
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
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->jQueryEvent<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->jQuery.Event<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamDeprecated1_field4-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field4-->
<!--typeFunctionParamName1_field5-->event<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->target<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->polarChartSeriesObject<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The series that corresponds to the clicked legend item; described in the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/) section.
<!--/typeFunctionParamDescription1_field6-->
