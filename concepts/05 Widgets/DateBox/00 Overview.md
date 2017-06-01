The **DateBox** is a widget that displays a date and time in a specified format, and enables a user to pick or type in the required date/time value.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-date_box-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **DateBox** to your page.

    <!--HTML-->
    <div id="dateBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: new Date(),
            type: "date"
        });
    });

The **DateBox** accepts values of the following formats: [dates](http://www.w3schools.com/jsref/jsref_obj_date.asp), numeric values specifying the number of milliseconds since January 1, 1970, 00:00:00, and strings that match the following patterns: `'yyyy-MM-dd'`, `'yyyy-MM-ddTHH:mm:ss'`, `'yyyy-MM-ddTHH:mm:ssZ'`, or `'yyyy-MM-ddTHH:mm:ssx'`. Note that in code, the format stays the same until a value of a different format is assigned to the **value** option. For example, numbers remain numbers until you pass a string to the **value** option.

In addition, the **DateBox** supports several date and time types. That is, it can display only the date or time, or both. To specify the required type, set the [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) option.

Depending on the platform, the **DateBox** provides different controls for picking values. See the [Platform-Specific Value Pickers](/Documentation/Guide/Widgets/DateBox/Platform-Specific_Value_Pickers) topic for details.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [DateBox - Control the Behavior](/Documentation/Guide/Widgets/DateBox/Control_the_Behavior)
- [DateBox - Specify Value Range](/Documentation/Guide/Widgets/DateBox/Specify_Value_Range)
- [DateBox - Handle the Value Change Event](/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event)
- [DateBox - Keyboard Support](/Documentation/Guide/Widgets/DateBox/Keyboard_Support)
- [DateBox API Reference](/Documentation/ApiReference/UI_Widgets/dxDateBox/)

[tags]date box, dateBox, editor, scheduling, overview, date and time type