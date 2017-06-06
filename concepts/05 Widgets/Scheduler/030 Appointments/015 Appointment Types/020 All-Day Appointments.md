An all-day appointment is a non-recurring appointment that lasts all day. 

![Scheduler All-Day Appointment](/Content/images/doc/17_2/UiWidgets/Scheduler_AllDayAppointment.png)

An object defining an all-day appointment should have the [allDay](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#allDay) field set to *true* and the [startDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#startDate) field specified; [endDate](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#endDate) is optional.

    <!--JavaScript-->
    var allDayAppointment = [{
        text: "Fix bugs",
        startDate: new Date(2016, 4, 10),
        allDay: true
    }];

If appointments in your data source omit the **allDay** field, but have another field instead, assign its name to the [allDayExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#allDayExpr) option.

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

[note]For all-day appointments, the **Scheduler** ignores the time component of **startDate** and **endDate**.

In the UI, to mark an appointment as all-day, toggle the *"All day"* switcher on the appointment details form. This form appears when a user [adds](/Documentation/Guide/Widgets/Scheduler/Appointments/Add_Appointments/) or [updates](/Documentation/Guide/Widgets/Scheduler/Appointments/Update_Appointments/) an appointment. 

![Scheduler All Day Appointment Details](/Content/images/doc/17_2/UiWidgets/Scheduler_AllDayAppointment_Details.png)

All-day appointments are displayed in the all-day panel, which is visible by default. If you do not intend to use such appointments, hide the all-day panel by assigning *false* to the [showAllDayPanel](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#showAllDayPanel) option.
