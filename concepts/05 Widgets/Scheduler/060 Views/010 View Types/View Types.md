The **Scheduler** widget provides several types of views. This topic describes visual elements and their position for each view.

A user switches between views with the [View Switcher](/Documentation/Guide/Widgets/Scheduler/View_Switcher/). To specify which views are available in it, assign an array to the [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#views) option. To define what view is displayed after the first launch, set the [currentView](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView) option.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({ 
            // ...
            views: ['day', 'week', 'agenda'],
            currentView: 'week'
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler ...
        [views]="['day', 'week', 'agenda']"
        currentView="week">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/BasicViews/jQuery/Light/"
}

[tags]scheduler, view, type, month, day, timeline views, timelineWeek, timelineWorkWeek, timelineMonth, workWeek, week, agenda, collapsed appointments, current view