<!--id-->dxScheduler.showAppointmentPopup(appointmentData, createNewAppointment, currentAppointmentData)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Shows the appointment details form.
<!--/shortDescription-->

<!--paramName1-->appointmentData<!--/paramName1-->
<!--paramType1-->Object|undefined<!--/paramType1-->
<!--paramDescription1-->
The initial appointment.
<!--/paramDescription1-->

<!--paramName2-->createNewAppointment<!--/paramName2-->
<!--paramType2-->Boolean|undefined<!--/paramType2-->
<!--paramDescription2-->
Specifies whether a new appointment is created when editing is finished.
<!--/paramDescription2-->

<!--paramName3-->currentAppointmentData<!--/paramName3-->
<!--paramType3-->Object|undefined<!--/paramType3-->
<!--paramDescription3-->
The current appointment.
<!--/paramDescription3-->

<!--fullDescription-->
In case of recurring appointments or appointments with multiple resources, you may want to show a popup for the specified appointment, not the initial appointment. For this purpose, use the **currentAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

For example, take a look at a recurring appointment that starts on July 18 at 8:00 AM, repeats every day and belongs to two owners. If you call the method for the appointment from the recurring series, for example the second appointment belonging to the second owner, the following information will be in the **appointmentData** and **currentAppointmentData** fields.

    <!--JavaScript-->
    // The initial appointment data
    var appointmentData = {
        startDate: new Date(2016, 6, 18, 8), 
        endDate: new Date(2016, 6, 18, 9),
        ownerId: [1, 2],
        recurrenceRule: "FREQ=DAILY"
    };
    
    // The current appointment data
    var currentAppointmentData = {
        startDate: new Date(2016, 6, 19, 8), 
        endDate: new Date(2016, 6, 19, 9),
        ownerId: 2,
        recurrenceRule: "FREQ=DAILY"
    };

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->