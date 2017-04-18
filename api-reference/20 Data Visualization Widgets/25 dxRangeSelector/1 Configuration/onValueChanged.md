<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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

The **onValueChanged** function can be called when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior** | [callValueChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged) option.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-advanced_features-zooming_and_scrolling_api" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Demo</a>

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#instance">widget instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->value<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->array<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Two values that represent new start and end values.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->previousValue<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->array<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Two values that represent old start and end values.
<!--/typeFunctionParamDescription1_field4-->
