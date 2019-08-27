---
id: dxScheduler.appointmentAdding
type: eventType
---
---
##### shortDescription
Raised before an appointment is added to the data source.

##### param(e): Object
Information about the event.

##### field(e.appointmentData): Object
The data of the appointment to be added.

##### field(e.cancel): Boolean | Promise<Boolean>
Allows you to cancel appointment adding.        
If you pass a Promise to this field, appointment adding is continued or canceled once the Promise has been resolved.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if Knockout is used.

---
Main article: [onAppointmentAdding](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentAdding)

#####See Also#####
#include common-link-handleevents