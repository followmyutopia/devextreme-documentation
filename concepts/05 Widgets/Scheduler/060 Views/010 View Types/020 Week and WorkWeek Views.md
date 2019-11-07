The **week** and **workWeek** views display appointments for a week. The **workWeek** view does not include weekends. The **Scheduler** widget arranges appointments from top to bottom. If their time intervals overlap, their width is decreased and they are placed next to each other.

![Week View](/Content/images/doc/19_2/UiWidgets/Scheduler_Week_View.png)

All-day appointments are displayed on the All-day panel. You can set an appointment limit on this panel using the [maxAppointmentsPerCell](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell) option. Appointments that exceed this limit are hidden, and a [cell overflow indicator](/Documentation/Guide/Widgets/Scheduler/Appointments/Cell_Overflow_Indicator/) is displayed instead. If hidden appointments are associated with the same resource, the indicator will have the same color as this resource. Otherwise, the indicator has a default color.

![Scheduler: Cell overflow indicator on a week view](/Content/images/doc/19_2/UiWidgets/scheduler-week-view-cell-overflow-indicator.png)

A user can click the cell overflow indicator to view the hidden appointments.

![Drop-down List of Appointments](/Content/images/doc/19_2/UiWidgets/Scheduler_Week_DropDown_List.png)

Resource headers are above the day scale when you [group appointments by resources](/concepts/05%20Widgets/Scheduler/040%20Resources/030%20Group%20Appointments%20by%20Resources.md '/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/').

![Resource Headers](/Content/images/doc/19_2/UiWidgets/Scheduler_Week_Resource_Headers.png)
