To access a widget, you need to obtain its instance first. Note that the variable that will contain the widget instance should have a `DevExpress.ui.WidgetName` type. For example, see how you can obtain the instance of a **Button** widget.

    var buttonInstance: DevExpress.ui.dxButton;
    buttonInstance = $('#buttonContainer').dxButton('instance');

Now that you have the widget instance, use jQuery to [get and set widget options](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Get_and_Set_Options), [call methods](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Call_Methods) or [handle events](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events).