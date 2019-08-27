---
id: dxDiagram.Options.edges
type: Object
default: null
---
---
##### shortDescription
An array of diagram edges.

---
Use the **edges** option to populate an array of diagram edges.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Diagram/NodesAndEdgesArrays/jQuery/Light/"
}

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#diagram").dxDiagram({
            nodes: {
                dataSource: orgItems
            },
            edges: {
                dataSource: orgLinks
            },
            layout: "tree"
        });
    });
    
---