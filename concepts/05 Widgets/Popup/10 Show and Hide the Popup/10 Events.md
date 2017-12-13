To execute certain commands before or after the **Popup** was shown/hidden, handle the [showing](/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#showing), [shown](/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#shown), [hiding](/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#hiding) or [hidden](/Documentation/ApiReference/UI_Widgets/dxPopup/Events/#hidden) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#popupContainer").dxPopup({
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxPopup/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#popupContainer").dxPopup("instance")
        .on('hidden', hiddenEventHandler1)
        .on('hidden', hiddenEventHandler2);

#####See Also#####
#include common-link-handleevents
- [Popup - Customize the Content](/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Content/)
- [Popup - Resize and Relocate](/Documentation/Guide/Widgets/Popup/Resize_and_Relocate/)
- [Popup Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popup-overview)
- [Popup API Reference](/Documentation/ApiReference/UI_Widgets/dxPopup/)