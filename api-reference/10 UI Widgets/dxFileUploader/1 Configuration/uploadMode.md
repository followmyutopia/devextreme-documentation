<!--id-->dxFileUploader.Options.uploadMode<!--/id-->
===========================================================================
<!--default-->'instantly'<!--/default-->
<!--acceptValues-->'instantly' | 'useButtons' | 'useForm'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the widget uploads files.
<!--/shortDescription-->

<!--fullDescription-->
Depending on the **uploadMode**, the **FileUploader** widget uses an [HTML form](http://www.w3schools.com/html/html_forms.asp) or a [FormData](https://developer.mozilla.org/en/docs/Web/API/FormData) interface with a series of Ajax requests to upload files. The **uploadMode** option accepts one of the following values:

- *"instantly"* (default)       
Ajax upload. Files are uploaded after they are selected.

- *"useButtons"*        
Ajax upload. Files are uploaded after a user clicks the **Upload** button.

- *"useForm"*        
HTML form upload. Files are uploaded when the HTML form is submitted.

#include common-ref-enum with {
    enum: "`FileUploadMode`",
    values: "`Instantly`, `UseButtons`, and `UseForm`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/jQuery/Light/"
}

#####See Also#####
- [Upload Mode](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/#Upload_Mode)
<!--/fullDescription-->