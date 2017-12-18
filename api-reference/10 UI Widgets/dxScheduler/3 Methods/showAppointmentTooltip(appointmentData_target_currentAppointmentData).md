===================================================================
===================================================================

<!--shortDescription-->
Shows a tooltip for a target element.
<!--/shortDescription-->

<!--paramName1-->appointmentData<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The initial appointment.
<!--/paramDescription1-->

<!--paramName2-->target<!--/paramName2-->
<!--paramType2-->String|Node|jQuery<!--/paramType2-->
<!--paramDescription2-->
The target element.
<!--/paramDescription2-->

<!--paramName3-->currentAppointmentData<!--/paramName3-->
<!--paramType3-->Object|undefined<!--/paramType3-->
<!--paramDescription3-->
The current appointment.
<!--/paramDescription3-->

<!--fullDescription-->
In case of recurring appointments or appointments with multiple resources, you may want to show a tooltip for the specified appointment, not the initial one. For this purpose, use the **currentAppointmentData** of the method parameters. Otherwise, use the **appointmentData** parameter.

For example, there is a recurring appointment that starts on July 18 at 8:00 AM, repeats every day and belongs to two owners. If you call the method for an appointment from the recurring series, for example the second appointment belonging to the second owner, the following information will be presented in the **appointmentData** and **currentAppointmentData** parameters.

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