Chunk upload allows large files to be divided into parts called "chunks" and sent via multiple requests. To enable this feature, specify the [chunk size](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#chunkSize) in bytes and set [uploadMode](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode) to *"instantly"* or *"useButtons"* to send files via Ajax requests.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileUploader/ChunkUploading/jQuery/Light/"
}

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            name: "file",
            uploadMode: "useButtons", // or "instantly"
            uploadUrl: "https://mydomain.com/MyUploadService",
            chunkSize: 400000 // 400 KB
        });
    });

    <!--HTML--><div id="fileUploaderContainer"></div>

#####Angular

    <!--HTML-->
    <dx-file-uploader
        name="file"
        uploadMode="useButtons" <!-- or "instantly" -->
        uploadUrl="https://mydomain.com/MyUploadService"
        [chunkSize]="400000"> <!-- 400 KB -->
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

On the server, you should process the received chunks and merge them into a file. See the **Server-Side Implementation** examples in [ASP.NET](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/#Chunk_Upload) and [PHP](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/#Chunk_Upload).