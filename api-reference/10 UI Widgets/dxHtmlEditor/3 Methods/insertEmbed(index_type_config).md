===================================================================
===================================================================

<!--shortDescription-->
Inserts an embedded content at the specified position.
<!--/shortDescription-->

<!--paramName1-->index<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
A zero-based index at which to insert an embedded content.
<!--/paramDescription1-->

<!--paramName2-->type<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
An embedded format's [name](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats).
<!--/paramDescription2-->

<!--paramName3-->config<!--/paramName3-->
<!--paramType3-->any<!--/paramType3-->
<!--paramDescription3-->
An embedded format's [value](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats).       
<!--/paramDescription3-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    // Adds an image at the beginning of the content
    $("#htmlEditorContainer").dxHtmlEditor("instance").insertEmbed(0, "extendedImage", {
        src: "https://js.devexpress.com/Content/images/doc/18_2/PhoneJS/person1.png",
        alt: "Photo",
        width: "100px"
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        insertImageAtTheBeginning() {
            this.htmlEditor.instance.insertEmbed(0, "extendedImage", {
                src: "https://js.devexpress.com/Content/images/doc/18_2/PhoneJS/person1.png",
                alt: "Photo",
                width: "100px"
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
<!--/fullDescription-->
