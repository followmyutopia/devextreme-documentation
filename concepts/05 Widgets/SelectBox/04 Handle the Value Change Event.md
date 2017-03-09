By default, the value of the **SelectBox** is changed when the [change](https://developer.mozilla.org/en/docs/Web/Events/change) event is raised. If you need the value to be changed on another event, set the [valueChangeEvent](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueChangeEvent) option.

    <!--JavaScript-->
    var selectBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // . . .
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            valueChangeEvent: 'keyup'
        });
    });

To process a new **SelectBox** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onValueChanged) option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Methods/#oneventName_eventHandler) method.

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

    $("#selectBoxContainer").dxSelectBox("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [SelectBox - Enable Searching](/Documentation/Guide/Widgets/SelectBox/Enable_Searching/)
- [SelectBox - Create a User-Defined Item](/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/)
- [SelectBox API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-select_box-overview)

[tags]selectBox, select box, editor, get value, set value, change value, valueChangeEvent, valueChanged