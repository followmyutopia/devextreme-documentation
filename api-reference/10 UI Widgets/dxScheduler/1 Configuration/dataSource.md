===========================================================================
<!--default-->null<!--/default-->
<!--type-->String | Array<dxSchedulerAppointment> | DataSource | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Binds the widget to data.
<!--/shortDescription-->

<!--fullDescription-->
#include common-dataSource-description with {
    widget_works_with: "The **Scheduler** works with collections of objects.",

    object_structure_notes: "In each case, also specify the widget's [startDateExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#startDateExpr) and [endDateExpr](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#endDateExpr) options. Optionally, set other options with the **Expr** postfix.",

    array_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/Scheduler/SimpleArray/jQuery/Light/)",

    custom_store_view_demo: "[View Demo](/Demos/WidgetsGallery/Demo/Scheduler/GoogleCalendarIntegration/jQuery/Light/)",

    paginate_note: "- If you wrap the store into the **DataSource** object explicitly, set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to **false** to prevent data from partitioning."
}
<!--/fullDescription-->