===========================================================================
<!--module-->ui/file_manager/file_provider/webapi<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
<!--inherits-->..\FileProvider\FileProvider.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **Web API** file provider works with a file system located on the server.
<!--/shortDescription-->

<!--fullDescription-->
Set the [endpointUrl](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Web_API/Configuration/#endpointUrl) option to specify the endpoint used to access and modify the file system.

The server should return data objects of the following structure:

    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        hasSubDirectories: true
    }

Fields in this structure have conventional names that you can change via **[fieldName]Expr** options: [nameExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Web_API/Configuration/#nameExpr), [sizeExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Web_API/Configuration/#sizeExpr), [dateModifiedExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Web_API/Configuration/#dateModifiedExpr), and so on.

The following code shows how to bind the **FileManager** to the **Web API** file provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("fileManagerContainer").dxFileManager({
            fileProvider: new DevExpress.FileProviders.WebApi({
                endpointUrl: "https://mydomain.com/api/files",
                thumbnailExpr: "icon",
                // ...
            })
        });
    });

---

On the server-side, you need to process file management requests. DevExtreme provides helpers for ASP.NET MVC and ASP.NET Core that do this. To view the server-side code, navigate to the `FileManagerApiController.cs` tab in the following demo:

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileManager/BindingToFileSystem/NetCore/Light/"
}
<!--/fullDescription-->
