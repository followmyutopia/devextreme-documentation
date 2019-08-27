---
id: dxScheduler.Options.views.groupOrientation
acceptValues: 'horizontal' | 'vertical'
type: String
---
---
##### shortDescription
Arranges resource headers vertically (in a column) or horizontally (in a row).

---
This option's default value depends on the view [type](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type). The following list illustrates the dependency:

- *"horizontal"*        
For the **day**, **month**, **week**, and **workWeek** view types.

- *"vertical"*          
For the **timelineDay**, **timelineMonth**, **timelineWeek**, and **timelineWorkWeek** view types. For the **agenda**, resource headers are always organized vertically.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/jQuery/Light/"
}

#####See Also#####
- [Group Appointments by Resources](/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/)