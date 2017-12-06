===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies exceptions for the current recurring appointment.
<!--/shortDescription-->

<!--fullDescription-->
To define an exception for a recurring appointment, specify the **recurrenceException** field in the appointment object. This field enables you to specify several appointments to exclude. Each appointment is specified by the start date and time. The start time of each excluded appointment should strictly match the start time of the initial appointment.

[note]This option makes sense only if the appointment [recurrenceRule]({basewidgetpath}/Default_Appointment_Template/#recurrenceRule) is specified.

For details on recurring appointments, refer to the [Appointment Types](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments) article.
<!--/fullDescription-->