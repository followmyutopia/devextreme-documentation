The **FileUploader** widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files on the page's **FileUploader** area.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-file_uploader-file_selection" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=h8jGcKE33ME&index=51&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds the **FileUploader** to your page. Use the [accept](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#accept) option to restrict the file types that can be uploaded to the server. This option is like the underlying `<input>` element's *"accept"* attribute and accepts the same values described [here](http://www.w3schools.com/TAGs/att_input_accept.asp).

---
#####jQuery

    <!--HTML--><div id="fileUploaderContainer"></div>

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            accept: "image/*"
        });
    });

#####Angular

    <!--HTML-->
    <dx-file-uploader ...
        accept="image/*">
    </dx-file-uploader>

    <!--TypeScript-->
    import { DxFileUploaderModule } from 'devextreme-angular';
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

A user is allowed to upload only one file at a time by default. Set the [multiple](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#multiple) option to **true** to allow uploading several files at once.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            multiple: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-file-uploader ...
        [multiple]="true">
    </dx-file-uploader>

    <!--TypeScript-->
    import { DxFileUploaderModule } from 'devextreme-angular';
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

If you need to access the selected files at runtime, get the value of the [value](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#value) option using the following command. It returns an array, whose members are each an instance implementing the [File interface](https://developer.mozilla.org/en-US/docs/Web/API/File).

    <!--JavaScript-->var files = $("#fileUploaderContainer").dxFileUploader("option", "value");

The **FileUploader** can operate in two different modes, each demanding a different client- and server-side configuration. See the [Client-Side Settings](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/) article for more details.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [FileUploader - Upload Files | Client-Side Settings](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/)
- [FileUploader - Upload Files | Server-Side Implementation in ASP.NET](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/)
- [FileUploader - Upload Files | Server-Side Implementation in PHP](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/)
- [FileUploader API Reference](/Documentation/ApiReference/UI_Widgets/dxFileUploader/)

[tags]file uploader, fileUploader, overview, accepted file types, multiple files, access files in code
