<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Callback function which call at selected range changing<!--/d-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->EVENT<!--/type-->
<!--fp1d-->Event argument.<!--/fp1d-->
<!--fp1_field1d-->Widget itself.<!--/fp1_field1d-->
<!--fp1_field2d-->Widget container.<!--/fp1_field2d-->
<!--fp1_field3d-->Start value of selected range.<!--/fp1_field3d-->
<!--fp1_field4d-->End value of selected range.<!--/fp1_field4d-->
===========================================================================

<!--shortDescription-->
Fires when the selected range is changed.
<!--/shortDescription-->

<!--fullDescription-->
When implementing a handling function, use the object passed to it as the parameter. Among fields of this object, you can find updated start and end range values.

The **selectedRangeChanged** event can be fired when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior** | [callSelectedRangeChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callSelectedRangeChanged) option.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Methods/#instance">widget instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
 The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->startValue<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Date|Number<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The updated start range value.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->endValue<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Date|Number<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The updated end range value.
<!--/typeFunctionParamDescription1_field4-->
