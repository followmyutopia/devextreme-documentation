<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'month'<!--/default-->
<!--acceptValues-->'month' | 'year' | 'decade' | 'century'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the [maximum zoom level](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#maxZoomLevel) of a [calendar](/Documentation/ApiReference/UI_Widgets/dxCalendar/), which is used to pick the date.
<!--/shortDescription-->

<!--fullDescription-->
The zoom level ascends from 'month' to 'century' ('month'->'year'->'decade'->'century').

The option makes sense only if the [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) option is set to 'calendar'.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `CalendarZoomLevel` enum. This enum accepts the following values: `Month`, `Year`, `Decade` and `Century`.
<!--/fullDescription-->