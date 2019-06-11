<!--id-->dxHtmlEditor.format(formatName, formatValue)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Applies a format to the selected content. Cannot be used with [embedded formats](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats).
<!--/shortDescription-->

<!--paramName1-->formatName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A [format name](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName).
<!--/paramDescription1-->

<!--paramName2-->formatValue<!--/paramName2-->
<!--paramType2-->any<!--/paramType2-->
<!--paramDescription2-->
A format value.
<!--/paramDescription2-->

<!--fullDescription-->
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

<!--/fullDescription-->