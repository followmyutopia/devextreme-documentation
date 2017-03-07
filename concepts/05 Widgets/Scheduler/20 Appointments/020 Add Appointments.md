Appointments can be added by end users in the UI and programmatically.

####Add Appointments in UI####

To add an appointment, do the following.

- Click a cell in the scheduler timetable. The cell will be focused and ready to be used for creating an appointment.

- Click the focused cell. A popup window will be invoked.

- In the popup window, specify appointment details and click Done. This will create an appointment and add it to the [bound data source](/Documentation/Guide/Widgets/Scheduler/Appointments/#Provide_a_Data_Source).

<div>
    <video width="824px" controls="yes">
        <source src="/Content/images/doc/16_2/UiWidgets/Scheduler_AddAppointment.mp4" type="video/mp4">
    </video>
</div>

[note]By default, when you are working with an appointment using a UI, the fields displaying start date and end date timezones are not available. To show them, you can add the following code to the scheduler's options.

    <!--JavaScript-->
    var schedulerOptions = {
        . . . 
        onAppointmentFormCreated: function(arg) {
            var form = arg.form;
            form.itemOption("startDateTimeZone", { visible: true });
            form.itemOption("endDateTimeZone", { visible: true });
        }
    }

####Add Appointments in Code####

To add an appointment in code, use the widget's [addAppointment(appointment)](/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#addAppointmentappointment) method passing the appointment object as a parameter. This method adds the appointment to the [bound data source](/Documentation/Guide/Widgets/Scheduler/Appointments/#Provide_a_Data_Source).

In addition, you can handle the [appoinmentAdding](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdding) and [appointmnetAdded](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdded) events raised before and after you add an appointment to the data source.

