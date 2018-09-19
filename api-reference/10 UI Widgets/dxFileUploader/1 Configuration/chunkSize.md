===========================================================================
<!--default-->0<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the chunk size in bytes. Applies only if [uploadMode](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode) is *"instantly*" or *"useButtons"*. Requires a server that can process file chunks.
<!--/shortDescription-->

<!--fullDescription-->
Set this option to a positive value to enable a chunked upload. Each request to the server will contain the following information: 

    {
        FileGuid: string,   
        FileName: string,   
        FileType: string,   
        FileSize: long,
        Index: long,        // The chunk's index
        TotalCount: long,   // The file's total chunk count
    }

<!--/fullDescription-->
