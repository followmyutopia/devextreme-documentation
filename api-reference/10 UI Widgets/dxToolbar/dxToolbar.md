<!--id-->dxToolbar<!--/id-->
<!--widgettree-->
dataSource: [{
        text: "Contacts",
        location: "before"
    }, {
        text: "Missed"
    }, {
        text: "Favorites",
        location: "after"
    }
]
<!--/widgettree-->
===========================================================================
<!--module-->ui/toolbar<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->CollectionWidget<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Toolbar/Overview/jQuery/Light/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Toolbar/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->