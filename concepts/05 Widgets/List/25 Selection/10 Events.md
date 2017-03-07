The **List** widget fires the [selectionChanged](/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectionChanged) event when an item is selected or when the selection is cancelled. The widget also fires the [selectAllValueChanged](/Documentation/ApiReference/UI_Widgets/dxList/Events/#selectAllValueChanged) event when the [*"Select All"*](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectAllMode) check box has changed its value. If the functions that handle these events are not going to be changed during the lifetime of the widget, assign them to the corresponding **on*EventName*** options when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onSelectionChanged: function(e) {
                var addedItems = e.addedItems;
                var removedItems = e.removedItems;
                // Handler of the "selectionChanged" event
            },
            onSelectAllValueChanged: function(e) {
                var newCheckBoxValue = e.value;
                // Handler of the "selectAllValueChanged" event
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    var selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#listContainer").dxList("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

#####See Also#####
- [Widget Basics - Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)