<!--dep-->calendarOptions.md<!--/dep-->
===========================================================================
<!--default-->'month'<!--/default-->
<!--acceptValues-->'century' | 'decade' | 'month' | 'year'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the [maximum zoom level](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#maxZoomLevel) of a [calendar](/Documentation/ApiReference/UI_Widgets/dxCalendar/), which is used to pick the date.
<!--/shortDescription-->

<!--fullDescription-->
The zoom level ascends from 'month' to 'century' ('month'->'year'->'decade'->'century').

The option makes sense only if the [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) option is set to 'calendar'.

#include common-ref-enum with {
    enum: "`CalendarZoomLevel`",
    values: "`Month`, `Year`, `Decade`, and `Century`"
}
<!--/fullDescription-->