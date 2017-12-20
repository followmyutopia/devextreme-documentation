===========================================================================
<!--default-->'appointmentTooltip'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering an appointment tooltip.
<!--/shortDescription-->

<!--fullDescription-->
A binding context of an appointment tooltip template is the data source object that corresponds to the currently rendered appointment.

So, in **Knockout approach**, you can bind template elements to the appointment object's fields directly. To access another binding context within an appointment tooltip template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html) binding variables.

In **AngularJS approach**, if you need to access appointment object fields within a template, use a variable whose name is assigned to the **dx-item-alias** directive. Add the directive to the widget element to specify an alias to the root object. Without this directive, appointment object fields are beyond reach. To access another binding context within an appointment tooltip template, use [Angular](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Appointment Tooltip](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/)

<!--/fullDescription-->
<!--typeFunctionParamName1-->appointmentData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data of the appointment whose tooltip is rendered.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->contentElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The appointment's container.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->