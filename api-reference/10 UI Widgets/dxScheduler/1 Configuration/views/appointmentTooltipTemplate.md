---
id: dxScheduler.Options.views.appointmentTooltipTemplate
type: template
default: 'appointmentTooltip'
---
---
##### shortDescription
Specifies a custom template for appointment tooltips and appointments in the [appointment collector](/concepts/05%20Widgets/Scheduler/030%20Appointments/080%20Appointment%20Collector.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Collector/')'s drop-down list.

##### param(model): Object
The data of the appointment for which the tooltip is displayed.

##### field(model.appointmentData): Object
The appointment's data object.

##### field(model.targetedAppointmentData): Object
The appointment's data object.      
The difference between this and **appointmentData** fields is explained in the [onAppointmentClick](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentClick) description.

##### param(itemIndex): Number
The appointment's index.

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "appointment tooltip" }

##### return: String | Node | jQuery
A template name or container.

---
For appointments in the appointment collector, this option can be ignored in favor of the [dropDownAppointmentTemplate](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/views/dropDownAppointmentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#dropDownAppointmentTemplate').

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/"
}

#####See Also#####
- [Customize Individual Views](/concepts/05%20Widgets/Scheduler/060%20Views/020%20Customize%20Individual%20Views.md '/Documentation/Guide/Widgets/Scheduler/Views/Customize_Individual_Views/')
- [Customize Appointment Tooltip](/concepts/05%20Widgets/Scheduler/030%20Appointments/060%20Customize%20Appointment%20Tooltip.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment_Tooltip/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')