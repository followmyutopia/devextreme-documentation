If you need to add spin buttons to the **NumberBox**, set the [showSpinButtons](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#showSpinButtons) to **true**.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [showSpinButtons]="true">
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

To specify the step by which the value is changed, use the [step](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true,
            step: 10
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        [showSpinButtons]="true"
        [step]="10">
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

#####See Also#####
#include common-link-handleevents
- [NumberBox Demos](/Demos/WidgetsGallery/#demo/editors-number_box-overview)
- [NumberBox API Reference](/Documentation/ApiReference/UI_Widgets/dxNumberBox/)

[tags]number box, numberBox, editor, spin buttons, showSpinButtons, step