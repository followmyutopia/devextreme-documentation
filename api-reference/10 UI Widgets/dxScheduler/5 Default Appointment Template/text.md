<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies the text inserted into the item element.<!--/d-->
===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the subject of the appointment.
<!--/shortDescription-->

<!--fullDescription-->
The subject will present the appointment in a timetable.

Note that if the appointment width is less than 40 pixels or its height is less than 15 pixels, the appointment subject, [end](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#endDate) and [start](/Documentation/ApiReference/UI_Widgets/dxScheduler/Default_Appointment_Template/#startDate) dates are hidden. If you want to disable this behavior, override the ".dx-scheduler-appointment-empty .dx-scheduler-appointment-content" CSS.

    <!--CSS-->
    .dx-scheduler-appointment-empty .dx-scheduler-appointment-content {
        display: block;
    }
<!--/fullDescription-->