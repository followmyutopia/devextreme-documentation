===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Fires when the selected range is changed.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as the parameter. Among fields of this object, you can find old and new start and end range values.

The **valueChanged** event can be fired when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior**.[callValueChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged) option.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-advanced_features-zooming_and_scrolling_api" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Demo</a>

#####See Also#####
- [onValueChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onValueChanged)
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
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Array<number,string,Date><!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Two values that represent new start and end values.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->previousValue<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Array<number,string,Date><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Two values that represent old start and end values.
<!--/typeFunctionParamDescription1_field5-->
