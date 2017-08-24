<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
Fires after an appointment has been double clicked.
<!--/shortDescription-->

<!--fullDescription-->
Instead, you can use the [onAppointmentDblClick](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentDblClick) option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the currently selected appointment, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Provides access to the widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
An HTML element of the widget.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->appointmentData<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The object associated with the initial appointment.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->targetedAppointmentData<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->object<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The object associated with the clicked appointment.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->appointmentElement<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->jQuery<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
An HTML element of the clicked appointment.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->jQueryEvent<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->jQueryEvent<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Specifies the jQuery event that caused action execution.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->cancel<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Boolean<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Indicates whether or not to cancel execution of the default appointment double click handler.
<!--/typeFunctionParamDescription1_field8-->
