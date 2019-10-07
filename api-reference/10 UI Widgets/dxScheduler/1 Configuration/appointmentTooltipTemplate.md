---
id: dxScheduler.Options.appointmentTooltipTemplate
type: template
default: 'appointmentTooltip'
---
---
##### shortDescription
Specifies a custom template for appointment tooltips and appointments in the [appointment collector](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/)'s drop-down list.

##### param(appointmentData): Object
The initial appointment's data.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### param(targetedAppointmentData): Object
The data of the appointment whose tooltip is rendered.      
Refer to the [onAppointmentClick](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick) description for more information on the difference between the **appointmentData** and **targetedAppointmentData** parameters.

##### param(itemIndex): Number
The appointment's index.

##### return: String | Node | jQuery
A template name or container.

---
For appointments in the appointment collector, this option can be ignored in favor of the [dropDownAppointmentTemplate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dropDownAppointmentTemplate).

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}

#####See Also#####
- [Customize Appointment Tooltip](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)