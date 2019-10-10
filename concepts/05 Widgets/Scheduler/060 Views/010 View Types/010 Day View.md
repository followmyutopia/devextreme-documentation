The **day** view displays appointments for a specified date. The **Scheduler** widget arranges appointments from top to bottom. If their time intervals overlap, their width is decreased and they are placed next to each other.

![Day View](/Content/images/doc/19_2/UiWidgets/Scheduler_Day_View.png)

All-day appointments are displayed on the all-day panel. You can set an appointment limit on this panel using the [maxApointmentsPerCell](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/maxAppointmentsPerCell.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell') option. Appointments are sent to an appointment collector when this limit is exceeded. If appointments in the collector are associated with the same resource, the collector is colored like this resource. Otherwise, the collector has a default color.

![Appointment Collector](/Content/images/doc/19_2/UiWidgets/Scheduler_Day_Appointment_Collector.png)

A user can click the appointment collector to view the removed appointments. 

![Drop-down List of Appointments](/Content/images/doc/19_2/UiWidgets/Scheduler_Day_DropDown_List.png)

Resource headers are displayed above the all-day panel when you [group appointments by resources](/concepts/05%20Widgets/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/').

![Resource headers](/Content/images/doc/19_2/UiWidgets/Scheduler_Day_Resource_Headers.png)
