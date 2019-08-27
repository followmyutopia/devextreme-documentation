---
id: ArrayFileProvider.Options.data
type: Array<any>
---
---
##### shortDescription
Specifies an array of data objects that represent files and directories.

---
The data objects should have fields with the following names:

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

These are conventional names that you can change via **[fieldName]Expr** options: [nameExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#nameExpr), [sizeExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#sizeExpr), [dateModifiedExpr](/Documentation/ApiReference/UI_Widgets/dxFileManager/File_Providers/Array/Configuration/#dateModifiedExpr), and so on.