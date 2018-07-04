When a user types a value into the **TextBox**, this value applies when the [change](https://developer.mozilla.org/en/docs/Web/Events/change) event is raised. If you need the value to be applied on another event, set the [valueChangeEvent](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#valueChangeEvent) option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            valueChangeEvent: "keyup"
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        valueChangeEvent="keyup">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

---

To process a new **TextBox** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#onValueChanged) option when you configure the widget.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        (onValueChanged)="onValueChanged($event)">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onValueChanged (e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxTextBox/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->var valueChangedHandler1 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // First handler of the "valueChanged" event
    };

    var valueChangedHandler2 = function (e) {
        var previousValue = e.previousValue;
        var newValue = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#textBoxContainer").dxTextBox("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [TextBox - Handle the Keyboard Events](/Documentation/Guide/Widgets/TextBox/Handle_the_Keyboard_Events/)
- [TextBox Demos](/Demos/WidgetsGallery/#demo/editors-text_box-overview)
- [TextBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTextBox/)

[tags]textBox, text box, editor, get value, set value, change value, valueChangeEvent, valueChanged