If the size of the widget should be fixed, specify it using the [height](/Documentation/ApiReference/UI_Widgets/dxTextArea/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxTextArea/Configuration/#width) options.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            height: 200,
            width: 300
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        [height]="200"
        [width]="300">
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

Alternatively, the widget's height can adapt to the widget's contents. In this case, instead of specifying the **height** option, you need to set the **autoResizeEnabled** option to **true**. To specify the minimum and maximum height that the adapted **TextArea** can occupy, set the **minHeight** and **maxHeight** options.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            autoResizeEnabled: true,
            minHeight: 100,
            maxHeight: 200
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        [autoResizeEnabled]="true"
        [minHeight]="100"
        [maxHeight]="200">
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
- [TextArea - Limit the Text Length](/Documentation/Guide/Widgets/TextArea/Limit_the_Text_Length/)
- [TextArea Demos](/Demos/WidgetsGallery/#demo/editors-text_area-overview)
- [TextArea API Reference](/Documentation/ApiReference/UI_Widgets/dxTextArea/)

[tags]textArea, text area, editor, size, height, width, adaptive, minimum height, maximum height, autoResizeEnabled