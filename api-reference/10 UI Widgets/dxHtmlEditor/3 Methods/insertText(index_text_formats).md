===================================================================
===================================================================

<!--shortDescription-->
Inserts formatted text at the specified position. Used with all formats except [embedded](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats).
<!--/shortDescription-->

<!--paramName1-->index<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
A zero-based index at which to insert text.
<!--/paramDescription1-->

<!--paramName2-->text<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The text to be inserted.
<!--/paramDescription2-->

<!--paramName3-->formats<!--/paramName3-->
<!--paramType3-->Object<!--/paramType3-->
<!--paramDescription3-->
The formats to be applied.      
This object should have the following structure:        
`{ "formatName1": "formatValue1", ... }`
<!--/paramDescription3-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    // Inserts bold, green text at the beginning of the content
    $("#htmlEditorContainer").dxHtmlEditor("instance").insertText(0, "I will be the first", { 
        bold: true, 
        color: "green" 
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        insertTextAtTheBeginning() {
            // Inserts bold, green text at the beginning of the content
            this.htmlEditor.instance.insertText(0, "I will be the first", { 
                bold: true, 
                color: "green" 
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
