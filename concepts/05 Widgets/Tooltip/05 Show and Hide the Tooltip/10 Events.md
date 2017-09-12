To execute certain commands before or after the **Tooltip** was shown/hidden, handle the [showing](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#showing), [shown](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#shown), [hiding](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#hiding) or [hidden](/Documentation/ApiReference/UI_Widgets/dxTooltip/Events/#hidden) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#tooltipContainer").dxTooltip({
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

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTooltip/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#tooltipContainer").dxTooltip("instance")
        .on('hidden', hiddenEventHandler1)
        .on('hidden', hiddenEventHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- [Tooltip - Customize the Content](/Documentation/Guide/Widgets/Tooltip/Customize_the_Content/)
- [Tooltip - Resize and Relocate](/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/)
- [Tooltip Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview)
- [Tooltip API Reference](/Documentation/ApiReference/UI_Widgets/dxTooltip/)