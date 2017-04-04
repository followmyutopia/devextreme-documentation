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
Specifies the view used in the scheduler by default.
<!--/shortDescription-->

<!--fullDescription-->
Specify the views to be available in the scheduler's [View Switcher](/Documentation/Guide/Widgets/Scheduler/View_Switcher/) for end users in the [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#views) array. The default view used by the widget when rendering the scheduler is specified by the **currentView** option.  
For more information on scheduler views, refer to the [Views](/Documentation/Guide/Widgets/Scheduler/Views/) guide.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `SchedulerViewType` enum. This enum accepts the following values: `Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth` and `Agenda`.
<!--/fullDescription-->