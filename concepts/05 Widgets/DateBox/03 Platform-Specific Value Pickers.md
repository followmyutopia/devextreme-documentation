The **DateBox** provides the following controls for picking values.

- [Calendar](/Documentation/Guide/Widgets/Calendar/Overview/)       
Available when the [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) option is set to *"date"* or *"datetime"*.

    ![DevExtreme DateBox PickerType DatePicker](/Content/images/doc/16_2/UiWidgets/DateBox/pickerTypes_calendar.png)

- **Rollers**       
Available when the [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) option is set to *"date"*, *"time"* or *"datetime"*.

    ![DevExtreme DateBox PickerType DatePicker](/Content/images/doc/16_2/UiWidgets/DateBox/pickerTypes_rollers.png)

- **List**          
Available when the [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) option is set to *"time"*.

    ![DevExtreme DateBox PickerType DatePicker](/Content/images/doc/16_2/UiWidgets/DateBox/pickerTypes_list.png)

By default, the picking control and its appearance vary depending on the platform. If you need to force the use of a certain control, specify the [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) option. In the description of this option, you can find information about which control is the default one for a certain platform. The images above show how the controls look in a generic desktop browser.

For the **List** picker, you can specify the step of available time values in minutes using the [interval](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#interval) option.

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: new Date(),
            type: "time",
            pickerType: "list",
            interval: 20
        });
    });

#####See Also#####
- [DateBox - Control the Behavior](/Documentation/Guide/Widgets/DateBox/Control_the_Behavior)
- [DateBox - Specify Value Range](/Documentation/Guide/Widgets/DateBox/Specify_Value_Range)
- [DateBox - Handle the Value Change Event](/Documentation/Guide/Widgets/DateBox/Handle_the_Value_Change_Event)
- [DateBox Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-date_box-overview)
- [DateBox API Reference](/Documentation/ApiReference/UI_Widgets/dxDateBox/)

[tags]date box, dateBox, editor, scheduling, picker type, calendar, rollers, list, pickerType, interval