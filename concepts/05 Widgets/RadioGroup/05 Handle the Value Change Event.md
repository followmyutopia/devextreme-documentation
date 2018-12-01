To process a new **RadioGroup** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#onValueChanged) option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Methods/#oneventName_eventHandler) method.

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

    $("#radioGroupContainer").dxRadioGroup("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [RadioGroup - Customize Item Appearance](/Documentation/Guide/Widgets/RadioGroup/Customize_Item_Appearance)
- [RadioGroup Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-radio_group-overview)
- [RadioGroup API Reference](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/)

[tags]radio group, radioGroup, editor, get value, set value