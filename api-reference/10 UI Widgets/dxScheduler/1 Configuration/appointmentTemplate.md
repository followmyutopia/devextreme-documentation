---
id: dxScheduler.Options.appointmentTemplate
type: template
default: 'item'
---
---
##### shortDescription
Specifies a custom template for appointments.

##### param(itemData): Object
The current appointment's data.

##### param(itemIndex): Number
The current appointment's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "appointment" }

##### return: String | Node | jQuery
A template name or container.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}

#####See Also#####
- [Customize Appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Customize_Appointment/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)