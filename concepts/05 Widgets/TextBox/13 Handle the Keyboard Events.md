The **TextBox** raises four keyboard events: [keyDown](/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#keyDown), [keyPress](/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#keyPress), [keyUp](/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#keyUp) and [enterKey](/Documentation/ApiReference/UI_Widgets/dxTextBox/Events/#enterKey). Within the functions that handle them, you can access the [original jQuery keyboard events](https://api.jquery.com/category/events/keyboard-events/). If you are _not_ going to change the functions during the lifetime of the widget, assign them to the respective widget options.

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            onKeyDown: function (e) {
                var keyCode = e.jQueryEvent.which;
                // Event handling commands go here
            },
            onKeyPress: function (e) {
                var keyCode = e.jQueryEvent.which;
                // Event handling commands go here
            },
            onKeyUp: function (e) {
                var keyCode = e.jQueryEvent.which;
                // Event handling commands go here
            },
            onEnterKey: function (e) {
                // Event handling commands go here
            }
        });
    });

If you are going to change the handling functions at runtime, or if you need to attach several functions to a single event, use the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTextBox/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var keyDownHandler1 = function (e) {
        var keyCode = e.jQueryEvent.which;
        // First handler of the "keyDown" event
    };

    var keyDownHandler2 = function (e) {
        var keyCode = e.jQueryEvent.which;
        // Second handler of the "keyDown" event
    };

    $("#textBoxContainer").dxTextBox("instance")
        .on("keyDown", keyDownHandler1)
        .on("keyDown", keyDownHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [TextBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TextBox/Handle_the_Value_Change_Event/)
- [TextBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-text_box-overview)
- [TextBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTextBox/)

[tags]textBox, text box, editor, keyboard events, keyup, keydown, keypress, enterkey