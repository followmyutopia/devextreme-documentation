<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Displays the appointment tooltip for the specified target element.
<!--/shortDescription-->

<!--paramName1-->appointmentData<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The initial appointment data object.
<!--/paramDescription1-->

<!--paramName2-->target<!--/paramName2-->
<!--paramType2-->string|Node|jQuery<!--/paramType2-->
<!--paramDescription2-->
Specifies the target element the tooltip points to.
<!--/paramDescription2-->

<!--paramName3-->currentAppointmentData<!--/paramName3-->
<!--paramType3-->Object|undefined<!--/paramType3-->
<!--paramDescription3-->
The current appointment data object.
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
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
<!--/fullDescription-->