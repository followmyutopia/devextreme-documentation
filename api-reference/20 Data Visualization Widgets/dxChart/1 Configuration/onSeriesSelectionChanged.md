<!--EventForAction-->..\4 Events\seriesSelectionChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [seriesSelectionChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesSelectionChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series whose selection state has been changed. To identify whether this series was selected or deselected, call its [isSelected()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected) method. To discover series fields and methods, refer to the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) class description.

To learn more about how to handle selection, refer to the [Selection Handling](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling) topic.
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
<!--typeFunctionParamName1_field4-->target<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->chartSeriesObject<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The series whose selection state has been changed.
<!--/typeFunctionParamDescription1_field4-->
