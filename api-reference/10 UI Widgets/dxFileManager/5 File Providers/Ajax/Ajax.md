---
id: AjaxFileProvider
module: ui/file_manager/file_provider/ajax
export: default
type: Object
inherits: FileProvider
---
---
##### shortDescription
The **Ajax** file provider works with a virtual file system represented by an array of JSON objects loaded from a URL.

---
Assign the URL to the [url](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#url) option. Data object fields should have conventional names listed in the **url** description. Otherwise, specify **[fieldName]Expr** options: [nameExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#nameExpr), [sizeExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#sizeExpr), [dateModifiedExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#dateModifiedExpr), and so on.

The following code shows how to bind the **FileManager** to the **Ajax** file provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("fileManagerContainer").dxFileManager({
            fileProvider: new DevExpress.FileProviders.Ajax({
                url: "https://mydomain.com/data.json",
                thumbnailExpr: "icon",
                // ...
            })
            // A shortcut that can be used if object fields have conventional names
            fileProvider: "https://mydomain.com/data.json"
        });
    });

---