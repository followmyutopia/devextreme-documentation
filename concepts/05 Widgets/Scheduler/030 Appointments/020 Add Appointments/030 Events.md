To execute certain commands before or after an appointment was added, handle the [appointmentAdding](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdding) or [appointmentAdded](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentAdded) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#schedulerContainer").dxScheduler({
            // ...
            onAppointmentAdding: function (e) {
                // Handler of the "appointmentAdding" event
            },
            onAppointmentAdded: function (e) {
                // Handler of the "appointmentAdded" event
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var addedEventHandler1 = function (e) {
        // First handler of the "added" event
    };

    var addedEventHandler2 = function (e) {
        // Second handler of the "added" event
    };

    $("#schedulerContainer").dxScheduler("instance")
        .on('appointmentAdded', addedEventHandler1)
        .on('appointmentAdded', addedEventHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [Call Methods - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [Call Methods - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/)
- [Call Methods - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)