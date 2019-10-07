---
id: dxScheduler.Options.views.dropDownAppointmentTemplate
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
- [Appointment Collector](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/)
- [Customize Individual Views](/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)