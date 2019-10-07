---
id: dxFileManager.Options.currentPath
type: String
default: ''
---
---
##### shortDescription
Specifies the path that is used when the **FileManager** is initialized.
---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/jQuery/Light/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            currentPath: "Documents/Images"
            // ...
        });
    });

---
