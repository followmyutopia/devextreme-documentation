---
id: AjaxFileProvider.Options.url
type: String
---
---
##### shortDescription
Specifies the URL used to load an array of JSON objects that represent files and directories.

---
The objects should have fields with the following names:

    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        items: [
            // ...
            // Nested data objects with the same structure
            // ...
        ]
    }

These are conventional names that you can change via **[fieldName]Expr** options: [nameExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#nameExpr), [sizeExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#sizeExpr), [dateModifiedExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Ajax/Configuration/#dateModifiedExpr), and so on.