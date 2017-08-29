<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'dialog'<!--/default-->
<!--acceptValues-->'dialog' | 'series' | 'occurrence'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the edit mode for recurring appointments.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

- 'dialog'  
 Displays a dialog that suggests to a user to choose between editing the entire series or only the current appointment.

- 'series'  
 Enables an end-user to edit only the entire appointment series.

- 'occurrence'  
 Enables an end-user to edit only the current appointment.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SchedulerRecurrenceEditMode` enum. This enum accepts the following values: `Dialog`, `Series` and `Occurrence`.
<!--/fullDescription-->