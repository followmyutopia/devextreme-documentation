---
id: dxHtmlEditorToolbarItem.formatName
acceptValues: 'background' | 'bold' | 'color' | 'italic' | 'link' | 'image' | 'strike' | 'subscript' | 'superscript' | 'underline' | 'blockquote' | 'header' | 'increaseIndent' | 'decreaseIndent' | 'orderedList' | 'bulletList' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'codeBlock' | 'variable' | 'separator' | 'undo' | 'redo' | 'clear'
type: String
---
---
##### shortDescription
Specifies the predefined item that this object customizes or a format with multiple choices.

---
To customize a [predefined item](/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/), assign its name to this option and specify the other item options.

This option also accepts names of formats with multiple choices. In addition to the format name, specify [formatValues](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues). On the toolbar, such formats are represented by [SelectBox](/Documentation/Guide/Widgets/SelectBox/Overview/) widgets whose [options](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/) you can specify in the [options](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options) object.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/jQuery/Light/"
}

In the following code, the `header` and `size` formats are configured as described in the previous paragraph:


---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ // ...
                {
                    formatName: "header",
                    formatValues: [1, 2, 3, false],
                    options: {
                        width: 150
                    }
                }, {
                    formatName: "size",
                    formatValues: ["11px", "14px", "16px"]
                }]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [ // ...
        {
            formatName: "header",
            formatValues: [1, 2, 3, false],
            options: {
                width: 150
            }
        }, {
            formatName: "size",
            formatValues: ["11px", "14px", "16px"]
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>   

---

Refer to the [Formats](/Documentation/Guide/Widgets/HtmlEditor/Formats/) article for a full list of available formats.

#####See Also#####
- [widget](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget)