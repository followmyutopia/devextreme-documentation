<!--id-->dxDiagram.Options.customShapes<!--/id-->
===========================================================================
<!--default-->[]<!--/default-->
<!--type-->Array<Object><!--/type-->
===========================================================================

<!--shortDescription-->
An array of custom shapes.
<!--/shortDescription-->

<!--fullDescription-->
Use the **customShapes** option to extend a collection of built-in shapes with custom shapes. Custom shapes are displayed in the toolbox panel’s **Custom** tab.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Diagram/CustomShapes/jQuery/Light/"
}

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram({
            customShapes: [{
                id: 0,
                title: "Internet",
                svgUrl: "images/shapes/internet.svg",
                defaultWidth: 1.27,
                defaultHeight: 1.27,
                allowHasText: false
            },
            {
                id: 1,
                title: "Laptop",
                svgUrl: "images/shapes/laptop.svg",
                defaultWidth: 1.27,
                defaultHeight: 1.27,
                allowHasText: false
            },
            // ...
            ]
        }).dxDiagram("instance");
    });    
---

<!--/fullDescription-->
