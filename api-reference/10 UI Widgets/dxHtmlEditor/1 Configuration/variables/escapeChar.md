===========================================================================
<!--default-->''<!--/default-->
<!--type-->String | Array<String><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the special character(s) that should surround the variables.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            // ...
            variables: {
                dataSource: [ "FirstName" ],
                escapeChar: [ "{", "}" ] // {FirstName}
                // or
                // escapeChar: "##" // ##FirstName##
            }
        })
    })

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-variables
            [dataSource]="[ 'FirstName' ]"
            [escapeChar]="[ '{', '}' ]"> <!-- {FirstName} -->
            <!-- or -->
            <!-- escapeChar="##"> --> <!-- ##FirstName## -->
        </dxo-variables>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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