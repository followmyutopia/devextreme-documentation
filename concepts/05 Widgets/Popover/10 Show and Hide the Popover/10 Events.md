To execute certain commands before or after the **Popover** was shown/hidden, handle the [showing](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#showing), [shown](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#shown), [hiding](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#hiding) or [hidden](/Documentation/ApiReference/UI_Widgets/dxPopover/Events/#hidden) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#popoverContainer").dxPopover({
            // ...
            onShowing: function (e) {
                // Handler of the "showing" event
            },
            onShown: function (e) {
                // Handler of the "shown" event
            },
            onHiding: function (e) {
                // Handler of the "hiding" event
            },
            onHidden: function (e) {
                // Handler of the "hidden" event
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxPopover/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#popoverContainer").dxPopover("instance")
        .on('hidden', hiddenEventHandler1)
        .on('hidden', hiddenEventHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Resize and Relocate](/Documentation/Guide/Widgets/Popover/Resize_and_Relocate/)
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)
- [Popover API Reference](/Documentation/ApiReference/UI_Widgets/dxPopover/)