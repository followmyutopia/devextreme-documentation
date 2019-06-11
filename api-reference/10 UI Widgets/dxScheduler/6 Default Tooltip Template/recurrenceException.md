<!--id-->dxSchedulerAppointmentTooltipTemplate.recurrenceException<!--/id-->
===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies exceptions for a the current recurring appointment.
<!--/shortDescription-->

<!--fullDescription-->
To define an exception for a recurring appointment, specify the **recurrenceException** field in the appointment object. This field should be set using the [iCalendar RFC 2445](http://tools.ietf.org/html/rfc2445#section-4.8.5.2) specification.

[note]This option makes sense only if the appointment [recurrenceRule]({basewidgetpath}/Default_Tooltip_Template/#recurrenceRule) is specified.

For details on recurring appointments, refer to the [Appointment Types](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments) article.
<!--/fullDescription-->