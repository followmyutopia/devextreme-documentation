<!--id-->dxTabPanel<!--/id-->
<!--widgettree-->
dataSource: [
        {
            title: "Info",
            text: "John Smith, 1986"
        },
        {
            title: "Contacts",
            text: "phone: (555)555-5555, email: John.Smith@example.com"
        },
        {
            title: "Address",
            text: "CA San Francisco Stanford Ave st."
        }
],
height: 200
<!--/widgettree-->
===========================================================================
<!--module-->ui/tab_panel<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->dxMultiView<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TabPanel** is a widget consisting of the [Tabs](/Documentation/Guide/Widgets/Tabs/Overview/) and [MultiView](/Documentation/Guide/Widgets/MultiView/Overview/) widgets. It automatically synchronizes the selected tab with the currently displayed view and vice versa.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationtabpaneltabpaneltabpanel/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/TabPanel/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->