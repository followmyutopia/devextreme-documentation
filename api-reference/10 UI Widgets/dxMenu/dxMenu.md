<!--id-->dxMenu<!--/id-->
<!--widgettree-->
dataSource: [
    { text: "Video Players" },
    { text: "Televisions" },
    {
        text: "Monitors",
        items: [
            { text: "DesktopLCD 19" },
            { text: "DesktopLCD 21" },
            { text: "DesktopLED 21" }
        ]
    }
]
<!--/widgettree-->
===========================================================================
<!--module-->ui/menu<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxMenuBase<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Menu** widget is a panel with clickable items. A click on an item opens a drop-down menu, which can contain several submenus.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationmenumenumenu/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Menu/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->