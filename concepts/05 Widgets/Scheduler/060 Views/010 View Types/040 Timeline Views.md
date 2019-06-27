Timeline views display appointments on a horizontal timeline. The **Scheduler** widget arranges appointments from left to right. If their time intervals overlap, the width of appointments is decreased and they are placed alongside or under each other.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/Timelines/jQuery/Light/"
}

The **Scheduler** widget supports the following timeline views.

- **timelineDay** 

    ![TimelineDay View](/Content/images/doc/19_2/UiWidgets/Scheduler_TimelineDay_View.png)

- **timelineWeek** and **timelineWorkWeek**

    ![TimelineWeek View](/Content/images/doc/19_2/UiWidgets/Scheduler_TimelineWeek_View.png)

- **timelineMonth**

    ![TimelineMonth View](/Content/images/doc/19_2/UiWidgets/Scheduler_TimelineMonth_View.png)

[note] An appointment's size depends on its duration in days. Even if an appointment lasts only for several hours or minutes, it occupies the entire day cell.

If you [group appointments by resources](/Documentation/Guide/Widgets/Scheduler/Resources/Group_Appointments_by_Resources/), the resource headers are located at the left side of the view.

![Resource Headers](/Content/images/doc/19_2/UiWidgets/Scheduler_Timeline_Resource_Headers.png)

