If instead of picking a value, an end user types it into the **DateBox**, this value applies when the [change](https://developer.mozilla.org/en/docs/Web/Events/change) event is raised. If you need the value to be applied on another event, set the [valueChangeEvent](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#valueChangeEvent) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            value: new Date(),
            type: "date",
            valueChangeEvent: "keyup"
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box
        [(value)]="date"
        type="date"
        valueChangeEvent="keyup">
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        date: Date = new Date()
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

---

To process a new **DateBox** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#onValueChanged) option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            // ...
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-date-box ...
        (onValueChanged)="dateBox_valueChanged($event)">
    </dx-date-box>

    <!--TypeScript-->
    import { DxDateBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        dateBox_valueChanged (e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDateBoxModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxDateBox/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

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

    $("#dateBoxContainer").dxDateBox("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- [DateBox - Control the Behavior](/Documentation/Guide/Widgets/DateBox/Control_the_Behavior)
- [DateBox - Specify Value Range](/Documentation/Guide/Widgets/DateBox/Specify_Value_Range)
- [DateBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-date_box-overview)
- [DateBox API Reference](/Documentation/ApiReference/UI_Widgets/dxDateBox/)

[tags]date box, dateBox, editor, get value, set value, change value, valueChangeEvent, valueChanged