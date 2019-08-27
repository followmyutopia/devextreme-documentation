---
id: dxDiagram.Options.nodes
type: Object
default: null
---
---
##### shortDescription
An array of diagram nodes.

---
Use the **nodes** option to populate an array of diagram nodes.

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