To limit the string length, assign an integer number to the **maxLength** option. By default, the string length is unlimited.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            maxLength: 10
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        [maxLength]="10">
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

#####See Also#####
- [TextBox Demos](/Demos/WidgetsGallery/#demo/editors-text_box-overview)
- [TextBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTextBox/)

[tags]textBox, text box, editor, string length, text length, maxLength