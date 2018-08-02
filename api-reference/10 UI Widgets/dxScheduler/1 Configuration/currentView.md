===========================================================================
<!--default-->'day'<!--/default-->
<!--acceptValues-->'agenda' | 'day' | 'month' | 'timelineDay' | 'timelineMonth' | 'timelineWeek' | 'timelineWorkWeek' | 'week' | 'workWeek'<!--/acceptValues-->
<!--type-->String<!--/type-->
<!--firedEvents-->optionChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies the currently displayed view. Accepts the view's [name](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#name) or [type](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/#type).
<!--/shortDescription-->

<!--fullDescription-->
In all situations when more than one view meets the **currentView** condition, the first matching view from the [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) array takes precedence.

#include common-ref-enum with {
    enum: "`SchedulerViewType`",
    values: "`Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth`, and `Agenda`"
}

#####See Also#####
- [Views](/Documentation/Guide/Widgets/Scheduler/Views/)
- [View Switcher](/Documentation/Guide/Widgets/Scheduler/View_Switcher/)
<!--/fullDescription-->