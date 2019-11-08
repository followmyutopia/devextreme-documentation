When the [limit of full-sized appointments per cell](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#maxAppointmentsPerCell) is exceeded, cells display overflow indicators. Users can click these indicators to display remaining appointments in a tooltip.

Depending on the [view type](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/), overflow indicators can be compact or full-size. Full-size indicators are used in [Month](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Month_View) and all [Timeline](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Timeline_Views) view types. Compact indicators are used in [Day](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Day_View), [Week, and WorkWeek](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/#Week_and_WorkWeek_Views) view types.

![DevExtreme Scheduler: Cell Overflow Indicator](/images/UiWidgets/scheduler-cell-overflow-indicator.png)
![DevExtreme Scheduler: Compact Cell Overflow Indicator](/images/UiWidgets/scheduler-cell-overflow-indicator-compact.png)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/LimitAppointmentCountPerCell/jQuery/Light/"
}

To customize overflow indicators, set the [appointmentCollectorTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentCollectorTemplate). Similarly, you can specify the [appointmentTooltipTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentTooltipTemplate) to customize appointments displayed in the overflow indicator's tooltip.

#####See Also#####
- [Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
- [Customize Appointment Details Form](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Details_Form/)
- [Customize Appointment Tooltip](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/)

[tags]scheduler, appointment collector, overflow indicator, customize tooltip, hidden appointments 
