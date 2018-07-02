By default, the value of the **NumberBox** is changed when the [change](https://developer.mozilla.org/en/docs/Web/Events/change) event is raised. If you need the value to be changed on another event, set the [valueChangeEvent](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#valueChangeEvent) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            valueChangeEvent: 'keyup'
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        valueChangeEvent="keyup">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

---

To process a new **NumberBox** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#onValueChanged) option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box ...
        (onValueChanged)="numberBox_valueChanged($event)">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        numberBox_valueChanged (e) {
            let previousValue = e.previousValue;
            let newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

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

    $("#numberBoxContainer").dxNumberBox("instance")
        .on('valueChanged', valueChangedHandler1)
        .on('valueChanged', valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [NumberBox - Control the Behavior](/Documentation/Guide/Widgets/NumberBox/Control_the_Behavior)
- [NumberBox Demos](/Demos/WidgetsGallery/#demo/editors-number_box-overview)
- [NumberBox API Reference](/Documentation/ApiReference/UI_Widgets/dxNumberBox/)

[tags]number box, numberBox, editor, get value, set value, change value, valueChangeEvent, valueChanged