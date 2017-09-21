To add an appointment, a user follows the steps listed below.

1. Clicks a cell in the timetable to set focus on it.
2. Clicks the focused cell once again. The appointment details form will be shown.
3. In the form, specifies required fields and clicks the *"Done"* button. This will create an appointment and add it to the [data source](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource).

<div>
    <video width="640px" controls="yes">
        <source src="/Content/images/doc/17_2/UiWidgets/add_appointment.mp4" type="video/mp4">
    </video>
</div>

To prevent an end user from adding an appointment, set the **editing**.[allowAdding](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowAdding) option to **false**.

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({ 
            // ...
            editing: { allowAdding: false }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ... >
        <dxo-editing [allowAdding]="false"></dxo-editing>
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