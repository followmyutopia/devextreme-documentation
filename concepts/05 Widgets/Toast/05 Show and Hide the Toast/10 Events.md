To execute certain commands before or after the **Toast** was shown/hidden, handle the [showing](/Documentation/ApiReference/UI_Widgets/dxToast/Events/#showing), [shown](/Documentation/ApiReference/UI_Widgets/dxToast/Events/#shown), [hiding](/Documentation/ApiReference/UI_Widgets/dxToast/Events/#hiding) or [hidden](/Documentation/ApiReference/UI_Widgets/dxToast/Events/#hidden) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option. For example, in the following code, a handler of the **hidden** event is assigned to the [onHidden](/Documentation/ApiReference/UI_Widgets/dxToast/Configuration/#onHidden) option. This handler counts down from three replacing the message in the **Toast** at the same time.

    <!--JavaScript-->$(function() {
        var counter = 3;

		$("#toastContainer").dxToast({
            message: counter,
            displayTime: 500,
            onHidden: function (e) {
                counter--;
                if (counter != 0) {
                    e.component.option("message", counter);
                } else {
                	e.component.option({
                        message: "Go!",
                        onHidden: undefined,
                        displayTime: 3000,
                        type: "success"
                    });
                }
                e.component.show();
            }
        });

        $("#buttonContainer").dxButton({
            text: "Start the Countdown", 
            onClick: function () {
                $("#toastContainer").dxToast("show");
            } 
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxToast/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var hiddenEventHandler1 = function (e) {
        // First handler of the "hidden" event
    };

    var hiddenEventHandler2 = function (e) {
        // Second handler of the "hidden" event
    };

    $("#toastContainer").dxToast("instance")
        .on('hidden', hiddenEventHandler1)
        .on('hidden', hiddenEventHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
- [Toast - Customize the Content](/Documentation/Guide/Widgets/Toast/Customize_the_Content/)
- [Toast - Resize and Relocate](/Documentation//Guide/Widgets/Toast/Resize_and_Relocate/)
- [Toast Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-toast-overview)
- [Toast API Reference](/Documentation/ApiReference/UI_Widgets/dxToast/)