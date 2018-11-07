===================================================================
===================================================================

<!--shortDescription-->
Applies several [block formats](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats) to all lines in the given range.
<!--/shortDescription-->

<!--paramName1-->index<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
A zero-based index at which to begin formatting.
<!--/paramDescription1-->

<!--paramName2-->length<!--/paramName2-->
<!--paramType2-->Number<!--/paramType2-->
<!--paramDescription2-->
The length of the content to be formatted.      
[Embedded items](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats) have a length of 1. 
<!--/paramDescription2-->

<!--paramName3-->formats<!--/paramName3-->
<!--paramType3-->Object<!--/paramType3-->
<!--paramDescription3-->
Formats to be applied.      
This object should have the following structure:        
`{ "formatName1": "formatValue1", ... }`
<!--/paramDescription3-->

<!--fullDescription-->
[note] The entire line will be formatted even if only a single character from it falls within the given range.


---
#####jQuery

    <!--JavaScript-->
    // Aligns the first line to the right and turns it into an ordered list's item.
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatLine(0, 2, { "align": "right", "list": "ordered" });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        applyLineFormats() {
            // Aligns the first line to the right and turns it into an ordered list's item.
            this.htmlEditor.instance.formatLine(0, 1, { "align": "right", "list": "ordered" });
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
- [formatLine(index, length, formatName, formatValue)](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatLineindex_length_formatName_formatValue)
- [formatText(index, length, formatName, formatValue)](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatTextindex_length_formatName_formatValue) | [formatText(index, length, formats)](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatTextindex_length_formats)
<!--/fullDescription-->