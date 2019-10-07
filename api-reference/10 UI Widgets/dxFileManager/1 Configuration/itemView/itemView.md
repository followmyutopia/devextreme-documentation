---
id: dxFileManager.Options.itemView
type: Object
default: null
---
---
##### shortDescription
Configures the file and folder view.

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileManager/CustomThumbnails/jQuery/Light/"
}

![DevExtreme File Manager - Item View](/Content/images/doc/19_2/FileManager/item-view.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            itemView: {
                mode: "details",
                showFolders: false,
                showParentFolder: false
            }
            // ...
        });
    });

---
