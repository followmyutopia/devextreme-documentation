===========================================================================
<!--default-->[]<!--/default-->
<!--type-->Array<String><!--/type-->
===========================================================================

<!--shortDescription-->
Restricts file extensions that can be uploaded to the server.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            allowedFileExtensions: [".jpg", ".png"]
        });
    })

#####Angular

    <!--HTML-->
    <dx-file-uploader ...
        [allowedFileExtensions]="['.jpg', '.png']">
    </dx-file-uploader>

    <!--TypeScript-->
    import { DxFileUploaderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule
        ],
        // ...
    })

---
<!--/fullDescription-->