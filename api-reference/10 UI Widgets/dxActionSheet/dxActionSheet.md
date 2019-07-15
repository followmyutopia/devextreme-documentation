<!--id-->dxActionSheet<!--/id-->
<!--widgettree-->
dataSource: [
        { text: "Call" },
        { text: "Send message" },
        { text: "Edit" },
        { text: "Delete" }
    ],
    title: "Choose action",
    visible: true
<!--/widgettree-->
===========================================================================
<!--module-->ui/action_sheet<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->CollectionWidget<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ActionSheet** widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistsactionsheetactionsheetactionsheet/iphone/ios7/default/default"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/ActionSheet/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->