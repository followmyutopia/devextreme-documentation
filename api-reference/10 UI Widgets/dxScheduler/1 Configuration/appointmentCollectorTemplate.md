===========================================================================
<!--default-->'appointmentCollector'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies an appointment collector's custom template.
<!--/shortDescription-->

<!--fullDescription-->
![Scheduler Appointment Collector](/Content/images/doc/18_2/UiWidgets/Scheduler_Appointment_Collector.png)
![Scheduler Compact Appointment Collector](/Content/images/doc/18_2/UiWidgets/Scheduler_Appointment_Collector_Compact.png)

You can also set a [similar option](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#appointmentCollectorTemplate) for an individual view.

#####See Also#####
- [Appointment Collector](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/)
- [dropDownAppointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dropDownAppointmentTemplate)
<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the appointment collector.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->appointmentCount<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Number<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The count of appointments aggregated in the appointment collector.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->isCompact<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Boolean<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Indicates whether the appointment collector is compact. See an image below.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionParamName2-->collectorElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The appointment collector's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->