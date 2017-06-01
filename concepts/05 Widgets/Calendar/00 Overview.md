The **Calendar** is a widget that displays a calendar and allows an end user to select the required date within a specified date range.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-calendar-overview" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=qB6_tMJfEjQ&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=15" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds a simple **Calendar** to your page.

    <!--HTML-->
    <div id="calendarContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            value: new Date()
        });
    });

The **Calendar** accepts values of the following formats: [dates](http://www.w3schools.com/jsref/jsref_obj_date.asp), numeric values specifying the number of milliseconds since January 1, 1970, 00:00:00, and strings that match the following patterns: `'yyyy-MM-dd'`, `'yyyy-MM-ddTHH:mm:ss'`, `'yyyy-MM-ddTHH:mm:ssZ'`, or `'yyyy-MM-ddTHH:mm:ssx'`. Note that in code, the format stays the same until a value of a different format is assigned to the **value** option. For example, numbers remain numbers until you pass a string to the **value** option.

To specify the date range, use the [min](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#max) options.

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            min: new Date(2000, 1, 1),
            max: new Date(2020, 12, 31)
        });
    });

To specify which day should be considered the beginning of the week, pass its index (0 - for Sunday, 1 - for Monday, and so on) to the [firstDayOfWeek](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#firstDayOfWeek) option.

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            firstDayOfWeek: 1
        });
    });   

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Calendar - Handle the Value Change Event](/Documentation/Guide/Widgets/Calendar/Handle_the_Value_Change_Event)
- [Calendar - Specify Zoom Level](/Documentation/Guide/Widgets/Calendar/Specify_Zoom_Level)
- [Calendar - Customize Cell Appearance](/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance)
- [Calendar - Keyboard Support](/Documentation/Guide/Widgets/Calendar/Keyboard_Support)
- [Calendar API Reference](/Documentation/ApiReference/UI_Widgets/dxCalendar/)
- [DateBox - Overview](/Documentation/Guide/Widgets/DateBox/Overview/)

[tags]calendar, editor, scheduling, overview, value format, date format, date range