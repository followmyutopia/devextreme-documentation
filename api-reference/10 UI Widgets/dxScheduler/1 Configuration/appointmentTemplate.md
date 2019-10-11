---
id: dxScheduler.Options.appointmentTemplate
type: template
default: 'item'
---
---
##### shortDescription
Specifies a custom template for appointments.

##### param(model): Object
<!-- Description goes here -->

##### field(model.appointmentData): Object
<!-- Description goes here -->

##### field(model.targetedAppointmentData): Object
<!-- Description goes here -->

##### param(itemIndex): Number
The current appointment's index.

##### param(contentElement): dxElement
<!-- Description goes here -->

##### return: String | Node | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}

#####See Also#####
- [Customize Appointment](/concepts/05%20Widgets/Scheduler/030%20Appointments/050%20Customize%20Appointment.md '/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/')
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')