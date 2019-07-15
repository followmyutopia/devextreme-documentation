<!--id-->dxFilterBuilder<!--/id-->
<!--widgettree-->
allowHierarchicalFields: true,
value: [["UnitPrice", "=", 12], "and", ["Shipped", "=", "2017/12/1"]],
fields: [{
    dataField: "Category.Name",
    lookup: {
        dataSource: [
            "Televisions",
            "Monitors",
            "Projectors"
        ]
    }
}, {
    dataField: "Category.Description"
}, {
    dataField: "UnitPrice",
    dataType: "number"
}, {
    dataField: "Shipped",
    dataType: "date"
}],
onEditorPreparing: function(e) { e.editorOptions.width = 125; }
<!--/widgettree-->
===========================================================================
<!--module-->ui/filter_builder<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->Widget<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **FilterBuilder** widget allows a user to build complex filter expressions with an unlimited number of filter conditions, combined by logical operations using the UI.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/jQuery/Light/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/FilterBuilder/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->