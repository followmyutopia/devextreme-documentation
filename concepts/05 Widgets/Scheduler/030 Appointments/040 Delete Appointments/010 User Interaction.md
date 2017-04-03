After a user clicks an appointment, the **Scheduler** displays a tooltip with two buttons. To delete an appointment, a user clicks the button with a bucket icon. Note that the appointment will be deleted from the [data source](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource).

<div>
    <video width="640px" controls="yes">
        <source src="/Content/images/doc/17_1/UiWidgets/DeleteAppointment.mp4" type="video/mp4">
    </video>
</div>

If a user deletes a [recurring appointment](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#Recurring_Appointments), the **Scheduler** displays a dialog that allows choosing between deleting the current appointment and deleting the entire series of recurring appointments. If you do not want this dialog to appear, choose the edit mode beforehand using the [recurrenceEditMode](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#recurrenceEditMode) option.

    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            recurrenceEditMode: 'occurrence' // or 'series' | 'dialog'
        });
    });

To prevent a user from deleting an appointment, set the **editing** | [allowDeleting](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/editing/#allowDeleting) option to *false*.

    <!--JavaScript-->
    $(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            editing: { allowDeleting: false }
        });
    });
