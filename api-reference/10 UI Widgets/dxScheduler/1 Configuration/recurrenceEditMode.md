<!--id-->dxScheduler.Options.recurrenceEditMode<!--/id-->
===========================================================================
<!--default-->'dialog'<!--/default-->
<!--acceptValues-->'dialog' | 'occurrence' | 'series'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the edit mode for recurring appointments.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

- "dialog"  
 Displays a dialog that suggests to a user to choose between editing the entire series or only the current appointment.

- "series"  
 Enables an end-user to edit only the entire appointment series.

- "occurrence"  
 Enables an end-user to edit only the current appointment.

#include common-ref-enum with {
    enum: "`SchedulerRecurrenceEditMode`",
    values: "`Dialog`, `Series`, and `Occurrence`"
}
<!--/fullDescription-->