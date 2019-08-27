---
id: dxHtmlEditor.format(formatName, formatValue)
---
---
##### shortDescription
Applies a format to the selected content. Cannot be used with [embedded formats](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats).

##### param(formatName): String
A [format name](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName).

##### param(formatValue): any
A format value.

---
If no content is selected, the format applies to the character typed next.

---
#####jQuery

    <!--JavaScript-->
    var htmlEditorInstance = $("#htmlEditorContainer").dxHtmlEditor("instance");
    // Makes text bold
    htmlEditorInstance.format("bold", true); 
    // Inserts a link
    htmlEditorInstance.format("link", { 
        href: "https://www.google.com/", 
        text: "Google", 
        title: "Go to Google" 
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        makeTextBold() {
            this.htmlEditor.instance.format("bold", true);
        }
        insertGoogleLink(){
            this.htmlEditor.instance.format("link", { 
                href: "https://www.google.com/", 
                text: "Google", 
                title: "Go to Google" 
            });
        }
    }
    @NgModule({
        imports: [
            // ...
           DxHtmlEditorModule
        ],
        // ...
    })

---

#####See Also#####
- [insertEmbed()](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#insertEmbedindex_type_config)