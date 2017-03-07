<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->An action performed after an appointment is rendered. 'appointmentElement' argument specifies the rendered appointment element. 'appointmentData' argument specifies the rendered appointment data.<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Provides function parameters<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->Returns the data that is available for binding against the element<!--/fp1_field3d-->
<!--fp1_field4d-->Returns an object representing the appointment<!--/fp1_field4d-->
<!--fp1_field5d-->Returns an object representing the targeted appointment<!--/fp1_field5d-->
<!--fp1_field6d-->Returns an HTML element representing the appointment<!--/fp1_field6d-->
===========================================================================

<!--shortDescription-->
Fires after an appointment is rendered.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onAppointmentRendered](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentRendered) option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the appointment to be rendered, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
- [Handle Events - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events)
- [Handle Events - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events)
- [Handle Events - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxScheduler/Methods/#instance"></a> instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->appointmentData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The data that is bound to the initial appointment.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->targetedAppointmentData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The data that is bound to the appointment to be rendered.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->appointmentElement<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->jQuery<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
An HTML element of the appointment.
<!--/typeFunctionParamDescription1_field6-->
