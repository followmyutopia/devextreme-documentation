To execute certain commands before or after an appointment was updated, handle the [appointmentUpdating](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdating) or [appointmentUpdated](/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentUpdated) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the corresponding **on*EventName*** option when you configure the widget.

---

##### jQuery

    <!--JavaScript-->$(function () {
        $("#schedulerContainer").dxScheduler({
            // ...
            onAppointmentUpdating: function (e) {
                // Handler of the "appointmentUpdating" event
            },
            onAppointmentUpdated: function (e) {
                // Handler of the "appointmentUpdated" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler ...
        (onAppointmentUpdating)="onAppointmentUpdating($event)"
        (onAppointmentUpdated)="onAppointmentUpdated($event)">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onAppointmentUpdating (e) {
            // Handler of the "appointmentUpdating" event
        }

        onAppointmentUpdated (e) {
            // Handler of the "appointmentUpdated" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var updatedEventHandler1 = function (e) {
        // First handler of the "updated" event
    };

    var updatedEventHandler2 = function (e) {
        // Second handler of the "updated" event
    };

    $("#schedulerContainer").dxScheduler("instance")
        .on('appointmentUpdated', updatedEventHandler1)
        .on('appointmentUpdated', updatedEventHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)
