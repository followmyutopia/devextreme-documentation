---
id: dxDiagram.Options.readOnly
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the diagram is read-only.
---
Set the **readOnly** option to **true** to prohibit users from editing the diagram.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Diagram/ReadOnly/jQuery/Light/"
}

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            readOnly: true,
            toolbox: {
                visible: false
            },
            propertiesPanel: {
                visible: false
            }
        }).dxDiagram("instance");

---
