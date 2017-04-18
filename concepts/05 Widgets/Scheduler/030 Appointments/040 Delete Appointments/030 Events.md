To execute certain commands before or after an appointment was deleted, handle the [appointmentDeleting](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleting) or [appointmentDeleted](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentDeleted) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#schedulerContainer").dxScheduler({
            // ...
            onAppointmentDeleting: function (e) {
                // Handler of the "appointmentDeleting" event
            },
            onAppointmentDeleted: function (e) {
                // Handler of the "appointmentDeleted" event
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var deletedEventHandler1 = function (e) {
        // First handler of the "deleted" event
    };

    var deletedEventHandler2 = function (e) {
        // Second handler of the "deleted" event
    };

    $("#schedulerContainer").dxScheduler("instance")
        .on('appointmentDeleted', deletedEventHandler1)
        .on('appointmentDeleted', deletedEventHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)