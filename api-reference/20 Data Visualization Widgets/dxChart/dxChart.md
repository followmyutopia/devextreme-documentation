<!--id-->dxChart<!--/id-->
<!--widgettree-->
dataSource: [{
    arg: "Monday",
    val: 3
}, {
    arg: "Tuesday",
    val: 2
}, {
    arg: "Wednesday",
    val: 3
}, {
    arg: "Thursday",
    val: 4
}, {
    arg: "Friday",
    val: 6
}, {
    arg: "Saturday",
    val: 11
}, {
    arg: "Sunday",
    val: 4
}]
<!--/widgettree-->
===========================================================================
<!--module-->viz/chart<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->BaseChart<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Chart** is a widget that visualizes data from a local or remote storage using a great variety of [series types](/Documentation/Guide/Widgets/Chart/Series_Types/) along with different interactive elements, such as [tooltips](/Documentation/Guide/Widgets/Chart/Tooltips/Overview/), [crosshair pointer](/Documentation/Guide/Widgets/Chart/Crosshair/), [legend](/Documentation/Guide/Widgets/Chart/Legend/Overview/), etc.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsbarseriessimplestsingle/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Chart/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->