<!--id-->dxDiagram.Options.nodes<!--/id-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
An array of diagram nodes.
<!--/shortDescription-->

<!--fullDescription-->
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

<!--/fullDescription-->