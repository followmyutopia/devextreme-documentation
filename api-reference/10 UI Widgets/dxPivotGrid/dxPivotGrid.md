<!--id-->dxPivotGrid<!--/id-->
<!--widgettree-->
fieldChooser: { width: 400 },
showBorders: true,
dataSource: {
        fields: [
            { dataField: "[Product].[Category]", area: "row" },
            { dataField: "[Product].[Subcategory]", area: "row" },
            { dataField: "[Ship Date].[Calendar Year]", area: "column" },
            { dataField: "[Ship Date].[Month of Year]", area: "column" },
            { dataField: "[Measures].[Customer Count]", area: "data" }
        ],
        store: {
            type: "xmla",
            url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
            catalog: "Adventure Works DW Standard Edition",
            cube: "Adventure Works"
        }
    }
<!--/widgettree-->
===========================================================================
<!--module-->ui/pivot_grid<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->Widget<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **PivotGrid** is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/data_grid-pivot_grid_data_binding-local_data_source"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->