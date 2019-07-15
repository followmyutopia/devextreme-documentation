<!--id-->dxPolarChart<!--/id-->
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
<!--module-->viz/polar_chart<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->BaseChart<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **PolarChart** is a widget that visualizes data in a polar coordinate system.
<!--/shortDescription-->

<!--fullDescription-->
The **PolarChart** widget visualizes data in a polar coordinate system. In this system, each point on a plane is determined by the distance from the center (the point's value) and the angle from a fixed direction (the point's argument). To understand how a chart is displayed in a polar coordinate system, imagine how it would be displayed in a rectangular coordinate system and then round off the argument axis in your mind.

<img src="/Content/images/doc/19_2/ChartJS/PolarChart_rectangular.png" alt="DevExtreme HTML5 Charts DataVisualization" style="display:inline-block; vertical-align:bottom" />
<img src="/Content/images/doc/19_2/ChartJS/PolarChart_polar.png" alt="DevExtreme HTML5 Charts PolarChart RadarChart DataVisualization" style="display:inline-block; vertical-align:bottom" />

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartspolarandradarchartspolarandradarchartspolarrose/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/PolarChart/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->