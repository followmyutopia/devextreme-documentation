The **NumberBox** is a widget that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-number_box-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **NumberBox** to your page. The simplest configuration of the widget requires only a [value](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#value) to be specified. In addition, you can specify the [placeholder](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#placeholder) to be displayed when the number box is empty.

    <!--HTML-->
    <div id="numberBoxContainer"></div>

<!---->    

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            placeholder: 'Enter your age'
        });
    });

In most cases, it is useful to specify the range of possible values. For this purpose, set the [min](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#max) options.

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            min: 16,
            max: 100
        });
    });

If the entered value falls out of the range, the widget sets the value to the lower (if the value is less than the lower bound) or upper bound (if the value is greater than the upper bound).

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [NumberBox - Handle the Value Change Event](/Documentation/Guide/Widgets/NumberBox/Handle_the_Value_Change_Event)
- [NumberBox - Control the Behavior](/Documentation/Guide/Widgets/NumberBox/Control_the_Behavior)
- [NumberBox - Keyboard Support](/Documentation/Guide/Widgets/NumberBox/Keyboard_Support)
- [NumberBox API Reference](/Documentation/ApiReference/UI_Widgets/dxNumberBox/)

[tags]number box, numberBox, editor, overview