===================================================================
===================================================================

<!--shortDescription-->
Registers formats and modules.
<!--/shortDescription-->

<!--paramName1-->modules<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
Formats and modules to be registered.        
This object should have the following structure:            
`{ "path1": "object1", ... }`           
where `path1` is *formats/[formatName]* for formats or *modules/[moduleName]* for modules.
<!--/paramDescription1-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        var htmlEditor = $("#htmlEditor").dxHtmlEditor("instance");
        htmlEditor.registerModules({ "modules/myModule": moduleObject });
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        ngAfterViewInit () {
            this.htmlEditor.instance.registerModules({ "modules/myModule": moduleObject });
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
- [getModule(modulePath)](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#getModulemodulePath)
<!--/fullDescription-->
