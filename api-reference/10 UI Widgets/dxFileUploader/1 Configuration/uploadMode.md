===========================================================================
<!--default-->'instantly', 'useForm' (Internet_Explorer_9, Internet_Explorer_10)<!--/default-->
<!--acceptValues-->'instantly' | 'useButtons' | 'useForm'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the widget uploads files.
<!--/shortDescription-->

<!--fullDescription-->
The option accepts the following values.

- **instantly**  
 Starts uploading instantly as files are selected.

- **useButtons**  
 Starts uploading when a user clicks the "Upload" button.

- **useForm**  
 Uploads the specified files when the **submit** button of the current [form](http://www.w3schools.com/htmL/html_forms.asp) is clicked. In this case, the **FileUploader** widget should be enclosed in the **form** element.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FileUploadMode` enum. This enum accepts the following values: `Instantly`, `UseButtons` and `UseForm`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/jQuery/Light/"
}
<!--/fullDescription-->