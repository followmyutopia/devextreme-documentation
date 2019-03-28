The **NumberBox** is a widget that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-number_box-overview"
}

The following code adds the **NumberBox** to your page. The simplest configuration of the widget requires only a [value](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#value) to be specified. In addition, you can specify the [placeholder](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#placeholder) to be displayed when the number box is empty.

---
##### jQuery

    <!--HTML-->
    <div id="numberBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            placeholder: 'Enter your age'
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        placeholder="Enter your age">
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

In most cases, it is useful to specify the range of possible values. For this purpose, set the [min](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#max) options.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            min: 16,
            max: 100
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [min]="16"
        [max]="100">
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

If the entered value falls out of the range, the widget sets the value to the lower (if the value is less than the lower bound) or upper bound (if the value is greater than the upper bound).

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [NumberBox - Handle the Value Change Event](/Documentation/Guide/Widgets/NumberBox/Handle_the_Value_Change_Event)
- [NumberBox - Control the Behavior](/Documentation/Guide/Widgets/NumberBox/Control_the_Behavior)
- [NumberBox - Keyboard Support](/Documentation/Guide/Widgets/NumberBox/Keyboard_Support)
- [NumberBox API Reference](/Documentation/ApiReference/UI_Widgets/dxNumberBox/)

[tags]number box, numberBox, editor, overview