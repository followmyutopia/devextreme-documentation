---
id: dxTabs
module: ui/tabs
export: default
inherits: CollectionWidget
---
---
##### shortDescription
The **Tabs** is a tab strip used to switch between pages or views. This widget is included in the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) widget, but you can use the **Tabs** separately as well.

##### widgettree
dataSource: [
    { text: "Home", icon: "home" },
    { text: "About", icon: "info" }
]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationtabstabstabs/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Tabs/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget