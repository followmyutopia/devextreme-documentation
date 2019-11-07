---
id: dxScheduler.Options.dropDownAppointmentTemplate
type: template
default: 'dropDownAppointment'
dep: dxScheduler.Options.appointmentTooltipTemplate
---
---
##### shortDescription
Specifies a custom template for tooltips displayed when users click a [cell overflow indicator](/Documentation/Guide/Widgets/Scheduler/Appointments/Cell_Overflow_Indicator/).

##### param(itemData): Object
The appointment's object.

##### param(itemIndex): Number
The appointment's index.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Node | jQuery
A template name or container.

---

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- **views**.[dropDownAppointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#dropDownAppointmentTemplate)
