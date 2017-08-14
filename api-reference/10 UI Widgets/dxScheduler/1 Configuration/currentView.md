<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'day'<!--/default-->
<!--acceptValues-->'day' | 'week' | 'workWeek' | 'month' | 'timelineDay' | 'timelineWeek' | 'timelineWorkWeek' | 'timelineMonth' | 'agenda'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the currently displayed view. Accepts the view's [name](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#name) or [type](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type).
<!--/shortDescription-->

<!--fullDescription-->
In all situations when more than one view meets the **currentView** condition, the first matching view from the [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) array takes precedence.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SchedulerViewType` enum. This enum accepts the following values: `Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth` and `Agenda`.

#####See Also#####
- [Views](/Documentation/Guide/Widgets/Scheduler/Views/)
- [View Switcher](/Documentation/Guide/Widgets/Scheduler/View_Switcher/)
<!--/fullDescription-->