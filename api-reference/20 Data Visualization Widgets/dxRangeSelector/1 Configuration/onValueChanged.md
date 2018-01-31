<!--EventForAction-->..\4 Events\valueChanged.md<!--/EventForAction-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [valueChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Events/#valueChanged) event.
<!--/shortDescription-->

<!--fullDescription-->
When implementing the handling function, use the object passed to it as the parameter. Among fields of this object, you can find old and new start and end range values.

The **onValueChanged** function can be called when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior**.[callValueChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged) option.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForFiltering/jQuery/Light/"
}

#####See Also#####
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
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Array<Number, String, Date><!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Two values that represent new start and end values.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->previousValue<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Array<Number, String, Date><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Two values that represent old start and end values.
<!--/typeFunctionParamDescription1_field5-->
