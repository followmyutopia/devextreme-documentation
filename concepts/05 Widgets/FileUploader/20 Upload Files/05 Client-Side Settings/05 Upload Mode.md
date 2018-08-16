Depending on the [uploadMode](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode) you choose, the **FileUploader** widget uploads files using an [HTML form](http://www.w3schools.com/html/html_forms.asp) or [FormData](https://developer.mozilla.org/en/docs/Web/API/FormData) interface and a series of [Ajax](http://www.w3schools.com/ajax/default.asp) requests. The **uploadMode** option accepts one of the following values:

- *"instantly"* (default)   
Ajax upload. Files are uploaded after they are selected.

- *"useButtons"*  
Ajax upload. Files are uploaded after a user clicks the **Upload** button.

- *"useForm"*  
HTML form upload. Files are uploaded when the HTML form is submitted.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/jQuery/Light/"
}

The following examples show how to configure the **FileUploader** for uploading files using Ajax requests and an HTML form. Note that in both cases, the [name](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#name) option is specified to access the uploaded files on the server.

- **Ajax upload**

    ---
    #####jQuery

        <!--HTML--><div id="fileUploaderContainer"></div>

        <!--JavaScript-->$(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following line to allow a user to upload multiple files
                // multiple: true,
                uploadMode: "useButtons", // or "instantly"
                uploadUrl: "/upload.php"
            });
        });

    #####Angular

        <!--HTML-->
        <dx-file-uploader
            name="file"
            <!-- Uncomment the following line to allow a user to upload multiple files -->
            <!-- [multiple]="true" -->
            uploadMode="useButtons" <!-- or "instantly" -->
            uploadUrl="/upload.php">
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


<!---->

- **HTML form upload**

    <!---->

    ---
    #####jQuery

        <!--HTML--><form action="/upload.php" method="post" enctype="multipart/form-data">
            <div id="fileUploaderContainer"></div>
            <input type="submit">
        </form>

        <!--JavaScript-->$(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following lines to allow a user to upload multiple files
                // multiple: true,
                // name: "files[]",
                uploadMode: "useForm"
            });
        });

    #####Angular

        <!--HTML-->
        <form action="/upload.php" method="post" enctype="multipart/form-data">
            <dx-file-uploader
                name="file"
                <!-- Uncomment the following lines to allow a user to upload multiple files -->
                <!-- [multiple]="true" -->
                <!-- name="files[]" -->
                uploadMode="useForm">
            </dx-file-uploader>
            <input type="submit">
        </form>

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

[note] If you allow a user to upload multiple files using an HTML form, the **name** option's value must end with square brackets as shown in the commented-out code line in the example above.

#####See Also#####
- [FileUploader - Upload Files | Server-Side Implementation in ASP.NET](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/)
- [FileUploader - Upload Files | Server-Side Implementation in PHP](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/)
- [FileUploader API Reference](/Documentation/ApiReference/UI_Widgets/dxFileUploader/)
