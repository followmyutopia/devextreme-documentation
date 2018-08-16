Depending on the value the **TextBox** should hold, specify the widget [mode](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#mode) option. When set to *"email"*, *"tel"* or *"url"*, this option affects the set of keyboard buttons shown on a mobile device when the widget gets focused. When set to *"search"* or *"password"*, the **mode** option impacts the visual representation of the widget. For example, the following code hides input characters behind asterisks.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            mode: "password"
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        mode="password">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from "devextreme-angular";
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
- [TextBox - Specify a Mask for the Input](/Documentation/Guide/Widgets/TextBox/Specify_a_Mask_for_the_Input/)
- [TextBox Demos](/Demos/WidgetsGallery/#demo/editors-text_box-overview)
- [TextBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTextBox/)

[tags]textBox, text box, editor, mode, password, search, email, phone, url