---
id: dxScheduler.Options.dropDownAppointmentTemplate
type: template
default: 'dropDownAppointment'
---
---
##### shortDescription
Specifies a custom template for appointments in the appointment collector's drop-down list.

##### param(itemData): Object
The current appointment's object.

##### param(itemIndex): Number
The current appointment's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Node | jQuery
A template name or container.

---

#####See Also#####
- [Appointment Collector](/concepts/05%20Widgets/Scheduler/030%20Appointments/080%20Appointment%20Collector.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')
- **views**.[dropDownAppointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/dropDownAppointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#dropDownAppointmentTemplate')