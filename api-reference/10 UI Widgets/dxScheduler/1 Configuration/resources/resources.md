---
id: dxScheduler.Options.resources
type: Array<Object>
default: []
---
---
##### shortDescription
Specifies an array of resources available in the scheduler.

---
Each element of this array is an object that defines a resource kind - a room, a car or any other resource kind. A resource kind object must have at least the following fields.

- [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#dataSource)  
Specify the available resources of this kind (room1, room2, etc.).

- [fieldExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/resources/#fieldExpr)  
The name of the appointment object field that specifies a resource of this kind (e.g., "room").

There are more fields that can be specified within a resource kind object. They are listed below. For details on how to define a resource and assign it to scheduler appointments, refer to the [Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/) article.

#####See Also#####
- **Demos**: [Resources](/Demos/WidgetsGallery/Demo/Scheduler/Resources/jQuery/Light/) | [Grouping by Resources](/Demos/WidgetsGallery/Demo/Scheduler/GroupedAppointments/jQuery/Light/)
- [Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Assign_Appointments_to_Resources/)