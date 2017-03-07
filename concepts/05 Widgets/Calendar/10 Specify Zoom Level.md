To specify which calendar view (month, year, decade or century) should be displayed at first, set the [zoomLevel](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#zoomLevel) option.

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            zoomLevel: 'year'
        });
    });

To make certain calendar views inaccessible, specify the [maxZoomLevel](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#maxZoomLevel) and [minZoomLevel](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#minZoomLevel) options. For example, the following code enables the month, year and decade calendar views leaving the century view behind.

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            minZoomLevel: 'decade',
            maxZoomLevel: 'month'
        });
    });

#####See Also#####
- [Calendar - Handle the Value Change Event](/Documentation/Guide/Widgets/Calendar/Handle_the_Value_Change_Event)
- [Calendar - Specify Zoom Level](/Documentation/Guide/Widgets/Calendar/Specify_Zoom_Level)
- [Calendar - Customize Cell Appearance](/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance)
- [Calendar API Reference](/Documentation/ApiReference/UI_Widgets/dxCalendar/)
- [Calendar Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-calendar-overview)

[tags]calendar, editor, calendar view, zoomLevel, zoom level