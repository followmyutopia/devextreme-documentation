<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'auto' | 'unlimited'<!--/acceptValues-->
<!--type-->Number | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the limit of full-sized appointments displayed per cell. In the *"day"*, *"week"* and *"workweek"* views, this option applies only to [all-day](/Documentation/Guide/Widgets/Scheduler/Appointments/Appointment_Types/#All-Day_Appointments) appointments.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values: 

- *"unlimited"*      
The widget resizes the appointments without a limit to fit them into a cell.
- *"auto"*      
The widget narrows the appointments down to 20 pixels in height. If they still do not fit into the cell, the widget aggregates them in an appointment collector.
- **Number**    
The number of appointments allowed in a single cell. Appointments are aggregated in an appointment collector when this number is exceeded.
<!--/fullDescription-->