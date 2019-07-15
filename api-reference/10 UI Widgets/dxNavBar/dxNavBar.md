<!--id-->dxNavBar<!--/id-->
<!--widgettree-->
dataSource: [{
        text: "Contacts",
        icon: "user"
    }, {
        text: "Missed",
        icon: "clock",
        badge: 3
    }, {
        text: "Favorites",
        icon: "favorites"
    }
]
<!--/widgettree-->
===========================================================================
<!--module-->ui/nav_bar<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxTabs<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **NavBar** is a widget that navigates the application views.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationnavbarnavbarnavbar/iphone/ios7/default/default"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/NavBar/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->