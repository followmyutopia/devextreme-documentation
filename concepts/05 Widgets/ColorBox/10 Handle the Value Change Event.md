By default, the **ColorBox** applies value after an end user clicks the "Apply" button. To change this behavior, assign *'instantly'* to the [applyValueMode](/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#applyValueMode) option. In this case, the widget applies the value immediately after an end user chooses a color in the drop-down editor. 

    <!--JavaScript-->
    $(function() {
        $("#colorBoxContainer").dxColorBox({
            value: "#FF0000",
            applyValueMode: 'instantly'
        });
    });

To process a new **ColorBox** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#onValueChanged) option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#colorBoxContainer").dxColorBox({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxColorBox/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var valueChangedHandler1 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#colorBoxContainer").dxColorBox("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [ColorBox - Support Alpha Channel](/Documentation/Guide/Widgets/ColorBox/Support_Alpha_Channel)
- [ColorBox Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-color_box-overview)
- [ColorBox API Reference](/Documentation/ApiReference/UI_Widgets/dxColorBox/)

[tags]color box, colorBox, editor, handle, get value, set value