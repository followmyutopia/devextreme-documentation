An all-day appointment is a non-recurring appointment that covers the whole [timetable's period](/Documentation/Guide/Widgets/Scheduler/Timetable/).

![Scheduler All-Day Appointment](/Content/images/doc/19_2/UiWidgets/Scheduler_AllDayAppointment.png)

An appointment can also be marked as all-day by assigning **true** to the defining object's [allDay](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#allDay) field. The [startDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#startDate) field should also be present in this object; the [endDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#endDate) is optional.

    <!--JavaScript-->
    var allDayAppointment = [{
        text: "Fix bugs",
        startDate: new Date(2016, 4, 10),
        allDay: true
    }];

If appointments in your data source omit the **allDay** field but have another field instead, assign its name to the [allDayExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#allDayExpr) option.

---
##### jQuery

    <!--JavaScript-->
    var allDayAppointments = [{
        text: "Fix bugs",
        startDate: new Date(2016, 4, 10),
        long: true
    }];

    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: allDayAppointments,
            allDayExpr: "long"
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        [dataSource]="allDayAppointments"
        allDayExpr="long">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from "devextreme-angular";
    // ...
    export class AppComponent  {
        allDayAppointments = [{
            text: "Fix bugs",
            startDate: new Date(2016, 4, 10),
            long: true
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

[note]The **Scheduler** ignores the **startDate**'s and **endDate**'s time component for all-day appointments.

To mark an appointment as all-day in the UI, toggle the *"All day"* switcher on the appointment details form. This form appears when a user [adds](/Documentation/Guide/Widgets/Scheduler/Appointments/Add_Appointments/) or [updates](/Documentation/Guide/Widgets/Scheduler/Appointments/Update_Appointments/) an appointment. 

![Scheduler All Day Appointment Details](/Content/images/doc/19_2/UiWidgets/Scheduler_AllDayAppointment_Details.png)

All-day appointments are displayed in the all-day panel, which is visible by default. If you are not using such appointments, hide the all-day panel along with all-day appointments by assigning **false** to the [showAllDayPanel](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel) option.
