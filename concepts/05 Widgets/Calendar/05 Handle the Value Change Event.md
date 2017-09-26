To process a new calendar value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#onValueChanged) option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#calendarContainer").dxCalendar({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-calendar ...
        (onValueChanged)="calendar_valueChanged($event)">
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        calendar_valueChanged (e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxCalendar/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

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

    $("#calendarContainer").dxCalendar("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- [Calendar - Specify Zoom Level](/Documentation/Guide/Widgets/Calendar/Specify_Zoom_Level)
- [Calendar - Customize Cell Appearance](/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance)
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-calendar-overview)
- [Calendar API Reference](/Documentation/ApiReference/UI_Widgets/dxCalendar/)

[tags]calendar, editor, get value, set value