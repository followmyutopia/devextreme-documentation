<!--id-->dxDiagram.createDataSource(parameters)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Populates the toolbox with items from a data source.
<!--/shortDescription-->

<!--paramName1-->parameters<!--/paramName1-->
<!--paramType1-->DiagramDataSourceParameters<!--/paramType1-->
<!--paramDescription1-->
Data source parameters.
<!--/paramDescription1-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Diagram/DataSources/jQuery/Light/"
}

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var diagram = $("#diagram").dxDiagram()
            .dxDiagram("instance");
        diagram.createDataSource({
            key: "0",
            title: "Employees",
            nodes: {
                dataSource: employees,
                keyExpr: "ID",
                textExpr: function(item) {
                    return item && item.Full_Name.replace(" ", "\n");
                },
                parentKeyExpr: "Head_ID"
            },
            layout: "tree"
        });
    });
    
---
<!--/fullDescription-->