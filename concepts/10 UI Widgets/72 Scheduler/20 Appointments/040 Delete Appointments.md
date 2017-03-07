Appointments can be deleted by end users in the UI and programmatically in code.

####Delete Appointments in UI####

To delete an appointment, click the appointment and then click the basket icon in the invoked tooltip. 

The appointment will be deleted from the [bound data source](/Documentation/Guide/UI_Widgets/Scheduler/Appointments/#Provide_a_Data_Source).

<div>
    <video width="824px" controls="yes">
        <source src="/Content/images/doc/16_1/UiWidgets/DeleteAppointment.mp4" type="video/mp4">
    </video>
</div>

####Delete Appointments in Code####

To delete an appointment in code, use the widget's [deleteAppointment(appointment)](/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#deleteAppointmentappointment) method passing the appointment object to be deleted. This method deletes the appointment from the bound [data source](/Documentation/Guide/UI_Widgets/Scheduler/Appointments/#Provide_a_Data_Source).

In addition, you can handle the [appoinmentDeleting](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleting) and [appointmnetDeleted](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleted) events raised before and after you delete an appointment from the data source.

[note]When you are deleting a recurring appointment using a UI, the Scheduler prompts you to edit either the active appointment or the entire series.