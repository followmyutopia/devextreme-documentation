To process a new **CheckBox** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/#onValueChanged) option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#checkBoxContainer").dxCheckBox({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-check-box
        (onValueChanged)="checkBox_valueChanged($event)">
    </dx-check-box>

    <!--TypeScript-->
    import { DxCheckBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        checkBox_valueChanged (e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxCheckBoxModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

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

    $("#checkBoxContainer").dxCheckBox("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)- [CheckBox Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-check_box-overview)
- [CheckBox API Reference](/Documentation/ApiReference/UI_Widgets/dxCheckBox/)

[tags]check box, checkBox, editor, get value, set value