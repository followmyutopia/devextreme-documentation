By default, the **ColorBox** does _not_ allow an end user to control the transparency, or alpha channel component, of the selected color. If you need to allow this, set the [editAlphaChannel](/Documentation/ApiReference/UI_Widgets/dxColorBox/Configuration/#editAlphaChannel) option to **true**. This setting adds a slider that regulates transparency to the drop-down editor, and changes the textual representation of the selected color from hexadecimal to RGBA.

---
##### jQuery

    <!--JavaScript-->
     $(function() {
        $("#colorBoxContainer").dxColorBox({
            value: "rgba(255, 144, 0, 0.3)",
            editAlphaChannel: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-color-box
        [(value)]="color"
        [editAlphaChannel]="true">
    </dx-color-box>

    <!--TypeScript-->
    import { DxColorBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        color: string = "rgba(255, 144, 0, 0.3)"
    }
    @NgModule({
        imports: [
            // ...
            DxColorBoxModule
        ],
        // ...
    })

---

#####See Also#####
- [ColorBox - Handle the Value Change Event](/Documentation/Guide/Widgets/ColorBox/Handle_the_Value_Change_Event)
- [ColorBox Demos](/Demos/WidgetsGallery/#demo/editors-color_box-overview)
- [ColorBox API Reference](/Documentation/ApiReference/UI_Widgets/dxColorBox/)

[tags]color box, colorBox, editor, transparency, alpha channel 