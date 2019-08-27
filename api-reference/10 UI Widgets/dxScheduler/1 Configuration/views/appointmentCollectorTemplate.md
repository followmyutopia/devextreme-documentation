---
id: dxScheduler.Options.views.appointmentCollectorTemplate
type: template
default: 'appointmentCollector'
---
---
##### shortDescription
Specifies an appointment collector's custom template.

##### param(data): Object
Information about the appointment collector.

##### field(data.appointmentCount): Number
The count of appointments aggregated in the appointment collector.

##### field(data.isCompact): Boolean
Indicates whether the appointment collector is compact. See an image below.

##### param(collectorElement): dxElement
#include common-ref-elementparam with { element: "appointment collector" }

##### return: String | Node | jQuery
A template name or container.

---
![Scheduler Appointment Collector](/Content/images/doc/19_2/UiWidgets/Scheduler_Appointment_Collector.png)
![Scheduler Compact Appointment Collector](/Content/images/doc/19_2/UiWidgets/Scheduler_Appointment_Collector_Compact.png)

You can also set a [similar option](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#appointmentCollectorTemplate) for all views at once.

#####See Also#####
- [Appointment Collector](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/)
- [Customize Individual Views](/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/)
- [dropDownAppointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#dropDownAppointmentTemplate)