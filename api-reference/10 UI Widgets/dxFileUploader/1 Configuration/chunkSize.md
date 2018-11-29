===========================================================================
<!--default-->0<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the chunk size in bytes. Applies only if [uploadMode](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode) is *"instantly*" or *"useButtons"*. Requires a server that can process file chunks.
<!--/shortDescription-->

<!--fullDescription-->
Set this option to a positive value to enable chunk upload. The widget should be configured as described in the [Chunk Upload](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/#Chunk_Upload) article. When chunk upload is enabled, the **FileUploader** sends several [multipart/form-data](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4) requests with information about the file and chunk. The *"chunkMetadata"* parameter contains chunk details as a JSON object of the following structure:

    {
        "FileGuid": string,   
        "FileName": string,   
        "FileType": string,   
        "FileSize": long,
        "Index": long,        // The chunk's index
        "TotalCount": long,   // The file's total chunk count
    }

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileUploader/ChunkUploading/jQuery/Light/"
}

#####See Also#####
- **Server-Side Implementation**: [ASP.NET](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/#Chunk_Upload) | [PHP](/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/#Chunk_Upload)
<!--/fullDescription-->