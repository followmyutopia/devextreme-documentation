To process new **RangeSlider** values, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#onValueChanged) option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#rangeSliderContainer").dxRangeSlider({
            onValueChanged: function (e) {
                var newStartValue = e.start;
                var newEndValue = e.end;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var valueChangedHandler1 = function (e) {
        var newStartValue = e.start;
        var newEndValue = e.end;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var newStartValue = e.start;
        var newEndValue = e.end;
        // Second handler of the "valueChanged" event
    };

    $("#rangeSliderContainer").dxRangeSlider("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
- [RangeSlider Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-range_slider-overview)
- [RangeSlider API Reference](/Documentation/ApiReference/UI_Widgets/dxRangeSlider/)

[tags]range slider, rangeSlider, editor, get value, set value