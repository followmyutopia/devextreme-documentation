<!--id-->dxContextMenu<!--/id-->
<!--widgettree-->
dataSource: [
    { text: "Hide" },
    { text: "Delete" },
    {
        text: "Clipboard",
        items: [
            { text: "Copy" },
            { text: "Clear" },
            { text: "Paste" }
        ]
    }
],
visible: true
<!--/widgettree-->
===========================================================================
<!--module-->ui/context_menu<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxMenuBase<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ContextMenu** widget displays a single- or multi-level context menu. An end user invokes this menu by a right click or a long press.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistscontextmenucontextmenucontextmenu/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/ContextMenu/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->