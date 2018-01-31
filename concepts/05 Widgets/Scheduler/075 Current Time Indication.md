The **Scheduler** displays a specific indicator that highlights the current time on a view by default. The indicator is available only on views containing the time scale.

![Current Time Indicator](/Content/images/doc/18_1/UiWidgets/Scheduler_Current_Time_Indicator.png)

Use the [showCurrentTimeIndicator](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showCurrentTimeIndicator) option to control the indicator's visibility.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            showCurrentTimeIndicator: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler ...
        [showCurrentTimeIndicator]="true">
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

Additionally, you can apply shading to cover the timetable up to the current time by assigning **true** to the [shadeUntilCurrentTime](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#shadeUntilCurrentTime) option.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({ 
            // ...
            showCurrentTimeIndicator: true,
            shadeUntilCurrentTime: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-scheduler ...
        [showCurrentTimeIndicator]="true"
        [shadeUntilCurrentTime]="true">
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
    url: "/Demos/WidgetsGallery/Demo/Scheduler/CurrentTimeIndicator/jQuery/Light/"
}

#####See Also#####
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)
