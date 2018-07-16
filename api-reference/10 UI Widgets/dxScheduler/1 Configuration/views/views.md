===========================================================================
<!--default-->['day', 'week']<!--/default-->
<!--acceptValues-->'day' | 'week' | 'workWeek' | 'month' | 'timelineDay' | 'timelineWeek' | 'timelineWorkWeek' | 'timelineMonth' | 'agenda'<!--/acceptValues-->
<!--type-->Array<String, Object><!--/type-->
===========================================================================

<!--shortDescription-->
Configures individual views.
<!--/shortDescription-->

<!--fullDescription-->
The option accepts an array of views to be available within the scheduler [View Switcher](/Documentation/Guide/Widgets/Scheduler/View_Switcher/). If you need to customize a view, add a configuration object for it to the array. The configuration options that you can specify are listed further in this documentation section. If a view does not need individual customization, just add its type to the array.

<!---->

    <!--JavaScript-->
    var schedulerOptions = {
        // . . .
        dataSource: schedulerData,
        startDayHour: 9,
        endDayHour: 18,
        views: [
            { type: "day", startDayHour: 7, endDayHour: 22 },
            { type: "workWeek", cellDuration: 60 },
            "week",
            "agenda"
        ]
    };

Set a default view by using the [currentView](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#currentView) option.  
For more information on scheduler views, refer to the [Views](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/) guide.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SchedulerViewType` enum. This enum accepts the following values: `Day`, `Week`, `WorkWeek`, `Month`, `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth` and `Agenda`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-scheduler-customize_individual_views"
} 
<a href="https://www.youtube.com/watch?v=JHUSz3S0cWw&index=2&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->