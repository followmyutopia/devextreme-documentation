To limit the text length, assign an integer number to the **maxLength** option. By default, the text length is unlimited.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            maxLength: 200
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        [maxLength]="200">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

#####See Also#####
- [TextArea Demos](/Demos/WidgetsGallery/#demo/editors-text_area-overview)
- [TextArea API Reference](/Documentation/ApiReference/UI_Widgets/dxTextArea/)

[tags]textArea, text area, editor, string length, text length, maxLength